import { generateFillEntryDraft } from '../../utils/ai/fill-entry';

interface FillEntryRequestBody {
  word?: string;
  mode?: 'base' | 'derived' | 'collocation';
  contextWord?: string;
}

function getErrorStatusCode(error: unknown): number | null {
  if (!error || typeof error !== 'object') {
    return null;
  }

  const candidate = error as { status?: number; statusCode?: number };

  if (typeof candidate.statusCode === 'number') {
    return candidate.statusCode;
  }

  if (typeof candidate.status === 'number') {
    return candidate.status;
  }

  return null;
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  if (config.aiEnabled !== 'true') {
    throw createError({
      statusCode: 404,
      statusMessage: 'Not Found',
      message: 'AI-подсказка сейчас отключена.'
    });
  }

  if (config.aiProvider !== 'ollama') {
    throw createError({
      statusCode: 500,
      statusMessage: 'Server Error',
      message: 'Поддерживается только Ollama Cloud.'
    });
  }

  if (!config.ollamaApiKey) {
    throw createError({
      statusCode: 503,
      statusMessage: 'Service Unavailable',
      message: 'AI-подсказка сейчас недоступна.'
    });
  }

  const body = await readBody<FillEntryRequestBody>(event);
  const word = body.word?.trim() || '';
  const mode =
    body.mode === 'collocation' ? 'collocation' : body.mode === 'derived' ? 'derived' : 'base';
  const contextWord = body.contextWord?.trim();

  if (!word) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      message: 'Сначала введи слово, для которого нужна AI-подсказка.'
    });
  }

  try {
    return await generateFillEntryDraft(
      {
        word,
        mode,
        contextWord
      },
      {
        apiKey: config.ollamaApiKey,
        model: config.ollamaModel
      }
    );
  } catch (error) {
    const statusCode = getErrorStatusCode(error);

    if (statusCode === 401 || statusCode === 403) {
      throw createError({
        statusCode: 503,
        statusMessage: 'Service Unavailable',
        message: 'Не удалось авторизовать AI-подсказку. Проверь ключ Ollama.'
      });
    }

    if (statusCode === 429) {
      throw createError({
        statusCode: 429,
        statusMessage: 'Too Many Requests',
        message: 'Лимит AI-подсказок временно исчерпан. Попробуй позже.'
      });
    }

    console.error('AI fill request failed', error);

    throw createError({
      statusCode: 503,
      statusMessage: 'Service Unavailable',
      message: 'AI-подсказка временно недоступна. Попробуй позже.'
    });
  }
});
