export default defineEventHandler(() => {
  return {
    ok: true,
    app: 'WordPanda',
    timestamp: new Date().toISOString()
  }
})
