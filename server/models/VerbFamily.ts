import mongoose from 'mongoose';
import { getModel } from '../utils/mongoose';
import type { VerbFamily } from '../../shared/types/verbs';

const verbFamilySchema = new mongoose.Schema<VerbFamily>(
  {
    _id: { type: String, required: true },
    baseEntryId: { type: String, required: true },
    slug: { type: String, required: true },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true }
  },
  { versionKey: false }
);

verbFamilySchema.index({ slug: 1 }, { unique: true });

export const VerbFamilyModel = getModel<VerbFamily>('VerbFamily', verbFamilySchema);
