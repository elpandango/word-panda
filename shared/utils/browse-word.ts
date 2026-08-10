import type { VerbEntry } from '../types/verbs';
import { buildBrowseWord } from './entry-word-normalization';

export function getBrowseWord(entry: Pick<VerbEntry, 'word' | 'partOfSpeech'>): string {
  return buildBrowseWord(entry);
}
