import { d as defineEventHandler, e as getQuery } from '../../nitro/nitro.mjs';
import { V as VerbEntryModel } from '../../_/VerbEntry.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'mongoose';

const search_get = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const q = String(query.q || "").trim();
  if (!q) {
    return {
      query: q,
      items: []
    };
  }
  const escapedQuery = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const items = await VerbEntryModel.find({
    word: { $regex: escapedQuery, $options: "i" }
  }).sort({ updatedAt: -1 }).lean();
  return {
    query: q,
    items
  };
});

export { search_get as default };
//# sourceMappingURL=search.get.mjs.map
