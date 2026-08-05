import { VerbEntryModel } from '../../models/VerbEntry'
import { VerbExampleModel } from '../../models/VerbExample'
import { VerbFamilyModel } from '../../models/VerbFamily'

function toPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T
}

export default defineEventHandler(async (event) => {
  const familyId = getRouterParam(event, 'id')

  if (!familyId) {
    throw createError({
      statusCode: 400,
      message: 'Family id is required.'
    })
  }

  const family = await VerbFamilyModel.findById(familyId).lean()

  if (!family) {
    return {
      familyId,
      found: false,
      family: null,
      baseEntry: null,
      variants: [],
      examplesByEntryId: {}
    }
  }

  const normalizedFamily = toPlainObject(family)
  const familyRef = String(normalizedFamily._id)

  const entries = await VerbEntryModel.find({ familyId: familyRef })
    .sort({ createdAt: 1 })
    .lean()

  const normalizedEntries = entries.map((entry) => toPlainObject(entry))
  const baseEntry = normalizedEntries.find((entry) => String(entry._id) === normalizedFamily.baseEntryId) ?? null
  const variants = normalizedEntries.filter((entry) => entry.role === 'variant')
  const entryIds = normalizedEntries.map((entry) => String(entry._id))

  const examples = entryIds.length
    ? await VerbExampleModel.find({ entryId: { $in: entryIds } }).sort({ createdAt: 1 }).lean()
    : []

  const normalizedExamples = examples.map((example) => toPlainObject(example))
  const examplesByEntryId = normalizedExamples.reduce<Record<string, typeof normalizedExamples>>((accumulator, example) => {
    const entryId = String(example.entryId)
    if (!accumulator[entryId]) {
      accumulator[entryId] = []
    }
    accumulator[entryId].push(example)
    return accumulator
  }, {})

  return {
    familyId,
    found: true,
    family: normalizedFamily,
    baseEntry,
    variants,
    examplesByEntryId
  }
})
