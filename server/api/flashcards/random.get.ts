import { FlashcardModel } from '../../models/Flashcard';
import {
  type FlashcardItem,
  type FlashcardLevel,
  flashcardLevels
} from '../../../shared/types/flashcards';

function isFlashcardLevel(value: unknown): value is FlashcardLevel {
  return typeof value === 'string' && flashcardLevels.includes(value as FlashcardLevel);
}

function toFlashcardItem(record: {
  _id?: string;
  level: FlashcardLevel;
  topic: string;
  cardNumber: number;
  source: FlashcardItem['source'];
  front: FlashcardItem['front'];
  back: FlashcardItem['back'];
}): FlashcardItem {
  return {
    id: String(record._id),
    level: record.level,
    topic: record.topic,
    cardNumber: record.cardNumber,
    source: record.source,
    front: record.front,
    back: record.back
  };
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const level = isFlashcardLevel(query.level) ? query.level : null;
  const topic = typeof query.topic === 'string' ? query.topic.trim() : '';
  const parsedCount = Number(query.count ?? 1);
  const count = Number.isFinite(parsedCount)
    ? Math.min(Math.max(Math.trunc(parsedCount), 1), 20)
    : 1;

  const filter: Record<string, unknown> = { isPublished: true };

  if (level) {
    filter.level = level;
  }

  if (topic) {
    filter.topic = topic;
  }

  const items = await FlashcardModel.aggregate([
    { $match: filter },
    { $sample: { size: count } }
  ]);

  return {
    count,
    items: items.map((item) => toFlashcardItem(item))
  };
});
