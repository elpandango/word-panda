import {
  type PartOfSpeech,
  type VerbEntryKind,
  partOfSpeechOptions
} from '../../shared/types/verbs';
import { detectPartOfSpeechWithAi } from './ai/fill-entry';

interface ResolvePartOfSpeechInput {
  word: string;
  kind: VerbEntryKind;
  requestedPartOfSpeech?: unknown;
  aiConfig?: {
    enabled: boolean;
    provider: string;
    apiKey?: string;
    model?: string;
  };
}

export function normalizePartOfSpeech(value: unknown): PartOfSpeech | null {
  return typeof value === 'string' && partOfSpeechOptions.includes(value as PartOfSpeech)
    ? (value as PartOfSpeech)
    : null;
}

export function inferPartOfSpeechHeuristically(word: string, kind: VerbEntryKind): PartOfSpeech {
  if (kind === 'derived') {
    return 'verb';
  }

  if (kind === 'collocation') {
    return 'phrase';
  }

  const normalizedWord = String(word || '').trim();
  const loweredWord = normalizedWord.toLocaleLowerCase('de');

  if (/^(der|die|das)\s+\S+/.test(loweredWord)) {
    return 'noun';
  }

  if (/\s/.test(normalizedWord)) {
    return 'phrase';
  }

  if (/(en|eln|ern)$/.test(loweredWord)) {
    return 'verb';
  }

  if (/(ig|lich|isch|bar|sam|los|voll)$/.test(loweredWord)) {
    return 'adjective';
  }

  return 'other';
}

export async function resolvePartOfSpeech(input: ResolvePartOfSpeechInput): Promise<PartOfSpeech> {
  if (input.kind === 'derived') {
    return 'verb';
  }

  if (input.kind === 'collocation') {
    return 'phrase';
  }

  const requested = normalizePartOfSpeech(input.requestedPartOfSpeech);

  if (requested) {
    return requested;
  }

  if (
    input.aiConfig?.enabled &&
    input.aiConfig.provider === 'ollama' &&
    input.aiConfig.apiKey &&
    input.aiConfig.model
  ) {
    try {
      const detected = await detectPartOfSpeechWithAi(
        { word: input.word },
        {
          apiKey: input.aiConfig.apiKey,
          model: input.aiConfig.model
        }
      );

      if (detected) {
        return detected;
      }
    } catch (error) {
      console.error('Failed to detect part of speech with AI', error);
    }
  }

  return inferPartOfSpeechHeuristically(input.word, input.kind);
}
