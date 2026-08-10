import type { VerbEntry } from '../types/verbs';

const germanArticlePattern = /^(der|die|das)\s+/i;

export function normalizeEntryWord(word: string): string {
  return String(word || '').trim().toLocaleLowerCase('de');
}

export function buildBrowseWordFromParts(word: string, partOfSpeech: VerbEntry['partOfSpeech']): string {
  const trimmedWord = String(word || '').trim();

  if (partOfSpeech !== 'noun') {
    return normalizeEntryWord(trimmedWord);
  }

  const withoutArticle = trimmedWord.replace(germanArticlePattern, '').trim();

  return normalizeEntryWord(withoutArticle || trimmedWord);
}

export function buildBrowseWord(entry: Pick<VerbEntry, 'word' | 'partOfSpeech'>): string {
  return buildBrowseWordFromParts(entry.word, entry.partOfSpeech);
}
