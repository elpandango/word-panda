import mongoose from 'mongoose'
import { getModel } from '../utils/mongoose'
import type { VerbFamily } from '../../shared/types/verbs'

const verbFamilySchema = new mongoose.Schema<VerbFamily>(
  {
    baseEntryId: { type: String, required: true },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true }
  },
  { versionKey: false }
)

export const VerbFamilyModel = getModel<VerbFamily>('VerbFamily', verbFamilySchema)
