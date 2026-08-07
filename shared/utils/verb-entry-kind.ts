import type { LegacyVerbEntryRole, VerbEntryKind } from '../types/verbs';

interface EntryKindLike {
  kind?: VerbEntryKind | null;
  role?: LegacyVerbEntryRole | null;
  prefix?: string | null;
  isSeparable?: boolean | null;
}

export function resolveVerbEntryKind(entry: EntryKindLike): VerbEntryKind {
  if (entry.kind === 'base' || entry.kind === 'derived' || entry.kind === 'collocation') {
    return entry.kind;
  }

  if (entry.role === 'base') {
    return 'base';
  }

  if (entry.prefix || entry.isSeparable === true || entry.isSeparable === false) {
    return 'derived';
  }

  return 'collocation';
}

export function isDerivedEntryKind(kind: VerbEntryKind): boolean {
  return kind === 'derived';
}

export function isBaseEntryKind(kind: VerbEntryKind): boolean {
  return kind === 'base';
}
