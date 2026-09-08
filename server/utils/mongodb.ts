import mongoose from 'mongoose';

const connectionOptions = {
  bufferCommands: false,
  connectTimeoutMS: 5_000,
  maxPoolSize: 5,
  minPoolSize: 0,
  serverSelectionTimeoutMS: 5_000,
  socketTimeoutMS: 15_000
};

let connectionPromise: Promise<typeof mongoose> | null = null;

mongoose.set('bufferCommands', false);

export async function ensureMongoConnection(): Promise<typeof mongoose> {
  const config = useRuntimeConfig();

  if (!config.mongodbUri) {
    throw new Error('MONGODB_URI is not configured.');
  }

  if (mongoose.connection.readyState === 1) {
    return mongoose;
  }

  if (!connectionPromise) {
    connectionPromise = mongoose.connect(config.mongodbUri, connectionOptions).catch((error: unknown) => {
      connectionPromise = null;
      throw error;
    });
  }

  return connectionPromise;
}
