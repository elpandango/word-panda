import { randomUUID } from 'node:crypto';
import { VerbEntryModel } from '../../models/VerbEntry';
import { VerbExampleModel } from '../../models/VerbExample';
import { VerbFamilyModel } from '../../models/VerbFamily';
import {
  createDuplicateVerbEntryError,
  findDuplicateVerbEntry,
  isDuplicateVerbEntryMongoError
} from '../../utils/verb-entry-duplicates';
import { resolveVerbEntryKind } from '../../../shared/utils/verb-entry-kind';
import type { PartOfSpeech, VerbEntryKind } from '../../../shared/types/verbs';
import { resolvePartOfSpeech } from '../../utils/part-of-speech';
import { buildBrowseWordFromParts, normalizeEntryWord } from '../../../shared/utils/entry-word-normalization';
import { runInTransaction } from '../../utils/transactions';

interface CreateEntryBody {
  familyId?: string;
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

function normalizeRelatedKind(value: unknown): 'derived' | 'collocation' {
  return value === 'collocation' ? 'collocation' : 'derived';
}

export default defineEventHandler(async (event) => {
  const body = await readBody<CreateEntryBody>(event);
  const familyId = normalizeRequiredText(body.familyId);
  const kind = normalizeRelatedKind(body.kind);
  const word = normalizeRequiredText(body.word);
  const translationRu = normalizeRequiredText(body.translationRu);
  const exampleTextDe = normalizeRequiredText(body.exampleTextDe);
  const exampleTranslationRu = normalizeOptionalText(body.exampleTranslationRu);

  if (!familyId) {
    throw createError({
      statusCode: 400,
      message: 'Не найдено семейство для добавления записи.'
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

  const family = await VerbFamilyModel.findById(familyId).lean();

  if (!family) {
    throw createError({
      statusCode: 404,
      message: 'Семейство не найдено.'
    });
  }

  const duplicateEntry = await findDuplicateVerbEntry(word);

  if (duplicateEntry) {
    throw createDuplicateVerbEntryError(word);
  }

  const createdAt = new Date().toISOString();
  const entryId = `entry_${randomUUID()}`;
  const config = useRuntimeConfig();
  const partOfSpeech = await resolvePartOfSpeech({
    word,
    kind,
    requestedPartOfSpeech: body.partOfSpeech,
    aiConfig: {
      enabled: config.aiEnabled === 'true',
      provider: config.aiProvider,
      apiKey: config.ollamaApiKey,
      model: config.ollamaModel
    }
  });

  try {
    await runInTransaction(async (session) => {
      await VerbEntryModel.create(
        [
          {
            _id: entryId,
            familyId,
            kind,
            partOfSpeech,
            word,
            normalizedWord: normalizeEntryWord(word),
            browseWord: buildBrowseWordFromParts(word, partOfSpeech),
            translationRu,
            explanationRu: normalizeOptionalText(body.explanationRu),
            prefix: kind === 'derived' ? normalizeOptionalPrefix(body.prefix) : null,
            isSeparable: kind === 'derived' ? normalizeNullableBoolean(body.isSeparable) : null,
            source: 'manual',
            status: 'draft',
            createdAt,
            updatedAt: createdAt
          }
        ],
        { session }
      );

      if (exampleTextDe) {
        await VerbExampleModel.create(
          [
            {
              _id: `example_${randomUUID()}`,
              entryId,
              textDe: exampleTextDe,
              translationRu: exampleTranslationRu,
              createdAt,
              updatedAt: createdAt
            }
          ],
          { session }
        );
      }

      await VerbFamilyModel.updateOne({ _id: familyId }, { updatedAt: createdAt }, { session });
    });
  } catch (error) {
    if (isDuplicateVerbEntryMongoError(error)) {
      throw createDuplicateVerbEntryError(word);
    }

    throw error;
  }

  return {
    ok: true,
    familyId,
    entryId,
    kind: resolveVerbEntryKind({ kind })
  };
});
