import { ensureMongoConnection } from '../utils/mongodb';

export default defineEventHandler(async (event) => {
  if (!event.path.startsWith('/api/') || event.path === '/api/health') {
    return;
  }

  try {
    await ensureMongoConnection();
  } catch (error) {
    console.error('[mongodb] API request rejected because the database is unavailable', error);

    throw createError({
      statusCode: 503,
      statusMessage: 'Service Unavailable',
      message: 'База данных временно недоступна. Попробуйте ещё раз.'
    });
  }
});
