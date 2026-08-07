import { VerbFamilyModel } from '../models/VerbFamily';
import { slugifyFamilyWord } from '../../shared/utils/family-slug';

export function buildFamilySlug(word: string): string {
  return slugifyFamilyWord(word);
}

export async function ensureFamilySlugAvailable(slug: string, excludeFamilyId?: string) {
  const normalizedSlug = String(slug || '').trim();

  if (!normalizedSlug) {
    throw createError({
      statusCode: 400,
      message: 'Не удалось сформировать slug для семейства.'
    });
  }

  const filter: Record<string, unknown> = { slug: normalizedSlug };

  if (excludeFamilyId) {
    filter._id = { $ne: excludeFamilyId };
  }

  const existingFamily = await VerbFamilyModel.findOne(filter).lean();

  if (existingFamily) {
    throw createError({
      statusCode: 409,
      message: `Slug "${normalizedSlug}" уже занят.`
    });
  }

  return normalizedSlug;
}
