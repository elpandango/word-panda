import { VerbEntryModel } from '../models/VerbEntry';

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export async function findDuplicateVerbEntry(word: string, excludeEntryId?: string) {
  const normalizedWord = String(word || '').trim();

  if (!normalizedWord) {
    return null;
  }

  const filter: Record<string, unknown> = {
    word: {
      $regex: `^${escapeRegex(normalizedWord)}$`,
      $options: 'i'
    }
  };

  if (excludeEntryId) {
    filter._id = { $ne: excludeEntryId };
  }

  return VerbEntryModel.findOne(filter).lean();
}

export function createDuplicateVerbEntryError(word: string) {
  return createError({
    statusCode: 409,
    message: `Слово "${word}" уже есть в базе.`,
    data: {
      code: 'DUPLICATE_WORD',
      word
    }
  });
}
