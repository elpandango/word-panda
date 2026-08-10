import process from 'node:process';
import { pathToFileURL } from 'node:url';
import mongoose from 'mongoose';

const verbEntrySchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    kind: { type: String, required: true },
    partOfSpeech: { type: String, default: null },
    prefix: { type: String, default: null },
    isSeparable: { type: Boolean, default: null },
    word: { type: String, required: true }
  },
  { collection: 'verbentries', versionKey: false }
);

const VerbEntryModel =
  mongoose.models.VerbEntryPartOfSpeechMigration ||
  mongoose.model('VerbEntryPartOfSpeechMigration', verbEntrySchema);

function inferPartOfSpeech(entry) {
  if (entry.kind === 'derived') {
    return 'verb';
  }

  if (entry.kind === 'collocation') {
    return 'phrase';
  }

  return 'verb';
}

export async function main() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error(
      'MONGODB_URI is missing. Copy .env.example to .env and set your real Atlas URI.'
    );
  }

  await mongoose.connect(uri);

  const entries = await VerbEntryModel.find({
    $or: [{ partOfSpeech: { $exists: false } }, { partOfSpeech: null }, { partOfSpeech: '' }]
  }).lean();

  let updatedCount = 0;

  for (const entry of entries) {
    await VerbEntryModel.updateOne(
      { _id: entry._id },
      { partOfSpeech: inferPartOfSpeech(entry) }
    );
    updatedCount += 1;
  }

  console.log(
    JSON.stringify(
      {
        ok: true,
        database: mongoose.connection.name,
        updatedCount
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
      console.error('Failed to disconnect after part-of-speech migration error', disconnectError);
    }
    process.exit(1);
  });
}
