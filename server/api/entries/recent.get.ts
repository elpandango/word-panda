import { VerbEntryModel } from '../../models/VerbEntry';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const parsedLimit = Number(query.limit ?? 5);
  const limit = Number.isFinite(parsedLimit)
    ? Math.min(Math.max(Math.trunc(parsedLimit), 1), 20)
    : 5;

  const items = await VerbEntryModel.find()
    .sort({ createdAt: -1 })
    .limit(limit)
    .lean();

  return {
    limit,
    items
  };
});
