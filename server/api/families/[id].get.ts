export default defineEventHandler(async (event) => {
  const familyId = getRouterParam(event, 'id')

  return {
    familyId,
    family: null,
    baseEntry: null,
    variants: [],
    examplesByEntryId: {},
    message: 'Family endpoint scaffolded. Wire MongoDB queries next.'
  }
})
