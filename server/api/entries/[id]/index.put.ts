import { randomUUID } from 'node:crypto';
import { VerbEntryModel } from '../../../models/VerbEntry';
import { VerbExampleModel } from '../../../models/VerbExample';
import { VerbFamilyModel } from '../../../models/VerbFamily';
import {
  createDuplicateVerbEntryError,
  findDuplicateVerbEntry
} from '../../../utils/verb-entry-duplicates';
import { resolveVerbEntryKind } from '../../../../shared/utils/verb-entry-kind';
import type { PartOfSpeech, VerbEntryKind } from '../../../../shared/types/verbs';
import { resolvePartOfSpeech } from '../../../utils/part-of-speech';

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

  await VerbEntryModel.updateOne(
    { _id: entryId },
    {
      kind: nextKind,
      partOfSpeech,
      word,
      translationRu,
      explanationRu: normalizeOptionalText(body.explanationRu),
      prefix: nextKind === 'derived' ? normalizeOptionalPrefix(body.prefix) : null,
      isSeparable: nextKind === 'derived' ? normalizeNullableBoolean(body.isSeparable) : null,
      updatedAt
    }
  );

  const primaryExample = await VerbExampleModel.findOne({ entryId }).sort({ createdAt: 1 }).lean();

  if (exampleTextDe) {
    if (primaryExample?._id) {
      await VerbExampleModel.updateOne(
        { _id: primaryExample._id },
        {
          textDe: exampleTextDe,
          translationRu: exampleTranslationRu,
          updatedAt
        }
      );
    } else {
      await VerbExampleModel.create({
        _id: `example_${randomUUID()}`,
        entryId,
        textDe: exampleTextDe,
        translationRu: exampleTranslationRu,
        createdAt: updatedAt,
        updatedAt
      });
    }
  } else if (primaryExample?._id) {
    await VerbExampleModel.deleteOne({ _id: primaryExample._id });
  }

  await VerbFamilyModel.updateOne({ _id: existingEntry.familyId }, { updatedAt });

  return {
    ok: true,
    familyId: existingEntry.familyId,
    entryId,
    kind: nextKind
  };
});
