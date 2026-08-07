export type LegacyVerbEntryRole = 'base' | 'variant';
export type VerbEntryKind = 'base' | 'derived' | 'collocation';
export type VerbEntrySource = 'manual' | 'ai_draft' | 'external_suggestion';
export type VerbEntryStatus = 'draft' | 'reviewed' | 'verified';

export interface VerbFamily {
  _id?: string;
  baseEntryId: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export interface VerbEntry {
  _id?: string;
  familyId: string;
  kind: VerbEntryKind;
  role?: LegacyVerbEntryRole;
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
