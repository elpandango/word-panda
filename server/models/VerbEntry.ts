import mongoose from 'mongoose'
import { getModel } from '../utils/mongoose'
import type { VerbEntry } from '~/shared/types/verbs'

const verbEntrySchema = new mongoose.Schema<VerbEntry>(
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
)

export const VerbEntryModel = getModel<VerbEntry>('VerbEntry', verbEntrySchema)
