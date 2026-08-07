export interface FillEntryDraftInput {
  word: string;
  mode: 'base' | 'variant';
  contextWord?: string;
}

export interface FillEntryDraftResult {
  translationRu?: string;
  explanationRu?: string;
  exampleTextDe?: string;
  exampleTranslationRu?: string;
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
    input.mode === 'variant' && input.contextWord
      ? `contextWord: "${input.contextWord.trim()}"\n`
      : '';

  return [
    {
      role: 'system',
      content: [
        'Ты помогаешь заполнять карточки немецких глаголов для учебного приложения.',
        'Отвечай только валидным JSON без markdown и без пояснений.',
        'Заполняй только поля translationRu, explanationRu, exampleTextDe, exampleTranslationRu.',
        'Выбирай самое нейтральное и частотное значение.',
        'Немецкий пример должен быть коротким, естественным и грамматически корректным.',
        'Русский перевод примера должен точно соответствовать немецкому предложению.',
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
        '{',
        '  "translationRu": string,',
        '  "explanationRu": string,',
        '  "exampleTextDe": string,',
        '  "exampleTranslationRu": string',
        '}'
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
    exampleTranslationRu: toCleanString(source.exampleTranslationRu)
  };
}

function toCleanString(value: unknown): string | undefined {
  if (typeof value !== 'string') {
    return undefined;
  }

  const trimmed = value.trim();

  return trimmed || undefined;
}
