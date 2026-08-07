export interface FillEntryDraftInput {
  word: string;
  mode: 'base' | 'derived' | 'collocation';
  contextWord?: string;
}

export interface FillEntryDraftResult {
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

export async function generateFillEntryDraft(
  input: FillEntryDraftInput,
  config: OllamaClientConfig
): Promise<FillEntryDraftResult> {
  const response = await $fetch<OllamaChatResponse>('https://ollama.com/api/chat', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${config.apiKey}`
    },
    body: {
      model: config.model,
      stream: false,
      messages: buildMessages(input)
    }
  });

  const content = response.message?.content?.trim() || '';

  if (!content) {
    throw new Error('Empty AI response');
  }

  return normalizeDraft(parseDraftPayload(content));
}

function buildMessages(
  input: FillEntryDraftInput
): Array<{ role: 'system' | 'user'; content: string }> {
  const contextLine =
    input.mode !== 'base' && input.contextWord
      ? `contextWord: "${input.contextWord.trim()}"\n`
      : '';

  return [
    {
      role: 'system',
      content: [
        'Ты помогаешь заполнять карточки немецких глаголов для учебного приложения.',
        'Отвечай только валидным JSON без markdown и без пояснений.',
        input.mode === 'derived'
          ? 'Заполняй только поля translationRu, explanationRu, exampleTextDe, exampleTranslationRu, prefix, isSeparable.'
          : 'Заполняй только поля translationRu, explanationRu, exampleTextDe, exampleTranslationRu.',
        'Выбирай самое нейтральное и частотное значение.',
        'Немецкий пример должен быть коротким, естественным и грамматически корректным.',
        'Русский перевод примера должен точно соответствовать немецкому предложению.',
        'Для derived-глагола определи отделяемость приставки.',
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
        'Формат ответа:',
        ...buildResponseShape(input.mode)
      ]
        .filter(Boolean)
        .join('\n')
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
    translationRu: toCleanString(source.translationRu),
    explanationRu: toCleanString(source.explanationRu),
    exampleTextDe: toCleanString(source.exampleTextDe),
    exampleTranslationRu: toCleanString(source.exampleTranslationRu),
    prefix: toCleanNullableString(source.prefix),
    isSeparable: toNullableBoolean(source.isSeparable)
  };
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
    '  "translationRu": string,',
    '  "explanationRu": string,',
    '  "exampleTextDe": string,',
    '  "exampleTranslationRu": string',
    '}'
  ];
}
