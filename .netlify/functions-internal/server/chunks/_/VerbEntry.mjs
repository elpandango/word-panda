import mongoose from 'mongoose';

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

export { VerbEntryModel as V, getModel as g };
//# sourceMappingURL=VerbEntry.mjs.map
