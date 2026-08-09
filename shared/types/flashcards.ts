export const flashcardLevels = ['A1', 'A2', 'B1', 'B2', 'C1'] as const;

export type FlashcardLevel = (typeof flashcardLevels)[number];
export type FlashcardSource = 'tutor-photo' | 'physical-card';

export interface FlashcardFace {
  title: string;
  subtitle?: string;
  lines: string[];
  exampleDe?: string;
  exampleTranslation?: string;
}

export interface FlashcardItem {
  id: string;
  level: FlashcardLevel;
  topic: string;
  cardNumber: number;
  source: FlashcardSource;
  front: {
    title: string;
    subtitle?: string;
    lines: string[];
    exampleDe?: string;
  };
  back: {
    title: string;
    lines: string[];
    exampleTranslation?: string;
  };
}

export interface FlashcardRecord {
  _id?: string;
  slug: string;
  level: FlashcardLevel;
  topic: string;
  cardNumber: number;
  source: FlashcardSource;
  front: {
    title: string;
    subtitle?: string;
    lines: string[];
    exampleDe?: string;
  };
  back: {
    title: string;
    lines: string[];
    exampleTranslation?: string;
  };
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface FlashcardsListResponse {
  level: FlashcardLevel | null;
  levels: FlashcardLevel[];
  total: number;
  items: FlashcardItem[];
}
