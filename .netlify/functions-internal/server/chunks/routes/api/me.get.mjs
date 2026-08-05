import { d as defineEventHandler, b as getCookie } from '../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'mongoose';

const me_get = defineEventHandler((event) => {
  const isAuthenticated = getCookie(event, "wp_admin") === "true";
  return {
    role: isAuthenticated ? "admin" : "guest",
    isAuthenticated
  };
});

export { me_get as default };
//# sourceMappingURL=me.get.mjs.map
