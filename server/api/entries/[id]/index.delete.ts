import { VerbEntryModel } from '../../../models/VerbEntry';
import { VerbExampleModel } from '../../../models/VerbExample';
import { VerbFamilyModel } from '../../../models/VerbFamily';
import { resolveVerbEntryKind } from '../../../../shared/utils/verb-entry-kind';

export default defineEventHandler(async (event) => {
  const entryId = String(getRouterParam(event, 'id') || '').trim();

  if (!entryId) {
    throw createError({
      statusCode: 400,
      message: 'Не найдено слово для удаления.'
    });
  }

  const entry = await VerbEntryModel.findById(entryId).lean();

  if (!entry) {
    throw createError({
      statusCode: 404,
      message: 'Слово не найдено.'
    });
  }

  if (resolveVerbEntryKind(entry) === 'base') {
    const familyEntries = await VerbEntryModel.find({ familyId: entry.familyId }).lean();
    const entryIds = familyEntries.map((item) => String(item._id));

    await VerbExampleModel.deleteMany({ entryId: { $in: entryIds } });
    await VerbEntryModel.deleteMany({ familyId: entry.familyId });
    await VerbFamilyModel.deleteOne({ _id: entry.familyId });

    return {
      ok: true,
      deleted: 'family',
      familyId: entry.familyId,
      entryId
    };
  }

  await VerbExampleModel.deleteMany({ entryId });
  await VerbEntryModel.deleteOne({ _id: entryId });
  await VerbFamilyModel.updateOne({ _id: entry.familyId }, { updatedAt: new Date().toISOString() });

  return {
    ok: true,
    deleted: 'entry',
    familyId: entry.familyId,
    entryId
  };
});
