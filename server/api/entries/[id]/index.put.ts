import { randomUUID } from 'node:crypto';
import { VerbEntryModel } from '../../../models/VerbEntry';
import { VerbExampleModel } from '../../../models/VerbExample';
import { VerbFamilyModel } from '../../../models/VerbFamily';
import {
  createDuplicateVerbEntryError,
  findDuplicateVerbEntry,
  isDuplicateVerbEntryMongoError
} from '../../../utils/verb-entry-duplicates';
import { resolveVerbEntryKind } from '../../../../shared/utils/verb-entry-kind';
import type { PartOfSpeech, VerbEntryKind } from '../../../../shared/types/verbs';
import { resolvePartOfSpeech } from '../../../utils/part-of-speech';
import { buildBrowseWordFromParts, normalizeEntryWord } from '../../../../shared/utils/entry-word-normalization';
import { runInTransaction } from '../../../utils/transactions';

interface UpdateEntryBody {
  kind?: VerbEntryKind;
  partOfSpeech?: PartOfSpeech;
  word?: string;
  translationRu?: string;
  explanationRu?: string;
  prefix?: string;
  isSeparable?: boolean | null;
  exampleTextDe?: string;
  exampleTranslationRu?: string;
}

function normalizeRequiredText(value?: string): string {
  return String(value || '').trim();
}

function normalizeOptionalText(value?: string): string | undefined {
  const normalized = String(value || '').trim();

  return normalized.length > 0 ? normalized : undefined;
}

function normalizeOptionalPrefix(value?: string): string | null {
  const normalized = String(value || '').trim();

  return normalized.length > 0 ? normalized : null;
}

function normalizeNullableBoolean(value: unknown): boolean | null {
  if (value === true || value === false) {
    return value;
  }

  if (value === 'true') {
    return true;
  }

  if (value === 'false') {
    return false;
  }

  return null;
}

function normalizeEditableKind(bodyKind: unknown, currentKind: VerbEntryKind): VerbEntryKind {
  if (currentKind === 'base') {
    return 'base';
  }

  return bodyKind === 'collocation' ? 'collocation' : 'derived';
}

export default defineEventHandler(async (event) => {
  const entryId = String(getRouterParam(event, 'id') || '').trim();
  const body = await readBody<UpdateEntryBody>(event);
  const word = normalizeRequiredText(body.word);
  const translationRu = normalizeRequiredText(body.translationRu);
  const exampleTextDe = normalizeRequiredText(body.exampleTextDe);
  const exampleTranslationRu = normalizeOptionalText(body.exampleTranslationRu);

  if (!entryId) {
    throw createError({
      statusCode: 400,
      message: 'Не найдено слово для обновления.'
    });
  }

  if (!word) {
    throw createError({
      statusCode: 400,
      message: 'Укажи слово.'
    });
  }

  if (!translationRu) {
    throw createError({
      statusCode: 400,
      message: 'Укажи перевод.'
    });
  }

  const existingEntry = await VerbEntryModel.findById(entryId).lean();

  if (!existingEntry) {
    throw createError({
      statusCode: 404,
      message: 'Слово не найдено.'
    });
  }

  const duplicateEntry = await findDuplicateVerbEntry(word, entryId);

  if (duplicateEntry) {
    throw createDuplicateVerbEntryError(word);
  }

  const updatedAt = new Date().toISOString();
  const currentKind = resolveVerbEntryKind(existingEntry);
  const nextKind = normalizeEditableKind(body.kind, currentKind);
  const config = useRuntimeConfig();
  const partOfSpeech = await resolvePartOfSpeech({
    word,
    kind: nextKind,
    requestedPartOfSpeech: currentKind === 'base' ? body.partOfSpeech : existingEntry.partOfSpeech,
    aiConfig: {
      enabled: config.aiEnabled === 'true',
      provider: config.aiProvider,
      apiKey: config.ollamaApiKey,
      model: config.ollamaModel
    }
  });

  try {
    await runInTransaction(async (session) => {
      await VerbEntryModel.updateOne(
        { _id: entryId },
        {
          kind: nextKind,
          partOfSpeech,
          word,
          normalizedWord: normalizeEntryWord(word),
          browseWord: buildBrowseWordFromParts(word, partOfSpeech),
          translationRu,
          explanationRu: normalizeOptionalText(body.explanationRu),
          prefix: nextKind === 'derived' ? normalizeOptionalPrefix(body.prefix) : null,
          isSeparable: nextKind === 'derived' ? normalizeNullableBoolean(body.isSeparable) : null,
          updatedAt
        },
        { session }
      );

      const primaryExample = await VerbExampleModel.findOne({ entryId })
        .sort({ createdAt: 1 })
        .session(session)
        .lean();

      if (exampleTextDe) {
        if (primaryExample?._id) {
          await VerbExampleModel.updateOne(
            { _id: primaryExample._id },
            {
              textDe: exampleTextDe,
              translationRu: exampleTranslationRu,
              updatedAt
            },
            { session }
          );
        } else {
          await VerbExampleModel.create(
            [
              {
                _id: `example_${randomUUID()}`,
                entryId,
                textDe: exampleTextDe,
                translationRu: exampleTranslationRu,
                createdAt: updatedAt,
                updatedAt
              }
            ],
            { session }
          );
        }
      } else if (primaryExample?._id) {
        await VerbExampleModel.deleteOne({ _id: primaryExample._id }, { session });
      }

      await VerbFamilyModel.updateOne(
        { _id: existingEntry.familyId },
        { updatedAt },
        { session }
      );
    });
  } catch (error) {
    if (isDuplicateVerbEntryMongoError(error)) {
      throw createDuplicateVerbEntryError(word);
    }

    throw error;
  }

  return {
    ok: true,
    familyId: existingEntry.familyId,
    entryId,
    kind: nextKind
  };
});
