import { d as defineEventHandler, g as getRouterParam, c as createError } from '../../../nitro/nitro.mjs';
import { g as getModel, V as VerbEntryModel } from '../../../_/VerbEntry.mjs';
import mongoose from 'mongoose';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';

const verbExampleSchema = new mongoose.Schema(
  {
    entryId: { type: String, required: true, index: true },
    textDe: { type: String, required: true },
    translationRu: { type: String },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true }
  },
  { versionKey: false }
);
const VerbExampleModel = getModel("VerbExample", verbExampleSchema);

const verbFamilySchema = new mongoose.Schema(
  {
    baseEntryId: { type: String, required: true },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true }
  },
  { versionKey: false }
);
const VerbFamilyModel = getModel("VerbFamily", verbFamilySchema);

function toPlainObject(value) {
  return JSON.parse(JSON.stringify(value));
}
const _id__get = defineEventHandler(async (event) => {
  var _a;
  const familyId = getRouterParam(event, "id");
  if (!familyId) {
    throw createError({
      statusCode: 400,
      message: "Family id is required."
    });
  }
  const family = await VerbFamilyModel.findById(familyId).lean();
  if (!family) {
    return {
      familyId,
      found: false,
      family: null,
      baseEntry: null,
      variants: [],
      examplesByEntryId: {}
    };
  }
  const normalizedFamily = toPlainObject(family);
  const familyRef = String(normalizedFamily._id);
  const entries = await VerbEntryModel.find({ familyId: familyRef }).sort({ createdAt: 1 }).lean();
  const normalizedEntries = entries.map((entry) => toPlainObject(entry));
  const baseEntry = (_a = normalizedEntries.find((entry) => String(entry._id) === normalizedFamily.baseEntryId)) != null ? _a : null;
  const variants = normalizedEntries.filter((entry) => entry.role === "variant");
  const entryIds = normalizedEntries.map((entry) => String(entry._id));
  const examples = entryIds.length ? await VerbExampleModel.find({ entryId: { $in: entryIds } }).sort({ createdAt: 1 }).lean() : [];
  const normalizedExamples = examples.map((example) => toPlainObject(example));
  const examplesByEntryId = normalizedExamples.reduce((accumulator, example) => {
    const entryId = String(example.entryId);
    if (!accumulator[entryId]) {
      accumulator[entryId] = [];
    }
    accumulator[entryId].push(example);
    return accumulator;
  }, {});
  return {
    familyId,
    found: true,
    family: normalizedFamily,
    baseEntry,
    variants,
    examplesByEntryId
  };
});

export { _id__get as default };
//# sourceMappingURL=_id_.get.mjs.map
