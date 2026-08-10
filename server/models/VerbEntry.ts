import mongoose from 'mongoose';
import { getModel } from '../utils/mongoose';
import { type VerbEntry, partOfSpeechOptions } from '../../shared/types/verbs';

const verbEntrySchema = new mongoose.Schema<VerbEntry>(
  {
    _id: { type: String, required: true },
    familyId: { type: String, required: true, index: true },
    kind: { type: String, required: true },
    role: { type: String },
    partOfSpeech: { type: String, required: true, enum: [...partOfSpeechOptions], index: true },
    word: { type: String, required: true, index: true },
    normalizedWord: { type: String, required: true },
    browseWord: { type: String, required: true, index: true },
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

verbEntrySchema.index(
  { normalizedWord: 1 },
  {
    unique: true,
    partialFilterExpression: {
      normalizedWord: { $type: 'string' }
    }
  }
);
verbEntrySchema.index({ createdAt: -1 });
verbEntrySchema.index({ updatedAt: -1 });

export const VerbEntryModel = getModel<VerbEntry>('VerbEntry', verbEntrySchema);
