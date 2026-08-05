import mongoose from 'mongoose'
import { getModel } from '../utils/mongoose'
import type { VerbExample } from '../../shared/types/verbs'

const verbExampleSchema = new mongoose.Schema<VerbExample>(
  {
    _id: { type: String, required: true },
    entryId: { type: String, required: true, index: true },
    textDe: { type: String, required: true },
    translationRu: { type: String },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true }
  },
  { versionKey: false }
)

export const VerbExampleModel = getModel<VerbExample>('VerbExample', verbExampleSchema)
