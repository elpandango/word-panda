export interface FillEntryDraftInput {
  word: string;
  mode: 'base' | 'derived' | 'collocation';
  contextWord?: string;
  partOfSpeech?: string;
}

export interface FillEntryDraftResult {
  partOfSpeech?: 'verb' | 'noun' | 'adjective' | 'phrase' | 'other';
  translationRu?: string;
  explanationRu?: string;
  exampleTextDe?: string;
  exampleTranslationRu?: string;
  prefix?: string | null;
  isSeparable?: boolean | null;
}

interface OllamaChatResponse {
  message?: {
    content?: string;
  };
}

interface OllamaClientConfig {
  apiKey: string;
  model: string;
}

interface OllamaChatMessage {
  role: 'system' | 'user';
  content: string;
}

export async function generateFillEntryDraft(
  input: FillEntryDraftInput,
  config: OllamaClientConfig
): Promise<FillEntryDraftResult> {
  const response = await requestOllama(buildMessages(input), config);
  const content = response.message?.content?.trim() || '';

  if (!content) {
    throw new Error('Empty AI response');
  }

  return normalizeDraft(parseDraftPayload(content));
}

export async function detectPartOfSpeechWithAi(
  input: Pick<FillEntryDraftInput, 'word'>,
  config: OllamaClientConfig
): Promise<FillEntryDraftResult['partOfSpeech']> {
  const response = await requestOllama(buildPartOfSpeechMessages(input.word), config);
  const content = response.message?.content?.trim() || '';

  if (!content) {
    throw new Error('Empty AI response');
  }

  const payload = parseDraftPayload(content);

  if (!payload || typeof payload !== 'object') {
    throw new Error('AI response payload is invalid');
  }

  return toPartOfSpeech((payload as Record<string, unknown>).partOfSpeech);
}

async function requestOllama(
  messages: OllamaChatMessage[],
  config: OllamaClientConfig
): Promise<OllamaChatResponse> {
  const response = await $fetch<OllamaChatResponse>('https://ollama.com/api/chat', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${config.apiKey}`
    },
    body: {
      model: config.model,
      stream: false,
      messages
    }
  });

  return response;
}

function buildMessages(input: FillEntryDraftInput): OllamaChatMessage[] {
  const contextLine =
    input.mode !== 'base' && input.contextWord
      ? `contextWord: "${input.contextWord.trim()}"\n`
      : '';
  const partOfSpeechLine = input.partOfSpeech
    ? `partOfSpeech: "${input.partOfSpeech.trim()}"\n`
    : '';

  return [
    {
      role: 'system',
      content: [
        'Ты помогаешь заполнять карточки немецких слов для учебного приложения.',
        'Отвечай только валидным JSON без markdown и без пояснений.',
        input.mode === 'derived'
          ? 'Заполняй только поля partOfSpeech, translationRu, explanationRu, exampleTextDe, exampleTranslationRu, prefix, isSeparable.'
          : 'Заполняй только поля partOfSpeech, translationRu, explanationRu, exampleTextDe, exampleTranslationRu.',
        'Выбирай самое нейтральное и частотное значение.',
        'Немецкий пример должен быть коротким, естественным и грамматически корректным.',
        'Русский перевод примера должен точно соответствовать немецкому предложению.',
        'Для derived-глагола определи отделяемость приставки.',
        'partOfSpeech должен быть одним из: verb, noun, adjective, phrase, other.',
        'Если не уверен в prefix или isSeparable, верни для них null.',
        'Если не уверен, не выдумывай редкие значения.'
      ].join(' ')
    },
    {
      role: 'user',
      content: [
        'Заполни поля для немецкого глагола и верни только JSON.',
        '',
        `word: "${input.word}"`,
        `mode: "${input.mode}"`,
        contextLine,
        partOfSpeechLine,
        'Формат ответа:',
        ...buildResponseShape(input.mode)
      ]
        .filter(Boolean)
        .join('\n')
    }
  ];
}

function buildPartOfSpeechMessages(word: string): OllamaChatMessage[] {
  return [
    {
      role: 'system',
      content: [
        'Ты определяешь часть речи для немецкого слова или словосочетания.',
        'Отвечай только валидным JSON без markdown и без пояснений.',
        'Разрешенные значения partOfSpeech: verb, noun, adjective, phrase, other.'
      ].join(' ')
    },
    {
      role: 'user',
      content: [
        'Определи часть речи и верни только JSON.',
        '',
        `word: "${word}"`,
        'Формат ответа:',
        '{',
        '  "partOfSpeech": "verb" | "noun" | "adjective" | "phrase" | "other"',
        '}'
      ].join('\n')
    }
  ];
}

function parseDraftPayload(content: string): unknown {
  const fencedMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/i);
  const rawJson = fencedMatch?.[1]?.trim() || content;
  const firstBrace = rawJson.indexOf('{');
  const lastBrace = rawJson.lastIndexOf('}');

  if (firstBrace === -1 || lastBrace === -1 || lastBrace <= firstBrace) {
    throw new Error('AI response does not contain JSON');
  }

  return JSON.parse(rawJson.slice(firstBrace, lastBrace + 1));
}

function normalizeDraft(payload: unknown): FillEntryDraftResult {
  if (!payload || typeof payload !== 'object') {
    throw new Error('AI response payload is invalid');
  }

  const source = payload as Record<string, unknown>;

  return {
    partOfSpeech: toPartOfSpeech(source.partOfSpeech),
    translationRu: toCleanString(source.translationRu),
    explanationRu: toCleanString(source.explanationRu),
    exampleTextDe: toCleanString(source.exampleTextDe),
    exampleTranslationRu: toCleanString(source.exampleTranslationRu),
    prefix: toCleanNullableString(source.prefix),
    isSeparable: toNullableBoolean(source.isSeparable)
  };
}

function toPartOfSpeech(value: unknown): FillEntryDraftResult['partOfSpeech'] {
  if (
    value === 'verb' ||
    value === 'noun' ||
    value === 'adjective' ||
    value === 'phrase' ||
    value === 'other'
  ) {
    return value;
  }

  return undefined;
}

function toCleanString(value: unknown): string | undefined {
  if (typeof value !== 'string') {
    return undefined;
  }

  const trimmed = value.trim();

  return trimmed || undefined;
}

function toCleanNullableString(value: unknown): string | null | undefined {
  if (value === null) {
    return null;
  }

  if (typeof value !== 'string') {
    return undefined;
  }

  const trimmed = value.trim();

  return trimmed || null;
}

function toNullableBoolean(value: unknown): boolean | null | undefined {
  if (value === null) {
    return null;
  }

  if (value === true || value === false) {
    return value;
  }

  if (value === 'true') {
    return true;
  }

  if (value === 'false') {
    return false;
  }

  return undefined;
}

function buildResponseShape(mode: FillEntryDraftInput['mode']): string[] {
  if (mode === 'derived') {
    return [
      '{',
      '  "partOfSpeech": "verb",',
      '  "translationRu": string,',
      '  "explanationRu": string,',
      '  "exampleTextDe": string,',
      '  "exampleTranslationRu": string,',
      '  "prefix": string | null,',
      '  "isSeparable": boolean | null',
      '}'
    ];
  }

  return [
    '{',
    '  "partOfSpeech": "verb" | "noun" | "adjective" | "phrase" | "other",',
    '  "translationRu": string,',
    '  "explanationRu": string,',
    '  "exampleTextDe": string,',
    '  "exampleTranslationRu": string',
    '}'
  ];
}
