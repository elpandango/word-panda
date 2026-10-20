export const prepositionVerbLevels = ['B1', 'B2'] as const;

export type PrepositionVerbLevel = (typeof prepositionVerbLevels)[number];

export interface PrepositionVerbCard {
  id: string;
  day: number;
  position: number;
  verb: string;
  translation: string;
  example: string;
}
