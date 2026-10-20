import type { PrepositionVerbCard, PrepositionVerbLevel } from '../types/preposition-verbs';

type CardSource = readonly [verb: string, translation: string, example: string];

function createCards(level: PrepositionVerbLevel, days: readonly (readonly CardSource[])[]): PrepositionVerbCard[] {
  return days.flatMap((cards, dayIndex) =>
    cards.map(([verb, translation, example], cardIndex) => ({
      id: `${level.toLowerCase()}-${dayIndex + 1}-${cardIndex + 1}`,
      day: dayIndex + 1,
      position: cardIndex + 1,
      verb,
      translation,
      example
    }))
  );
}

const b1Days: readonly (readonly CardSource[])[] = [
  [
    ['warten auf + Akk.', 'ждать', 'Ich warte auf den Bus.'],
    ['sich freuen auf + Akk.', 'радоваться предстоящему', 'Ich freue mich auf den Urlaub.'],
    ['sich freuen über + Akk.', 'радоваться чему-то', 'Ich freue mich über das Geschenk.'],
    ['denken an + Akk.', 'думать о', 'Ich denke an dich.'],
    ['sich erinnern an + Akk.', 'вспоминать о', 'Ich erinnere mich an den Tag.']
  ],
  [
    ['glauben an + Akk.', 'верить в', 'Ich glaube an dich.'],
    ['sich interessieren für + Akk.', 'интересоваться', 'Ich interessiere mich für Musik.'],
    ['sich entscheiden für + Akk.', 'выбирать, решаться на', 'Ich entscheide mich für diese Lösung.'],
    ['sich kümmern um + Akk.', 'заботиться, заниматься', 'Ich kümmere mich um das Problem.'],
    ['sich bewerben um + Akk.', 'подавать заявку на', 'Ich bewerbe mich um eine Stelle.']
  ],
  [
    ['bitten um + Akk.', 'просить о', 'Ich bitte dich um Hilfe.'],
    ['sich ärgern über + Akk.', 'злиться из-за', 'Ich ärgere mich über den Fehler.'],
    ['sich beschweren über + Akk.', 'жаловаться на', 'Ich beschwere mich über den Lärm.'],
    ['sprechen über + Akk.', 'говорить о', 'Wir sprechen über das Projekt.'],
    ['diskutieren über + Akk.', 'обсуждать', 'Wir diskutieren über das Problem.']
  ],
  [
    ['sich vorbereiten auf + Akk.', 'готовиться к', 'Ich bereite mich auf die Prüfung vor.'],
    ['sich gewöhnen an + Akk.', 'привыкать к', 'Ich gewöhne mich an die neue Arbeit.'],
    ['achten auf + Akk.', 'обращать внимание на', 'Achte auf den Verkehr!'],
    ['sich konzentrieren auf + Akk.', 'сосредотачиваться на', 'Ich konzentriere mich auf die Aufgabe.'],
    ['verzichten auf + Akk.', 'отказываться от', 'Ich verzichte auf Zucker.']
  ],
  [
    ['teilnehmen an + Dat.', 'участвовать в', 'Ich nehme an einem Kurs teil.'],
    ['arbeiten an + Dat.', 'работать над', 'Ich arbeite an einem Projekt.'],
    ['zweifeln an + Dat.', 'сомневаться в', 'Ich zweifle an dieser Lösung.'],
    ['leiden an + Dat.', 'страдать от болезни', 'Er leidet an einer Krankheit.'],
    ['sprechen mit + Dat.', 'разговаривать с', 'Ich spreche mit meinem Kollegen.']
  ],
  [
    ['sich treffen mit + Dat.', 'встречаться с', 'Ich treffe mich mit einem Freund.'],
    ['sich beschäftigen mit + Dat.', 'заниматься чем-либо', 'Ich beschäftige mich mit dem Thema.'],
    ['anfangen mit + Dat.', 'начинать с', 'Ich fange mit der Aufgabe an.'],
    ['aufhören mit + Dat.', 'прекращать', 'Hör mit dem Rauchen auf!'],
    ['fragen nach + Dat.', 'спрашивать о', 'Ich frage nach dem Preis.']
  ],
  [
    ['suchen nach + Dat.', 'искать', 'Ich suche nach einer Lösung.'],
    ['sich erkundigen nach + Dat.', 'узнавать, справляться о', 'Ich erkundige mich nach dem Termin.'],
    ['erzählen von + Dat.', 'рассказывать о', 'Er erzählt von seiner Reise.'],
    ['träumen von + Dat.', 'мечтать о', 'Ich träume von einem Haus.'],
    ['abhängen von + Dat.', 'зависеть от', 'Das hängt vom Wetter ab.']
  ],
  [
    ['sich verabschieden von + Dat.', 'прощаться с', 'Ich verabschiede mich von dir.'],
    ['gehören zu + Dat.', 'относиться к', 'Das gehört zu meiner Arbeit.'],
    ['passen zu + Dat.', 'подходить к', 'Die Farbe passt zu deinem Auto.'],
    ['gratulieren zu + Dat.', 'поздравлять с', 'Ich gratuliere dir zum Geburtstag.'],
    ['bestehen aus + Dat.', 'состоять из', 'Das Team besteht aus fünf Personen.']
  ]
];

