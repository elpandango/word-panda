import mongoose from 'mongoose';
import { getModel } from '../utils/mongoose';
import type { FlashcardRecord } from '../../shared/types/flashcards';

const flashcardFaceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String },
    lines: { type: [String], default: [] },
    exampleDe: { type: String },
    exampleTranslation: { type: String }
  },
  { _id: false, versionKey: false }
);

const flashcardSchema = new mongoose.Schema<FlashcardRecord>(
  {
    _id: { type: String, required: true },
    slug: { type: String, required: true },
    level: { type: String, required: true, index: true },
    topic: { type: String, required: true, index: true },
    cardNumber: { type: Number, required: true },
    source: { type: String, required: true },
    front: { type: flashcardFaceSchema, required: true },
    back: { type: flashcardFaceSchema, required: true },
    isPublished: { type: Boolean, required: true, default: true },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true }
  },
  { versionKey: false }
);

flashcardSchema.index({ slug: 1 }, { unique: true });
flashcardSchema.index({ level: 1, cardNumber: 1 }, { unique: true });

export const FlashcardModel = getModel<FlashcardRecord>('Flashcard', flashcardSchema);
