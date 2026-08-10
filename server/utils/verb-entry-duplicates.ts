import { VerbEntryModel } from '../models/VerbEntry';
import { normalizeEntryWord } from '../../shared/utils/entry-word-normalization';

export async function findDuplicateVerbEntry(word: string, excludeEntryId?: string) {
  const normalizedWord = normalizeEntryWord(word);

  if (!normalizedWord) {
    return null;
  }

  const filter: Record<string, unknown> = {
    normalizedWord
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

export function isDuplicateVerbEntryMongoError(error: unknown): boolean {
  if (!error || typeof error !== 'object') {
    return false;
  }

  const candidate = error as { code?: number; keyPattern?: Record<string, number> };

  return candidate.code === 11000 && Boolean(candidate.keyPattern?.normalizedWord);
}
