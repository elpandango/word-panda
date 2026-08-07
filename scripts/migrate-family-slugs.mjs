import mongoose from 'mongoose';
import { slugifyFamilyWord } from '../shared/utils/family-slug.ts';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('MONGODB_URI is missing. Copy .env.example to .env and set your real Atlas URI.');
}

const verbFamilySchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    baseEntryId: { type: String, required: true },
    slug: { type: String },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true }
  },
  { collection: 'verbfamilies', versionKey: false }
);

const verbEntrySchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    familyId: { type: String, required: true },
    role: { type: String, required: true },
    word: { type: String, required: true }
  },
  { collection: 'verbentries', versionKey: false }
);

const VerbFamilyModel =
  mongoose.models.VerbFamilySlugMigration || mongoose.model('VerbFamilySlugMigration', verbFamilySchema);
const VerbEntryModel =
  mongoose.models.VerbEntrySlugMigration || mongoose.model('VerbEntrySlugMigration', verbEntrySchema);

async function main() {
  await mongoose.connect(uri);

  const families = await VerbFamilyModel.find().lean();
  const slugsInUse = new Map();

  for (const family of families) {
    const baseEntry = await VerbEntryModel.findById(family.baseEntryId).lean();

    if (!baseEntry?.word) {
      throw new Error(`Base entry not found for family ${family._id}`);
    }

    const slug = slugifyFamilyWord(baseEntry.word);

    if (!slug) {
      throw new Error(`Could not build slug for family ${family._id} from word "${baseEntry.word}"`);
    }

    const existingFamilyId = slugsInUse.get(slug);

    if (existingFamilyId && existingFamilyId !== family._id) {
      throw new Error(`Slug collision: "${slug}" for families ${existingFamilyId} and ${family._id}`);
    }

    slugsInUse.set(slug, family._id);
  }

  for (const family of families) {
    const baseEntry = await VerbEntryModel.findById(family.baseEntryId).lean();
    const slug = slugifyFamilyWord(baseEntry.word);

    await VerbFamilyModel.updateOne({ _id: family._id }, { slug });
    console.log(`Updated ${family._id} -> ${slug}`);
  }

  await mongoose.disconnect();
}

main().catch(async (error) => {
  console.error(error);
  await mongoose.disconnect();
  process.exitCode = 1;
});
