import { VerbEntryModel } from '../../models/VerbEntry';
import { VerbFamilyModel } from '../../models/VerbFamily';
import { resolveVerbEntryKind } from '../../../shared/utils/verb-entry-kind';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const parsedLimit = Number(query.limit ?? 5);
  const limit = Number.isFinite(parsedLimit)
    ? Math.min(Math.max(Math.trunc(parsedLimit), 1), 20)
    : 5;

  const items = await VerbEntryModel.find().sort({ createdAt: -1 }).limit(limit).lean();
  const familyIds = [...new Set(items.map((item) => item.familyId))];
  const families = familyIds.length
    ? await VerbFamilyModel.find({ _id: { $in: familyIds } }).lean()
    : [];
  const baseEntryIds = families.map((family) => family.baseEntryId);
  const baseEntries = baseEntryIds.length
    ? await VerbEntryModel.find({ _id: { $in: baseEntryIds } }).lean()
    : [];
  const familyBaseWordById = new Map(
    families.map((family) => {
      const baseEntry = baseEntries.find((entry) => String(entry._id) === family.baseEntryId);

      return [String(family._id), baseEntry?.word || null];
    })
  );
  const familySlugById = new Map(families.map((family) => [String(family._id), family.slug]));

  return {
    limit,
    items: items.map((item) => ({
      ...item,
      kind: resolveVerbEntryKind(item),
      familyBaseWord: familyBaseWordById.get(item.familyId) || item.word,
      familySlug: familySlugById.get(item.familyId) || null
    }))
  };
});
