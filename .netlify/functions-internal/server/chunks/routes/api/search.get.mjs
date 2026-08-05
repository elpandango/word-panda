import { d as defineEventHandler, e as getQuery } from '../../nitro/nitro.mjs';
import mongoose from 'mongoose';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';

function getModel(name, schema) {
  return mongoose.models[name] || mongoose.model(name, schema);
}

const verbEntrySchema = new mongoose.Schema(
  {
    familyId: { type: String, required: true, index: true },
    role: { type: String, required: true },
    word: { type: String, required: true, index: true },
    translationRu: { type: String },
    meaningDe: { type: String },
    explanationRu: { type: String },
    prefix: { type: String, default: null },
    isSeparable: { type: Boolean, default: null },
    source: { type: String, required: true },
    status: { type: String, required: true },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true }
  },
  { versionKey: false }
);
const VerbEntryModel = getModel("VerbEntry", verbEntrySchema);

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
