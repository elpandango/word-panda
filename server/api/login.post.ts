export default defineEventHandler(async (event) => {
  const { password } = await readBody<{ password?: string }>(event);
  const config = useRuntimeConfig();

  if (!config.authSecret) {
    throw createError({
      statusCode: 500,
      message: 'AUTH_SECRET is not configured yet.'
    });
  }

  if (password !== config.authSecret) {
    throw createError({
      statusCode: 401,
      message: 'Invalid credentials.'
    });
  }

  setCookie(event, 'wp_admin', 'true', {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * 7
  });

  return {
    ok: true,
    role: 'admin'
  };
});