const b2Days: readonly (readonly CardSource[])[] = [
  [
    ['sich auseinandersetzen mit + Dat.', 'подробно разбираться с чем-либо', 'Wir setzen uns mit dem Problem auseinander.'],
    ['sich befassen mit + Dat.', 'заниматься, изучать вопрос', 'Ich befasse mich mit dem neuen Konzept.'],
    ['sich beschäftigen mit + Dat.', 'заниматься чем-либо', 'Sie beschäftigt sich mit der Analyse.'],
    ['sich beziehen auf + Akk.', 'относиться к, ссылаться на', 'Meine Frage bezieht sich auf dein Ticket.'],
    ['hinweisen auf + Akk.', 'указывать на, обращать внимание', 'Er weist auf einen Fehler hin.']
  ],
  [
    ['aufmerksam machen auf + Akk.', 'обратить внимание на', 'Ich möchte dich auf ein Risiko aufmerksam machen.'],
    ['reagieren auf + Akk.', 'реагировать на', 'Wie reagierst du auf diese Änderung?'],
    ['eingehen auf + Akk.', 'подробно остановиться на', 'Ich gehe später auf deine Frage ein.'],
    ['sich einstellen auf + Akk.', 'подготовиться, настроиться на', 'Wir müssen uns auf Änderungen einstellen.'],
    ['sich verlassen auf + Akk.', 'полагаться на', 'Du kannst dich auf mich verlassen.']
  ],
  [
    ['bestehen auf + Dat.', 'настаивать на', 'Der Kunde besteht auf einer Lösung.'],
    ['beharren auf + Dat.', 'упорно настаивать на', 'Sie beharrt auf ihrer Meinung.'],
    ['beruhen auf + Dat.', 'основываться на', 'Die Entscheidung beruht auf Fakten.'],
    ['basieren auf + Dat.', 'базироваться на', 'Der Bericht basiert auf aktuellen Daten.'],
    ['aufbauen auf + Dat.', 'строиться на, опираться на', 'Die neue Version baut auf der alten auf.']
  ],
  [
    ['verfügen über + Akk.', 'располагать, обладать', 'Wir verfügen über genügend Ressourcen.'],
    ['entscheiden über + Akk.', 'принимать решение по вопросу', 'Das Team entscheidet über den Vorschlag.'],
    ['nachdenken über + Akk.', 'размышлять о', 'Ich denke über eine Alternative nach.'],
    ['sich informieren über + Akk.', 'получать информацию о', 'Ich informiere mich über die Änderungen.'],
    ['sich wundern über + Akk.', 'удивляться чему-либо', 'Ich wundere mich über das Ergebnis.']
  ],
  [
    ['überzeugen von + Dat.', 'убедить в чём-либо', 'Das Ergebnis hat mich von der Idee überzeugt.'],
    ['sich überzeugen von + Dat.', 'самому убедиться в', 'Überzeuge dich selbst von der Qualität.'],
    ['ausgehen von + Dat.', 'исходить из, предполагать', 'Ich gehe von einem Fehler im Backend aus.'],
    ['profitieren von + Dat.', 'извлекать пользу из', 'Wir profitieren von der Erfahrung.'],
    ['absehen von + Dat.', 'отказаться от, воздержаться', 'Wir sehen von weiteren Änderungen ab.']
  ],
  [
    ['sich unterscheiden von + Dat.', 'отличаться от', 'Die Lösung unterscheidet sich von der alten.'],
    ['abhängen von + Dat.', 'зависеть от', 'Das hängt von der Priorität ab.'],
    ['sich distanzieren von + Dat.', 'дистанцироваться, отмежеваться от', 'Er distanziert sich von dieser Aussage.'],
    ['beitragen zu + Dat.', 'способствовать чему-либо', 'Die Änderung trägt zur Stabilität bei.'],
    ['führen zu + Dat.', 'приводить к', 'Das kann zu Problemen führen.']
  ],
  [
    ['neigen zu + Dat.', 'иметь склонность к', 'Er neigt zu schnellen Entscheidungen.'],
    ['zwingen zu + Dat.', 'вынуждать к', 'Der Fehler zwingt uns zu einem Neustart.'],
    ['auffordern zu + Dat.', 'призывать, побуждать к', 'Sie fordert uns zur Prüfung auf.'],
    ['raten zu + Dat.', 'советовать что-либо', 'Ich rate zu einer einfacheren Lösung.'],
    ['sich entschließen zu + Dat.', 'решиться на', 'Wir haben uns zu einem Neustart entschlossen.']
  ],
  [
    ['sich eignen für + Akk.', 'подходить для', 'Diese Methode eignet sich für große Tabellen.'],
    ['sorgen für + Akk.', 'обеспечивать, заботиться о', 'Das Update sorgt für mehr Sicherheit.'],
    ['sich einsetzen für + Akk.', 'выступать за, добиваться', 'Sie setzt sich für bessere Bedingungen ein.'],
    ['sich aussprechen für + Akk.', 'высказываться в пользу', 'Ich spreche mich für diese Variante aus.'],
    ['sich entscheiden gegen + Akk.', 'решить отказаться от', 'Wir entscheiden uns gegen die alte Lösung.']
  ],
  [
    ['warnen vor + Dat.', 'предупреждать о', 'Der Browser warnt vor einer Gefahr.'],
    ['schützen vor + Dat.', 'защищать от', 'Das Passwort schützt vor unbefugtem Zugriff.'],
    ['sich fürchten vor + Dat.', 'бояться чего-либо', 'Er fürchtet sich vor der Prüfung.'],
    ['zurückschrecken vor + Dat.', 'отступать перед, избегать', 'Wir schrecken vor der Aufgabe nicht zurück.'],
    ['bewahren vor + Dat.', 'уберечь от', 'Das Backup bewahrt uns vor Datenverlust.']
  ],
  [
    ['ankommen auf + Akk.', 'иметь решающее значение', 'Es kommt auf die Details an.'],
    ['sich beschränken auf + Akk.', 'ограничиваться чем-либо', 'Wir beschränken uns auf die wichtigsten Punkte.'],
    ['verzichten auf + Akk.', 'отказываться от', 'Wir verzichten auf zusätzliche Optionen.'],
    ['zurückgreifen auf + Akk.', 'прибегать к, использовать', 'Wir greifen auf alte Daten zurück.'],
    ['sich berufen auf + Akk.', 'ссылаться на (авторитет, правило)', 'Er beruft sich auf die Vereinbarung.']
  ],
  [
    ['zweifeln an + Dat.', 'сомневаться в', 'Ich zweifle an der Aussage.'],
    ['scheitern an + Dat.', 'потерпеть неудачу из-за', 'Das Projekt scheitert an den Kosten.'],
    ['liegen an + Dat.', 'быть причиной, зависеть от', 'Es liegt an der Konfiguration.'],
    ['mangeln an + Dat.', 'не хватать чего-либо', 'Es mangelt an klaren Anforderungen.'],
    ['erkennen an + Dat.', 'узнавать по признаку', 'Ich erkenne ihn an seiner Stimme.']
  ],
  [
    ['sich erkundigen bei + Dat.', 'справляться у кого-либо', 'Ich erkundige mich bei der Verwaltung.'],
    ['sich wenden an + Akk.', 'обращаться к', 'Wende dich an den Support.'],
    ['sich bedanken bei + Dat.', 'благодарить кого-либо', 'Ich bedanke mich bei dir.'],
    ['sich bedanken für + Akk.', 'благодарить за', 'Ich bedanke mich für deine Hilfe.'],
    ['sich entschuldigen für + Akk.', 'извиняться за', 'Ich entschuldige mich für die Verspätung.']
  ]
];

export const prepositionVerbCards: Record<PrepositionVerbLevel, PrepositionVerbCard[]> = {
  B1: createCards('B1', b1Days),
  B2: createCards('B2', b2Days)
};
