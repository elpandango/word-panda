export const seedFamiliesDraft = [
  {
    base: {
      word: 'kehren',
      translationRu: 'мести; поворачивать(ся), возвращаться',
      explanationRu: 'Семья объединяет значение физического подметания и движение назад/обратно.',
      examples: [
        {
          textDe: 'Er kehrte nach Hause zurück.',
          translationRu: 'Он вернулся домой.'
        }
      ]
    },
    variants: [
      {
        word: 'umkehren',
        prefix: 'um',
        isSeparable: true,
        translationRu: 'повернуть обратно, развернуться; перевернуть',
        explanationRu:
          'В одном entry объединены более частое непереходное и более редкое переходное значение.',
        examples: [
          {
            textDe: 'Wir müssen umkehren.',
            translationRu: 'Нам нужно повернуть обратно.'
          }
        ]
      },
      {
        word: 'wiederkehren',
        prefix: 'wieder',
        isSeparable: true,
        translationRu: 'возвращаться, снова появляться',
        examples: [
          {
            textDe: 'Der Frühling kehrt jedes Jahr wieder.',
            translationRu: 'Весна возвращается каждый год.'
          }
        ]
      },
      {
        word: 'zurückkehren',
        prefix: 'zurück',
        isSeparable: true,
        translationRu: 'вернуться назад',
        explanationRu: 'Добавлено как частотный и очень употребительный вариант.',
        examples: [
          {
            textDe: 'Sie kehrte spät am Abend nach Berlin zurück.',
            translationRu: 'Она поздно вечером вернулась в Берлин.'
          }
        ]
      },
      {
        word: 'einkehren',
        prefix: 'ein',
        isSeparable: true,
        translationRu: 'зайти по дороге, заехать ненадолго',
        examples: [
          {
            textDe: 'Lass uns kurz in ein Gasthaus einkehren.',
            translationRu: 'Давай ненадолго зайдём в трактир.'
          }
        ]
      },
      {
        word: 'auskehren',
        prefix: 'aus',
        isSeparable: true,
        translationRu: 'выметать, вычищать',
        examples: [
          {
            textDe: 'Sie kehrte den Dreck aus der Garage aus.',
            translationRu: 'Она вымела грязь из гаража.'
          }
        ]
      },
      {
        word: 'sich abkehren von',
        prefix: 'ab',
        isSeparable: true,
        translationRu: 'отвернуться от кого-то/чего-то, отказаться от',
        examples: [
          {
            textDe: 'Er kehrte sich von dieser Idee ab.',
            translationRu: 'Он отказался от этой идеи.'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'ahnen',
      translationRu: 'догадываться, предчувствовать',
      examples: [
        {
          textDe: 'Niemand ahnte, was passieren würde.',
          translationRu: 'Никто не догадывался, что произойдёт.'
        }
      ]
    },
    variants: [
      {
        word: 'erahnen',
        prefix: 'er',
        isSeparable: false,
        translationRu: 'смутно угадывать, только догадываться',
        examples: [
          {
            textDe: 'Ich kann nur erahnen, wie schwer es für dich war.',
            translationRu: 'Я могу только догадываться, как это было тяжело для тебя.'
          }
        ]
      },
      {
        word: 'vorahnen',
        prefix: 'vor',
        isSeparable: false,
        translationRu: 'предчувствовать заранее, предвидеть',
        explanationRu:
          'Оставлено как редкий, но допустимый вариант; формы vorhergeahnt и vorausgeahnt лучше хранить как словоформы, а не как отдельные леммы.',
        examples: [
          {
            textDe: 'Er vorahnte, dass etwas Schlimmes passieren würde.',
            translationRu: 'Он предчувствовал, что случится что-то плохое.'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'stolzieren',
      translationRu: 'гордо вышагивать',
      explanationRu: 'Демонстративная, показная походка, часто с оттенком высокомерия.',
      examples: [
        {
          textDe: 'Er stolzierte durch die Straße, als wäre er ein König.',
          translationRu: 'Он гордо вышагивал по улице, как будто был королём.'
        }
      ]
    },
    variants: []
  },
  {
    base: {
      word: 'sich tummeln',
      translationRu: 'резвиться, суетиться, оживлённо двигаться',
      examples: [
        {
          textDe: 'Auf dem Spielplatz tummeln sich die Kinder.',
          translationRu: 'На детской площадке резвятся дети.'
        }
      ]
    },
    variants: []
  },
  {
    base: {
      word: 'stampfen',
      translationRu: 'топать, тяжело стучать ногами',
      examples: [
        {
          textDe: 'Das Kind stampfte vor Wut mit dem Fuß.',
          translationRu: 'Ребёнок от злости топал ногой.'
        }
      ]
    },
    variants: []
  },
  {
    base: {
      word: 'schlendern',
      translationRu: 'бродить, прогуливаться без цели',
      examples: [
        {
          textDe: 'Wir schlenderten durch die Altstadt.',
          translationRu: 'Мы прогуливались по старому городу.'
        }
      ]
    },
    variants: []
  },
  {
    base: {
      word: 'hüpfen',
      translationRu: 'подпрыгивать, прыгать маленькими прыжками',
      examples: [
        {
          textDe: 'Das kleine Mädchen hüpfte vor Freude.',
          translationRu: 'Маленькая девочка подпрыгивала от радости.'
        }
      ]
    },
    variants: []
  },
  {
    base: {
      word: 'übertreiben',
      translationRu: 'преувеличивать, перегибать',
      examples: [
        {
          textDe: 'Du übertreibst total!',
          translationRu: 'Ты слишком перегибаешь!'
        }
      ]
    },
    variants: []
  },
  {
    base: {
      word: 'verschlimmbessern',
      translationRu: 'пытаться улучшить, но сделать хуже',
      explanationRu: 'Слово с ироническим оттенком.',
      examples: [
        {
          textDe: 'Wir wollten den Text verständlicher machen, haben ihn aber verschlimmbessert.',
          translationRu: 'Мы хотели сделать текст понятнее, но только испортили его правками.'
        }
      ]
    },
    variants: []
  },
  {
    base: {
      word: 'spüren',
      translationRu: 'чувствовать, ощущать',
      examples: [
        {
          textDe: 'Ich spüre einen kalten Wind.',
          translationRu: 'Я чувствую холодный ветер.'
        }
      ]
    },
    variants: [
      {
        word: 'verspüren',
        prefix: 'ver',
        isSeparable: false,
        translationRu: 'испытывать, остро ощущать',
        examples: [
          {
            textDe: 'Ich verspüre keinen Hunger.',
            translationRu: 'Я не испытываю голода.'
          }
        ]
      },
      {
        word: 'aufspüren',
        prefix: 'auf',
        isSeparable: true,
        translationRu: 'выследить, разыскать, обнаружить',
        examples: [
          {
            textDe: 'Die Polizei spürte den Täter auf.',
            translationRu: 'Полиция выследила преступника.'
          }
        ]
      },
      {
        word: 'nachspüren',
        prefix: 'nach',
        isSeparable: true,
        translationRu: 'проследить, исследовать, разбираться глубже',
        examples: [
          {
            textDe: 'Er spürt seinen Kindheitserinnerungen nach.',
            translationRu: 'Он пытается разобраться в своих детских воспоминаниях.'
          }
        ]
      },
      {
        word: 'erspüren',
        prefix: 'er',
        isSeparable: false,
        translationRu: 'тонко уловить, интуитивно почувствовать',
        examples: [
          {
            textDe: 'Sie erspürte seine Unsicherheit sofort.',
            translationRu: 'Она сразу уловила его неуверенность.'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'laden',
      translationRu: 'грузить; заряжать; приглашать',
      examples: [
        {
          textDe: 'Ich habe dich zur Feier geladen.',
          translationRu: 'Я пригласил тебя на праздник.'
        }
      ]
    },
    variants: [
      {
        word: 'aufladen',
        prefix: 'auf',
        isSeparable: true,
        translationRu: 'заряжать, пополнять',
        examples: [
          {
            textDe: 'Ich muss mein Handy aufladen.',
            translationRu: 'Мне нужно зарядить телефон.'
          }
        ]
      },
      {
        word: 'einladen',
        prefix: 'ein',
        isSeparable: true,
        translationRu: 'приглашать; загружать внутрь',
        examples: [
          {
            textDe: 'Sie lädt ihre Freunde ein.',
            translationRu: 'Она приглашает своих друзей.'
          }
        ]
      },
      {
        word: 'ausladen',
        prefix: 'aus',
        isSeparable: true,
        translationRu: 'разгружать; отменять приглашение',
        examples: [
          {
            textDe: 'Die Waren werden ausgeladen.',
            translationRu: 'Товары разгружают.'
          }
        ]
      },
      {
        word: 'abladen',
        prefix: 'ab',
        isSeparable: true,
        translationRu: 'разгружать; сваливать на кого-то',
        examples: [
          {
            textDe: 'Wir laden die Kisten vor dem Haus ab.',
            translationRu: 'Мы разгружаем ящики перед домом.'
          },
          {
            textDe: 'Er hat die ganze Verantwortung auf mich abgeladen.',
            translationRu: 'Он свалил всю ответственность на меня.'
          }
        ]
      },
      {
        word: 'beladen',
        prefix: 'be',
        isSeparable: false,
        translationRu: 'нагружать, обременять',
        examples: [
          {
            textDe: 'Das Schiff ist schwer beladen.',
            translationRu: 'Судно сильно нагружено.'
          }
        ]
      },
      {
        word: 'entladen',
        prefix: 'ent',
        isSeparable: false,
        translationRu: 'разряжать; изливать',
        examples: [
          {
            textDe: 'Die Spannung entlud sich in einem Streit.',
            translationRu: 'Напряжение вылилось в ссору.'
          }
        ]
      },
      {
        word: 'überladen',
        prefix: 'über',
        isSeparable: false,
        translationRu: 'перегружать',
        examples: [
          {
            textDe: 'Der Text ist mit Details überladen.',
            translationRu: 'Текст перегружен деталями.'
          }
        ]
      },
      {
        word: 'nachladen',
        prefix: 'nach',
        isSeparable: true,
        translationRu: 'дозаряжать, догружать',
        examples: [
          {
            textDe: 'Bitte Daten nachladen.',
            translationRu: 'Пожалуйста, догрузи данные.'
          }
        ]
      },
      {
        word: 'verladen',
        prefix: 'ver',
        isSeparable: false,
        translationRu: 'погружать, отправлять',
        examples: [
          {
            textDe: 'Die Container werden auf das Schiff verladen.',
            translationRu: 'Контейнеры грузят на судно.'
          }
        ]
      },
      {
        word: 'zuladen',
        prefix: 'zu',
        isSeparable: true,
        translationRu: 'нагружать дополнительно',
        examples: [
          {
            textDe: 'Der Wagen darf nicht weiter zugeladen werden.',
            translationRu: 'Машину нельзя догружать дальше.'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'hängen',
      translationRu: 'висеть; вешать',
      examples: [
        {
          textDe: 'Das Bild hängt an der Wand.',
          translationRu: 'Картина висит на стене.'
        }
      ]
    },
    variants: [
      {
        word: 'aufhängen',
        prefix: 'auf',
        isSeparable: true,
        translationRu: 'повесить; повеситься',
        examples: [
          {
            textDe: 'Sie hat das Bild aufgehängt.',
            translationRu: 'Она повесила картину.'
          }
        ]
      },
      {
        word: 'abhängen',
        prefix: 'ab',
        isSeparable: true,
        translationRu: 'снять; оставить позади; зависеть от',
        explanationRu: 'В одном entry объединены несколько частых значений.',
        examples: [
          {
            textDe: 'Der Erfolg hängt von vielen Faktoren ab.',
            translationRu: 'Успех зависит от многих факторов.'
          }
        ]
      },
      {
        word: 'einhängen',
        prefix: 'ein',
        isSeparable: true,
        translationRu: 'повесить внутрь, вставить на место',
        examples: [
          {
            textDe: 'Die Gardinen wurden wieder eingehängt.',
            translationRu: 'Шторы снова повесили.'
          }
        ]
      },
      {
        word: 'aushängen',
        prefix: 'aus',
        isSeparable: true,
        translationRu: 'вывешивать',
        examples: [
          {
            textDe: 'Die Öffnungszeiten sind ausgehängt.',
            translationRu: 'Часы работы вывешены.'
          }
        ]
      },
      {
        word: 'behängen',
        prefix: 'be',
        isSeparable: false,
        translationRu: 'обвешивать, украшать',
        examples: [
          {
            textDe: 'Der Baum ist mit Lichtern behängt.',
            translationRu: 'Дерево увешано огнями.'
          }
        ]
      },
      {
        word: 'verhängen',
        prefix: 'ver',
        isSeparable: false,
        translationRu: 'налагать; завешивать',
        examples: [
          {
            textDe: 'Das Gericht hat eine Geldstrafe verhängt.',
            translationRu: 'Суд назначил денежный штраф.'
          }
        ]
      },
      {
        word: 'zusammenhängen',
        prefix: 'zusammen',
        isSeparable: true,
        translationRu: 'быть взаимосвязанным',
        examples: [
          {
            textDe: 'Alles hängt zusammen.',
            translationRu: 'Всё взаимосвязано.'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'holen',
      translationRu: 'сходить и принести; забрать',
      examples: [
        {
          textDe: 'Ich hole schnell Brot.',
          translationRu: 'Я быстро схожу за хлебом.'
        }
      ]
    },
    variants: [
      {
        word: 'abholen',
        prefix: 'ab',
        isSeparable: true,
        translationRu: 'забрать, встретить',
        examples: [
          {
            textDe: 'Ich hole dich vom Bahnhof ab.',
            translationRu: 'Я заберу тебя с вокзала.'
          }
        ]
      },
      {
        word: 'einholen',
        prefix: 'ein',
        isSeparable: true,
        translationRu: 'догнать; собрать информацию',
        examples: [
          {
            textDe: 'Wir müssen Informationen einholen.',
            translationRu: 'Нам нужно собрать информацию.'
          }
        ]
      },
      {
        word: 'aufholen',
        prefix: 'auf',
        isSeparable: true,
        translationRu: 'наверстать отставание',
        examples: [
          {
            textDe: 'Die Mannschaft holt auf.',
            translationRu: 'Команда сокращает отставание.'
          }
        ]
      },
      {
        word: 'nachholen',
        prefix: 'nach',
        isSeparable: true,
        translationRu: 'сделать позже, наверстать пропущенное',
        examples: [
          {
            textDe: 'Sie holt den Stoff nach.',
            translationRu: 'Она наверстывает материал.'
          }
        ]
      },
      {
        word: 'zurückholen',
        prefix: 'zurück',
        isSeparable: true,
        translationRu: 'вернуть обратно, забрать назад',
        examples: [
          {
            textDe: 'Die Polizei holte das Kind zurück.',
            translationRu: 'Полиция вернула ребёнка.'
          }
        ]
      },
      {
        word: 'hereinholen',
        prefix: 'herein',
        isSeparable: true,
        translationRu: 'занести внутрь',
        examples: [
          {
            textDe: 'Wir holen die Stühle herein.',
            translationRu: 'Мы занесём стулья внутрь.'
          }
        ]
      },
      {
        word: 'rausholen',
        prefix: 'raus',
        isSeparable: true,
        translationRu: 'вытащить, достать; раскрыть потенциал',
        examples: [
          {
            textDe: 'Du kannst mehr aus dir rausholen.',
            translationRu: 'Ты можешь раскрыть в себе больше.'
          }
        ]
      },
      {
        word: 'runterholen',
        prefix: 'runter',
        isSeparable: true,
        translationRu: 'снять сверху, спустить вниз',
        examples: [
          {
            textDe: 'Hol die Jacke vom Haken runter.',
            translationRu: 'Сними куртку с крючка.'
          }
        ]
      },
      {
        word: 'reinholen',
        prefix: 'rein',
        isSeparable: true,
        translationRu: 'занести внутрь; впустить',
        examples: [
          {
            textDe: 'Hol die Wäsche rein!',
            translationRu: 'Занеси бельё внутрь!'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'setzen',
      translationRu: 'сажать, ставить, помещать',
      examples: [
        {
          textDe: 'Ich setze das Kind auf den Stuhl.',
          translationRu: 'Я сажаю ребёнка на стул.'
        }
      ]
    },
    variants: [
      {
        word: 'absetzen',
        prefix: 'ab',
        isSeparable: true,
        translationRu: 'снимать; высаживать; отстранять; сбывать',
        examples: [
          {
            textDe: 'Der Bus setzte uns am Bahnhof ab.',
            translationRu: 'Автобус высадил нас у вокзала.'
          }
        ]
      },
      {
        word: 'ansetzen',
        prefix: 'an',
        isSeparable: true,
        translationRu: 'приставлять; начинать; начислять',
        examples: [
          {
            textDe: 'Sie setzte zu einer Erklärung an.',
            translationRu: 'Она начала объяснение.'
          }
        ]
      },
      {
        word: 'aufsetzen',
        prefix: 'auf',
        isSeparable: true,
        translationRu: 'надевать; составлять; приземляться',
        examples: [
          {
            textDe: 'Der Vertrag wurde neu aufgesetzt.',
            translationRu: 'Договор составили заново.'
          }
        ]
      },
      {
        word: 'aussetzen',
        prefix: 'aus',
        isSeparable: true,
        translationRu: 'приостанавливать; подвергать; бросать',
        examples: [
          {
            textDe: 'Der Unterricht wurde ausgesetzt.',
            translationRu: 'Занятия были приостановлены.'
          }
        ]
      },
      {
        word: 'durchsetzen',
        prefix: 'durch',
        isSeparable: true,
        translationRu: 'добиваться, продавливать, проводить в жизнь',
        examples: [
          {
            textDe: 'Sie setzte ihre Meinung durch.',
            translationRu: 'Она отстояла свою точку зрения.'
          }
        ]
      },
      {
        word: 'einsetzen',
        prefix: 'ein',
        isSeparable: true,
        translationRu: 'использовать; назначать; начинаться',
        examples: [
          {
            textDe: 'Die Firma setzt neue Technik ein.',
            translationRu: 'Фирма использует новую технику.'
          }
        ]
      },
      {
        word: 'festsetzen',
        prefix: 'fest',
        isSeparable: true,
        translationRu: 'устанавливать; задерживать',
        examples: [
          {
            textDe: 'Die Polizei setzte den Täter fest.',
            translationRu: 'Полиция задержала преступника.'
          }
        ]
      },
      {
        word: 'umsetzen',
        prefix: 'um',
        isSeparable: true,
        translationRu: 'реализовывать; пересаживать, перемещать',
        examples: [
          {
            textDe: 'Das Projekt wurde erfolgreich umgesetzt.',
            translationRu: 'Проект был успешно реализован.'
          }
        ]
      },
      {
        word: 'hinsetzen',
        prefix: 'hin',
        isSeparable: true,
        translationRu: 'сесть',
        examples: [
          {
            textDe: 'Setz dich bitte hin.',
            translationRu: 'Сядь, пожалуйста.'
          }
        ]
      },
      {
        word: 'zurücksetzen',
        prefix: 'zurück',
        isSeparable: true,
        translationRu: 'отставить назад; ущемлять',
        examples: [
          {
            textDe: 'Er fühlte sich zurückgesetzt.',
            translationRu: 'Он чувствовал себя ущемлённым.'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'stellen',
      translationRu: 'ставить, размещать',
      examples: [
        {
          textDe: 'Ich stelle die Tasse auf den Tisch.',
          translationRu: 'Я ставлю чашку на стол.'
        }
      ]
    },
    variants: [
      {
        word: 'anstellen',
        prefix: 'an',
        isSeparable: true,
        translationRu: 'включать; нанимать; устраивать сцену',
        examples: [
          {
            textDe: 'Die Firma hat neue Mitarbeiter angestellt.',
            translationRu: 'Фирма наняла новых сотрудников.'
          }
        ]
      },
      {
        word: 'abstellen',
        prefix: 'ab',
        isSeparable: true,
        translationRu: 'отставлять; отключать; устранять',
        explanationRu: 'Добавлено как очень частотный вариант.',
        examples: [
          {
            textDe: 'Kannst du bitte das Wasser abstellen?',
            translationRu: 'Можешь, пожалуйста, перекрыть воду?'
          }
        ]
      },
      {
        word: 'aufstellen',
        prefix: 'auf',
        isSeparable: true,
        translationRu: 'устанавливать; составлять команду, список',
        examples: [
          {
            textDe: 'Der Trainer stellte die Mannschaft auf.',
            translationRu: 'Тренер сформировал команду.'
          }
        ]
      },
      {
        word: 'ausstellen',
        prefix: 'aus',
        isSeparable: true,
        translationRu: 'выставлять; выдавать документ',
        examples: [
          {
            textDe: 'Der Arzt stellte ein Attest aus.',
            translationRu: 'Врач выдал справку.'
          }
        ]
      },
      {
        word: 'darstellen',
        prefix: 'dar',
        isSeparable: false,
        translationRu: 'изображать; представлять собой',
        examples: [
          {
            textDe: 'Das stellt ein Problem dar.',
            translationRu: 'Это представляет собой проблему.'
          }
        ]
      },
      {
        word: 'einstellen',
        prefix: 'ein',
        isSeparable: true,
        translationRu: 'настраивать; нанимать; прекращать',
        examples: [
          {
            textDe: 'Ich stelle die Temperatur ein.',
            translationRu: 'Я настраиваю температуру.'
          }
        ]
      },
      {
        word: 'feststellen',
        prefix: 'fest',
        isSeparable: true,
        translationRu: 'устанавливать факт; замечать',
        examples: [
          {
            textDe: 'Ich stellte fest, dass er nervös war.',
            translationRu: 'Я заметил, что он нервничал.'
          }
        ]
      },
      {
        word: 'herstellen',
        prefix: 'her',
        isSeparable: true,
        translationRu: 'производить; налаживать контакт',
        examples: [
          {
            textDe: 'Die Firma stellt Autos her.',
            translationRu: 'Компания производит автомобили.'
          }
        ]
      },
      {
        word: 'vorstellen',
        prefix: 'vor',
        isSeparable: true,
        translationRu: 'представлять; воображать',
        examples: [
          {
            textDe: 'Ich kann mir das gut vorstellen.',
            translationRu: 'Я могу это хорошо представить.'
          }
        ]
      },
      {
        word: 'zustellen',
        prefix: 'zu',
        isSeparable: false,
        translationRu: 'доставлять',
        examples: [
          {
            textDe: 'Der Brief wurde zugestellt.',
            translationRu: 'Письмо было доставлено.'
          }
        ]
      },
      {
        word: 'bestellen',
        prefix: 'be',
        isSeparable: false,
        translationRu: 'заказывать; назначать',
        examples: [
          {
            textDe: 'Ich bestelle einen Kaffee.',
            translationRu: 'Я заказываю кофе.'
          }
        ]
      },
      {
        word: 'erstellen',
        prefix: 'er',
        isSeparable: false,
        translationRu: 'создавать, составлять',
        examples: [
          {
            textDe: 'Er erstellt einen Bericht.',
            translationRu: 'Он составляет отчёт.'
          }
        ]
      },
      {
        word: 'verstellen',
        prefix: 'ver',
        isSeparable: false,
        translationRu: 'переставлять; искажать',
        examples: [
          {
            textDe: 'Sie verstellte ihre Stimme.',
            translationRu: 'Она изменила свой голос.'
          }
        ]
      },
      {
        word: 'umstellen',
        prefix: 'um',
        isSeparable: true,
        translationRu: 'переставлять; перенастраивать; переводить на новый режим',
        explanationRu: 'Добавлено как частотный вариант.',
        examples: [
          {
            textDe: 'Wir müssen die Produktion umstellen.',
            translationRu: 'Нам нужно перестроить производство.'
          }
        ]
      },
      {
        word: 'unterstellen',
        prefix: 'unter',
        isSeparable: false,
        translationRu: 'приписывать; подчинять; предполагать',
        explanationRu: 'Неотделяемый вариант: приписывать, подчинять, предполагать.',
        examples: [
          {
            textDe: 'Man unterstellte ihm schlechte Absichten.',
            translationRu: 'Ему приписали плохие намерения.'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'raten',
      translationRu: 'советовать; угадывать',
      explanationRu: 'В этой семье сочетаются два разных смысловых ядра: совет и угадывание.',
      examples: [
        {
          textDe: 'Ich rate dir, früher zu schlafen.',
          translationRu: 'Я советую тебе ложиться спать раньше.'
        }
      ]
    },
    variants: [
      {
        word: 'beraten',
        prefix: 'be',
        isSeparable: false,
        translationRu: 'консультировать, давать совет',
        examples: [
          {
            textDe: 'Die Lehrerin berät die Schüler.',
            translationRu: 'Учительница консультирует учеников.'
          }
        ]
      },
      {
        word: 'erraten',
        prefix: 'er',
        isSeparable: false,
        translationRu: 'угадать',
        examples: [
          {
            textDe: 'Du hast die Lösung erraten!',
            translationRu: 'Ты угадал решение!'
          }
        ]
      },
      {
        word: 'geraten',
        prefix: 'ge',
        isSeparable: false,
        translationRu: 'попасть, оказаться',
        examples: [
          {
            textDe: 'Er ist in Gefahr geraten.',
            translationRu: 'Он попал в опасность.'
          }
        ]
      },
      {
        word: 'verraten',
        prefix: 'ver',
        isSeparable: false,
        translationRu: 'выдать, раскрыть тайну; предать',
        examples: [
          {
            textDe: 'Er hat das Geheimnis verraten.',
            translationRu: 'Он выдал секрет.'
          }
        ]
      },
      {
        word: 'abraten',
        prefix: 'ab',
        isSeparable: true,
        translationRu: 'отсоветовать',
        examples: [
          {
            textDe: 'Ich rate dir davon ab.',
            translationRu: 'Я тебя от этого отговариваю.'
          }
        ]
      },
      {
        word: 'anraten',
        prefix: 'an',
        isSeparable: true,
        translationRu: 'настоятельно советовать',
        explanationRu: 'Добавлено как частотный и очень употребительный вариант.',
        examples: [
          {
            textDe: 'Der Arzt riet ihr zu einer Pause an.',
            translationRu: 'Врач настоятельно посоветовал ей сделать паузу.'
          }
        ]
      },
      {
        word: 'zuraten',
        prefix: 'zu',
        isSeparable: true,
        translationRu: 'советовать сделать что-то',
        examples: [
          {
            textDe: 'Ich rate dir dazu.',
            translationRu: 'Я советую тебе это сделать.'
          }
        ]
      },
      {
        word: 'umraten',
        prefix: 'um',
        isSeparable: true,
        translationRu: 'переиграть совет, изменить мнение',
        explanationRu: 'Очень редкий вариант, оставлен как помета из твоих материалов.',
        examples: [
          {
            textDe: 'Er hat mir umgeraten.',
            translationRu: 'Он изменил свой совет.'
          }
        ]
      },
      {
        word: 'weiterraten',
        prefix: 'weiter',
        isSeparable: true,
        translationRu: 'продолжать угадывать',
        examples: [
          {
            textDe: 'Ratet weiter!',
            translationRu: 'Продолжайте угадывать!'
          }
        ]
      },
      {
        word: 'mitraten',
        prefix: 'mit',
        isSeparable: true,
        translationRu: 'угадывать вместе, участвовать в угадывании',
        examples: [
          {
            textDe: 'Raten Sie mit!',
            translationRu: 'Участвуйте в угадывании!'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'mahlen',
      translationRu: 'молоть, перемалывать',
      explanationRu: 'Семья собрана по фото; здесь речь именно о mahlen, а не о malen.',
      examples: [
        {
          textDe: 'Die Mühle mahlt das Korn zu Mehl.',
          translationRu: 'Мельница перемалывает зерно в муку.'
        }
      ]
    },
    variants: [
      {
        word: 'abmahlen',
        prefix: 'ab',
        isSeparable: true,
        translationRu: 'частично смолоть, снять слой помолом',
        explanationRu: 'Редкое техническое значение.',
        examples: [
          {
            textDe: 'Die alte Farbe wurde vom Stein abgemahlen.',
            translationRu: 'Старую краску частично сняли со камня шлифовкой.'
          }
        ]
      },
      {
        word: 'anmahlen',
        prefix: 'an',
        isSeparable: true,
        translationRu: 'слегка перемолоть',
        explanationRu: 'Редкое слово; старое значение «слегка раскрасить» не выносил отдельно.',
        examples: [
          {
            textDe: 'Der Bäcker hat die Körner leicht angemahlen.',
            translationRu: 'Пекарь слегка перемолол зёрна.'
          }
        ]
      },
      {
        word: 'aufmahlen',
        prefix: 'auf',
        isSeparable: true,
        translationRu: 'размолоть полностью',
        examples: [
          {
            textDe: 'Die Körner wurden fein aufgemahlen.',
            translationRu: 'Зёрна были полностью перемолоты.'
          }
        ]
      },
      {
        word: 'ausmahlen',
        prefix: 'aus',
        isSeparable: true,
        translationRu: 'смолоть очень мелко, почти в порошок',
        examples: [
          {
            textDe: 'Das Mehl wurde sehr fein ausgemahlen.',
            translationRu: 'Муку перемололи очень тонко.'
          }
        ]
      },
      {
        word: 'einmahlen',
        prefix: 'ein',
        isSeparable: true,
        translationRu: 'приработаться, притереться',
        examples: [
          {
            textDe: 'Die neue Maschine muss sich erst einmahlen.',
            translationRu: 'Новая машина должна сначала приработаться.'
          }
        ]
      },
      {
        word: 'nachmahlen',
        prefix: 'nach',
        isSeparable: true,
        translationRu: 'перемолоть заново',
        examples: [
          {
            textDe: 'Das Brotmehl war zu grob, also musste man es nachmahlen.',
            translationRu:
              'Мука для хлеба была слишком грубой, поэтому её пришлось перемолоть заново.'
          }
        ]
      },
      {
        word: 'übermahlen',
        prefix: 'über',
        isSeparable: false,
        translationRu: 'перемолоть слишком сильно',
        examples: [
          {
            textDe: 'Der Kaffee ist übermahlen und schmeckt bitter.',
            translationRu: 'Кофе перемололи слишком сильно, и он горчит.'
          }
        ]
      },
      {
        word: 'vermahlen',
        prefix: 'ver',
        isSeparable: false,
        translationRu: 'смолоть в муку',
        explanationRu:
          'Архаическое значение «быть женатым» в сид не включал как основной учебный фокус.',
        examples: [
          {
            textDe: 'Der Müller vermahlt den Weizen zu Mehl.',
            translationRu: 'Мельник перемалывает пшеницу в муку.'
          }
        ]
      },
      {
        word: 'zermahlen',
        prefix: 'zer',
        isSeparable: false,
        translationRu: 'размолоть, растереть в порошок',
        examples: [
          {
            textDe: 'Der Stein wurde zu Staub zermahlen.',
            translationRu: 'Камень растёрли в пыль.'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'üben',
      translationRu: 'тренироваться; практиковать; оказывать',
      examples: [
        {
          textDe: 'Sie übt jeden Tag Klavier.',
          translationRu: 'Она каждый день занимается на пианино.'
        }
      ]
    },
    variants: [
      {
        word: 'ausüben',
        prefix: 'aus',
        isSeparable: true,
        translationRu: 'оказывать; заниматься профессией',
        examples: [
          {
            textDe: 'Er übt seinen Beruf mit Leidenschaft aus.',
            translationRu: 'Он занимается своей профессией с увлечением.'
          }
        ]
      },
      {
        word: 'einüben',
        prefix: 'ein',
        isSeparable: true,
        translationRu: 'разучивать, отрабатывать',
        examples: [
          {
            textDe: 'Der Chor übt das Lied ein.',
            translationRu: 'Хор разучивает песню.'
          }
        ]
      },
      {
        word: 'durchüben',
        prefix: 'durch',
        isSeparable: true,
        translationRu: 'проработать полностью',
        examples: [
          {
            textDe: 'Wir haben das Thema gründlich durchgeübt.',
            translationRu: 'Мы тщательно отработали эту тему.'
          }
        ]
      },
      {
        word: 'anüben',
        prefix: 'an',
        isSeparable: true,
        translationRu: 'начать отрабатывать',
        explanationRu: 'Редкое, скорее педагогическое слово.',
        examples: [
          {
            textDe: 'Die Grundbewegungen werden zuerst angeübt.',
            translationRu: 'Сначала отрабатывают базовые движения.'
          }
        ]
      },
      {
        word: 'verüben',
        prefix: 'ver',
        isSeparable: false,
        translationRu: 'совершать (преступление, теракт)',
        examples: [
          {
            textDe: 'Die Täter verübten einen Anschlag.',
            translationRu: 'Преступники совершили теракт.'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'aufpassen',
      translationRu: 'быть внимательным; присматривать',
      examples: [
        {
          textDe: 'Pass auf, dass du nicht ausrutschst!',
          translationRu: 'Смотри, чтобы не поскользнуться!'
        }
      ]
    },
    variants: [
      {
        word: 'im Blick behalten',
        prefix: null,
        isSeparable: null,
        translationRu: 'держать в поле зрения, отслеживать',
        examples: [
          {
            textDe: 'Wir behalten die Entwicklung im Blick.',
            translationRu: 'Мы держим развитие ситуации в поле зрения.'
          }
        ]
      },
      {
        word: 'auf der Hut sein',
        prefix: null,
        isSeparable: null,
        translationRu: 'быть настороже',
        examples: [
          {
            textDe: 'Sei auf der Hut, dort gibt es viele Betrüger.',
            translationRu: 'Будь начеку, там много мошенников.'
          }
        ]
      },
      {
        word: 'jdn. beaufsichtigen',
        prefix: null,
        isSeparable: null,
        translationRu: 'осуществлять надзор, присматривать по обязанности',
        examples: [
          {
            textDe: 'Während der Prüfung werden die Teilnehmenden beaufsichtigt.',
            translationRu: 'Во время экзамена за участниками наблюдают.'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'behindern',
      translationRu: 'мешать, создавать препятствие',
      examples: [
        {
          textDe: 'Die Baustelle behindert den Ablauf.',
          translationRu: 'Стройка мешает ходу процесса.'
        }
      ]
    },
    variants: [
      {
        word: 'stören',
        prefix: null,
        isSeparable: null,
        translationRu: 'беспокоить, мешать субъективно',
        examples: [
          {
            textDe: 'Der Lärm stört mich.',
            translationRu: 'Этот шум мне мешает.'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'aufbewahren',
      translationRu: 'хранить, держать для использования позже',
      examples: [
        {
          textDe: 'Bewahren Sie die Quittung gut auf.',
          translationRu: 'Храните чек.'
        }
      ]
    },
    variants: [
      {
        word: 'verwahren',
        prefix: 'ver',
        isSeparable: false,
        translationRu: 'хранить надёжно, под ответственность',
        examples: [
          {
            textDe: 'Die Polizei verwahrt die Beweise.',
            translationRu: 'Полиция хранит улики.'
          }
        ]
      },
      {
        word: 'aufheben',
        prefix: 'auf',
        isSeparable: true,
        translationRu: 'сохранить, не выбросить',
        examples: [
          {
            textDe: 'Heb das auf, das ist noch nützlich.',
            translationRu: 'Сохрани это, оно ещё пригодится.'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'annehmen',
      translationRu: 'предполагать, считать вероятным',
      examples: [
        {
          textDe: 'Wir nehmen an, dass die Daten korrekt sind.',
          translationRu: 'Мы исходим из того, что данные верны.'
        }
      ]
    },
    variants: [
      {
        word: 'vermuten',
        prefix: null,
        isSeparable: null,
        translationRu: 'подозревать, догадываться',
        examples: [
          {
            textDe: 'Ich vermute, dass er zu spät kommt.',
            translationRu: 'Я подозреваю, что он опоздает.'
          }
        ]
      },
      {
        word: 'von etw. ausgehen',
        prefix: null,
        isSeparable: null,
        translationRu: 'исходить из чего-то как из базы',
        examples: [
          {
            textDe: 'Wir gehen von stabilen Marktbedingungen aus.',
            translationRu: 'Мы исходим из стабильных рыночных условий.'
          }
        ]
      },
      {
        word: 'übereinkommen',
        prefix: 'überein',
        isSeparable: true,
        translationRu: 'договориться, прийти к соглашению',
        examples: [
          {
            textDe: 'Die Parteien kamen überein, die Verhandlungen fortzusetzen.',
            translationRu: 'Стороны договорились продолжить переговоры.'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'ersetzen',
      translationRu: 'заменять',
      examples: [
        {
          textDe: 'Das alte System wurde durch ein neues ersetzt.',
          translationRu: 'Старую систему заменили новой.'
        }
      ]
    },
    variants: [
      {
        word: 'austauschen',
        prefix: 'aus',
        isSeparable: true,
        translationRu: 'обменять, заменить путём обмена',
        examples: [
          {
            textDe: 'Ich tausche die Batterie aus.',
            translationRu: 'Я меняю батарейку.'
          }
        ]
      },
      {
        word: 'ablösen',
        prefix: 'ab',
        isSeparable: true,
        translationRu: 'сменить на посту, заменить по очереди',
        examples: [
          {
            textDe: 'Die Nachtschicht löst die Spätschicht ab.',
            translationRu: 'Ночная смена сменяет вечернюю.'
          }
        ]
      },
      {
        word: 'an Stelle von etw. treten',
        prefix: null,
        isSeparable: null,
        translationRu: 'прийти на место чего-то',
        examples: [
          {
            textDe: 'An Stelle der alten Regelung tritt eine neue.',
            translationRu: 'На место старого правила приходит новое.'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'zeichnen',
      translationRu: 'рисовать; характеризовать',
      examples: [
        {
          textDe: 'Er zeichnet gern Landschaften.',
          translationRu: 'Он любит рисовать пейзажи.'
        }
      ]
    },
    variants: [
      {
        word: 'abzeichnen',
        prefix: 'ab',
        isSeparable: true,
        translationRu: 'срисовывать; вырисовываться',
        examples: [
          {
            textDe: 'Am Horizont zeichnete sich ein Sturm ab.',
            translationRu: 'На горизонте намечалась буря.'
          }
        ]
      },
      {
        word: 'aufzeichnen',
        prefix: 'auf',
        isSeparable: true,
        translationRu: 'записывать, фиксировать',
        examples: [
          {
            textDe: 'Das Gespräch wurde aufgezeichnet.',
            translationRu: 'Разговор был записан.'
          }
        ]
      },
      {
        word: 'einzeichnen',
        prefix: 'ein',
        isSeparable: true,
        translationRu: 'наносить на карту/схему',
        examples: [
          {
            textDe: 'Die Route wurde auf der Karte eingezeichnet.',
            translationRu: 'Маршрут нанесли на карту.'
          }
        ]
      },
      {
        word: 'kennzeichnen',
        prefix: 'kenn',
        isSeparable: false,
        translationRu: 'обозначать; характеризовать',
        examples: [
          {
            textDe: 'Die Ware ist deutlich gekennzeichnet.',
            translationRu: 'Товар чётко промаркирован.'
          }
        ]
      },
      {
        word: 'auszeichnen',
        prefix: 'aus',
        isSeparable: true,
        translationRu: 'награждать; выгодно отличать',
        examples: [
          {
            textDe: 'Er wurde für seine Leistung ausgezeichnet.',
            translationRu: 'Его наградили за достижение.'
          }
        ]
      },
      {
        word: 'verzeichnen',
        prefix: 'ver',
        isSeparable: false,
        translationRu: 'фиксировать, отмечать статистически',
        examples: [
          {
            textDe: 'Die Polizei verzeichnet einen Anstieg der Fälle.',
            translationRu: 'Полиция фиксирует рост числа случаев.'
          }
        ]
      },
      {
        word: 'durchzeichnen',
        prefix: 'durch',
        isSeparable: true,
        translationRu: 'прорисовывать детально',
        examples: [
          {
            textDe: 'Die Künstlerin durchzeichnete jede Linie.',
            translationRu: 'Художница тщательно прорисовала каждую линию.'
          }
        ]
      },
      {
        word: 'nachzeichnen',
        prefix: 'nach',
        isSeparable: true,
        translationRu: 'перерисовывать; воссоздавать ход событий',
        examples: [
          {
            textDe: 'Er zeichnete die Entwicklung genau nach.',
            translationRu: 'Он точно воссоздал ход развития.'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'schreiten',
      translationRu: 'шагать размеренно, торжественно',
      examples: [
        {
          textDe: 'Er schritt würdevoll durch den Saal.',
          translationRu: 'Он величаво прошёл по залу.'
        }
      ]
    },
    variants: [
      {
        word: 'fortschreiten',
        prefix: 'fort',
        isSeparable: true,
        translationRu: 'продвигаться вперёд',
        examples: [
          {
            textDe: 'Die Verhandlungen schreiten nur langsam fort.',
            translationRu: 'Переговоры продвигаются лишь медленно.'
          }
        ]
      },
      {
        word: 'voranschreiten',
        prefix: 'voran',
        isSeparable: true,
        translationRu: 'поступательно развиваться, идти вперёд',
        examples: [
          {
            textDe: 'Der Wiederaufbau schreitet planmäßig voran.',
            translationRu: 'Восстановление идёт по плану.'
          }
        ]
      },
      {
        word: 'einschreiten',
        prefix: 'ein',
        isSeparable: true,
        translationRu: 'вмешиваться, принимать меры',
        examples: [
          {
            textDe: 'Die Polizei schritt sofort ein.',
            translationRu: 'Полиция немедленно вмешалась.'
          }
        ]
      },
      {
        word: 'überschreiten',
        prefix: 'über',
        isSeparable: false,
        translationRu: 'превышать; переходить границу',
        examples: [
          {
            textDe: 'Er überschritt die Geschwindigkeitsbegrenzung.',
            translationRu: 'Он превысил ограничение скорости.'
          }
        ]
      },
      {
        word: 'beschreiten',
        prefix: 'be',
        isSeparable: false,
        translationRu: 'идти по пути, выбирать направление',
        examples: [
          {
            textDe: 'Das Unternehmen beschreitet neue Wege.',
            translationRu: 'Компания идёт новыми путями.'
          }
        ]
      },
      {
        word: 'durchschreiten',
        prefix: 'durch',
        isSeparable: true,
        translationRu: 'пройти через',
        examples: [
          {
            textDe: 'Sie durchschritten eine schwere Phase.',
            translationRu: 'Они прошли через тяжёлый период.'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'reißen',
      translationRu: 'рвать; резко тянуть; разрывать',
      examples: [
        {
          textDe: 'Das Seil reißt.',
          translationRu: 'Верёвка рвётся.'
        }
      ]
    },
    variants: [
      {
        word: 'abreißen',
        prefix: 'ab',
        isSeparable: true,
        translationRu: 'оторвать; снести',
        examples: [
          {
            textDe: 'Sie wollen das alte Gebäude abreißen.',
            translationRu: 'Они хотят снести старое здание.'
          }
        ]
      },
      {
        word: 'aufreißen',
        prefix: 'auf',
        isSeparable: true,
        translationRu: 'резко открыть; разорвать',
        examples: [
          {
            textDe: 'Er riss die Augen auf.',
            translationRu: 'Он широко раскрыл глаза.'
          }
        ]
      },
      {
        word: 'ausreißen',
        prefix: 'aus',
        isSeparable: true,
        translationRu: 'вырвать; сбежать',
        examples: [
          {
            textDe: 'Der Jugendliche ist von zu Hause ausgerissen.',
            translationRu: 'Подросток сбежал из дома.'
          }
        ]
      },
      {
        word: 'einreißen',
        prefix: 'ein',
        isSeparable: true,
        translationRu: 'обрушиваться; входить в дурную привычку',
        examples: [
          {
            textDe: 'Diese Gewohnheit ist eingerissen.',
            translationRu: 'Эта привычка укоренилась.'
          }
        ]
      },
      {
        word: 'zerreißen',
        prefix: 'zer',
        isSeparable: false,
        translationRu: 'разорвать на части',
        examples: [
          {
            textDe: 'Er zerriss den Brief.',
            translationRu: 'Он разорвал письмо.'
          }
        ]
      },
      {
        word: 'verreißen',
        prefix: 'ver',
        isSeparable: false,
        translationRu: 'разнести в критике',
        examples: [
          {
            textDe: 'Der Kritiker hat den Film verrissen.',
            translationRu: 'Критик разгромил фильм.'
          }
        ]
      },
      {
        word: 'hinreißen',
        prefix: 'hin',
        isSeparable: false,
        translationRu: 'восхитить, увлечь',
        examples: [
          {
            textDe: 'Das Konzert hat mich hingerissen.',
            translationRu: 'Концерт меня восхитил.'
          }
        ]
      },
      {
        word: 'mitreißen',
        prefix: 'mit',
        isSeparable: true,
        translationRu: 'увлечь за собой',
        examples: [
          {
            textDe: 'Die Rede riss das Publikum mit.',
            translationRu: 'Речь увлекла публику.'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'bringen',
      translationRu: 'приносить; приводить к результату',
      examples: [
        {
          textDe: 'Das brachte vieles in Bewegung.',
          translationRu: 'Это привело многое в движение.'
        }
      ]
    },
    variants: [
      {
        word: 'etw. auf den Punkt bringen',
        prefix: null,
        isSeparable: null,
        translationRu: 'сформулировать кратко и точно',
        examples: [
          {
            textDe: 'Er brachte das Problem auf den Punkt.',
            translationRu: 'Он точно сформулировал проблему.'
          }
        ]
      },
      {
        word: 'jdn. in Verlegenheit bringen',
        prefix: null,
        isSeparable: null,
        translationRu: 'поставить в неловкое положение',
        examples: [
          {
            textDe: 'Mit dieser Frage brachte er sie in Verlegenheit.',
            translationRu: 'Этим вопросом он поставил её в неловкое положение.'
          }
        ]
      },
      {
        word: 'etw. ins Rollen bringen',
        prefix: null,
        isSeparable: null,
        translationRu: 'запустить процесс',
        examples: [
          {
            textDe: 'Die Reform brachte viele Veränderungen ins Rollen.',
            translationRu: 'Реформа запустила много изменений.'
          }
        ]
      },
      {
        word: 'jdn. zur Verzweiflung bringen',
        prefix: null,
        isSeparable: null,
        translationRu: 'довести до отчаяния',
        examples: [
          {
            textDe: 'Die ständigen Probleme brachten ihn zur Verzweiflung.',
            translationRu: 'Постоянные проблемы довели его до отчаяния.'
          }
        ]
      },
      {
        word: 'etw. zu Ende bringen',
        prefix: null,
        isSeparable: null,
        translationRu: 'довести до конца',
        examples: [
          {
            textDe: 'Trotz aller Schwierigkeiten brachte sie das Projekt zu Ende.',
            translationRu: 'Несмотря на трудности, она довела проект до конца.'
          }
        ]
      },
      {
        word: 'etw. in Erfahrung bringen',
        prefix: null,
        isSeparable: null,
        translationRu: 'разузнать, выяснить',
        examples: [
          {
            textDe: 'Wir konnten nicht in Erfahrung bringen, wer dafür verantwortlich war.',
            translationRu: 'Нам не удалось выяснить, кто за это отвечал.'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'nehmen',
      translationRu: 'брать; использовать в устойчивых оборотах',
      examples: [
        {
          textDe: 'Man sollte Rücksicht auf die Nachbarn nehmen.',
          translationRu: 'Следует считаться с соседями.'
        }
      ]
    },
    variants: [
      {
        word: 'Rücksicht nehmen auf',
        prefix: null,
        isSeparable: null,
        translationRu: 'считаться с, учитывать',
        examples: [
          {
            textDe: 'Man sollte Rücksicht auf die Nachbarn nehmen.',
            translationRu: 'Следует считаться с соседями.'
          }
        ]
      },
      {
        word: 'Abschied nehmen von',
        prefix: null,
        isSeparable: null,
        translationRu: 'прощаться',
        examples: [
          {
            textDe: 'Er musste Abschied von seiner alten Heimat nehmen.',
            translationRu: 'Ему пришлось проститься со своей старой родиной.'
          }
        ]
      },
      {
        word: 'Stellung nehmen zu',
        prefix: null,
        isSeparable: null,
        translationRu: 'высказываться по вопросу',
        examples: [
          {
            textDe: 'Die Regierung nahm zu den Vorwürfen Stellung.',
            translationRu: 'Правительство высказалось по поводу обвинений.'
          }
        ]
      },
      {
        word: 'Einfluss nehmen auf',
        prefix: null,
        isSeparable: null,
        translationRu: 'оказывать влияние',
        examples: [
          {
            textDe: 'Die Medien nehmen großen Einfluss auf die öffentliche Meinung.',
            translationRu: 'СМИ оказывают большое влияние на общественное мнение.'
          }
        ]
      },
      {
        word: 'etw. zur Kenntnis nehmen',
        prefix: null,
        isSeparable: null,
        translationRu: 'принять к сведению',
        examples: [
          {
            textDe: 'Wir nehmen Ihre Beschwerde zur Kenntnis.',
            translationRu: 'Мы принимаем вашу жалобу к сведению.'
          }
        ]
      },
      {
        word: 'Verantwortung auf sich nehmen',
        prefix: null,
        isSeparable: null,
        translationRu: 'брать на себя ответственность',
        examples: [
          {
            textDe: 'Sie nahm die volle Verantwortung auf sich.',
            translationRu: 'Она взяла на себя полную ответственность.'
          }
        ]
      },
      {
        word: 'etw. in Kauf nehmen',
        prefix: null,
        isSeparable: null,
        translationRu: 'сознательно мириться с чем-то',
        examples: [
          {
            textDe: 'Er nahm Verzögerungen in Kauf.',
            translationRu: 'Он сознательно мирился с задержками.'
          }
        ]
      },
      {
        word: 'sich Zeit nehmen für',
        prefix: null,
        isSeparable: null,
        translationRu: 'выделять время на что-то',
        examples: [
          {
            textDe: 'Vielen Dank, dass Sie sich Zeit für das Gespräch genommen haben.',
            translationRu: 'Спасибо, что вы нашли время для разговора.'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'bewältigen',
      translationRu: 'справляться, преодолевать',
      explanationRu:
        'Употребляется, когда нужно справиться с трудной задачей, кризисом, стрессом или другой нагрузкой.',
      examples: [
        {
          textDe: 'Viele Menschen können Stress nur schwer bewältigen.',
          translationRu: 'Многим людям трудно справляться со стрессом.'
        }
      ]
    },
    variants: [
      {
        word: 'überwältigen',
        prefix: 'über',
        isSeparable: false,
        translationRu: 'одолеть; переполнить эмоциями; поразить',
        explanationRu:
          'Может означать как физическое подавление, так и сильное эмоциональное воздействие.',
        examples: [
          {
            textDe: 'Die Polizei konnte den Täter überwältigen.',
            translationRu: 'Полиции удалось обезвредить преступника.'
          },
          {
            textDe: 'Ich war von Dankbarkeit überwältigt.',
            translationRu: 'Я был переполнен благодарностью.'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'sich weigern',
      translationRu: 'отказываться, категорически не соглашаться',
      explanationRu: 'Обычно выражает принципиальный отказ делать что-то.',
      examples: [
        {
          textDe: 'Er weigert sich, die Wahrheit zu sagen.',
          translationRu: 'Он отказывается говорить правду.'
        }
      ]
    },
    variants: [
      {
        word: 'sich sträuben gegen',
        prefix: null,
        isSeparable: null,
        translationRu: 'внутренне сопротивляться, противиться',
        examples: [
          {
            textDe: 'Er sträubte sich dagegen, die Wahrheit zu sagen.',
            translationRu: 'Он внутренне сопротивлялся тому, чтобы сказать правду.'
          }
        ]
      },
      {
        word: 'ablehnen',
        prefix: 'ab',
        isSeparable: true,
        translationRu: 'отклонять, отвергать',
        examples: [
          {
            textDe: 'Er lehnte den Vorschlag ab.',
            translationRu: 'Он отклонил предложение.'
          }
        ]
      },
      {
        word: 'sich widersetzen',
        prefix: 'wider',
        isSeparable: false,
        translationRu: 'сопротивляться, противостоять',
        examples: [
          {
            textDe: 'Er widersetzte sich den Anweisungen.',
            translationRu: 'Он воспротивился указаниям.'
          }
        ]
      },
      {
        word: 'sich sperren gegen',
        prefix: null,
        isSeparable: null,
        translationRu: 'упорно сопротивляться',
        examples: [
          {
            textDe: 'Er sperrt sich gegen jede Veränderung.',
            translationRu: 'Он упорно сопротивляется любым изменениям.'
          }
        ]
      },
      {
        word: 'verweigern',
        prefix: 'ver',
        isSeparable: false,
        translationRu: 'отказать в чём-то',
        examples: [
          {
            textDe: 'Der Arzt verweigerte die Behandlung.',
            translationRu: 'Врач отказал в лечении.'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'bauen',
      translationRu: 'строить',
      examples: [
        {
          textDe: 'Sie bauen ein neues Haus.',
          translationRu: 'Они строят новый дом.'
        }
      ]
    },
    variants: [
      {
        word: 'aufbauen',
        prefix: 'auf',
        isSeparable: true,
        translationRu: 'строить; создавать; налаживать',
        examples: [
          {
            textDe: 'Sie hat ein erfolgreiches Unternehmen aufgebaut.',
            translationRu: 'Она создала успешную компанию.'
          }
        ]
      },
      {
        word: 'abbauen',
        prefix: 'ab',
        isSeparable: true,
        translationRu: 'демонтировать; сокращать; снимать',
        examples: [
          {
            textDe: 'Die Firma baut Stellen ab.',
            translationRu: 'Фирма сокращает рабочие места.'
          }
        ]
      },
      {
        word: 'ausbauen',
        prefix: 'aus',
        isSeparable: true,
        translationRu: 'расширять, модернизировать',
        examples: [
          {
            textDe: 'Die Regierung will das Bahnnetz ausbauen.',
            translationRu: 'Правительство хочет расширить железнодорожную сеть.'
          }
        ]
      },
      {
        word: 'einbauen',
        prefix: 'ein',
        isSeparable: true,
        translationRu: 'встраивать, устанавливать',
        examples: [
          {
            textDe: 'Der Techniker hat einen neuen Motor eingebaut.',
            translationRu: 'Техник установил новый двигатель.'
          }
        ]
      },
      {
        word: 'verbauen',
        prefix: 'ver',
        isSeparable: false,
        translationRu: 'застроить; закрыть путь; использовать при строительстве',
        examples: [
          {
            textDe: 'Neue Häuser haben die Aussicht auf den See verbaut.',
            translationRu: 'Новые дома закрыли вид на озеро.'
          },
          {
            textDe: 'Er hat sich mit dieser Entscheidung viele Chancen verbaut.',
            translationRu: 'Этим решением он закрыл себе многие возможности.'
          }
        ]
      },
      {
        word: 'überbauen',
        prefix: 'über',
        isSeparable: false,
        translationRu: 'застроить сверху',
        examples: [
          {
            textDe: 'Die Straße wurde später überbaut.',
            translationRu: 'Позже улицу застроили сверху.'
          }
        ]
      },
      {
        word: 'zubauen',
        prefix: 'zu',
        isSeparable: true,
        translationRu: 'застроить, перекрыть строительством',
        examples: [
          {
            textDe: 'Das Grundstück wurde komplett zugebaut.',
            translationRu: 'Участок полностью застроили.'
          }
        ]
      },
      {
        word: 'anbauen',
        prefix: 'an',
        isSeparable: true,
        translationRu: 'пристраивать; выращивать',
        examples: [
          {
            textDe: 'Auf dem Feld wird Gemüse angebaut.',
            translationRu: 'На поле выращивают овощи.'
          }
        ]
      },
      {
        word: 'umbauen',
        prefix: 'um',
        isSeparable: true,
        translationRu: 'перестраивать, реконструировать',
        examples: [
          {
            textDe: 'Das alte Haus wurde komplett umgebaut.',
            translationRu: 'Старый дом полностью перестроили.'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'bestreuen',
      translationRu: 'посыпать, присыпать',
      explanationRu: 'Обычно про заметный слой мелких частиц: сахар, соль, песок, травы.',
      examples: [
        {
          textDe: 'Der Koch bestreut den Kuchen mit Puderzucker.',
          translationRu: 'Повар посыпает торт сахарной пудрой.'
        }
      ]
    },
    variants: [
      {
        word: 'bestäuben',
        prefix: 'be',
        isSeparable: false,
        translationRu: 'слегка припудрить; опылять',
        explanationRu: 'Часто означает очень тонкий слой порошка; в биологии — опылять растения.',
        examples: [
          {
            textDe: 'Der Nachtisch wurde mit Kakao bestäubt.',
            translationRu: 'Десерт слегка посыпали какао.'
          },
          {
            textDe: 'Die Bienen bestäuben die Blüten.',
            translationRu: 'Пчёлы опыляют цветы.'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'legen',
      translationRu: 'класть, положить',
      examples: [
        {
          textDe: 'Er legt das Buch auf den Tisch.',
          translationRu: 'Он кладёт книгу на стол.'
        }
      ]
    },
    variants: [
      {
        word: 'hinlegen',
        prefix: 'hin',
        isSeparable: true,
        translationRu: 'класть, положить в конкретное место',
        examples: [
          {
            textDe: 'Leg die Schlüssel bitte hierhin.',
            translationRu: 'Положи ключи, пожалуйста, сюда.'
          }
        ]
      },
      {
        word: 'ablegen',
        prefix: 'ab',
        isSeparable: true,
        translationRu: 'снимать и класть; сдавать',
        examples: [
          {
            textDe: 'Sie hat die Prüfung abgelegt.',
            translationRu: 'Она сдала экзамен.'
          }
        ]
      },
      {
        word: 'anlegen',
        prefix: 'an',
        isSeparable: true,
        translationRu: 'надевать; вкладывать; создавать',
        examples: [
          {
            textDe: 'Sie legt Geld an.',
            translationRu: 'Она инвестирует деньги.'
          }
        ]
      },
      {
        word: 'auflegen',
        prefix: 'auf',
        isSeparable: true,
        translationRu: 'класть сверху; класть трубку; переиздавать',
        examples: [
          {
            textDe: 'Bitte legen Sie den Hörer nicht auf.',
            translationRu: 'Пожалуйста, не кладите трубку.'
          }
        ]
      },
      {
        word: 'beilegen',
        prefix: 'bei',
        isSeparable: true,
        translationRu: 'улаживать; прилагать',
        examples: [
          {
            textDe: 'Bitte legen Sie eine Kopie bei.',
            translationRu: 'Пожалуйста, приложите копию.'
          }
        ]
      },
      {
        word: 'darlegen',
        prefix: 'dar',
        isSeparable: true,
        translationRu: 'излагать, объяснять подробно',
        examples: [
          {
            textDe: 'Er legte seine Meinung klar dar.',
            translationRu: 'Он чётко изложил своё мнение.'
          }
        ]
      },
      {
        word: 'festlegen',
        prefix: 'fest',
        isSeparable: true,
        translationRu: 'устанавливать, фиксировать',
        examples: [
          {
            textDe: 'Die Regeln werden festgelegt.',
            translationRu: 'Правила устанавливаются.'
          }
        ]
      },
      {
        word: 'auslegen',
        prefix: 'aus',
        isSeparable: true,
        translationRu: 'выкладывать; толковать',
        examples: [
          {
            textDe: 'Der Text kann unterschiedlich ausgelegt werden.',
            translationRu: 'Текст можно по-разному истолковать.'
          }
        ]
      },
      {
        word: 'verlegen',
        prefix: 'ver',
        isSeparable: false,
        translationRu: 'перекладывать; терять; переносить',
        examples: [
          {
            textDe: 'Die Konferenz wurde verlegt.',
            translationRu: 'Конференцию перенесли.'
          }
        ]
      },
      {
        word: 'überlegen',
        prefix: 'über',
        isSeparable: false,
        translationRu: 'обдумывать',
        examples: [
          {
            textDe: 'Ich muss mir das gut überlegen.',
            translationRu: 'Мне нужно это хорошо обдумать.'
          }
        ]
      },
      {
        word: 'zugrunde legen',
        prefix: null,
        isSeparable: null,
        translationRu: 'брать за основу, положить в основу',
        examples: [
          {
            textDe: 'Der Studie wurden aktuelle Daten zugrunde gelegt.',
            translationRu: 'В основу исследования были положены актуальные данные.'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'liegen',
      translationRu: 'лежать; находиться',
      examples: [
        {
          textDe: 'Das Buch liegt auf dem Tisch.',
          translationRu: 'Книга лежит на столе.'
        }
      ]
    },
    variants: [
      {
        word: 'anliegen',
        prefix: 'an',
        isSeparable: false,
        translationRu: 'плотно прилегать; быть важным',
        examples: [
          {
            textDe: 'Dieses Thema liegt mir sehr am Herzen.',
            translationRu: 'Эта тема мне очень важна.'
          }
        ]
      },
      {
        word: 'aufliegen',
        prefix: 'auf',
        isSeparable: false,
        translationRu: 'лежать сверху; быть доступным',
        examples: [
          {
            textDe: 'Die Broschüren liegen im Büro auf.',
            translationRu: 'Брошюры лежат в офисе в доступе.'
          }
        ]
      },
      {
        word: 'beiliegen',
        prefix: 'bei',
        isSeparable: false,
        translationRu: 'прилагаться',
        examples: [
          {
            textDe: 'Dem Brief liegt eine Rechnung bei.',
            translationRu: 'К письму прилагается счёт.'
          }
        ]
      },
      {
        word: 'unterliegen',
        prefix: 'unter',
        isSeparable: false,
        translationRu: 'подлежать; проигрывать',
        examples: [
          {
            textDe: 'Der Vertrag unterliegt deutschem Recht.',
            translationRu: 'Договор подпадает под немецкое право.'
          },
          {
            textDe: 'Die Mannschaft unterlag dem Gegner 1:3.',
            translationRu: 'Команда проиграла сопернику 1:3.'
          }
        ]
      },
      {
        word: 'vorliegen',
        prefix: 'vor',
        isSeparable: false,
        translationRu: 'иметься в наличии; иметь место',
        examples: [
          {
            textDe: 'Ein schwerer Fehler liegt vor.',
            translationRu: 'Имеет место серьёзная ошибка.'
          }
        ]
      },
      {
        word: 'zurückliegen',
        prefix: 'zurück',
        isSeparable: true,
        translationRu: 'находиться в прошлом, быть давно',
        examples: [
          {
            textDe: 'Die Prüfung liegt erst zwei Wochen zurück.',
            translationRu: 'Экзамен был всего две недели назад.'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'wiegen',
      translationRu: 'весить; взвешивать; качать',
      examples: [
        {
          textDe: 'Das Paket wiegt 5 Kilo.',
          translationRu: 'Пакет весит 5 килограммов.'
        }
      ]
    },
    variants: [
      {
        word: 'aufwiegen',
        prefix: 'auf',
        isSeparable: true,
        translationRu: 'компенсировать, перевешивать',
        examples: [
          {
            textDe: 'Die Vorteile wiegen die Nachteile auf.',
            translationRu: 'Преимущества компенсируют недостатки.'
          }
        ]
      },
      {
        word: 'überwiegen',
        prefix: 'über',
        isSeparable: false,
        translationRu: 'преобладать',
        examples: [
          {
            textDe: 'Die Vorteile überwiegen.',
            translationRu: 'Преимущества преобладают.'
          }
        ]
      },
      {
        word: 'wiegen gegen',
        prefix: null,
        isSeparable: null,
        translationRu: 'перевешивать по значимости',
        examples: [
          {
            textDe: 'Die Risiken wiegen gegen die Chancen.',
            translationRu: 'Риски перевешивают шансы.'
          }
        ]
      },
      {
        word: 'jdn. in Sicherheit wiegen',
        prefix: null,
        isSeparable: null,
        translationRu: 'усыплять ложным чувством безопасности',
        examples: [
          {
            textDe: 'Die falschen Informationen wiegen ihn in Sicherheit.',
            translationRu: 'Ложная информация создаёт у него ложное чувство безопасности.'
          }
        ]
      },
      {
        word: 'sich in Sicherheit wiegen',
        prefix: null,
        isSeparable: null,
        translationRu: 'ошибочно чувствовать себя в безопасности',
        examples: [
          {
            textDe: 'Er wiegt sich in Sicherheit.',
            translationRu: 'Он ошибочно чувствует себя в безопасности.'
          }
        ]
      },
      {
        word: 'abwägen',
        prefix: 'ab',
        isSeparable: true,
        translationRu: 'взвешивать, обдумывать',
        examples: [
          {
            textDe: 'Wir müssen die Risiken sorgfältig abwägen.',
            translationRu: 'Нам нужно тщательно взвесить риски.'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'schieben',
      translationRu: 'толкать, двигать',
      examples: [
        {
          textDe: 'Er schiebt den Wagen vor sich her.',
          translationRu: 'Он толкает перед собой тележку.'
        }
      ]
    },
    variants: [
      {
        word: 'aufschieben',
        prefix: 'auf',
        isSeparable: true,
        translationRu: 'откладывать на потом',
        examples: [
          {
            textDe: 'Ich habe das Gespräch immer wieder aufgeschoben.',
            translationRu: 'Я всё время откладывал этот разговор.'
          }
        ]
      },
      {
        word: 'verschieben',
        prefix: 'ver',
        isSeparable: false,
        translationRu: 'переносить; смещать',
        examples: [
          {
            textDe: 'Wir müssen den Termin verschieben.',
            translationRu: 'Нам нужно перенести встречу.'
          }
        ]
      },
      {
        word: 'einschieben',
        prefix: 'ein',
        isSeparable: true,
        translationRu: 'вставить; вклинить',
        examples: [
          {
            textDe: 'Er schob eine Bemerkung ein.',
            translationRu: 'Он вставил замечание.'
          }
        ]
      },
      {
        word: 'unterschieben',
        prefix: 'unter',
        isSeparable: false,
        translationRu: 'подложить; приписать',
        examples: [
          {
            textDe: 'Man hat ihm die Schuld unterschoben.',
            translationRu: 'Ему приписали вину.'
          }
        ]
      },
      {
        word: 'zuschieben',
        prefix: 'zu',
        isSeparable: true,
        translationRu: 'подвинуть; переложить ответственность',
        examples: [
          {
            textDe: 'Sie schieben ihm die Schuld zu.',
            translationRu: 'Они перекладывают на него вину.'
          }
        ]
      },
      {
        word: 'wegschieben',
        prefix: 'weg',
        isSeparable: true,
        translationRu: 'отодвинуть; отогнать мысли',
        examples: [
          {
            textDe: 'Er versucht, die Angst wegzuschieben.',
            translationRu: 'Он пытается отогнать страх.'
          }
        ]
      },
      {
        word: 'herausschieben',
        prefix: 'heraus',
        isSeparable: true,
        translationRu: 'выдвинуть наружу',
        examples: [
          {
            textDe: 'Er schob die Schublade heraus.',
            translationRu: 'Он выдвинул ящик.'
          }
        ]
      },
      {
        word: 'hineinschieben',
        prefix: 'hinein',
        isSeparable: true,
        translationRu: 'задвинуть внутрь',
        examples: [
          {
            textDe: 'Schieb das bitte hinein.',
            translationRu: 'Задвинь это, пожалуйста, внутрь.'
          }
        ]
      },
      {
        word: 'nachschieben',
        prefix: 'nach',
        isSeparable: true,
        translationRu: 'дослать; добавить позже',
        examples: [
          {
            textDe: 'Die Firma schiebt noch Daten nach.',
            translationRu: 'Компания позже дошлёт данные.'
          }
        ]
      },
      {
        word: 'vorschieben',
        prefix: 'vor',
        isSeparable: true,
        translationRu: 'выдвигать вперёд; использовать как предлог',
        examples: [
          {
            textDe: 'Das ist nur vorgeschoben!',
            translationRu: 'Это всего лишь отговорка.'
          }
        ]
      },
      {
        word: 'abschieben',
        prefix: 'ab',
        isSeparable: true,
        translationRu: 'депортировать; сплавить; переложить',
        examples: [
          {
            textDe: 'Er hat die Arbeit auf mich abgeschoben.',
            translationRu: 'Он спихнул эту работу на меня.'
          }
        ]
      },
      {
        word: 'weiterschieben',
        prefix: 'weiter',
        isSeparable: true,
        translationRu: 'передавать дальше; снова откладывать',
        examples: [
          {
            textDe: 'Er schiebt die Aufgabe weiter.',
            translationRu: 'Он перекидывает эту задачу дальше.'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'bereuen',
      translationRu: 'раскаиваться',
      explanationRu:
        'Обычно о собственном поступке, за который человек чувствует вину или ответственность.',
      examples: [
        {
          textDe: 'Ich bereue meine Entscheidung.',
          translationRu: 'Я раскаиваюсь в своём решении.'
        }
      ]
    },
    variants: [
      {
        word: 'bedauern',
        prefix: 'be',
        isSeparable: false,
        translationRu: 'сожалеть',
        explanationRu:
          'Чаще про факт, ситуацию или чужой поступок; часто используется и в формальном стиле.',
        examples: [
          {
            textDe: 'Wir bedauern die Verzögerung.',
            translationRu: 'Мы сожалеем о задержке.'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'fällen',
      translationRu: 'валить; принимать решение; выносить вердикт',
      examples: [
        {
          textDe: 'Das Gericht fällte ein hartes Urteil.',
          translationRu: 'Суд вынес суровый приговор.'
        }
      ]
    },
    variants: [
      {
        word: 'eine Entscheidung fällen',
        prefix: null,
        isSeparable: null,
        translationRu: 'принять решение',
        examples: [
          {
            textDe: 'Die Regierung muss bald eine Entscheidung fällen.',
            translationRu: 'Правительству скоро придётся принять решение.'
          }
        ]
      },
      {
        word: 'ein Urteil fällen',
        prefix: null,
        isSeparable: null,
        translationRu: 'вынести приговор, решение',
        examples: [
          {
            textDe: 'Das Gericht fällte ein Urteil.',
            translationRu: 'Суд вынес решение.'
          }
        ]
      },
      {
        word: 'einen Beschluss fällen',
        prefix: null,
        isSeparable: null,
        translationRu: 'принять постановление',
        examples: [
          {
            textDe: 'Der Ausschuss fällte einen Beschluss.',
            translationRu: 'Комитет принял постановление.'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'fassen',
      translationRu: 'принимать; формулировать; обретать',
      examples: [
        {
          textDe: 'Nach langem Zögern fasste sie einen Entschluss.',
          translationRu: 'После долгих колебаний она приняла решение.'
        }
      ]
    },
    variants: [
      {
        word: 'einen Entschluss fassen',
        prefix: null,
        isSeparable: null,
        translationRu: 'принять решение',
        examples: [
          {
            textDe: 'Er fasste den Entschluss zu kündigen.',
            translationRu: 'Он принял решение уволиться.'
          }
        ]
      },
      {
        word: 'Mut fassen',
        prefix: null,
        isSeparable: null,
        translationRu: 'набраться смелости',
        examples: [
          {
            textDe: 'Sie fasste Mut und sprach mit ihm.',
            translationRu: 'Она набралась смелости и поговорила с ним.'
          }
        ]
      },
      {
        word: 'Vertrauen fassen',
        prefix: null,
        isSeparable: null,
        translationRu: 'обрести доверие',
        examples: [
          {
            textDe: 'Das Kind fasste schnell Vertrauen.',
            translationRu: 'Ребёнок быстро проникся доверием.'
          }
        ]
      },
      {
        word: 'Fuß fassen',
        prefix: null,
        isSeparable: null,
        translationRu: 'закрепиться',
        examples: [
          {
            textDe: 'Das Unternehmen konnte auf dem Markt Fuß fassen.',
            translationRu: 'Компания смогла закрепиться на рынке.'
          }
        ]
      },
      {
        word: 'Verdacht fassen',
        prefix: null,
        isSeparable: null,
        translationRu: 'заподозрить',
        examples: [
          {
            textDe: 'Die Polizei fasste Verdacht.',
            translationRu: 'Полиция заподозрила неладное.'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'treffen',
      translationRu: 'встречать; принимать меры, решения',
      examples: [
        {
          textDe: 'Wir müssen schnell eine Entscheidung treffen.',
          translationRu: 'Нам нужно быстро принять решение.'
        }
      ]
    },
    variants: [
      {
        word: 'eine Entscheidung treffen',
        prefix: null,
        isSeparable: null,
        translationRu: 'принять решение',
        examples: [
          {
            textDe: 'Wir müssen heute eine Entscheidung treffen.',
            translationRu: 'Сегодня нам нужно принять решение.'
          }
        ]
      },
      {
        word: 'eine Maßnahme treffen',
        prefix: null,
        isSeparable: null,
        translationRu: 'принять меру',
        examples: [
          {
            textDe: 'Die Behörden trafen sofort Maßnahmen.',
            translationRu: 'Власти немедленно приняли меры.'
          }
        ]
      },
      {
        word: 'eine Vereinbarung treffen',
        prefix: null,
        isSeparable: null,
        translationRu: 'заключить соглашение',
        examples: [
          {
            textDe: 'Die Partner trafen eine Vereinbarung.',
            translationRu: 'Партнёры заключили соглашение.'
          }
        ]
      },
      {
        word: 'Vorbereitungen treffen',
        prefix: null,
        isSeparable: null,
        translationRu: 'провести подготовку',
        examples: [
          {
            textDe: 'Wir treffen schon Vorbereitungen für die Reise.',
            translationRu: 'Мы уже ведём подготовку к поездке.'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'Feuerwerk',
      translationRu: 'фейерверк; тематическая лексика по теме травм и безопасности',
      examples: [
        {
          textDe: 'Illegales Feuerwerk kann zu schweren Verletzungen führen.',
          translationRu: 'Нелегальные фейерверки могут приводить к серьёзным травмам.'
        }
      ]
    },
    variants: [
      {
        word: 'einen Böller zünden',
        prefix: null,
        isSeparable: null,
        translationRu: 'поджечь петарду',
        examples: [
          {
            textDe: 'Er zündete einen Böller aus Versehen zu früh.',
            translationRu: 'Он случайно слишком рано поджёг петарду.'
          }
        ]
      },
      {
        word: 'sich an etw. verletzen',
        prefix: null,
        isSeparable: null,
        translationRu: 'пораниться чем-то',
        examples: [
          {
            textDe: 'Er hat sich an dem Feuerwerk verletzt.',
            translationRu: 'Он поранился из-за фейерверка.'
          }
        ]
      },
      {
        word: 'schwere Verletzungen erleiden',
        prefix: null,
        isSeparable: null,
        translationRu: 'получить серьёзные травмы',
        examples: [
          {
            textDe: 'Mehrere Menschen erlitten schwere Verletzungen.',
            translationRu: 'Несколько человек получили серьёзные травмы.'
          }
        ]
      },
      {
        word: 'rechtliche Schritte einleiten',
        prefix: null,
        isSeparable: null,
        translationRu: 'предпринять юридические шаги',
        examples: [
          {
            textDe: 'Die Behörden leiteten rechtliche Schritte ein.',
            translationRu: 'Власти предприняли юридические шаги.'
          }
        ]
      },
      {
        word: 'für ein Verbot werben',
        prefix: null,
        isSeparable: null,
        translationRu: 'выступать за запрет',
        examples: [
          {
            textDe: 'Mehrere Initiativen werben für ein Verbot.',
            translationRu: 'Несколько инициатив выступают за запрет.'
          }
        ]
      },
      {
        word: 'eine Petition unterschreiben',
        prefix: null,
        isSeparable: null,
        translationRu: 'подписать петицию',
        examples: [
          {
            textDe: 'Viele Bürger unterschrieben die Petition.',
            translationRu: 'Многие граждане подписали петицию.'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'Anlass geben',
      translationRu: 'давать повод; вызывать реакцию',
      examples: [
        {
          textDe: 'Die steigenden Preise geben Anlass zur Sorge.',
          translationRu: 'Рост цен даёт повод для беспокойства.'
        }
      ]
    },
    variants: [
      {
        word: 'Anlass zur Sorge geben',
        prefix: null,
        isSeparable: null,
        translationRu: 'дать повод для беспокойства',
        examples: [
          {
            textDe: 'Die steigenden Preise geben Anlass zur Sorge.',
            translationRu: 'Рост цен даёт повод для беспокойства.'
          }
        ]
      },
      {
        word: 'Anlass zur Diskussion geben',
        prefix: null,
        isSeparable: null,
        translationRu: 'вызвать дискуссию',
        examples: [
          {
            textDe: 'Die Reform gab Anlass zu intensiven Diskussionen.',
            translationRu: 'Реформа вызвала интенсивные дискуссии.'
          }
        ]
      },
      {
        word: 'Grund zur Annahme geben',
        prefix: null,
        isSeparable: null,
        translationRu: 'дать основание предполагать',
        examples: [
          {
            textDe: 'Die Hinweise geben Grund zur Annahme, dass der Täter bekannt ist.',
            translationRu: 'Улики дают основание предполагать, что преступник известен.'
          }
        ]
      },
      {
        word: 'keinen Anlass zur Kritik geben',
        prefix: null,
        isSeparable: null,
        translationRu: 'не давать повода для критики',
        examples: [
          {
            textDe: 'Sein Verhalten gab keinen Anlass zur Kritik.',
            translationRu: 'Его поведение не дало повода для критики.'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'eingreifen',
      translationRu: 'вмешиваться',
      explanationRu:
        'Более нейтральное и широкое по употреблению вмешательство, чем einschreiten; часто про помощь, коррекцию или влияние на процесс.',
      examples: [
        {
          textDe: 'Der Arzt griff rechtzeitig ein.',
          translationRu: 'Врач вовремя вмешался.'
        }
      ]
    },
    variants: [
      {
        word: 'in etw. eingreifen',
        prefix: null,
        isSeparable: null,
        translationRu: 'вмешиваться в процесс, ход событий',
        examples: [
          {
            textDe: 'Die Geschäftsführung griff in den Arbeitsablauf ein.',
            translationRu: 'Руководство вмешалось в рабочий процесс.'
          }
        ]
      },
      {
        word: 'vermittelnd eingreifen',
        prefix: null,
        isSeparable: null,
        translationRu: 'вмешаться как посредник',
        examples: [
          {
            textDe: 'Ein Dritter griff vermittelnd ein.',
            translationRu: 'Третья сторона вмешалась как посредник.'
          }
        ]
      },
      {
        word: 'korrigierend eingreifen',
        prefix: null,
        isSeparable: null,
        translationRu: 'вмешаться с целью исправить',
        examples: [
          {
            textDe: 'Der Lehrer griff korrigierend ein.',
            translationRu: 'Учитель вмешался, чтобы скорректировать ситуацию.'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'sich verlassen',
      translationRu: 'полагаться',
      explanationRu: 'Блок про доверие, опору на опыт и критическое отношение к советам.',
      examples: [
        {
          textDe: 'Man sollte sich nicht blind auf andere verlassen.',
          translationRu: 'Не стоит слепо полагаться на других.'
        }
      ]
    },
    variants: [
      {
        word: 'jdm. vertrauen',
        prefix: null,
        isSeparable: null,
        translationRu: 'доверять кому-то',
        examples: [
          {
            textDe: 'Ich vertraue ihm vollkommen.',
            translationRu: 'Я ему полностью доверяю.'
          }
        ]
      },
      {
        word: 'auf sein Bauchgefühl hören',
        prefix: null,
        isSeparable: null,
        translationRu: 'прислушиваться к интуиции',
        examples: [
          {
            textDe: 'Man sollte manchmal auf sein Bauchgefühl hören.',
            translationRu: 'Иногда стоит прислушиваться к интуиции.'
          }
        ]
      },
      {
        word: 'an sich zweifeln',
        prefix: null,
        isSeparable: null,
        translationRu: 'сомневаться в себе',
        examples: [
          {
            textDe: 'Er zweifelt oft an sich.',
            translationRu: 'Он часто сомневается в себе.'
          }
        ]
      },
      {
        word: 'Ratschläge hinterfragen',
        prefix: null,
        isSeparable: null,
        translationRu: 'критически переосмысливать советы',
        examples: [
          {
            textDe: 'Man sollte Expertenmeinungen kritisch hinterfragen.',
            translationRu: 'Следует критически осмысливать мнения экспертов.'
          }
        ]
      },
      {
        word: 'etw. kritisch betrachten',
        prefix: null,
        isSeparable: null,
        translationRu: 'критически оценивать что-то',
        examples: [
          {
            textDe: 'Er betrachtet solche Versprechen kritisch.',
            translationRu: 'Он критически оценивает такие обещания.'
          }
        ]
      },
      {
        word: 'etw. selbst ausprobieren',
        prefix: null,
        isSeparable: null,
        translationRu: 'попробовать самому',
        examples: [
          {
            textDe: 'Man muss manches selbst ausprobieren.',
            translationRu: 'Некоторые вещи нужно попробовать самому.'
          }
        ]
      },
      {
        word: 'aus eigener Erfahrung wissen',
        prefix: null,
        isSeparable: null,
        translationRu: 'знать по собственному опыту',
        examples: [
          {
            textDe: 'Ich weiß das aus eigener Erfahrung.',
            translationRu: 'Я знаю это по собственному опыту.'
          }
        ]
      },
      {
        word: 'durch Versuch und Irrtum lernen',
        prefix: null,
        isSeparable: null,
        translationRu: 'учиться методом проб и ошибок',
        examples: [
          {
            textDe: 'Viele lernen nur durch Versuch und Irrtum.',
            translationRu: 'Многие учатся только методом проб и ошибок.'
          }
        ]
      },
      {
        word: 'seinen eigenen Weg gehen',
        prefix: null,
        isSeparable: null,
        translationRu: 'идти своим путём',
        examples: [
          {
            textDe: 'Letztendlich ist es wichtig, seinen eigenen Weg zu gehen.',
            translationRu: 'В конечном итоге важно идти своим путём.'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'auslösen',
      translationRu: 'вызывать, провоцировать, запускать',
      examples: [
        {
          textDe: 'Der Skandal löste eine breite Debatte aus.',
          translationRu: 'Скандал вызвал широкую дискуссию.'
        }
      ]
    },
    variants: [
      {
        word: 'eine Debatte auslösen',
        prefix: null,
        isSeparable: null,
        translationRu: 'вызвать дебаты, обсуждение',
        examples: [
          {
            textDe: 'Die Studie löste eine breite Debatte aus.',
            translationRu: 'Исследование вызвало широкую дискуссию.'
          }
        ]
      },
      {
        word: 'eine Krise auslösen',
        prefix: null,
        isSeparable: null,
        translationRu: 'спровоцировать кризис',
        examples: [
          {
            textDe: 'Der Skandal löste eine politische Krise aus.',
            translationRu: 'Скандал спровоцировал политический кризис.'
          }
        ]
      },
      {
        word: 'etw. in Bewegung bringen',
        prefix: null,
        isSeparable: null,
        translationRu: 'привести в движение',
        examples: [
          {
            textDe: 'Die Reform brachte den politischen Prozess in Bewegung.',
            translationRu: 'Реформа привела политический процесс в движение.'
          }
        ]
      },
      {
        word: 'etw. in Gang bringen',
        prefix: null,
        isSeparable: null,
        translationRu: 'запустить процесс',
        examples: [
          {
            textDe: 'Die Regierung brachte neue Maßnahmen in Gang.',
            translationRu: 'Правительство запустило новые меры.'
          }
        ]
      },
      {
        word: 'etw. in Ordnung bringen',
        prefix: null,
        isSeparable: null,
        translationRu: 'привести в порядок',
        examples: [
          {
            textDe: 'Wir müssen die Situation schnell in Ordnung bringen.',
            translationRu: 'Нам нужно быстро привести ситуацию в порядок.'
          }
        ]
      },
      {
        word: 'etw. in Einklang bringen',
        prefix: null,
        isSeparable: null,
        translationRu: 'привести в соответствие, согласовать',
        examples: [
          {
            textDe: 'Die Politik versucht, Wirtschaft und Umwelt in Einklang zu bringen.',
            translationRu: 'Политика пытается согласовать экономику и экологию.'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'hervorrufen',
      translationRu: 'вызывать, порождать реакцию',
      examples: [
        {
          textDe: 'Der Film rief große Begeisterung hervor.',
          translationRu: 'Фильм вызвал большой восторг.'
        }
      ]
    },
    variants: [
      {
        word: 'Begeisterung hervorrufen',
        prefix: null,
        isSeparable: null,
        translationRu: 'вызвать восторг',
        examples: [
          {
            textDe: 'Der Film rief große Begeisterung hervor.',
            translationRu: 'Фильм вызвал большой восторг.'
          }
        ]
      },
      {
        word: 'Unverständnis hervorrufen',
        prefix: null,
        isSeparable: null,
        translationRu: 'вызвать непонимание',
        examples: [
          {
            textDe: 'Seine Entscheidung rief viel Unverständnis hervor.',
            translationRu: 'Его решение вызвало большое непонимание.'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'verursachen',
      translationRu: 'причинять, вызывать',
      examples: [
        {
          textDe: 'Der Sturm verursachte schwere Schäden.',
          translationRu: 'Шторм причинил серьёзный ущерб.'
        }
      ]
    },
    variants: [
      {
        word: 'Schäden verursachen',
        prefix: null,
        isSeparable: null,
        translationRu: 'причинить ущерб',
        examples: [
          {
            textDe: 'Der Sturm verursachte schwere Schäden.',
            translationRu: 'Шторм причинил серьёзный ущерб.'
          }
        ]
      },
      {
        word: 'für Unruhe sorgen',
        prefix: null,
        isSeparable: null,
        translationRu: 'вызвать беспокойство',
        examples: [
          {
            textDe: 'Die Gerüchte sorgten für Unruhe auf dem Markt.',
            translationRu: 'Слухи вызвали беспокойство на рынке.'
          }
        ]
      },
      {
        word: 'für Diskussionen sorgen',
        prefix: null,
        isSeparable: null,
        translationRu: 'вызвать обсуждение',
        examples: [
          {
            textDe: 'Das Urteil sorgte für heftige Diskussionen.',
            translationRu: 'Решение вызвало оживлённые споры.'
          }
        ]
      },
      {
        word: 'für Klarheit sorgen',
        prefix: null,
        isSeparable: null,
        translationRu: 'внести ясность',
        examples: [
          {
            textDe: 'Die Erklärung des Ministers sorgte für Klarheit.',
            translationRu: 'Заявление министра внесло ясность.'
          }
        ]
      }
    ]
  },
  {
    base: {
      word: 'gewinnen',
      translationRu: 'получать; приобретать; усиливаться',
      examples: [
        {
          textDe: 'Das Thema gewinnt zunehmend an Bedeutung.',
          translationRu: 'Эта тема приобретает всё большее значение.'
        }
      ]
    },
    variants: [
      {
        word: 'Bedeutung gewinnen',
        prefix: null,
        isSeparable: null,
        translationRu: 'приобретать значение',
        examples: [
          {
            textDe: 'Das Thema gewinnt zunehmend an Bedeutung.',
            translationRu: 'Эта тема приобретает всё большее значение.'
          }
        ]
      },
      {
        word: 'Einfluss gewinnen',
        prefix: null,
        isSeparable: null,
        translationRu: 'усиливать влияние',
        examples: [
          {
            textDe: 'Die Partei gewinnt immer mehr Einfluss.',
            translationRu: 'Партия приобретает всё больше влияния.'
          }
        ]
      },
      {
        word: 'Aufmerksamkeit erregen',
        prefix: null,
        isSeparable: null,
        translationRu: 'привлечь внимание',
        examples: [
          {
            textDe: 'Der Bericht erregte internationale Aufmerksamkeit.',
            translationRu: 'Доклад привлёк международное внимание.'
          }
        ]
      }
    ]
  }
];
