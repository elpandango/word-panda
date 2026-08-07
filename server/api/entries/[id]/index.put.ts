import { randomUUID } from 'node:crypto';
import { VerbEntryModel } from '../../../models/VerbEntry';
import { VerbExampleModel } from '../../../models/VerbExample';
import { VerbFamilyModel } from '../../../models/VerbFamily';

interface UpdateEntryBody {
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

  const updatedAt = new Date().toISOString();

  await VerbEntryModel.updateOne(
    { _id: entryId },
    {
      word,
      translationRu,
      explanationRu: normalizeOptionalText(body.explanationRu),
      prefix: existingEntry.role === 'variant' ? normalizeOptionalPrefix(body.prefix) : null,
      isSeparable:
        existingEntry.role === 'variant' ? normalizeNullableBoolean(body.isSeparable) : null,
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
    entryId
  };
});
