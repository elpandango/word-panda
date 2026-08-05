import mongoose from 'mongoose';
import type { NitroApp } from 'nitropack';

let connectionPromise: Promise<typeof mongoose> | null = null;

export default async (_nitroApp: NitroApp) => {
  const config = useRuntimeConfig();

  if (!config.mongodbUri) {
    console.info(
      '[mongodb] MONGODB_URI is not configured yet. Server routes will run in scaffold mode.'
    );
    return;
  }

  if (mongoose.connection.readyState === 1) {
    return;
  }

  if (!connectionPromise) {
    connectionPromise = mongoose.connect(config.mongodbUri);
  }

  try {
    await connectionPromise;
  } catch (error) {
    connectionPromise = null;
    console.error('[mongodb] Connection failed', error);
  }
};
