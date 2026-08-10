import process from 'node:process';
import { pathToFileURL } from 'node:url';
import mongoose from 'mongoose';
import {
  buildBrowseWordFromParts,
  normalizeEntryWord
} from '../shared/utils/entry-word-normalization.ts';

const verbEntrySchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    word: { type: String, required: true },
    partOfSpeech: { type: String, required: true },
    normalizedWord: { type: String, default: null },
    browseWord: { type: String, default: null }
  },
  { collection: 'verbentries', versionKey: false }
);

const VerbEntryModel =
  mongoose.models.VerbEntryNormalizedFieldsMigration ||
  mongoose.model('VerbEntryNormalizedFieldsMigration', verbEntrySchema);

export async function main() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error(
      'MONGODB_URI is missing. Copy .env.example to .env and set your real Atlas URI.'
    );
  }

  await mongoose.connect(uri);

  const entries = await VerbEntryModel.find().lean();
  const seenNormalizedWords = new Map();

  for (const entry of entries) {
    const normalizedWord = normalizeEntryWord(entry.word);

    if (seenNormalizedWords.has(normalizedWord)) {
      throw new Error(
        `Duplicate normalized word detected for migration: "${entry.word}" conflicts with "${seenNormalizedWords.get(normalizedWord)}".`
      );
    }

    seenNormalizedWords.set(normalizedWord, entry.word);
  }

  let updatedCount = 0;

  for (const entry of entries) {
    await VerbEntryModel.updateOne(
      { _id: entry._id },
      {
        normalizedWord: normalizeEntryWord(entry.word),
        browseWord: buildBrowseWordFromParts(entry.word, entry.partOfSpeech)
      }
    );
    updatedCount += 1;
  }

  await VerbEntryModel.collection.createIndexes([
    {
      key: { normalizedWord: 1 },
      name: 'normalizedWord_1',
      unique: true,
      partialFilterExpression: {
        normalizedWord: { $type: 'string' }
      }
    },
    {
      key: { browseWord: 1 },
      name: 'browseWord_1'
    },
    {
      key: { createdAt: -1 },
      name: 'createdAt_-1'
    },
    {
      key: { updatedAt: -1 },
      name: 'updatedAt_-1'
    }
  ]);

  console.log(
    JSON.stringify(
      {
        ok: true,
        database: mongoose.connection.name,
        updatedCount,
        indexesSynced: true
      },
      null,
      2
    )
  );

  await mongoose.disconnect();
}

const isDirectRun = process.argv[1]
  ? import.meta.url === pathToFileURL(process.argv[1]).href
  : false;

if (isDirectRun) {
  main().catch(async (error) => {
    console.error(error);
    try {
      await mongoose.disconnect();
    } catch (disconnectError) {
      console.error('Failed to disconnect after normalized field migration error', disconnectError);
    }
    process.exit(1);
  });
}
