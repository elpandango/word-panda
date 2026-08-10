import { VerbEntryModel } from '../../models/VerbEntry';
import { VerbFamilyModel } from '../../models/VerbFamily';
import { resolveVerbEntryKind } from '../../../shared/utils/verb-entry-kind';
import { getBrowseWord } from '../../../shared/utils/browse-word';

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
  const rawLetter = String(query.letter ?? 'A')
    .trim()
    .toUpperCase();
  const selectedLetter = alphabet.includes(rawLetter) ? rawLetter : 'A';
  const pattern = buildLetterPattern(selectedLetter);

  const items = await VerbEntryModel.find({
    $or: [{ kind: 'base' }, { role: 'base' }]
  }).lean();

  const filteredItems = items.filter((item) => pattern.test(getBrowseWord(item)));

  const sortedItems = filteredItems.sort((left, right) =>
    getBrowseWord(left).localeCompare(getBrowseWord(right), 'de', { sensitivity: 'base' })
  );
  const familyIds = [...new Set(sortedItems.map((item) => item.familyId))];
  const families = familyIds.length
    ? await VerbFamilyModel.find({ _id: { $in: familyIds } }).lean()
    : [];
  const familySlugById = new Map(families.map((family) => [String(family._id), family.slug]));

  return {
    letter: selectedLetter,
    alphabet,
    total: sortedItems.length,
    items: sortedItems.map((item) => ({
      ...item,
      kind: resolveVerbEntryKind(item),
      familySlug: familySlugById.get(item.familyId) || null
    }))
  };
});
