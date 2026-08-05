import { d as defineEventHandler, r as readBody, c as createError, s as setCookie, u as useRuntimeConfig } from '../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'mongoose';

const login_post = defineEventHandler(async (event) => {
  const { password } = await readBody(event);
  const config = useRuntimeConfig();
  if (!config.authSecret) {
    throw createError({
      statusCode: 500,
      message: "AUTH_SECRET is not configured yet."
    });
  }
  if (password !== config.authSecret) {
    throw createError({
      statusCode: 401,
      message: "Invalid credentials."
    });
  }
  setCookie(event, "wp_admin", "true", {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 7
  });
  return {
    ok: true,
    role: "admin"
  };
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
