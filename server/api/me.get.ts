export default defineEventHandler((event) => {
  const isAuthenticated = getCookie(event, 'wp_admin') === 'true'

  return {
    role: isAuthenticated ? 'admin' : 'guest',
    isAuthenticated
  }
})
