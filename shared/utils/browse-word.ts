import type { VerbEntry } from '../types/verbs';

const germanArticlePattern = /^(der|die|das)\s+/i;

export function getBrowseWord(entry: Pick<VerbEntry, 'word' | 'partOfSpeech'>): string {
  const normalizedWord = String(entry.word || '').trim();

  if (entry.partOfSpeech !== 'noun') {
    return normalizedWord;
  }

  return normalizedWord.replace(germanArticlePattern, '').trim() || normalizedWord;
}
