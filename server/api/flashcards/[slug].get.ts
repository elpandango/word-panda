import { FlashcardModel } from '../../models/Flashcard';
import type { FlashcardItem, FlashcardLevel } from '../../../shared/types/flashcards';

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
  const slug = getRouterParam(event, 'slug');

  if (!slug) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      message: 'Flashcard slug is required.'
    });
  }

  const item = await FlashcardModel.findOne({ slug, isPublished: true }).lean();

  if (!item) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Not Found',
      message: 'Flashcard was not found.'
    });
  }

  return {
    item: toFlashcardItem(item)
  };
});
