import { d as defineEventHandler, g as getRouterParam } from '../../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'mongoose';

const _id__get = defineEventHandler(async (event) => {
  const familyId = getRouterParam(event, "id");
  return {
    familyId,
    family: null,
    baseEntry: null,
    variants: [],
    examplesByEntryId: {},
    message: "Family endpoint scaffolded. Wire MongoDB queries next."
  };
});

export { _id__get as default };
//# sourceMappingURL=_id_.get.mjs.map
