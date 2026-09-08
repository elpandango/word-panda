import { ensureMongoConnection } from '../utils/mongodb';

export default defineNitroPlugin(() => {
  void ensureMongoConnection().catch((error: unknown) => {
    console.error('[mongodb] Initial connection failed', error);
  });
});
