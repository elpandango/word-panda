import { randomUUID } from 'node:crypto';
import { VerbEntryModel } from '../../models/VerbEntry';
import { VerbExampleModel } from '../../models/VerbExample';
import { VerbFamilyModel } from '../../models/VerbFamily';
import {
  createDuplicateVerbEntryError,
  findDuplicateVerbEntry
} from '../../utils/verb-entry-duplicates';
import { buildFamilySlug, ensureFamilySlugAvailable } from '../../utils/family-slug';

interface CreateFamilyBody {
  word?: string;
  translationRu?: string;
  explanationRu?: string;
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

export default defineEventHandler(async (event) => {
  const body = await readBody<CreateFamilyBody>(event);
  const word = normalizeRequiredText(body.word);
  const translationRu = normalizeRequiredText(body.translationRu);
  const exampleTextDe = normalizeRequiredText(body.exampleTextDe);
  const exampleTranslationRu = normalizeOptionalText(body.exampleTranslationRu);

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

  const duplicateEntry = await findDuplicateVerbEntry(word);

  if (duplicateEntry) {
    throw createDuplicateVerbEntryError(word);
  }

  const slug = await ensureFamilySlugAvailable(buildFamilySlug(word));
  const createdAt = new Date().toISOString();
  const familyId = `family_${randomUUID()}`;
  const entryId = `entry_${randomUUID()}`;

  await VerbFamilyModel.create({
    _id: familyId,
    baseEntryId: entryId,
    slug,
    createdAt,
    updatedAt: createdAt
  });

  await VerbEntryModel.create({
    _id: entryId,
    familyId,
    role: 'base',
    word,
    translationRu,
    explanationRu: normalizeOptionalText(body.explanationRu),
    prefix: null,
    isSeparable: null,
    source: 'manual',
    status: 'draft',
    createdAt,
    updatedAt: createdAt
  });

  if (exampleTextDe) {
    await VerbExampleModel.create({
      _id: `example_${randomUUID()}`,
      entryId,
      textDe: exampleTextDe,
      translationRu: exampleTranslationRu,
      createdAt,
      updatedAt: createdAt
    });
  }

  return {
    ok: true,
    familyId,
    entryId,
    slug
  };
});
