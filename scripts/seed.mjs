import crypto from 'node:crypto'
import process from 'node:process'
import mongoose from 'mongoose'

const verbFamilySchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    baseEntryId: { type: String, required: true },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true }
  },
  { collection: 'verbfamilies', versionKey: false }
)

const verbEntrySchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    familyId: { type: String, required: true, index: true },
    role: { type: String, required: true },
    word: { type: String, required: true, index: true },
    translationRu: { type: String },
    meaningDe: { type: String },
    explanationRu: { type: String },
    prefix: { type: String, default: null },
    isSeparable: { type: Boolean, default: null },
    source: { type: String, required: true },
    status: { type: String, required: true },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true }
  },
  { collection: 'verbentries', versionKey: false }
)

const verbExampleSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    entryId: { type: String, required: true, index: true },
    textDe: { type: String, required: true },
    translationRu: { type: String },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true }
  },
  { collection: 'verbexamples', versionKey: false }
)

const VerbFamilyModel = mongoose.models.VerbFamilySeed || mongoose.model('VerbFamilySeed', verbFamilySchema)
const VerbEntryModel = mongoose.models.VerbEntrySeed || mongoose.model('VerbEntrySeed', verbEntrySchema)
const VerbExampleModel = mongoose.models.VerbExampleSeed || mongoose.model('VerbExampleSeed', verbExampleSchema)

function makeId(prefix) {
  return `${prefix}_${crypto.randomUUID()}`
}

function now() {
  return new Date().toISOString()
}

function buildFamily(seed) {
  const timestamp = now()
  const familyId = makeId('family')
  const baseEntryId = makeId('entry')

  const family = {
    _id: familyId,
    baseEntryId,
    createdAt: timestamp,
    updatedAt: timestamp
  }

  const baseEntry = {
    _id: baseEntryId,
    familyId,
    role: 'base',
    word: seed.base.word,
    translationRu: seed.base.translationRu,
    meaningDe: seed.base.meaningDe,
    explanationRu: seed.base.explanationRu,
    prefix: null,
    isSeparable: null,
    source: 'manual',
    status: 'reviewed',
    createdAt: timestamp,
    updatedAt: timestamp
  }

  const variants = seed.variants.map((variant) => ({
    _id: makeId('entry'),
    familyId,
    role: 'variant',
    word: variant.word,
    translationRu: variant.translationRu,
    meaningDe: variant.meaningDe,
    explanationRu: variant.explanationRu,
    prefix: variant.prefix,
    isSeparable: variant.isSeparable,
    source: 'manual',
    status: 'reviewed',
    createdAt: timestamp,
    updatedAt: timestamp
  }))

  const examples = []

  for (const example of seed.base.examples) {
    examples.push({
      _id: makeId('example'),
      entryId: baseEntryId,
      textDe: example.textDe,
      translationRu: example.translationRu,
      createdAt: timestamp,
      updatedAt: timestamp
    })
  }

  for (const variant of variants) {
    const variantSeed = seed.variants.find((item) => item.word === variant.word)
    for (const example of variantSeed.examples) {
      examples.push({
        _id: makeId('example'),
        entryId: variant._id,
        textDe: example.textDe,
        translationRu: example.translationRu,
        createdAt: timestamp,
        updatedAt: timestamp
      })
    }
  }

  return { family, entries: [baseEntry, ...variants], examples }
}

