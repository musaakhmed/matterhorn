import { GuideTranslation } from '../guides';

export const deGuides: Record<string, GuideTranslation> = {
  'gornergrat-vs-glacier-paradise': {
    title: 'Gornergrat vs. Glacier Paradise',
    shortTitle: 'Gornergrat vs. Glacier Paradise',
    description: 'Höhenlage, Zahnradbahn vs. Seilbahn, Blickwinkel und Wolkenanfälligkeit der beiden Top-Aussichtspunkte in Zermatt im direkten Vergleich.',
    category: 'Aussichtspunkte',
    heroStat: {
      label: 'Höhendelta',
      value: '794 m',
      detail: 'Gornergrat (3.089 m) vs. Klein Matterhorn (3.883 m)',
    },
    keyTakeaways: [
      'Der Gornergrat (3.089 m) bietet die ikonische pyramidenförmige Ost-/Nordost-Toblerone-Silhouette und ist deutlich windstabiler bei Seilbahn-Sturmwarnungen.',
      'Das Matterhorn Glacier Paradise (3.883 m) liegt fast 800 Meter höher auf dem Gletscherplateau und zeigt die dramatische, unbekanntere Süd-/Westwand.',
      'Wegen lokaler Lee-Wellen und Föhnwinde hat oft ein Aussichtspunkt 8/10 Punkte, während der andere bei 4/10 liegt – vergleichen Sie stets beide Live-Scores vor dem Ticketkauf.',
      'Wenn Sie nur einen einzigen Ausflug buchen, um die weltberühmte klassische Matterhorn-Form zu fotografieren, wählen Sie den Gornergrat per Zahnradbahn.',
    ],
    comparisonTable: {
      caption: 'Direkter Vergleich: Gornergrat vs. Glacier Paradise',
      headers: ['Kriterium', 'Gornergrat (3.089 m)', 'Matterhorn Glacier Paradise (3.883 m)'],
      rows: [
        [
          'Matterhorn-Blickwinkel',
          'Klassische Ostwand & Hörnligrat ("Toblerone"-Form)',
          'Steile Süd- & Westwand an der italienischen Grenze',
        ],
        [
          'Transportmittel',
          'Historische Zahnradbahn mit Panoramafenstern (33 Min. ab Zermatt)',
          '3S-Gondel & Seilbahnnetz via Furi / Trockener Steg (45 Min.)',
        ],
        [
          'Wind- & Sturmresistenz',
          'Sehr hoch – Die Zahnradbahn fährt auch bei starkem Wind zuverlässig',
          'Mäßig – Die Seilbahnen auf 3.883 m schließen bei Föhnsturm (>50 km/h) zuerst',
        ],
        [
          'Bestes Lichtfenster',
          '06:00–11:00 MEZ (Morgensonne & Alpenglühen auf der Ostwand)',
          '11:00–16:00 MEZ (Hoher Sonnenstand & Westbeleuchtung am Nachmittag)',
        ],
        [
          'Bergsee-Spiegelung',
          'Ja – Riffelsee (Station Rotenboden, Juni bis Oktober eisfrei)',
          'Optionaler Abstecher über Schwarzsee (2.583 m)',
        ],
        [
          'Höhenanpassung',
          'Geringes bis mäßiges Risiko (3.089 m)',
          'Spürbar dünne Luft bei schneller Auffahrt (3.883 m)',
        ],
      ],
    },
    sections: [
      {
        id: 'matterhorn-angle',
        heading: '1. Die Matterhorn-Silhouette: Klassische Pyramide vs. hochalpine Wand',
        paragraphs: [
          'Wer Zermatt zum ersten Mal besucht, ist oft überrascht: Vom Matterhorn Glacier Paradise (Klein Matterhorn) sieht der Berg völlig anders aus als vom Dorf oder vom Gornergrat.',
          'Vom Gornergrat auf 3.089 Metern blickt man direkt über den Gornergletscher auf die Ost- und Nordwand, getrennt durch den messerscharfen Hörnligrat. Das ist die berühmte Pyramide, die jeder von der Toblerone-Verpackung kennt. Vom Glacier Paradise auf 3.883 Metern steht man viel näher an der italienischen Grenze und betrachtet das Massiv von der Seite – breiter, wuchtiger und weniger geschwungen.',
        ],
        proTip: {
          label: 'Fotografen-Tipp',
          text: 'Für das klassische Postkartenmotiv – besonders in Kombination mit der Spiegelung im Riffelsee an der Station Rotenboden – ist der Gornergrat die unangefochtene Nummer eins.',
        },
      },
      {
        id: 'weather-differences',
        heading: '2. Warum sich die Sichtbarkeit zwischen 3.089 m und 3.883 m unterscheidet',
        paragraphs: [
          'Der Hauptgrund für unsere getrennte Telemetrie auf isthematterhornvisible.com ist, dass Gornergrat und Glacier Paradise in unterschiedlichen Mikroklimazonen liegen.',
          'Wenn feuchte Südföhnluft aus dem italienischen Val Tournenche über den Theodulpass (3.300 m) strömt, hüllt sie das Klein Matterhorn (3.883 m) oft als erstes ein, während der weiter östlich gelegene Gornergrat noch zwei bis drei Stunden in strahlender Sonne liegt. Umgekehrt gilt bei winterlichen Hochnebeldecken im Tal: Das Glacier Paradise ragt oft weit über das Wolkenmeer hinaus, während tiefere Lagen im Nebel versinken.',
        ],
        bulletPoints: [
          {
            bold: 'Mittelhohe Wolkenschicht (3.000–4.000 m):',
            text: 'Schneidet beide Gipfel direkt und geht mit 60 % Gewichtung in unseren Sichtbarkeits-Index ein.',
          },
          {
            bold: 'Föhn-Sperrungen:',
            text: 'Südliche Winde über 45–55 km/h stoppen regelmäßig die Seilbahn Trockener Steg–Klein Matterhorn, während die Gornergratbahn auf Schienen weiterfährt.',
          },
        ],
      },
      {
        id: 'ticket-strategy',
        heading: '3. Ticket-Strategie: Niemals Wochen im Voraus buchen',
        paragraphs: [
          'Bergfahrkarten in Zermatt sind kostspielig (oft CHF 90 bis über CHF 220 je nach Saison und Halbtax/Swiss Travel Pass). Die Bahnen sind jedoch für Individualreisende nie ausverkauft.',
          'Warten Sie bis zum Vorabend oder zum Morgen der Auffahrt und prüfen Sie unseren Live-Index sowie die Roundshot-Webcams. Kaufen Sie Ihr Ticket erst, wenn die Prognose mindestens 7/10 Punkte anzeigt.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Auf welcher Seite sitzt man in der Gornergratbahn am besten?',
        answer:
          'Setzen Sie sich in Fahrtrichtung bergauf auf die rechte Seite. Das Matterhorn dominiert die gesamte 33-minütige Fahrt über Riffelalp und Rotenboden direkt am Fenster.',
      },
      {
        question: 'Kann man Gornergrat und Glacier Paradise an einem Tag kombinieren?',
        answer:
          'Ja, mit dem Zermatt Peak Pass. Dies empfiehlt sich jedoch nur an Tagen mit einem ganztägigen Sicht-Score von 9/10 oder 10/10. Starten Sie um 08:00 Uhr am Gornergrat und fahren Sie ab 11:30 Uhr zum Glacier Paradise.',
      },
      {
        question: 'Welcher Aussichtspunkt ist bei Bewölkung besser?',
        answer:
          'Wenn beide Punkte bei 4/10 oder darunter liegen, bleiben Sie im Tal und sparen Sie das Geld. Liegt lediglich bodennaher Inversionsnebel unter 2.800 Metern, ragt das Glacier Paradise (3.883 m) verlässlicher darüber hinaus.',
      },
    ],
  },

  'best-time-to-see-matterhorn': {
    title: 'Zermatt Wetter nach Monat | Beste Zeit für das Matterhorn',
    shortTitle: 'Bester Monat & Tageszeit',
    description: 'Datengestützte Analyse der besten Reisezeiten: Warum Dezember & Januar 88%+ Klarsicht bieten, während Sommernachmittage oft in Quellwolken versinken.',
    category: 'Klimatologie',
    heroStat: {
      label: 'Klarstes Zeitfenster',
      value: '06:00–10:30',
      detail: 'Der Vormittag ist an 78 % aller Tage klarer als der Nachmittag',
    },
    keyTakeaways: [
      'Statistisch bieten Dezember (89 %) und Januar (88 %) die höchste tägliche Wahrscheinlichkeit für einen wolkenlosen Matterhorngipfel.',
      'Juni (48 %) und Juli (52 %) verzeichnen wegen thermischer Quellwolken am Nachmittag die geringste Ganztagssicht.',
      'Unabhängig von der Jahreszeit ist das Vormittagsfenster (06:00–11:00 MEZ) dramatisch klarer als der Nachmittag (12:00–18:00 MEZ).',
      'September und Oktober ("Goldener Herbst") bieten schneefreie Wanderwege kombiniert mit einer verlässlichen Schönwetter-Quote von 72–79 %.',
    ],
    sections: [
      {
        id: 'morning-vs-afternoon',
        heading: '1. Die goldene Zermatt-Regel: Warum der Vormittag den Nachmittag schlägt',
        paragraphs: [
          'Wenn Sie nur einen einzigen Ratschlag für Zermatt beherzigen: Stellen Sie den Wecker früh. Im Frühling, Sommer und Frühherbst erwacht das Matterhorn um 06:30 Uhr oft vor tiefblauem Himmel, nur um gegen 13:30 Uhr komplett in Quellwolken zu verschwinden.',
          'Sobald die Morgensonne die dunklen Felswände des Mattertals erwärmt, steigt warme Luft auf (thermische Aufwinde). Erreicht diese Luft die Nullgradgrenze um 3.000 Meter, kondensiert die Feuchtigkeit direkt an den Berggraten. Unser Dashboard trennt jeden Tag in einen Vormittags- und Nachmittags-Score, damit Sie den klaren Morgen nicht verschlafen.',
        ],
        proTip: {
          label: 'Frühzug-Strategie',
          text: 'Nehmen Sie im Sommer die Gornergratbahn um 07:00 oder 07:36 Uhr, um den Riffelsee zu erreichen, bevor Thermik und Bergwind die Wasseroberfläche kräuseln.',
        },
      },
      {
        id: 'seasonal-breakdown',
        heading: '2. Die Jahreszeiten im statistischen Vergleich',
        paragraphs: [
          'Viele Urlauber vermuten im Hochsommer das beste Wetter. In der Hochgebirgsmeteorologie gilt jedoch: Kalte Luft speichert weit weniger Feuchtigkeit und erzeugt kaum Quellwolken.',
        ],
        bulletPoints: [
          {
            bold: 'Winter (Nov–Feb • 84–89 % Klarsicht):',
            text: 'Stabile Kälte-Hochdrucklagen sorgen für kristallklare Fernsicht ohne thermische Wolkenbildung, oft bis zum Sonnenuntergang.',
          },
          {
            bold: 'Spätfrühling & Frühsommer (Mai–Juli • 48–58 % Klarsicht):',
            text: 'Schmelzwasser im Tal liefert Feuchtigkeit, die ab Mittag zu dichten Wolkentürmen aufsteigt. Früh aufstehen ist Pflicht.',
          },
          {
            bold: 'Herbst (Sep–Okt • 72–79 % Klarsicht):',
            text: 'Kühle Nächte bremsen die Thermik, während goldene Lärchen das Tal säumen – die fotogenste Zeit des Jahres.',
          },
        ],
      },
      {
        id: 'zermatt-weather-december',
        heading: 'Zermatt Wetter im Dezember',
        paragraphs: [
          'Der Dezember ist im 30-Jahres-Schnitt der klarste Monat: An 89 % der Tage ist der Matterhorngipfel frei. Kalte, stabile Luft erzeugt kaum Nachmittagsquellwolken, deshalb bleiben Vormittag und Nachmittag offen.',
          'Das Dorf liegt unter Schnee und die Seen sind gefroren. Es ist ein Monat zum Schauen und Skifahren, nicht für Spiegelungen. Für die Weihnachtswoche siehe den [Weihnachtsguide für Zermatt](/guides/christmas-in-zermatt-matterhorn). Die eigene Seite ist [Zermatt Wetter im Dezember](/guides/zermatt-weather-december).',
        ],
      },
      {
        id: 'zermatt-weather-september',
        heading: 'Zermatt Wetter im September',
        paragraphs: [
          'Im September ist der Gipfel an etwa 72 % der Tage klar. Kühlere Nächte stoppen die Nachmittagsthermik, die Juni und Juli verdirbt, und die Lärchen um die Ostwand werden gold.',
          'Die Wanderwege sind noch schneefrei und der Riffelsee ist eisfrei. Das ist der Monat für die Matterhorn-Spiegelung ab Sunnegga oder Rotenboden. Bei Sonnenaufgang starten. Am frühen Nachmittag kräuselt oft ein Wind den See, auch wenn der Gipfel klar bleibt. Die eigene Seite ist [Zermatt Wetter im September](/guides/zermatt-weather-september).',
        ],
      },
      {
        id: 'zermatt-weather-may',
        heading: 'Zermatt Wetter im Mai',
        paragraphs: [
          'Der Mai ist eine Übergangszeit. Die Klarheit liegt im Spätfrühlingsbereich von 48–58 %, und das verlässliche Fenster ist der Vormittag. Feuchtigkeit aus der Schneeschmelze speist schon am frühen Nachmittag Quellwolken.',
          'Der Riffelsee ist im Mai noch gefroren. Die Spiegelung lohnt erst ab Ende Juni. Nutzen Sie einen klaren Morgen für Gornergrat oder die Kirchbrücke und planen Sie den Nachmittag im Tal. Die eigene Seite ist [Zermatt Wetter im Mai](/guides/zermatt-weather-may).',
        ],
      },
      {
        id: 'how-many-days',
        heading: '3. Wie viele Tage Aufenthalt garantieren freie Sicht?',
        paragraphs: [
          'Bei nur einer Übernachtung im Juli liegt die Chance auf freie Sicht statistisch bei etwa 50 %. Bei drei vollen Vormittagen steigt die Wahrscheinlichkeit für mindestens ein Zeitfenster mit Score ≥ 8/10 im Sommer auf über 88 % und im Herbst/Winter auf über 98 %.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Welcher Monat ist der allerbeste für einen wolkenfreien Gipfel?',
        answer:
          'Statistisch sind es Dezember (89 %) und Januar (88 %). Wer wandern möchte, wählt Ende September bis Mitte Oktober (72–79 % Schönwetterquote).',
      },
      {
        question: 'Wann trifft das erste Sonnenlicht das Matterhorn?',
        answer:
          'Erstes Alpenglühen berührt die Ostwand etwa 5 bis 10 Minuten vor dem offiziellen Zermatter Sonnenaufgang: ca. 05:30 Uhr im Juni, 06:50 Uhr im September und 08:00 Uhr im Dezember.',
      },
    ],
  },

  'zermatt-cloudy-rainy-day-guide': {
    title: 'Zermatt bei Nebel und Regen: Der smarte Schlechtwetter-Notfallplan',
    shortTitle: 'Schlechtwetter-Plan',
    description: 'Sicht-Index bei 4/10 oder weniger? Sparen Sie sich das CHF 100+ Ticket im Nebel und entdecken Sie Zermatts beste Schlechtwetter-Alternativen.',
    category: 'Bad Weather',
    heroStat: {
      label: 'Ersparnis',
      value: 'CHF 110+',
      detail: 'Pro Person gespart durch Verzicht auf Nebelfahrten',
    },
    keyTakeaways: [
      'Kaufen Sie kein Bergbahnticket zum Gornergrat oder Glacier Paradise, wenn unser Live-Index ≤ 4/10 anzeigt – oben stehen Sie mitten in der Wolke.',
      'Prüfen Sie zuerst, ob es sich um bodennahen Hochnebel handelt: Gelegentlich ist das Dorf (1.608 m) bedeckt, während ab 3.000 m strahlende Sonne herrscht.',
      'Die Gornerschlucht wirkt bei bewölktem Himmel durch das tosende Schmelzwasser und den smaragdgrünen Serpentinitfels noch dramatischer.',
      'Das unterirdische Matterhorn Museum Zermatlantis und alpine Wellnessbäder machen selbst Regentage zum Erlebnis.',
    ],
    sections: [
      {
        id: 'check-inversion-first',
        heading: '1. Inversion prüfen: Echtes Schlechtwetter oder nur Talnebel?',
        paragraphs: [
          'Bevor Sie die Berge aufgeben, prüfen Sie die Wolkenschichten auf unserem Dashboard: Zeigt die tiefe Schicht (2.000 m) 90 %, während Mittel- und Hochwolken unter 15 % liegen, herrscht eine klassische Temperaturinversion.',
          'In diesem Fall durchbricht die Bahn auf der Fahrt nach oben die Nebeldecke und bringt Sie in strahlenden Sonnenschein über einem weißen Wolkenmeer. Bestätigen Sie das Bild vor der Abfahrt auf den Webcams.',
        ],
        proTip: {
          label: 'Webcam-Check',
          text: 'Wenn Mittelwolken über 75 % betragen und die Gornergrat-Kamera weißes Rauschen zeigt, bleiben Sie im Tal.',
        },
      },
      {
        id: 'valley-alternatives',
        heading: '2. Die besten Aktivitäten im Tal bei Sicht-Scores von 1/10 bis 4/10',
        paragraphs: [
          'Liegt echtes Schlechtwetter über den Walliser Alpen, schonen Sie das Reisebudget und nutzen Sie diese Alternativen:',
        ],
        bulletPoints: [
          {
            bold: 'Zermatlantis (Matterhorn Museum):',
            text: 'Unterirdisches Museum am Kirchplatz mit dem gerissenen Originalseil der tragischen Erstbesteigung von 1865.',
          },
          {
            bold: 'Gornerschlucht:',
            text: 'In 20 Minuten zu Fuß erreichbar. Holzstege führen über gurgelnde türkise Gletscherstrudel zwischen steilen Felswänden.',
          },
          {
            bold: 'Historisches Hinterdorf:',
            text: 'Uralte Walliser Stadel auf Steinplatten gegen Mäuse – im weichen, diffusen Regenlicht besonders fotogen.',
          },
          {
            bold: 'Alpines Day-Spa & Fondue:',
            text: 'Gönnen Sie sich einen Wellnesstag in einem Hotel-Spa und genießen Sie anschließend ein Bergkräuter- oder Trüffel-Käsefondue.',
          },
        ],
      },
      {
        id: 'day-trip-escape',
        heading: '3. Die Mikroklima-Flucht per Bahn ins Rhonetal (45–70 Min.)',
        paragraphs: [
          'Da die Viertausender rund um Zermatt Wolken oft festhalten, ist das Rhonetal (Visp, Brig, Sion) bei Zermatter Regen häufig trocken und sonnig. Mit dem Swiss Travel Pass erreichen Sie Brig in 60 Minuten für einen Besuch des Stockalperschlosses oder der Thermalbäder Brigerbad.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Gibt es bei schlechter Sicht Geld für Bergbahntickets zurück?',
        answer:
          'Nein. Gekaufte Tickets für Gornergrat oder Glacier Paradise werden bei Nebel nicht erstattet. Prüfen Sie deshalb stets morgens die Live-Werte.',
      },
      {
        question: 'Ist die Gornerschlucht bei Regen geöffnet?',
        answer:
          'Ja, während der gesamten Sommersaison (Mai bis Oktober). Feste Schuhe und Regenjacke genügen; die Holzstege sind mit Geländern gesichert.',
      },
    ],
  },

  'best-matterhorn-photo-viewpoints': {
    title: 'Beste Matterhorn-Fotospots & Sonnenaufgangsorte in Zermatt',
    shortTitle: 'Beste Fotospots & Sonnenaufgang',
    description: 'Genaue Standorte, Gehzeiten und Sonnenstände: Kirchbrücke, Stellisee, Riffelsee, Findeln und Mürini im Fotografen-Check.',
    category: 'Fotografie',
    heroStat: {
      label: 'Top-Spiegelungsseen',
      value: '2.537 m & 2.757 m',
      detail: 'Stellisee (Blauherd) & Riffelsee (Rotenboden)',
    },
    keyTakeaways: [
      'Die Kirchbrücke mitten im Dorf ist der kostenlose Top-Spot für das goldene Alpenglühen an der Spitze.',
      'Der Stellisee (2.537 m) bietet Steine im Vordergrund; der Riffelsee (2.757 m) liefert die dramatischste Großaufnahme.',
      'Für perfekte Bergsee-Spiegelungen muss der Wind unter 12 km/h liegen – Windkarte im Dashboard beachten.',
      'Für Zermatter Chaletdächer kombiniert mit dem Matterhorn lohnt der 10-Minuten-Aufstieg zum Aussichtspunkt Mürini/Riedweg.',
    ],
    comparisonTable: {
      caption: 'Übersicht der Top-Fotospots in Zermatt',
      headers: ['Fotospot', 'Höhe', 'Erreichbarkeit ab Zermatt', 'Bestes Lichtfenster'],
      rows: [
        [
          'Kirchbrücke (Dorfzentrum)',
          '1.615 m',
          '5 Min. vom Bahnhof zu Fuß (kostenlos)',
          '15 Min. vor Sonnenaufgang (Alpenglühen)',
        ],
        [
          'Mürini / Riedweg',
          '1.710 m',
          '12 Min. bergan via Riedstrasse (kostenlos)',
          'Blaue Stunde & Sonnenaufgang (Dächer & Berg)',
        ],
        [
          'Riffelsee (Rotenboden)',
          '2.757 m',
          '28 Min. Gornergratbahn + 5 Min. Fußweg',
          '07:30–10:00 MEZ (Spiegelung bei Windstille)',
        ],
        [
          'Stellisee (Blauherd)',
          '2.537 m',
          'Standseilbahn Sunnegga + Gondel Blauherd + 20 Min. Fußweg',
          '08:30–11:00 MEZ oder Abendglühen',
        ],
        [
          'Findeln & Chez Vrony',
          '2.050 m',
          '35 Min. Abstieg von Sunnegga',
          'Vormittag (Altholz-Weiler & Blumenwiesen)',
        ],
      ],
    },
    sections: [
      {
        id: 'village-sunrise',
        heading: '1. Kostenlose Dorf-Spots: Kirchbrücke & Mürini',
        paragraphs: [
          'Sie brauchen kein teures Bergbahnticket für preisgekrönte Fotos. Da die Sonne im Osten aufgeht, treffen die ersten Strahlen die Spitze der Ostwand, während Zermatt noch im blauen Schatten liegt.',
          'Seien Sie 20 Minuten vor Sonnenaufgang auf der Kirchbrücke über der Mattervispa. Wer das Stativ-Gedränge meiden will, geht 10 Minuten bergauf Richtung Riedweg (Mürini), wo traditionelle Holzdächer das Auge direkt zum Gipfel führen.',
        ],
        proTip: {
          label: 'Morgen-Check',
          text: 'Schauen Sie um 05:30 Uhr auf unsere Gornergrat-Morgenprognose: Hohe Schleierwolken (20–35 %) intensivieren die Morgenfarben; Mittelwolken über 50 % verdecken das Glühen.',
        },
      },
      {
        id: 'mirror-lakes',
        heading: '2. Stellisee vs. Riffelsee: Welcher Bergsee ist die richtige Wahl?',
        paragraphs: [
          'Zermatt besitzt zwei weltbekannte Bergseen für Matterhorn-Spiegelungen. Zwei Bedingungen müssen stimmen: Der See muss eisfrei sein (Mitte Juni bis Mitte Oktober) und der Wind muss ruhen (< 12 km/h).',
        ],
        bulletPoints: [
          {
            bold: 'Riffelsee (2.757 m via Rotenboden):',
            text: 'Nur 5 Minuten von der Bahnstation Rotenboden entfernt. Da der Zug ab 07:00 Uhr fährt, erreichen Sie den See vor dem Aufkommen thermischer Winde. Tipp: Bei Kräuselungen 100 m weiter zum kleineren Unteren Riffelsee gehen.',
          },
          {
            bold: 'Stellisee (2.537 m via Sunnegga–Blauherd):',
            text: 'Malerische Steine im Wasser und weite Talperspektive. Da die Bahn erst gegen 08:30 Uhr öffnet, wählen Sie Tage mit Wind unter 10 km/h.',
          },
        ],
      },
    ],
    faqs: [
      {
        question: 'Wann sind Riffelsee und Stellisee zugefroren?',
        answer:
          'Auf über 2.500 Metern liegt von November bis Anfang Juni Schnee und Eis. Wasser-Spiegelungen sind nur von Mitte/Ende Juni bis Oktober möglich.',
      },
      {
        question: 'Warum spiegelte sich der Berg trotz Sonnenschein nicht?',
        answer:
          'Schon leichter Wind mit 15 km/h kräuselt die Wasseroberfläche. Prüfen Sie immer die Windstärke auf unserem Dashboard und weichen Sie an den windgeschützten Uferabschnitt aus.',
      },
    ],
  },

  'matterhorn-banner-cloud-fohn-wind': {
    title: 'Warum hat das Matterhorn eine Fahnenwolke? (Föhn & Physik)',
    shortTitle: 'Fahnenwolke & Föhn-Physik',
    description: 'Die alpine Physik hinter der berühmten Lee-Fahnenwolke: Wie Südföhn selbst an wolkenlosen Tagen Wolken erzeugt und wie unser Algorithmus dies berechnet.',
    category: 'Meteorologie',
    heroStat: {
      label: 'Gipfelhöhe',
      value: '4.478 m',
      detail: 'Isolierte Pyramide erzeugt Lee-Wirbel und Druckabfall',
    },
    keyTakeaways: [
      'Die isolierte Pyramidenform des Matterhorns wirkt bei Höhenwind wie eine Tragfläche und erzeugt auf der windabgewandten Leeseite einen Unterdruck-Wirbel.',
      'Aufsteigende Luft kühlt adiabatisch ab und kondensiert zu einer stationären Fahnenwolke, die am Gipfelgrat befestigt scheint.',
      'Standard-Wetter-Apps melden oft "Sonnig / 0 % Regen" in Zermatt (1.608 m), obwohl die oberen 500 Meter des Berges in einer Wolkenfahne stecken.',
      'Unser Algorithmus bestraft gezielt feuchte Südföhn-Vektoren (150°–210° über 30 km/h), um Fahnenwolken verlässlich vorherzusagen.',
    ],
    sections: [
      {
        id: 'banner-cloud-physics',
        heading: '1. Die physikalischen Gesetze der Matterhorn-Fahnenwolke',
        paragraphs: [
          'Fast jeder Zermatt-Besucher erlebt dieses Phänomen: Der Himmel über der Schweiz ist stahlblau – nur am Matterhorngipfel weht eine dichte weiße Rauchfahne.',
          'Anders als ziehende Wolken entsteht und vergeht die Fahnenwolke permanent am selben Ort. Prallt Höhenwind gegen die Luvseite des 4.478 m hohen Berges, strömt die Luft seitlich und darüber hinweg. Auf der windgeschützten Leeseite bildet sich durch Strömungsabriss ein markanter lokaler Unterdruck.',
          'Feuchtere Luft aus tieferen Schichten wird in diesen Sog hineingezogen. Durch die Druckentlastung kühlt sie unter den Taupunkt ab und bildet Nebeltröpfchen. Wenige hundert Meter leewärts sinkt die Luft wieder ab, erwärmt sich und die Wolke löst sich im Nichts auf.',
        ],
        proTip: {
          label: 'Fahnenwolke lesen',
          text: 'Weht die Fahne nach Norden/Nordosten Richtung Zermatt, drückt Südföhn aus Italien und das Wetter verschlechtert sich oft in 12–24 Stunden. Zeigt sie nach Süden, dominiert trockenere Nordluft.',
        },
      },
      {
        id: 'fohn-wind-effect',
        heading: '2. Warum herkömmliche Wetter-Apps in Zermatt versagen',
        paragraphs: [
          'Smartphone-Apps berechnen das Wetter meist für das Tal auf 1.608 Metern Höhe, wo es warm, trocken und windgeschützt sein kann.',
          'Fast 3.000 Höhenmeter weiter oben am Gipfel herrschen jedoch völlig andere Wind- und Feuchtigkeitsverhältnisse. Deshalb bezieht isthematterhornvisible.com die Daten direkt auf 3.089 m und 3.883 m und verhängt Abzüge bei Südföhn aus 150°–210° über 30 km/h.',
        ],
        bulletPoints: [
          {
            bold: 'Mittelhohe Wolken (60 % Gewichtung):',
            text: 'Liegen auf 3.000–4.000 m direkt in der Sichtachse zwischen Aussichtsplattform und 4.478 m Gipfel.',
          },
          {
            bold: 'Tiefe Wolken (25 % Gewichtung):',
            text: 'Beeinträchtigen die Talsicht von der Kirchbrücke, können aber von den Gipfeln überblickt werden.',
          },
          {
            bold: 'Hohe Cirren (15 % Gewichtung):',
            text: 'Eiskristallwolken über 5.000 m verdecken den Umriss selten und führen nur zu minimalen Punktabzügen.',
          },
        ],
      },
    ],
    faqs: [
      {
        question: 'Ist das Matterhorn bei einer Fahnenwolke unsichtbar?',
        answer:
          'Nein, meist weht die Wolke nur an einer Flanke heraus, während 70–85 % des Berges klar sichtbar bleiben (typischerweise Score 6/10 oder 7/10). Bei extremem Föhn kann sich die Wolke jedoch zu einer dichten Föhnmauer aufbauen.',
      },
      {
        question: 'Warum verschwindet die Fahnenwolke nachts?',
        answer:
          'Ohne Sonneneinstrahlung erlöschen die thermischen Aufwinde im Tal, die Feuchtigkeit in den Lee-Wirbel nachliefern. Daher ist der Gipfel in der Dämmerung und am frühen Morgen oft völlig frei.',
      },
    ],
  },

  'zurich-geneva-to-zermatt-day-trip': {
    title: 'Zug Zürich–Zermatt | Fahrzeiten, Visp & Live Go/No-Go',
    shortTitle: 'Tagesausflug Zürich & Genf',
    description: 'SBB-Umsteigetipps in Visp, Fahrzeiten und unsere Go/No-Go-Entscheidungsregel für Tagesausflüge ab Zürich (3h 14m) und Genf (3h 45m).',
    category: 'Day Trips',
    heroStat: {
      label: 'Hin- & Rückfahrt',
      value: '6,5 – 7,5 Std.',
      detail: '3h 14m je Weg ab Zürich HB • 3h 45m ab Genf',
    },
    keyTakeaways: [
      'Ein Tagesausflug nach Zermatt erfordert 6,5 bis 7,5 Stunden Gesamtreisezeit per Bahn – bei Score ≥ 8/10 ein unvergessliches Erlebnis, bei Score ≤ 4/10 eine teure Enttäuschung.',
      'Weil man selbst bei Abfahrt um 06:30 Uhr erst gegen 10:00 Uhr in Zermatt ankommt, fällt das Besuchsfenster auf den späten Vormittag – prüfen Sie vor Abfahrt sowohl den Vormittags- als auch den Nachmittags-Score.',
      'Im Sommer bilden sich oft ab 13:00 Uhr Quellwolken; Tagesgäste sollten morgens sofort die Gornergratbahn nehmen und erst danach das Dorf erkunden.',
      'Zeigt unser Score morgens ≤ 5/10, weichen Sie mit dem Swiss Travel Pass auf sonnigere Regionen aus (z. B. Vierwaldstättersee/Rigi, Berner Oberland oder Montreux).',
    ],
    comparisonTable: {
      caption: 'SBB-Bahnverbindungen nach Zermatt',
      headers: ['Startbahnhof', 'Fahrzeit', 'Umstieg', 'Empfohlene Abfahrt', 'Ankunft Zermatt'],
      rows: [
        ['Zürich HB', '3h 14m', '1 Umstieg in Visp (7–9 Min. am selben Bahnsteig)', '06:02 oder 07:02 MEZ', '09:14 oder 10:14 MEZ'],
        ['Genf Cornavin', '3h 45m', '1 Umstieg in Visp (IR90 auf MGB-Zahnradbahn)', '05:50 oder 06:24 MEZ', '09:51 oder 10:14 MEZ'],
        ['Bern', '2h 10m', '1 Umstieg in Visp (via Lötschberg-Basistunnel)', '07:07 oder 08:07 MEZ', '09:14 oder 10:14 MEZ'],
        ['Basel SBB', '3h 12m', '1 Umstieg in Visp', '06:03 oder 06:56 MEZ', '09:14 oder 10:14 MEZ'],
        ['Interlaken Ost', '2h 18m', '2 Umstiege in Spiez & Visp', '07:00 oder 08:00 MEZ', '09:14 oder 10:14 MEZ'],
      ],
    },
    sections: [
      {
        id: 'go-no-go-matrix',
        heading: '1. Die 06:00-Uhr-Entscheidungsregel vor dem Einsteigen',
        paragraphs: [
          'Der größte Fehler ist die starre Vorab-Buchung von Zermatt-Ausflügen von Zürich oder Genf aus. Zermatt liegt in einer tiefen Südalpen-Tasche an der Grenze zu Italien und ist meteorologisch vom Schweizer Mittelland entkoppelt: In Zürich kann es regnen, während das Matterhorn vor strahlend blauem Himmel steht – oder in Genf scheint die Sonne, während eine Südföhnmauer den Gipfel verhüllt.',
          'Werfen Sie vor Verlassen des Hotels um 06:00 Uhr einen Blick auf unseren Live-Score:',
        ],
        bulletPoints: [
          {
            bold: 'GO — Vormittag & Nachmittag bei 8/10 bis 10/10:',
            text: 'Sofort in den Zug steigen! Ein stabiles Hochdruckgebiet garantiert freie Sicht bis zum Abend.',
          },
          {
            bold: 'FRÜHAUFSTEHER-GO — Vormittag 8–10/10, Nachmittag sinkt auf 5–6/10:',
            text: 'Typisch für Mai bis August. Nur lohnend mit dem frühesten Zug (06:02 ab Zürich / 06:24 ab Genf). Bei Ankunft um 09:30/10:15 Uhr sofort auf den Gornergrat fahren, BEVOR Sie im Dorf zu Mittag essen.',
          },
          {
            bold: 'NO-GO — Beide Scores bei ≤ 4/10:',
            text: 'Fahrt absagen oder verschieben. 7 Stunden im Zug, um auf 3.089 m in eine weiße Nebelwand zu blicken, lohnen sich nie.',
          },
        ],
        proTip: {
          label: 'Geheimtipp Umstieg Visp',
          text: 'Keine Sorge vor den 7 Minuten Umsteigezeit in Visp: Die roten Züge der Matterhorn Gotthard Bahn warten direkt am Querbahnsteig. Setzen Sie sich im Zug Visp–Zermatt auf die LINKE Seite für die spektakulärsten Blicke in die Schluchten.',
        },
      },
      {
        id: 'perfect-day-trip-itinerary',
        heading: '2. Der ideale Tagesablauf: Zuerst auf den Gipfel, danach ins Dorf',
        paragraphs: [
          'Da Wolken im Gebirge fast immer nachmittags entstehen, drehen Sie den typischen Ablauf um: Verschwenden Sie keinen klaren Vormittagshimmel mit Bummeln auf der Bahnhofstrasse.',
          'Nach Ankunft um 09:14 oder 10:14 Uhr gehen Sie direkt über den Bahnhofsplatz (60 Meter) zur Gornergratbahn. Oben auf 3.089 m liegt die Ostwand im perfekten Morgenlicht. Bei der Talfahrt um 12:00 Uhr steigen Sie am Rotenboden (2.757 m) aus, um die Matterhorn-Spiegelung im Riffelsee zu fotografieren. Gegen 13:30 Uhr sind Sie zurück im Dorf für Mittagessen, Kirchbrücke und die historischen Stadel im Hinterdorf.',
        ],
      },
      {
        id: 'gornergrat-vs-glacier-daytrip',
        heading: '3. Gornergrat vs. Glacier Paradise bei knappem Zeitbudget',
        paragraphs: [
          'Für einen Tagesausflug ist der Gornergrat fast immer die überlegene Wahl gegenüber dem Matterhorn Glacier Paradise (3.883 m). Der Gornergrat-Bahnhof liegt unmittelbar gegenüber dem SBB-Bahnhof – Sie sparen sich den 15-minütigen Fußmarsch oder E-Bus durch das gesamte Dorf zur Seilbahnstation.',
          'Zudem bedeutet die Fahrt von Zürich (408 m) direkt auf 3.883 m einen Höhenunterschied von fast 3.500 Metern in wenigen Stunden, was häufig zu Kopfschmerzen führt. Der Gornergrat (3.089 m) ist verträglicher und bietet während der gesamten Auffahrt den klassischen Toblerone-Blick.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Gilt der Swiss Travel Pass für die Fahrt von Zürich/Genf nach Zermatt?',
        answer:
          'Ja! Der Swiss Travel Pass (und die SBB Spartageskarte) deckt 100 % der Strecke von Zürich, Genf, Basel oder Bern bis Zermatt ab (inklusive der Schmalspurbahn ab Visp). Zudem erhalten Sie 50 % Rabatt auf die Gornergratbahn und das Glacier Paradise.',
      },
      {
        question: 'Kann man den Zermatt-Tagesausflug auch im Winter machen?',
        answer:
          'Ja, von November bis Februar herrschen die klarsten Tage des Jahres (84–89 %). Da die Sonne im Dezember bereits gegen 16:45 Uhr untergeht, empfiehlt sich unbedingt die Abfahrt um 06:02 oder 07:02 Uhr.',
      },
      {
        question: 'Wann fährt der letzte Zug von Zermatt zurück?',
        answer:
          'Züge fahren alle 30 bis 60 Minuten bis ca. 20:37 Uhr (Ankunft Zürich HB ca. 00:05 Uhr, Genf ca. 00:20 Uhr). Die meisten Tagesgäste nehmen die Züge um 16:37, 17:37 oder 18:37 Uhr nach dem Alpenglühen an der Kirchbrücke.',
      },
    ],
  },
  'christmas-in-zermatt-matterhorn': {
    title: 'Weihnachten in Zermatt: Winterzauber, gemütliche Chalets & Matterhorn-Blick',
    shortTitle: 'Weihnachten in Zermatt',
    description: 'Alles über Weihnachten im autofreien Zermatt: schneebedeckte Holzchalets, 89 % Dezember-Fernsicht am Matterhorn, Fondue am Kamin und geöffnete Bergbahnen.',
    category: 'Winter & Festtage',
    heroStat: {
      label: 'Dezember-Fernsicht',
      value: '89 % Klarheit',
      detail: 'Statistisch höchste Gipfel-Sichtwahrscheinlichkeit des gesamten Jahres',
    },
    keyTakeaways: [
      'Der Dezember bietet mit 89 % die höchste Sichtwahrscheinlichkeit des Jahres auf den Matterhorn-Gipfel dank stabiler Kaltluft und fehlender Sommerthermik.',
      'Zermatt ist autofrei; an Weihnachten prägen Pferdeschlitten, knirschender Schnee und funkelnde Lichterketten die romantischen Gassen.',
      'Weihnachtsessen (Walliser Käsefondue, Raclette und Gourmetmenüs) sind oft Wochen im Voraus ausgebucht – reservieren Sie frühzeitig.',
      'Gornergratbahn und Klein Matterhorn fahren 365 Tage im Jahr – ein Gipfelausflug am Weihnachtsmorgen auf 3.089 m ist unvergesslich.',
    ],
    comparisonTable: {
      caption: 'Weihnachtsausflüge und Winterhighlights in Zermatt auf einen Blick',
      headers: [
        'Aktivität / Tradition',
        'Ort / Route',
        'Beste Zeit',
        'Warum es an Weihnachten besonders ist',
      ],
      rows: [
        [
          'Weihnachtsspaziergang und Glühwein',
          'Bahnhofstrasse und Kirchplatz',
          '17:00–19:30 Uhr (CET, Dämmerung)',
          'Beleuchteter Weihnachtsbaum, Chorgesang an der Kirche St. Mauritius, heiße Maroni.',
        ],
        [
          'Winterpanorama Gornergrat',
          'Zahnradbahn ab Zermatt (33 Min.)',
          '09:00–14:00 Uhr (CET)',
          'Fahrt durch tief verschneite Arvenwälder auf 3.089 m, 360°-Blick auf 29 Viertausender.',
        ],
        [
          'Historischer Rundgang im Hinterdorf',
          'Hinter dem Hotel Monte Rosa',
          'Blaue Stunde (16:30–17:30 Uhr CET)',
          '500 Jahre alte Lärchenstadel (Gädi) unter einer dicken Schicht Pulverschnee.',
        ],
        [
          'Käsefondue am Kamin',
          'Traditionelle Stübli und Chalets in Zermatt',
          '19:00–22:00 Uhr (CET)',
          'Walliser AOP-Käse mit Knoblauch und Fendant, neben dem knisternden Feuer geschmolzen.',
        ],
        [
          'Matterhorn Glacier Palace und Skifahren',
          'Klein Matterhorn (3.883 m)',
          '10:00–14:30 Uhr (CET)',
          'Europas höchste Pisten und Eisskulpturen in Gängen 15 m tief im Gletscher.',
        ],
      ],
    },
    sections: [
      {
        id: 'why-zermatt-christmas-is-magical',
        heading: '1. Warum Zermatt das Inbild eines alpinen Weihnachtsziels ist',
        image: {
          src: '/guides/zermatt-christmas-chalets.jpg',
          alt: 'Traditionelle Holzhäuser in Zermatt unter dickem Winterschnee, im Hintergrund das Matterhorn',
          caption: 'Historische, sonnengebräunte Lärchenchalets unter frischem Dezember-Pulverschnee in Zermatt.',
        },
        paragraphs: [
          'Kaum ein Ort verkörpert den märchenhaften Geist von Weihnachten so wie Zermatt. Tief im Tal unter der steilen Pyramide des Matterhorns (4.478 m) wird das autofreie Dorf jeden Dezember zu einer lebendigen Schneekugel.',
          'Verbrennungsmotoren sind seit 1966 verboten. Es gibt kein Verkehrsrauschen und keinen Schneematsch von Auspuffen, nur knirschenden Neuschnee, das leise Summen kleiner Elektrobusse und das rhythmische Bimmeln der Messingglocken an Pferdeschlitten vor Häusern wie dem Mont Cervin Palace und dem Grand Hotel Zermatterhof.',
          'An der Bahnhofstrasse und am Kirchplatz legen sich warme Lichterketten um schneeschwere Tannen. In den Schaufenstern liegen handgeschnitzte Holzornamente, Confiserie-Schokolade und dampfende Kupferkessel mit Glühwein und gerösteten Maroni.',
        ],
        proTip: {
          label: 'Geheimtipp',
          text: 'Schlendern Sie in der Dämmerung (16:45 Uhr CET) ins Hinterdorf direkt hinter der Bahnhofstrasse. Die schmalen Gassen zwischen den Lärchenstadel aus dem 16. Jahrhundert wirken unter schwerem Schnee wie ein Wintergemälde aus dem 19. Jahrhundert.',
        },
      },
      {
        id: 'december-weather-matterhorn-clarity',
        heading: '2. Dezemberwetter: Warum Weihnachten den klarsten Himmel des Jahres hat',
        paragraphs: [
          'Viele vermuten, der Sommer bringe das beste Bergwetter. 30 Jahre offizielle Schweizer Alpenmessungen sagen das Gegenteil. Der Dezember ist statistisch der klarste Monat des Jahres in Zermatt, mit 89 % Gipfelsicht auf das Matterhorn.',
          'Im Winter bestimmen kalte, stabile und trockene Hochdrucklagen die Walliser Alpen. Anders als im Juli und August, wenn die Talsonne nachmittags Thermik (anabatische Winde) auslöst und bis 13:00 Uhr CET dichte Quellwolken aufbaut, bleibt die Dezemberluft den ganzen Tag kristallklar. Ob Sie um 10:00 oder um 15:00 Uhr CET zum Matterhorn schauen: Der Berg steht scharf gezeichnet vor tiefblauem Himmel.',
        ],
        bulletPoints: [
          {
            bold: 'Klirrende Kälte hält die Sicht rein:',
            text: 'Die Dezembertemperaturen im Dorf liegen bei -6 °C bis +1 °C, auf den Gipfelplattformen (3.089–3.883 m) bei -14 °C bis -8 °C. Kalte Luft trägt kaum Feuchtigkeit, deshalb bleibt der Gipfelnebel aus.',
          },
          {
            bold: 'Frühes Alpenglühen (16:30–16:50 Uhr CET):',
            text: 'Weil die Sonne Ende Dezember früh untergeht, müssen Sie nicht bis in den späten Abend warten, um das rosa-violette Alpenglühen an der Ostwand zu fotografieren.',
          },
          {
            bold: 'Live-Telemetrie bei Föhnsturm prüfen:',
            text: 'Auch im Winter können südliche Föhnfronten Böen über 45 km/h am Klein Matterhorn bringen. Prüfen Sie morgens unseren Live-Sichtwert von 1–10 (AM/PM), bevor Sie in die Bahn steigen.',
          },
        ],
      },
      {
        id: 'cozy-dining-fireside-fondue',
        heading: '3. Gemütliches Essen: Fondue am Kamin, Raclette und Weihnachtsmenüs',
        image: {
          src: '/guides/zermatt-christmas-fondue.jpg',
          alt: 'Blubberndes Schweizer Käsefondue mit Brot und Wein, im Hintergrund das verschneite Matterhorn',
          caption: 'Walliser Käsefondue und ein Glas kühler Fendant nach einem Tag im Schnee.',
        },
        paragraphs: [
          'Nach einem klaren Wintermorgen auf der Gornergratbahn oder auf den Pisten Richtung Cervinia wärmt kaum etwas so wie ein blubberndes Caquelon mit echtem Schweizer Käsefondue.',
          'Die Stübli in Zermatt, darunter Ferdinand by Cervo, Saycheese!, Chez Vrony und die Schäferstube, schmelzen Walliser AOP-Käse mit trockenem Weißwein, Knoblauch und einem Schuss Kirsch. Heißer Käse über kleinen Kartoffeln (Raclette) am knisternden Steinofen, während draußen leise Schnee fällt: das ist das Weihnachtsgefühl.',
        ],
        proTip: {
          label: 'Strategie fürs Weihnachtsessen',
          text: 'Die Tische am Heiligabend (24. Dezember) und am ersten Weihnachtstag (25. Dezember) sind Wochen oder Monate im Voraus weg. Viele Restaurants bieten festliche Menüs. Reservieren Sie schon im Oktober oder November.',
        },
      },
      {
        id: 'christmas-day-mountain-excursions',
        heading: '4. Bergausflüge am Weihnachtstag: Gornergrat und Glacier Paradise',
        image: {
          src: '/guides/zermatt-christmas-morning-train.jpg',
          alt: 'Verschneite Alpenhänge über dem Dorf Zermatt unter einer geschlossenen Pulverschneedecke',
          caption: 'Winterwunder: Die hochalpinen Hänge über Zermatt sind am Weihnachtstag für Zahnradbahn und Winterwandern geöffnet.',
        },
        paragraphs: [
          'Viele Erstbesucher fragen sich, ob die Bergbahnen am Weihnachtstag fahren. Die Antwort ist eindeutig ja: Die Gornergratbahn und die Bahnen zum Matterhorn Glacier Paradise verkehren an 365 Tagen im Jahr, sofern das Wetter mitspielt.',
          'Die geheizte Zahnradbahn am Weihnachtsmorgen ab Zermatt Bahnhof ist eine Fahrt, die bleibt. Der rote Zug steigt durch schneeschwere Lärchen- und Arvenwälder, erreicht die offenen Schneefelder am Riffelberg (2.582 m) und am Rotenboden (2.815 m) und endet auf der Terrasse des Gornergrat (3.089 m). Von dort blicken Sie über die gefrorenen Zungen von Gorner- und Findelgletscher auf die schneeweiße Nord- und Ostwand des Matterhorns.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Schneit es in Zermatt an Weihnachten immer?',
        answer:
          'Zermatt liegt auf 1.608 Metern, das Skigebiet steigt bis 3.883 Meter. Damit gehört der Ort zu den schneesichersten der Alpen. Ein weißes Weihnachten im Dorf ist praktisch sicher, und die hohen Pisten sind im ganzen Dezember vollständig eingeschneit.',
      },
      {
        question: 'Fahren Bergbahnen und Skilifte am Weihnachtstag in Zermatt?',
        answer:
          'Ja. Gornergratbahn, Sunnegga-Standseilbahn und die Bahnen zum Matterhorn Glacier Paradise fahren am 24., 25. und 26. Dezember nach dem üblichen Winterfahrplan. Prüfen Sie am Reisetag morgens den Live-Sichtwert von 1–10 (AM/PM), damit der Gipfel frei ist.',
      },
      {
        question: 'Sind Restaurants und Läden in der Weihnachtswoche in Zermatt geöffnet?',
        answer:
          'Ja. Von der Weihnachtswoche bis Neujahr ist Hochsaison. Lebensmittelgeschäfte und Skiverleihe bleiben offen, am Abend des 24. und am 25. Dezember mit etwas kürzeren Zeiten. Restaurants und Bars laufen auf voller Kapazität. Für Heiligabend und den ersten Weihnachtstag brauchen Sie eine Tischreservation.',
      },
      {
        question: 'Wie sieht man das Matterhorn am Weihnachtstag am besten?',
        answer:
          'Nehmen Sie um 08:24 oder 09:00 Uhr CET die Gornergratbahn ab Zermatt. Setzen Sie sich bergwärts auf die rechte Seite: Die verschneite Ostwand bleibt im warmen Morgenlicht fast die ganze Fahrt im Fenster.',
      },
    ],
  },
  'gornergrat-railway-vs-glacier-express': {
    title:
      'Gornergrat Bahn vs. Glacier Express: Die zwei berühmtesten Züge der Schweiz im Vergleich',
    shortTitle: 'Gornergrat vs. Glacier Express',
    description:
      'Vergleich der zwei legendären Bahnen in Zermatt: 33 Min. Steilfahrt auf 3.089 m mit Matterhorn-Blick vs. 8 Stunden Panoramazug quer durch die Alpen. Inklusive Swiss Travel Pass Rabatte, Sitzplatzreservierung & Live-Status.',
    category: 'Tagesausflüge',
    heroStat: {
      label: 'Fahrten-Vergleich',
      value: '33 Min. vs. 7h 45m',
      detail:
        'Vertikaler Berggipfel (3.089 m) vs. 291 km Panoramareise quer durch die Schweizer Alpen',
    },
    keyTakeaways: [
      'Die Gornergratbahn (GGB) ist eine reine Zahnrad-Bergbahn: In 33 Minuten erklimmt sie 1.485 Höhenmeter von Zermatt (1.604 m) auf den Gornergrat (3.089 m) mit direkter Frontalansicht auf die Matterhorn-Ostwand.',
      'Der Glacier Express (GEX) ist ein transalpiner Panoramazug: Er legt in ca. 8 Stunden 291 km über 291 Brücken und durch 91 Tunnel zwischen Zermatt und St. Moritz zurück.',
      'Swiss Travel Pass: Auf die Gornergratbahn erhalten Sie 50 % Rabatt (keine Reservierung nötig); der Glacier Express ist zu 100 % im Pass inbegriffen, erfordert jedoch eine OBLIGATORISCHE Sitzplatzreservierung (CHF 39–49).',
      'Beide Züge halten direkt gegenüber am Bahnhof Zermatt und lassen sich perfekt zu einem zweitägigen Alpentrip kombinieren.',
      'Besuchen Sie unsere Live-Übersicht auf der [Zugvergleichsseite](/trains) für aktuelle Sichtweiten am Gornergrat, Ticketpreise und Sitzplatz-Tipps.',
    ],
    comparisonTable: {
      caption: 'Gornergratbahn vs. Glacier Express: Merkmale und Tickets im Vergleich (2026)',
      headers: ['Merkmal', 'Gornergratbahn (GGB)', 'Glacier Express (GEX)'],
      rows: [
        [
          'Hauptzweck',
          'Senkrechter Gipfelausflug und Matterhorn-Aussicht',
          'Große transalpine Panoramafahrt',
        ],
        [
          'Route und Endpunkt',
          'Zermatt (1.604 m) ↔ Gornergrat (3.089 m)',
          'Zermatt (Wallis) ↔ St. Moritz / Davos (Graubünden)',
        ],
        [
          'Fahrtdauer',
          '33 Minuten je Richtung',
          '7 Stunden 45 Minuten (volle Strecke, 291 km)',
        ],
        [
          'Gleis und Antrieb',
          'Abt-Doppelzahnstange (Meterspur, 1.000 mm)',
          'Adhäsion und Zahnstangenabschnitte (Matterhorn Gotthard Bahn / RhB)',
        ],
        [
          'Höhengewinn / Scheitel',
          '+1.485 m (Scheitel: Gipfel 3.089 m)',
          'Scheitel: Oberalppass (2.033 m) / Tiefstpunkt: Chur (585 m)',
        ],
        [
          'Saison',
          '365 Tage im Jahr (keine Betriebspause)',
          'Anfang Dezember bis Ende Oktober (Werkstattpause November bis Anfang Dezember)',
        ],
        [
          'Swiss Travel Pass',
          '50 % Rabatt (Retour CHF 51–66)',
          'Billett zu 100 % inklusive (Pflichtreservierung extra)',
        ],
        [
          'Sitzplatzreservierung',
          'Nicht nötig (freier Zustieg, optionaler Priority-Pass CHF 7)',
          'PFLICHT (CHF 39 Nebensaison / CHF 49 Hochsommer)',
        ],
        [
          'Eurail / Interrail',
          'Kein Rabatt (volles Billett)',
          'Billett zu 100 % inklusive (Pflichtreservierung extra)',
        ],
        [
          'Beste Sitzseite',
          'Rechts bergwärts ab Zermatt (Matterhorn-Blick)',
          'Links bei der Abfahrt Zermatt–Disentis / beide Seiten in der Rheinschlucht',
        ],
        [
          'Matterhorn-Sicht',
          'Durchgehend auf der ganzen Fahrt und am Gipfel',
          'Nur bei Abfahrt oder Ankunft im Mattertal',
        ],
        [
          'Höhepunkte',
          'Riffelsee-Spiegelung, Gornergletscher, 29 Viertausender',
          'Landwasserviadukt, Rheinschlucht, See am Oberalppass',
        ],
      ],
    },
    sections: [
      {
        id: 'gornergrat-overview',
        heading: 'Gornergratbahn (GGB): Europas höchste offene Zahnradbahn',
        image: {
          src: '/guides/gornergrat-bahn-cogwheel-train.jpg',
          alt: 'Zahnradzug der Gornergratbahn auf der steilen Bergstrecke zum Gornergrat, im Hintergrund das Matterhorn',
          caption: 'Die Gornergratbahn steigt durch Alpwiesen und Lärchenwälder zur Aussichtsterrasse auf 3.089 Metern.',
        },
        paragraphs: [
          '1898 als erste vollständig elektrische Zahnradbahn der Schweiz eröffnet, ist die Gornergratbahn (GGB) ein Stück Ingenieurskunst. In 33 Minuten überwinden die rot-goldenen Züge 1.485 Höhenmeter von Zermatt (1.604 m) auf den Felsgrat des Gornergrat (3.089 m).',
          'Anders als Panoramazüge in Flusstälern ist die Gornergratbahn eine reine Steilfahrt. Während das Zahnrad Steigungen bis 20 % hinaufklettert, öffnet sich die Ostwand des Matterhorns immer weiter. Unterwegs halten die Züge in Findelbach (über ein steinernes Viadukt), Riffelalp (2.211 m), Riffelberg (2.582 m) und Rotenboden (2.815 m), dem Ausgangspunkt des berühmten zehnminütigen Wegs zum Riffelsee, wo sich das Matterhorn im Bergwasser spiegelt.',
          'An der Bergstation (3.089 m) treten Sie direkt auf die Terrasse des historischen 3100 Kulmhotel Gornergrat. Von dort liegt ein freier Rundblick über das Monte Rosa (4.634 m, höchster Gipfel der Schweiz), die Zunge des Gornergletschers und 29 Gipfel über 4.000 Metern.',
          'Für die Auffahrt und die aktuelle Wolkendecke am Gipfel gibt es den [Gornergrat-Guide im Zug-Hub](/trains#gornergrat).',
        ],
        bulletPoints: [
          {
            bold: 'Tempo und Dauer:',
            text: '33 Minuten je Richtung auf 9,3 km Gleis, ganzjährig, mit Abfahrten alle 24 bis 48 Minuten.',
          },
          {
            bold: 'Höhenprofil:',
            text: 'Von 1.604 m in Zermatt auf 3.089 m am Gornergrat (+1.485 m Höhengewinn).',
          },
          {
            bold: 'Einfach einsteigen:',
            text: 'Keine Sitzplatzreservierung im Voraus. QR-Code oder Swiss Pass an der Sperre scannen und einsteigen.',
          },
          {
            bold: 'Zwischenhalte zum Wandern:',
            text: 'In Rotenboden aussteigen für den Spiegelweg zum Riffelsee, oder am Riffelberg für ein Bergessen mit Blick auf das Matterhorn.',
          },
        ],
        proTip: {
          label: 'Beste Sitzseite',
          text: 'Setzen Sie sich in Zermatt auf die RECHTE Seite des Wagens. Die rechten Fenster zeigen die Matterhorn-Pyramide durchgehend, sobald der Zug über die Waldgrenze steigt.',
        },
      },
      {
        id: 'glacier-express-overview',
        heading: 'Glacier Express (GEX): "Der langsamste Schnellzug der Welt"',
        image: {
          src: '/guides/glacier-express-panoramic-train.jpg',
          alt: 'Panoramazug Glacier Express mit bis in die Decke gezogenen Fenstern in den Schweizer Alpen unter klarem Himmel',
          caption: 'Der Glacier Express gleitet durch die Alpen; die Panoramafenster ziehen sich bis in die Decke.',
        },
        paragraphs: [
          'Ist die Gornergratbahn ein senkrechter Lift in den alpinen Himmel, ist der Glacier Express die langsame Querung über den Rücken der Schweizer Alpen. Er verbindet Zermatt im Wallis mit St. Moritz im Engadin und legt 291 Kilometer (181 Meilen) in etwa 7 Stunden und 45 Minuten zurück.',
          'Unterwegs quert der Zug 291 Viadukte, durchfährt 91 Tunnel und erklimmt den Oberalppass auf 2.033 Metern (6.670 Fuß), den höchsten Punkt der Strecke und die Quelle des Rheins. Zu den Höhepunkten zählen das Landwasserviadukt, eine 65 Meter hohe gekrümmte Kalksteinbrücke, die direkt in einen Felstunnel führt, und die Rheinschlucht (Ruinaulta), oft der Grand Canyon der Schweiz genannt.',
          'Die Wagen sind Panoramawagen mit hohen, bis in die Decke gezogenen Scheiben. Drei-Gänge-Menüs werden an Bord gekocht und an den Platz serviert, während die Landschaft vorbeizieht.',
          'Sitzpläne, Speisekarten und Buchungstipps stehen im [Glacier-Express-Routen- und Sitzplatzguide](/trains#glacier-express).',
        ],
        bulletPoints: [
          {
            bold: 'Route und Dauer:',
            text: '291 km zwischen Zermatt und St. Moritz, etwa 7 Stunden und 45 Minuten.',
          },
          {
            bold: 'Ingenieursleistungen:',
            text: '291 Steinviadukte und 91 Tunnel, darunter die Kehrtunnel der Albula-Linie, UNESCO-Welterbe.',
          },
          {
            bold: 'Excellence Class:',
            text: 'Luxusklasse mit garantiertem Einzelfensterplatz, Concierge, privater Glacier Bar und einem regionalen Fünf-Gänge-Menü mit Weinbegleitung.',
          },
          {
            bold: 'Saisonpause:',
            text: 'Anders als die Gornergratbahn, die an 365 Tagen fährt, pausiert der Glacier Express für die Werkstatt von Ende Oktober bis Mitte Dezember.',
          },
        ],
        proTip: {
          label: 'Pflichtreservierung',
          text: 'Anders als in normalen Schweizer Zügen dürfen Sie den Glacier Express nicht ohne reservierten Sitzplatz betreten, auch nicht mit unlimitiertem Swiss Travel Pass 1. Klasse. Die Buchung öffnet genau 93 Tage im Voraus auf dem offiziellen Portal. Setzen Sie einen Kalenderalarm: Panoramasitzplätze an Spitzentagen im Sommer und in den Skiferien sind in wenigen Stunden weg.',
        },
      },
      {
        id: 'pass-rules-pricing',
        heading: 'Preis, Sitzplatzreservierung und Swiss Travel Pass beim Glacier Express',
        paragraphs: [
          'Viele nehmen an, der Swiss Travel Pass gelte für jeden Zug in der Schweiz gratis. Das Netz ist eng verzahnt, doch Gornergratbahn und Glacier Express fallen unter völlig verschiedene Tarife.',
          'Wer die Regeln vorher kennt, vermeidet Zuschläge am Schalter und abgewiesene Einstiege am Bahnsteig.',
        ],
        bulletPoints: [
          {
            bold: 'Gornergratbahn mit Swiss Travel Pass:',
            text: 'Sie erhalten 50 % auf das normale Erwachsenenbillett (Retour im Sommer von etwa CHF 132 auf CHF 66, im Winter von etwa CHF 102 auf CHF 51). Die Fahrt ist nicht gratis, weil die Bahn als Gipfelausflug gilt. Eine Sitzplatzreservierung ist nicht nötig.',
          },
          {
            bold: 'Gornergrat mit Halbtax:',
            text: 'Derselbe Rabatt von 50 % wie mit dem Swiss Travel Pass. Kinder von 6–15 Jahren mit Swiss Family Card fahren gratis, wenn ein zahlender Elternteil dabei ist.',
          },
          {
            bold: 'Glacier Express mit Swiss Travel Pass:',
            text: 'Das Billett ist zu 100 % gedeckt, auch mit Eurail / Interrail. Die Sitzplatzreservierung bleibt Pflicht: CHF 39 in der Nebensaison (Frühling/Herbst) oder CHF 49 im Hochsommer und im Winter. Ohne Reservierungsbeleg wird der Einstieg verweigert.',
          },
          {
            bold: 'Zuschlag Excellence Class:',
            text: 'Gültiges Billett 1. Klasse oder Swiss Travel Pass 1. Klasse plus nicht rabattierbarer Zuschlag von CHF 470 pro Person.',
          },
        ],
        proTip: {
          label: 'Live-Vergleich von Billett und Pass',
          text: 'Tarife, Kinderregelung und Hunde nebeneinander auf unserer [Vergleichsseite der Schweizer Bergbahnen](/trains).',
        },
      },
      {
        id: 'which-train-to-choose',
        heading: 'Welchen Zug nehmen, oder wie Sie beide kombinieren',
        paragraphs: [
          'Beide Züge starten am Bahnhofsplatz in Zermatt, direkt gegenüber. Sie ergänzen sich. Was zuerst kommt, hängt von der Reisedauer und davon ab, was Sie sehen wollen:',
          '1. Nur ein oder zwei Tage in Zermatt: Nehmen Sie die Gornergratbahn. Ziel ist das Matterhorn, der Spiegelweg am Riffelsee und die Höhe von 3.089 Metern. In etwas mehr als einer halben Stunde stehen Sie direkt vor dem Berg.',
          '2. Unterwegs zwischen der Ostschweiz und Zermatt: Nehmen Sie den Glacier Express als landschaftliche Fernverbindung. Statt der Regionalzüge durch den langen Lötschberg-Basistunnel wird der Reisetag selbst zum Ausflug.',
          '3. Das alpine Programm für 48 Stunden: Kommen Sie am späten Nachmittag mit dem Glacier Express an und schauen Sie auf die Felswände des Mattertals. Nach dem Fondue im Dorf nehmen Sie um 08:00 Uhr die erste Gornergratbahn und erwischen das goldene Morgenlicht auf Gornergletscher und Matterhorn.',
          'Live-Sichtwerte und Ausweichrouten vor der Buchung stehen auf dem [Matterhorn-Sicht-Dashboard](/).',
        ],
      },
      {
        id: 'live-tracking-and-weather',
        heading: 'Live-Wetter am Gipfel und warum der Zeitpunkt zählt',
        paragraphs: [
          'Ein grundlegender Unterschied ist die Wetterabhängigkeit. Der Glacier Express fährt vor allem durch tiefe Täler und über Pässe. Auch bei Wolken oder leichtem Regen bleiben Schluchten, Wasserfälle und Kalkwände eindrucksvoll.',
          'Die Gornergratbahn ist eine offene Gipfelfahrt. Liegt eine tiefe Stratusdecke oder eine Föhn-Fahnenwolke auf dem Grat bei 3.089 m, kann die Sicht auf der Terrasse auf null fallen. Matterhorn und Gornergletscher verschwinden.',
          'Gornergrat-Billetts gelten flexibel für den gewählten Kalendertag. Kaufen Sie sie nicht Tage im Voraus, ohne die Gipfellage zu prüfen. Vor dem Einstieg den Echtzeit-[Gornergrat-Sichtwert im Live-Zugtracker](/trains) ansehen: Er verbindet hohe Wolken, Gipfelwebcams und Windscherung zu einem klaren Wert von 1–10, Go oder No-Go.',
        ],
        proTip: {
          label: 'Inversionswolken',
          text: 'Im Spätherbst und Winter kann Zermatt unter dichtem Nebel (Nebeldecke) liegen, während der Gornergrat auf 3.089 m in klarem Blau über einem Wolkenmeer steht. Schauen Sie auf die Höhenwebcams, bevor Sie aus einem grauen Dorf auf schlechtes Gipfelwetter schließen.',
        },
      },
    ],
    faqs: [
      {
        question: 'Fahren Gornergratbahn und Glacier Express vom selben Bahnhof in Zermatt ab?',
        answer:
          'Ja, die Abfahrten liegen etwa 50 Meter auseinander am Bahnhof Zermatt. Der Glacier Express hält an den Bahnsteigen der Matterhorn Gotthard Bahn (MGB) / SBB. Die Gornergratbahn hat ein eigenes historisches Empfangsgebäude direkt gegenüber auf dem Bahnhofsplatz.',
      },
      {
        question: 'Ist die Gornergratbahn mit dem Swiss Travel Pass zu 100 % gratis?',
        answer:
          'Nein. Sie gilt als hochalpine Ausflugsbahn, der Pass gibt 50 % Rabatt statt Freifahrt. 2026 kostet ein Erwachsenen-Retourbillett mit Pass etwa CHF 66 im Sommer und CHF 51 im Winter.',
      },
      {
        question: 'Kann ich nur einen Abschnitt des Glacier Express fahren statt der vollen 8 Stunden?',
        answer:
          'Ja. Beliebte kürzere Stücke sind Zermatt–Brig (1 Std. 20 Min.), Zermatt–Andermatt (3 Std. 15 Min.) und Chur–St. Moritz über das Landwasserviadukt (2 Std.). Für jeden Abschnitt ist die Sitzplatzreservierung Pflicht.',
      },
      {
        question: 'Welche Seite hat auf der Gornergratbahn die bessere Sicht?',
        answer:
          'Bergwärts von Zermatt zum Gornergrat immer rechts sitzen, talwärts links. Die rechten Fenster zeigen fast die gesamten 33 Minuten direkt auf das Matterhorn.',
      },
      {
        question: 'Was passiert, wenn ich ein Gornergrat-Billett habe und das Matterhorn in Wolken steckt?',
        answer:
          'Normale Gornergrat-Billetts gelten für jeden Zug am gewählten Kalendertag, sind nach der Aktivierung in der Regel nicht erstattbar. Prüfen Sie vor dem Kauf am Schalter den Live-Sichtwert von 1–10 (AM/PM) und die Gipfelwebcams auf dem [Zug-Dashboard](/trains).',
      },
    ],
  },
  'what-is-the-matterhorn': {
    title: 'Was ist das Matterhorn? | Höhe, Lage und Sicht heute',
    shortTitle: 'Was ist das Matterhorn?',
    description:
      'Das Matterhorn ist eine 4.478 m hohe Pyramide auf der Grenze Schweiz–Italien über Zermatt. Höhe, Lage und ob es heute sichtbar ist.',
    category: 'Aussichtspunkte',
    heroStat: {
      label: 'Gipfelhöhe',
      value: '4.478 m',
      detail: 'Zermatt, Wallis, auf der Grenze Schweiz–Italien',
    },
    keyTakeaways: [
      'Das Matterhorn ist eine vierseitige Pyramide. Italienisch heisst es Cervino, französisch Cervin.',
      'Die Matterhorn Höhe ist 4.478 Meter (14.692 Fuss).',
      'Es steht über Zermatt im Wallis und über Breuil-Cervinia im Aostatal.',
      'Prüfen Sie den Live-Score, bevor Sie ein Ticket kaufen. Gornergrat zeigt die Ostwand, Klein Matterhorn die Südseite.',
    ],
    sections: [
      {
        id: 'what-it-is',
        heading: 'Was ist das Matterhorn?',
        paragraphs: [
          'Das Matterhorn ist eine vierseitige Felspyramide in den Walliser Alpen. Von Zermatt wirkt der Gipfel wie eine einzelne Spitze, deshalb heisst die Ostansicht oft Toblerone.',
          'Der Berg hat drei Namen. Deutsch und Englisch sagen Matterhorn, Italienisch Cervino, Französisch Cervin. Gemeint ist dieser Gipfel, nicht die Achterbahn in Disneyland und nicht eine Pipeline.',
        ],
      },
      {
        id: 'where-and-height',
        heading: 'Wo liegt das Matterhorn, und wie hoch ist es?',
        paragraphs: [
          'Die Matterhorn Höhe ist 4.478 Meter, also 14.692 Fuss. Der Gipfel steht auf der Grenze zwischen der Schweiz und Italien.',
          'Auf der Schweizer Seite ragt er über Zermatt im Kanton Wallis auf. Auf der italienischen Seite über Breuil-Cervinia im Aostatal. Ost- und Nordwand sind die klassische Sicht aus dem Dorf, vom Gornergrat und vom Riffelsee. Süd- und Westwand schauen nach Italien und sind die Ansicht vom Matterhorn Glacier Paradise.',
        ],
      },
      {
        id: 'how-to-see-it',
        heading: 'Ist das Matterhorn heute sichtbar?',
        paragraphs: [
          'Der [Live-Sichtwert](/) aktualisiert sich alle 15 Minuten. 8–10 bedeutet eine freie Pyramide. 1–2 bedeutet Wolken. Wetter-Apps für das Dorf lesen Zermatt auf 1.608 m und verpassen die Wolken am Gipfel.',
          'Der Gornergrat (3.089 m) zeigt die Ostwand und ist mit der Zahnradbahn erreichbar. Das Klein Matterhorn (3.883 m) ist die Seilbahn auf die Südseite. Die Kirchbrücke im Dorf ist gratis. Nutzen Sie die Gornergrat-Webcam und die Klein-Matterhorn-Webcam auf der Startseite, bevor Sie ein Ticket kaufen.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Was ist das Matterhorn?',
        answer:
          'Eine vierseitige Pyramide in den Walliser Alpen, auf Italienisch Cervino und auf Französisch Cervin. Der Gipfel liegt 4.478 m über Zermatt.',
      },
      {
        question: 'Wo liegt das Matterhorn?',
        answer:
          'Auf der Grenze Schweiz–Italien. Die Schweizer Seite liegt über Zermatt im Wallis, die italienische über Breuil-Cervinia im Aostatal.',
      },
      {
        question: 'Wie hoch ist das Matterhorn?',
        answer: 'Die Matterhorn Höhe ist 4.478 Meter (14.692 Fuss).',
      },
    ],
  },
  'zermatt-weather-december': {
    title: 'Zermatt Wetter im Dezember',
    shortTitle: 'Wetter im Dezember',
    description: 'Der Dezember ist der klarste Monat in Zermatt, mit 89 % Chance auf einen freien Matterhorngipfel. Schnee, gefrorene Seen und der Live-Check.',
    category: 'Klimatologie',
    heroStat: { label: 'Klare Tage', value: '89 %', detail: 'Klarster Monat der 30-Jahres-Reihe' },
    keyTakeaways: [
      'An 89 % der Dezembertage ist der Gipfel frei. Vormittag und Nachmittag bleiben offen.',
      'Das Dorf liegt unter Schnee, der Riffelsee ist gefroren.',
      'Prüfen Sie den Live-Score, bevor Sie ein Gornergrat- oder Skiticket kaufen.',
    ],
    sections: [
      {
        id: 'december-clarity',
        heading: 'Zermatt Wetter im Dezember',
        paragraphs: [
          'Der Dezember ist im 30-Jahres-Schnitt der klarste Monat: An 89 % der Tage ist der Matterhorngipfel frei. Kalte, stabile Luft erzeugt kaum Nachmittagsquellwolken, deshalb bleiben Vormittag und Nachmittag offen.',
          'Das Dorf liegt unter Schnee und die Seen sind gefroren. Es ist ein Monat zum Schauen und Skifahren, nicht für Spiegelungen. Für die Weihnachtswoche siehe den [Weihnachtsguide für Zermatt](/guides/christmas-in-zermatt-matterhorn).',
          'Der [Live-Sichtwert](/) gilt für heute. Das ganze Jahr steht in [Zermatt Wetter nach Monat](/guides/best-time-to-see-matterhorn).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Wie ist das Wetter in Zermatt im Dezember?',
        answer: 'Kalt und ungewöhnlich klar. An etwa 89 % der Tage ist das Matterhorn frei, auch am Nachmittag.',
      },
      {
        question: 'Spiegelt sich das Matterhorn im Dezember im Riffelsee?',
        answer: 'Nein. Der Riffelsee ist von November bis Anfang Juni gefroren und schneebedeckt.',
      },
    ],
  },
  'zermatt-weather-september': {
    title: 'Zermatt Wetter im September',
    shortTitle: 'Wetter im September',
    description: 'Im September ist der Gipfel an etwa 72 % der Tage klar. Die Wege sind offen und der Riffelsee ist eisfrei.',
    category: 'Klimatologie',
    heroStat: { label: 'Klare Tage', value: '72 %', detail: 'Kühle Nächte, goldene Lärchen, offene Seen' },
    keyTakeaways: [
      'Etwa 72 % der Septembertage sind klar, nachdem die Sommerquellwolken nachlassen.',
      'Die Wege sind schneefrei und der Riffelsee kann die Ostwand spiegeln.',
      'Bei Sonnenaufgang starten. Am frühen Nachmittag kräuselt oft der Wind den See.',
    ],
    sections: [
      {
        id: 'september-clarity',
        heading: 'Zermatt Wetter im September',
        paragraphs: [
          'Im September ist der Gipfel an etwa 72 % der Tage klar. Kühlere Nächte stoppen die Nachmittagsthermik, die Juni und Juli verdirbt, und die Lärchen um die Ostwand werden gold.',
          'Die Wanderwege sind noch schneefrei und der Riffelsee ist eisfrei. Das ist der Monat für die Matterhorn-Spiegelung ab Sunnegga oder Rotenboden. Bei Sonnenaufgang starten.',
          'Prüfen Sie am Morgen den [Live-Sichtwert](/). Das Jahr steht in [Zermatt Wetter nach Monat](/guides/best-time-to-see-matterhorn).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Wie ist das Wetter in Zermatt im September?',
        answer: 'An etwa 72 % der Tage klar. Die Nächte sind kühl genug, um die Quellwolken des Hochsommers zu bremsen.',
      },
      {
        question: 'Ist der Riffelsee im September eisfrei?',
        answer: 'Ja. Die Spiegelung geht von Ende Juni bis Ende Oktober. Im September liegen Sie in diesem Fenster. Gehen Sie zum Sonnenaufgang.',
      },
    ],
  },
  'zermatt-weather-may': {
    title: 'Zermatt Wetter im Mai',
    shortTitle: 'Wetter im Mai',
    description: 'Im Mai ist Zermatt an 48–58 % der Vormittage klar. Am Nachmittag ziehen Wolken auf, und der Riffelsee ist noch gefroren.',
    category: 'Klimatologie',
    heroStat: { label: 'Klare Tage', value: '48–58 %', detail: 'Verlässlich nur vor Mittag' },
    keyTakeaways: [
      'Der Mai liegt bei 48–58 % klaren Tagen.',
      'Das brauchbare Fenster ist der Vormittag. Schneeschmelze speist Quellwolken.',
      'Der Riffelsee ist noch gefroren. Die Spiegelung lohnt ab Ende Juni.',
    ],
    sections: [
      {
        id: 'may-clarity',
        heading: 'Zermatt Wetter im Mai',
        paragraphs: [
          'Der Mai ist eine Übergangszeit. Die Klarheit liegt bei 48–58 %, und das verlässliche Fenster ist der Vormittag. Feuchtigkeit aus der Schneeschmelze speist schon am frühen Nachmittag Quellwolken.',
          'Der Riffelsee ist im Mai noch gefroren. Nutzen Sie einen klaren Morgen für Gornergrat oder die Kirchbrücke und planen Sie den Nachmittag im Tal.',
          'Prüfen Sie den [Live-Sichtwert](/), bevor Sie losgehen. Die übrigen Monate stehen in [Zermatt Wetter nach Monat](/guides/best-time-to-see-matterhorn).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Wie ist das Wetter in Zermatt im Mai?',
        answer: 'Ein Übergangsmonat. Etwa die Hälfte der Tage ist am Morgen klar, am frühen Nachmittag ziehen Quellwolken auf.',
      },
      {
        question: 'Kann man den Riffelsee im Mai fotografieren?',
        answer: 'Der See ist im Mai noch gefroren. Flüssige Spiegelungen beginnen Ende Juni.',
      },
    ],
  },
  'glacier-express': {
    title: 'Glacier Express Preis, Route & Sitzplatzreservierung',
    shortTitle: 'Glacier Express',
    description: 'Preise, die Pflichtreservierung, die Route Zermatt–St. Moritz und der Unterschied zum Bernina Express.',
    category: 'Tagesausflüge',
    heroStat: { label: 'Sitzplatzreservierung', value: 'CHF 39–49', detail: 'Pflicht, zusätzlich zum Billett' },
    keyTakeaways: [
      'Einfach 2. Klasse etwa CHF 159, 1. Klasse etwa CHF 272. Dazu kommt die Reservierung.',
      'Die Reservierung kostet CHF 39 in der Nebensaison und CHF 49 im Hochsommer. Sie öffnet 93 Tage im Voraus.',
      'Excellence Class kostet CHF 470 zusätzlich zur 1. Klasse. Es gibt 20 Plätze.',
      'Der Bernina Express ist dieselbe Bahngesellschaft in einem anderen Tal. Er fährt nicht nach Zermatt.',
    ],
    sections: [
      {
        id: 'glacier-express-price',
        heading: 'Glacier Express Preis',
        paragraphs: [
          'Das einfache Billett kostet etwa CHF 159 in der 2. Klasse oder CHF 272 in der 1. Klasse, ohne Sitzplatz. Swiss Travel Pass und Eurail decken das Billett, nicht die Reservierung.',
          'Excellence Class ist ein Panoramawagen mit 20 Plätzen im 1+1-Layout. Der Zuschlag beträgt CHF 470 zur 1. Klasse und enthält Empfang und ein Fünf-Gänge-Menü.',
        ],
      },
      {
        id: 'seat-reservation',
        heading: 'Sitzplatzreservierung',
        paragraphs: [
          'Jeder Fahrgast braucht eine Reservierung: CHF 39 in der Nebensaison, CHF 49 im Hochsommer. Auch Kinder mit Gratisbillett zahlen sie. Die Buchung öffnet 93 Tage vor der Fahrt.',
          'Der Panoramazug pausiert etwa von Mitte Oktober bis Mitte Dezember. Regionale Züge der Matterhorn Gotthard Bahn und der RhB fahren dieselben Gleise weiter, ohne Glacier-Express-Reservierung und ohne Speisewagen.',
        ],
      },
      {
        id: 'route',
        heading: 'Route von Zermatt nach St. Moritz',
        paragraphs: [
          'Die ganze Fahrt dauert etwa acht Stunden von Zermatt (1.604 m) nach St. Moritz (1.775 m), über den Oberalppass auf 2.033 m. Einzelne Züge fahren Richtung Davos. Rheinschlucht und Landwasserviadukt bei Filisur sind die bekannten Abschnitte.',
          'Ab Zürich oder Genf steigt man in Visp in die Matterhorn Gotthard Bahn nach Zermatt um und steigt dort in den Glacier Express. Kürzere Abschnitte wie Zermatt–Brig oder Zermatt–Andermatt brauchen ebenfalls eine Reservierung.',
        ],
      },
      {
        id: 'bernina-express',
        heading: 'Glacier Express oder Bernina Express',
        paragraphs: [
          'Beide Züge sind Panoramazüge der RhB und der Matterhorn Gotthard Bahn, und sie ersetzen einander nicht. Der Glacier Express quert die Alpen von Zermatt nach St. Moritz. Der Bernina Express fährt von Chur oder St. Moritz über den Berninapass nach Tirano in Italien.',
          'Den Glacier Express nimmt man für Matterhorn, Oberalp und Zermatt. Den Bernina Express für die Bernina-Gletscher und die Abfahrt nach Italien. St. Moritz ist der einzige gemeinsame Punkt.',
        ],
      },
      {
        id: 'today',
        heading: 'Lohnt die Fahrt heute?',
        paragraphs: [
          'Die [Zugseite](/trains) zeigt, ob der Glacier Express nach Fahrplan fährt oder in der Herbstpause ist, plus den Live-Score am Gornergrat. Ein hoher Score bedeutet freie Sicht am Zermatter Ende. Er sagt nichts über das Wetter am Oberalp.',
          'Die Gornergratbahn ist ein anderer Zug: 33 Minuten Zahnradbahn auf 3.089 m, ohne Pflichtreservierung. Der Vergleich steht im [Guide Gornergrat gegen Glacier Express](/trains).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Was kostet der Glacier Express?',
        answer: 'Etwa CHF 159 einfach in der 2. Klasse oder CHF 272 in der 1. Klasse, plus Pflichtreservierung von CHF 39 oder CHF 49. Der Swiss Travel Pass deckt das Billett, nicht die Reservierung.',
      },
      {
        question: 'Brauche ich eine Sitzplatzreservierung?',
        answer: 'Ja. Ohne Reservierung wird der Zustieg verweigert. Buchen Sie, wenn die Plätze 93 Tage vorher öffnen. Excellence Class kostet CHF 470 extra und hat 20 Plätze.',
      },
      {
        question: 'Welche Route fährt der Glacier Express?',
        answer: 'Zermatt nach St. Moritz in etwa acht Stunden, über Visp, Brig, Andermatt und den Oberalppass, einzelne Züge Richtung Davos. Der Bernina Express ist eine eigene Linie von St. Moritz nach Tirano.',
      },
    ],
  },
  'hotels-with-matterhorn-view': {
    title: 'Hotels mit Matterhorn-Blick',
    shortTitle: 'Hotels mit Blick',
    description: 'Welche Zimmer die Ostwand sehen, welche am Spiegelweg liegen und welche über dem Talnebel bleiben.',
    category: 'Aussichtspunkte',
    heroStat: { label: 'Fällt zuerst aus', value: 'Dorf', detail: 'Ostwandzimmer auf 1.620 m verschwinden im Talnebel' },
    keyTakeaways: [
      'Dorfzimmer sehen die Ostwand und verlieren den Gipfel zuerst, wenn die Wolkenuntergrenze sinkt.',
      'Das Riffelalp Resort liegt auf dem Weg zum Riffelsee. Sunnegga ist eine Tagesterrasse, kein Hotel.',
      'Riffelhaus und Kulmhotel Gornergrat liegen über dem Nebel, der das Dorf verdeckt.',
    ],
    sections: [
      {
        id: 'village-east-face',
        heading: 'Ostwand aus dem Dorf',
        paragraphs: [
          'Zimmer im Dorf blicken das Tal hinauf auf die Ostwand. The Omnia steht am Hang über der Kirche, das Mont Cervin Palace schaut vom Dorfboden auf den Gipfel. Beide sind zu Fuss von der Kirchbrücke erreichbar.',
          'Das ist die Sicht, die zuerst ausfällt. Eine Wolkendecke auf 2.000–2.500 m verdeckt den Gipfel im Dorf, während der Gornergrat auf 3.089 m noch frei ist. Prüfen Sie den [Live-Sichtwert](/) und die [Dorfsicht](/viewpoints/zermatt-village).',
        ],
      },
      {
        id: 'riffelsee-and-sunnegga',
        heading: 'Sunnegga und Riffelsee',
        paragraphs: [
          'Die Spiegelung ist die Ostwand im Riffelsee, fünf Gehminuten unter Rotenboden, und im Stellisee über Sunnegga. Sunnegga selbst ist eine Standseilbahn-Terrasse für den Tag. Am Seeufer steht kein Hotel.',
          'Das Riffelalp Resort 2222 liegt an diesem Weg, an der Gornergratbahn unterhalb von Rotenboden, mit der Ostwand vor dem Haus. Das Wasser spiegelt nur von Ende Juni bis Oktober, und nur bei Wind unter etwa 12 km/h. Der Tagescheck ist die [Riffelsee-Seite](/viewpoints/riffelsee). [Sunnegga](/viewpoints/sunnegga) ist die untere Terrasse.',
        ],
      },
      {
        id: 'gornergrat-side',
        heading: 'Seite Gornergrat',
        paragraphs: [
          'Zwei Hotels stehen über dem Nebel, der Zermatt füllt. Das Riffelhaus 1853 liegt am Riffelberg auf 2.582 m, eine Station unter Rotenboden. Das Kulmhotel Gornergrat steht an der Bergstation auf 3.089 m.',
          'Diese Zimmer behalten die Ostwand, wenn das Dorf in Wolken liegt, und verlieren sie, wenn der Gipfel selbst bedeckt ist. Der Score für diese Höhe steht auf der [Gornergrat-Seite](/viewpoints/gornergrat).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Welche Hotels haben Matterhorn-Blick?',
        answer: 'Im Dorf schauen The Omnia und das Mont Cervin Palace auf die Ostwand. Am Bahnweg schaut das Riffelalp Resort 2222 näher am Riffelsee auf denselben Gipfel. Riffelhaus 1853 und Kulmhotel Gornergrat liegen über dem Talnebel.',
      },
      {
        question: 'Welche Sicht verschwindet zuerst in den Wolken?',
        answer: 'Die Dorfsicht. Eine Wolkenuntergrenze um 2.000 m verdeckt den Gipfel an der Kirchbrücke, während die Gornergrat-Hotels noch darüber sind.',
      },
    ],
  },
};
