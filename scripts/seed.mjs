import crypto from 'node:crypto';
import process from 'node:process';
import { pathToFileURL } from 'node:url';
import mongoose from 'mongoose';

import { seedFamiliesDraft } from './seed-draft-data.mjs';
import { seedFlashcards } from './seed-flashcards.mjs';
import { slugifyFamilyWord } from '../shared/utils/family-slug.ts';
import { partOfSpeechOptions } from '../shared/types/verbs.ts';

const verbFamilySchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    baseEntryId: { type: String, required: true },
    slug: { type: String, required: true },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true }
  },
  { collection: 'verbfamilies', versionKey: false }
);

const verbEntrySchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    familyId: { type: String, required: true, index: true },
    kind: { type: String, required: true },
    role: { type: String },
    partOfSpeech: { type: String, required: true, enum: [...partOfSpeechOptions], index: true },
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
  { collection: 'verbentries', versionKey: false }
);

const verbExampleSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    entryId: { type: String, required: true, index: true },
    textDe: { type: String, required: true },
    translationRu: { type: String },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true }
  },
  { collection: 'verbexamples', versionKey: false }
);

const VerbFamilyModel =
  mongoose.models.VerbFamilySeed || mongoose.model('VerbFamilySeed', verbFamilySchema);
const VerbEntryModel =
  mongoose.models.VerbEntrySeed || mongoose.model('VerbEntrySeed', verbEntrySchema);
const VerbExampleModel =
  mongoose.models.VerbExampleSeed || mongoose.model('VerbExampleSeed', verbExampleSchema);

function makeId(prefix) {
  return `${prefix}_${crypto.randomUUID()}`;
}

function now() {
  return new Date().toISOString();
}

function buildUniqueFamilySlug(word, usedSlugs) {
  const baseSlug = slugifyFamilyWord(word) || `family-${crypto.randomUUID().slice(0, 8)}`;
  let candidate = baseSlug;
  let counter = 2;

  while (usedSlugs.has(candidate)) {
    candidate = `${baseSlug}-${counter}`;
    counter += 1;
  }

  usedSlugs.add(candidate);
  return candidate;
}

function buildFamily(seed, usedSlugs) {
  const timestamp = now();
  const familyId = makeId('family');
  const baseEntryId = makeId('entry');
  const slug = buildUniqueFamilySlug(seed.base.word, usedSlugs);

  const family = {
    _id: familyId,
    baseEntryId,
    slug,
    createdAt: timestamp,
    updatedAt: timestamp
  };

  const baseEntry = {
    _id: baseEntryId,
    familyId,
    kind: 'base',
    partOfSpeech: 'verb',
    word: seed.base.word,
    translationRu: seed.base.translationRu,
    meaningDe: seed.base.meaningDe,
    explanationRu: seed.base.explanationRu,
    prefix: null,
    isSeparable: null,
    source: 'manual',
    status: 'reviewed',
    createdAt: timestamp,
    updatedAt: timestamp
  };

  const derivedSeeds =
    seed.derived ||
    (seed.variants || []).filter((variant) => variant.prefix || variant.isSeparable !== null);
  const collocationSeeds =
    seed.collocations ||
    (seed.variants || []).filter((variant) => !variant.prefix && variant.isSeparable === null);

  const derivedEntries = derivedSeeds.map((variant) => ({
    _id: makeId('entry'),
    familyId,
    kind: 'derived',
    partOfSpeech: 'verb',
    word: variant.word,
    translationRu: variant.translationRu,
    meaningDe: variant.meaningDe,
    explanationRu: variant.explanationRu,
    prefix: variant.prefix,
    isSeparable: variant.isSeparable,
    source: 'manual',
    status: 'reviewed',
    createdAt: timestamp,
    updatedAt: timestamp
  }));

  const collocationEntries = collocationSeeds.map((collocation) => ({
    _id: makeId('entry'),
    familyId,
    kind: 'collocation',
    partOfSpeech: 'phrase',
    word: collocation.word,
    translationRu: collocation.translationRu,
    meaningDe: collocation.meaningDe,
    explanationRu: collocation.explanationRu,
    prefix: null,
    isSeparable: null,
    source: 'manual',
    status: 'reviewed',
    createdAt: timestamp,
    updatedAt: timestamp
  }));

  const examples = [];

  for (const example of seed.base.examples) {
    examples.push({
      _id: makeId('example'),
      entryId: baseEntryId,
      textDe: example.textDe,
      translationRu: example.translationRu,
      createdAt: timestamp,
      updatedAt: timestamp
    });
  }

  for (const variant of derivedEntries) {
    const variantSeed = derivedSeeds.find((item) => item.word === variant.word);
    for (const example of variantSeed.examples) {
      examples.push({
        _id: makeId('example'),
        entryId: variant._id,
        textDe: example.textDe,
        translationRu: example.translationRu,
        createdAt: timestamp,
        updatedAt: timestamp
      });
    }
  }

  for (const collocation of collocationEntries) {
    const collocationSeed = collocationSeeds.find((item) => item.word === collocation.word);
    for (const example of collocationSeed.examples) {
      examples.push({
        _id: makeId('example'),
        entryId: collocation._id,
        textDe: example.textDe,
        translationRu: example.translationRu,
        createdAt: timestamp,
        updatedAt: timestamp
      });
    }
  }

  return { family, entries: [baseEntry, ...derivedEntries, ...collocationEntries], examples };
}

const seedFamilies = seedFamiliesDraft;

export const main = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error(
      'MONGODB_URI is missing. Copy .env.example to .env and set your real Atlas URI.'
    );
  }

  await mongoose.connect(uri);

  const createdFamilies = [];
  const skippedFamilies = [];
  const usedSlugs = new Set();

  for (const seedFamily of seedFamilies) {
    const existingBaseEntry = await VerbEntryModel.findOne({
      $or: [{ kind: 'base' }, { role: 'base' }],
      word: seedFamily.base.word
    }).lean();

    if (existingBaseEntry) {
      skippedFamilies.push({
        baseWord: seedFamily.base.word,
        familyId: existingBaseEntry.familyId
      });
      continue;
    }

    const builtFamily = buildFamily(seedFamily, usedSlugs);

    await VerbFamilyModel.create(builtFamily.family);
    await VerbEntryModel.insertMany(builtFamily.entries);
    await VerbExampleModel.insertMany(builtFamily.examples);

    createdFamilies.push({
      familyId: builtFamily.family._id,
      baseEntryId: builtFamily.family.baseEntryId,
      baseWord: builtFamily.entries[0].word,
      relatedWords: builtFamily.entries.slice(1).map((entry) => entry.word)
    });
  }

  console.log(
    JSON.stringify(
      {
        ok: true,
        database: mongoose.connection.name,
        createdFamilies,
        skippedFamilies,
        totalSeedFamilies: seedFamilies.length,
        flashcards: await seedFlashcards()
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
      console.error('Failed to disconnect after seed error', disconnectError);
    }
    process.exit(1);
  });
}
