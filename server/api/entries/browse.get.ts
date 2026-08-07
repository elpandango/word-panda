import { VerbEntryModel } from '../../models/VerbEntry';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function buildLetterPattern(letter: string): RegExp {
  switch (letter) {
    case 'A':
      return /^[AaÄä]/;
    case 'O':
      return /^[OoÖö]/;
    case 'U':
      return /^[UuÜü]/;
    default:
      return new RegExp(`^[${letter}${letter.toLowerCase()}]`);
  }
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const rawLetter = String(query.letter ?? 'A').trim().toUpperCase();
  const selectedLetter = alphabet.includes(rawLetter) ? rawLetter : 'A';
  const pattern = buildLetterPattern(selectedLetter);

  const items = await VerbEntryModel.find({
    role: 'base',
    word: { $regex: pattern }
  }).lean();

  const sortedItems = items.sort((left, right) =>
    left.word.localeCompare(right.word, 'de', { sensitivity: 'base' })
  );

  return {
    letter: selectedLetter,
    alphabet,
    total: sortedItems.length,
    items: sortedItems
  };
});
