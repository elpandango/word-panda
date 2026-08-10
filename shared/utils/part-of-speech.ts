import { type PartOfSpeech, type VerbEntryKind, partOfSpeechOptions } from '../types/verbs';

export function isPartOfSpeech(value: unknown): value is PartOfSpeech {
  return typeof value === 'string' && partOfSpeechOptions.includes(value as PartOfSpeech);
}

export function getPartOfSpeechLabel(partOfSpeech: PartOfSpeech): string {
  switch (partOfSpeech) {
    case 'verb':
      return 'Глагол';
    case 'noun':
      return 'Существительное';
    case 'adjective':
      return 'Прилагательное';
    case 'phrase':
      return 'Фраза';
    default:
      return 'Другое';
  }
}

export function getFixedPartOfSpeechForKind(kind: VerbEntryKind): PartOfSpeech {
  if (kind === 'derived') {
    return 'verb';
  }

  if (kind === 'collocation') {
    return 'phrase';
  }

  return 'verb';
}
