import { VerbEntryModel } from '../../models/VerbEntry';
import { VerbExampleModel } from '../../models/VerbExample';
import { VerbFamilyModel } from '../../models/VerbFamily';
import { resolveVerbEntryKind } from '../../../shared/utils/verb-entry-kind';

function toPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

export default defineEventHandler(async (event) => {
  const familySlug = String(getRouterParam(event, 'id') || '').trim();

  if (!familySlug) {
    throw createError({
      statusCode: 400,
      message: 'Family slug is required.'
    });
  }

  const family = await VerbFamilyModel.findOne({ slug: familySlug }).lean();

  if (!family) {
    return {
      familyId: null,
      found: false,
      family: null,
      baseEntry: null,
      derivedEntries: [],
      collocations: [],
      examplesByEntryId: {}
    };
  }

  const normalizedFamily = toPlainObject(family);
  const familyRef = String(normalizedFamily._id);

  const entries = await VerbEntryModel.find({ familyId: familyRef }).sort({ createdAt: 1 }).lean();

  const normalizedEntries = entries.map((entry) => ({
    ...toPlainObject(entry),
    kind: resolveVerbEntryKind(entry)
  }));
  const baseEntry =
    normalizedEntries.find((entry) => String(entry._id) === normalizedFamily.baseEntryId) ?? null;
  const derivedEntries = normalizedEntries.filter((entry) => entry.kind === 'derived');
  const collocations = normalizedEntries.filter((entry) => entry.kind === 'collocation');
  const entryIds = normalizedEntries.map((entry) => String(entry._id));

  const examples = entryIds.length
    ? await VerbExampleModel.find({ entryId: { $in: entryIds } })
        .sort({ createdAt: 1 })
        .lean()
    : [];

  const normalizedExamples = examples.map((example) => toPlainObject(example));
  const examplesByEntryId = normalizedExamples.reduce<Record<string, typeof normalizedExamples>>(
    (accumulator, example) => {
      const entryId = String(example.entryId);

      if (!accumulator[entryId]) {
        accumulator[entryId] = [];
      }

      accumulator[entryId].push(example);
      return accumulator;
    },
    {}
  );

  return {
    familyId: familyRef,
    found: true,
    family: normalizedFamily,
    baseEntry,
    derivedEntries,
    collocations,
    examplesByEntryId
  };
});
