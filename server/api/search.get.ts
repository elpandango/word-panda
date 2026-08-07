import { VerbEntryModel } from '../models/VerbEntry';
import { VerbFamilyModel } from '../models/VerbFamily';

function normalizeSearchText(value: string): string {
  return String(value || '')
    .trim()
    .toLocaleLowerCase('de');
}

function getSearchRank(word: string, query: string): number {
  const normalizedWord = normalizeSearchText(word);
  const normalizedQuery = normalizeSearchText(query);

  if (normalizedWord === normalizedQuery) {
    return 0;
  }

  if (normalizedWord.startsWith(normalizedQuery)) {
    return 1;
  }

  if (normalizedWord.includes(normalizedQuery)) {
    return 2;
  }

  return 3;
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const q = String(query.q || '').trim();

  if (!q) {
    return {
      query: q,
      items: []
    };
  }

  const escapedQuery = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const items = await VerbEntryModel.find({
    word: { $regex: escapedQuery, $options: 'i' }
  })
    .sort({ updatedAt: -1 })
    .lean();

  const familyIds = [...new Set(items.map((item) => item.familyId))];
  const families = await VerbFamilyModel.find({ _id: { $in: familyIds } }).lean();
  const baseEntryIds = families.map((family) => family.baseEntryId);
  const baseEntries = await VerbEntryModel.find({ _id: { $in: baseEntryIds } }).lean();

  const familyBaseWordById = new Map(
    families.map((family) => {
      const baseEntry = baseEntries.find((entry) => String(entry._id) === family.baseEntryId);

      return [String(family._id), baseEntry?.word || null];
    })
  );
  const familySlugById = new Map(families.map((family) => [String(family._id), family.slug]));
  const rankedItems = [...items].sort((left, right) => {
    const rankDiff = getSearchRank(left.word, q) - getSearchRank(right.word, q);

    if (rankDiff !== 0) {
      return rankDiff;
    }

    const leftIsBase = left.role === 'base' ? 0 : 1;
    const rightIsBase = right.role === 'base' ? 0 : 1;
    const roleDiff = leftIsBase - rightIsBase;

    if (roleDiff !== 0) {
      return roleDiff;
    }

    const lengthDiff = left.word.length - right.word.length;

    if (lengthDiff !== 0) {
      return lengthDiff;
    }

    return left.word.localeCompare(right.word, 'de', { sensitivity: 'base' });
  });

  return {
    query: q,
    items: rankedItems.map((item) => ({
      ...item,
      familyBaseWord: familyBaseWordById.get(item.familyId) || item.word,
      familySlug: familySlugById.get(item.familyId) || null
    }))
  };
});
