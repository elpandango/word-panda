import { VerbEntryModel } from '../models/VerbEntry';

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

  return {
    query: q,
    items
  };
});
