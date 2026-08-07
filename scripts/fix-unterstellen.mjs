import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error(
    'MONGODB_URI is missing. Copy .env.example to .env and set your real Atlas URI.'
  );
}

const verbEntrySchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    familyId: { type: String, required: true },
    role: { type: String, required: true },
    word: { type: String, required: true },
    translationRu: { type: String },
    explanationRu: { type: String },
    prefix: { type: String, default: null },
    isSeparable: { type: Boolean, default: null },
    updatedAt: { type: String, required: true }
  },
  { collection: 'verbentries', versionKey: false }
);

const VerbEntryModel =
  mongoose.models.VerbEntryUnterstellenFix ||
  mongoose.model('VerbEntryUnterstellenFix', verbEntrySchema);

async function main() {
  await mongoose.connect(uri);

  const updatedAt = new Date().toISOString();
  const result = await VerbEntryModel.updateMany(
    { word: 'unterstellen' },
    {
      translationRu: 'приписывать; подчинять; предполагать',
      explanationRu: 'Неотделяемый вариант: приписывать, подчинять, предполагать.',
      prefix: 'unter',
      isSeparable: false,
      updatedAt
    }
  );

  console.log(
    JSON.stringify(
      {
        ok: true,
        matchedCount: result.matchedCount,
        modifiedCount: result.modifiedCount
      },
      null,
      2
    )
  );

  await mongoose.disconnect();
}

main().catch(async (error) => {
  console.error(error);
  await mongoose.disconnect();
  process.exitCode = 1;
});
