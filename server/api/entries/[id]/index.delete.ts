import { VerbEntryModel } from '../../../models/VerbEntry';
import { VerbExampleModel } from '../../../models/VerbExample';
import { VerbFamilyModel } from '../../../models/VerbFamily';
import { resolveVerbEntryKind } from '../../../../shared/utils/verb-entry-kind';
import { runInTransaction } from '../../../utils/transactions';

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

    await runInTransaction(async (session) => {
      await VerbExampleModel.deleteMany({ entryId: { $in: entryIds } }, { session });
      await VerbEntryModel.deleteMany({ familyId: entry.familyId }, { session });
      await VerbFamilyModel.deleteOne({ _id: entry.familyId }, { session });
    });

    return {
      ok: true,
      deleted: 'family',
      familyId: entry.familyId,
      entryId
    };
  }

  await runInTransaction(async (session) => {
    await VerbExampleModel.deleteMany({ entryId }, { session });
    await VerbEntryModel.deleteOne({ _id: entryId }, { session });
    await VerbFamilyModel.updateOne(
      { _id: entry.familyId },
      { updatedAt: new Date().toISOString() },
      { session }
    );
  });

  return {
    ok: true,
    deleted: 'entry',
    familyId: entry.familyId,
    entryId
  };
});
