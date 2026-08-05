export default defineEventHandler((event) => {
  deleteCookie(event, 'wp_admin', { path: '/' })

  return {
    ok: true
  }
})
