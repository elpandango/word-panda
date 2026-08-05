export type VerbEntryRole = 'base' | 'variant';
export type VerbEntrySource = 'manual' | 'ai_draft' | 'external_suggestion';
export type VerbEntryStatus = 'draft' | 'reviewed' | 'verified';

export interface VerbFamily {
  _id?: string;
  baseEntryId: string;
  createdAt: string;
  updatedAt: string;
}

export interface VerbEntry {
  _id?: string;
  familyId: string;
  role: VerbEntryRole;
  word: string;
  translationRu?: string;
  meaningDe?: string;
  explanationRu?: string;
  prefix?: string | null;
  isSeparable?: boolean | null;
  source: VerbEntrySource;
  status: VerbEntryStatus;
  createdAt: string;
  updatedAt: string;
}

export interface VerbExample {
  _id?: string;
  entryId: string;
  textDe: string;
  translationRu?: string;
  createdAt: string;
  updatedAt: string;
}
