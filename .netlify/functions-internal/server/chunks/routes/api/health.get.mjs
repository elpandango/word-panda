import { d as defineEventHandler } from '../../nitro/nitro.mjs';
import mongoose from 'mongoose';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';

const readyStateLabels = {
  0: "disconnected",
  1: "connected",
  2: "connecting",
  3: "disconnecting"
};
const health_get = defineEventHandler(() => {
  var _a;
  const readyState = mongoose.connection.readyState;
  return {
    ok: true,
    app: "WordPanda",
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    mongo: {
      configured: Boolean(process.env.MONGODB_URI),
      readyState,
      state: (_a = readyStateLabels[readyState]) != null ? _a : "unknown",
      database: mongoose.connection.name || null,
      host: mongoose.connection.host || null
    }
  };
});

export { health_get as default };
//# sourceMappingURL=health.get.mjs.map
