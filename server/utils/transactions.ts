import mongoose from 'mongoose';

export async function runInTransaction<T>(action: (session: mongoose.ClientSession) => Promise<T>) {
  const session = await mongoose.startSession();

  try {
    let result: T | undefined;

    await session.withTransaction(async () => {
      result = await action(session);
    });

    if (typeof result === 'undefined') {
      throw new Error('Transaction completed without result');
    }

    return result;
  } finally {
    await session.endSession();
  }
}
