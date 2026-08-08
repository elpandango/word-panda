export type FlashcardLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1';

export interface FlashcardItem {
  id: string;
  level: FlashcardLevel;
  topic: string;
  cardNumber: number;
  source: 'tutor-photo' | 'physical-card';
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

export const flashcards: FlashcardItem[] = [
  {
    id: 'c1-ernaehrung-01-auftischen',
    level: 'C1',
    topic: 'Ernährung',
    cardNumber: 1,
    source: 'physical-card',
    front: {
      title: 'auftischen',
      lines: [],
      exampleDe: 'Es wurden leckere Speisen aufgetischt.'
    },
    back: {
      title: 'подавать на стол',
      lines: [],
      exampleTranslation: 'На стол подали вкусные блюда.'
    }
  },
  {
    id: 'c1-ernaehrung-02-abwechslungsreich',
    level: 'C1',
    topic: 'Ernährung',
    cardNumber: 2,
    source: 'physical-card',
    front: {
      title: 'abwechslungsreich',
      lines: [],
      exampleDe: 'Achten Sie auf Ihre Ernährung und essen Sie abwechslungsreich!'
    },
    back: {
      title: 'разнообразный',
      lines: [],
      exampleTranslation: 'Следите за своим питанием и ешьте разнообразно!'
    }
  },
  {
    id: 'c1-ernaehrung-03-beduerfen',
    level: 'C1',
    topic: 'Ernährung',
    cardNumber: 3,
    source: 'physical-card',
    front: {
      title: 'bedürfen',
      subtitle: '(bedarf-bedurfte-bedurft)',
      lines: [],
      exampleDe: 'Die Speise bedarf besonderer Aufmerksamkeit.'
    },
    back: {
      title: 'нуждаться, требовать',
      lines: [],
      exampleTranslation: 'Это блюдо требует особого внимания.'
    }
  },
  {
    id: 'c1-ernaehrung-04-essverhalten',
    level: 'C1',
    topic: 'Ernährung',
    cardNumber: 4,
    source: 'physical-card',
    front: {
      title: 'das Essverhalten',
      lines: [],
      exampleDe: 'Der Mediziner erforscht das Essverhalten von Kindern und Erwachsenen.'
    },
    back: {
      title: 'пищевое поведение, режим питания',
      lines: [],
      exampleTranslation: 'Врач исследует пищевое поведение детей и взрослых.'
    }
  },
  {
    id: 'c1-ernaehrung-05-fertigprodukt',
    level: 'C1',
    topic: 'Ernährung',
    cardNumber: 5,
    source: 'physical-card',
    front: {
      title: 'das Fertigprodukt',
      lines: ['die Fertigprodukte'],
      exampleDe: 'Wie nahrhaft sind diese Fertigprodukte?'
    },
    back: {
      title: 'полуфабрикат, готовый продукт',
      lines: ['мн.'],
      exampleTranslation: 'Насколько питательны эти полуфабрикаты?'
    }
  },
  {
    id: 'c1-ernaehrung-06-mindesthaltbarkeitsdatum',
    level: 'C1',
    topic: 'Ernährung',
    cardNumber: 6,
    source: 'physical-card',
    front: {
      title: 'das Mindesthaltbarkeitsdatum',
      lines: [],
      exampleDe: 'Das Mindesthaltbarkeitsdatum ist längst abgelaufen.'
    },
    back: {
      title: 'минимальный срок годности',
      lines: [],
      exampleTranslation: 'Минимальный срок годности давно истёк.'
    }
  },
  {
    id: 'c1-ernaehrung-07-pueree',
    level: 'C1',
    topic: 'Ernährung',
    cardNumber: 7,
    source: 'physical-card',
    front: {
      title: 'das Püree',
      lines: ['die Pürees', 'pürieren'],
      exampleDe: 'Als Kind hasste ich Kartoffelpüree.'
    },
    back: {
      title: 'пюре',
      lines: ['мн.', 'делать пюре, пюрировать'],
      exampleTranslation: 'В детстве я ненавидел картофельное пюре.'
    }
  },
  {
    id: 'c1-ernaehrung-08-sieb',
    level: 'C1',
    topic: 'Ernährung',
    cardNumber: 8,
    source: 'physical-card',
    front: {
      title: 'das Sieb',
      lines: ['die Siebe', 'sieben'],
      exampleDe: 'Du hast ein Gedächtnis wie ein Sieb.'
    },
    back: {
      title: 'сито, решето',
      lines: ['мн.', 'просеивать'],
      exampleTranslation: 'У тебя память как решето.'
    }
  },
  {
    id: 'c1-ernaehrung-09-aufstrich',
    level: 'C1',
    topic: 'Ernährung',
    cardNumber: 9,
    source: 'physical-card',
    front: {
      title: 'der Aufstrich',
      lines: ['die Aufstriche'],
      exampleDe: 'Was willst du als Aufstrich? Ich bevorzuge Butter als Aufstrich.'
    },
    back: {
      title: 'намазка, паста для хлеба',
      lines: ['мн.'],
      exampleTranslation: 'Что ты хочешь в качестве намазки? Я предпочитаю масло как намазку.'
    }
  },
  {
    id: 'c1-ernaehrung-10-schluck',
    level: 'C1',
    topic: 'Ernährung',
    cardNumber: 10,
    source: 'physical-card',
    front: {
      title: 'der Schluck',
      lines: ['die Schlucke', 'schlucken'],
      exampleDe: 'Hast du einen Schluck Wasser für mich?'
    },
    back: {
      title: 'глоток',
      lines: ['мн.', 'глотать'],
      exampleTranslation: 'У тебя есть для меня глоток воды?'
    }
  },
  {
    id: 'c1-ernaehrung-11-vorrat',
    level: 'C1',
    topic: 'Ernährung',
    cardNumber: 11,
    source: 'physical-card',
    front: {
      title: 'der Vorrat',
      lines: ['die Vorräte'],
      exampleDe: 'Die Vorräte gehen zur Neige.'
    },
    back: {
      title: 'запас',
      lines: ['мн.'],
      exampleTranslation: 'Запасы подходят к концу.'
    }
  },
  {
    id: 'c1-ernaehrung-12-linse',
    level: 'C1',
    topic: 'Ernährung',
    cardNumber: 12,
    source: 'physical-card',
    front: {
      title: 'die Linse',
      lines: ['die Linsen'],
      exampleDe: 'Zum Abendessen koche ich Linsen.'
    },
    back: {
      title: 'чечевица',
      lines: ['мн.'],
      exampleTranslation: 'На ужин я сварю чечевицу.'
    }
  },
  {
    id: 'c1-ernaehrung-13-verschwendung',
    level: 'C1',
    topic: 'Ernährung',
    cardNumber: 13,
    source: 'physical-card',
    front: {
      title: 'die Verschwendung',
      lines: ['verschwenden'],
      exampleDe: 'Lebensmittelverschwendung'
    },
    back: {
      title: 'расточительство, пустая трата',
      lines: ['тратить впустую, растрачивать'],
      exampleTranslation: 'Пустая трата продуктов питания.'
    }
  },
  {
    id: 'c1-ernaehrung-14-vertraeglichkeit',
    level: 'C1',
    topic: 'Ernährung',
    cardNumber: 14,
    source: 'physical-card',
    front: {
      title: 'die Verträglichkeit',
      lines: ['verträglich'],
      exampleDe: 'Diese Speise ist schwer verträglich.'
    },
    back: {
      title: 'переносимость, совместимость',
      lines: ['хорошо усваиваемый, переносимый'],
      exampleTranslation: 'Это блюдо тяжело усваивается.'
    }
  },
  {
    id: 'c1-ernaehrung-15-geniessbar',
    level: 'C1',
    topic: 'Ernährung',
    cardNumber: 15,
    source: 'physical-card',
    front: {
      title: 'genießbar',
      lines: ['ungenießbar'],
      exampleDe: 'Der Fisch ist nicht mehr genießbar.'
    },
    back: {
      title: 'съедобный, пригодный в пищу',
      lines: ['несъедобный'],
      exampleTranslation: 'Рыба уже не пригодна для еды.'
    }
  },
  {
    id: 'c1-ernaehrung-16-saettigen',
    level: 'C1',
    topic: 'Ernährung',
    cardNumber: 16,
    source: 'physical-card',
    front: {
      title: 'sättigen',
      lines: [],
      exampleDe: 'Dieses Essen sättigt. Seine Neugierde ist nicht zu sättigen.'
    },
    back: {
      title: 'насыщать, утолять',
      lines: [],
      exampleTranslation: 'Эта еда насыщает. Его любопытство невозможно насытить.'
    }
  },
  {
    id: 'c1-ernaehrung-17-verderben',
    level: 'C1',
    topic: 'Ernährung',
    cardNumber: 17,
    source: 'physical-card',
    front: {
      title: 'sich verderben',
      subtitle: '(verdirbt-verdarb-verdorben)',
      lines: ['verderblich'],
      exampleDe: 'Diese Lebensmittel sind leicht verderblich.'
    },
    back: {
      title: 'портиться, гнить',
      lines: ['скоропортящийся'],
      exampleTranslation: 'Эти продукты быстро портятся.'
    }
  },
  {
    id: 'c1-ernaehrung-18-verschlingen',
    level: 'C1',
    topic: 'Ernährung',
    cardNumber: 18,
    source: 'physical-card',
    front: {
      title: 'verschlingen',
      subtitle: '(verschlingt-verschlang-verschlungen)',
      lines: [],
      exampleDe: 'Sie verschlang das Brötchen im Nu.'
    },
    back: {
      title: 'поглощать, жадно глотать',
      lines: [],
      exampleTranslation: 'Она мгновенно проглотила булочку.'
    }
  },
  {
    id: 'c1-ernaehrung-19-verzehren',
    level: 'C1',
    topic: 'Ernährung',
    cardNumber: 19,
    source: 'physical-card',
    front: {
      title: 'verzehren',
      lines: [],
      exampleDe: 'Hast du schon dein Frühstück verzehrt?'
    },
    back: {
      title: 'съедать, поглощать',
      lines: [],
      exampleTranslation: 'Ты уже позавтракал?'
    }
  },
  {
    id: 'c1-haus-20-ausmisten',
    level: 'C1',
    topic: 'Haus',
    cardNumber: 20,
    source: 'physical-card',
    front: {
      title: 'ausmisten',
      lines: [],
      exampleDe: 'Ich muss wieder einmal meinen Schrank ausmisten.'
    },
    back: {
      title: 'наводить порядок',
      lines: [],
      exampleTranslation: 'Мне снова нужно навести порядок в шкафу.'
    }
  },
  {
    id: 'c1-haus-21-beleuchten',
    level: 'C1',
    topic: 'Haus',
    cardNumber: 21,
    source: 'physical-card',
    front: {
      title: 'beleuchten',
      lines: ['die Beleuchtung', 'die Beleuchtungen'],
      exampleDe: 'Bei dieser Beleuchtung kann man doch nicht arbeiten!'
    },
    back: {
      title: 'освещать',
      lines: ['освещение, свет', 'мн.'],
      exampleTranslation: 'При таком освещении невозможно работать!'
    }
  },
  {
    id: 'c1-haus-22-becken',
    level: 'C1',
    topic: 'Haus',
    cardNumber: 22,
    source: 'physical-card',
    front: {
      title: 'das Becken',
      lines: ['die Becken'],
      exampleDe: 'Das Becken ist verstopft. Füllst du bitte das Becken mit Wasser?'
    },
    back: {
      title: 'таз, раковина, бассейн',
      lines: ['мн.'],
      exampleTranslation: 'Раковина засорилась. Наполни, пожалуйста, таз водой.'
    }
  },
  {
    id: 'c1-haus-23-gelaender',
    level: 'C1',
    topic: 'Haus',
    cardNumber: 23,
    source: 'physical-card',
    front: {
      title: 'das Geländer',
      lines: ['die Geländer'],
      exampleDe: 'Halten Sie sich am Geländer fest.'
    },
    back: {
      title: 'перила, парапет',
      lines: ['мн.'],
      exampleTranslation: 'Крепко держитесь за перила.'
    }
  },
  {
    id: 'c1-haus-24-feuermelder',
    level: 'C1',
    topic: 'Haus',
    cardNumber: 24,
    source: 'physical-card',
    front: {
      title: 'der Feuermelder',
      lines: ['die Feuermelder'],
      exampleDe: 'Sie eilte zum Feuermelder.'
    },
    back: {
      title: 'пожарный извещатель',
      lines: ['мн.'],
      exampleTranslation: 'Она поспешила к пожарному извещателю.'
    }
  },
  {
    id: 'c1-haus-25-schimmel',
    level: 'C1',
    topic: 'Haus',
    cardNumber: 25,
    source: 'physical-card',
    front: {
      title: 'der Schimmel',
      lines: [],
      exampleDe: 'Der beste Schutz gegen Schimmel ist regelmäßiges Lüften.'
    },
    back: {
      title: 'плесень, грибок',
      lines: [],
      exampleTranslation: 'Лучшая защита от грибка — регулярное проветривание.'
    }
  },
  {
    id: 'c1-haus-26-stubenhocker',
    level: 'C1',
    topic: 'Haus',
    cardNumber: 26,
    source: 'physical-card',
    front: {
      title: 'der Stubenhocker',
      lines: ['die Stubenhocker'],
      exampleDe: 'Dieser Stubenhocker verlässt kaum seine Wohnung.'
    },
    back: {
      title: 'домосед',
      lines: ['мн.'],
      exampleTranslation: 'Этот домосед почти не выходит из дома.'
    }
  },
  {
    id: 'c1-haus-27-kaltmiete',
    level: 'C1',
    topic: 'Haus',
    cardNumber: 27,
    source: 'physical-card',
    front: {
      title: 'die Kaltmiete',
      lines: ['die Kaltmieten', 'die Warmmiete', 'die Warmmieten'],
      exampleDe: 'Die Kaltmiete liegt bei 700 Euro.'
    },
    back: {
      title: 'арендная плата без отопления',
      lines: ['мн.', 'арендная плата с отоплением', 'мн.'],
      exampleTranslation: 'Арендная плата без отопления составляет 700 евро.'
    }
  },
  {
    id: 'c1-haus-28-leitung',
    level: 'C1',
    topic: 'Haus',
    cardNumber: 28,
    source: 'physical-card',
    front: {
      title: 'die Leitung',
      lines: [],
      exampleDe: 'Die Leitung ist defekt. Wir müssen noch eine Leitung für Gas legen.'
    },
    back: {
      title: 'проводка, сеть, трубопровод',
      lines: [],
      exampleTranslation: 'Сеть неисправна. Нам ещё нужно провести газ.'
    }
  },
  {
    id: 'c1-haus-29-losloesen',
    level: 'C1',
    topic: 'Haus',
    cardNumber: 29,
    source: 'physical-card',
    front: {
      title: 'sich loslösen',
      lines: [],
      exampleDe: 'Die Tapete im Wohnzimmer löst sich langsam los.'
    },
    back: {
      title: 'отклеиваться, отрываться',
      lines: [],
      exampleTranslation: 'Обои в гостиной постепенно отклеиваются.'
    }
  },
  {
    id: 'c1-haus-30-verstopfen',
    level: 'C1',
    topic: 'Haus',
    cardNumber: 30,
    source: 'physical-card',
    front: {
      title: 'verstopfen',
      lines: ['die Verstopfung', 'die Verstopfungen'],
      exampleDe: 'Die Haare haben den Abfluss verstopft.'
    },
    back: {
      title: 'засорять, закупоривать',
      lines: ['засорение, закупорка', 'мн.'],
      exampleTranslation: 'Волосы засорили слив.'
    }
  },
  {
    id: 'c1-alltag-31-zerstreuen',
    level: 'C1',
    topic: 'Alltag',
    cardNumber: 31,
    source: 'physical-card',
    front: {
      title: 'zerstreuen',
      lines: ['zerstreut'],
      exampleDe: 'Ihre Sachen lagen im ganzen Raum zerstreut.'
    },
    back: {
      title: 'рассеивать, разбрасывать',
      lines: ['рассеянный, разбросанный'],
      exampleTranslation: 'Её вещи лежали разбросаны по всей комнате.'
    }
  },
  {
    id: 'c1-alltag-32-anzuenden',
    level: 'C1',
    topic: 'Alltag',
    cardNumber: 32,
    source: 'physical-card',
    front: {
      title: 'anzünden',
      lines: [],
      exampleDe: 'Er zündete eine Zigarette an.'
    },
    back: {
      title: 'закуривать, поджигать',
      lines: [],
      exampleTranslation: 'Он закурил сигарету.'
    }
  },
  {
    id: 'c1-alltag-33-irrtum',
    level: 'C1',
    topic: 'Alltag',
    cardNumber: 33,
    source: 'physical-card',
    front: {
      title: 'der Irrtum',
      lines: ['die Irrtümer', 'sich irren'],
      exampleDe: 'Da befindest du dich aber im Irrtum!'
    },
    back: {
      title: 'ошибка',
      lines: ['мн.', 'ошибаться'],
      exampleTranslation: 'Тут ты ошибаешься!'
    }
  },
  {
    id: 'c1-alltag-34-normalsterbliche',
    level: 'C1',
    topic: 'Alltag',
    cardNumber: 34,
    source: 'physical-card',
    front: {
      title: 'der Normalsterbliche',
      lines: ['die Normalsterblichen'],
      exampleDe: 'Gibt es hier Zimmer für Normalsterbliche? Jeder Normalsterbliche weiß, was das ist.'
    },
    back: {
      title: 'обычный человек',
      lines: ['мн.'],
      exampleTranslation: 'Тут есть комнаты для обычных людей? Каждый человек знает, что это такое.'
    }
  },
  {
    id: 'c1-alltag-35-ton',
    level: 'C1',
    topic: 'Alltag',
    cardNumber: 35,
    source: 'physical-card',
    front: {
      title: 'der Ton',
      lines: ['die Töne', 'ertönen'],
      exampleDe: 'Plötzlich ertönte ein Schrei.'
    },
    back: {
      title: 'звук',
      lines: ['мн.', 'раздаться, прозвучать'],
      exampleTranslation: 'Вдруг раздался крик.'
    }
  },
  {
    id: 'c1-alltag-36-entschleunigung',
    level: 'C1',
    topic: 'Alltag',
    cardNumber: 36,
    source: 'physical-card',
    front: {
      title: 'die Entschleunigung',
      lines: ['die Beschleunigung'],
      exampleDe: 'Das muss ich mit größter Beschleunigung erledigen.'
    },
    back: {
      title: 'замедление',
      lines: ['ускорение'],
      exampleTranslation: 'Я должен сделать это с максимальным ускорением.'
    }
  },
  {
    id: 'c1-alltag-37-gaehnen',
    level: 'C1',
    topic: 'Alltag',
    cardNumber: 37,
    source: 'physical-card',
    front: {
      title: 'gähnen',
      lines: [],
      exampleDe: 'Sie gähnte vor Müdigkeit. Konnte ich nicht anders als vor Langweile zu gähnen.'
    },
    back: {
      title: 'зевать',
      lines: [],
      exampleTranslation: 'Она зевала от усталости. Я не мог не зевать от скуки.'
    }
  },
  {
    id: 'c1-alltag-38-goennen',
    level: 'C1',
    topic: 'Alltag',
    cardNumber: 38,
    source: 'physical-card',
    front: {
      title: 'gönnen',
      lines: [],
      exampleDe: 'Ich gönne mir jetzt eine kleine Pause. Dieser Erfolg ist ihm wirklich zu gönnen.'
    },
    back: {
      title: 'позволять себе; искренне желать',
      lines: [],
      exampleTranslation: 'Я позволю себе сделать перерыв. Он правда заслуживает этого успеха.'
    }
  },
  {
    id: 'c1-alltag-39-handhaben',
    level: 'C1',
    topic: 'Alltag',
    cardNumber: 39,
    source: 'physical-card',
    front: {
      title: 'handhaben',
      lines: ['die Handhabung'],
      exampleDe: 'Kannst du mir die Handhabung dieses Geräts erklären?'
    },
    back: {
      title: '(уметь) пользоваться, управлять',
      lines: ['использование, обращение'],
      exampleTranslation: 'Ты можешь объяснить мне, как пользоваться этим прибором?'
    }
  },
  {
    id: 'c1-alltag-40-bewaehren',
    level: 'C1',
    topic: 'Alltag',
    cardNumber: 40,
    source: 'physical-card',
    front: {
      title: 'sich bewähren',
      lines: [],
      exampleDe: 'Er hat sich als treuer Freund bewährt.'
    },
    back: {
      title: 'оправдать себя, зарекомендовать себя',
      lines: [],
      exampleTranslation: 'Он показал себя верным другом.'
    }
  },
  {
    id: 'c1-alltag-41-stattdessen',
    level: 'C1',
    topic: 'Alltag',
    cardNumber: 41,
    source: 'physical-card',
    front: {
      title: 'stattdessen',
      lines: [],
      exampleDe: 'Sie hat das Yoga aufgegeben, stattdessen geht sie jetzt joggen.'
    },
    back: {
      title: 'вместо этого',
      lines: [],
      exampleTranslation: 'Она бросила йогу, вместо этого теперь бегает.'
    }
  },
  {
    id: 'c1-alltag-42-vergebens',
    level: 'C1',
    topic: 'Alltag',
    cardNumber: 42,
    source: 'physical-card',
    front: {
      title: 'vergebens',
      lines: [],
      exampleDe: 'Die Suche war vergebens.'
    },
    back: {
      title: 'напрасно, тщетно',
      lines: [],
      exampleTranslation: 'Поиск был напрасным.'
    }
  },
  {
    id: 'c1-alltag-43-vernachlaessigen',
    level: 'C1',
    topic: 'Alltag',
    cardNumber: 43,
    source: 'physical-card',
    front: {
      title: 'vernachlässigen',
      lines: [],
      exampleDe: 'Der Garten sieht vernachlässigt aus. Die Kinder fühlen sich von ihren Eltern vernachlässigt.'
    },
    back: {
      title: 'пренебрегать, запускать',
      lines: [],
      exampleTranslation: 'Сад выглядит запущенным. Дети чувствуют, что родители ими пренебрегают.'
    }
  },
  {
    id: 'c1-alltag-44-verwirklichen',
    level: 'C1',
    topic: 'Alltag',
    cardNumber: 44,
    source: 'physical-card',
    front: {
      title: 'verwirklichen',
      lines: [],
      exampleDe: 'Sie hat endlich ihren Traum vom eigenen Haus verwirklicht. Nicht alle Ideen lassen sich mühelos verwirklichen.'
    },
    back: {
      title: 'осуществлять, воплощать в жизнь',
      lines: [],
      exampleTranslation: 'Она наконец воплотила свою мечту о собственном доме. Не все идеи можно реализовать без усилий.'
    }
  },
  {
    id: 'c1-alltag-45-vorkommen',
    level: 'C1',
    topic: 'Alltag',
    cardNumber: 45,
    source: 'physical-card',
    front: {
      title: 'vorkommen',
      subtitle: '(kommt vor-kam vor-vorgekommen)',
      lines: [],
      exampleDe: 'So etwas ist mir noch nie vorgekommen.'
    },
    back: {
      title: 'происходить, случаться',
      lines: [],
      exampleTranslation: 'Такого со мной ещё не случалось.'
    }
  },
  {
    id: 'c1-einkaeufe-46-allumfassend',
    level: 'C1',
    topic: 'Einkäufe und Dienstleistungen',
    cardNumber: 46,
    source: 'physical-card',
    front: {
      title: 'allumfassend',
      lines: [],
      exampleDe: 'Eine Woche lang steht Ihnen ein allumfassendes Programm zur Verfügung.'
    },
    back: {
      title: 'всеобъемлющий',
      lines: [],
      exampleTranslation: 'В течение недели вам предлагают обширную программу.'
    }
  },
  {
    id: 'c1-einkaeufe-47-anschaffen',
    level: 'C1',
    topic: 'Einkäufe und Dienstleistungen',
    cardNumber: 47,
    source: 'physical-card',
    front: {
      title: 'anschaffen',
      lines: ['die Anschaffung', 'die Anschaffungen'],
      exampleDe: 'Hast du schon alle Anschaffungen für deine neue Wohnung gemacht?'
    },
    back: {
      title: 'приобретать, покупать',
      lines: ['приобретение, покупка', 'мн.'],
      exampleTranslation: 'Ты уже всё купил для нового жилья?'
    }
  },
  {
    id: 'c1-einkaeufe-48-auslegen',
    level: 'C1',
    topic: 'Einkäufe und Dienstleistungen',
    cardNumber: 48,
    source: 'physical-card',
    front: {
      title: 'auslegen',
      lines: [],
      exampleDe: 'Warum hat niemand die neuen Waren im Schaufenster ausgelegt?'
    },
    back: {
      title: 'раскладывать, выставлять',
      lines: [],
      exampleTranslation: 'Почему никто не выставил новые товары на витрину?'
    }
  },
  {
    id: 'c1-einkaeufe-49-ueberangebot',
    level: 'C1',
    topic: 'Einkäufe und Dienstleistungen',
    cardNumber: 49,
    source: 'physical-card',
    front: {
      title: 'das Überangebot',
      lines: ['die Überangebote', 'das Unterangebot', 'die Unterangebote'],
      exampleDe: 'In den Supermärkten herrscht ein Überangebot an Lebensmitteln.'
    },
    back: {
      title: 'избыточное предложение',
      lines: ['мн.', 'недостаточное предложение', 'мн.'],
      exampleTranslation: 'В супермаркетах существует избыточное предложение продуктов.'
    }
  },
  {
    id: 'c1-einkaeufe-50-andrang',
    level: 'C1',
    topic: 'Einkäufe und Dienstleistungen',
    cardNumber: 50,
    source: 'physical-card',
    front: {
      title: 'der Andrang',
      lines: [],
      exampleDe: 'Der Andrang bei der Eröffnung des neuen Ladens war enorm. An der Kasse herrschte großer Andrang.'
    },
    back: {
      title: 'толкотня, ажиотаж',
      lines: [],
      exampleTranslation: 'Во время открытия нового магазина была огромная толпа. У кассы была большая толчея.'
    }
  },
  {
    id: 'c1-einkaeufe-51-anfrage',
    level: 'C1',
    topic: 'Einkäufe und Dienstleistungen',
    cardNumber: 51,
    source: 'physical-card',
    front: {
      title: 'die Anfrage',
      lines: ['die Anfragen'],
      exampleDe: 'Man muss eine schriftliche Anfrage an die Firma richten.'
    },
    back: {
      title: 'запрос',
      lines: ['мн.'],
      exampleTranslation: 'Необходимо подать письменный запрос в фирму.'
    }
  },
  {
    id: 'c1-einkaeufe-52-auskunft',
    level: 'C1',
    topic: 'Einkäufe und Dienstleistungen',
    cardNumber: 52,
    source: 'physical-card',
    front: {
      title: 'die Auskunft',
      lines: ['die Auskünfte'],
      exampleDe: 'Ich hätte gern eine Auskunft.'
    },
    back: {
      title: 'справка, информация',
      lines: ['мн.'],
      exampleTranslation: 'Мне нужна информация.'
    }
  },
  {
    id: 'c1-einkaeufe-53-kundschaft',
    level: 'C1',
    topic: 'Einkäufe und Dienstleistungen',
    cardNumber: 53,
    source: 'physical-card',
    front: {
      title: 'die Kundschaft',
      lines: ['die Kundschaften'],
      exampleDe: 'Wir haben eine große Kundschaft.'
    },
    back: {
      title: 'покупатели, клиенты',
      lines: ['мн.'],
      exampleTranslation: 'У нас много клиентов.'
    }
  },
  {
    id: 'c1-einkaeufe-54-neuerscheinung',
    level: 'C1',
    topic: 'Einkäufe und Dienstleistungen',
    cardNumber: 54,
    source: 'physical-card',
    front: {
      title: 'die Neuerscheinung',
      lines: ['die Neuerscheinungen'],
      exampleDe: 'Auf der Buchmesse gab es viele Neuerscheinungen.'
    },
    back: {
      title: 'новинка',
      lines: ['мн.'],
      exampleTranslation: 'На книжной ярмарке было много новинок.'
    }
  },
  {
    id: 'c1-einkaeufe-55-erschwinglich',
    level: 'C1',
    topic: 'Einkäufe und Dienstleistungen',
    cardNumber: 55,
    source: 'physical-card',
    front: {
      title: 'erschwinglich',
      lines: [],
      exampleDe: 'Preise in diesem Geschäft sind kaum erschwinglich.'
    },
    back: {
      title: 'доступный',
      lines: [],
      exampleTranslation: 'Цены в этом магазине едва доступные.'
    }
  },
  {
    id: 'c1-einkaeufe-56-gewaehrleisten',
    level: 'C1',
    topic: 'Einkäufe und Dienstleistungen',
    cardNumber: 56,
    source: 'physical-card',
    front: {
      title: 'gewährleisten',
      lines: [],
      exampleDe: 'Können Sie gewährleisten, dass die Lieferung rechtzeitig ankommt?'
    },
    back: {
      title: 'обеспечивать, гарантировать',
      lines: [],
      exampleTranslation: 'Можете ли вы гарантировать своевременную доставку?'
    }
  },
  {
    id: 'c1-einkaeufe-57-lagern',
    level: 'C1',
    topic: 'Einkäufe und Dienstleistungen',
    cardNumber: 57,
    source: 'physical-card',
    front: {
      title: 'lagern',
      lines: ['das Lager', 'die Lager'],
      exampleDe: 'Diese Größe haben wir noch am Lager.'
    },
    back: {
      title: 'складировать, хранить на складе',
      lines: ['склад, кладовая', 'мн.'],
      exampleTranslation: 'Этот размер у нас ещё есть на складе.'
    }
  },
  {
    id: 'c1-einkaeufe-58-vergriffen',
    level: 'C1',
    topic: 'Einkäufe und Dienstleistungen',
    cardNumber: 58,
    source: 'physical-card',
    front: {
      title: 'vergriffen',
      lines: [],
      exampleDe: 'Das Buch ist leider zurzeit vergriffen.'
    },
    back: {
      title: 'распроданный',
      lines: [],
      exampleTranslation: 'Сейчас книга, к сожалению, распродана.'
    }
  },
  {
    id: 'c1-familie-59-adoptieren',
    level: 'C1',
    topic: 'Familie',
    cardNumber: 59,
    source: 'physical-card',
    front: {
      title: 'adoptieren',
      lines: ['das Adoptivkind', 'die Adoptivkinder', 'die Adoptiveltern'],
      exampleDe: ''
    },
    back: {
      title: 'усыновлять, удочерять',
      lines: ['приёмный ребёнок', 'мн.', 'приёмные родители'],
      exampleTranslation: ''
    }
  },
  {
    id: 'c1-familie-60-aufrechterhalten',
    level: 'C1',
    topic: 'Familie',
    cardNumber: 60,
    source: 'physical-card',
    front: {
      title: 'aufrechterhalten',
      subtitle: '(erhält aufrecht-erhielt aufrecht-aufrechterhalten)',
      lines: [],
      exampleDe: 'Er bemüht sich, den Kontakt mit der Familie aufrechtzuerhalten.'
    },
    back: {
      title: 'поддерживать, сохранять',
      lines: [],
      exampleTranslation: 'Он старается поддерживать связь со своей семьёй.'
    }
  },
  {
    id: 'c1-familie-61-ausweichen',
    level: 'C1',
    topic: 'Familie',
    cardNumber: 61,
    source: 'physical-card',
    front: {
      title: 'ausweichen',
      subtitle: '(weicht aus-wich aus-ausgewichen)',
      lines: [],
      exampleDe: 'Warum weichst du mir aus?'
    },
    back: {
      title: 'избегать, уклоняться',
      lines: [],
      exampleTranslation: 'Почему ты меня избегаешь?'
    }
  },
  {
    id: 'c1-familie-62-bescheren',
    level: 'C1',
    topic: 'Familie',
    cardNumber: 62,
    source: 'physical-card',
    front: {
      title: 'bescheren',
      lines: ['die Bescherung', 'die Bescherungen'],
      exampleDe: 'Was habt ihr den Kindern zu Weihnachten beschert?'
    },
    back: {
      title: 'дарить, делать подарок',
      lines: ['раздача подарков', 'мн.'],
      exampleTranslation: 'Что вы подарили детям на Рождество?'
    }
  },
  {
    id: 'c1-familie-63-zusammengehoerigkeit',
    level: 'C1',
    topic: 'Familie',
    cardNumber: 63,
    source: 'physical-card',
    front: {
      title: 'das Zusammengehörigkeit',
      lines: [],
      exampleDe: 'Unter den Schwestern gab es keine Zusammengehörigkeit.'
    },
    back: {
      title: 'единство, сплочённость',
      lines: [],
      exampleTranslation: 'Между сёстрами не было единства.'
    }
  },
  {
    id: 'c1-familie-64-lebensgefaehrte',
    level: 'C1',
    topic: 'Familie',
    cardNumber: 64,
    source: 'physical-card',
    front: {
      title: 'der Lebensgefährte',
      lines: ['die Lebensgefährten'],
      exampleDe: 'Sie ist mit ihrem Lebensgefährten zusammengezogen.'
    },
    back: {
      title: 'спутник жизни',
      lines: ['мн.'],
      exampleTranslation: 'Она съехалась со своим спутником жизни.'
    }
  },
  {
    id: 'c1-familie-65-flitterwochen',
    level: 'C1',
    topic: 'Familie',
    cardNumber: 65,
    source: 'physical-card',
    front: {
      title: 'die Flitterwochen',
      lines: [],
      exampleDe: 'Wir haben unsere Flitterwochen in Venedig verbracht. Wann fahrt ihr denn in die Flitterwochen?'
    },
    back: {
      title: 'медовый месяц',
      lines: [],
      exampleTranslation: 'Мы провели наш медовый месяц в Венеции. Когда у вас медовый месяц?'
    }
  },
  {
    id: 'c1-familie-66-pubertaet',
    level: 'C1',
    topic: 'Familie',
    cardNumber: 66,
    source: 'physical-card',
    front: {
      title: 'die Pubertät',
      lines: ['pubertieren'],
      exampleDe: 'Er kommt allmählich in die Pubertät.'
    },
    back: {
      title: 'половая зрелость',
      lines: ['достигать половой зрелости'],
      exampleTranslation: 'Он постепенно достигает половой зрелости.'
    }
  },
  {
    id: 'c1-familie-67-stiefeltern',
    level: 'C1',
    topic: 'Familie',
    cardNumber: 67,
    source: 'physical-card',
    front: {
      title: 'die Stiefeltern',
      lines: ['der Stiefvater', 'die Stiefväter', 'die Stiefmutter', 'die Stiefmütter'],
      exampleDe: ''
    },
    back: {
      title: 'неродные родители',
      lines: ['отчим', 'мн.', 'мачеха', 'мн.'],
      exampleTranslation: ''
    }
  },
  {
    id: 'c1-familie-68-kneifen',
    level: 'C1',
    topic: 'Familie',
    cardNumber: 68,
    source: 'physical-card',
    front: {
      title: 'kneifen',
      subtitle: '(kneift-kniff-gekniffen)',
      lines: [],
      exampleDe: 'Sie kniff das Kind in die Backe.'
    },
    back: {
      title: 'щипать, ущипнуть',
      lines: [],
      exampleTranslation: 'Она ущипнула ребёнка за щёку.'
    }
  },
  {
    id: 'c1-familie-69-lediglich',
    level: 'C1',
    topic: 'Familie',
    cardNumber: 69,
    source: 'physical-card',
    front: {
      title: 'lediglich',
      lines: [],
      exampleDe: 'Er kümmert sich lediglich um seine Angelegenheiten.'
    },
    back: {
      title: 'лишь, только, исключительно',
      lines: [],
      exampleTranslation: 'Он занимается лишь своими делами.'
    }
  },
  {
    id: 'c1-familie-70-mitentscheiden',
    level: 'C1',
    topic: 'Familie',
    cardNumber: 70,
    source: 'physical-card',
    front: {
      title: 'mitentscheiden',
      subtitle: '(mitentscheidet-mitentschied-mitentschieden)',
      lines: [],
      exampleDe: 'Kinder dürfen auch mitentscheiden.'
    },
    back: {
      title: 'участвовать в совместном решении',
      lines: [],
      exampleTranslation: 'Дети тоже имеют право голоса при принятии решений.'
    }
  },
  {
    id: 'c1-familie-71-neugeboren',
    level: 'C1',
    topic: 'Familie',
    cardNumber: 71,
    source: 'physical-card',
    front: {
      title: 'neugeboren',
      lines: ['das Neugeborene', 'die Neugeborenen'],
      exampleDe: 'In dieser Station liegen die neugeborenen Kinder.'
    },
    back: {
      title: 'новорождённый',
      lines: ['новорождённый ребёнок', 'мн.'],
      exampleTranslation: 'В этом отделении находятся новорождённые дети.'
    }
  },
  {
    id: 'c1-familie-72-vorleben',
    level: 'C1',
    topic: 'Familie',
    cardNumber: 72,
    source: 'physical-card',
    front: {
      title: 'vorleben',
      lines: [],
      exampleDe: 'Ihre Eltern haben ihr Hilfsbereitschaft vorgelebt.'
    },
    back: {
      title: 'показывать своим примером',
      lines: [],
      exampleTranslation: 'Её родители собственным примером показали, что такое готовность помогать.'
    }
  },
  {
    id: 'c1-familie-73-zugehoerig',
    level: 'C1',
    topic: 'Familie',
    cardNumber: 73,
    source: 'physical-card',
    front: {
      title: 'zugehörig',
      lines: ['die Zugehörigkeit'],
      exampleDe: 'Er hatte ein Gefühl der Zugehörigkeit zu seinen Nächsten.'
    },
    back: {
      title: 'относящийся к кому-либо, принадлежащий',
      lines: ['принадлежность'],
      exampleTranslation: 'У него было чувство принадлежности к близким.'
    }
  },
  {
    id: 'c1-aussehen-74-auffaellig',
    level: 'C1',
    topic: 'Aussehen',
    cardNumber: 74,
    source: 'physical-card',
    front: {
      title: 'auffällig',
      lines: ['unauffällig'],
      exampleDe: 'Ihre Kleidung ist sehr auffällig.'
    },
    back: {
      title: 'бросающийся в глаза, необычный',
      lines: ['незаметный, скромный'],
      exampleTranslation: 'Её одежда очень необычная.'
    }
  },
  {
    id: 'c1-aussehen-75-auftreten',
    level: 'C1',
    topic: 'Aussehen',
    cardNumber: 75,
    source: 'physical-card',
    front: {
      title: 'auftreten',
      subtitle: '(tritt auf-trat auf-aufgetreten)',
      lines: ['das Auftreten'],
      exampleDe: 'Du bist heute etwas unsicher aufgetreten.'
    },
    back: {
      title: 'держаться, вести себя',
      lines: ['поведение'],
      exampleTranslation: 'Ты сегодня вёл себя немного неуверенно.'
    }
  },
  {
    id: 'c1-aussehen-76-beurteilen',
    level: 'C1',
    topic: 'Aussehen',
    cardNumber: 76,
    source: 'physical-card',
    front: {
      title: 'beurteilen',
      lines: ['die Beurteilung', 'die Beurteilungen'],
      exampleDe: 'Man sollte Leute nicht nach ihrem Aussehen beurteilen.'
    },
    back: {
      title: 'оценивать',
      lines: ['оценка', 'мн.'],
      exampleTranslation: 'Не стоит оценивать людей по их внешнему виду.'
    }
  },
  {
    id: 'c1-aussehen-77-koerperhaltung',
    level: 'C1',
    topic: 'Aussehen',
    cardNumber: 77,
    source: 'physical-card',
    front: {
      title: 'die Körperhaltung',
      lines: ['die Körperhaltungen'],
      exampleDe: 'Achte auf deine Körperhaltung!'
    },
    back: {
      title: 'осанка',
      lines: ['мн.'],
      exampleTranslation: 'Следи за своей осанкой!'
    }
  },
  {
    id: 'c1-aussehen-78-schuppen',
    level: 'C1',
    topic: 'Aussehen',
    cardNumber: 78,
    source: 'physical-card',
    front: {
      title: 'die Schuppen',
      lines: [],
      exampleDe: 'Welches Shampoo gegen Schuppen würden Sie mir empfehlen?'
    },
    back: {
      title: 'перхоть',
      lines: [],
      exampleTranslation: 'Какой шампунь от перхоти вы бы мне порекомендовали?'
    }
  },
  {
    id: 'c1-aussehen-79-sommersprosse',
    level: 'C1',
    topic: 'Aussehen',
    cardNumber: 79,
    source: 'physical-card',
    front: {
      title: 'die Sommersprosse',
      lines: ['die Sommersprossen', 'sommersprossig'],
      exampleDe: 'Sein Gesicht war mit Sommersprossen übersät.'
    },
    back: {
      title: 'веснушка',
      lines: ['мн.', 'веснушчатый'],
      exampleTranslation: 'Его лицо было усыпано веснушками.'
    }
  },
  {
    id: 'c1-aussehen-80-taetowierung',
    level: 'C1',
    topic: 'Aussehen',
    cardNumber: 80,
    source: 'physical-card',
    front: {
      title: 'die Tätowierung',
      lines: ['die Tätowierungen', 'tätowieren'],
      exampleDe: 'Er ließ seine Tätowierung entfernen.'
    },
    back: {
      title: 'татуировка',
      lines: ['мн.', 'делать татуировку'],
      exampleTranslation: 'Он удалил свою татуировку.'
    }
  },
  {
    id: 'c1-aussehen-81-frisieren',
    level: 'C1',
    topic: 'Aussehen',
    cardNumber: 81,
    source: 'physical-card',
    front: {
      title: 'frisieren',
      lines: [],
      exampleDe: 'Der Friseur hat dich sehr schön frisiert.'
    },
    back: {
      title: 'делать причёску, укладывать волосы',
      lines: [],
      exampleTranslation: 'Парикмахер сделал тебе красивую причёску.'
    }
  },
  {
    id: 'c1-aussehen-82-gebueckt',
    level: 'C1',
    topic: 'Aussehen',
    cardNumber: 82,
    source: 'physical-card',
    front: {
      title: 'gebückt',
      lines: ['aufrecht'],
      exampleDe: 'Vor Müdigkeit konnte sie nicht mehr aufrecht sitzen.'
    },
    back: {
      title: 'сгорбленный, сутулый',
      lines: ['прямой'],
      exampleTranslation: 'От усталости она уже не могла сидеть прямо.'
    }
  },
  {
    id: 'c1-aussehen-83-hager',
    level: 'C1',
    topic: 'Aussehen',
    cardNumber: 83,
    source: 'physical-card',
    front: {
      title: 'hager',
      lines: ['korpulent'],
      exampleDe: 'Der Mann hatte ein hageres Gesicht.'
    },
    back: {
      title: 'худой, сухощавый',
      lines: ['полный, тучный'],
      exampleTranslation: 'У мужчины было худое лицо.'
    }
  },
  {
    id: 'c1-aussehen-84-hinken',
    level: 'C1',
    topic: 'Aussehen',
    cardNumber: 84,
    source: 'physical-card',
    front: {
      title: 'hinken',
      lines: [],
      exampleDe: 'Er hat schon als Kind mit dem linken Bein gehinkt.'
    },
    back: {
      title: 'хромать',
      lines: [],
      exampleTranslation: 'Он хромал на левую ногу ещё когда был ребёнком.'
    }
  },
  {
    id: 'c1-aussehen-85-starren',
    level: 'C1',
    topic: 'Aussehen',
    cardNumber: 85,
    source: 'physical-card',
    front: {
      title: 'starren',
      lines: [],
      exampleDe: 'Der Junge starrte geistesabwesend vor sich hin.'
    },
    back: {
      title: 'пристально смотреть',
      lines: [],
      exampleTranslation: 'Мальчик уставился в одну точку перед собой.'
    }
  },
  {
    id: 'c1-aussehen-86-verziehen',
    level: 'C1',
    topic: 'Aussehen',
    cardNumber: 86,
    source: 'physical-card',
    front: {
      title: 'verziehen',
      subtitle: '(verzieht-verzog-verzogen)',
      lines: [],
      exampleDe: 'Sie verzog schmerzlich ihr Gesicht.'
    },
    back: {
      title: 'кривить, морщить',
      lines: [],
      exampleTranslation: 'Её лицо скривилось от боли.'
    }
  },
  {
    id: 'c1-aussehen-87-zucken',
    level: 'C1',
    topic: 'Aussehen',
    cardNumber: 87,
    source: 'physical-card',
    front: {
      title: 'zucken',
      lines: ['die Zuckung', 'die Zuckungen'],
      exampleDe: 'Er zuckte kurz mit den Augenbrauen.'
    },
    back: {
      title: 'дёргаться, подёргиваться',
      lines: ['подёргивание, посмикивание', 'мн.'],
      exampleTranslation: 'Он на мгновение дёрнул бровями.'
    }
  },
  {
    id: 'c1-gefuehle-88-ahnen',
    level: 'C1',
    topic: 'Gefühle',
    cardNumber: 88,
    source: 'physical-card',
    front: {
      title: 'ahnen',
      lines: [],
      exampleDe: 'Wir haben nichts geahnt. Wer konnte das ahnen!'
    },
    back: {
      title: 'догадываться, предчувствовать',
      lines: [],
      exampleTranslation: 'Мы ничего не подозревали. Кто мог такое предвидеть!'
    }
  },
  {
    id: 'c1-gefuehle-89-angetan-sein',
    level: 'C1',
    topic: 'Gefühle',
    cardNumber: 89,
    source: 'physical-card',
    front: {
      title: 'angetan sein',
      subtitle: '(ist-war-gewesen)',
      lines: [],
      exampleDe: 'Sie war sofort von ihm angetan. Am Anfang waren sie von meiner Idee nicht besonders angetan.'
    },
    back: {
      title: 'быть очарованным, захваченным',
      lines: [],
      exampleTranslation: 'Он ей сразу понравился. Сначала моя идея их не очень захватила.'
    }
  },
  {
    id: 'c1-gefuehle-90-aufrichtig',
    level: 'C1',
    topic: 'Gefühle',
    cardNumber: 90,
    source: 'physical-card',
    front: {
      title: 'aufrichtig',
      lines: [],
      exampleDe: 'Das tut mir aufrichtig leid! Er besitzt einen aufrichtigen Charakter.'
    },
    back: {
      title: 'искренний, откровенный, прямой',
      lines: [],
      exampleTranslation: 'Мне правда жаль! По характеру он откровенный человек.'
    }
  },
  {
    id: 'c1-gefuehle-91-beharren',
    level: 'C1',
    topic: 'Gefühle',
    cardNumber: 91,
    source: 'physical-card',
    front: {
      title: 'beharren',
      lines: ['beharrlich'],
      exampleDe: 'Trotz aller Argumente beharrt er auf seiner Meinung.'
    },
    back: {
      title: 'настаивать, не отступать',
      lines: ['упрямый, настойчивый'],
      exampleTranslation: 'Несмотря на все аргументы, он настаивает на своём мнении.'
    }
  },
  {
    id: 'c1-gefuehle-92-bereuen',
    level: 'C1',
    topic: 'Gefühle',
    cardNumber: 92,
    source: 'physical-card',
    front: {
      title: 'bereuen',
      lines: ['die Reue'],
      exampleDe: 'Ich habe diese Entscheidung nie bereut.'
    },
    back: {
      title: 'жалеть, раскаиваться',
      lines: ['раскаяние, сожаление'],
      exampleTranslation: 'Я никогда не жалел об этом решении.'
    }
  },
  {
    id: 'c1-gefuehle-93-bedenken',
    level: 'C1',
    topic: 'Gefühle',
    cardNumber: 93,
    source: 'physical-card',
    front: {
      title: 'das Bedenken',
      lines: ['die Bedenken', 'bedenkenlos', 'bedenkenswert'],
      exampleDe: ''
    },
    back: {
      title: 'сомнение, опасение',
      lines: ['мн.', 'без колебаний, безрассудный', 'заслуживающий обдумывания'],
      exampleTranslation: ''
    }
  },
  {
    id: 'c1-gefuehle-94-gewissen',
    level: 'C1',
    topic: 'Gefühle',
    cardNumber: 94,
    source: 'physical-card',
    front: {
      title: 'das Gewissen',
      lines: ['die Gewissensbisse'],
      exampleDe: 'Das böse Gewissen verrät sich selbst.'
    },
    back: {
      title: 'совесть',
      lines: ['угрызения совести'],
      exampleTranslation: 'На воре и шапка горит.'
    }
  },
  {
    id: 'c1-gefuehle-95-urteilsvermoegen',
    level: 'C1',
    topic: 'Gefühle',
    cardNumber: 95,
    source: 'physical-card',
    front: {
      title: 'das Urteilsvermögen',
      lines: [],
      exampleDe: 'Man sollte das rationale Urteilsvermögen nie ausschalten.'
    },
    back: {
      title: 'разум, способность суждения',
      lines: [],
      exampleTranslation: 'Никогда не стоит отключать рациональное мышление.'
    }
  },
  {
    id: 'c1-gefuehle-96-abscheu',
    level: 'C1',
    topic: 'Gefühle',
    cardNumber: 96,
    source: 'physical-card',
    front: {
      title: 'der Abscheu',
      lines: ['verabscheuen'],
      exampleDe: 'Ich verabscheue solche Intrigen.'
    },
    back: {
      title: 'отвращение, омерзение',
      lines: ['испытывать отвращение, ненавидеть'],
      exampleTranslation: 'Я ненавижу такие интриги.'
    }
  },
  {
    id: 'c1-gefuehle-97-drang',
    level: 'C1',
    topic: 'Gefühle',
    cardNumber: 97,
    source: 'physical-card',
    front: {
      title: 'der Drang',
      lines: [],
      exampleDe: 'Das hat sie aus innerem Drang getan.'
    },
    back: {
      title: 'порыв, стремление, влечение',
      lines: [],
      exampleTranslation: 'Она сделала это по внутреннему побуждению.'
    }
  },
  {
    id: 'c1-gefuehle-98-herzensbrecher',
    level: 'C1',
    topic: 'Gefühle',
    cardNumber: 98,
    source: 'physical-card',
    front: {
      title: 'der Herzensbrecher',
      lines: ['die Herzensbrecher'],
      exampleDe: 'Sie ist eine richtige Herzensbrecherin.'
    },
    back: {
      title: 'серцеед, донжуан',
      lines: ['мн.'],
      exampleTranslation: 'Она настоящая сердцеедка.'
    }
  },
  {
    id: 'c1-gefuehle-99-liebeskummer',
    level: 'C1',
    topic: 'Gefühle',
    cardNumber: 99,
    source: 'physical-card',
    front: {
      title: 'der Liebeskummer',
      lines: [],
      exampleDe: 'Er hat Liebeskummer.'
    },
    back: {
      title: 'любовная тоска',
      lines: [],
      exampleTranslation: 'У него любовная тоска.'
    }
  },
  {
    id: 'c1-gefuehle-100-miesepeter',
    level: 'C1',
    topic: 'Gefühle',
    cardNumber: 100,
    source: 'physical-card',
    front: {
      title: 'der Miesepeter',
      lines: ['die Miesepeter'],
      exampleDe: 'Sei doch nicht so ein Miesepeter!'
    },
    back: {
      title: 'буркун, вечно недовольный человек',
      lines: ['мн.'],
      exampleTranslation: 'Не будь таким бурчуном!'
    }
  },
  {
    id: 'c1-gefuehle-101-truebsinn',
    level: 'C1',
    topic: 'Gefühle',
    cardNumber: 101,
    source: 'physical-card',
    front: {
      title: 'der Trübsinn',
      lines: ['trübsinnig'],
      exampleDe: 'Schon wieder ist sie in Trübsinn verfallen.'
    },
    back: {
      title: 'уныние, меланхолия',
      lines: ['меланхоличный, мрачный, печальный'],
      exampleTranslation: 'Она снова впала в уныние.'
    }
  },
  {
    id: 'c1-gefuehle-102-wille',
    level: 'C1',
    topic: 'Gefühle',
    cardNumber: 102,
    source: 'physical-card',
    front: {
      title: 'der Wille',
      lines: ['willensstark', 'willensschwach'],
      exampleDe: ''
    },
    back: {
      title: 'воля',
      lines: ['волевой', 'слабовольный'],
      exampleTranslation: ''
    }
  },
  {
    id: 'c1-gefuehle-103-hingabe',
    level: 'C1',
    topic: 'Gefühle',
    cardNumber: 103,
    source: 'physical-card',
    front: {
      title: 'die Hingabe',
      lines: ['sich hingeben'],
      subtitle: '(gibt hin-gab hin-hingegeben)',
      exampleDe: 'Er spielte mit Hingabe Klavier.'
    },
    back: {
      title: 'преданность, увлечённость, самоотдача',
      lines: ['отдаваться, посвящать себя'],
      exampleTranslation: 'Он самозабвенно играл на рояле.'
    }
  },
  {
    id: 'c1-gefuehle-104-verlegenheit',
    level: 'C1',
    topic: 'Gefühle',
    cardNumber: 104,
    source: 'physical-card',
    front: {
      title: 'die Verlegenheit',
      lines: ['verlegen'],
      exampleDe: 'Es entstand ein verlegenes Schweigen.'
    },
    back: {
      title: 'смущение, замешательство',
      lines: ['смущённый'],
      exampleTranslation: 'Наступило смущённое молчание.'
    }
  },
  {
    id: 'c1-gefuehle-105-vernunft',
    level: 'C1',
    topic: 'Gefühle',
    cardNumber: 105,
    source: 'physical-card',
    front: {
      title: 'die Vernunft',
      lines: ['vernünftig'],
      exampleDe: 'Ich dachte, du bist ein vernünftiger Mensch.'
    },
    back: {
      title: 'разум, здравый смысл',
      lines: ['разумный, рассудительный'],
      exampleTranslation: 'Я думал, ты рассудительный человек.'
    }
  },
  {
    id: 'c1-gefuehle-106-ermutigen',
    level: 'C1',
    topic: 'Gefühle',
    cardNumber: 106,
    source: 'physical-card',
    front: {
      title: 'ermutigen',
      lines: ['entmutigen'],
      exampleDe: 'Lass dich nicht so schnell entmutigen!'
    },
    back: {
      title: 'подбадривать, вдохновлять',
      lines: ['лишать уверенности в себе, обескураживать'],
      exampleTranslation: 'Не теряй так быстро уверенность в себе!'
    }
  },
  {
    id: 'c1-gefuehle-107-raechen',
    level: 'C1',
    topic: 'Gefühle',
    cardNumber: 107,
    source: 'physical-card',
    front: {
      title: 'sich rächen',
      lines: ['die Rache'],
      exampleDe: 'Dafür werde ich mich noch rächen.'
    },
    back: {
      title: 'мстить',
      lines: ['месть'],
      exampleTranslation: 'Я за это ещё отомщу.'
    }
  },
  {
    id: 'c1-gefuehle-108-sehnen',
    level: 'C1',
    topic: 'Gefühle',
    cardNumber: 108,
    source: 'physical-card',
    front: {
      title: 'sich sehnen',
      lines: ['die Sehnsucht'],
      exampleDe: 'Die Menschen sehnen sich nach etwas Ruhe.'
    },
    back: {
      title: 'жаждать, стремиться',
      lines: ['страстное желание, стремление'],
      exampleTranslation: 'Люди жаждут немного покоя.'
    }
  },
  {
    id: 'c1-gefuehle-109-staunen',
    level: 'C1',
    topic: 'Gefühle',
    cardNumber: 109,
    source: 'physical-card',
    front: {
      title: 'staunen',
      lines: ['das Staunen'],
      exampleDe: 'Seine Worte versetzten mich in Staunen.'
    },
    back: {
      title: 'удивляться, изумляться',
      lines: ['удивление, изумление'],
      exampleTranslation: 'Его слова меня удивили.'
    }
  },
  {
    id: 'c1-gefuehle-110-tiefsinnig',
    level: 'C1',
    topic: 'Gefühle',
    cardNumber: 110,
    source: 'physical-card',
    front: {
      title: 'tiefsinnig',
      lines: ['oberflächlich'],
      exampleDe: 'Ist er wirklich so ein oberflächlicher Mensch?'
    },
    back: {
      title: 'глубокий, глубокомысленный, задумчивый',
      lines: ['поверхностный, несерьёзный'],
      exampleTranslation: 'Он правда такой поверхностный человек?'
    }
  },
  {
    id: 'c1-gefuehle-111-verblueffen',
    level: 'C1',
    topic: 'Gefühle',
    cardNumber: 111,
    source: 'physical-card',
    front: {
      title: 'verblüffen',
      lines: [],
      exampleDe: 'Ich war über ihre Antwort verblüfft.'
    },
    back: {
      title: 'поражать, ошеломлять, удивлять',
      lines: [],
      exampleTranslation: 'Я был ошеломлён её ответом.'
    }
  },
  {
    id: 'c1-gefuehle-112-verkraften',
    level: 'C1',
    topic: 'Gefühle',
    cardNumber: 112,
    source: 'physical-card',
    front: {
      title: 'verkraften',
      lines: [],
      exampleDe: 'Diese Enttäuschung habe ich nur schwer verkraftet. Wir können diese Kosten nicht verkraften.'
    },
    back: {
      title: 'справиться, выдержать',
      lines: [],
      exampleTranslation: 'Мне было тяжело пережить это разочарование. Мы не осилим такие расходы.'
    }
  },
  {
    id: 'c1-gefuehle-113-verunsichern',
    level: 'C1',
    topic: 'Gefühle',
    cardNumber: 113,
    source: 'physical-card',
    front: {
      title: 'verunsichern',
      lines: [],
      exampleDe: 'Du verunsicherst mich durch dein Schweigen. Wenn ich an meine Zukunft denke, bin ich sehr verunsichert.'
    },
    back: {
      title: 'вселять неуверенность',
      lines: [],
      exampleTranslation: 'Твоё молчание вселяет неуверенность. Когда я думаю о своём будущем, чувствую себя неуверенно.'
    }
  },
  {
    id: 'c1-gefuehle-114-zurueckgewinnen',
    level: 'C1',
    topic: 'Gefühle',
    cardNumber: 114,
    source: 'physical-card',
    front: {
      title: 'zurückgewinnen',
      subtitle: '(gewinnt zurück-gewann zurück-zurückgewonnen)',
      lines: [],
      exampleDe: 'Du wirst sein Vertrauen nicht so einfach zurückgewinnen.'
    },
    back: {
      title: 'обрести снова, вернуть',
      lines: [],
      exampleTranslation: 'Тебе будет нелегко вернуть его доверие.'
    }
  },
  {
    id: 'c1-gesundheit-115-altern',
    level: 'C1',
    topic: 'Gesundheit',
    cardNumber: 115,
    source: 'physical-card',
    front: {
      title: 'altern',
      lines: ['die Alterung'],
      exampleDe: 'Er ist früh gealtert.'
    },
    back: {
      title: 'стареть',
      lines: ['старение'],
      exampleTranslation: 'Он рано постарел.'
    }
  },
  {
    id: 'c1-gesundheit-116-angeboren',
    level: 'C1',
    topic: 'Gesundheit',
    cardNumber: 116,
    source: 'physical-card',
    front: {
      title: 'angeboren',
      lines: ['erworben'],
      exampleDe: 'Die Krankheit ist angeboren.'
    },
    back: {
      title: 'врождённый',
      lines: ['приобретённый'],
      exampleTranslation: 'Эта болезнь врождённая.'
    }
  },
  {
    id: 'c1-gesundheit-117-daneben-sein',
    level: 'C1',
    topic: 'Gesundheit',
    cardNumber: 117,
    source: 'physical-card',
    front: {
      title: 'daneben sein',
      subtitle: '(ist daneben-war daneben-gewesen)',
      lines: [],
      exampleDe: 'Ich war gestern den ganzen Tag daneben.'
    },
    back: {
      title: 'плохо себя чувствовать',
      lines: [],
      exampleTranslation: 'Вчера я весь день плохо себя чувствовал.'
    }
  },
  {
    id: 'c1-gesundheit-118-sodbrennen',
    level: 'C1',
    topic: 'Gesundheit',
    cardNumber: 118,
    source: 'physical-card',
    front: {
      title: 'das Sodbrennen',
      lines: [],
      exampleDe: 'Ich habe Sodbrennen. Können Sie mir ein Mittel gegen Sodbrennen empfehlen?'
    },
    back: {
      title: 'изжога',
      lines: [],
      exampleTranslation: 'У меня изжога. Можете посоветовать мне что-нибудь от изжоги?'
    }
  },
  {
    id: 'c1-gesundheit-119-diabetes',
    level: 'C1',
    topic: 'Gesundheit',
    cardNumber: 119,
    source: 'physical-card',
    front: {
      title: 'der Diabetes',
      lines: ['die Zuckerkrankheit'],
      exampleDe: 'Nur in seltenen Fällen bricht ein Diabetes schon in jungen Jahren aus.'
    },
    back: {
      title: 'диабет',
      lines: ['сахарная болезнь'],
      exampleTranslation: 'Диабет редко проявляется ещё в молодости.'
    }
  },
  {
    id: 'c1-gesundheit-120-einzelfall',
    level: 'C1',
    topic: 'Gesundheit',
    cardNumber: 120,
    source: 'physical-card',
    front: {
      title: 'der Einzelfall',
      lines: ['die Einzelfälle'],
      exampleDe: 'In seltenen Einzelfällen treten Nebenwirkungen auf.'
    },
    back: {
      title: 'единичный случай',
      lines: ['мн.'],
      exampleTranslation: 'В единичных случаях возникают побочные эффекты.'
    }
  },
  {
    id: 'c1-gesundheit-121-gaumen',
    level: 'C1',
    topic: 'Gesundheit',
    cardNumber: 121,
    source: 'physical-card',
    front: {
      title: 'der Gaumen',
      lines: ['die Gaumen'],
      exampleDe: 'Mein Gaumen ist ganz trocken.'
    },
    back: {
      title: 'нёбо',
      lines: ['мн.'],
      exampleTranslation: 'У меня пересохло во рту.'
    }
  },
  {
    id: 'c1-gesundheit-122-muttermal',
    level: 'C1',
    topic: 'Gesundheit',
    cardNumber: 122,
    source: 'physical-card',
    front: {
      title: 'das Muttermal',
      lines: ['die Muttermale'],
      exampleDe: 'Dieses Muttermal habe ich von Geburt an.'
    },
    back: {
      title: 'родинка',
      lines: ['мн.'],
      exampleTranslation: 'Эта родинка у меня с рождения.'
    }
  },
  {
    id: 'c1-gesundheit-123-nerv',
    level: 'C1',
    topic: 'Gesundheit',
    cardNumber: 123,
    source: 'physical-card',
    front: {
      title: 'der Nerv',
      lines: ['die Nerven'],
      exampleDe: 'Der Arzt musste den Nerv betäuben.'
    },
    back: {
      title: 'нерв',
      lines: ['мн.'],
      exampleTranslation: 'Врачу пришлось обезболить нерв.'
    }
  },
  {
    id: 'c1-gesundheit-124-schweiss',
    level: 'C1',
    topic: 'Gesundheit',
    cardNumber: 124,
    source: 'physical-card',
    front: {
      title: 'der Schweiß',
      lines: ['schwitzen'],
      exampleDe: 'Er war wie in Schweiß gebadet.'
    },
    back: {
      title: 'пот',
      lines: ['потеть'],
      exampleTranslation: 'Он обливался потом.'
    }
  },
  {
    id: 'c1-gesundheit-125-abwehr',
    level: 'C1',
    topic: 'Gesundheit',
    cardNumber: 125,
    source: 'physical-card',
    front: {
      title: 'die Abwehr',
      lines: ['der Abwehrmechanismus', 'die Abwehrmechanismen'],
      exampleDe: 'Die Abwehrmechanismen des Körpers werden nicht aktiviert.'
    },
    back: {
      title: 'защита, профилактика',
      lines: ['защитный механизм', 'мн.'],
      exampleTranslation: 'Защитные механизмы тела не активируются.'
    }
  },
  {
    id: 'c1-gesundheit-126-bewegungsarmut',
    level: 'C1',
    topic: 'Gesundheit',
    cardNumber: 126,
    source: 'physical-card',
    front: {
      title: 'die Bewegungsarmut',
      lines: [],
      exampleDe: 'Viele Menschen leiden an Bewegungsarmut.'
    },
    back: {
      title: 'малоподвижный образ жизни, гипокинезия',
      lines: [],
      exampleTranslation: 'Многие люди страдают от гипокинезии.'
    }
  },
  {
    id: 'c1-gesundheit-127-fusssohle',
    level: 'C1',
    topic: 'Gesundheit',
    cardNumber: 127,
    source: 'physical-card',
    front: {
      title: 'die Fußsohle',
      lines: ['die Fußsohlen'],
      exampleDe: 'Mir tun die Fußsohlen weh.'
    },
    back: {
      title: 'ступня',
      lines: ['мн.'],
      exampleTranslation: 'У меня болят ступни.'
    }
  },
  {
    id: 'c1-gesundheit-128-kur',
    level: 'C1',
    topic: 'Gesundheit',
    cardNumber: 128,
    source: 'physical-card',
    front: {
      title: 'die Kur',
      lines: ['die Kuren'],
      exampleDe: 'Nach dem Herzinfarkt musste er eine zweiwöchige Kur machen.'
    },
    back: {
      title: 'лечение, курс лечения',
      lines: ['мн.'],
      exampleTranslation: 'После инфаркта ему пришлось пройти двухнедельный курс лечения.'
    }
  },
  {
    id: 'c1-gesundheit-129-masern',
    level: 'C1',
    topic: 'Gesundheit',
    cardNumber: 129,
    source: 'physical-card',
    front: {
      title: 'die Masern',
      lines: [],
      exampleDe: 'Masern sind hochansteckend.'
    },
    back: {
      title: 'корь',
      lines: [],
      exampleTranslation: 'Корь очень заразна.'
    }
  },
  {
    id: 'c1-gesundheit-130-sterblichkeit',
    level: 'C1',
    topic: 'Gesundheit',
    cardNumber: 130,
    source: 'physical-card',
    front: {
      title: 'die Sterblichkeit',
      lines: ['sterblich'],
      exampleDe: 'Alle Lebewesen sind sterblich.'
    },
    back: {
      title: 'смертность',
      lines: ['смертный'],
      exampleTranslation: 'Все живые существа смертны.'
    }
  },
  {
    id: 'c1-gesundheit-131-einhergehen',
    level: 'C1',
    topic: 'Gesundheit',
    cardNumber: 131,
    source: 'physical-card',
    front: {
      title: 'einhergehen',
      subtitle: '(geht einher-ging einher-einhergegangen)',
      lines: [],
      exampleDe: 'Diese Krankheit geht meist mit Ausschlag einher.'
    },
    back: {
      title: 'сопровождаться',
      lines: [],
      exampleTranslation: 'Эта болезнь обычно сопровождается сыпью.'
    }
  },
  {
    id: 'c1-gesundheit-132-einweisen',
    level: 'C1',
    topic: 'Gesundheit',
    cardNumber: 132,
    source: 'physical-card',
    front: {
      title: 'einweisen',
      subtitle: '(weist ein-wies ein-eingewiesen)',
      lines: [],
      exampleDe: 'Der Arzt hat sie ins Krankenhaus eingewiesen.'
    },
    back: {
      title: 'направлять, давать направление',
      lines: [],
      exampleTranslation: 'Врач направил её в больницу.'
    }
  },
  {
    id: 'c1-gesundheit-133-gesundheitsfoerdernd',
    level: 'C1',
    topic: 'Gesundheit',
    cardNumber: 133,
    source: 'physical-card',
    front: {
      title: 'gesundheitsfördernd',
      lines: ['gesundheitsschädigend'],
      exampleDe: 'Diese Stoffe sind gesundheitsschädigend.'
    },
    back: {
      title: 'оздоровительный',
      lines: ['вредный для здоровья'],
      exampleTranslation: 'Эти вещества вредны для здоровья.'
    }
  },
  {
    id: 'c1-gesundheit-134-laehmen',
    level: 'C1',
    topic: 'Gesundheit',
    cardNumber: 134,
    source: 'physical-card',
    front: {
      title: 'lähmen',
      lines: ['die Lähmung', 'die Lähmungen'],
      exampleDe: 'Seit dem Unfall hat er einen gelähmten Arm.'
    },
    back: {
      title: 'парализовать',
      lines: ['паралич, состояние оцепенения'],
      exampleTranslation: 'После аварии у него одна рука парализована.'
    }
  },
  {
    id: 'c1-gesundheit-135-nachlassen',
    level: 'C1',
    topic: 'Gesundheit',
    cardNumber: 135,
    source: 'physical-card',
    front: {
      title: 'nachlassen',
      subtitle: '(lässt nach-ließ nach-nachgelassen)',
      lines: [],
      exampleDe: 'Die Sehkraft lässt im Alter nach.'
    },
    back: {
      title: 'ослабевать, ухудшаться',
      lines: [],
      exampleTranslation: 'С возрастом зрение ухудшается.'
    }
  },
  {
    id: 'c1-gesundheit-136-veranlagt',
    level: 'C1',
    topic: 'Gesundheit',
    cardNumber: 136,
    source: 'physical-card',
    front: {
      title: 'veranlagt',
      lines: ['die Veranlagung', 'die Veranlagungen'],
      exampleDe: 'Das Kind ist musikalisch veranlagt.'
    },
    back: {
      title: 'склонный, предрасположенный',
      lines: ['склонность, предрасположенность', 'мн.'],
      exampleTranslation: 'У ребёнка есть способности к музыке.'
    }
  },
  {
    id: 'c1-gesundheit-137-verdraengen',
    level: 'C1',
    topic: 'Gesundheit',
    cardNumber: 137,
    source: 'physical-card',
    front: {
      title: 'verdrängen',
      lines: ['die Verdrängung'],
      exampleDe: 'Diese Erinnerungen möchte ich am liebsten verdrängen.'
    },
    back: {
      title: 'вытеснять',
      lines: ['вытеснение'],
      exampleTranslation: 'Больше всего мне хотелось бы вытеснить эти воспоминания.'
    }
  },
  {
    id: 'c1-gesundheit-138-verhueten',
    level: 'C1',
    topic: 'Gesundheit',
    cardNumber: 138,
    source: 'physical-card',
    front: {
      title: 'verhüten',
      lines: ['das Verhütungsmittel', 'die Verhütungsmittel'],
      exampleDe: 'Wir verhüten mit der Pille.'
    },
    back: {
      title: 'предохраняться',
      lines: ['противозачаточное средство', 'мн.'],
      exampleTranslation: 'Мы предохраняемся с помощью таблеток.'
    }
  },
  {
    id: 'c1-gesundheit-139-vermeintlich',
    level: 'C1',
    topic: 'Gesundheit',
    cardNumber: 139,
    source: 'physical-card',
    front: {
      title: 'vermeintlich',
      lines: [],
      exampleDe: 'Die vermeintliche Grippe entpuppte sich als eine einfache Erkältung.'
    },
    back: {
      title: 'мнимый, кажущийся',
      lines: [],
      exampleTranslation: 'Мнимый грипп оказался простой простудой.'
    }
  },
  {
    id: 'c1-gesundheit-140-wirksam',
    level: 'C1',
    topic: 'Gesundheit',
    cardNumber: 140,
    source: 'physical-card',
    front: {
      title: 'wirksam',
      lines: ['die Wirksamkeit'],
      exampleDe: 'Ist dieses Medikament wirksam?'
    },
    back: {
      title: 'действенный, эффективный',
      lines: ['действенность, эффективность'],
      exampleTranslation: 'Этот препарат эффективен?'
    }
  },
  {
    id: 'c1-wetter-141-tauwetter',
    level: 'C1',
    topic: 'Wetter',
    cardNumber: 141,
    source: 'physical-card',
    front: {
      title: 'das Tauwetter',
      lines: [],
      exampleDe: 'Tauwetter setzt ein.'
    },
    back: {
      title: 'оттепель',
      lines: [],
      exampleTranslation: 'Начинается оттепель.'
    }
  },
  {
    id: 'c1-wetter-142-tau',
    level: 'C1',
    topic: 'Wetter',
    cardNumber: 142,
    source: 'physical-card',
    front: {
      title: 'der Tau',
      lines: [],
      exampleDe: 'Es ist Tau gefallen.'
    },
    back: {
      title: 'роса',
      lines: [],
      exampleTranslation: 'Выпала роса.'
    }
  },
  {
    id: 'c1-wetter-143-hitzewelle',
    level: 'C1',
    topic: 'Wetter',
    cardNumber: 143,
    source: 'physical-card',
    front: {
      title: 'die Hitzewelle',
      lines: ['die Hitzewellen', 'die Kältewelle', 'die Kältewellen'],
      exampleDe: 'Das Land leidet seit Wochen unter einer Hitzewelle.'
    },
    back: {
      title: 'волна жары',
      lines: ['мн.', 'волна холода', 'мн.'],
      exampleTranslation: 'Страна уже несколько недель страдает от волны жары.'
    }
  },
  {
    id: 'c1-wetter-144-wetterkarte',
    level: 'C1',
    topic: 'Wetter',
    cardNumber: 144,
    source: 'physical-card',
    front: {
      title: 'die Wetterkarte',
      lines: ['die Wetterkarten'],
      exampleDe: 'Die Wetterkarte zeigt starke Regenfälle.'
    },
    back: {
      title: 'синоптическая карта',
      lines: ['мн.'],
      exampleTranslation: 'Синоптическая карта показывает сильные дожди.'
    }
  },
  {
    id: 'c1-wetter-145-durchdringen',
    level: 'C1',
    topic: 'Wetter',
    cardNumber: 145,
    source: 'physical-card',
    front: {
      title: 'durchdringen',
      subtitle: '(dringt durch-drang durch-durchgedrungen)',
      lines: [],
      exampleDe: 'Die Sonne ist heute kaum durchgedrungen.'
    },
    back: {
      title: 'проникать, пробиваться',
      lines: [],
      exampleTranslation: 'Солнце сегодня почти не пробивалось.'
    }
  },
  {
    id: 'c1-wetter-146-einsetzen',
    level: 'C1',
    topic: 'Wetter',
    cardNumber: 146,
    source: 'physical-card',
    front: {
      title: 'einsetzen',
      lines: [],
      exampleDe: 'Regen hat wieder eingesetzt.'
    },
    back: {
      title: 'начинаться, возобновляться',
      lines: [],
      exampleTranslation: 'Дождь снова начался.'
    }
  },
  {
    id: 'c1-wetter-147-schwuel',
    level: 'C1',
    topic: 'Wetter',
    cardNumber: 147,
    source: 'physical-card',
    front: {
      title: 'schwül',
      lines: ['die Schwüle'],
      exampleDe: 'Es ist heute furchtbar schwül.'
    },
    back: {
      title: 'душный, знойный',
      lines: ['духота'],
      exampleTranslation: 'Сегодня ужасно душно.'
    }
  },
  {
    id: 'c1-wetter-148-vielerorts',
    level: 'C1',
    topic: 'Wetter',
    cardNumber: 148,
    source: 'physical-card',
    front: {
      title: 'vielerorts',
      lines: [],
      exampleDe: 'Der Dauerregen verursachte vielerorts Überschwemmungen. Heftige Gewitter sind vielerorts niedergegangen.'
    },
    back: {
      title: 'во многих местах',
      lines: [],
      exampleTranslation: 'Затяжные дожди привели к наводнениям во многих местах. Во многих местах прошли сильные грозы.'
    }
  },
  {
    id: 'c1-wetter-149-zusetzen',
    level: 'C1',
    topic: 'Wetter',
    cardNumber: 149,
    source: 'physical-card',
    front: {
      title: 'zusetzen',
      lines: [],
      exampleDe: 'Die Hitze setzt mir stark zu.'
    },
    back: {
      title: 'донимать, изматывать',
      lines: [],
      exampleTranslation: 'Жара меня сильно изматывает.'
    }
  },
  {
    id: 'c1-natur-150-beguenstigen',
    level: 'C1',
    topic: 'Natur',
    cardNumber: 150,
    source: 'physical-card',
    front: {
      title: 'begünstigen',
      lines: ['die Begünstigung', 'die Begünstigungen'],
      exampleDe: 'Das milde Wetter begünstigt das Pflanzenwachstum.'
    },
    back: {
      title: 'способствовать',
      lines: ['благоприятствование', 'мн.'],
      exampleTranslation: 'Мягкая погода способствует росту растений.'
    }
  },
  {
    id: 'c1-natur-151-firmament',
    level: 'C1',
    topic: 'Natur',
    cardNumber: 151,
    source: 'physical-card',
    front: {
      title: 'das Firmament',
      lines: [],
      exampleDe: 'Die Sterne leuchten am Firmament.'
    },
    back: {
      title: 'небосвод, небосклон',
      lines: [],
      exampleTranslation: 'Звёзды сияют на небосводе.'
    }
  },
  {
    id: 'c1-natur-152-hochwasser',
    level: 'C1',
    topic: 'Natur',
    cardNumber: 152,
    source: 'physical-card',
    front: {
      title: 'das Hochwasser',
      lines: [],
      exampleDe: 'Der Fluss hat Hochwasser. Das Hochwasser hat sehr großen Schaden verursacht.'
    },
    back: {
      title: 'паводок, наводнение',
      lines: [],
      exampleTranslation: 'На реке паводок. Наводнение причинило очень большой ущерб.'
    }
  },
  {
    id: 'c1-natur-153-morgenrot',
    level: 'C1',
    topic: 'Natur',
    cardNumber: 153,
    source: 'physical-card',
    front: {
      title: 'das Morgenrot',
      lines: ['das Abendrot'],
      exampleDe: 'Das Morgenrot zieht auf.'
    },
    back: {
      title: 'утренняя заря',
      lines: ['вечерняя заря'],
      exampleTranslation: 'Появляется утренняя заря.'
    }
  },
  {
    id: 'c1-natur-154-damm',
    level: 'C1',
    topic: 'Natur',
    cardNumber: 154,
    source: 'physical-card',
    front: {
      title: 'der Damm',
      lines: ['die Dämme'],
      exampleDe: 'Der alte Damm droht zu brechen. Hier wird noch ein Damm aufgeschüttet.'
    },
    back: {
      title: 'дамба, плотина, насыпь',
      lines: ['мн.'],
      exampleTranslation: 'Старая дамба вот-вот прорвётся. Здесь насыпают ещё одну дамбу.'
    }
  },
  {
    id: 'c1-natur-155-kranich',
    level: 'C1',
    topic: 'Natur',
    cardNumber: 155,
    source: 'physical-card',
    front: {
      title: 'der Kranich',
      lines: ['die Kraniche'],
      exampleDe: 'Kraniche zogen am Himmel.'
    },
    back: {
      title: 'журавль',
      lines: ['мн.'],
      exampleTranslation: 'В небе летели журавли.'
    }
  },
  {
    id: 'c1-natur-156-loewenzahn',
    level: 'C1',
    topic: 'Natur',
    cardNumber: 156,
    source: 'physical-card',
    front: {
      title: 'der Löwenzahn',
      lines: ['die Pusteblume', 'die Pusteblumen'],
      exampleDe: 'Auf der Wiese gab es ganz viele Pusteblumen.'
    },
    back: {
      title: 'одуванчик',
      lines: ['одуванчик', 'мн.'],
      exampleTranslation: 'На лугу было очень много одуванчиков.'
    }
  },
  {
    id: 'c1-natur-157-ausbeutung',
    level: 'C1',
    topic: 'Natur',
    cardNumber: 157,
    source: 'physical-card',
    front: {
      title: 'die Ausbeutung',
      lines: ['ausbeuten'],
      exampleDe: 'Natürliche Vorräte an Wasser werden ausgebeutet.'
    },
    back: {
      title: 'эксплуатация',
      lines: ['эксплуатировать'],
      exampleTranslation: 'Природные запасы воды эксплуатируются.'
    }
  },
  {
    id: 'c1-natur-158-ebbe',
    level: 'C1',
    topic: 'Natur',
    cardNumber: 158,
    source: 'physical-card',
    front: {
      title: 'die Ebbe',
      lines: ['die Ebben', 'die Flut', 'die Fluten'],
      exampleDe: 'In einer Stunde kommt die Flut.'
    },
    back: {
      title: 'отлив',
      lines: ['мн.', 'прилив', 'мн.'],
      exampleTranslation: 'Через час начнётся прилив.'
    }
  },
  {
    id: 'c1-natur-159-gattung',
    level: 'C1',
    topic: 'Natur',
    cardNumber: 159,
    source: 'physical-card',
    front: {
      title: 'die Gattung',
      lines: ['die Gattungen'],
      exampleDe: 'In der Familie „Katzen“ gibt es eine Gattung „Großkatzen“.'
    },
    back: {
      title: 'вид, разновидность',
      lines: ['мн.'],
      exampleTranslation: 'В семействе «кошачьи» есть вид «большие кошки».'
    }
  },
  {
    id: 'c1-natur-160-kluft',
    level: 'C1',
    topic: 'Natur',
    cardNumber: 160,
    source: 'physical-card',
    front: {
      title: 'die Kluft',
      lines: ['die Klüfte'],
      exampleDe: 'Pass auf, dass du in die Kluft nicht stürzt!'
    },
    back: {
      title: 'ущелье, бездна',
      lines: ['мн.'],
      exampleTranslation: 'Осторожно, не упади в ущелье!'
    }
  },
  {
    id: 'c1-natur-161-oase',
    level: 'C1',
    topic: 'Natur',
    cardNumber: 161,
    source: 'physical-card',
    front: {
      title: 'die Oase',
      lines: ['die Oasen'],
      exampleDe: 'Die Karawane erreichte endlich die Oase. Dieser Ort ist für mich eine Oase der Ruhe.'
    },
    back: {
      title: 'оазис',
      lines: ['мн.'],
      exampleTranslation: 'Караван наконец достиг оазиса. Это место для меня — оазис покоя.'
    }
  },
  {
    id: 'c1-natur-162-saison',
    level: 'C1',
    topic: 'Natur',
    cardNumber: 162,
    source: 'physical-card',
    front: {
      title: 'die Saison',
      lines: ['die Saisons', 'saisonal'],
      exampleDe: 'Die Saison für Erdbeeren endet bald.'
    },
    back: {
      title: 'сезон',
      lines: ['мн.', 'сезонный'],
      exampleTranslation: 'Сезон клубники скоро закончится.'
    }
  },
  {
    id: 'c1-natur-163-duester',
    level: 'C1',
    topic: 'Natur',
    cardNumber: 163,
    source: 'physical-card',
    front: {
      title: 'düster',
      lines: ['die Düsterheit'],
      exampleDe: 'Diese Landschaft finde ich zu düster.'
    },
    back: {
      title: 'мрачный, хмурый',
      lines: ['мрачность, тьма, мгла'],
      exampleTranslation: 'Этот пейзаж кажется мне слишком мрачным.'
    }
  },
  {
    id: 'c1-natur-164-heulen',
    level: 'C1',
    topic: 'Natur',
    cardNumber: 164,
    source: 'physical-card',
    front: {
      title: 'heulen',
      lines: [],
      exampleDe: 'Mit den Wölfen muss man heulen. Draußen heulte der Sturm.'
    },
    back: {
      title: 'выть, завывать',
      lines: [],
      exampleTranslation: 'С волками жить — по-волчьи выть. Снаружи завывал шторм.'
    }
  },
  {
    id: 'c1-natur-165-rauschen',
    level: 'C1',
    topic: 'Natur',
    cardNumber: 165,
    source: 'physical-card',
    front: {
      title: 'rauschen',
      lines: [],
      exampleDe: 'Das Meer rauscht. Man hört den Brunnen leise rauschen.'
    },
    back: {
      title: 'шуметь, шелестеть',
      lines: [],
      exampleTranslation: 'Море шумит. Слышно, как тихо журчит источник.'
    }
  },
  {
    id: 'c1-bildung-166-tarnen',
    level: 'C1',
    topic: 'Wissenschaft und Bildung',
    cardNumber: 166,
    source: 'physical-card',
    front: {
      title: 'tarnen',
      lines: ['die Tarnung', 'die Tarnungen'],
      exampleDe: 'Viele Tiere können sich hervorragend tarnen.'
    },
    back: {
      title: 'маскироваться',
      lines: ['маскировка, камуфляж', 'мн.'],
      exampleTranslation: 'Многие животные умеют прекрасно маскироваться.'
    }
  },
  {
    id: 'c1-bildung-167-widerspiegeln',
    level: 'C1',
    topic: 'Wissenschaft und Bildung',
    cardNumber: 167,
    source: 'physical-card',
    front: {
      title: 'widerspiegeln',
      lines: ['die Widerspiegelung', 'die Widerspiegelungen'],
      exampleDe: 'Das Wasser spiegelt den Himmel wider.'
    },
    back: {
      title: 'отражать, отображать',
      lines: ['отражение, отпечаток'],
      exampleTranslation: 'Вода отражает небо.'
    }
  },
  {
    id: 'c1-bildung-168-abschneiden',
    level: 'C1',
    topic: 'Wissenschaft und Bildung',
    cardNumber: 168,
    source: 'physical-card',
    front: {
      title: 'abschneiden',
      subtitle: '(schneidet ab-schnitt ab-abgeschnitten)',
      lines: [],
      exampleDe: 'Bei der letzten Prüfung hat er gut abgeschnitten.'
    },
    back: {
      title: 'показать результат',
      lines: [],
      exampleTranslation: 'На последнем экзамене он показал хороший результат.'
    }
  },
  {
    id: 'c1-bildung-169-aneignen',
    level: 'C1',
    topic: 'Wissenschaft und Bildung',
    cardNumber: 169,
    source: 'physical-card',
    front: {
      title: 'aneignen',
      lines: ['die Aneignung'],
      exampleDe: 'An der Universität kann man sich umfangreiches Wissen aneignen.'
    },
    back: {
      title: 'перенимать, осваивать, овладевать',
      lines: ['усвоение, овладение'],
      exampleTranslation: 'В университете можно освоить большой объём знаний.'
    }
  },
  {
    id: 'c1-bildung-170-gen',
    level: 'C1',
    topic: 'Wissenschaft und Bildung',
    cardNumber: 170,
    source: 'physical-card',
    front: {
      title: 'das Gen',
      lines: ['die Gene'],
      exampleDe: 'Gene sind die Träger der Erbinformation. Die DNA enthält gut 20.000 Gene.'
    },
    back: {
      title: 'ген',
      lines: ['мн.'],
      exampleTranslation: 'Гены являются носителями наследственной информации. ДНК содержит более 20 000 генов.'
    }
  },
  {
    id: 'c1-bildung-171-durchbruch',
    level: 'C1',
    topic: 'Wissenschaft und Bildung',
    cardNumber: 171,
    source: 'physical-card',
    front: {
      title: 'der Durchbruch',
      lines: [],
      exampleDe: 'Diese Technik war der Durchbruch.'
    },
    back: {
      title: 'прорыв',
      lines: [],
      exampleTranslation: 'Эта технология стала прорывом.'
    }
  },
  {
    id: 'c1-bildung-172-vorreiter',
    level: 'C1',
    topic: 'Wissenschaft und Bildung',
    cardNumber: 172,
    source: 'physical-card',
    front: {
      title: 'der Vorreiter',
      lines: ['die Vorreiter'],
      exampleDe: 'Sie gelten als Vorreiter auf diesem Gebiet.'
    },
    back: {
      title: 'новатор, флагман',
      lines: [],
      exampleTranslation: 'Их считают новаторами в этой сфере.'
    }
  },
  {
    id: 'c1-bildung-173-grundlage',
    level: 'C1',
    topic: 'Wissenschaft und Bildung',
    cardNumber: 173,
    source: 'physical-card',
    front: {
      title: 'die Grundlage',
      lines: ['die Grundlagen', 'grundlegend'],
      exampleDe: 'Lernen ist eine Grundlage für den Erfolg.'
    },
    back: {
      title: 'основа, база',
      lines: ['мн.', 'основной, основополагающий'],
      exampleTranslation: 'Учёба является основой успеха.'
    }
  },
  {
    id: 'c1-bildung-174-wissensluecke',
    level: 'C1',
    topic: 'Wissenschaft und Bildung',
    cardNumber: 174,
    source: 'physical-card',
    front: {
      title: 'die Wissenslücke',
      lines: ['die Wissenslücken'],
      exampleDe: 'In Biologie habe ich viele Wissenslücken.'
    },
    back: {
      title: 'пробел в знаниях',
      lines: ['мн.'],
      exampleTranslation: 'В биологии у меня много пробелов в знаниях.'
    }
  },
  {
    id: 'c1-bildung-175-ergebnisorientiert',
    level: 'C1',
    topic: 'Wissenschaft und Bildung',
    cardNumber: 175,
    source: 'physical-card',
    front: {
      title: 'ergebnisorientiert',
      lines: ['erlebnisorientiert'],
      exampleDe: 'Erlebnisorientiertes Lernen wird heute immer populärer.'
    },
    back: {
      title: 'ориентированный на результат',
      lines: ['ориентированный на переживания, опыт'],
      exampleTranslation: 'Обучение, ориентированное на опыт, сегодня становится всё популярнее.'
    }
  },
  {
    id: 'c1-bildung-176-erlaeutern',
    level: 'C1',
    topic: 'Wissenschaft und Bildung',
    cardNumber: 176,
    source: 'physical-card',
    front: {
      title: 'erläutern',
      lines: ['die Erläuterung', 'die Erläuterungen'],
      exampleDe: 'Hier fehlen noch fachliche Erläuterungen.'
    },
    back: {
      title: 'объяснять, толковать',
      lines: ['объяснение, толкование', 'мн.'],
      exampleTranslation: 'Здесь всё ещё не хватает профессиональных пояснений.'
    }
  },
  {
    id: 'c1-bildung-177-fundiert',
    level: 'C1',
    topic: 'Wissenschaft und Bildung',
    cardNumber: 177,
    source: 'physical-card',
    front: {
      title: 'fundiert',
      lines: [],
      exampleDe: 'Er verfügt über ein fundiertes Wissen.'
    },
    back: {
      title: 'обоснованный, основательный',
      lines: [],
      exampleTranslation: 'Он обладает глубокими знаниями.'
    }
  },
  {
    id: 'c1-bildung-178-hinterfragen',
    level: 'C1',
    topic: 'Wissenschaft und Bildung',
    cardNumber: 178,
    source: 'physical-card',
    front: {
      title: 'hinterfragen',
      lines: [],
      exampleDe: 'Er wollte immer alles bis ins letzte Detail hinterfragen.'
    },
    back: {
      title: 'задумываться, ставить под сомнение',
      lines: [],
      exampleTranslation: 'Он всегда хотел разобраться во всём до мельчайших деталей.'
    }
  },
  {
    id: 'c1-bildung-179-nachvollziehen',
    level: 'C1',
    topic: 'Wissenschaft und Bildung',
    cardNumber: 179,
    source: 'physical-card',
    front: {
      title: 'nachvollziehen',
      subtitle: '(vollzieht nach-vollzog nach-nachvollzogen)',
      lines: ['nachvollziehbar'],
      exampleDe: 'Diese Theorie ist für Anfänger nicht nachvollziehbar.'
    },
    back: {
      title: 'понимать, принимать',
      lines: ['понятный'],
      exampleTranslation: 'Эта теория непонятна для начинающих.'
    }
  },
  {
    id: 'c1-bildung-180-schwertun',
    level: 'C1',
    topic: 'Wissenschaft und Bildung',
    cardNumber: 180,
    source: 'physical-card',
    front: {
      title: 'sich schwertun',
      subtitle: '(tut sich schwer-tat sich schwer-schwergetan)',
      lines: [],
      exampleDe: 'Mit dieser Aufgabe tue ich mich schwer.'
    },
    back: {
      title: 'испытывать трудности',
      lines: [],
      exampleTranslation: 'У меня трудности с этим заданием.'
    }
  },
  {
    id: 'c1-bildung-181-sicherstellen',
    level: 'C1',
    topic: 'Wissenschaft und Bildung',
    cardNumber: 181,
    source: 'physical-card',
    front: {
      title: 'sicherstellen',
      lines: [],
      exampleDe: 'Wir müssen sicherstellen, dass alles reibungslos abläuft.'
    },
    back: {
      title: 'гарантировать, обеспечивать',
      lines: [],
      exampleTranslation: 'Мы должны гарантировать, что всё пройдёт без осложнений.'
    }
  },
  {
    id: 'c1-bildung-182-untermauern',
    level: 'C1',
    topic: 'Wissenschaft und Bildung',
    cardNumber: 182,
    source: 'physical-card',
    front: {
      title: 'untermauern',
      lines: ['die Untermauerung', 'die Untermauerungen'],
      exampleDe: 'Können Sie Ihre Aussage mit Beweisen untermauern?'
    },
    back: {
      title: 'обосновывать, подкреплять',
      lines: ['обоснование'],
      exampleTranslation: 'Можете ли вы подкрепить своё высказывание доказательствами?'
    }
  },
  {
    id: 'c1-bildung-183-vermitteln',
    level: 'C1',
    topic: 'Wissenschaft und Bildung',
    cardNumber: 183,
    source: 'physical-card',
    front: {
      title: 'vermitteln',
      lines: ['die Vermittlung'],
      exampleDe: 'Der Professor kann sein Wissen gut an die Studenten vermitteln.'
    },
    back: {
      title: 'передавать, знакомить',
      lines: ['передача'],
      exampleTranslation: 'Профессору хорошо удаётся передавать знания студентам.'
    }
  },
  {
    id: 'c1-bildung-184-widerlegen',
    level: 'C1',
    topic: 'Wissenschaft und Bildung',
    cardNumber: 184,
    source: 'physical-card',
    front: {
      title: 'widerlegen',
      lines: [],
      exampleDe: 'Es war nicht schwer, diese Theorie zu widerlegen.'
    },
    back: {
      title: 'опровергать, отвергать',
      lines: [],
      exampleTranslation: 'Было нетрудно опровергнуть эту теорию.'
    }
  },
  {
    id: 'c1-bildung-185-zu-kurz-kommen',
    level: 'C1',
    topic: 'Wissenschaft und Bildung',
    cardNumber: 185,
    source: 'physical-card',
    front: {
      title: 'zu kurz kommen',
      lines: [],
      exampleDe: 'Der Spaß am Lernen soll nicht zu kurz kommen.'
    },
    back: {
      title: 'оставаться в стороне, недополучать',
      lines: [],
      exampleTranslation: 'Не стоит пренебрегать удовольствием от учёбы.'
    }
  },
  {
    id: 'c1-kultur-186-anfertigen',
    level: 'C1',
    topic: 'Kultur und Kunst',
    cardNumber: 186,
    source: 'physical-card',
    front: {
      title: 'anfertigen',
      lines: [],
      exampleDe: 'Er hat eine hochwertige Kopie des Gemäldes angefertigt.'
    },
    back: {
      title: 'изготавливать, делать',
      lines: [],
      exampleTranslation: 'Он сделал высококачественную копию картины.'
    }
  },
  {
    id: 'c1-kultur-187-anklang',
    level: 'C1',
    topic: 'Kultur und Kunst',
    cardNumber: 187,
    source: 'physical-card',
    front: {
      title: 'der Anklang',
      lines: ['die Anklänge'],
      exampleDe: 'Diese Melodie hat Anklänge an die Jazzmusik.'
    },
    back: {
      title: 'отголосок, отзвук, созвучие',
      lines: ['мн.'],
      exampleTranslation: 'Эта мелодия перекликается с джазовой музыкой.'
    }
  },
  {
    id: 'c1-kultur-188-preistraeger',
    level: 'C1',
    topic: 'Kultur und Kunst',
    cardNumber: 188,
    source: 'physical-card',
    front: {
      title: 'der Preisträger',
      lines: ['die Preisträger'],
      exampleDe: 'Die Namen der Preisträger werden heute veröffentlicht.'
    },
    back: {
      title: 'призёр, лауреат',
      lines: ['мн.'],
      exampleTranslation: 'Имена лауреатов опубликуют сегодня.'
    }
  },
  {
    id: 'c1-kultur-189-rahmen',
    level: 'C1',
    topic: 'Kultur und Kunst',
    cardNumber: 189,
    source: 'physical-card',
    front: {
      title: 'der Rahmen',
      lines: ['die Rahmen', 'einrahmen'],
      exampleDe: 'Das Ölgemälde hat einen goldenen Rahmen.'
    },
    back: {
      title: 'рама, рамка',
      lines: ['мн.', 'обрамлять'],
      exampleTranslation: 'Картина маслом обрамлена золотой рамой.'
    }
  },
  {
    id: 'c1-kultur-190-ruf',
    level: 'C1',
    topic: 'Kultur und Kunst',
    cardNumber: 190,
    source: 'physical-card',
    front: {
      title: 'der Ruf',
      lines: [],
      exampleDe: 'Mittlerweile genießt er einen guten Ruf als Künstler. Der Ruf dieser Messe ist ausgezeichnet.'
    },
    back: {
      title: 'слава, репутация',
      lines: [],
      exampleTranslation: 'Тем временем он пользуется хорошей репутацией как художник. У этой ярмарки отличная репутация.'
    }
  },
  {
    id: 'c1-kultur-191-antike',
    level: 'C1',
    topic: 'Kultur und Kunst',
    cardNumber: 191,
    source: 'physical-card',
    front: {
      title: 'die Antike',
      lines: ['antik'],
      exampleDe: 'Die antike Mythologie interessiert ihn nur wenig.'
    },
    back: {
      title: 'античность',
      lines: ['античный'],
      exampleTranslation: 'Античная мифология его мало интересует.'
    }
  },
  {
    id: 'c1-kultur-192-besprechung',
    level: 'C1',
    topic: 'Kultur und Kunst',
    cardNumber: 192,
    source: 'physical-card',
    front: {
      title: 'die Besprechung',
      lines: ['die Besprechungen'],
      exampleDe: 'Die Besprechung des Films war sehr gut.'
    },
    back: {
      title: 'рецензия',
      lines: ['мн.'],
      exampleTranslation: 'Рецензия на фильм была очень хорошей.'
    }
  },
  {
    id: 'c1-kultur-193-ehre',
    level: 'C1',
    topic: 'Kultur und Kunst',
    cardNumber: 193,
    source: 'physical-card',
    front: {
      title: 'die Ehre',
      lines: ['ehrenhaft'],
      exampleDe: 'Es ist mir eine große Ehre, an dieser Ausstellung teilzunehmen.'
    },
    back: {
      title: 'честь, почёт',
      lines: ['почётный, уважаемый'],
      exampleTranslation: 'Для меня большая честь участвовать в этой выставке.'
    }
  },
  {
    id: 'c1-kultur-194-inspiration',
    level: 'C1',
    topic: 'Kultur und Kunst',
    cardNumber: 194,
    source: 'physical-card',
    front: {
      title: 'die Inspiration',
      lines: ['die Inspirationen', 'inspirieren'],
      exampleDe: 'Ohne Inspiration kann er nicht malen.'
    },
    back: {
      title: 'вдохновение',
      lines: ['мн.', 'вдохновлять'],
      exampleTranslation: 'Без вдохновения он не может рисовать.'
    }
  },
  {
    id: 'c1-kultur-195-raeumlichkeit',
    level: 'C1',
    topic: 'Kultur und Kunst',
    cardNumber: 195,
    source: 'physical-card',
    front: {
      title: 'die Räumlichkeit',
      lines: ['die Räumlichkeiten'],
      exampleDe: 'Wir können keine passenden Räumlichkeiten für die Messe finden.'
    },
    back: {
      title: 'помещение',
      lines: ['мн.'],
      exampleTranslation: 'Мы не можем найти подходящее помещение для ярмарки.'
    }
  },
  {
    id: 'c1-kultur-196-vollendung',
    level: 'C1',
    topic: 'Kultur und Kunst',
    cardNumber: 196,
    source: 'physical-card',
    front: {
      title: 'die Vollendung',
      lines: ['vollenden'],
      exampleDe: 'Mit diesem Buch vollendete die Autorin ihren Romanzyklus.'
    },
    back: {
      title: 'завершение, совершенство',
      lines: ['завершать, заканчивать'],
      exampleTranslation: 'Этой книгой автор завершила цикл своих романов.'
    }
  },
  {
    id: 'c1-kultur-197-herkoemmlich',
    level: 'C1',
    topic: 'Kultur und Kunst',
    cardNumber: 197,
    source: 'physical-card',
    front: {
      title: 'herkömmlich',
      lines: [],
      exampleDe: 'In dieser Gemeinschaft werden noch herkömmliche Bräuche gepflegt.'
    },
    back: {
      title: 'обычный, традиционный',
      lines: [],
      exampleTranslation: 'В этом сообществе всё ещё поддерживают традиционные обычаи.'
    }
  },
  {
    id: 'c1-kultur-198-hochkaraetig',
    level: 'C1',
    topic: 'Kultur und Kunst',
    cardNumber: 198,
    source: 'physical-card',
    front: {
      title: 'hochkarätig',
      lines: [],
      exampleDe: 'Die Rolle wird mit einem hochkarätigen Schauspieler besetzt.'
    },
    back: {
      title: 'высококлассный, первоклассный',
      lines: [],
      exampleTranslation: 'Роль исполнит первоклассный актёр.'
    }
  },
  {
    id: 'c1-kultur-199-nachahmen',
    level: 'C1',
    topic: 'Kultur und Kunst',
    cardNumber: 199,
    source: 'physical-card',
    front: {
      title: 'nachahmen',
      lines: ['die Nachahmung', 'die Nachahmungen'],
      exampleDe: 'Seinen Stil kann man nicht nachahmen.'
    },
    back: {
      title: 'подражать, имитировать',
      lines: ['подражание, имитация', 'мн.'],
      exampleTranslation: 'Его стиль невозможно имитировать.'
    }
  },
  {
    id: 'c1-kultur-200-schildern',
    level: 'C1',
    topic: 'Kultur und Kunst',
    cardNumber: 200,
    source: 'physical-card',
    front: {
      title: 'schildern',
      lines: ['die Schilderung', 'die Schilderungen'],
      exampleDe: 'Der Autor schildert seine Erlebnisse in allen Einzelheiten.'
    },
    back: {
      title: 'описывать, изображать',
      lines: ['описание, изображение', 'мн.'],
      exampleTranslation: 'Автор очень подробно описывает пережитое.'
    }
  },
  {
    id: 'c1-kultur-201-verreissen',
    level: 'C1',
    topic: 'Kultur und Kunst',
    cardNumber: 201,
    source: 'physical-card',
    front: {
      title: 'verreißen',
      subtitle: '(verreißt-verriss-verrissen)',
      lines: ['der Verriss', 'die Verrisse'],
      exampleDe: 'Die Kritiker haben das Theaterstück verrissen.'
    },
    back: {
      title: 'разносить в пух и прах, разгромить критикой',
      lines: ['разгромная критика', 'мн.'],
      exampleTranslation: 'Критики разгромили театральную постановку.'
    }
  },
  {
    id: 'c1-kultur-202-zeitgenoessisch',
    level: 'C1',
    topic: 'Kultur und Kunst',
    cardNumber: 202,
    source: 'physical-card',
    front: {
      title: 'zeitgenössisch',
      lines: [],
      exampleDe: 'Die zeitgenössische Kunst interessiert ihn wenig.'
    },
    back: {
      title: 'современный',
      lines: [],
      exampleTranslation: 'Современное искусство его мало интересует.'
    }
  },
  {
    id: 'c1-religion-203-abendmahl',
    level: 'C1',
    topic: 'Religion',
    cardNumber: 203,
    source: 'physical-card',
    front: {
      title: 'das Abendmahl',
      lines: ['die Abendmahle', 'das Letzte Abendmahl'],
      exampleDe: 'Gehst du zum Abendmahl?'
    },
    back: {
      title: 'причастие',
      lines: ['мн.', 'Тайная вечеря'],
      exampleTranslation: 'Ты идёшь к причастию?'
    }
  },
  {
    id: 'c1-religion-204-dogma',
    level: 'C1',
    topic: 'Religion',
    cardNumber: 204,
    source: 'physical-card',
    front: {
      title: 'das Dogma',
      lines: ['die Dogmen', 'dogmatisch'],
      exampleDe: 'Die Gültigkeit von Dogmen wird als absolut betrachtet.'
    },
    back: {
      title: 'догмат',
      lines: ['мн.', 'догматический'],
      exampleTranslation: 'Сила догматов считается абсолютной.'
    }
  },
  {
    id: 'c1-religion-205-weltbild',
    level: 'C1',
    topic: 'Religion',
    cardNumber: 205,
    source: 'physical-card',
    front: {
      title: 'das Weltbild',
      lines: [],
      exampleDe: 'Das passt nicht in das christliche Weltbild.'
    },
    back: {
      title: 'мировоззрение, представление о мире',
      lines: [],
      exampleTranslation: 'Это не вписывается в христианское мировоззрение.'
    }
  },
  {
    id: 'c1-religion-206-atheismus',
    level: 'C1',
    topic: 'Religion',
    cardNumber: 206,
    source: 'physical-card',
    front: {
      title: 'der Atheismus',
      lines: ['der Atheist', 'die Atheisten', 'atheistisch']
    },
    back: {
      title: 'атеизм',
      lines: ['атеист', 'мн.', 'атеистический']
    }
  },
  {
    id: 'c1-religion-207-heide',
    level: 'C1',
    topic: 'Religion',
    cardNumber: 207,
    source: 'physical-card',
    front: {
      title: 'der Heide',
      lines: ['die Heiden', 'das Heidentum', 'heidnisch']
    },
    back: {
      title: 'язычник',
      lines: ['мн.', 'язычество', 'языческий']
    }
  },
  {
    id: 'c1-religion-208-ketzer',
    level: 'C1',
    topic: 'Religion',
    cardNumber: 208,
    source: 'physical-card',
    front: {
      title: 'der Ketzer',
      lines: ['die Ketzer'],
      exampleDe: 'Die Inquisition ließ Tausende von Ketzern verbrennen.'
    },
    back: {
      title: 'еретик',
      lines: ['мн.'],
      exampleTranslation: 'По приказу инквизиции сожгли тысячи еретиков.'
    }
  },
  {
    id: 'c1-religion-209-kult',
    level: 'C1',
    topic: 'Religion',
    cardNumber: 209,
    source: 'physical-card',
    front: {
      title: 'der Kult',
      lines: ['die Kulte'],
      exampleDe: 'Sie beschäftigt sich mit heidnischen Kulten.'
    },
    back: {
      title: 'культ',
      lines: ['мн.'],
      exampleTranslation: 'Она занимается языческими культами.'
    }
  },
  {
    id: 'c1-religion-210-prophet',
    level: 'C1',
    topic: 'Religion',
    cardNumber: 210,
    source: 'physical-card',
    front: {
      title: 'der Prophet',
      lines: ['die Propheten', 'die Prophezeiung', 'die Prophezeiungen', 'prophezeien']
    },
    back: {
      title: 'пророк',
      lines: ['мн.', 'пророчество', 'мн.', 'пророчить']
    }
  },
  {
    id: 'c1-religion-211-apokalypse',
    level: 'C1',
    topic: 'Religion',
    cardNumber: 211,
    source: 'physical-card',
    front: {
      title: 'die Apokalypse',
      lines: ['die Apokalypsen', 'der Weltuntergang'],
      exampleDe: 'Man hat den Weltuntergang schon mehrmals vorhergesagt.'
    },
    back: {
      title: 'апокалипсис',
      lines: ['мн.', 'конец света'],
      exampleTranslation: 'Конец света уже не раз предсказывали.'
    }
  },
  {
    id: 'c1-religion-212-mystik',
    level: 'C1',
    topic: 'Religion',
    cardNumber: 212,
    source: 'physical-card',
    front: {
      title: 'die Mystik',
      lines: ['mystisch'],
      exampleDe: 'Mystik gibt es in vielen Religionen.'
    },
    back: {
      title: 'мистика',
      lines: ['мистический'],
      exampleTranslation: 'Мистика есть во многих религиях.'
    }
  },
  {
    id: 'c1-religion-213-suende',
    level: 'C1',
    topic: 'Religion',
    cardNumber: 213,
    source: 'physical-card',
    front: {
      title: 'die Sünde',
      lines: ['die Sünden', 'sündigen'],
      exampleDe: 'Er hat eine schwere Sünde begangen.'
    },
    back: {
      title: 'грех',
      lines: ['мн.', 'грешить'],
      exampleTranslation: 'Он совершил тяжкий грех.'
    }
  },
  {
    id: 'c1-zeit-214-binnen',
    level: 'C1',
    topic: 'Zeit',
    cardNumber: 214,
    source: 'physical-card',
    front: {
      title: 'binnen',
      lines: [],
      exampleDe: 'Er hofft, die Aufgabe binnen zwei Stunden zu erledigen. Binnen weniger Augenblicke war die Straße mit Schnee bedeckt.'
    },
    back: {
      title: 'в течение, в пределах, за',
      lines: [],
      exampleTranslation: 'Он надеется выполнить задание за два часа. Вскоре улица была покрыта снегом.'
    }
  },
  {
    id: 'c1-zeit-215-wandel',
    level: 'C1',
    topic: 'Zeit',
    cardNumber: 215,
    source: 'physical-card',
    front: {
      title: 'der Wandel',
      lines: ['wandelbar'],
      exampleDe: 'Die Mode ist wandelbar.'
    },
    back: {
      title: 'изменение, перемена',
      lines: ['изменчивый, непостоянный'],
      exampleTranslation: 'Мода изменчива.'
    }
  },
  {
    id: 'c1-zeit-216-endlichkeit',
    level: 'C1',
    topic: 'Zeit',
    cardNumber: 216,
    source: 'physical-card',
    front: {
      title: 'die Endlichkeit',
      lines: ['die Unendlichkeit'],
      exampleDe: 'Ich habe fast eine Unendlichkeit auf dich gewartet!'
    },
    back: {
      title: 'конечность',
      lines: ['бесконечность'],
      exampleTranslation: 'Я ждал тебя почти бесконечно долго!'
    }
  },
  {
    id: 'c1-zeit-217-epoche',
    level: 'C1',
    topic: 'Zeit',
    cardNumber: 217,
    source: 'physical-card',
    front: {
      title: 'die Epoche',
      lines: ['die Epochen'],
      exampleDe: 'Die Menschheit steht am Beginn einer neuen Epoche. Diese Erfindung wird Epoche machen.'
    },
    back: {
      title: 'эпоха',
      lines: ['мн.'],
      exampleTranslation: 'Человечество стоит в начале новой эпохи. Это изобретение откроет новую эру.'
    }
  },
  {
    id: 'c1-zeit-218-stoppuhr',
    level: 'C1',
    topic: 'Zeit',
    cardNumber: 218,
    source: 'physical-card',
    front: {
      title: 'die Stoppuhr',
      lines: ['die Stoppuhren'],
      exampleDe: 'Was zeigt die Stoppuhr?'
    },
    back: {
      title: 'секундомер',
      lines: ['мн.'],
      exampleTranslation: 'Что показывает секундомер?'
    }
  },
  {
    id: 'c1-zeit-219-vergessenheit',
    level: 'C1',
    topic: 'Zeit',
    cardNumber: 219,
    source: 'physical-card',
    front: {
      title: 'die Vergessenheit',
      lines: [],
      exampleDe: 'Dieser Künstler ist heute in Vergessenheit geraten.'
    },
    back: {
      title: 'забвение',
      lines: [],
      exampleTranslation: 'Об этом художнике сегодня уже не вспоминают.'
    }
  },
  {
    id: 'c1-zeit-220-einstig',
    level: 'C1',
    topic: 'Zeit',
    cardNumber: 220,
    source: 'physical-card',
    front: {
      title: 'einstig',
      lines: [],
      exampleDe: 'Der einstige Erfolg dieser Oper lässt sich heute schwer nachvollziehen.'
    },
    back: {
      title: 'бывший, прежний, давний',
      lines: [],
      exampleTranslation: 'Былой успех этой оперы сегодня трудно понять.'
    }
  },
  {
    id: 'c1-zeit-221-etliche',
    level: 'C1',
    topic: 'Zeit',
    cardNumber: 221,
    source: 'physical-card',
    front: {
      title: 'etliche',
      lines: [],
      exampleDe: 'Ich habe ihn vor etlichen Tagen gesehen.'
    },
    back: {
      title: 'несколько, немало',
      lines: [],
      exampleTranslation: 'Я видел его несколько дней назад.'
    }
  },
  {
    id: 'c1-zeit-222-fluechtig',
    level: 'C1',
    topic: 'Zeit',
    cardNumber: 222,
    source: 'physical-card',
    front: {
      title: 'flüchtig',
      lines: [],
      exampleDe: 'Sie warf einen flüchtigen Blick auf den Tisch.'
    },
    back: {
      title: 'мимолётный, беглый',
      lines: [],
      exampleTranslation: 'Она бросила быстрый взгляд на стол.'
    }
  },
  {
    id: 'c1-zeit-223-nachtraeglich',
    level: 'C1',
    topic: 'Zeit',
    cardNumber: 223,
    source: 'physical-card',
    front: {
      title: 'nachträglich',
      lines: ['im Voraus'],
      exampleDe: 'Ich gratuliere dir nachträglich zum Geburtstag.'
    },
    back: {
      title: 'задним числом, запоздало, постфактум',
      lines: ['заранее'],
      exampleTranslation: 'С запозданием поздравляю тебя с днём рождения.'
    }
  },
  {
    id: 'c1-zeit-224-rasant',
    level: 'C1',
    topic: 'Zeit',
    cardNumber: 224,
    source: 'physical-card',
    front: {
      title: 'rasant',
      lines: [],
      exampleDe: 'Nicht alle können dieses rasante Tempo aushalten.'
    },
    back: {
      title: 'стремительный, бешеный, бурный',
      lines: [],
      exampleTranslation: 'Не все выдерживают этот бешеный темп.'
    }
  },
  {
    id: 'c1-zeit-225-schnelllebig',
    level: 'C1',
    topic: 'Zeit',
    cardNumber: 225,
    source: 'physical-card',
    front: {
      title: 'schnelllebig',
      lines: [],
      exampleDe: 'Wir leben in einer sehr schnelllebigen Zeit.'
    },
    back: {
      title: 'быстротечный',
      lines: [],
      exampleTranslation: 'Мы живём в очень быстротечную эпоху.'
    }
  },
  {
    id: 'c1-zeit-226-stuendlich',
    level: 'C1',
    topic: 'Zeit',
    cardNumber: 226,
    source: 'physical-card',
    front: {
      title: 'stündlich',
      lines: [],
      exampleDe: 'Der Bus verkehrt stündlich.'
    },
    back: {
      title: 'ежечасный, каждый час',
      lines: [],
      exampleTranslation: 'Автобус ходит каждый час.'
    }
  },
  {
    id: 'c1-zeit-227-voruebergehend',
    level: 'C1',
    topic: 'Zeit',
    cardNumber: 227,
    source: 'physical-card',
    front: {
      title: 'vorübergehend',
      lines: [],
      exampleDe: 'Das Geschäft ist vorübergehend geschlossen.'
    },
    back: {
      title: 'временный, временно',
      lines: [],
      exampleTranslation: 'Магазин временно закрыт.'
    }
  },
  {
    id: 'c1-zeit-228-zukunftsorientiert',
    level: 'C1',
    topic: 'Zeit',
    cardNumber: 228,
    source: 'physical-card',
    front: {
      title: 'zukunftsorientiert',
      lines: ['zurückblickend'],
      exampleDe: 'Wir suchen nach einer zukunftsorientierten Lösung.'
    },
    back: {
      title: 'ориентированный на будущее, прогрессивный',
      lines: ['ретроспективный, обращённый в прошлое'],
      exampleTranslation: 'Мы ищем прогрессивное решение.'
    }
  },
  {
    id: 'c1-zeit-229-zuweilen',
    level: 'C1',
    topic: 'Zeit',
    cardNumber: 229,
    source: 'physical-card',
    front: {
      title: 'zuweilen',
      lines: [],
      exampleDe: 'Zuweilen hat es stark geregnet. Zuweilen bist du nicht zu ertragen.'
    },
    back: {
      title: 'иногда, временами, порой',
      lines: [],
      exampleTranslation: 'Иногда шёл сильный дождь. Порой тебя невозможно выносить.'
    }
  },
  {
    id: 'c1-masse-230-dutzend',
    level: 'C1',
    topic: 'Maße',
    cardNumber: 230,
    source: 'physical-card',
    front: {
      title: 'das Dutzend',
      lines: ['die Dutzende'],
      exampleDe: 'Was kostet ein Dutzend Eier? Täglich erhält er Dutzende von Briefen.'
    },
    back: {
      title: 'дюжина',
      lines: ['мн.'],
      exampleTranslation: 'Сколько стоит дюжина яиц? Каждый день он получает десятки писем.'
    }
  },
  {
    id: 'c1-masse-231-kalkuel',
    level: 'C1',
    topic: 'Maße',
    cardNumber: 231,
    source: 'physical-card',
    front: {
      title: 'das Kalkül',
      lines: ['die Kalküle', 'kalkulieren'],
      exampleDe: 'Man muss zunächst die Kosten kalkulieren.'
    },
    back: {
      title: 'расчёт, калькуляция',
      lines: ['мн.', 'рассчитывать, просчитывать'],
      exampleTranslation: 'Сначала нужно рассчитать расходы.'
    }
  },
  {
    id: 'c1-masse-232-volumen',
    level: 'C1',
    topic: 'Maße',
    cardNumber: 232,
    source: 'physical-card',
    front: {
      title: 'das Volumen',
      lines: ['voluminös'],
      exampleDe: 'Können Sie das Volumen dieses Würfels berechnen?'
    },
    back: {
      title: 'объём',
      lines: ['объёмный'],
      exampleTranslation: 'Можете ли вы вычислить объём этого куба?'
    }
  },
  {
    id: 'c1-masse-233-ausmass',
    level: 'C1',
    topic: 'Maße',
    cardNumber: 233,
    source: 'physical-card',
    front: {
      title: 'das Ausmaß',
      lines: ['die Ausmaße'],
      exampleDe: 'Die Ausmaße des Kraters sind gewaltig.'
    },
    back: {
      title: 'размер, масштаб, габариты',
      lines: ['мн.'],
      exampleTranslation: 'Размеры кратера огромны.'
    }
  },
  {
    id: 'c1-masse-234-bruchteil',
    level: 'C1',
    topic: 'Maße',
    cardNumber: 234,
    source: 'physical-card',
    front: {
      title: 'der Bruchteil',
      lines: ['die Bruchteile'],
      exampleDe: 'Unsere Einnahmen decken nur den Bruchteil der Kosten.'
    },
    back: {
      title: 'часть, доля',
      lines: ['мн.'],
      exampleTranslation: 'Наши доходы покрывают лишь часть расходов.'
    }
  },
  {
    id: 'c1-masse-235-hektar',
    level: 'C1',
    topic: 'Maße',
    cardNumber: 235,
    source: 'physical-card',
    front: {
      title: 'der Hektar',
      lines: ['die Hektare'],
      exampleDe: 'Sein Hof ist 15 Hektar groß.'
    },
    back: {
      title: 'гектар',
      lines: ['мн.'],
      exampleTranslation: 'Его участок имеет площадь 15 гектаров.'
    }
  },
  {
    id: 'c1-masse-236-ueberfluss',
    level: 'C1',
    topic: 'Maße',
    cardNumber: 236,
    source: 'physical-card',
    front: {
      title: 'der Überfluss',
      lines: ['überflüssig'],
      exampleDe: 'Zeit haben wir im Überfluss.'
    },
    back: {
      title: 'изобилие, избыток',
      lines: ['лишний, ненужный'],
      exampleTranslation: 'Времени у нас в избытке.'
    }
  },
  {
    id: 'c1-masse-237-eineinhalb',
    level: 'C1',
    topic: 'Maße',
    cardNumber: 237,
    source: 'physical-card',
    front: {
      title: 'eineinhalb',
      lines: ['anderthalb'],
      exampleDe: 'Der Unterricht dauert eineinhalb Stunden.'
    },
    back: {
      title: 'полтора',
      lines: ['полтора'],
      exampleTranslation: 'Урок длится полтора часа.'
    }
  },
  {
    id: 'c1-masse-238-exzessiv',
    level: 'C1',
    topic: 'Maße',
    cardNumber: 238,
    source: 'physical-card',
    front: {
      title: 'exzessiv',
      lines: [],
      exampleDe: 'Exzessiver Fleischkonsum ist auch für das Klima schlecht.'
    },
    back: {
      title: 'чрезмерный',
      lines: [],
      exampleTranslation: 'Чрезмерное потребление мяса также вредно для климата.'
    }
  },
  {
    id: 'c1-masse-239-gesetzmaessig',
    level: 'C1',
    topic: 'Maße',
    cardNumber: 239,
    source: 'physical-card',
    front: {
      title: 'gesetzmäßig',
      lines: ['die Gesetzmäßigkeit', 'die Gesetzmäßigkeiten'],
      exampleDe: 'Die Entwicklung läuft gesetzmäßig ab.'
    },
    back: {
      title: 'закономерный',
      lines: ['закономерность', 'мн.'],
      exampleTranslation: 'Развитие идёт закономерно.'
    }
  },
  {
    id: 'c1-masse-240-immens',
    level: 'C1',
    topic: 'Maße',
    cardNumber: 240,
    source: 'physical-card',
    front: {
      title: 'immens',
      lines: ['geringfügig'],
      exampleDe: 'Die Änderungen im Vergleich zum bisherigen System sind geringfügig.'
    },
    back: {
      title: 'огромный, колоссальный',
      lines: ['незначительный, несущественный'],
      exampleTranslation: 'Изменения по сравнению с прежней системой незначительны.'
    }
  },
  {
    id: 'c1-masse-241-massgeschneidert',
    level: 'C1',
    topic: 'Maße',
    cardNumber: 241,
    source: 'physical-card',
    front: {
      title: 'maßgeschneidert',
      lines: [],
      exampleDe: 'Dieses Auto ist maßgeschneidert für eine vierköpfige Familie.'
    },
    back: {
      title: 'изготовленный на заказ, идеально подходящий',
      lines: [],
      exampleTranslation: 'Этот автомобиль идеально подходит для семьи из четырёх человек.'
    }
  },
  {
    id: 'c1-gegenstaende-242-ausdienen',
    level: 'C1',
    topic: 'Gegenstände',
    cardNumber: 242,
    source: 'physical-card',
    front: {
      title: 'ausdienen',
      lines: [],
      exampleDe: 'Mein altes Fahrrad hat ausgedient.'
    },
    back: {
      title: 'износиться, отслужить своё',
      lines: [],
      exampleTranslation: 'Мой старый велосипед больше не пригоден для использования.'
    }
  },
  {
    id: 'c1-gegenstaende-243-auslaufmodell',
    level: 'C1',
    topic: 'Gegenstände',
    cardNumber: 243,
    source: 'physical-card',
    front: {
      title: 'das Auslaufmodell',
      lines: ['die Auslaufmodelle'],
      exampleDe: 'Das Handy ist ein Auslaufmodell, deshalb ist es so günstig.'
    },
    back: {
      title: 'снятая с производства модель',
      lines: ['мн.'],
      exampleTranslation: 'Этот мобильный телефон сняли с производства, поэтому он такой дешёвый.'
    }
  },
  {
    id: 'c1-gegenstaende-244-detail',
    level: 'C1',
    topic: 'Gegenstände',
    cardNumber: 244,
    source: 'physical-card',
    front: {
      title: 'das Detail',
      lines: ['die Details', 'detailliert'],
      exampleDe: 'Dieses Modell hat viele realistische Details.'
    },
    back: {
      title: 'деталь, подробность',
      lines: ['мн.', 'детальный, подробный'],
      exampleTranslation: 'У этой модели много реалистичных деталей.'
    }
  },
  {
    id: 'c1-gegenstaende-245-haken',
    level: 'C1',
    topic: 'Gegenstände',
    cardNumber: 245,
    source: 'physical-card',
    front: {
      title: 'der Haken',
      lines: ['die Haken'],
      exampleDe: 'Kannst du bitte den Haken in die Wand schlagen? Das Angebot hat einen Haken.'
    },
    back: {
      title: 'крюк, крючок',
      lines: ['мн.'],
      exampleTranslation: 'Можешь, пожалуйста, вбить крюк в стену? В этом предложении есть одна загвоздка.'
    }
  },
  {
    id: 'c1-gegenstaende-246-freisprechanlage',
    level: 'C1',
    topic: 'Gegenstände',
    cardNumber: 246,
    source: 'physical-card',
    front: {
      title: 'die Freisprechanlage',
      lines: ['die Freisprechanlagen'],
      exampleDe: 'Im Auto unterhalte ich mich nur durch eine Freisprechanlage.'
    },
    back: {
      title: 'устройство громкой связи',
      lines: ['мн.'],
      exampleTranslation: 'В машине я разговариваю только через громкую связь.'
    }
  },
  {
    id: 'c1-gegenstaende-247-klammer',
    level: 'C1',
    topic: 'Gegenstände',
    cardNumber: 247,
    source: 'physical-card',
    front: {
      title: 'die Klammer',
      lines: ['die Klammern'],
      exampleDe: 'Ich brauche noch zwei Klammern, hast du welche?'
    },
    back: {
      title: 'скрепка, зажим',
      lines: ['мн.'],
      exampleTranslation: 'Мне нужны ещё две скрепки, у тебя есть?'
    }
  },
  {
    id: 'c1-gegenstaende-248-klinge',
    level: 'C1',
    topic: 'Gegenstände',
    cardNumber: 248,
    source: 'physical-card',
    front: {
      title: 'die Klinge',
      lines: ['die Klingen'],
      exampleDe: 'Das Messer hat eine scharfe Klinge. Im Halbfinale kreuzen sie wieder die Klingen.'
    },
    back: {
      title: 'лезвие, клинок',
      lines: ['мн.'],
      exampleTranslation: 'У ножа острое лезвие. В полуфинале они снова сойдутся.'
    }
  },
  {
    id: 'c1-gegenstaende-249-montage',
    level: 'C1',
    topic: 'Gegenstände',
    cardNumber: 249,
    source: 'physical-card',
    front: {
      title: 'die Montage',
      lines: ['die Montagen', 'die Demontage', 'die Demontagen'],
      exampleDe: 'Die Demontage der Maschine ist beendet.'
    },
    back: {
      title: 'монтаж',
      lines: ['мн.', 'демонтаж', 'мн.'],
      exampleTranslation: 'Демонтаж механизма завершён.'
    }
  },
  {
    id: 'c1-gegenstaende-250-handlich',
    level: 'C1',
    topic: 'Gegenstände',
    cardNumber: 250,
    source: 'physical-card',
    front: {
      title: 'handlich',
      lines: [],
      exampleDe: 'Diese Kamera ist recht handlich.'
    },
    back: {
      title: 'удобный, компактный',
      lines: [],
      exampleTranslation: 'Эта камера довольно удобная.'
    }
  },
  {
    id: 'c1-gegenstaende-251-parat',
    level: 'C1',
    topic: 'Gegenstände',
    cardNumber: 251,
    source: 'physical-card',
    front: {
      title: 'parat',
      lines: [],
      exampleDe: 'Für den Notfall habe ich immer eine Taschenlampe parat. Hast du immer eine Antwort parat?'
    },
    back: {
      title: 'наготове, под рукой',
      lines: [],
      exampleTranslation: 'На всякий случай у меня всегда наготове фонарик. У тебя всегда готов ответ?'
    }
  },
  {
    id: 'c1-gegenstaende-252-verblassen',
    level: 'C1',
    topic: 'Gegenstände',
    cardNumber: 252,
    source: 'physical-card',
    front: {
      title: 'verblassen',
      lines: [],
      exampleDe: 'Die Farbe ist schon etwas verblasst. Unsere Erinnerungen verblassen mit der Zeit.'
    },
    back: {
      title: 'бледнеть, выцветать',
      lines: [],
      exampleTranslation: 'Цвет уже немного поблёк. Со временем наши воспоминания стираются.'
    }
  },
  {
    id: 'c1-stoffe-253-ausgefallen',
    level: 'C1',
    topic: 'Stoffe und Materialien',
    cardNumber: 253,
    source: 'physical-card',
    front: {
      title: 'ausgefallen',
      lines: [],
      exampleDe: 'Das Kleid hat ein ausgefallenes Muster.'
    },
    back: {
      title: 'необычный, оригинальный, причудливый',
      lines: [],
      exampleTranslation: 'У платья необычный узор.'
    }
  },
  {
    id: 'c1-stoffe-254-ausgehen',
    level: 'C1',
    topic: 'Stoffe und Materialien',
    cardNumber: 254,
    source: 'physical-card',
    front: {
      title: 'ausgehen',
      subtitle: '(geht aus-ging aus-ausgegangen)',
      lines: [],
      exampleDe: 'Mir ist das Benzin ausgegangen.'
    },
    back: {
      title: 'заканчиваться, исчерпываться',
      lines: [],
      exampleTranslation: 'У меня закончился бензин.'
    }
  },
  {
    id: 'c1-stoffe-255-juwel',
    level: 'C1',
    topic: 'Stoffe und Materialien',
    cardNumber: 255,
    source: 'physical-card',
    front: {
      title: 'das Juwel',
      lines: ['die Juwelen'],
      exampleDe: 'Die Königin trägt viele Juwelen.'
    },
    back: {
      title: 'драгоценный камень, драгоценность',
      lines: ['мн.'],
      exampleTranslation: 'Королева носит много драгоценностей.'
    }
  },
  {
    id: 'c1-stoffe-256-pestizid',
    level: 'C1',
    topic: 'Stoffe und Materialien',
    cardNumber: 256,
    source: 'physical-card',
    front: {
      title: 'das Pestizid',
      lines: ['die Pestizide'],
      exampleDe: 'Einige Insekten werden resistent gegen Pestizide. Sind die Rosen pestizidfrei?'
    },
    back: {
      title: 'пестицид',
      lines: ['мн.'],
      exampleTranslation: 'Некоторые насекомые становятся устойчивыми к пестицидам. Эти розы без пестицидов?'
    }
  },
  {
    id: 'c1-stoffe-257-satz',
    level: 'C1',
    topic: 'Stoffe und Materialien',
    cardNumber: 257,
    source: 'physical-card',
    front: {
      title: 'der Satz',
      lines: ['die Sätze', 'der Kaffeesatz'],
      exampleDe: 'Auf dem Boden der Flasche hat sich der Satz gebildet.'
    },
    back: {
      title: 'осадок',
      lines: ['мн.', 'кофейная гуща'],
      exampleTranslation: 'На дне бутылки образовался осадок.'
    }
  },
  {
    id: 'c1-stoffe-258-schadstoff',
    level: 'C1',
    topic: 'Stoffe und Materialien',
    cardNumber: 258,
    source: 'physical-card',
    front: {
      title: 'der Schadstoff',
      lines: ['die Schadstoffe'],
      exampleDe: 'Das Produkt enthält keine Schadstoffe.'
    },
    back: {
      title: 'вредное вещество',
      lines: ['мн.'],
      exampleTranslation: 'Продукт не содержит вредных веществ.'
    }
  },
  {
    id: 'c1-stoffe-259-asche',
    level: 'C1',
    topic: 'Stoffe und Materialien',
    cardNumber: 259,
    source: 'physical-card',
    front: {
      title: 'die Asche',
      lines: ['der Aschenbecher'],
      exampleDe: 'Das Haus wurde im Nu zu Asche.'
    },
    back: {
      title: 'пепел',
      lines: ['пепельница'],
      exampleTranslation: 'Дом вмиг превратился в пепел.'
    }
  },
  {
    id: 'c1-stoffe-260-beschaffenheit',
    level: 'C1',
    topic: 'Stoffe und Materialien',
    cardNumber: 260,
    source: 'physical-card',
    front: {
      title: 'die Beschaffenheit',
      lines: ['beschaffen'],
      exampleDe: 'Die Beschaffenheit des Materials ist zu überprüfen.'
    },
    back: {
      title: 'свойство, структура, строение',
      lines: ['обладающий определёнными свойствами'],
      exampleTranslation: 'Структуру материала нужно проверить.'
    }
  },
  {
    id: 'c1-stoffe-261-zerfallen',
    level: 'C1',
    topic: 'Stoffe und Materialien',
    cardNumber: 261,
    source: 'physical-card',
    front: {
      title: 'zerfallen',
      subtitle: '(zerfällt-zerfiel-zerfallen)',
      lines: ['der Zerfall'],
      exampleDe: 'Die alte Mauer ist zerfallen.'
    },
    back: {
      title: 'распадаться, разрушаться',
      lines: ['распад, разрушение'],
      exampleTranslation: 'Старая стена развалилась.'
    }
  },
  {
    id: 'c1-sport-262-auslesen',
    level: 'C1',
    topic: 'Sport und Freizeit',
    cardNumber: 262,
    source: 'physical-card',
    front: {
      title: 'auslesen',
      subtitle: '(liest aus-las aus-ausgelesen)',
      lines: ['durchlesen', '(liest durch-las durch-durchgelesen)', 'sich verlesen', '(verliest-verlas-verlesen)']
    },
    back: {
      title: 'дочитывать, заканчивать читать',
      lines: ['прочитывать', 'оговориться или ошибиться при чтении вслух']
    }
  },
  {
    id: 'c1-sport-263-beugen',
    level: 'C1',
    topic: 'Sport und Freizeit',
    cardNumber: 263,
    source: 'physical-card',
    front: {
      title: 'beugen',
      lines: ['die Beugung', 'die Beugungen', 'die Kniebeuge']
    },
    back: {
      title: 'сгибать, наклонять',
      lines: ['сгибание, наклон', 'мн.', 'приседание']
    }
  },
  {
    id: 'c1-sport-264-nichtstun',
    level: 'C1',
    topic: 'Sport und Freizeit',
    cardNumber: 264,
    source: 'physical-card',
    front: {
      title: 'das Nichtstun',
      lines: ['der Nichtstuer', 'die Nichtstuer'],
      exampleDe: 'Wie viel Zeit hast du schon mit Nichtstun verbracht?'
    },
    back: {
      title: 'безделье, ничегонеделание',
      lines: ['бездельник, лентяй', 'мн.'],
      exampleTranslation: 'Сколько времени ты уже бездельничаешь?'
    }
  },
  {
    id: 'c1-sport-265-boeller',
    level: 'C1',
    topic: 'Sport und Freizeit',
    cardNumber: 265,
    source: 'physical-card',
    front: {
      title: 'der Böller',
      lines: ['die Böller'],
      exampleDe: 'In der Silvesternacht hört man überall das Knallen der Böller.'
    },
    back: {
      title: 'петарда',
      lines: ['мн.'],
      exampleTranslation: 'В новогоднюю ночь повсюду слышны взрывы петард.'
    }
  },
  {
    id: 'c1-sport-266-fimmel',
    level: 'C1',
    topic: 'Sport und Freizeit',
    cardNumber: 266,
    source: 'physical-card',
    front: {
      title: 'der Fimmel',
      lines: ['die Fimmel'],
      exampleDe: 'Er hat einen Autofimmel.'
    },
    back: {
      title: 'навязчивая идея, пунктик',
      lines: ['мн.'],
      exampleTranslation: 'Он помешан на машинах.'
    }
  },
  {
    id: 'c1-sport-267-gesang',
    level: 'C1',
    topic: 'Sport und Freizeit',
    cardNumber: 267,
    source: 'physical-card',
    front: {
      title: 'der Gesang',
      lines: ['die Gesänge'],
      exampleDe: 'Sie hat ihren Gesang auf der Gitarre begleitet. Der Gesang der Vögel ist bezaubernd.'
    },
    back: {
      title: 'пение',
      lines: ['мн.'],
      exampleTranslation: 'Она аккомпанировала своему пению на гитаре. Пение птиц очаровывает.'
    }
  },
  {
    id: 'c1-sport-268-jubel',
    level: 'C1',
    topic: 'Sport und Freizeit',
    cardNumber: 268,
    source: 'physical-card',
    front: {
      title: 'der Jubel',
      lines: ['jubeln'],
      exampleDe: 'Der Torschütze jubelte über seinen Treffer.'
    },
    back: {
      title: 'ликование, восторг',
      lines: ['ликовать, радоваться'],
      exampleTranslation: 'Игрок ликовал из-за своего гола.'
    }
  },
  {
    id: 'c1-sport-269-zug',
    level: 'C1',
    topic: 'Sport und Freizeit',
    cardNumber: 269,
    source: 'physical-card',
    front: {
      title: 'der Zug',
      lines: ['die Züge'],
      exampleDe: 'Wer hat den ersten Zug?'
    },
    back: {
      title: 'ход',
      lines: ['мн.'],
      exampleTranslation: 'Кто ходит первым?'
    }
  },
  {
    id: 'c1-sport-270-auszeit',
    level: 'C1',
    topic: 'Sport und Freizeit',
    cardNumber: 270,
    source: 'physical-card',
    front: {
      title: 'die Auszeit',
      lines: [],
      exampleDe: 'Die Mannschaft nahm eine kurze Auszeit.'
    },
    back: {
      title: 'тайм-аут, перерыв',
      lines: [],
      exampleTranslation: 'Команда взяла короткий перерыв.'
    }
  },
  {
    id: 'c1-sport-271-unlust',
    level: 'C1',
    topic: 'Sport und Freizeit',
    cardNumber: 271,
    source: 'physical-card',
    front: {
      title: 'die Unlust',
      lines: [],
      exampleDe: 'Sie geht nur mit Unlust joggen. Er kann seine Unlust nicht überwinden.'
    },
    back: {
      title: 'нежелание, отвращение',
      lines: [],
      exampleTranslation: 'Она неохотно идёт бегать. Он не может пересилить своё нежелание.'
    }
  },
  {
    id: 'c1-sport-272-verlosung',
    level: 'C1',
    topic: 'Sport und Freizeit',
    cardNumber: 272,
    source: 'physical-card',
    front: {
      title: 'die Verlosung',
      lines: ['die Verlosungen', 'verlosen'],
      exampleDe: 'Diesmal wird eine Weltreise verlost.'
    },
    back: {
      title: 'розыгрыш',
      lines: ['мн.', 'разыгрывать'],
      exampleTranslation: 'На этот раз разыгрывают кругосветное путешествие.'
    }
  },
  {
    id: 'c1-sport-273-mithalten',
    level: 'C1',
    topic: 'Sport und Freizeit',
    cardNumber: 273,
    source: 'physical-card',
    front: {
      title: 'mithalten',
      subtitle: '(hält mit-hielt mit-mitgehalten)',
      lines: [],
      exampleDe: 'Der Sportler konnte nicht länger mithalten.'
    },
    back: {
      title: 'не отставать, выдерживать темп',
      lines: [],
      exampleTranslation: 'Спортсмен больше не мог выдерживать темп.'
    }
  },
  {
    id: 'c1-sport-274-tollpatschig',
    level: 'C1',
    topic: 'Sport und Freizeit',
    cardNumber: 274,
    source: 'physical-card',
    front: {
      title: 'tollpatschig',
      lines: ['die Tollpatschigkeit'],
      exampleDe: 'Ich bin viel zu tollpatschig für den Eiskunstlauf.'
    },
    back: {
      title: 'неуклюжий, неловкий',
      lines: ['неуклюжесть'],
      exampleTranslation: 'Я слишком неуклюж для фигурного катания.'
    }
  },
  {
    id: 'c1-sport-275-ueberlegen',
    level: 'C1',
    topic: 'Sport und Freizeit',
    cardNumber: 275,
    source: 'physical-card',
    front: {
      title: 'überlegen',
      lines: ['die Überlegenheit'],
      exampleDe: 'Die Überlegenheit der gegnerischen Mannschaft hat sie nicht entmutigt.'
    },
    back: {
      title: 'превосходящий, сильнее',
      lines: ['превосходство, преимущество'],
      exampleTranslation: 'Преимущество команды соперника не лишило их веры в себя.'
    }
  },
  {
    id: 'c1-sport-276-unterlegen',
    level: 'C1',
    topic: 'Sport und Freizeit',
    cardNumber: 276,
    source: 'physical-card',
    front: {
      title: 'unterlegen',
      lines: ['die Unterlegenheit'],
      exampleDe: 'Er ist seinem Bruder an Kreativität unterlegen.'
    },
    back: {
      title: 'уступающий, менее сильный',
      lines: ['слабость, уступание'],
      exampleTranslation: 'Он уступает брату в креативности.'
    }
  },
  {
    id: 'c1-sport-277-wetten',
    level: 'C1',
    topic: 'Sport und Freizeit',
    cardNumber: 277,
    source: 'physical-card',
    front: {
      title: 'wetten',
      lines: ['die Wette', 'die Wetten'],
      exampleDe: 'Wir sind um die Wette gelaufen.'
    },
    back: {
      title: 'спорить на что-то, держать пари',
      lines: ['пари, ставка', 'мн.'],
      exampleTranslation: 'Мы бежали наперегонки.'
    }
  },
  {
    id: 'c1-sport-278-zunichtemachen',
    level: 'C1',
    topic: 'Sport und Freizeit',
    cardNumber: 278,
    source: 'physical-card',
    front: {
      title: 'zunichtemachen',
      lines: ['zunichtewerden', '(wird zunichte-wurde zunichte-zunichtegeworden)'],
      exampleDe: 'Das Wetter hat unsere Pläne zunichtegemacht.'
    },
    back: {
      title: 'разрушать, сводить на нет',
      lines: ['разрушаться, срываться'],
      exampleTranslation: 'Погода разрушила наши планы.'
    }
  },
  {
    id: 'c1-reisen-279-urlaubsbudget',
    level: 'C1',
    topic: 'Reisen',
    cardNumber: 279,
    source: 'physical-card',
    front: {
      title: 'das Urlaubsbudget',
      lines: ['die Urlaubsbudgets'],
      exampleDe: 'Unser Urlaubsbudget ist bereits erschöpft.'
    },
    back: {
      title: 'бюджет отпуска',
      lines: ['мн.'],
      exampleTranslation: 'Бюджет нашего отпуска уже исчерпан.'
    }
  },
  {
    id: 'c1-reisen-280-komfort',
    level: 'C1',
    topic: 'Reisen',
    cardNumber: 280,
    source: 'physical-card',
    front: {
      title: 'der Komfort',
      lines: ['komfortabel'],
      exampleDe: 'Das Hotelzimmer bietet jeden Komfort.'
    },
    back: {
      title: 'комфорт, удобство',
      lines: ['комфортный, удобный'],
      exampleTranslation: 'Номер в отеле предлагает полный комфорт.'
    }
  },
  {
    id: 'c1-reisen-281-leuchtturm',
    level: 'C1',
    topic: 'Reisen',
    cardNumber: 281,
    source: 'physical-card',
    front: {
      title: 'der Leuchtturm',
      lines: ['die Leuchttürme'],
      exampleDe: 'Der alte Leuchtturm wird bald in eine Kneipe verwandelt.'
    },
    back: {
      title: 'маяк',
      lines: ['мн.'],
      exampleTranslation: 'Старый маяк вскоре превратят в трактир.'
    }
  },
  {
    id: 'c1-reisen-282-reiz',
    level: 'C1',
    topic: 'Reisen',
    cardNumber: 282,
    source: 'physical-card',
    front: {
      title: 'der Reiz',
      lines: ['die Reize', 'reizend'],
      exampleDe: 'Es war das reizendste Erlebnis des ganzen Urlaubs.'
    },
    back: {
      title: 'очарование, привлекательность',
      lines: ['мн.', 'очаровательный, прелестный'],
      exampleTranslation: 'Это было самое очаровательное событие за весь отпуск.'
    }
  },
  {
    id: 'c1-reisen-283-himmelsrichtung',
    level: 'C1',
    topic: 'Reisen',
    cardNumber: 283,
    source: 'physical-card',
    front: {
      title: 'die Himmelsrichtung',
      lines: ['die Himmelsrichtungen'],
      exampleDe: 'Nord, Süd, West und Ost sind die Himmelsrichtungen.'
    },
    back: {
      title: 'сторона света',
      lines: ['мн.'],
      exampleTranslation: 'Север, юг, запад и восток — это стороны света.'
    }
  },
  {
    id: 'c1-reisen-284-zumutung',
    level: 'C1',
    topic: 'Reisen',
    cardNumber: 284,
    source: 'physical-card',
    front: {
      title: 'die Zumutung',
      lines: ['die Zumutungen'],
      exampleDe: 'Das ist eine Zumutung! Das Hotel war eine Zumutung für die Reisenden.'
    },
    back: {
      title: 'нечто возмутительное, неприемлемое',
      lines: ['мн.'],
      exampleTranslation: 'Это уже слишком! Отель был неприемлемым для путешественников.'
    }
  },
  {
    id: 'c1-reisen-285-einzigartig',
    level: 'C1',
    topic: 'Reisen',
    cardNumber: 285,
    source: 'physical-card',
    front: {
      title: 'einzigartig',
      lines: ['die Einzigartigkeit'],
      exampleDe: 'Heute besuchen wir einen einzigartigen Park.'
    },
    back: {
      title: 'уникальный, единственный в своём роде',
      lines: ['уникальность'],
      exampleTranslation: 'Сегодня мы посетим уникальный парк.'
    }
  },
  {
    id: 'c1-reisen-286-kurios',
    level: 'C1',
    topic: 'Reisen',
    cardNumber: 286,
    source: 'physical-card',
    front: {
      title: 'kurios',
      lines: ['die Kuriosität', 'die Kuriositäten'],
      exampleDe: 'Auf der Reise gab es viele Kuriositäten.'
    },
    back: {
      title: 'курьёзный, забавный, странный',
      lines: ['курьёз, странность', 'мн.'],
      exampleTranslation: 'Во время путешествия случилось много необычного.'
    }
  },
  {
    id: 'c1-reisen-287-ohnehin',
    level: 'C1',
    topic: 'Reisen',
    cardNumber: 287,
    source: 'physical-card',
    front: {
      title: 'ohnehin',
      lines: [],
      exampleDe: 'Das hätte uns ohnehin nicht geholfen.'
    },
    back: {
      title: 'и так уже, всё равно',
      lines: [],
      exampleTranslation: 'Это нам всё равно бы не помогло.'
    }
  },
  {
    id: 'c1-reisen-288-sich-anpassen',
    level: 'C1',
    topic: 'Reisen',
    cardNumber: 288,
    source: 'physical-card',
    front: {
      title: 'sich anpassen',
      lines: ['die Anpassung', 'die Anpassungen'],
      exampleDe: 'Er kann sich gut an eine neue Umgebung anpassen.'
    },
    back: {
      title: 'приспосабливаться',
      lines: ['приспособление, адаптация', 'мн.'],
      exampleTranslation: 'Он хорошо адаптируется к новому окружению.'
    }
  },
  {
    id: 'c1-reisen-289-unerlaesslich',
    level: 'C1',
    topic: 'Reisen',
    cardNumber: 289,
    source: 'physical-card',
    front: {
      title: 'unerlässlich',
      lines: [],
      exampleDe: 'Diese Impfung ist für die Reise unerlässlich. Wir halten das für unerlässlich.'
    },
    back: {
      title: 'необходимый, обязательный',
      lines: [],
      exampleTranslation: 'Эта прививка обязательна для путешествия. Мы считаем это необходимым.'
    }
  },
  {
    id: 'c1-reisen-290-unterbringen',
    level: 'C1',
    topic: 'Reisen',
    cardNumber: 290,
    source: 'physical-card',
    front: {
      title: 'unterbringen',
      subtitle: '(bringt unter-brachte unter-untergebracht)',
      lines: ['die Unterbringung', 'die Unterbringungen'],
      exampleDe: 'Wir waren im besten Hotel der Stadt untergebracht.'
    },
    back: {
      title: 'размещать, устраивать',
      lines: ['размещение, устройство', 'мн.'],
      exampleTranslation: 'Нас разместили в лучшем отеле города.'
    }
  },
  {
    id: 'c1-bewegung-291-hindernis',
    level: 'C1',
    topic: 'Bewegung und Ortsbestimmung',
    cardNumber: 291,
    source: 'physical-card',
    front: {
      title: 'das Hindernis',
      lines: ['die Hindernisse', 'hindern'],
      exampleDe: 'Diese Hindernisse sind nicht so einfach zu beseitigen.'
    },
    back: {
      title: 'препятствие, преграда',
      lines: ['мн.', 'препятствовать, мешать'],
      exampleTranslation: 'Эти препятствия не так легко устранить.'
    }
  },
  {
    id: 'c1-bewegung-292-flaechendeckend',
    level: 'C1',
    topic: 'Bewegung und Ortsbestimmung',
    cardNumber: 292,
    source: 'physical-card',
    front: {
      title: 'flächendeckend',
      lines: [],
      exampleDe: 'Früher war diese Pflanzenart flächendeckend verbreitet.'
    },
    back: {
      title: 'повсеместный, всеохватный',
      lines: [],
      exampleTranslation: 'Раньше этот вид растений был распространён повсюду.'
    }
  },
  {
    id: 'c1-bewegung-293-orientierungslos',
    level: 'C1',
    topic: 'Bewegung und Ortsbestimmung',
    cardNumber: 293,
    source: 'physical-card',
    front: {
      title: 'orientierungslos',
      lines: ['die Orientierungslosigkeit'],
      exampleDe: 'Sie rannte orientierungslos durch das Gebäude.'
    },
    back: {
      title: 'дезориентированный, потерянный',
      lines: ['дезориентированность'],
      exampleTranslation: 'Она дезориентированно бегала по зданию.'
    }
  },
  {
    id: 'c1-bewegung-294-schleppen',
    level: 'C1',
    topic: 'Bewegung und Ortsbestimmung',
    cardNumber: 294,
    source: 'physical-card',
    front: {
      title: 'schleppen',
      lines: [],
      exampleDe: 'Hast du den Koffer allein nach oben geschleppt? Das kaputte Auto wurde zur Werkstatt geschleppt.'
    },
    back: {
      title: 'тащить, волочить',
      lines: [],
      exampleTranslation: 'Ты сам втащил чемодан наверх? Сломанную машину отбуксировали в мастерскую.'
    }
  },
  {
    id: 'c1-bewegung-295-schluepfen',
    level: 'C1',
    topic: 'Bewegung und Ortsbestimmung',
    cardNumber: 295,
    source: 'physical-card',
    front: {
      title: 'schlüpfen',
      lines: [],
      exampleDe: 'Die Maus schlüpfte ins Loch. Sie schlüpfte in ihren Mantel und verließ das Haus.'
    },
    back: {
      title: 'проскользнуть, юркнуть',
      lines: [],
      exampleTranslation: 'Мышь юркнула в нору. Она накинула пальто и вышла из дома.'
    }
  },
  {
    id: 'c1-bewegung-296-starr',
    level: 'C1',
    topic: 'Bewegung und Ortsbestimmung',
    cardNumber: 296,
    source: 'physical-card',
    front: {
      title: 'starr',
      lines: ['erstarren'],
      exampleDe: 'Sie erstarrten vor Schreck.'
    },
    back: {
      title: 'застывший, неподвижный, оцепенелый',
      lines: ['оцепенеть, застыть'],
      exampleTranslation: 'Они оцепенели от страха.'
    }
  },
  {
    id: 'c1-bewegung-297-strecken',
    level: 'C1',
    topic: 'Bewegung und Ortsbestimmung',
    cardNumber: 297,
    source: 'physical-card',
    front: {
      title: 'strecken',
      lines: ['die Strecke', 'die Strecken'],
      exampleDe: 'Er stand vom Sessel auf und streckte sich.'
    },
    back: {
      title: 'вытягивать, распрямлять',
      lines: ['расстояние, дистанция', 'мн.'],
      exampleTranslation: 'Он встал с кресла и потянулся.'
    }
  },
  {
    id: 'c1-bewegung-298-ueberschreiten',
    level: 'C1',
    topic: 'Bewegung und Ortsbestimmung',
    cardNumber: 298,
    source: 'physical-card',
    front: {
      title: 'überschreiten',
      subtitle: '(überschreitet-überschritt-überschritten)',
      lines: [],
      exampleDe: 'Überschreiten der Gleise verboten! Sie haben die zulässige Geschwindigkeit überschritten.'
    },
    back: {
      title: 'переходить, пересекать; превышать',
      lines: [],
      exampleTranslation: 'Переходить пути запрещено! Вы превысили допустимую скорость.'
    }
  },
  {
    id: 'c1-bewegung-299-vorankommen',
    level: 'C1',
    topic: 'Bewegung und Ortsbestimmung',
    cardNumber: 299,
    source: 'physical-card',
    front: {
      title: 'vorankommen',
      subtitle: '(kommt voran-kam voran-vorangekommen)',
      lines: [],
      exampleDe: 'Wir sind mit dem Auto kaum vorangekommen. Die Arbeit kommt gut voran.'
    },
    back: {
      title: 'продвигаться, двигаться вперёд',
      lines: [],
      exampleTranslation: 'Мы на машине едва продвигались вперёд. Работа хорошо продвигается.'
    }
  },
  {
    id: 'c1-transport-300-bahnuebergang',
    level: 'C1',
    topic: 'Transport',
    cardNumber: 300,
    source: 'physical-card',
    front: {
      title: 'der Bahnübergang',
      lines: ['die Bahnübergänge'],
      exampleDe: 'Pass auf, der Bahnübergang ist unbeschrankt.'
    },
    back: {
      title: 'железнодорожный переезд',
      lines: ['мн.'],
      exampleTranslation: 'Будь внимателен, этот железнодорожный переезд без шлагбаума.'
    }
  },
  {
    id: 'c1-transport-301-gang',
    level: 'C1',
    topic: 'Transport',
    cardNumber: 301,
    source: 'physical-card',
    front: {
      title: 'der Gang',
      lines: ['die Gänge'],
      exampleDe: 'Wie viele Gänge hat dein Rennrad?'
    },
    back: {
      title: 'передача, скорость',
      lines: ['мн.'],
      exampleTranslation: 'Сколько передач у твоего гоночного велосипеда?'
    }
  },
  {
    id: 'c1-transport-302-gegenverkehr',
    level: 'C1',
    topic: 'Transport',
    cardNumber: 302,
    source: 'physical-card',
    front: {
      title: 'der Gegenverkehr',
      lines: [],
      exampleDe: 'Diese Straße hat Gegenverkehr. Es herrscht starker Gegenverkehr.'
    },
    back: {
      title: 'встречное движение',
      lines: [],
      exampleTranslation: 'На этой улице есть встречное движение. Здесь сильное встречное движение.'
    }
  },
  {
    id: 'c1-transport-303-heissluftballon',
    level: 'C1',
    topic: 'Transport',
    cardNumber: 303,
    source: 'physical-card',
    front: {
      title: 'der Heißluftballon',
      lines: ['die Heißluftballone'],
      exampleDe: 'Der Korb des Heißluftballons ist nicht groß genug.'
    },
    back: {
      title: 'воздушный шар',
      lines: ['мн.'],
      exampleTranslation: 'Корзина воздушного шара недостаточно велика.'
    }
  },
  {
    id: 'c1-transport-304-personenschaden',
    level: 'C1',
    topic: 'Transport',
    cardNumber: 304,
    source: 'physical-card',
    front: {
      title: 'der Personenschaden',
      lines: ['der Sachschaden'],
      exampleDe: 'Bei dem Unfall entstand großer Sachschaden.'
    },
    back: {
      title: 'человеческие жертвы',
      lines: ['материальный ущерб'],
      exampleTranslation: 'Авария нанесла большой материальный ущерб.'
    }
  },
  {
    id: 'c1-transport-305-scheinwerfer',
    level: 'C1',
    topic: 'Transport',
    cardNumber: 305,
    source: 'physical-card',
    front: {
      title: 'der Scheinwerfer',
      lines: ['die Scheinwerfer'],
      exampleDe: 'Die Scheinwerfer müssen regelmäßig gereinigt werden.'
    },
    back: {
      title: 'фара, прожектор',
      lines: ['мн.'],
      exampleTranslation: 'Фары нужно регулярно чистить.'
    }
  },
  {
    id: 'c1-transport-306-schranke',
    level: 'C1',
    topic: 'Transport',
    cardNumber: 306,
    source: 'physical-card',
    front: {
      title: 'die Schranke',
      lines: ['die Schranken'],
      exampleDe: 'Die Schranke geht hoch.'
    },
    back: {
      title: 'шлагбаум',
      lines: ['мн.'],
      exampleTranslation: 'Шлагбаум поднимается.'
    }
  },
  {
    id: 'c1-transport-307-spur',
    level: 'C1',
    topic: 'Transport',
    cardNumber: 307,
    source: 'physical-card',
    front: {
      title: 'die Spur',
      lines: ['die Spuren'],
      exampleDe: 'Versuch auf die rechte Spur zu wechseln. Von ihm fehlt jede Spur.'
    },
    back: {
      title: 'полоса, след',
      lines: ['мн.'],
      exampleTranslation: 'Попробуй перестроиться в правую полосу. О нём нет никаких вестей.'
    }
  },
  {
    id: 'c1-transport-308-eintreffen',
    level: 'C1',
    topic: 'Transport',
    cardNumber: 308,
    source: 'physical-card',
    front: {
      title: 'eintreffen',
      subtitle: '(trifft ein-traf ein-eingetroffen)',
      lines: [],
      exampleDe: 'Der Bus trifft in Lwiw mit Verspätung ein. Ich treffe am Montag um 12 Uhr ein.'
    },
    back: {
      title: 'прибывать',
      lines: [],
      exampleTranslation: 'Автобус прибывает во Львов с опозданием. Я прибываю в понедельник в 12 часов.'
    }
  },
  {
    id: 'c1-transport-309-gelangen',
    level: 'C1',
    topic: 'Transport',
    cardNumber: 309,
    source: 'physical-card',
    front: {
      title: 'gelangen',
      lines: [],
      exampleDe: 'Wie kann man in diese Stadt gelangen? Ich bin schon ans Ziel gelangt.'
    },
    back: {
      title: 'попадать, добираться',
      lines: [],
      exampleTranslation: 'Как можно добраться до этого города? Я уже добрался до цели.'
    }
  },
  {
    id: 'c1-transport-310-hupen',
    level: 'C1',
    topic: 'Transport',
    cardNumber: 310,
    source: 'physical-card',
    front: {
      title: 'hupen',
      lines: [],
      exampleDe: 'Der Taxifahrer hupte ungeduldig.'
    },
    back: {
      title: 'сигналить',
      lines: [],
      exampleTranslation: 'Водитель такси нетерпеливо сигналил.'
    }
  },
  {
    id: 'c1-transport-311-steuern',
    level: 'C1',
    topic: 'Transport',
    cardNumber: 311,
    source: 'physical-card',
    front: {
      title: 'steuern',
      lines: ['das Steuer', 'die Steuer'],
      exampleDe: 'Sie setzte sich hinter das Steuer und startete den Wagen.'
    },
    back: {
      title: 'управлять, вести',
      lines: ['руль', 'мн.'],
      exampleTranslation: 'Она села за руль и завела машину.'
    }
  },
  {
    id: 'c1-transport-312-ueberladen',
    level: 'C1',
    topic: 'Transport',
    cardNumber: 312,
    source: 'physical-card',
    front: {
      title: 'überladen',
      subtitle: '(überlädt-überlud-überladen)',
      lines: [],
      exampleDe: 'Der Wagen ist völlig überladen.'
    },
    back: {
      title: 'перегружать',
      lines: [],
      exampleTranslation: 'Автомобиль полностью перегружен.'
    }
  },
  {
    id: 'c1-transport-313-verungluecken',
    level: 'C1',
    topic: 'Transport',
    cardNumber: 313,
    source: 'physical-card',
    front: {
      title: 'verunglücken',
      lines: [],
      exampleDe: 'Er ist mit dem Auto tödlich verunglückt.'
    },
    back: {
      title: 'попасть в аварию, погибнуть в несчастном случае',
      lines: [],
      exampleTranslation: 'Он погиб в автомобильной аварии.'
    }
  },
  {
    id: 'c1-stadt-314-abstellen',
    level: 'C1',
    topic: 'Stadt',
    cardNumber: 314,
    source: 'physical-card',
    front: {
      title: 'abstellen',
      lines: [],
      exampleDe: 'Hier gibt es keinen Parkplatz, um das Auto abzustellen.'
    },
    back: {
      title: 'ставить, парковать',
      lines: [],
      exampleTranslation: 'Здесь нет парковки, чтобы поставить автомобиль.'
    }
  },
  {
    id: 'c1-stadt-315-aushaengeschild',
    level: 'C1',
    topic: 'Stadt',
    cardNumber: 315,
    source: 'physical-card',
    front: {
      title: 'das Aushängeschild',
      lines: ['die Aushängeschilder'],
      exampleDe: 'Das bunte Aushängeschild zieht gleich den Blick der Passanten an.'
    },
    back: {
      title: 'вывеска',
      lines: ['мн.'],
      exampleTranslation: 'Яркая вывеска сразу привлекает внимание прохожих.'
    }
  },
  {
    id: 'c1-stadt-316-aufwand',
    level: 'C1',
    topic: 'Stadt',
    cardNumber: 316,
    source: 'physical-card',
    front: {
      title: 'der Aufwand',
      lines: ['aufwändig'],
      exampleDe: 'Die Bauarbeiten werden mit dem geringsten Aufwand durchgeführt.'
    },
    back: {
      title: 'затраты, расходы',
      lines: ['затратный, трудоёмкий'],
      exampleTranslation: 'Строительные работы выполняются с минимальными затратами.'
    }
  },
  {
    id: 'c1-stadt-317-heimweg',
    level: 'C1',
    topic: 'Stadt',
    cardNumber: 317,
    source: 'physical-card',
    front: {
      title: 'der Heimweg',
      lines: [],
      exampleDe: 'Auf dem Heimweg sprach er kein Wort. Ich muss mich schon auf den Heimweg machen.'
    },
    back: {
      title: 'дорога домой, обратный путь',
      lines: [],
      exampleTranslation: 'По дороге домой он не сказал ни слова. Мне уже пора отправляться домой.'
    }
  },
  {
    id: 'c1-stadt-318-muellabfuhr',
    level: 'C1',
    topic: 'Stadt',
    cardNumber: 318,
    source: 'physical-card',
    front: {
      title: 'die Müllabfuhr',
      lines: [],
      exampleDe: 'Die städtische Müllabfuhr funktioniert einwandfrei.'
    },
    back: {
      title: 'вывоз мусора',
      lines: [],
      exampleTranslation: 'Вывоз мусора в городе работает безупречно.'
    }
  },
  {
    id: 'c1-stadt-319-saeule',
    level: 'C1',
    topic: 'Stadt',
    cardNumber: 319,
    source: 'physical-card',
    front: {
      title: 'die Säule',
      lines: ['die Säulen'],
      exampleDe: 'Das Dach wird von Säulen gestützt. Die Säulen zieren das Portal des Hauses.'
    },
    back: {
      title: 'колонна, столб',
      lines: ['мн.'],
      exampleTranslation: 'Крышу поддерживают колонны. Колонны украшают портал дома.'
    }
  },
  {
    id: 'c1-stadt-320-schattenseite',
    level: 'C1',
    topic: 'Stadt',
    cardNumber: 320,
    source: 'physical-card',
    front: {
      title: 'die Schattenseite',
      lines: ['die Schattenseiten'],
      exampleDe: 'Das Leben in diesem Viertel hat auch seine Schattenseiten.'
    },
    back: {
      title: 'тёмная сторона, минус',
      lines: ['мн.'],
      exampleTranslation: 'Жизнь в этом районе тоже имеет свои минусы.'
    }
  },
  {
    id: 'c1-stadt-321-ueberwachung',
    level: 'C1',
    topic: 'Stadt',
    cardNumber: 321,
    source: 'physical-card',
    front: {
      title: 'die Überwachung',
      lines: ['die Überwachungen', 'überwachen'],
      exampleDe: 'Der Straßenverkehr wird überwacht.'
    },
    back: {
      title: 'наблюдение, контроль',
      lines: ['мн.', 'следить, контролировать'],
      exampleTranslation: 'За дорожным движением наблюдают.'
    }
  },
  {
    id: 'c1-stadt-322-ertraeglich',
    level: 'C1',
    topic: 'Stadt',
    cardNumber: 322,
    source: 'physical-card',
    front: {
      title: 'erträglich',
      lines: ['unerträglich'],
      exampleDe: 'Der Lärm in der Stadt ist manchmal unerträglich.'
    },
    back: {
      title: 'терпимый, сносный',
      lines: ['нестерпимый'],
      exampleTranslation: 'Шум в городе иногда нестерпим.'
    }
  },
  {
    id: 'c1-stadt-323-lauter',
    level: 'C1',
    topic: 'Stadt',
    cardNumber: 323,
    source: 'physical-card',
    front: {
      title: 'lauter',
      lines: [],
      exampleDe: 'In der Kirche waren lauter alte Leute. In dieser Gegend gibt es lauter Bars und Diskos.'
    },
    back: {
      title: 'сплошь, только, исключительно',
      lines: [],
      exampleTranslation: 'В церкви были сплошь пожилые люди. В этой местности одни только бары и дискотеки.'
    }
  },
  {
    id: 'c1-stadt-324-verlegen',
    level: 'C1',
    topic: 'Stadt',
    cardNumber: 324,
    source: 'physical-card',
    front: {
      title: 'verlegen',
      lines: ['die Verlegung', 'die Verlegungen'],
      exampleDe: 'Die Haltestelle wurde vor einem Monat verlegt.'
    },
    back: {
      title: 'переносить, перемещать',
      lines: ['перенос', 'мн.'],
      exampleTranslation: 'Остановку перенесли месяц назад.'
    }
  },
  {
    id: 'c1-dorf-325-fell',
    level: 'C1',
    topic: 'Dorf',
    cardNumber: 325,
    source: 'physical-card',
    front: {
      title: 'das Fell',
      lines: ['die Felle'],
      exampleDe: 'Das Fell der Schafe wird geschoren.'
    },
    back: {
      title: 'шерсть, руно',
      lines: ['мн.'],
      exampleTranslation: 'Шерсть овец состригают.'
    }
  },
  {
    id: 'c1-dorf-326-futter',
    level: 'C1',
    topic: 'Dorf',
    cardNumber: 326,
    source: 'physical-card',
    front: {
      title: 'das Futter',
      lines: ['füttern'],
      exampleDe: 'Habt ihr den Hühnern das Futter schon gegeben?'
    },
    back: {
      title: 'корм',
      lines: ['кормить'],
      exampleTranslation: 'Вы уже дали курам корм?'
    }
  },
  {
    id: 'c1-dorf-327-heu',
    level: 'C1',
    topic: 'Dorf',
    cardNumber: 327,
    source: 'physical-card',
    front: {
      title: 'das Heu',
      lines: [],
      exampleDe: 'Er hat Geld wie Heu.'
    },
    back: {
      title: 'сено',
      lines: [],
      exampleTranslation: 'У него денег куры не клюют.'
    }
  },
  {
    id: 'c1-dorf-328-rechen',
    level: 'C1',
    topic: 'Dorf',
    cardNumber: 328,
    source: 'physical-card',
    front: {
      title: 'der Rechen',
      lines: ['die Rechen'],
      exampleDe: 'Der Rechenstiel ist gebrochen.'
    },
    back: {
      title: 'грабли',
      lines: ['мн.'],
      exampleTranslation: 'Ручка граблей сломана.'
    }
  },
  {
    id: 'c1-dorf-329-schlamm',
    level: 'C1',
    topic: 'Dorf',
    cardNumber: 329,
    source: 'physical-card',
    front: {
      title: 'der Schlamm',
      lines: ['schlammig'],
      exampleDe: 'Deine Schuhe sind ganz schlammig.'
    },
    back: {
      title: 'грязь, слякоть, жижа',
      lines: ['грязный, болотистый'],
      exampleTranslation: 'Твои ботинки все в грязи.'
    }
  },
  {
    id: 'c1-dorf-330-schaufel',
    level: 'C1',
    topic: 'Dorf',
    cardNumber: 330,
    source: 'physical-card',
    front: {
      title: 'die Schaufel',
      lines: ['die Schaufeln', 'schaufeln'],
      exampleDe: 'Da muss man noch lange schaufeln.'
    },
    back: {
      title: 'лопата',
      lines: ['мн.', 'копать лопатой'],
      exampleTranslation: 'Тут придётся ещё долго копать лопатой.'
    }
  },
  {
    id: 'c1-dorf-331-scheune',
    level: 'C1',
    topic: 'Dorf',
    cardNumber: 331,
    source: 'physical-card',
    front: {
      title: 'die Scheune',
      lines: ['die Scheunen'],
      exampleDe: 'Das frische Heu wird in die Scheune gebracht.'
    },
    back: {
      title: 'сарай, амбар',
      lines: ['мн.'],
      exampleTranslation: 'Свежее сено относят в сарай.'
    }
  },
  {
    id: 'c1-dorf-332-wassermuehle',
    level: 'C1',
    topic: 'Dorf',
    cardNumber: 332,
    source: 'physical-card',
    front: {
      title: 'die Wassermühle',
      lines: ['die Wassermühlen', 'die Windmühle', 'die Windmühlen'],
      exampleDe: 'Die Flügel der Windmühle drehen sich.'
    },
    back: {
      title: 'водяная мельница',
      lines: ['мн.', 'ветряная мельница', 'мн.'],
      exampleTranslation: 'Крылья ветряной мельницы вращаются.'
    }
  },
  {
    id: 'c1-dorf-333-weide',
    level: 'C1',
    topic: 'Dorf',
    cardNumber: 333,
    source: 'physical-card',
    front: {
      title: 'die Weide',
      lines: ['die Weiden'],
      exampleDe: 'Das Vieh bleibt das ganze Jahr auf der Weide.'
    },
    back: {
      title: 'пастбище, выгон',
      lines: ['мн.'],
      exampleTranslation: 'Скот остаётся на пастбище круглый год.'
    }
  },
  {
    id: 'c1-dorf-334-entfliehen',
    level: 'C1',
    topic: 'Dorf',
    cardNumber: 334,
    source: 'physical-card',
    front: {
      title: 'entfliehen',
      subtitle: '(entflieht-entfloh-entflohen)',
      lines: [],
      exampleDe: 'Am Wochenende möchte ich der Hektik der Stadt entfliehen.'
    },
    back: {
      title: 'убегать, спасаться от',
      lines: [],
      exampleTranslation: 'На выходных мне хочется сбежать от городской суеты.'
    }
  },
  {
    id: 'c1-dorf-335-zirpen',
    level: 'C1',
    topic: 'Dorf',
    cardNumber: 335,
    source: 'physical-card',
    front: {
      title: 'zirpen',
      lines: [],
      exampleDe: 'Eine Grille zirpt im Gras. Im Busch hörte man Zikaden zirpen.'
    },
    back: {
      title: 'стрекотать, стрекотать как цикада или сверчок',
      lines: [],
      exampleTranslation: 'В траве стрекочет сверчок. В кустах было слышно стрекотание цикад.'
    }
  },
  {
    id: 'c1-dorf-336-zufuegen',
    level: 'C1',
    topic: 'Dorf',
    cardNumber: 336,
    source: 'physical-card',
    front: {
      title: 'zufügen',
      lines: [],
      exampleDe: 'Regenfälle haben den Landwirten großen Schaden zugefügt.'
    },
    back: {
      title: 'причинять, наносить',
      lines: [],
      exampleTranslation: 'Дожди нанесли фермерам большой ущерб.'
    }
  },
  {
    id: 'c1-kommunikation-337-angeben',
    level: 'C1',
    topic: 'Kommunikation',
    cardNumber: 337,
    source: 'physical-card',
    front: {
      title: 'angeben',
      subtitle: '(gibt an-gab an-angegeben)',
      lines: ['der Angeber', 'die Angeber'],
      exampleDe: 'Alle halten ihn für einen Angeber.'
    },
    back: {
      title: 'хвастаться, задаваться',
      lines: ['хвастун', 'мн.'],
      exampleTranslation: 'Все считают его хвастуном.'
    }
  },
  {
    id: 'c1-kommunikation-338-angesichts',
    level: 'C1',
    topic: 'Kommunikation',
    cardNumber: 338,
    source: 'physical-card',
    front: {
      title: 'angesichts',
      lines: ['mangels', 'zwecks']
    },
    back: {
      title: 'ввиду, учитывая',
      lines: ['за неимением, из-за отсутствия', 'с целью, ради']
    }
  },
  {
    id: 'c1-kommunikation-339-aufgreifen',
    level: 'C1',
    topic: 'Kommunikation',
    cardNumber: 339,
    source: 'physical-card',
    front: {
      title: 'aufgreifen',
      subtitle: '(greift auf-griff auf-aufgegriffen)',
      lines: [],
      exampleDe: 'Ich möchte die vorherige Frage noch einmal aufgreifen.'
    },
    back: {
      title: 'подхватывать, возвращаться к теме',
      lines: [],
      exampleTranslation: 'Я хотел бы ещё раз вернуться к предыдущему вопросу.'
    }
  },
  {
    id: 'c1-kommunikation-340-aufklaeren',
    level: 'C1',
    topic: 'Kommunikation',
    cardNumber: 340,
    source: 'physical-card',
    front: {
      title: 'aufklären',
      lines: ['die Aufklärung', 'die Aufklärungen'],
      exampleDe: 'Der Anwalt klärte ihn über seine Rechte auf.'
    },
    back: {
      title: 'разъяснять, просвещать',
      lines: ['разъяснение', 'мн.'],
      exampleTranslation: 'Адвокат разъяснил ему его права.'
    }
  },
  {
    id: 'c1-kommunikation-341-ausdruecklich',
    level: 'C1',
    topic: 'Kommunikation',
    cardNumber: 341,
    source: 'physical-card',
    front: {
      title: 'ausdrücklich',
      lines: ['ausdrückliche Erlaubnis'],
      exampleDe: 'Ich möchte ausdrücklich betonen, dass ...'
    },
    back: {
      title: 'особо, специально; настоятельно',
      lines: ['особое, явное разрешение'],
      exampleTranslation: 'Я хотел бы особо подчеркнуть, что ...'
    }
  },
  {
    id: 'c1-kommunikation-342-einfuehlungsvermoegen',
    level: 'C1',
    topic: 'Kommunikation',
    cardNumber: 342,
    source: 'physical-card',
    front: {
      title: 'das Einfühlungsvermögen',
      lines: ['sich einfühlen'],
      exampleDe: 'Er besitzt gutes Einfühlungsvermögen.'
    },
    back: {
      title: 'эмпатия, способность сопереживать',
      lines: ['вчувствоваться, входить в чьё-то положение'],
      exampleTranslation: 'У него хорошо развита эмпатия.'
    }
  },
  {
    id: 'c1-kommunikation-343-ausrutscher',
    level: 'C1',
    topic: 'Kommunikation',
    cardNumber: 343,
    source: 'physical-card',
    front: {
      title: 'der Ausrutscher',
      lines: ['die Ausrutscher'],
      exampleDe: 'Das war nur ein Ausrutscher!'
    },
    back: {
      title: 'оговорка, оплошность',
      lines: ['мн.'],
      exampleTranslation: 'Это была всего лишь ошибка!'
    }
  },
  {
    id: 'c1-kommunikation-344-einwand',
    level: 'C1',
    topic: 'Kommunikation',
    cardNumber: 344,
    source: 'physical-card',
    front: {
      title: 'der Einwand',
      lines: ['die Einwände', 'einwenden'],
      exampleDe: 'Gibt es irgendwelche Einwände gegen den Plan?'
    },
    back: {
      title: 'возражение',
      lines: ['мн.', 'возражать'],
      exampleTranslation: 'Есть ли какие-нибудь возражения против этого плана?'
    }
  },
  {
    id: 'c1-kommunikation-345-gleichgesinnte',
    level: 'C1',
    topic: 'Kommunikation',
    cardNumber: 345,
    source: 'physical-card',
    front: {
      title: 'der Gleichgesinnte',
      lines: ['die Gleichgesinnten', 'gleichgesinnt'],
      exampleDe: 'In einem Verein kann man viele Gleichgesinnte finden.'
    },
    back: {
      title: 'единомышленник',
      lines: ['мн.', 'одинаковых взглядов, единомышленный'],
      exampleTranslation: 'В объединении по интересам можно найти много единомышленников.'
    }
  },
  {
    id: 'c1-kommunikation-346-konsens',
    level: 'C1',
    topic: 'Kommunikation',
    cardNumber: 346,
    source: 'physical-card',
    front: {
      title: 'der Konsens',
      lines: ['die Konsense', 'der Dissens', 'die Dissense'],
      exampleDe: 'Darüber besteht kein Konsens.'
    },
    back: {
      title: 'согласие, консенсус',
      lines: ['мн.', 'разногласие, расхождение во взглядах', 'мн.'],
      exampleTranslation: 'По этому поводу согласия нет.'
    }
  },
  {
    id: 'c1-kommunikation-347-kumpel',
    level: 'C1',
    topic: 'Kommunikation',
    cardNumber: 347,
    source: 'physical-card',
    front: {
      title: 'der Kumpel',
      lines: ['die Kumpel'],
      exampleDe: 'Karl ist ein alter Kumpel von mir. Auf meinen Kumpel kann ich mich immer verlassen.'
    },
    back: {
      title: 'приятель, товарищ',
      lines: ['мн.'],
      exampleTranslation: 'Карл — мой давний приятель. Я всегда могу положиться на своего приятеля.'
    }
  },
  {
    id: 'c1-kommunikation-348-hinsicht',
    level: 'C1',
    topic: 'Kommunikation',
    cardNumber: 348,
    source: 'physical-card',
    front: {
      title: 'die Hinsicht',
      lines: ['die Hinsichten', 'hinsichtlich'],
      exampleDe: 'Gibt es in Hinsicht auf diesen Vorschlag noch Fragen?'
    },
    back: {
      title: 'аспект, точка зрения',
      lines: ['мн.', 'относительно, касательно'],
      exampleTranslation: 'Есть ли ещё вопросы относительно этого предложения?'
    }
  },
  {
    id: 'c1-kommunikation-349-schlussfolgerung',
    level: 'C1',
    topic: 'Kommunikation',
    cardNumber: 349,
    source: 'physical-card',
    front: {
      title: 'die Schlussfolgerung',
      lines: ['die Schlussfolgerungen', 'schlussfolgern'],
      exampleDe: 'Ich hoffe, du wirst daraus richtige Schlussfolgerungen ziehen.'
    },
    back: {
      title: 'вывод',
      lines: ['мн.', 'делать вывод, заключать'],
      exampleTranslation: 'Я надеюсь, ты сделаешь из этого правильные выводы.'
    }
  },
  {
    id: 'c1-kommunikation-350-erwerben',
    level: 'C1',
    topic: 'Kommunikation',
    cardNumber: 350,
    source: 'physical-card',
    front: {
      title: 'erwerben',
      subtitle: '(erwirbt-erwarb-erworben)',
      lines: ['der Erwerb', 'Spracherwerb']
    },
    back: {
      title: 'приобретать, получать',
      lines: ['приобретение, получение', 'усвоение языка']
    }
  },
  {
    id: 'c1-kommunikation-351-essenziell',
    level: 'C1',
    topic: 'Kommunikation',
    cardNumber: 351,
    source: 'physical-card',
    front: {
      title: 'essenziell',
      lines: [],
      exampleDe: 'Kommunikation ist ein essenzieller Bestandteil des gesellschaftlichen Lebens.'
    },
    back: {
      title: 'существенный, важнейший',
      lines: [],
      exampleTranslation: 'Общение — это важнейшая составляющая общественной жизни.'
    }
  },
  {
    id: 'c1-kommunikation-352-geschlechtsspezifisch',
    level: 'C1',
    topic: 'Kommunikation',
    cardNumber: 352,
    source: 'physical-card',
    front: {
      title: 'geschlechtsspezifisch',
      lines: [],
      exampleDe: 'Man muss sich nicht immer geschlechtsspezifisch verhalten.'
    },
    back: {
      title: 'обусловленный полом, гендерно-специфический',
      lines: [],
      exampleTranslation: 'Необязательно всегда вести себя в соответствии со своим полом.'
    }
  },
  {
    id: 'c1-kommunikation-353-gewiss',
    level: 'C1',
    topic: 'Kommunikation',
    cardNumber: 353,
    source: 'physical-card',
    front: {
      title: 'gewiss',
      lines: ['die Gewissheit'],
      exampleDe: 'Das kann ich mit Gewissheit sagen.'
    },
    back: {
      title: 'несомненно, безусловно',
      lines: ['уверенность, достоверность'],
      exampleTranslation: 'Это я могу сказать с полной уверенностью.'
    }
  },
  {
    id: 'c1-kommunikation-354-halten',
    level: 'C1',
    topic: 'Kommunikation',
    cardNumber: 354,
    source: 'physical-card',
    front: {
      title: 'halten',
      subtitle: '(hält-hielt-gehalten)',
      lines: ['die Haltung', 'die Haltungen'],
      exampleDe: 'Was hältst du von dieser Idee?'
    },
    back: {
      title: 'быть какого-либо мнения',
      lines: ['позиция, отношение', 'мн.'],
      exampleTranslation: 'Что ты думаешь об этой идее?'
    }
  },
  {
    id: 'c1-kommunikation-355-nachkommen',
    level: 'C1',
    topic: 'Kommunikation',
    cardNumber: 355,
    source: 'physical-card',
    front: {
      title: 'nachkommen',
      subtitle: '(kommt nach-kam nach-nachgekommen)',
      lines: [],
      exampleDe: 'Endlich kam er seinem Versprechen nach.'
    },
    back: {
      title: 'выполнять, исполнять',
      lines: [],
      exampleTranslation: 'Наконец он выполнил своё обещание.'
    }
  },
  {
    id: 'c1-kommunikation-356-prosit',
    level: 'C1',
    topic: 'Kommunikation',
    cardNumber: 356,
    source: 'physical-card',
    front: {
      title: 'Prosit!',
      lines: ['Prosit Neujahr!']
    },
    back: {
      title: 'На здоровье!',
      lines: ['С Новым годом!']
    }
  },
  {
    id: 'c1-kommunikation-357-schmeicheln',
    level: 'C1',
    topic: 'Kommunikation',
    cardNumber: 357,
    source: 'physical-card',
    front: {
      title: 'schmeicheln',
      lines: ['die Schmeichelei', 'die Schmeicheleien'],
      exampleDe: 'Seine Komplimente schmeicheln mir.'
    },
    back: {
      title: 'льстить',
      lines: ['лесть', 'мн.'],
      exampleTranslation: 'Его комплименты мне льстят.'
    }
  },
  {
    id: 'c1-kommunikation-358-sich-versprechen',
    level: 'C1',
    topic: 'Kommunikation',
    cardNumber: 358,
    source: 'physical-card',
    front: {
      title: 'sich versprechen',
      lines: [],
      exampleDe: 'Der Moderator hat sich mehrmals versprochen.'
    },
    back: {
      title: 'оговориться',
      lines: [],
      exampleTranslation: 'Ведущий несколько раз оговорился.'
    }
  },
  {
    id: 'c1-kommunikation-359-verheimlichen',
    level: 'C1',
    topic: 'Kommunikation',
    cardNumber: 359,
    source: 'physical-card',
    front: {
      title: 'verheimlichen',
      lines: [],
      exampleDe: 'Du verheimlichst mir etwas. Sie hat ihre Probleme lange verheimlicht.'
    },
    back: {
      title: 'скрывать, утаивать',
      lines: [],
      exampleTranslation: 'Ты что-то от меня скрываешь. Она долго скрывала свои проблемы.'
    }
  },
  {
    id: 'c1-kommunikation-360-vielmehr',
    level: 'C1',
    topic: 'Kommunikation',
    cardNumber: 360,
    source: 'physical-card',
    front: {
      title: 'vielmehr',
      lines: ['demgegenüber', 'allerdings']
    },
    back: {
      title: 'скорее, вернее',
      lines: ['напротив, в противоположность этому', 'однако, впрочем']
    }
  },
  {
    id: 'c1-medien-361-ausstrahlen',
    level: 'C1',
    topic: 'Medien',
    cardNumber: 361,
    source: 'physical-card',
    front: {
      title: 'ausstrahlen',
      lines: ['die Ausstrahlung'],
      exampleDe: 'Die Sendung wird nicht mehr ausgestrahlt.'
    },
    back: {
      title: 'передавать, транслировать',
      lines: ['передача, трансляция'],
      exampleTranslation: 'Эту передачу больше не будут транслировать.'
    }
  },
  {
    id: 'c1-medien-362-blaettern',
    level: 'C1',
    topic: 'Medien',
    cardNumber: 362,
    source: 'physical-card',
    front: {
      title: 'blättern',
      lines: [],
      exampleDe: 'Sie blätterte gelangweilt in einem Buch.'
    },
    back: {
      title: 'листать, перелистывать',
      lines: [],
      exampleTranslation: 'Она скучающе листала книгу.'
    }
  },
  {
    id: 'c1-medien-363-nachhall',
    level: 'C1',
    topic: 'Medien',
    cardNumber: 363,
    source: 'physical-card',
    front: {
      title: 'der Nachhall',
      lines: ['nachhallen'],
      exampleDe: 'Seine Idee hat ihren Nachhall im ganzen Land gefunden.'
    },
    back: {
      title: 'отклик, резонанс',
      lines: ['отдаваться эхом, находить отклик'],
      exampleTranslation: 'Его идея нашла отклик по всей стране.'
    }
  },
  {
    id: 'c1-medien-364-ueberblick',
    level: 'C1',
    topic: 'Medien',
    cardNumber: 364,
    source: 'physical-card',
    front: {
      title: 'der Überblick',
      lines: [],
      exampleDe: 'Mir fehlt da der Überblick.'
    },
    back: {
      title: 'общее представление, обзор',
      lines: [],
      exampleTranslation: 'Мне не хватает общего представления об этом.'
    }
  },
  {
    id: 'c1-medien-365-zugriff',
    level: 'C1',
    topic: 'Medien',
    cardNumber: 365,
    source: 'physical-card',
    front: {
      title: 'der Zugriff',
      lines: ['die Zugriffe', 'zugreifen', '(greift zu-griff zu-zugegriffen)'],
      exampleDe: 'Der Computer verweigert den Zugriff auf diese Datei.'
    },
    back: {
      title: 'доступ',
      lines: ['мн.', 'получать доступ, использовать'],
      exampleTranslation: 'Компьютер отказывает в доступе к этому файлу.'
    }
  },
  {
    id: 'c1-medien-366-dokumentation',
    level: 'C1',
    topic: 'Medien',
    cardNumber: 366,
    source: 'physical-card',
    front: {
      title: 'die Dokumentation',
      lines: ['die Dokumentationen', 'die Doku', 'die Dokus'],
      exampleDe: 'Ist die Doku sehenswert?'
    },
    back: {
      title: 'документальный фильм',
      lines: ['мн.', 'сокр.', 'мн.'],
      exampleTranslation: 'Стоит ли смотреть этот документальный фильм?'
    }
  },
  {
    id: 'c1-medien-367-sichtweise',
    level: 'C1',
    topic: 'Medien',
    cardNumber: 367,
    source: 'physical-card',
    front: {
      title: 'die Sichtweise',
      lines: ['die Sichtweisen'],
      exampleDe: 'Ich habe eine andere Sichtweise der Dinge.'
    },
    back: {
      title: 'точка зрения, взгляд',
      lines: ['мн.'],
      exampleTranslation: 'У меня другой взгляд на вещи.'
    }
  },
  {
    id: 'c1-medien-368-verknuepfung',
    level: 'C1',
    topic: 'Medien',
    cardNumber: 368,
    source: 'physical-card',
    front: {
      title: 'die Verknüpfung',
      lines: ['die Verknüpfungen', 'verknüpfen'],
      exampleDe: 'Dem Autor ist gelungen, verschiedene Gesichtspunkte logisch zu verknüpfen.'
    },
    back: {
      title: 'связь, соединение',
      lines: ['мн.', 'связывать, объединять'],
      exampleTranslation: 'Автору удалось логично связать разные точки зрения.'
    }
  },
  {
    id: 'c1-medien-369-digital',
    level: 'C1',
    topic: 'Medien',
    cardNumber: 369,
    source: 'physical-card',
    front: {
      title: 'digital',
      lines: ['die Digitalisierung'],
      exampleDe: 'Wir leben im digitalen Zeitalter.'
    },
    back: {
      title: 'цифровой',
      lines: ['цифровизация'],
      exampleTranslation: 'Мы живём в цифровую эпоху.'
    }
  },
  {
    id: 'c1-medien-370-enthuellen',
    level: 'C1',
    topic: 'Medien',
    cardNumber: 370,
    source: 'physical-card',
    front: {
      title: 'enthüllen',
      lines: ['die Enthüllung', 'die Enthüllungen'],
      exampleDe: 'Die Presse enthüllte den Skandal.'
    },
    back: {
      title: 'разоблачать, раскрывать',
      lines: ['разоблачение, раскрытие', 'мн.'],
      exampleTranslation: 'Пресса раскрыла скандал.'
    }
  },
  {
    id: 'c1-medien-371-erreichbar',
    level: 'C1',
    topic: 'Medien',
    cardNumber: 371,
    source: 'physical-card',
    front: {
      title: 'erreichbar',
      lines: ['die Erreichbarkeit'],
      exampleDe: 'Ich bin telefonisch momentan nicht erreichbar.'
    },
    back: {
      title: 'доступный, на связи',
      lines: ['доступность'],
      exampleTranslation: 'Сейчас со мной нельзя связаться по телефону.'
    }
  },
  {
    id: 'c1-medien-372-glaubwuerdig',
    level: 'C1',
    topic: 'Medien',
    cardNumber: 372,
    source: 'physical-card',
    front: {
      title: 'glaubwürdig',
      lines: ['die Glaubwürdigkeit'],
      exampleDe: 'Der Artikel ist wirklich glaubwürdig.'
    },
    back: {
      title: 'правдоподобный, достоверный',
      lines: ['достоверность, правдоподобие'],
      exampleTranslation: 'Эта статья действительно заслуживает доверия.'
    }
  },
  {
    id: 'c1-medien-373-preisgekroent',
    level: 'C1',
    topic: 'Medien',
    cardNumber: 373,
    source: 'physical-card',
    front: {
      title: 'preisgekrönt',
      lines: [],
      exampleDe: 'Der Film basiert auf dem preisgekrönten gleichnamigen Roman.'
    },
    back: {
      title: 'отмеченный наградами, удостоенный премии',
      lines: [],
      exampleTranslation: 'Фильм основан на одноимённом романе, удостоенном разных наград.'
    }
  },
  {
    id: 'c1-medien-374-sich-einloggen',
    level: 'C1',
    topic: 'Medien',
    cardNumber: 374,
    source: 'physical-card',
    front: {
      title: 'sich einloggen',
      lines: ['sich ausloggen'],
      exampleDe: 'Loggen Sie sich bitte jetzt ein.'
    },
    back: {
      title: 'войти в систему',
      lines: ['выйти из системы'],
      exampleTranslation: 'Пожалуйста, войдите сейчас в систему.'
    }
  },
  {
    id: 'c1-medien-375-speichern',
    level: 'C1',
    topic: 'Medien',
    cardNumber: 375,
    source: 'physical-card',
    front: {
      title: 'speichern',
      lines: ['die Speicherkapazität', 'die Speicherkapazitäten'],
      exampleDe: 'Habt ihr die Daten gespeichert?'
    },
    back: {
      title: 'сохранять, запоминать',
      lines: ['ёмкость памяти', 'мн.'],
      exampleTranslation: 'Вы сохранили данные?'
    }
  },
  {
    id: 'c1-arbeit-376-beheben',
    level: 'C1',
    topic: 'Arbeit',
    cardNumber: 376,
    source: 'physical-card',
    front: {
      title: 'beheben',
      subtitle: '(behebt-behob-behoben)',
      lines: ['die Behebung'],
      exampleDe: 'In wenigen Minuten wurde der Mangel behoben.'
    },
    back: {
      title: 'устранять, ликвидировать',
      lines: ['устранение, ликвидация'],
      exampleTranslation: 'За несколько минут недостаток был устранён.'
    }
  },
  {
    id: 'c1-arbeit-377-betriebsklima',
    level: 'C1',
    topic: 'Arbeit',
    cardNumber: 377,
    source: 'physical-card',
    front: {
      title: 'das Betriebsklima',
      lines: [],
      exampleDe: 'Im Betrieb herrscht ein gesundes Betriebsklima.'
    },
    back: {
      title: 'рабочая атмосфера, климат в коллективе',
      lines: [],
      exampleTranslation: 'На предприятии царит здоровая рабочая атмосфера.'
    }
  },
  {
    id: 'c1-arbeit-378-handwerk',
    level: 'C1',
    topic: 'Arbeit',
    cardNumber: 378,
    source: 'physical-card',
    front: {
      title: 'das Handwerk',
      lines: ['die Handwerke', 'der Handwerker', 'die Handwerker'],
      exampleDe: 'Du verstehst wirklich dein Handwerk!'
    },
    back: {
      title: 'ремесло',
      lines: ['мн.', 'ремесленник', 'мн.'],
      exampleTranslation: 'Ты действительно знаешь своё ремесло!'
    }
  },
  {
    id: 'c1-arbeit-379-kriterium',
    level: 'C1',
    topic: 'Arbeit',
    cardNumber: 379,
    source: 'physical-card',
    front: {
      title: 'das Kriterium',
      lines: ['die Kriterien'],
      exampleDe: 'Nach welchen Kriterien wird die Wahl getroffen?'
    },
    back: {
      title: 'критерий',
      lines: ['мн.'],
      exampleTranslation: 'По каким критериям делается выбор?'
    }
  },
  {
    id: 'c1-arbeit-380-stellenangebot',
    level: 'C1',
    topic: 'Arbeit',
    cardNumber: 380,
    source: 'physical-card',
    front: {
      title: 'das Stellenangebot',
      lines: ['die Stellenangebote'],
      exampleDe: 'Die Zahl der Stellenangebote ist gewachsen.'
    },
    back: {
      title: 'предложение о работе, вакансия',
      lines: ['мн.'],
      exampleTranslation: 'Количество вакансий выросло.'
    }
  },
  {
    id: 'c1-arbeit-381-einblick',
    level: 'C1',
    topic: 'Arbeit',
    cardNumber: 381,
    source: 'physical-card',
    front: {
      title: 'der Einblick',
      lines: ['die Einblicke'],
      exampleDe: 'Der Personaler gab mir einen Einblick in meine neuen Pflichte.'
    },
    back: {
      title: 'представление, ознакомление',
      lines: ['мн.'],
      exampleTranslation: 'Кадровик ознакомил меня с моими новыми обязанностями.'
    }
  },
  {
    id: 'c1-arbeit-382-einfall',
    level: 'C1',
    topic: 'Arbeit',
    cardNumber: 382,
    source: 'physical-card',
    front: {
      title: 'der Einfall',
      lines: ['die Einfälle', 'einfallsreich'],
      exampleDe: 'Während der Besprechung kann man ganz tolle Einfälle haben.'
    },
    back: {
      title: 'идея, задумка',
      lines: ['мн.', 'изобретательный, находчивый'],
      exampleTranslation: 'Во время обсуждения могут появляться действительно блестящие идеи.'
    }
  },
  {
    id: 'c1-arbeit-383-geschaeftsfuehrer',
    level: 'C1',
    topic: 'Arbeit',
    cardNumber: 383,
    source: 'physical-card',
    front: {
      title: 'der Geschäftsführer',
      lines: ['die Geschäftsführer'],
      exampleDe: 'Heute wird er zum Geschäftsführer ernannt.'
    },
    back: {
      title: 'исполнительный директор, руководитель',
      lines: ['мн.'],
      exampleTranslation: 'Сегодня его назначают исполнительным директором.'
    }
  },
  {
    id: 'c1-arbeit-384-vorzug',
    level: 'C1',
    topic: 'Arbeit',
    cardNumber: 384,
    source: 'physical-card',
    front: {
      title: 'der Vorzug',
      lines: ['die Vorzüge', 'vorzugsweise'],
      exampleDe: 'Der Chef gab seiner Idee den Vorzug.'
    },
    back: {
      title: 'преимущество',
      lines: ['мн.', 'предпочтительно, преимущественно'],
      exampleTranslation: 'Шеф отдал предпочтение его идее.'
    }
  },
  {
    id: 'c1-arbeit-385-werdegang',
    level: 'C1',
    topic: 'Arbeit',
    cardNumber: 385,
    source: 'physical-card',
    front: {
      title: 'der Werdegang',
      lines: ['die Werdegänge'],
      exampleDe: 'Können Sie mir kurz Ihren beruflichen Werdegang schildern?'
    },
    back: {
      title: 'профессиональный путь, становление',
      lines: ['мн.'],
      exampleTranslation: 'Не могли бы вы коротко описать свой профессиональный путь?'
    }
  },
  {
    id: 'c1-arbeit-386-aufstiegschance',
    level: 'C1',
    topic: 'Arbeit',
    cardNumber: 386,
    source: 'physical-card',
    front: {
      title: 'die Aufstiegschance',
      lines: ['die Aufstiegschancen'],
      exampleDe: 'Ihre Aufstiegschancen sind gering.'
    },
    back: {
      title: 'возможность карьерного роста',
      lines: ['мн.'],
      exampleTranslation: 'Её возможности карьерного роста невелики.'
    }
  },
  {
    id: 'c1-arbeit-387-belastbarkeit',
    level: 'C1',
    topic: 'Arbeit',
    cardNumber: 387,
    source: 'physical-card',
    front: {
      title: 'die Belastbarkeit',
      lines: ['belastbar'],
      exampleDe: 'Für diesen Job muss man belastbar sein.'
    },
    back: {
      title: 'стрессоустойчивость, способность выдерживать нагрузку',
      lines: ['стрессоустойчивый, выносливый'],
      exampleTranslation: 'Для этой работы нужно уметь выдерживать большие нагрузки.'
    }
  },
  {
    id: 'c1-arbeit-388-festanstellung',
    level: 'C1',
    topic: 'Arbeit',
    cardNumber: 388,
    source: 'physical-card',
    front: {
      title: 'die Festanstellung',
      lines: ['die Festanstellungen', 'festangestellt'],
      exampleDe: 'Der Chef versprach ihm eine Festanstellung.'
    },
    back: {
      title: 'постоянное место работы',
      lines: ['мн.', 'штатный, постоянный'],
      exampleTranslation: 'Шеф пообещал ему постоянное место работы.'
    }
  },
  {
    id: 'c1-arbeit-389-schlagfertigkeit',
    level: 'C1',
    topic: 'Arbeit',
    cardNumber: 389,
    source: 'physical-card',
    front: {
      title: 'die Schlagfertigkeit',
      lines: ['schlagfertig'],
      exampleDe: 'Sie gab eine schlagfertige Antwort.'
    },
    back: {
      title: 'остроумие, находчивость',
      lines: ['остроумный, находчивый'],
      exampleTranslation: 'Она дала остроумный ответ.'
    }
  },
  {
    id: 'c1-arbeit-390-teamfaehigkeit',
    level: 'C1',
    topic: 'Arbeit',
    cardNumber: 390,
    source: 'physical-card',
    front: {
      title: 'die Teamfähigkeit',
      lines: ['teamfähig'],
      exampleDe: 'Sie suchen einen teamfähigen Mitarbeiter.'
    },
    back: {
      title: 'умение работать в команде',
      lines: ['умеющий работать в команде'],
      exampleTranslation: 'Они ищут сотрудника, умеющего работать в команде.'
    }
  },
  {
    id: 'c1-arbeit-391-zweites-standbein',
    level: 'C1',
    topic: 'Arbeit',
    cardNumber: 391,
    source: 'physical-card',
    front: {
      title: 'ein zweites Standbein',
      lines: [],
      exampleDe: 'Ich möchte mir ein zweites Standbein aufbauen.'
    },
    back: {
      title: 'дополнительный заработок, запасной вариант',
      lines: [],
      exampleTranslation: 'Я хотел бы создать себе дополнительную опору.'
    }
  },
  {
    id: 'c1-arbeit-392-freinehmen',
    level: 'C1',
    topic: 'Arbeit',
    cardNumber: 392,
    source: 'physical-card',
    front: {
      title: 'freinehmen',
      subtitle: '(nimmt frei-nahm frei-freigenommen)',
      lines: [],
      exampleDe: 'Ich habe mir heute freigenommen.'
    },
    back: {
      title: 'взять выходной',
      lines: [],
      exampleTranslation: 'Сегодня я взял выходной.'
    }
  },
  {
    id: 'c1-arbeit-393-hauptsaechlich',
    level: 'C1',
    topic: 'Arbeit',
    cardNumber: 393,
    source: 'physical-card',
    front: {
      title: 'hauptsächlich',
      lines: ['nebensächlich'],
      exampleDe: 'Seine Tätigkeit beschränkt sich hauptsächlich auf die Kundenberatung.'
    },
    back: {
      title: 'главный, существенный',
      lines: ['второстепенный, несущественный'],
      exampleTranslation: 'Его деятельность в основном ограничивается консультированием клиентов.'
    }
  },
  {
    id: 'c1-arbeit-394-honorieren',
    level: 'C1',
    topic: 'Arbeit',
    cardNumber: 394,
    source: 'physical-card',
    front: {
      title: 'honorieren',
      lines: ['die Honorierung', 'die Honorierungen'],
      exampleDe: 'Die Arbeitsleistung muss entsprechend honoriert werden.'
    },
    back: {
      title: 'оплачивать, вознаграждать',
      lines: ['вознаграждение', 'мн.'],
      exampleTranslation: 'Выполненная работа должна быть должным образом вознаграждена.'
    }
  },
  {
    id: 'c1-arbeit-395-muehsam',
    level: 'C1',
    topic: 'Arbeit',
    cardNumber: 395,
    source: 'physical-card',
    front: {
      title: 'mühsam',
      lines: [],
      exampleDe: 'Das Stricken ist eine mühsame Arbeit. Die Recherchen waren diesmal sehr mühsam.'
    },
    back: {
      title: 'тяжёлый, трудоёмкий, изнурительный',
      lines: [],
      exampleTranslation: 'Вязание — это тяжёлая работа. На этот раз поиски были очень утомительными.'
    }
  },
  {
    id: 'c1-arbeit-396-sich-auskennen',
    level: 'C1',
    topic: 'Arbeit',
    cardNumber: 396,
    source: 'physical-card',
    front: {
      title: 'sich auskennen',
      subtitle: '(kennt aus-kannte aus-ausgekannt)',
      lines: [],
      exampleDe: 'Sie kennt sich in diesem Gebiet bestens aus.'
    },
    back: {
      title: 'разбираться',
      lines: [],
      exampleTranslation: 'Она прекрасно разбирается в этой области.'
    }
  },
  {
    id: 'c1-arbeit-397-sich-eignen',
    level: 'C1',
    topic: 'Arbeit',
    cardNumber: 397,
    source: 'physical-card',
    front: {
      title: 'sich eignen',
      lines: ['die Eignung'],
      exampleDe: 'Seine berufliche Eignung muss er erst beweisen.'
    },
    back: {
      title: 'годиться, быть пригодным',
      lines: ['пригодность'],
      exampleTranslation: 'Свою профессиональную пригодность он ещё должен доказать.'
    }
  },
  {
    id: 'c1-arbeit-398-sich-verzetteln',
    level: 'C1',
    topic: 'Arbeit',
    cardNumber: 398,
    source: 'physical-card',
    front: {
      title: 'sich verzetteln',
      lines: [],
      exampleDe: 'Verzettele dich nicht, konzentriere dich auf das Wichtigste.'
    },
    back: {
      title: 'распыляться, размениваться',
      lines: [],
      exampleTranslation: 'Не распыляйся, сосредоточься на самом важном.'
    }
  },
  {
    id: 'c1-arbeit-399-stellvertretend',
    level: 'C1',
    topic: 'Arbeit',
    cardNumber: 399,
    source: 'physical-card',
    front: {
      title: 'stellvertretend',
      lines: ['der Stellvertreter', 'die Stellvertreter'],
      exampleDe: 'Er wurde zum stellvertretenden Direktor gewählt.'
    },
    back: {
      title: 'замещающий, исполняющий обязанности',
      lines: ['заместитель, исполняющий обязанности', 'мн.'],
      exampleTranslation: 'Его избрали исполняющим обязанности директора.'
    }
  },
  {
    id: 'c1-arbeit-400-unabdingbar',
    level: 'C1',
    topic: 'Arbeit',
    cardNumber: 400,
    source: 'physical-card',
    front: {
      title: 'unabdingbar',
      lines: [],
      exampleDe: 'Deutsch ist für diese Stelle eine unabdingbare Voraussetzung.'
    },
    back: {
      title: 'обязательный, необходимый',
      lines: [],
      exampleTranslation: 'Немецкий язык — обязательное условие для этой должности.'
    }
  },
  {
    id: 'c1-arbeit-401-zustehen',
    level: 'C1',
    topic: 'Arbeit',
    cardNumber: 401,
    source: 'physical-card',
    front: {
      title: 'zustehen',
      subtitle: '(steht zu-stand zu-zugestanden)',
      lines: [],
      exampleDe: 'Uns stehen 21 Urlaubstage im Jahr zu.'
    },
    back: {
      title: 'полагаться, причитаться',
      lines: [],
      exampleTranslation: 'Нам полагается 21 день отпуска в год.'
    }
  },
  {
    id: 'c1-wirtschaft-402-absetzen',
    level: 'C1',
    topic: 'Wirtschaft',
    cardNumber: 402,
    source: 'physical-card',
    front: {
      title: 'absetzen',
      lines: ['der Absatz'],
      exampleDe: 'Der Absatz der Waren stockt.'
    },
    back: {
      title: 'сбывать, реализовывать',
      lines: ['сбыт'],
      exampleTranslation: 'Сбыт товаров остановился.'
    }
  },
  {
    id: 'c1-wirtschaft-403-darlehen',
    level: 'C1',
    topic: 'Wirtschaft',
    cardNumber: 403,
    source: 'physical-card',
    front: {
      title: 'das Darlehen',
      lines: ['die Darlehen'],
      exampleDe: 'Die Bank hat ihm ein neues Darlehen gewährt. Sie muss das Darlehen im nächsten Monat zurückzahlen.'
    },
    back: {
      title: 'заём, кредит',
      lines: ['мн.'],
      exampleTranslation: 'Банк предоставил ему новый заём. Она должна выплатить кредит в следующем месяце.'
    }
  },
  {
    id: 'c1-wirtschaft-404-guthaben',
    level: 'C1',
    topic: 'Wirtschaft',
    cardNumber: 404,
    source: 'physical-card',
    front: {
      title: 'das Guthaben',
      lines: ['die Guthaben'],
      exampleDe: 'Herr Stein hat ein großes Guthaben auf der Bank.'
    },
    back: {
      title: 'активы, сумма на счёте',
      lines: ['мн.'],
      exampleTranslation: 'У господина Штайна крупная сумма на счёте в банке.'
    }
  },
  {
    id: 'c1-wirtschaft-405-kapital',
    level: 'C1',
    topic: 'Wirtschaft',
    cardNumber: 405,
    source: 'physical-card',
    front: {
      title: 'das Kapital',
      lines: ['das Mindestkapital', 'das Fremdkapital']
    },
    back: {
      title: 'капитал',
      lines: ['минимальный уставный капитал', 'заёмный капитал']
    }
  },
  {
    id: 'c1-wirtschaft-406-aufschwung',
    level: 'C1',
    topic: 'Wirtschaft',
    cardNumber: 406,
    source: 'physical-card',
    front: {
      title: 'der Aufschwung',
      lines: ['die Aufschwünge', 'der Abschwung', 'die Abschwünge'],
      exampleDe: 'Die Wirtschaft erlebt einen stürmischen Aufschwung.'
    },
    back: {
      title: 'подъём, рост',
      lines: ['мн.', 'спад, ухудшение', 'мн.'],
      exampleTranslation: 'Экономика переживает бурный подъём.'
    }
  },
  {
    id: 'c1-wirtschaft-407-geldstrom',
    level: 'C1',
    topic: 'Wirtschaft',
    cardNumber: 407,
    source: 'physical-card',
    front: {
      title: 'der Geldstrom',
      lines: ['die Geldströme'],
      exampleDe: 'Nicht jeder Geldstrom ist nachverfolgbar.'
    },
    back: {
      title: 'денежный поток',
      lines: ['мн.'],
      exampleTranslation: 'Не каждый денежный поток можно отследить.'
    }
  },
  {
    id: 'c1-wirtschaft-408-rueckgang',
    level: 'C1',
    topic: 'Wirtschaft',
    cardNumber: 408,
    source: 'physical-card',
    front: {
      title: 'der Rückgang',
      lines: ['die Rückgänge', 'rückgängig'],
      exampleDe: 'Den Kauf kann man nicht rückgängig machen.'
    },
    back: {
      title: 'снижение, спад, сокращение',
      lines: ['мн.', 'обратный, возвратный'],
      exampleTranslation: 'Покупку нельзя аннулировать.'
    }
  },
  {
    id: 'c1-wirtschaft-409-stand',
    level: 'C1',
    topic: 'Wirtschaft',
    cardNumber: 409,
    source: 'physical-card',
    front: {
      title: 'der Stand',
      lines: [],
      exampleDe:
        'Der gegenwärtige Stand der Verhandlungen ist nicht zufriedenstellend. Das Werk befindet sich auf dem neuesten Stand der Technik.'
    },
    back: {
      title: 'состояние, положение',
      lines: [],
      exampleTranslation:
        'Текущее состояние переговоров неудовлетворительное. Завод оснащён по последнему слову техники.'
    }
  },
  {
    id: 'c1-wirtschaft-410-umsatz',
    level: 'C1',
    topic: 'Wirtschaft',
    cardNumber: 410,
    source: 'physical-card',
    front: {
      title: 'der Umsatz',
      lines: ['die Umsätze', 'umsetzen'],
      exampleDe: 'Am Wochenende macht das Restaurant den größten Umsatz.'
    },
    back: {
      title: 'оборот',
      lines: ['мн.', 'сбывать, реализовывать'],
      exampleTranslation: 'По выходным у ресторана самый большой оборот.'
    }
  },
  {
    id: 'c1-wirtschaft-411-wettbewerber',
    level: 'C1',
    topic: 'Wirtschaft',
    cardNumber: 411,
    source: 'physical-card',
    front: {
      title: 'der Wettbewerber',
      lines: ['die Wettbewerber'],
      exampleDe: 'Die kleinere Firma wurde von ihrem Wettbewerber ausgestochen.'
    },
    back: {
      title: 'конкурент',
      lines: ['мн.'],
      exampleTranslation: 'Меньшую фирму вытеснил её конкурент.'
    }
  },
  {
    id: 'c1-wirtschaft-412-zinssatz',
    level: 'C1',
    topic: 'Wirtschaft',
    cardNumber: 412,
    source: 'physical-card',
    front: {
      title: 'der Zinssatz',
      lines: ['die Zinssätze'],
      exampleDe:
        'Der Zinssatz wurde erhöht. Staatliche Kredite haben meist variable Zinssätze.'
    },
    back: {
      title: 'процентная ставка',
      lines: ['мн.'],
      exampleTranslation:
        'Процентную ставку повысили. Государственные кредиты обычно имеют разные процентные ставки.'
    }
  },
  {
    id: 'c1-wirtschaft-413-anlage',
    level: 'C1',
    topic: 'Wirtschaft',
    cardNumber: 413,
    source: 'physical-card',
    front: {
      title: 'die Anlage',
      lines: ['die Anlagen', 'anlegen'],
      exampleDe: 'Das Haus ist eine sichere Anlage.'
    },
    back: {
      title: 'вложение, инвестиция',
      lines: ['мн.', 'вкладывать, инвестировать'],
      exampleTranslation: 'Дом — это надёжная инвестиция.'
    }
  },
  {
    id: 'c1-wirtschaft-414-branche',
    level: 'C1',
    topic: 'Wirtschaft',
    cardNumber: 414,
    source: 'physical-card',
    front: {
      title: 'die Branche',
      lines: ['die Branchen'],
      exampleDe: 'Diese Branchen erleben gerade Hochkonjunktur.'
    },
    back: {
      title: 'отрасль',
      lines: ['мн.'],
      exampleTranslation: 'Эти отрасли сейчас переживают период высокого подъёма.'
    }
  },
  {
    id: 'c1-wirtschaft-415-einbusse',
    level: 'C1',
    topic: 'Wirtschaft',
    cardNumber: 415,
    source: 'physical-card',
    front: {
      title: 'die Einbuße',
      lines: ['die Einbußen', 'einbüßen'],
      exampleDe: 'Bei einer Inflation hat er sein Vermögen eingebüßt.'
    },
    back: {
      title: 'потеря, убыток',
      lines: ['мн.', 'терять, нести убытки'],
      exampleTranslation: 'Во время инфляции он потерял своё состояние.'
    }
  },
  {
    id: 'c1-wirtschaft-416-energiequelle',
    level: 'C1',
    topic: 'Wirtschaft',
    cardNumber: 416,
    source: 'physical-card',
    front: {
      title: 'die Energiequelle',
      lines: ['die Energiequellen'],
      exampleDe: 'Alternative Energiequellen sind heute wichtig wie noch nie zuvor.'
    },
    back: {
      title: 'источник энергии',
      lines: ['мн.'],
      exampleTranslation: 'Альтернативные источники энергии сегодня важны как никогда.'
    }
  },
  {
    id: 'c1-wirtschaft-417-kaufkraft',
    level: 'C1',
    topic: 'Wirtschaft',
    cardNumber: 417,
    source: 'physical-card',
    front: {
      title: 'die Kaufkraft',
      lines: [],
      exampleDe: 'Die Kaufkraft des Euro ist gestiegen.'
    },
    back: {
      title: 'покупательная способность',
      lines: [],
      exampleTranslation: 'Покупательная способность евро выросла.'
    }
  },
  {
    id: 'c1-wirtschaft-418-ressource',
    level: 'C1',
    topic: 'Wirtschaft',
    cardNumber: 418,
    source: 'physical-card',
    front: {
      title: 'die Ressource',
      lines: ['die Ressourcen'],
      exampleDe: 'Die Ausnutzung der Ressourcen muss zweckmäßig sein.'
    },
    back: {
      title: 'ресурс',
      lines: ['мн.'],
      exampleTranslation: 'Использование ресурсов должно быть целесообразным.'
    }
  },
  {
    id: 'c1-wirtschaft-419-effizient',
    level: 'C1',
    topic: 'Wirtschaft',
    cardNumber: 419,
    source: 'physical-card',
    front: {
      title: 'effizient',
      lines: ['ineffizient'],
      exampleDe: 'Diese Methode ist unglaublich effizient.'
    },
    back: {
      title: 'эффективный, действенный',
      lines: ['неэффективный, недейственный'],
      exampleTranslation: 'Этот метод невероятно эффективен.'
    }
  },
  {
    id: 'c1-wirtschaft-420-erzeugen',
    level: 'C1',
    topic: 'Wirtschaft',
    cardNumber: 420,
    source: 'physical-card',
    front: {
      title: 'erzeugen',
      lines: ['die Erzeugung'],
      exampleDe: 'Das Werk hat seit seiner Modernisierung mehr Strom erzeugen können.'
    },
    back: {
      title: 'производить, создавать',
      lines: ['производство, изготовление'],
      exampleTranslation:
        'После модернизации предприятие стало производить больше электроэнергии.'
    }
  },
  {
    id: 'c1-wirtschaft-421-gedeihen',
    level: 'C1',
    topic: 'Wirtschaft',
    cardNumber: 421,
    source: 'physical-card',
    front: {
      title: 'gedeihen',
      subtitle: '(gedeiht-gedieh-gediehen)',
      lines: [],
      exampleDe: 'Sein neues Geschäft gedeiht.'
    },
    back: {
      title: 'процветать, развиваться',
      lines: [],
      exampleTranslation: 'Его новый бизнес процветает.'
    }
  },
  {
    id: 'c1-wirtschaft-422-hemmen',
    level: 'C1',
    topic: 'Wirtschaft',
    cardNumber: 422,
    source: 'physical-card',
    front: {
      title: 'hemmen',
      lines: ['die Hemmung', 'die Hemmungen'],
      exampleDe: 'Das Wachstum der Wirtschaft wurde durch die Krise gehemmt.'
    },
    back: {
      title: 'сдерживать, тормозить, останавливать',
      lines: ['задержка, препятствие', 'мн.'],
      exampleTranslation: 'Рост экономики был заторможен кризисом.'
    }
  },
  {
    id: 'c1-wirtschaft-423-nachhaltig',
    level: 'C1',
    topic: 'Wirtschaft',
    cardNumber: 423,
    source: 'physical-card',
    front: {
      title: 'nachhaltig',
      lines: ['die Nachhaltigkeit'],
      exampleDe: 'Die UNO hat neue nachhaltige Entwicklungsziele verabschiedet.'
    },
    back: {
      title: 'устойчивый, долгосрочный',
      lines: ['устойчивость'],
      exampleTranslation: 'ООН приняла новые цели устойчивого развития.'
    }
  },
  {
    id: 'c1-wirtschaft-424-umbauen',
    level: 'C1',
    topic: 'Wirtschaft',
    cardNumber: 424,
    source: 'physical-card',
    front: {
      title: 'umbauen',
      lines: ['der Umbau'],
      exampleDe: 'Die Wirtschaft wird ökologisch umgebaut.'
    },
    back: {
      title: 'перестраивать, реформировать',
      lines: ['перестройка, преобразование'],
      exampleTranslation: 'Экономику перестраивают с учетом экологических факторов.'
    }
  },
  {
    id: 'c1-wirtschaft-425-zahlungsunfaehig',
    level: 'C1',
    topic: 'Wirtschaft',
    cardNumber: 425,
    source: 'physical-card',
    front: {
      title: 'zahlungsunfähig',
      lines: ['die Zahlungsunfähigkeit'],
      exampleDe: 'Das Unternehmen ist zahlungsunfähig.'
    },
    back: {
      title: 'неплатежеспособный',
      lines: ['неплатежеспособность'],
      exampleTranslation: 'Предприятие неплатежеспособно.'
    }
  },
  {
    id: 'c1-staat-426-befuerworten',
    level: 'C1',
    topic: 'Staat',
    cardNumber: 426,
    source: 'physical-card',
    front: {
      title: 'befürworten',
      lines: ['der Befürworter', 'die Befürworter'],
      exampleDe: 'Das Projekt hat sowohl Befürworter als auch Kritiker.'
    },
    back: {
      title: 'поддерживать, одобрять',
      lines: ['сторонник', 'мн.'],
      exampleTranslation: 'У проекта есть как сторонники, так и критики.'
    }
  },
  {
    id: 'c1-staat-427-arbeitsamt',
    level: 'C1',
    topic: 'Staat',
    cardNumber: 427,
    source: 'physical-card',
    front: {
      title: 'das Arbeitsamt',
      lines: ['die Arbeitsämter'],
      exampleDe: 'Melden Sie sich unverzüglich auf dem Arbeitsamt.'
    },
    back: {
      title: 'биржа труда, служба занятости',
      lines: ['мн.'],
      exampleTranslation: 'Зарегистрируйтесь в службе занятости без промедления.'
    }
  },
  {
    id: 'c1-staat-428-gastland',
    level: 'C1',
    topic: 'Staat',
    cardNumber: 428,
    source: 'physical-card',
    front: {
      title: 'das Gastland',
      lines: ['die Gastländer'],
      exampleDe: 'Gastland in diesem Jahr waren die Niederlande.'
    },
    back: {
      title: 'страна-хозяйка',
      lines: ['мн.'],
      exampleTranslation: 'В этом году страной-хозяйкой были Нидерланды.'
    }
  },
  {
    id: 'c1-staat-429-gemeinwohl',
    level: 'C1',
    topic: 'Staat',
    cardNumber: 429,
    source: 'physical-card',
    front: {
      title: 'das Gemeinwohl',
      lines: [],
      exampleDe:
        'Das gefährdet das Gemeinwohl. Liegt das wirklich im Interesse des Gemeinwohls?'
    },
    back: {
      title: 'общее благо',
      lines: [],
      exampleTranslation:
        'Это угрожает общему благу. Это действительно в интересах общего блага?'
    }
  },
  {
    id: 'c1-staat-430-potenzial',
    level: 'C1',
    topic: 'Staat',
    cardNumber: 430,
    source: 'physical-card',
    front: {
      title: 'das Potenzial',
      lines: ['die Potenziale'],
      exampleDe: 'Das wirtschaftliche Potenzial des Staates ist hoch.'
    },
    back: {
      title: 'потенциал',
      lines: ['мн.'],
      exampleTranslation: 'Экономический потенциал государства высок.'
    }
  },
  {
    id: 'c1-staat-431-ausschuss',
    level: 'C1',
    topic: 'Staat',
    cardNumber: 431,
    source: 'physical-card',
    front: {
      title: 'der Ausschuss',
      lines: ['die Ausschüsse'],
      exampleDe: 'Heute tagt hier der Ausschuss der Wissenschaftler.'
    },
    back: {
      title: 'комитет',
      lines: ['мн.'],
      exampleTranslation: 'Сегодня здесь заседает комитет ученых.'
    }
  },
  {
    id: 'c1-staat-432-botschafter',
    level: 'C1',
    topic: 'Staat',
    cardNumber: 432,
    source: 'physical-card',
    front: {
      title: 'der Botschafter',
      lines: ['die Botschafter', 'die Botschaft', 'die Botschaften'],
      exampleDe: 'Er wurde zum Botschafter ernannt.'
    },
    back: {
      title: 'посол',
      lines: ['мн.', 'посольство, амбасада', 'мн.'],
      exampleTranslation: 'Его назначили послом.'
    }
  },
  {
    id: 'c1-staat-433-eklat',
    level: 'C1',
    topic: 'Staat',
    cardNumber: 433,
    source: 'physical-card',
    front: {
      title: 'der Eklat',
      lines: ['die Eklats', 'eklatant'],
      exampleDe: 'Die Verhandlungen endeten mit einem Eklat.'
    },
    back: {
      title: 'шум, скандал, сенсация',
      lines: ['мн.', 'сенсационный, вопиющий'],
      exampleTranslation: 'Переговоры завершились скандалом.'
    }
  },
  {
    id: 'c1-staat-434-grundsatz',
    level: 'C1',
    topic: 'Staat',
    cardNumber: 434,
    source: 'physical-card',
    front: {
      title: 'der Grundsatz',
      lines: ['die Grundsätze', 'grundsätzlich'],
      exampleDe: 'Diesen Grundsätzen kann man nicht widersprechen.'
    },
    back: {
      title: 'принцип, правило',
      lines: ['мн.', 'принципиальный'],
      exampleTranslation: 'С этими принципами нельзя не согласиться.'
    }
  },
  {
    id: 'c1-staat-435-wahlkreis',
    level: 'C1',
    topic: 'Staat',
    cardNumber: 435,
    source: 'physical-card',
    front: {
      title: 'der Wahlkreis',
      lines: ['die Wahlkreise'],
      exampleDe: 'Die ersten Ergebnisse auf diesem Wahlkreis liegen bereits vor.'
    },
    back: {
      title: 'избирательный округ',
      lines: ['мн.'],
      exampleTranslation: 'Первые результаты по этому избирательному округу уже есть.'
    }
  },
  {
    id: 'c1-staat-436-stellungnahme',
    level: 'C1',
    topic: 'Staat',
    cardNumber: 436,
    source: 'physical-card',
    front: {
      title: 'die Stellungnahme',
      lines: ['die Stellungnahmen'],
      exampleDe: 'Der Politiker will dazu keine Stellungnahme abgeben.'
    },
    back: {
      title: 'мнение, позиция, оценка',
      lines: ['мн.'],
      exampleTranslation: 'Политик не хочет высказывать свое мнение по этому вопросу.'
    }
  },
  {
    id: 'c1-staat-437-urkunde',
    level: 'C1',
    topic: 'Staat',
    cardNumber: 437,
    source: 'physical-card',
    front: {
      title: 'die Urkunde',
      lines: ['die Urkunden'],
      exampleDe: 'Wer kann solche Urkunde ausstellen?'
    },
    back: {
      title: 'документ, акт, свидетельство',
      lines: ['мн.'],
      exampleTranslation: 'Кто может выдать такой документ?'
    }
  },
  {
    id: 'c1-staat-438-drastisch',
    level: 'C1',
    topic: 'Staat',
    cardNumber: 438,
    source: 'physical-card',
    front: {
      title: 'drastisch',
      lines: [],
      exampleDe: 'Es wurden drastische Einschränkungen eingeführt.'
    },
    back: {
      title: 'резкий, радикальный, решительный',
      lines: [],
      exampleTranslation: 'Были введены радикальные ограничения.'
    }
  },
  {
    id: 'c1-staat-439-eingreifen',
    level: 'C1',
    topic: 'Staat',
    cardNumber: 439,
    source: 'physical-card',
    front: {
      title: 'eingreifen',
      subtitle: '(greift ein-griff ein-eingegriffen)',
      lines: ['der Eingriff', 'die Eingriffe'],
      exampleDe: 'Jegliche Eingriffe in die Privatsphäre sind nicht erlaubt.'
    },
    back: {
      title: 'вмешиваться, принимать решительные меры',
      lines: ['вмешательство, принятие решительных мер', 'мн.'],
      exampleTranslation: 'Любое вмешательство в частную сферу запрещено.'
    }
  },
  {
    id: 'c1-staat-440-einraeumen',
    level: 'C1',
    topic: 'Staat',
    cardNumber: 440,
    source: 'physical-card',
    front: {
      title: 'einräumen',
      lines: ['die Einräumung'],
      exampleDe: 'Der Minister räumte seinen Fehler ein.'
    },
    back: {
      title: 'признавать, допускать',
      lines: ['уступка, допущение'],
      exampleTranslation: 'Министр признал свою ошибку.'
    }
  },
  {
    id: 'c1-staat-441-entgegenwirken',
    level: 'C1',
    topic: 'Staat',
    cardNumber: 441,
    source: 'physical-card',
    front: {
      title: 'entgegenwirken',
      lines: [],
      exampleDe: 'Dem Mangel an Arbeitskräften soll man entgegenwirken.'
    },
    back: {
      title: 'противодействовать, бороться',
      lines: [],
      exampleTranslation: 'С нехваткой рабочей силы нужно бороться.'
    }
  },
  {
    id: 'c1-staat-442-gedenken',
    level: 'C1',
    topic: 'Staat',
    cardNumber: 442,
    source: 'physical-card',
    front: {
      title: 'gedenken',
      subtitle: '(gedenkt-gedachte-gedacht)',
      lines: ['die Gedenkstätte', 'die Gedenkstätten'],
      exampleDe: 'Wir gedenken heute der Opfer des Zweiten Weltkriegs.'
    },
    back: {
      title: 'помнить, вспоминать, чтить',
      lines: ['памятное место', 'мн.'],
      exampleTranslation: 'Сегодня мы чтим жертв Второй мировой войны.'
    }
  },
  {
    id: 'c1-staat-443-hinterziehen',
    level: 'C1',
    topic: 'Staat',
    cardNumber: 443,
    source: 'physical-card',
    front: {
      title: 'hinterziehen',
      subtitle: '(hinterzieht-hinterzog-hinterzogen)',
      lines: ['die Hinterziehung', 'die Hinterziehungen'],
      exampleDe: 'Er hat jahrelang Steuern hinterzogen.'
    },
    back: {
      title: 'уклоняться от уплаты',
      lines: ['уклонение от уплаты', 'мн.'],
      exampleTranslation: 'Он годами уклонялся от уплаты налогов.'
    }
  },
  {
    id: 'c1-staat-444-sich-einsetzen',
    level: 'C1',
    topic: 'Staat',
    cardNumber: 444,
    source: 'physical-card',
    front: {
      title: 'sich einsetzen',
      lines: ['der Einsatz', 'die Einsätze'],
      exampleDe: 'Der Politiker setzt sich für eine Steuerreform ein.'
    },
    back: {
      title: 'прилагать усилия, выступать за',
      lines: ['участие, применение', 'мн.'],
      exampleTranslation: 'Политик выступает за налоговую реформу.'
    }
  },
  {
    id: 'c1-staat-445-ueberschaubar',
    level: 'C1',
    topic: 'Staat',
    cardNumber: 445,
    source: 'physical-card',
    front: {
      title: 'überschaubar',
      lines: [],
      exampleDe: 'Die Risiken dieser Entscheidung sind nicht überschaubar.'
    },
    back: {
      title: 'обозримый, поддающийся оценке',
      lines: [],
      exampleTranslation: 'Риски этого решения невозможно оценить.'
    }
  },
  {
    id: 'c1-staat-446-unverzueglich',
    level: 'C1',
    topic: 'Staat',
    cardNumber: 446,
    source: 'physical-card',
    front: {
      title: 'unverzüglich',
      lines: [],
      exampleDe:
        'Man braucht unverzügliche Hilfsmaßnahmen. Der Unfall muss unverzüglich gemeldet werden.'
    },
    back: {
      title: 'немедленный, безотлагательный',
      lines: [],
      exampleTranslation:
        'Необходимы неотложные меры помощи. Об аварии нужно сообщить немедленно.'
    }
  },
  {
    id: 'c1-staat-447-vertuschen',
    level: 'C1',
    topic: 'Staat',
    cardNumber: 447,
    source: 'physical-card',
    front: {
      title: 'vertuschen',
      lines: [],
      exampleDe: 'Man versuchte, den Skandal zu vertuschen.'
    },
    back: {
      title: 'замять, скрыть',
      lines: [],
      exampleTranslation: 'Скандал пытались замять.'
    }
  },
  {
    id: 'c1-staat-448-verwalten',
    level: 'C1',
    topic: 'Staat',
    cardNumber: 448,
    source: 'physical-card',
    front: {
      title: 'verwalten',
      lines: ['die Verwaltung'],
      exampleDe: 'Wer verwaltet hier die Geschäfte?'
    },
    back: {
      title: 'управлять, заведовать',
      lines: ['администрация, управление'],
      exampleTranslation: 'Кто здесь ведает делами?'
    }
  },
  {
    id: 'c1-staat-449-zustaendig',
    level: 'C1',
    topic: 'Staat',
    cardNumber: 449,
    source: 'physical-card',
    front: {
      title: 'zuständig',
      lines: ['die Zuständigkeit', 'die Zuständigkeiten'],
      exampleDe: 'Dafür ist das Standesamt zuständig.'
    },
    back: {
      title: 'ответственный, компетентный',
      lines: ['компетенция', 'мн.'],
      exampleTranslation: 'За это отвечает ЗАГС.'
    }
  },
  {
    id: 'c1-staat-450-abwaegen',
    level: 'C1',
    topic: 'Staat',
    cardNumber: 450,
    source: 'physical-card',
    front: {
      title: 'abwägen',
      subtitle: '(wägt ab-wog ab-abgewogen)',
      lines: ['die Abwägung', 'die Abwägungen'],
      exampleDe: 'Wir müssen das Für und Wider sorgfältig abwägen.'
    },
    back: {
      title: 'взвешивать, продумывать',
      lines: ['взвешивание', 'мн.'],
      exampleTranslation: 'Мы должны тщательно взвесить все за и против.'
    }
  },
  {
    id: 'c1-recht-451-ahnden',
    level: 'C1',
    topic: 'Recht',
    cardNumber: 451,
    source: 'tutor-photo',
    front: {
      title: 'ahnden',
      lines: ['die Ahndung', 'die Ahndungen'],
      exampleDe: 'Ein Mord wird mit einer Freiheitsstrafe geahndet.'
    },
    back: {
      title: 'карать, наказывать',
      lines: ['кара, наказание', 'мн.'],
      exampleTranslation: 'За убийство наказывают лишением свободы.'
    }
  },
  {
    id: 'c1-recht-452-begehen',
    level: 'C1',
    topic: 'Recht',
    cardNumber: 452,
    source: 'tutor-photo',
    front: {
      title: 'begehen',
      subtitle: '(begeht-beging-begangen)',
      lines: [],
      exampleDe: 'Er beging Selbstmord. Da hast du aber einen Fehler begangen.'
    },
    back: {
      title: 'совершать, делать',
      lines: [],
      exampleTranslation: 'Он совершил самоубийство. Тут ты допустил ошибку.'
    }
  },
  {
    id: 'c1-recht-453-beschlagnahmen',
    level: 'C1',
    topic: 'Recht',
    cardNumber: 453,
    source: 'tutor-photo',
    front: {
      title: 'beschlagnahmen',
      lines: ['die Beschlagnahme', 'die Beschlagnahmen'],
      exampleDe: 'Die Polizei beschlagnahmte gestohlene Kunstwerke.'
    },
    back: {
      title: 'конфисковать, изъять',
      lines: ['конфискация, изъятие', 'мн.'],
      exampleTranslation: 'Полиция конфисковала украденные произведения искусства.'
    }
  },
  {
    id: 'c1-recht-454-bestechen',
    level: 'C1',
    topic: 'Recht',
    cardNumber: 454,
    source: 'tutor-photo',
    front: {
      title: 'bestechen',
      subtitle: '(besticht-bestach-bestochen)',
      lines: ['die Bestechung', 'die Bestechungen', 'unbestechlich']
    },
    back: {
      title: 'подкупать, давать взятку',
      lines: ['подкуп, взятка', 'мн.', 'неподкупный']
    }
  },
  {
    id: 'c1-recht-455-betrugen',
    level: 'C1',
    topic: 'Recht',
    cardNumber: 455,
    source: 'tutor-photo',
    front: {
      title: 'betrügen',
      subtitle: '(betrügt-betrog-betrogen)',
      lines: ['der Betrug', 'betrügerisch']
    },
    back: {
      title: 'обманывать, мошенничать',
      lines: ['обман, мошенничество', 'мн.', 'обманный, лживый, мошеннический']
    }
  },
  {
    id: 'c1-recht-456-bussgeld',
    level: 'C1',
    topic: 'Recht',
    cardNumber: 456,
    source: 'tutor-photo',
    front: {
      title: 'das Bußgeld',
      lines: ['die Bußgelder'],
      exampleDe: 'Wenn man sich strafbar macht, muss man Bußgeld zahlen.'
    },
    back: {
      title: 'денежный штраф',
      lines: ['мн.'],
      exampleTranslation: 'Тот, кто нарушает закон, должен заплатить денежный штраф.'
    }
  },
  {
    id: 'c1-recht-457-volkerrecht',
    level: 'C1',
    topic: 'Recht',
    cardNumber: 457,
    source: 'tutor-photo',
    front: {
      title: 'das Völkerrecht',
      lines: ['völkerrechtlich'],
      exampleDe: 'Das steht im Widerspruch zum Völkerrecht.'
    },
    back: {
      title: 'международное право',
      lines: ['международно-правовой'],
      exampleTranslation: 'Это противоречит нормам международного права.'
    }
  },
  {
    id: 'c1-recht-458-datenschutz',
    level: 'C1',
    topic: 'Recht',
    cardNumber: 458,
    source: 'tutor-photo',
    front: {
      title: 'der Datenschutz',
      lines: ['die Datenschutzerklärung'],
      exampleDe: 'Welche Gesetze regeln den Datenschutz?'
    },
    back: {
      title: 'защита персональных данных',
      lines: ['положение о защите персональных данных'],
      exampleTranslation: 'Какие законы регулируют защиту персональных данных?'
    }
  },
  {
    id: 'c1-recht-459-gesetzgeber',
    level: 'C1',
    topic: 'Recht',
    cardNumber: 459,
    source: 'tutor-photo',
    front: {
      title: 'der Gesetzgeber',
      lines: ['die Gesetzgeber', 'die Gesetzgebung', 'gesetzgebend']
    },
    back: {
      title: 'законодатель',
      lines: ['мн.', 'законодательство', 'законодательный']
    }
  },
  {
    id: 'c1-recht-460-heiratsschwindel',
    level: 'C1',
    topic: 'Recht',
    cardNumber: 460,
    source: 'tutor-photo',
    front: {
      title: 'der Heiratsschwindel',
      lines: ['der Heiratsschwindler', 'die Heiratsschwindler'],
      exampleDe: 'Sie ist auf einen Heiratsschwindler hereingefallen.'
    },
    back: {
      title: 'брачное мошенничество',
      lines: ['брачный аферист', 'мн.'],
      exampleTranslation: 'Она попалась на удочку брачного афериста.'
    }
  },
  {
    id: 'c1-recht-461-mandant',
    level: 'C1',
    topic: 'Recht',
    cardNumber: 461,
    source: 'tutor-photo',
    front: {
      title: 'der Mandant',
      lines: ['die Mandanten'],
      exampleDe: 'Über meine Mandanten kann ich nichts verraten.'
    },
    back: {
      title: 'доверитель, клиент',
      lines: ['мн.'],
      exampleTranslation: 'Я не могу разглашать никакую информацию о своих клиентах.'
    }
  },
  {
    id: 'c1-recht-462-anordnung',
    level: 'C1',
    topic: 'Recht',
    cardNumber: 462,
    source: 'tutor-photo',
    front: {
      title: 'die Anordnung',
      lines: ['die Anordnungen', 'anordnen', 'auf behördliche Anordnung']
    },
    back: {
      title: 'распоряжение, предписание',
      lines: ['мн.', 'предписывать, отдавать распоряжение', 'по официальному распоряжению']
    }
  },
  {
    id: 'c1-recht-463-beute',
    level: 'C1',
    topic: 'Recht',
    cardNumber: 463,
    source: 'tutor-photo',
    front: {
      title: 'die Beute',
      lines: ['erbeuten'],
      exampleDe: 'Die Diebe sind mit der Beute entkommen.'
    },
    back: {
      title: 'добыча',
      lines: ['захватить, добыть'],
      exampleTranslation: 'Воры скрылись с добычей.'
    }
  },
  {
    id: 'c1-recht-464-einwilligung',
    level: 'C1',
    topic: 'Recht',
    cardNumber: 464,
    source: 'tutor-photo',
    front: {
      title: 'die Einwilligung',
      lines: ['die Einwilligungen', 'einwilligen'],
      exampleDe: 'Ich habe meine Einwilligung noch nicht gegeben.'
    },
    back: {
      title: 'согласие',
      lines: ['мн.', 'давать согласие, соглашаться'],
      exampleTranslation: 'Я еще не дал своего согласия.'
    }
  },
  {
    id: 'c1-recht-465-haftung',
    level: 'C1',
    topic: 'Recht',
    cardNumber: 465,
    source: 'tutor-photo',
    front: {
      title: 'die Haftung',
      lines: ['haften'],
      exampleDe: 'Die Haftung für die Kinder tragen die Eltern.'
    },
    back: {
      title: 'ответственность, обязательство',
      lines: ['отвечать, нести ответственность'],
      exampleTranslation: 'Ответственность за детей несут их родители.'
    }
  }
];

export const flashcardLevels = Array.from(new Set(flashcards.map((card) => card.level)));
