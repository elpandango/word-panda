import { FlashcardModel } from '../../models/Flashcard';
import {
  type FlashcardItem,
  type FlashcardLevel,
  type FlashcardsListResponse,
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

export default defineEventHandler(async (event): Promise<FlashcardsListResponse> => {
  const query = getQuery(event);
  const requestedLevel = isFlashcardLevel(query.level) ? query.level : null;
  const topic = typeof query.topic === 'string' ? query.topic.trim() : '';
  const parsedLimit = Number(query.limit);
  const hasLimit = Number.isFinite(parsedLimit) && parsedLimit > 0;
  const limit = hasLimit ? Math.min(Math.trunc(parsedLimit), 500) : null;

  const levelsInDb = await FlashcardModel.distinct('level', { isPublished: true });
  const levels = flashcardLevels.filter((level) => levelsInDb.includes(level));
  const level = requestedLevel && levels.includes(requestedLevel) ? requestedLevel : levels[0] ?? null;

  const filter: Record<string, unknown> = { isPublished: true };

  if (level) {
    filter.level = level;
  }

  if (topic) {
    filter.topic = topic;
  }

  let queryBuilder = FlashcardModel.find(filter).sort({ cardNumber: 1 }).lean();

  if (limit) {
    queryBuilder = queryBuilder.limit(limit);
  }

  const [items, total] = await Promise.all([
    queryBuilder,
    FlashcardModel.countDocuments(filter)
  ]);

  return {
    level,
    levels,
    total,
    items: items.map((item) => toFlashcardItem(item))
  };
});
