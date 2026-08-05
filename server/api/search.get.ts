export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const q = String(query.q || '').trim()

  return {
    query: q,
    items: [],
    message: q ? 'Search endpoint scaffolded. Connect MongoDB and implement query logic next.' : 'No query provided.'
  }
})