const seedFamilies = [
  {
    base: {
      word: 'stellen',
      translationRu: 'ставить, размещать',
      meaningDe: 'etwas an einen bestimmten Platz bringen',
      explanationRu: 'Базовый глагол для большого числа приставочных вариантов.',
      examples: [
        {
          textDe: 'Ich stelle die Tasse auf den Tisch.',
          translationRu: 'Я ставлю чашку на стол.'
        }
      ]
    },
    variants: [
      {
        word: 'einstellen',
        prefix: 'ein',
        isSeparable: true,
        translationRu: 'настраивать; принимать на работу',
        meaningDe: 'etwas justieren oder jemanden anstellen',
        explanationRu: 'Часто употребляется и в техническом, и в рабочем контексте.',
        examples: [
          {
            textDe: 'Kannst du bitte die Lautstärke richtig einstellen?',
            translationRu: 'Можешь, пожалуйста, правильно настроить громкость?'
          }
        ]
      },
      {
        word: 'feststellen',
        prefix: 'fest',
        isSeparable: true,
        translationRu: 'устанавливать, констатировать',
        meaningDe: 'etwas eindeutig erkennen oder fixieren',
        explanationRu: 'Очень частый глагол в письменной и формальной речи.',
        examples: [
          {
            textDe: 'Die Polizei stellte den Schaden sofort fest.',
            translationRu: 'Полиция сразу установила ущерб.'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'spüren',
      translationRu: 'чувствовать, ощущать',
      meaningDe: 'etwas körperlich oder innerlich wahrnehmen',
      explanationRu: 'Подходит для физического ощущения и внутреннего чувства.',
      examples: [
        {
          textDe: 'Ich spüre den kalten Wind im Gesicht.',
          translationRu: 'Я чувствую холодный ветер на лице.'
        }
      ]
    },
    variants: [
      {
        word: 'verspüren',
        prefix: 'ver',
        isSeparable: false,
        translationRu: 'испытывать, ощущать',
        meaningDe: 'ein Gefühl oder Bedürfnis empfinden',
        explanationRu: 'Часто с Hunger, Lust, Schmerz, Angst.',
        examples: [
          {
            textDe: 'Nach dem Lauf verspürte sie großen Durst.',
            translationRu: 'После пробежки она почувствовала сильную жажду.'
          }
        ]
      },
      {
        word: 'aufspüren',
        prefix: 'auf',
        isSeparable: true,
        translationRu: 'выслеживать, обнаруживать',
        meaningDe: 'jemanden oder etwas suchen und finden',
        explanationRu: 'Часто про поиск следов, людей, ошибок или источников.',
        examples: [
          {
            textDe: 'Die Reporter konnten die Quelle schnell aufspüren.',
            translationRu: 'Репортеры смогли быстро выйти на источник.'
          }
        ]
      }
    ]
  }
]

const main = async () => {
  const uri = process.env.MONGODB_URI

  if (!uri) {
    throw new Error('MONGODB_URI is missing. Copy .env.example to .env and set your real Atlas URI.')
  }

  await mongoose.connect(uri)

  const createdFamilies = []
  const skippedFamilies = []

  for (const seedFamily of seedFamilies) {
    const existingBaseEntry = await VerbEntryModel.findOne({
      role: 'base',
      word: seedFamily.base.word
    }).lean()

    if (existingBaseEntry) {
      skippedFamilies.push({
        baseWord: seedFamily.base.word,
        familyId: existingBaseEntry.familyId
      })
      continue
    }

    const builtFamily = buildFamily(seedFamily)

    await VerbFamilyModel.create(builtFamily.family)
    await VerbEntryModel.insertMany(builtFamily.entries)
    await VerbExampleModel.insertMany(builtFamily.examples)

    createdFamilies.push({
      familyId: builtFamily.family._id,
      baseEntryId: builtFamily.family.baseEntryId,
      baseWord: builtFamily.entries[0].word,
      variantWords: builtFamily.entries.slice(1).map((entry) => entry.word)
    })
  }

  console.log(JSON.stringify({
    ok: true,
    database: mongoose.connection.name,
    createdFamilies,
    skippedFamilies
  }, null, 2))

  await mongoose.disconnect()
}

main().catch(async (error) => {
  console.error(error)
  try {
    await mongoose.disconnect()
  } catch (disconnectError) {
    console.error('Failed to disconnect after seed error', disconnectError)
  }
  process.exit(1)
})
