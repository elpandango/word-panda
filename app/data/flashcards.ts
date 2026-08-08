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
