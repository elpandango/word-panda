import { d as defineEventHandler, a as deleteCookie } from '../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'mongoose';

const logout_post = defineEventHandler((event) => {
  deleteCookie(event, "wp_admin", { path: "/" });
  return {
    ok: true
  };
});

export { logout_post as default };
//# sourceMappingURL=logout.post.mjs.map
