import { VerbEntryModel } from '../models/VerbEntry';
import { VerbFamilyModel } from '../models/VerbFamily';

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

  return {
    query: q,
    items: items.map((item) => ({
      ...item,
      familyBaseWord: familyBaseWordById.get(item.familyId) || item.word
    }))
  };
});
