import process from 'node:process';
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import mongoose from 'mongoose';

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

const flashcardSchema = new mongoose.Schema(
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
  { collection: 'flashcards', versionKey: false }
);

const FlashcardModel =
  mongoose.models.FlashcardSeed || mongoose.model('FlashcardSeed', flashcardSchema);

const FLASHCARDS_DATA_DIR = join(process.cwd(), 'data', 'flashcards');

function now() {
  return new Date().toISOString();
}

function slugifyFlashcardPart(value) {
  return String(value || '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function buildFlashcardSlug(card) {
  const parts = [
    card.level,
    card.topic,
    String(card.cardNumber),
    card.front.title
  ]
    .map((part) => slugifyFlashcardPart(part))
    .filter(Boolean);

  return parts.join('-');
}

async function loadFlashcardsSource() {
  const files = await readdir(FLASHCARDS_DATA_DIR);
  const jsonFiles = files.filter((file) => file.endsWith('.json')).sort();
  const cards = [];

  for (const fileName of jsonFiles) {
    const filePath = join(FLASHCARDS_DATA_DIR, fileName);
    const fileContent = await readFile(filePath, 'utf8');
    const parsed = JSON.parse(fileContent);

    if (!Array.isArray(parsed) || !parsed.length) {
      continue;
    }

    cards.push(...parsed);
  }

  return cards;
}

export async function seedFlashcards() {
  const timestamp = now();
  const sourceCards = await loadFlashcardsSource();
  const operations = sourceCards.map((card) => ({
    updateOne: {
      filter: { _id: card.id },
      update: {
        $set: {
          slug: buildFlashcardSlug(card),
          level: card.level,
          topic: card.topic,
          cardNumber: card.cardNumber,
          source: card.source,
          front: card.front,
          back: card.back,
          isPublished: true,
          updatedAt: timestamp
        },
        $setOnInsert: {
          createdAt: timestamp
        }
      },
      upsert: true
    }
  }));

  if (!operations.length) {
    return {
      ok: true,
      insertedOrUpdated: 0,
      totalSourceCards: 0
    };
  }

  const result = await FlashcardModel.bulkWrite(operations, { ordered: false });

  return {
    ok: true,
    insertedOrUpdated: result.upsertedCount + result.modifiedCount + result.matchedCount,
    upsertedCount: result.upsertedCount,
    modifiedCount: result.modifiedCount,
    matchedCount: result.matchedCount,
    totalSourceCards: sourceCards.length
  };
}

export const main = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error(
      'MONGODB_URI is missing. Copy .env.example to .env and set your real Atlas URI.'
    );
  }

  await mongoose.connect(uri);

  const result = await seedFlashcards();
  console.log(
    JSON.stringify(
      {
        ...result,
        database: mongoose.connection.name
      },
      null,
      2
    )
  );

  await mongoose.disconnect();
};

const isDirectRun = process.argv[1]
  ? import.meta.url === pathToFileURL(process.argv[1]).href
  : false;

if (isDirectRun) {
  main().catch(async (error) => {
    console.error(error);
    try {
      await mongoose.disconnect();
    } catch (disconnectError) {
      console.error('Failed to disconnect after flashcard seed error', disconnectError);
    }
    process.exit(1);
  });
}
