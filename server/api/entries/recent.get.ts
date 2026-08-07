import { VerbEntryModel } from '../../models/VerbEntry';
import { VerbFamilyModel } from '../../models/VerbFamily';

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
  const familySlugById = new Map(
    families.map((family) => [String(family._id), family.slug])
  );

  return {
    limit,
    items: items.map((item) => ({
      ...item,
      familySlug: familySlugById.get(item.familyId) || null
    }))
  };
});
