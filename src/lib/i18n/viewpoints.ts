import { ViewpointPageConfig, ViewpointPageSlug, VIEWPOINT_PAGES } from '../viewpoints';
import { Locale } from './config';

export interface ViewpointTranslation {
  name?: string;
  shortName?: string;
  title?: string;
  description?: string;
  aspectLabel?: string;
  transportSummary?: string;
  journeyTime?: string;
  bestTimeWindow?: string;
  heroStat?: { label: string; value?: string; detail: string };
  quickFacts?: { label: string; value?: string; detail: string }[];
  keyTakeaways?: string[];
  comparisonTable?: { caption: string; headers: string[]; rows: string[][] };
  sections?: {
    id: string;
    heading: string;
    paragraphs: string[];
    bulletPoints?: { bold: string; text: string }[];
    proTip?: { label: string; text: string };
  }[];
  faqs?: { question: string; answer: string }[];
  extraFaqs?: { question: string; answer: string }[];
}

const VIEWPOINT_TRANSLATIONS: Partial<Record<Locale, Partial<Record<ViewpointPageSlug, ViewpointTranslation>>>> = {
  de: {
    gornergrat: {
      name: 'Gornergrat Aussichtspunkt',
      shortName: 'Gornergrat',
      title: 'Gornergrat Webcam & Wetter | Matterhorn sehen',
      description: 'Echtzeit-Sichtbarkeitstelemetrie auf 3.089 m, Details zur Zahnradbahn ab Zermatt, Riffelsee-Spiegelung und 360°-Alpenpanorama.',
      aspectLabel: 'Ost- / Nordostwand (Klassische Toblerone-Perspektive)',
      transportSummary: 'Gornergrat Bahn (GGB) Zahnradbahn ab Zermatt Bahnhof',
      journeyTime: '33 Minuten pro Strecke',
      bestTimeWindow: '07:00–11:00 MEZ (Morgensonne beleuchtet die Ostwand)',
      keyTakeaways: [
        'Die Gornergrat Bahn verkehrt wetterunabhängig und ist die windstabilste Bergbahn in Zermatt.',
        'Morgendliche Fahrten vor 10:00 Uhr MEZ bieten die höchste Wahrscheinlichkeit für wolkenlose Sicht.',
        'Der Riffelsee liegt nur 5 Gehminuten bergab von der Station Rotenboden.',
      ],
      heroStat: {
        label: 'Sichtlinie',
        value: '9,1 km Ost',
        detail: 'Freie Sicht auf Hörnligrat und Ostwand (4.478 m)',
      },
      quickFacts: [
        {
          label: 'Blickrichtung',
          value: 'Klassisches Toblerone',
          detail: 'Ikonische, gekrümmte Ost- und Nordost-Silhouette der Pyramide',
        },
        {
          label: 'Windstabilität',
          value: 'Sehr hoch',
          detail: 'Die Zahnradbahn fährt, wenn Seilbahnen stehen',
        },
        {
          label: 'Bester Sitz',
          value: 'Rechts (bergauf)',
          detail: 'Rechts in Fahrtrichtung bergauf sitzen, dann bleibt das Matterhorn im Blick',
        },
        {
          label: 'Seehalt inklusive',
          value: 'Rotenboden (2.757 m)',
          detail: 'Eine Station unter dem Gornergrat, für den Spiegel des Riffelsees',
        },
      ],
      comparisonTable: {
        caption: 'Gornergrat Bahn: Stationen, Höhe und Matterhorn-Sicht',
        headers: ['Station', 'Höhe', 'Fahrzeit', 'Sichtlinie und warum hier aussteigen'],
        rows: [
          [
            'Zermatt Bahnhof',
            '1.608 m',
            '0 Min.',
            'Endstation direkt gegenüber den SBB-Gleisen; rechts einsteigen.',
          ],
          [
            'Riffelalp',
            '2.222 m',
            '16 Min.',
            'Obere Waldgrenze: das Matterhorn gerahmt von alten Arven.',
          ],
          [
            'Riffelberg',
            '2.582 m',
            '23 Min.',
            'Offene Alp mit Weitblick auf Hörnli- und Furgggrat.',
          ],
          [
            'Rotenboden (Riffelsee)',
            '2.815 m',
            '28 Min.',
            'Hier aussteigen: 5 Minuten zu Fuss zum Riffelsee (2.757 m) und zur Spiegelung.',
          ],
          [
            'Gornergrat Gipfel',
            '3.089 m',
            '33 Min.',
            '360°-Terrasse gegen Matterhorn, Gornergletscher und 29 Viertausender.',
          ],
        ],
      },
      sections: [
        {
          id: 'can-you-see-matterhorn-from-gornergrat-today',
          heading: '1. Den Sichtbarkeitswert vom Gornergrat lesen, bevor Sie das Ticket kaufen',
          paragraphs: [
            'Ein Retourbillet der Gornergrat Bahn kostet zwischen CHF 92 und CHF 132 (50 % Rabatt mit Swiss Travel Pass oder Halbtax) und wird bei Wolken nicht zurückerstattet. Die Höhenwerte zu prüfen, bevor Sie einsteigen, lohnt sich.',
            'Vom Dorf Zermatt auf 1.608 m sehen Sie nur die unterste Luftschicht. Die Gornergrat-Rechnung fragt Open-Meteo-Gitterpunkte ab, die auf 3.089 m bei 45.9840° N, 7.7845° E geeicht sind. Liegt der Wert bei 8/10 bis 10/10 («sichtbar»), sind Ostwand und Hörnligrat frei. Bei 6/10 oder 7/10 («teilweise sichtbar») ziehen Wolken durch, oder eine Lee-Fahne hängt am Gipfel.',
          ],
          bulletPoints: [
            {
              bold: 'Wert 8–10/10 (sofort fahren):',
              text: 'Mittelhohe Bewölkung (3.000 m) liegt unter 25 %, und die optische Sicht über den Gornergletscher reicht über 20 km.',
            },
            {
              bold: 'Wert 5–7/10 (Vormittag gegen Nachmittag prüfen):',
              text: 'Oft ein klares Morgenfenster (06:00–11:00 MEZ), danach Quellwolken. Nehmen Sie den frühesten Zug.',
            },
            {
              bold: 'Wert 1–4/10 (Ticket zurückhalten):',
              text: 'Dichter Stratus oder Niederschlag hüllt die Zone 3.000–4.478 m ein. Prüfen Sie die Gornergrat-360°-Webcam, bevor Sie über CHF 100 ausgeben.',
            },
          ],
          proTip: {
            label: 'Das Geheimnis der Talinversion',
            text: 'Wirkt das Dorf grau und neblig, vergleichen Sie die Karten «Talnebel unter 2.000 m» und «Mittelhohe Wolken (2.000–6.000 m)». Liegt der Talnebel über 70 % und die Mittelwolke unter 20 %, fährt die Gornergrat Bahn Sie aus dem Nebel in die Sonne auf 3.089 m.',
          },
        },
        {
          id: 'best-time-and-lighting-gornergrat',
          heading: '2. Beste Tageszeit am Gornergrat: Morgenalpenglühen gegen Nachmittagswolken',
          paragraphs: [
            'Der Gornergrat liegt ostsüdöstlich des Matterhorns. Deshalb fällt die Morgensonne bis 11:00 MEZ direkt auf die Ostwand und zeichnet Felsbänder, Schneefelder und den Hörnligrat scharf.',
            'Nach 14:00 MEZ wandert die Sonne hinter das Matterhorn Richtung Italien — die Wand gegen den Gornergrat liegt im Gegenlicht — und Talaufwinde kondensieren zu Nachmittagswolken am Gipfel.',
          ],
        },
        {
          id: 'gornergrat-train-tips',
          heading: '3. Zahnradbahn: Sitzplatz, Hop-on-hop-off und Riffelsee',
          paragraphs: [
            'Normale Tagesbilletts der Gornergrat Bahn sind nie ausverkauft. Kaufen Sie das Billett auf dem Telefon oder am Schalter fünf Minuten vor der Abfahrt, sobald der Sichtwert auf dieser Seite hoch ist.',
          ],
          bulletPoints: [
            {
              bold: 'Bergauf immer rechts sitzen:',
              text: 'Steigen Sie rechts ein (in Fahrtrichtung bergauf). Nach der Findelbachbrücke füllt das Matterhorn die rechten Fenster bis auf 3.089 m.',
            },
            {
              bold: 'In Rotenboden aussteigen:',
              text: 'Das Gornergrat-Billett gilt für Zwischenhalte. Rotenboden (2.815 m), eine Station unter dem Gipfel, liegt 5 Gehminuten über dem Riffelsee.',
            },
          ],
        },
      ],
      faqs: [
        {
          question: 'Sieht man das Matterhorn heute vom Gornergrat?',
          answer:
            'Lesen Sie den Live-Wert 1–10 für Vormittag und Nachmittag oben auf dieser Seite. Er wird alle 15 Minuten für den Gornergrat (3.089 m) aktualisiert. 8–10/10 bedeutet klare Sicht auf die Pyramide, 6–7/10 teilweise sichtbar mit leichten Gratwolken, 1–4/10 der Gipfel steckt in Wolken.',
        },
        {
          question: 'Lohnt sich der Gornergrat, wenn es im Dorf bewölkt ist?',
          answer:
            'Das hängt von der Wolkenhöhe ab. Ist die tiefe Bewölkung (unter 2.000 m) hoch, die mittelhohe (2.000–6.000 m) aber unter 25 %, liegt der Gornergrat (3.089 m) über dem Talnebel in der Sonne. Liegt die Mittelwolke über 70 %, steht die Station in der Wolke — heben Sie das Billett für ein klareres Fenster auf.',
        },
        {
          question: 'Welche Seite im Gornergrat-Zug hat die beste Matterhorn-Sicht?',
          answer:
            'Bergauf von Zermatt sitzen Sie rechts, talwärts links. Das Matterhorn bleibt auf der 33-minütigen Bergfahrt fast durchgehend im rechten Fenster.',
        },
        {
          question: 'Muss man Gornergrat-Billetts im Voraus buchen?',
          answer:
            'Nein. Die regulären Zahnradzüge brauchen keine Sitzreservation und sind nicht ausverkauft. Prüfen Sie am Reisetag den Morgenwert und die Roundshot-Webcam, bevor Sie kaufen.',
        },
      ],
    },
    'glacier-paradise': {
      name: 'Matterhorn Glacier Paradise (Klein Matterhorn)',
      shortName: 'Glacier Paradise',
      title: 'Klein Matterhorn Seilbahn, Webcam & Wetter',
      description: 'Europas höchste Seilbahnstation (3.883 m). Live-Wolkendiagnostik, 3S-Gondelbahn und spektakulärer Blick auf die Südwand des Matterhorns.',
      aspectLabel: 'Süd- / Südwestwand (Hochalpine Gletscherperspektive)',
      transportSummary: 'Matterhorn Express + 3S-Seilbahn ab Zermatt / Furi',
      journeyTime: '40–45 Minuten pro Strecke',
      bestTimeWindow: '08:30–12:30 MEZ (Beste Sichtverhältnisse vor der thermischen Mittagsbewölkung)',
      keyTakeaways: [
        'Mit 3.883 m liegt die Station oft über Inversionsnebeldecken im Tal.',
        'Bei Föhnwinden über 50 km/h können die obersten Seilbahnabschnitte vorsorglich schliessen.',
        'Ganzjähriges Skigebiet und Gletscherpalast tief im Inneren des Eises.',
      ],
      heroStat: {
        label: 'Höhe der Plattform',
        value: '3.883 m',
        detail: 'Europas höchste Seilbahnstation — 794 m höher als der Gornergrat',
      },
      quickFacts: [
        {
          label: 'Matterhorn-Winkel',
          value: 'Süd- / Furggwand',
          detail: 'Nahe, trapezförmige Wand, nicht der Toblerone-Haken',
        },
        {
          label: 'Inversionsvorteil',
          value: 'Über Nebel unter 3.500 m',
          detail: 'Steigt über winterliche und herbstliche Stratusdecken im Tal',
        },
        {
          label: 'Windempfindlichkeit',
          value: 'Föhn-Alarm',
          detail: 'Die 3S-Bahn kann bei Südwind über 50–55 km/h halten',
        },
        {
          label: 'Bei jedem Wetter',
          value: 'Gletscherpalast',
          detail: 'Eisstollen 15 m im Gletscher bleiben auch bei Wolken offen',
        },
      ],
      comparisonTable: {
        caption: 'Klein Matterhorn (3.883 m): Sektionen und Blickwinkel',
        headers: ['Sektion / Halt', 'Höhe', 'Matterhorn-Blick und Rolle der Atmosphäre'],
        rows: [
          [
            'Furi',
            '1.867 m',
            'Waldlichtung mit steilem Blick auf Ost- und Furggwand.',
          ],
          [
            'Schwarzsee (Abstecher)',
            '2.583 m',
            'Direkt am Fuss des Hörnligrats; beste Nahsicht auf mittlerer Höhe.',
          ],
          [
            'Trockener Steg',
            '2.939 m',
            'Gletscherzunge unter der Ost-/Furggwand; Umstieg auf die 3S-Bahn.',
          ],
          [
            'Matterhorn Glacier Paradise (Klein Matterhorn)',
            '3.883 m',
            '360°-Plattform über 38 Viertausender in der Schweiz, Italien und Frankreich, einschliesslich Mont Blanc.',
          ],
          [
            'Testa Grigia (Alpenüberquerung)',
            '3.480 m',
            'Grenzüberschreitende 3S-Bahn auf den italienischen Grenzkamm über Breuil-Cervinia.',
          ],
        ],
      },
      sections: [
        {
          id: 'klein-matterhorn-view-silhouette',
          heading: '1. Wie sieht das Matterhorn vom Klein Matterhorn (3.883 m) aus?',
          paragraphs: [
            'Vor der Fahrt zum Matterhorn Glacier Paradise (Klein Matterhorn) zählt der Blickwinkel. Von Zermatt und vom Gornergrat sehen Sie das Matterhorn von Nordosten: Ost- und Nordwand bilden die schmale, gekrümmte Toblerone-Pyramide.',
            'Mit Matterhorn Express und 3S-Bahn nach Süden zum Klein Matterhorn (3.883 m) drehen Sie fast 90 Grad um den Berg. Von der Plattform blicken Sie nordnordwestlich auf die Süd- (italienische) und die Furggwand. Das Matterhorn wirkt als breite Felsfestung aus dem Gletscher, nicht als schlanker Haken. Dazu 38 Viertausender bis zum Mont Blanc (4.808 m) und zum Gran Paradiso.',
          ],
          proTip: {
            label: 'Beide Winkel an einem Tag',
            text: 'Auf dem Weg vom Glacier Paradise steigen Sie am Matterhorn Express in Schwarzsee (2.583 m) oder am Trockenen Steg (2.939 m) aus. Am Trockenen Steg stehen Sie fast direkt unter der 1.500 m hohen Ostwand.',
          },
        },
        {
          id: 'klein-matterhorn-weather-and-fohn',
          heading: '2. Sicht am Klein Matterhorn: Talinversion gegen Südföhn',
          paragraphs: [
            'Die Prognose für das Klein Matterhorn gilt für 3.883 m (45.9383° N, 7.7297° E), weil das Wetter oft vom Gornergrat (3.089 m) abweicht.',
            'Im Herbst und Winter sammelt sich Kaltluft im Mattertal unter einer Inversion um 2.800–3.200 m. Dann ragt das Klein Matterhorn fast 700 m über das Wolkenmeer in blauen Himmel (10/10).',
            'Bei Südföhn wird feuchte Luft aus dem Aostatal über den Theodulpass (3.300 m) gedrückt. Das Klein Matterhorn trifft diese italienische Feuchtwand zuerst: auf 3.883 m kann die Sicht auf 2/10 fallen, während der Gornergrat, 6 km nordöstlich im Lee, noch 7/10 hat.',
          ],
          bulletPoints: [
            {
              bold: 'Windsperre (über 50 km/h):',
              text: 'Prüfen Sie die Karte «Wind- und Föhnrisiko». Die 3S-Bahn ist windstabiler als ältere Bahnen, Böen über 50–60 km/h auf 3.883 m können den Abschnitt Trockener Steg–Klein Matterhorn aber anhalten.',
            },
            {
              bold: 'Ganzjährig unter null:',
              text: 'Auch im Juli und August liegt die Luft auf 3.883 m meist zwischen −6 °C und +2 °C. Windjacke, Gletscherbrille (Kategorie 3/4) und langsame Schritte auf der letzten Treppe zur Terrasse.',
            },
          ],
        },
        {
          id: 'lighting-and-best-time-klein-matterhorn',
          heading: '3. Beste Tageszeit für Fotos am Klein Matterhorn',
          paragraphs: [
            'Anders als am Gornergrat, wo die Ostwand nach Mittag die direkte Sonne verliert, blicken Sie hier auf Süd- und Westseite. Das Licht am Matterhorn Glacier Paradise wird vom späten Vormittag bis in den frühen Nachmittag besser (10:00–15:00 MEZ), wenn die Sonne die italienischen Grate ausleuchtet.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Wie ist die Sicht am Klein Matterhorn heute?',
          answer:
            'Lesen Sie den Live-Index 1–10 für Vormittag und Nachmittag zum Matterhorn Glacier Paradise / Klein Matterhorn (3.883 m) oben auf dieser Seite. Er wird alle 15 Minuten aus Daten auf 3.883 m aktualisiert. 8–10/10 bedeutet klare 360°-Sicht auf Südwand, Breithorn und Mont Blanc.',
        },
        {
          question: 'Warum sieht das Matterhorn vom Klein Matterhorn (Glacier Paradise) anders aus?',
          answer:
            'Das Klein Matterhorn (3.883 m) liegt südsüdöstlich des Matterhorns auf dem italienischen Grenzkamm. Statt der schmalen Ost-/Nord-Pyramide von Zermatt und Gornergrat sehen Sie die breitere, steilere Süd- und Westwand (italienische Breuil-Seite) nah über dem Theodulgletscher.',
        },
        {
          question: 'Schliesst die Seilbahn zum Klein Matterhorn bei starkem Wind?',
          answer:
            'Ja. Die 3S-Bahn zwischen Trockener Steg (2.939 m) und Klein Matterhorn (3.883 m) ist auf Wind ausgelegt, Südföhn oder Sturmböen über 50–60 km/h können den oberen Abschnitt aber vorübergehend schliessen. Prüfen Sie Wind und Föhn, bevor Sie zur Talstation Zermatt Süd gehen.',
        },
        {
          question: 'Lohnt sich Glacier Paradise bei nur 5/10 oder 6/10?',
          answer:
            'An einem 6/10-Tag («teilweise sichtbar») bleibt das Billett lohnend: der Gletscherpalast, 15 m tief im Eis und von Wolken unberührt, und die Cinema Lounge sind inklusive. Bei 4/10 oder weniger stehen Sie auf der Plattform auf 3.883 m im Weiss und sollten umbuchen.',
        },
      ],
    },
    sunnegga: {
      name: 'Sunnegga',
      shortName: 'Sunnegga',
      title: 'Sunnegga Standseilbahn & Matterhorn-Ostwand',
      description: 'Die Standseilbahn nach Sunnegga (2.288 m), die Ostwand, der Stellisee und wann der Weg besser ist als der Riffelsee.',
      aspectLabel: 'Ostwand von der unteren Terrasse',
      transportSummary: 'Standseilbahn Sunnegga ab Zermatt',
      journeyTime: '4,5 Minuten',
      bestTimeWindow: 'Erste Kabine, bevor der Wind den Stellisee erreicht',
      heroStat: {
        label: 'Standseilbahn',
        value: '4,5 Min.',
        detail: 'Von Zermatt auf die Terrasse auf 2.288 m',
      },
      quickFacts: [
        {
          label: 'Terrasse',
          value: '2.288 m',
          detail: 'Ostwand aus einem weiteren, tieferen Winkel als am Riffelsee',
        },
        {
          label: 'Stellisee',
          value: '20 Min. zu Fuss',
          detail: 'Weiter nach Blauherd (2.571 m), dann zum See auf 2.537 m',
        },
        {
          label: 'Leisee',
          value: 'Unter der Terrasse',
          detail: 'Der einfachste See, wenige Minuten von der Standseilbahn',
        },
        {
          label: 'Verglichen mit dem Riffelsee',
          value: 'Späterer Start',
          detail: 'Der Gornergrat-Zug ist am Riffelsee gegen 07:30. Sunnegga öffnet später.',
        },
      ],
      keyTakeaways: [
        'Sunnegga ist die Terrasse der Standseilbahn auf 2.288 m. Die Ostwand ist der Blick, tiefer und weiter weg als am Riffelsee.',
        'Der Stellisee ist der Spiegelungsee auf dieser Seite. Gondel nach Blauherd plus 20 Minuten zu Fuss.',
        'Sunnegga für Leisee, Kinder und den 5-Seenweg. Den Riffelsee, wenn Sie die grösste Spiegelung im ersten Licht wollen.',
      ],
      comparisonTable: {
        caption: 'Wann Sunnegga die bessere Tour ist als der Riffelsee',
        headers: ['Tour', 'Sunnegga wählen', 'Riffelsee wählen'],
        rows: [
          [
            'Nächste Spiegelung',
            'Stellisee, nach der Gondel und 20 Minuten zu Fuss',
            'Fünf Minuten bergab ab Rotenboden. Der grösste Spiegel der Ostwand.',
          ],
          [
            'Erstes Licht',
            'Die Standseilbahn öffnet gegen 08:00',
            'Der erste Gornergrat-Zug kann Sie gegen 07:30 am See absetzen',
          ],
          [
            'Leichter Tag',
            'Der Leisee liegt an der Terrasse. Kein Gornergrat-Billett.',
            'Ein Bahnbillett nach Rotenboden, dann ein kurzer Abstieg',
          ],
        ],
      },
      sections: [
        {
          id: 'sunnegga-funicular',
          heading: 'Die Sunnegga-Standseilbahn',
          paragraphs: [
            'Die Standseilbahn verlässt Zermatt und steigt in rund viereinhalb Minuten zur Sunnegga-Terrasse auf 2.288 m. Die Ostwand liegt vor Ihnen, breiter und tiefer als vom Riffelsee.',
            'Der Leisee liegt direkt unter der Terrasse. Das ist der See mit Kindern, und er braucht die Gornergrat Bahn nicht.',
          ],
        },
        {
          id: 'stellisee',
          heading: 'Stellisee und Ostwand',
          paragraphs: [
            'Die Spiegelung auf dieser Seite ist der Stellisee auf 2.537 m. Gondel von Sunnegga nach Blauherd (2.571 m), dann etwa 20 Minuten zu Fuss. Im Vordergrund Blöcke und Wollgras, der Gipfel ist dieselbe Ostwand wie am Riffelsee.',
            'Das Wasser spiegelt den Berg nur von Ende Juni bis Oktober, und nur solange der Wind unter etwa 12 km/h bleibt. Ein klarer Nachmittag scheitert, sobald die Brise einsetzt.',
          ],
        },
        {
          id: 'when-sunnegga-wins',
          heading: 'Wann Sunnegga den Weg zum Riffelsee schlägt',
          paragraphs: [
            'Der Riffelsee ist die nähere, grössere Spiegelung, und der erste Zug erreicht ihn früher. Sunnegga ist der bessere Weg für den 5-Seenweg (Stellisee, Grindjisee, Grünsee, Moosjisee, Leisee), mit Kindern oder ohne Gornergrat-Billett.',
            'Starten Sie in Blauherd, sobald die Gondel öffnet, solange der Stellisee noch ruhig ist. Ist der Wind schon da, liegt der Grindjisee tiefer und hinter Lärchen im Windschutz und hält die Spiegelung länger am Tag.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Was ist Sunnegga?',
          answer:
            'Eine Terrasse der Standseilbahn auf 2.288 m über Zermatt. Die Fahrt dauert etwa 4,5 Minuten. Der Blick ist die Ostwand des Matterhorns, tiefer als am Riffelsee.',
        },
        {
          question: 'Ist Sunnegga oder der Riffelsee besser für die Spiegelung?',
          answer:
            'Der Riffelsee, wenn Sie den grössten Spiegel und den frühesten Start wollen. Sunnegga ist die leichtere Terrasse und der Beginn des Wegs zum Stellisee.',
        },
        {
          question: 'Wie kommt man von Sunnegga zum Stellisee?',
          answer:
            'Mit der Gondel nach Blauherd auf 2.571 m, dann etwa 20 Minuten zu Fuss zum Stellisee auf 2.537 m.',
        },
      ],
    },
    'riffelsee': {
      name: 'Sunnegga & Riffelsee Bergsee-Spiegelungen',
      shortName: 'See-Spiegelungen',
      title: 'Welcher Berg spiegelt sich im Riffelsee?',
      description: 'Echtzeit-Windmessung und Wasseroberflächen-Diagnose für das perfekte Matterhorn-Spiegelfoto am Riffelsee (2.757 m) und Stellisee (2.537 m).',
      extraFaqs: [
        {
          question: 'Welcher Berg spiegelt sich im Riffelsee?',
          answer:
            'Das Matterhorn. Von der Station Rotenboden der Gornergratbahn sind es fünf Gehminuten zum Riffelsee, wo sich die Ostwand im See spiegelt. Sunnegga und der Stellisee zeigen denselben Gipfel aus einem tieferen Winkel.',
        },
      ],
      aspectLabel: 'Ostwand-Spiegelung im Bergsee (Goldene Morgenstunde)',
      transportSummary: 'Gornergrat Bahn bis Rotenboden (Riffelsee) oder Standseilbahn nach Sunnegga (Stellisee)',
      journeyTime: '25–35 Minuten pro Strecke',
      bestTimeWindow: 'Sonnenaufgang bis 09:30 MEZ (Windstille vor dem Einsetzen der thermischen Talwinde)',
      keyTakeaways: [
        'Für eine spiegelglatte Wasseroberfläche muss die Windgeschwindigkeit unter 12 km/h liegen.',
        'Der Riffelsee ist von Ende Juni bis Ende Oktober eisfrei; im Frühjahr liegt noch Schnee.',
        'Sollte der Haupt-Riffelsee Kräuselwellen haben, bietet der 100 m tiefer gelegene Untere Riffelsee Windschutz.',
      ],
      heroStat: {
        label: 'Windgrenze für den Spiegel',
        value: '< 12 km/h',
        detail: 'Über 15 km/h kräuseln sich Riffelsee und Stellisee',
      },
      quickFacts: [
        {
          label: 'Zugang Riffelsee',
          value: '5 Min. zu Fuss',
          detail: 'Gornergrat-Zug in Rotenboden (2.815 m) verlassen und 60 m absteigen',
        },
        {
          label: 'Zugang Stellisee',
          value: '20 Min. Wanderung',
          detail: 'Standseilbahn Sunnegga (2.288 m) plus Gondel Blauherd (2.571 m)',
        },
        {
          label: 'Offenes Wasser',
          value: 'Mitte Juni – Okt.',
          detail: 'Die Seen sind von November bis Anfang Juni gefroren und schneebedeckt',
        },
        {
          label: 'Ausweichpunkt bei Wind',
          value: 'Unterer Riffelsee',
          detail: 'Kleinerer Teich 100 m westlich bleibt glatt, wenn der Hauptsee kräuselt',
        },
      ],
      comparisonTable: {
        caption: 'Riffelsee, unterer Riffelsee und Stellisee im Vergleich',
        headers: ['Spiegelungssee', 'Höhe', 'Weg ab Zermatt', 'Vordergrund und Windschutz'],
        rows: [
          [
            'Oberer Riffelsee (Hauptsee)',
            '2.757 m',
            'Gornergrat-Zug nach Rotenboden (28 Min.) plus 5 Min. zu Fuss',
            'Nächste und grösste Matterhorn-Spiegelung; ab 10:00 MEZ Ost- und Südwind ausgesetzt.',
          ],
          [
            'Unterer Riffelsee (zweiter Teich)',
            '2.745 m',
            '2 Min. westlich am Weg vorbei am oberen Riffelsee',
            'Hoher Windschutz hinter einem natürlichen Wall; beste Reserve, wenn der Hauptsee kräuselt.',
          ],
          [
            'Stellisee (Sunnegga–Blauherd)',
            '2.537 m',
            'Standseilbahn Sunnegga plus Gondel Blauherd plus 20 Min. zu Fuss',
            'Halb versunkene Blöcke und Wollgras; etwas weiterer Talrahmen.',
          ],
          [
            'Grindjisee (5-Seenweg)',
            '2.334 m',
            '45 Min. unterhalb des Stellisees auf dem 5-Seenweg',
            'Von Lärchen umgeben, der beste Windschutz aller Zermatter Seen, ideal im Oktober.',
          ],
          [
            'Leisee (Sunnegga-Terrasse)',
            '2.232 m',
            'Standseilbahn Sunnegga (4,5 Min.) plus Lift',
            'Familiensee direkt unter der Sonnenterrasse; einfachster Zugang mit Kindern.',
          ],
        ],
      },
      sections: [
        {
          id: 'riffelsee-matterhorn-reflection-conditions',
          heading: '1. Die drei Regeln für Spiegelungen am Riffelsee und Stellisee',
          paragraphs: [
            'Tausende steigen an einem sonnigen Nachmittag zum Riffelsee oder Stellisee und erwarten das Postkartenfoto — und finden dunkles, gekräuseltes Wasser ohne Spiegel, oder im Mai ein Schneefeld.',
            'Die umgekehrte Matterhorn-Pyramide im Wasser ist ein Mikroklima aus drei Faktoren, die Sie hier prüfen können, bevor Sie Zermatt verlassen:',
          ],
          bulletPoints: [
            {
              bold: 'Regel 1 — Der Wind an der Oberfläche muss unter 12 km/h liegen:',
              text: 'Wasser spiegelt nur ohne Kapillarwellen. Bei 0–10 km/h ist die Spiegelung messerscharf. Bei 12–20 km/h verschwimmt der Gipfel zu senkrechten Streifen. Über 22 km/h verschwindet die Spiegelung.',
            },
            {
              bold: 'Regel 2 — Mittelhohe Wolken müssen dünn sein (Wert mindestens 7/10):',
              text: 'Riffelsee (2.757 m) und Stellisee (2.537 m) blicken nach Südwesten auf den Gipfel auf 4.478 m. Eine Wolkenbank auf 3.200–4.200 m verdeckt die obere Pyramide im Himmel und im Wasser.',
            },
            {
              bold: 'Regel 3 — Auftaufenfenster (Mitte Juni bis Ende Oktober):',
              text: 'Zwischen 2.537 m und 2.757 m frieren Stellisee und Riffelsee Ende Oktober oder im November zu und bleiben bis Mitte oder Ende Juni unter Schnee. Anfang Juni gibt es oft halb getaute türkise Schollen.',
            },
          ],
          proTip: {
            label: 'Der Trick mit dem unteren Riffelsee',
            text: 'Gehen Sie nicht enttäuscht aus Rotenboden, wenn der Hauptsee kräuselt. 100 m weiter Richtung Riffelberg liegt der kleinere zweite Teich («unterer Riffelsee»). Er ist kleiner und hinter einer Moränenlippe geschützt und bleibt bei Wind bis 18–20 km/h spiegelglatt.',
          },
        },
        {
          id: 'sunnegga-vs-rotenboden-timing',
          heading: '2. Warum der Morgen (07:15–09:30 MEZ) für Seespiegelungen entscheidend ist',
          paragraphs: [
            'In hohen Alpentälern folgt der Wind einem festen Tagesrhythmus. Die nächtliche Ausstrahlung beruhigt die Luft, die Seen sind im Morgengrauen totstill. Gegen 10:00 MEZ heizt die Sonne die Felswände des Mattertals, Hangwinde steigen mit 15–25 km/h auf — und kräuseln die Seen, gerade wenn Quellwolken am Hörnligrat ansetzen.',
            'Die Gornergrat Bahn fährt im Sommer um 07:00 MEZ in Zermatt ab. In Rotenboden sind Sie um 07:28 MEZ, am Riffelsee um 07:33 MEZ, in stiller Luft und mit goldenem Morgenlicht auf der Ostwand.',
          ],
        },
        {
          id: 'five-lakes-hike-strategy',
          heading: '3. Sunnegga und der 5-Seenweg',
          paragraphs: [
            'Auf dem 5-Seenweg (Stellisee, Grindjisee, Grünsee, Moosjisee, Leisee, 9,8 km, etwa 2,5 Stunden) starten Sie oben in Blauherd (2.571 m), sobald die Gondel öffnet, und erreichen den Stellisee zuerst, solange das Wasser ruhig ist. Zieht später eine Brise auf, liegt der Grindjisee (2.334 m) hinter hohen Lärchen, die den Wind abhalten und die Spiegelung bis in den Nachmittag halten.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Welcher Berg spiegelt sich im Riffelsee?',
          answer:
            'Das Matterhorn. Von der Station Rotenboden der Gornergratbahn sind es fünf Gehminuten zum Riffelsee, wo die Ostwand den See füllt. Sunnegga und der Stellisee zeigen denselben Gipfel aus einem tieferen Winkel.',
        },
        {
          question: 'Sind die Spiegelungsbedingungen am Riffelsee heute gut?',
          answer:
            'Prüfen Sie die Live-Karte für Riffelsee und Stellisee oben auf dieser Seite. Eine klare Spiegelung braucht einen Sichtwert von 7–10/10 und Oberflächenwind unter 12 km/h im eisfreien Fenster von Mitte Juni bis Oktober.',
        },
        {
          question: 'Was ist besser für die Matterhorn-Spiegelung: Riffelsee oder Stellisee?',
          answer:
            'Der Riffelsee (2.757 m, Gornergrat-Zug nach Rotenboden plus 5 Minuten zu Fuss) bietet die nächste und grösste Spiegelung und ist früher erreichbar (07:30 MEZ), wenn der Wind am ruhigsten ist. Der Stellisee (2.537 m, Sunnegga–Blauherd plus 20 Minuten zu Fuss) hat die bekannten Vordergrundblöcke und ist der Start des 5-Seenwegs.',
        },
        {
          question: 'Ist der Riffelsee im Mai, Juni oder November gefroren?',
          answer:
            'Ja. Auf 2.757 m liegt der Riffelsee von November bis Anfang Juni unter Schnee (Winter-Ski- und Schneeschuhgebiet am Gornergrat). Teilweise türkises Auftauen liegt meist zwischen dem 10. und 25. Juni; volle flüssige Spiegelungen von Ende Juni bis Ende Oktober.',
        },
        {
          question: 'Was tun, wenn der Riffelsee zu windig für eine Spiegelung ist?',
          answer:
            'Gehen Sie zuerst 100 m westlich am Hauptbecken vorbei zum kleineren unteren Riffelsee. Er liegt in einer geschützten Mulde und bleibt oft glatt, wenn der Hauptsee kabbelig ist. Alternativ ein 6- oder 10-Stop-ND-Filter und 15 bis 30 Sekunden Belichtung, damit die Kräusel zu einem weichen Spiegel werden.',
        },
      ],
    },
    'zermatt-village': {
      name: 'Dorf Zermatt (Kirchbrücke & Riedweg)',
      shortName: 'Dorf Zermatt',
      title: 'Matterhorn vom Dorf Zermatt: Live-Sicht, Kirchbrücke & Webcams',
      description: 'Echtzeit-Sichtbarkeit des Matterhorns direkt aus dem Dorf Zermatt (Kirchbrücke und Riedweg). Live-Webcam, Sonnenaufgang-Alpenglühen und Talnebel-Check ohne Bergbahnticket.',
      aspectLabel: 'Nordostgrat- & Ostwand-Talperspektive',
      transportSummary: '5 Minuten zu Fuss vom Bahnhof Zermatt / Kirchplatz (Kein Ticket erforderlich)',
      journeyTime: '0–10 Minuten Gehzeit (Kostenlos)',
      bestTimeWindow: '20 Min. vor Sonnenaufgang bis 08:30 MEZ (Morgendliches Alpenglühen)',
      keyTakeaways: [
        'Die Kirchbrücke ist Zermatts berühmtester kostenloser Aussichtspunkt ohne Bergbahnticket.',
        'Für das legendäre Alpenglühen 20–30 Minuten vor dem offiziellen Sonnenaufgang auf der Brücke sein.',
        'Der Riedweg / Mürini bietet 10 Minuten oberhalb des Dorfes einen ruhigen Blick über Chaletdächer.',
      ],
      heroStat: {
        label: 'Ticketpreis',
        value: 'CHF 0 (gratis)',
        detail: 'Öffentliche Brücke und Wege, rund um die Uhr, ohne Bergbahn',
      },
      quickFacts: [
        {
          label: 'Bester Standpunkt',
          value: 'Kirchbrücke',
          detail: 'Direkte Linie über die Mattervispa zur Ostwand',
        },
        {
          label: 'Erhöhter Punkt',
          value: 'Riedweg / Mürini',
          detail: '10 Minuten bergauf über den Chalets, weniger Betrieb',
        },
        {
          label: 'Goldene Stunde',
          value: 'Alpenglühen am Gipfel',
          detail: 'Die Spitze glüht rosa und orange etwa 15–20 Minuten vor dem Sonnenaufgang im Tal',
        },
        {
          label: 'Talnebel',
          value: 'Wolkenuntergrenze prüfen',
          detail: 'Tiefer Nebel (unter 2.000 m) verdeckt die Dorfsicht, auch wenn die Gipfel frei sind',
        },
      ],
      comparisonTable: {
        caption: 'Öffentliche Aussichtspunkte im Dorf Zermatt',
        headers: ['Standpunkt', 'Höhe', 'Gehzeit ab Bahnhof', 'Wofür und wie gerahmt'],
        rows: [
          [
            'Kirchbrücke',
            '1.608 m',
            '8 Min. zu Fuss',
            'Klassische Postkarte über der Mattervispa; der bekannte Treffpunkt zum Sonnenaufgang.',
          ],
          [
            'Riedweg / Hügel Mürini',
            '1.660 m',
            '15 Min. zu Fuss (sanft bergauf)',
            'Erhöhtes Panorama über verwitterte Lärchenchalets hin zum Matterhorn.',
          ],
          [
            'Untere Wiese Hohbalmen',
            '1.750 m',
            '25 Min. zu Fuss',
            'Ruhiger Weiderand mit freier Sichtlinie über den Elektrotaxis des Dorfs.',
          ],
          [
            'Kirchplatz / Zermatterhof',
            '1.620 m',
            '6 Min. zu Fuss',
            'Historisches Zentrum neben der Kirche St. Mauritius und dem Matterhorn Museum.',
          ],
        ],
      },
      sections: [
        {
          id: 'zermatt-village-matterhorn-views',
          heading: '1. Warum die Kirchbrücke das Herz der Zermatter Fotografie ist',
          paragraphs: [
            'Sie brauchen nicht immer Seilbahn oder Zahnradbahn, um das Matterhorn zu sehen. Die Kirchbrücke über die gletschergespeiste Mattervispa legt eine Linie das Tal hinauf direkt auf die gezackte Ostwand und den Hörnligrat.',
            'Die Brücke ist 24 Stunden offen und kostenlos. Sie ist der Morgenstest: ist der Gipfel im Morgengrauen von der Kirchbrücke scharf, lohnt die Fahrt zu den Bergstationen.',
          ],
          bulletPoints: [
            {
              bold: 'Alpenglühen am Morgen:',
              text: 'Weil das Matterhorn nach Osten schaut, trifft der Sonnenaufgang die Gipfelpyramide, während das Dorf noch im Schatten liegt. Die Spitze glüht etwa 15 Minuten bernstein und magenta.',
            },
            {
              bold: 'Fluss im Vordergrund:',
              text: 'Das Gletscherwasser der Mattervispa gibt bewegtes Wasser im Vordergrund und eine Führungslinie zum Gipfel.',
            },
            {
              bold: 'Dem Gedränge auf der Brücke ausweichen:',
              text: 'An klaren Morgen stehen Dutzende Stative am Geländer. Für Ruhe gehen Sie 10 Minuten bergauf Richtung Riedweg / Mürini, mit erhöhter Sicht über Holzdächer.',
            },
          ],
          proTip: {
            label: 'Die Regel der tiefen Inversion',
            text: 'Liegt das Dorf in kaltem grauem Nebel, geben Sie nicht auf. Ist die tiefe Bewölkung hoch und Mittel- und Hochwolke null, stehen Gornergrat (3.089 m) und Glacier Paradise (3.883 m) über den Wolken unter blauem Himmel.',
          },
        },
        {
          id: 'sunrise-timing-and-tips',
          heading: '2. Zeitpunkt und Fototipps für die Dorfsicht',
          paragraphs: [
            'Seien Sie mindestens 20 Minuten vor dem offiziellen Sonnenaufgang an der Kirchbrücke oder am Riedweg. Das erste Licht erscheint nicht am Boden; es trifft zuerst die Nadelspitze des Matterhorns (4.478 m) und wandert die Wand hinab.',
            'Im Winter liegt das Dorf im Schnee, die Chaletkamine rauchen. Im Sommer und Herbst setzen goldene Lärchen an den Hängen den grauen Gneis der Pyramide in Kontrast.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Sieht man das Matterhorn vom Dorf Zermatt?',
          answer:
            'Ja. Das Matterhorn ist von mehreren öffentlichen Punkten im Dorf klar zu sehen, am bekanntesten von der Kirchbrücke über die Mattervispa und vom Riedweg / Mürini bergauf, ganz ohne Billett.',
        },
        {
          question: 'Welcher kostenlose Aussichtspunkt in Zermatt ist der beste?',
          answer:
            'Die Kirchbrücke ist der bekannteste freie Platz für das Alpenglühen bei Sonnenaufgang. Für ein Panorama über traditionelle Chalets mit weniger Betrieb gehen Sie 10–15 Minuten den Riedweg hinauf.',
        },
        {
          question: 'Wann ist Sonnenaufgang an der Kirchbrücke für das Alpenglühen?',
          answer:
            'Im Sommer (Juni–Juli) trifft das Licht den Gipfel gegen 05:30–05:50 MEZ. Im Herbst (September–Oktober) zwischen 06:45 und 07:30 MEZ. Im Winter gegen 07:45–08:15 MEZ. Seien Sie immer 20 Minuten vor dem offiziellen Sonnenaufgang da.',
        },
        {
          question: 'Was, wenn es im Dorf neblig ist?',
          answer:
            'Tiefer Talnebel liegt oft über Zermatt auf 1.600 m, während die Gipfel frei sind. Prüfen Sie die Höhenwerte: zeigen Gornergrat (3.089 m) oder Glacier Paradise (3.883 m) 8–10/10, fahren Sie mit Zug oder Seilbahn über die Wolken.',
        },
      ],
    },
  },
  fr: {
    gornergrat: {
      name: 'Belvédère du Gornergrat',
      shortName: 'Gornergrat',
      title: 'Webcam et météo du Gornergrat | Voir le Cervin',
      description: 'Télémétrie de visibilité en direct à 3 089 m, accès en train à crémaillère, reflets du Riffelsee et panorama alpin à 360°.',
      aspectLabel: 'Face Est / Nord-Est (Profil classique Toblerone)',
      transportSummary: 'Chemin de fer à crémaillère Gornergrat Bahn (GGB) depuis la gare de Zermatt',
      journeyTime: '33 minutes par trajet',
      bestTimeWindow: '07h00–11h00 CET (Le soleil matinal illumine la face Est)',
      keyTakeaways: [
        'Le train du Gornergrat circule par tous les temps et reste insensible aux vents forts.',
        'Les départs matinaux avant 10h00 offrent la meilleure clarté atmosphérique.',
        'Le lac Riffelsee se situe à 5 minutes à pied en descente de la gare de Rotenboden.',
      ],
      heroStat: {
        label: 'Distance de visée',
        value: '9,1 km à l’est',
        detail: 'Vue dégagée sur l’arête du Hörnli et la face Est (4 478 m)',
      },
      quickFacts: [
        {
          label: 'Angle de vue',
          value: 'Toblerone classique',
          detail: 'Silhouette pyramidale Est et Nord-Est, au crochet iconique',
        },
        {
          label: 'Résistance au vent',
          value: 'Très élevée',
          detail: 'Le train à crémaillère circule quand les téléphériques ferment',
        },
        {
          label: 'Meilleure place',
          value: 'À droite (montée)',
          detail: 'Asseyez-vous à droite dans le sens de la montée pour voir le Cervin sans interruption',
        },
        {
          label: 'Arrêt lac inclus',
          value: 'Rotenboden (2 757 m)',
          detail: 'Un arrêt sous le Gornergrat, pour le miroir du Riffelsee',
        },
      ],
      comparisonTable: {
        caption: 'Gornergrat Bahn : visibilité du Cervin arrêt par arrêt',
        headers: ['Gare', 'Altitude', 'Durée', 'Ligne de vue et pourquoi descendre ici'],
        rows: [
          [
            'Zermatt Bahnhof',
            '1 608 m',
            '0 min',
            'Terminus face aux voies CFF ; montez du côté droit.',
          ],
          [
            'Riffelalp',
            '2 222 m',
            '16 min',
            'Limite supérieure de la forêt : le Cervin cadré par de vieux aroles.',
          ],
          [
            'Riffelberg',
            '2 582 m',
            '23 min',
            'Alpage ouvert, grand angle sur les arêtes du Hörnli et de Furgg.',
          ],
          [
            'Rotenboden (Riffelsee)',
            '2 815 m',
            '28 min',
            'Descendez ici : 5 minutes à pied jusqu’au Riffelsee (2 757 m) et au reflet.',
          ],
          [
            'Sommet du Gornergrat',
            '3 089 m',
            '33 min',
            'Terrasse à 360° face au Cervin, au glacier du Gorner et à 29 sommets de plus de 4 000 m.',
          ],
        ],
      },
      sections: [
        {
          id: 'can-you-see-matterhorn-from-gornergrat-today',
          heading: '1. Lire le score de visibilité du Gornergrat avant d’acheter le billet',
          paragraphs: [
            'Un aller-retour Gornergrat Bahn coûte entre 92 et 132 CHF (50 % de réduction avec le Swiss Travel Pass ou la carte demi-tarif) et n’est pas remboursé pour cause de nuages. Vérifier la télémétrie d’altitude avant de monter est essentiel.',
            'Depuis le village de Zermatt, à 1 608 m, vous ne voyez que la couche la plus basse. Le moteur du Gornergrat interroge des mailles Open-Meteo calées sur 3 089 m à 45.9840° N, 7.7845° E. Un score de 8/10 à 10/10 (« visible ») signifie que la face Est et l’arête du Hörnli sont dégagées. À 6/10 ou 7/10 (« partiellement visible »), attendez des nuages de passage ou une bannière de foehn au sommet.',
          ],
          bulletPoints: [
            {
              bold: 'Score 8–10/10 (partez tout de suite) :',
              text: 'La couverture nuageuse moyenne (3 000 m) est sous 25 % et la portée optique dépasse 20 km au-dessus du glacier du Gorner.',
            },
            {
              bold: 'Score 5–7/10 (comparez matin et après-midi) :',
              text: 'Souvent une fenêtre claire le matin (06h00–11h00 CET), puis des cumulus thermiques. Prenez le premier train.',
            },
            {
              bold: 'Score 1–4/10 (gardez le billet) :',
              text: 'Un stratus épais ou des précipitations enveloppent la zone 3 000–4 478 m. Vérifiez la webcam 360° du Gornergrat avant de dépenser plus de 100 CHF.',
            },
          ],
          proTip: {
            label: 'Le secret de l’inversion de vallée',
            text: 'Si le village est gris et brumeux, comparez les cartes « brouillard de vallée (< 2 000 m) » et « nuages moyens (2 000–6 000 m) ». Quand le brouillard bas dépasse 70 % et les nuages moyens restent sous 20 %, le train du Gornergrat vous sort du brouillard vers le soleil à 3 089 m.',
          },
        },
        {
          id: 'best-time-and-lighting-gornergrat',
          heading: '2. Meilleur moment au Gornergrat : lueur d’aube ou nuages d’après-midi',
          paragraphs: [
            'Le Gornergrat est à l’est-sud-est du Cervin. Le soleil du matin frappe donc la face Est jusqu’à 11h00 CET et dessine chaque bande de rocher, chaque névé et l’arête du Hörnli.',
            'Après 14h00 CET, deux choses arrivent ensemble : le soleil passe derrière le Cervin vers l’Italie — la paroi vue du Gornergrat passe à contre-jour — et les brises de vallée condensent des nuages d’après-midi autour du sommet.',
          ],
        },
        {
          id: 'gornergrat-train-tips',
          heading: '3. Train à crémaillère : place, arrêts et Riffelsee',
          paragraphs: [
            'Les billets journée ordinaires du Gornergrat Bahn ne sont jamais complets. Achetez-le sur le téléphone ou au guichet 5 minutes avant le départ, une fois le score de visibilité confirmé sur cette page.',
          ],
          bulletPoints: [
            {
              bold: 'Toujours à droite en montant :',
              text: 'Montez et asseyez-vous à droite (dans le sens de la montée). Dès le pont du Findelbach, le Cervin remplit les fenêtres de droite jusqu’à 3 089 m.',
            },
            {
              bold: 'Descendez à Rotenboden :',
              text: 'Le billet Gornergrat permet de descendre aux gares intermédiaires. Rotenboden (2 815 m), un arrêt sous le sommet, est à 5 minutes à pied du Riffelsee.',
            },
          ],
        },
      ],
      faqs: [
        {
          question: 'Peut-on voir le Cervin depuis le Gornergrat aujourd’hui ?',
          answer:
            'Lisez le score live de 1 à 10, matin et après-midi, en haut de cette page. Il est mis à jour toutes les 15 minutes pour le Gornergrat (3 089 m). 8–10/10 : pyramide nette. 6–7/10 : partiellement visible, avec de légers nuages d’arête. 1–4/10 : le sommet est dans les nuages.',
        },
        {
          question: 'Le Gornergrat vaut-il le déplacement s’il fait nuageux au village ?',
          answer:
            'Cela dépend de l’altitude des nuages. Si les nuages bas (< 2 000 m) sont denses mais les nuages moyens (2 000–6 000 m) restent sous 25 %, le Gornergrat (3 089 m) est au-dessus du brouillard, au soleil. Si les nuages moyens dépassent 70 %, la station est dans la couche : gardez le billet pour une fenêtre plus claire.',
        },
        {
          question: 'Quel côté du train du Gornergrat offre la meilleure vue sur le Cervin ?',
          answer:
            'À droite en montant de Zermatt vers le Gornergrat, à gauche en descendant. Le Cervin reste visible par la fenêtre de droite pendant presque toute la montée de 33 minutes.',
        },
        {
          question: 'Faut-il réserver les billets du Gornergrat à l’avance ?',
          answer:
            'Non. Les trains à crémaillère réguliers n’exigent pas de réservation et ne sont pas complets. Attendez le score du matin et la webcam Roundshot le jour même avant d’acheter.',
        },
      ],
    },
    'glacier-paradise': {
      name: 'Matterhorn Glacier Paradise (Petit Cervin)',
      shortName: 'Glacier Paradise',
      title: 'Télécabine Klein Matterhorn, webcam et météo',
      description: 'La plus haute station de téléphérique d’Europe (3 883 m). Télémétrie en temps réel, télécabine 3S et vue imprenable sur la face Sud.',
      aspectLabel: 'Face Sud / Sud-Ouest (Perspective glaciaire de haute altitude)',
      transportSummary: 'Matterhorn Express + téléphérique 3S depuis Zermatt / Furi',
      journeyTime: '40–45 minutes par trajet',
      bestTimeWindow: '08h30–12h30 CET (Lumière optimale avant la formation des cumulus de midi)',
      keyTakeaways: [
        'À 3 883 m, la plateforme se trouve souvent au-dessus de la mer de brouillard des vallées.',
        'En cas de vent de Föhn supérieur à 50 km/h, les câbles supérieurs peuvent fermer préventivement.',
        'Domaine skiable ouvert 365 jours par an et palais de glace féerique sous le glacier.',
      ],
      heroStat: {
        label: 'Altitude de la plateforme',
        value: '3 883 m',
        detail: 'Plus haute station de téléphérique d’Europe — 794 m au-dessus du Gornergrat',
      },
      quickFacts: [
        {
          label: 'Angle sur le Cervin',
          value: 'Face Sud / Furgg',
          detail: 'Mur trapézoïdal de près, pas le crochet Toblerone',
        },
        {
          label: 'Avantage d’inversion',
          value: 'Au-dessus du brouillard < 3 500 m',
          detail: 'Passe au-dessus des stratus d’hiver et d’automne dans la vallée',
        },
        {
          label: 'Sensibilité au vent',
          value: 'Alerte foehn',
          detail: 'Le 3S peut s’arrêter si le vent du sud dépasse 50–55 km/h',
        },
        {
          label: 'Par tous les temps',
          value: 'Palais de glace',
          detail: 'Galeries à 15 m dans le glacier, ouvertes même sous les nuages',
        },
      ],
      comparisonTable: {
        caption: 'Klein Matterhorn (3 883 m) : tronçons et angles de vue',
        headers: ['Tronçon / arrêt', 'Altitude', 'Vue sur le Cervin et rôle de l’atmosphère'],
        rows: [
          [
            'Furi',
            '1 867 m',
            'Clairière en forte pente vers les faces Est et Furgg.',
          ],
          [
            'Schwarzsee (détour)',
            '2 583 m',
            'Au pied de l’arête du Hörnli ; meilleur gros plan à moyenne altitude.',
          ],
          [
            'Trockener Steg',
            '2 939 m',
            'Station de langue glaciaire sous la paroi Est/Furgg ; correspondance vers le 3S.',
          ],
          [
            'Matterhorn Glacier Paradise (Klein Matterhorn)',
            '3 883 m',
            'Plateforme à 360° sur 38 sommets de plus de 4 000 m en Suisse, en Italie et en France, dont le mont Blanc.',
          ],
          [
            'Testa Grigia (traversée alpine)',
            '3 480 m',
            '3S transfrontalier sur la crête italienne, au-dessus de Breuil-Cervinia.',
          ],
        ],
      },
      sections: [
        {
          id: 'klein-matterhorn-view-silhouette',
          heading: '1. À quoi ressemble le Cervin depuis le Klein Matterhorn (3 883 m) ?',
          paragraphs: [
            'Avant de monter au Matterhorn Glacier Paradise (Klein Matterhorn), l’angle compte. Depuis Zermatt et le Gornergrat, vous voyez le Cervin du nord-est : les faces Est et Nord forment la pyramide Toblerone, étroite et crochue.',
            'Le Matterhorn Express et le 3S vers le sud, jusqu’au Klein Matterhorn (3 883 m), vous font tourner de près de 90 degrés. Depuis la plateforme, vous regardez au nord-nord-ouest les faces Sud (italienne) et Furgg. Le Cervin devient une citadelle large sortie du glacier, pas un crochet fin. Vous voyez aussi 38 sommets de plus de 4 000 m jusqu’au mont Blanc (4 808 m) et au Gran Paradiso.',
          ],
          proTip: {
            label: 'Les deux angles dans la même journée',
            text: 'À la montée ou à la descente du Glacier Paradise, descendez du Matterhorn Express à Schwarzsee (2 583 m) ou à Trockener Steg (2 939 m). À Trockener Steg, vous êtes presque sous la paroi Est de 1 500 m.',
          },
        },
        {
          id: 'klein-matterhorn-weather-and-fohn',
          heading: '2. Visibilité au Klein Matterhorn : inversion de vallée ou foehn du sud',
          paragraphs: [
            'La prévision du Klein Matterhorn est calculée à 3 883 m (45.9383° N, 7.7297° E), parce que le temps y diverge souvent de celui du Gornergrat (3 089 m).',
            'En automne et en hiver, l’air froid stagne dans le Mattertal sous une inversion vers 2 800–3 200 m. Le Klein Matterhorn dépasse alors le plafond d’environ 700 m, dans un ciel bleu (10/10) au-dessus d’une mer de nuages.',
            'Dès qu’un foehn du sud s’installe, l’air humide du val d’Aoste est poussé sur le versant de Breuil et le col du Théodule (3 300 m). Le Klein Matterhorn est le premier sommet de Zermatt touché : la visibilité à 3 883 m peut tomber à 2/10 pendant que le Gornergrat, abrité 6 km au nord-est, garde encore 7/10.',
          ],
          bulletPoints: [
            {
              bold: 'Seuil de vent (> 50 km/h) :',
              text: 'Consultez la carte « vent et risque de foehn ». Le 3S moderne tient mieux le vent que les anciens appareils, mais des rafales de 50–60 km/h à 3 883 m peuvent arrêter le tronçon Trockener Steg–Klein Matterhorn.',
            },
            {
              bold: 'Sous zéro toute l’année :',
              text: 'Même en juillet et en août, l’air à 3 883 m reste en général entre −6 °C et +2 °C. Coupe-vent, lunettes de glacier (catégorie 3/4) et pas lents dans le dernier escalier vers la terrasse.',
            },
          ],
        },
        {
          id: 'lighting-and-best-time-klein-matterhorn',
          heading: '3. Meilleure heure pour photographier au Klein Matterhorn',
          paragraphs: [
            'Contrairement au Gornergrat, où la face Est perd le soleil direct après midi, le Klein Matterhorn regarde les versants sud et ouest. La lumière au Matterhorn Glacier Paradise s’améliore donc de la fin de matinée au début d’après-midi (10h00–15h00 CET), quand le soleil éclaire les arêtes italiennes.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Quelle est la visibilité au Klein Matterhorn aujourd’hui ?',
          answer:
            'Lisez l’indice live de 1 à 10, matin et après-midi, pour le Matterhorn Glacier Paradise / Klein Matterhorn (3 883 m) en haut de cette page. Mis à jour toutes les 15 minutes à partir de données à 3 883 m, un score de 8–10/10 indique une vue à 360° dégagée sur la face Sud, le Breithorn et le mont Blanc.',
        },
        {
          question: 'Pourquoi le Cervin paraît-il différent depuis le Klein Matterhorn (Glacier Paradise) ?',
          answer:
            'Le Klein Matterhorn (3 883 m) est au sud-sud-est du Cervin, sur la crête frontière italienne. Au lieu de la pyramide étroite Est/Nord vue depuis Zermatt et le Gornergrat, vous voyez de près les faces Sud et Ouest (italiennes, côté Breuil), plus larges et plus raides, au-dessus du glacier du Théodule.',
        },
        {
          question: 'Le téléphérique du Klein Matterhorn ferme-t-il par grand vent ?',
          answer:
            'Oui. Le 3S entre Trockener Steg (2 939 m) et le Klein Matterhorn (3 883 m) est conçu pour le vent, mais un foehn du sud ou des rafales de tempête au-delà de 50–60 km/h peuvent fermer temporairement le tronçon supérieur. Vérifiez le vent et le foehn avant de marcher vers la station de Zermatt Sud.',
        },
        {
          question: 'Le Glacier Paradise vaut-il le déplacement avec une visibilité de 5/10 ou 6/10 ?',
          answer:
            'Par 6/10 (« partiellement visible »), le billet reste intéressant : il comprend le palais de glace, creusé à 15 m dans la glace et insensible aux nuages, et le Cinema Lounge. À 4/10 ou moins, la plateforme à 3 883 m est dans le blanc : mieux vaut reporter.',
        },
      ],
    },
    sunnegga: {
      name: 'Sunnegga',
      shortName: 'Sunnegga',
      title: 'Funiculaire de Sunnegga et face est du Cervin',
      description: 'Le funiculaire de Sunnegga (2 288 m), la face est, le Stellisee, et quand cette terrasse vaut mieux que le Riffelsee.',
      aspectLabel: 'Face est depuis la terrasse inférieure',
      transportSummary: 'Funiculaire de Sunnegga depuis Zermatt',
      journeyTime: '4,5 minutes',
      bestTimeWindow: 'Première cabine, avant que la brise n’atteigne le Stellisee',
      heroStat: {
        label: 'Funiculaire',
        value: '4,5 min',
        detail: 'De Zermatt à la terrasse de 2 288 m',
      },
      quickFacts: [
        {
          label: 'Terrasse',
          value: '2 288 m',
          detail: 'Face est, plus large et plus basse que depuis le Riffelsee',
        },
        {
          label: 'Stellisee',
          value: '20 min à pied',
          detail: 'Poursuivre jusqu’à Blauherd (2 571 m), puis marcher jusqu’au lac à 2 537 m',
        },
        {
          label: 'Leisee',
          value: 'Sous la terrasse',
          detail: 'Le lac le plus facile, à quelques minutes du funiculaire',
        },
        {
          label: 'Par rapport au Riffelsee',
          value: 'Départ plus tardif',
          detail: 'Le train du Gornergrat atteint le Riffelsee vers 07h30. Sunnegga ouvre plus tard.',
        },
      ],
      keyTakeaways: [
        'Sunnegga est la terrasse du funiculaire à 2 288 m. La vue, c’est la face est, plus basse et plus lointaine que depuis le Riffelsee.',
        'Le Stellisee est le lac de reflet de ce versant. Une télécabine jusqu’à Blauherd, puis 20 minutes à pied.',
        'Choisissez Sunnegga pour le Leisee, les enfants et les 5 lacs. Choisissez le Riffelsee pour le plus grand reflet à la première lumière.',
      ],
      comparisonTable: {
        caption: 'Quand Sunnegga est la meilleure marche que le Riffelsee',
        headers: ['Sortie', 'Choisir Sunnegga', 'Choisir le Riffelsee'],
        rows: [
          [
            'Reflet le plus proche',
            'Stellisee, après la télécabine et 20 minutes à pied',
            'Cinq minutes en descente depuis Rotenboden. Le plus grand miroir de la face est.',
          ],
          [
            'Première lumière',
            'Le funiculaire ouvre vers 08h00',
            'Le premier train du Gornergrat peut vous déposer au lac vers 07h30',
          ],
          [
            'Journée facile',
            'Le Leisee est à côté de la terrasse. Pas de billet Gornergrat.',
            'Un billet de train jusqu’à Rotenboden, puis une courte descente',
          ],
        ],
      },
      sections: [
        {
          id: 'sunnegga-funicular',
          heading: 'Le funiculaire de Sunnegga',
          paragraphs: [
            'Le funiculaire quitte Zermatt et monte à la terrasse de Sunnegga, à 2 288 m, en environ quatre minutes et demie. La face est est devant vous, plus large et plus basse que depuis le Riffelsee.',
            'Le Leisee est juste sous la terrasse. C’est le lac à prendre avec des enfants, et il ne demande pas le train du Gornergrat.',
          ],
        },
        {
          id: 'stellisee',
          heading: 'Stellisee et face est',
          paragraphs: [
            'Le reflet de ce versant, c’est le Stellisee, à 2 537 m. Prenez la télécabine de Sunnegga à Blauherd (2 571 m), puis marchez environ 20 minutes. Le premier plan, ce sont des blocs et de la linaigrette ; le sommet est la même face est qu’au Riffelsee.',
            'L’eau ne reflète la montagne que de fin juin à octobre, et seulement tant que le vent reste sous environ 12 km/h. Un après-midi clair échoue dès que la brise se lève.',
          ],
        },
        {
          id: 'when-sunnegga-wins',
          heading: 'Quand Sunnegga bat la marche vers le Riffelsee',
          paragraphs: [
            'Le Riffelsee est le reflet le plus proche et le plus grand, et le premier train y arrive plus tôt. Sunnegga est la meilleure marche pour les 5 lacs (Stellisee, Grindjisee, Grünsee, Moosjisee, Leisee), avec des enfants, ou sans billet Gornergrat.',
            'Partez de Blauherd dès l’ouverture de la télécabine, pendant que le Stellisee est encore calme. Si le vent est déjà levé, le Grindjisee est plus bas, abrité par des mélèzes, et garde un reflet plus tard dans la journée.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Qu’est-ce que Sunnegga ?',
          answer:
            'Une terrasse de funiculaire à 2 288 m au-dessus de Zermatt. La montée dure environ 4,5 minutes. La vue, c’est la face est du Cervin, plus basse que depuis le Riffelsee.',
        },
        {
          question: 'Sunnegga ou Riffelsee : lequel est meilleur pour le reflet ?',
          answer:
            'Le Riffelsee, si vous voulez le plus grand miroir et le départ le plus tôt. Sunnegga est la terrasse la plus facile et le départ de la marche vers le Stellisee.',
        },
        {
          question: 'Comment rejoindre le Stellisee depuis Sunnegga ?',
          answer:
            'Prenez la télécabine jusqu’à Blauherd à 2 571 m, puis marchez environ 20 minutes jusqu’au Stellisee à 2 537 m.',
        },
      ],
    },
    'riffelsee': {
      name: 'Reflets lacustres de Sunnegga et Riffelsee',
      shortName: 'Reflets dans les lacs',
      title: 'Quelle montagne se reflète dans le Riffelsee ?',
      description: 'Mesure du vent en direct et clarté de l’eau pour réussir la légendaire photo du Cervin se reflétant dans le Riffelsee et le Stellisee.',
      aspectLabel: 'Reflet de la face Est (Lumière dorée du lever de soleil)',
      transportSummary: 'Train du Gornergrat jusqu’à Rotenboden ou funiculaire souterrain vers Sunnegga',
      journeyTime: '25–35 minutes par trajet',
      bestTimeWindow: 'Du lever du soleil à 09h30 CET (Vent nul avant la brise thermique diurne)',
      keyTakeaways: [
        'Pour un reflet miroir parfait, la vitesse du vent doit être inférieure à 12 km/h.',
        'Le lac est dégelé de fin juin à fin octobre ; en hiver et au printemps, il est recouvert de neige.',
        'Si le grand lac est ridé par le vent, marchez 100 m vers le deuxième petit lac abrité en contrebas.',
      ],
      heroStat: {
        label: 'Limite de vent pour le miroir',
        value: '< 12 km/h',
        detail: 'Au-dessus de 15 km/h, le Riffelsee et le Stellisee se rident',
      },
      quickFacts: [
        {
          label: 'Accès au Riffelsee',
          value: '5 min à pied',
          detail: 'Descendre du train du Gornergrat à Rotenboden (2 815 m) et marcher 60 m en descente',
        },
        {
          label: 'Accès au Stellisee',
          value: '20 min de marche',
          detail: 'Funiculaire de Sunnegga (2 288 m) + télécabine de Blauherd (2 571 m)',
        },
        {
          label: 'Eau libre',
          value: 'Mi-juin – oct.',
          detail: 'Lacs gelés et sous la neige de novembre à début juin',
        },
        {
          label: 'Plan B par vent',
          value: 'Riffelsee inférieur',
          detail: 'Un étang plus petit, 100 m à l’ouest, reste lisse quand le lac principal se ride',
        },
      ],
      comparisonTable: {
        caption: 'Riffelsee, Riffelsee inférieur et Stellisee',
        headers: ['Lac de reflet', 'Altitude', 'Depuis Zermatt', 'Premier plan et résistance au vent'],
        rows: [
          [
            'Riffelsee supérieur (lac principal)',
            '2 757 m',
            'Train du Gornergrat jusqu’à Rotenboden (28 min) + 5 min à pied',
            'Reflet du Cervin le plus proche et le plus grand ; exposé aux brises d’est et de sud après 10h00 CET.',
          ],
          [
            'Riffelsee inférieur (second étang)',
            '2 745 m',
            '2 min à l’ouest, au-delà du Riffelsee supérieur',
            'Forte résistance au vent, abrité par un talus ; meilleur recours quand le lac principal est ridé.',
          ],
          [
            'Stellisee (Sunnegga–Blauherd)',
            '2 537 m',
            'Funiculaire de Sunnegga + télécabine de Blauherd + 20 min à pied',
            'Blocs à demi immergés et linaigrette ; cadrage de vallée un peu plus large.',
          ],
          [
            'Grindjisee (5 lacs)',
            '2 334 m',
            '45 min sous le Stellisee, sur le sentier des 5 lacs',
            'Entouré de mélèzes, le meilleur abri au vent de tous les lacs de Zermatt, idéal en octobre.',
          ],
          [
            'Leisee (terrasse de Sunnegga)',
            '2 232 m',
            'Funiculaire de Sunnegga (4,5 min) + ascenseur',
            'Lac familial juste sous la terrasse ; accès le plus simple avec des enfants.',
          ],
        ],
      },
      sections: [
        {
          id: 'riffelsee-matterhorn-reflection-conditions',
          heading: '1. Les trois règles du reflet au Riffelsee et au Stellisee',
          paragraphs: [
            'Des milliers de visiteurs montent au Riffelsee ou au Stellisee par un après-midi ensoleillé en attendant la carte postale, et trouvent une eau sombre et ridée, sans reflet — ou un champ de neige en mai.',
            'Photographier la pyramide inversée du Cervin est un microclimat précis, régi par trois facteurs que vous pouvez vérifier ici avant de quitter Zermatt :',
          ],
          bulletPoints: [
            {
              bold: 'Règle 1 — Le vent de surface doit rester sous 12 km/h :',
              text: 'L’eau ne fait miroir qu’en l’absence de rides capillaires. À 0–10 km/h, le reflet est net. À 12–20 km/h, le sommet se brouille en traînées verticales. Au-dessus de 22 km/h, le reflet disparaît.',
            },
            {
              bold: 'Règle 2 — Les nuages moyens doivent être faibles (score ≥ 7/10) :',
              text: 'Le Riffelsee (2 757 m) et le Stellisee (2 537 m) regardent le sud-ouest, vers le sommet à 4 478 m. Une bande nuageuse entre 3 200 et 4 200 m masque le haut de la pyramide dans le ciel et dans l’eau.',
            },
            {
              bold: 'Règle 3 — Fenêtre de dégel (mi-juin à fin octobre) :',
              text: 'Entre 2 537 et 2 757 m, le Stellisee et le Riffelsee gèlent fin octobre ou en novembre et restent sous la neige jusqu’à la mi-juin ou la fin juin. Début juin, attendez des plaques turquoise à demi fondues.',
            },
          ],
          proTip: {
            label: 'L’astuce du Riffelsee inférieur',
            text: 'Ne quittez pas Rotenboden déçu si le grand lac est ridé. Marchez 100 m plus loin vers Riffelberg jusqu’au second étang (« Riffelsee inférieur »). Plus petit et protégé par une lèvre morainique, il reste plat jusqu’à 18–20 km/h de vent.',
          },
        },
        {
          id: 'sunnegga-vs-rotenboden-timing',
          heading: '2. Pourquoi le matin (07h15–09h30 CET) est décisif pour les reflets',
          paragraphs: [
            'Dans les hautes vallées, le vent suit un rythme quotidien strict. Le refroidissement nocturne stabilise l’air : les lacs sont morts calmes à l’aube. Vers 10h00 CET, le soleil chauffe les parois du Mattertal et les brises de pente montent à 15–25 km/h — elles rident les lacs au moment où les cumulus se forment sur l’arête du Hörnli.',
            'Le train à crémaillère du Gornergrat part de Zermatt à 07h00 CET en été. Vous descendez à Rotenboden à 07h28 CET et vous êtes au Riffelsee à 07h33 CET, dans un air immobile, avec la lumière dorée du matin sur la face Est.',
          ],
        },
        {
          id: 'five-lakes-hike-strategy',
          heading: '3. Sunnegga et la randonnée des 5 lacs (5-Seenweg)',
          paragraphs: [
            'Sur le 5-Seenweg (Stellisee, Grindjisee, Grünsee, Moosjisee, Leisee, 9,8 km, environ 2 h 30), partez toujours du haut (Blauherd, 2 571 m) dès l’ouverture de la télécabine, pour atteindre le Stellisee pendant que l’eau est encore calme. Même si une brise se lève plus tard, le Grindjisee (2 334 m) est abrité par de hauts mélèzes qui bloquent le vent et gardent un reflet jusqu’en après-midi.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Quelle montagne se reflète dans le Riffelsee ?',
          answer:
            'Le Cervin. Depuis l’arrêt de Rotenboden sur le train du Gornergrat, cinq minutes à pied mènent au Riffelsee, où la face est remplit le reflet. Sunnegga et le Stellisee montrent le même sommet sous un angle plus bas.',
        },
        {
          question: 'Les conditions de reflet au Riffelsee sont-elles bonnes aujourd’hui ?',
          answer:
            'Consultez la carte live Riffelsee et Stellisee en haut de cette page. Un miroir net demande un score de visibilité de 7–10/10 et un vent de surface sous 12 km/h, pendant la fenêtre sans glace de mi-juin à octobre.',
        },
        {
          question: 'Quel est le meilleur reflet du Cervin : Riffelsee ou Stellisee ?',
          answer:
            'Le Riffelsee (2 757 m, train du Gornergrat jusqu’à Rotenboden + 5 minutes à pied) offre le reflet le plus proche et le plus grand, et il est accessible plus tôt (07h30 CET), quand le vent est le plus calme. Le Stellisee (2 537 m, Sunnegga–Blauherd + 20 minutes à pied) offre les blocs de premier plan et le départ de la randonnée des 5 lacs.',
        },
        {
          question: 'Le Riffelsee est-il gelé en mai, en juin ou en novembre ?',
          answer:
            'Oui. À 2 757 m, le Riffelsee est gelé et sous la neige de novembre à début juin (domaine de ski et de raquettes du Gornergrat). Une fonte turquoise partielle a lieu en général entre le 10 et le 25 juin ; les reflets en eau libre vont de fin juin à fin octobre.',
        },
        {
          question: 'Que faire si le Riffelsee est trop venté pour un reflet ?',
          answer:
            'Marchez d’abord 100 m à l’ouest du bassin principal jusqu’au petit étang du « Riffelsee inférieur », dans un creux abrité, souvent lisse quand le grand lac est clapoteux. Sinon, un filtre ND de 6 ou 10 stops et une pose de 15 à 30 secondes lissent les rides en un reflet brumeux.',
        },
      ],
    },
    'zermatt-village': {
      name: 'Village de Zermatt (Kirchbrücke & Riedweg)',
      shortName: 'Village de Zermatt',
      title: 'Le Cervin depuis le village de Zermatt : Visibilité en direct & Webcam',
      description: 'Visibilité en temps réel du Cervin depuis le village de Zermatt (Kirchbrücke et Riedweg). Webcam en direct, lever de soleil et brouillard sans billet de remontée.',
      aspectLabel: 'Perspective vallée et rivière vers la face Est',
      transportSummary: '5 minutes à pied depuis la gare de Zermatt (Gratuit)',
      journeyTime: '0–10 minutes à pied',
      bestTimeWindow: '20 min avant le lever du soleil – 08h30 CET',
      keyTakeaways: [
        'Le Kirchbrücke est le meilleur point de vue gratuit de Zermatt sans payer de remontées.',
        'Arrivez 20 minutes avant le lever du soleil pour admirer l’embrasement de l’arête du Hörnli.',
        'Le chemin du Riedweg offre une vue panoramique sur les toits des chalets traditionnels.',
      ],
      heroStat: {
        label: 'Prix du billet',
        value: '0 CHF (gratuit)',
        detail: 'Pont et sentiers publics, accessibles 24 h/24 sans train de montagne',
      },
      quickFacts: [
        {
          label: 'Meilleur point',
          value: 'Pont Kirchbrücke',
          detail: 'Ligne directe au-dessus de la Mattervispa vers la face Est',
        },
        {
          label: 'Point surélevé',
          value: 'Riedweg / Mürini',
          detail: '10 minutes de montée au-dessus des toits, moins de monde',
        },
        {
          label: 'Heure dorée',
          value: 'Lueur sur le sommet',
          detail: 'La pointe s’allume rose et orange environ 15–20 minutes avant le lever dans la vallée',
        },
        {
          label: 'Risque de brouillard',
          value: 'Vérifier la base des nuages',
          detail: 'Le brouillard bas (< 2 000 m) masque le village même si les sommets sont dégagés',
        },
      ],
      comparisonTable: {
        caption: 'Points de vue publics dans le village de Zermatt',
        headers: ['Point de vue', 'Altitude', 'Marche depuis la gare', 'Usage et cadrage'],
        rows: [
          [
            'Kirchbrücke (pont de l’église)',
            '1 608 m',
            '8 min à pied',
            'Carte postale classique au-dessus de la Mattervispa ; rendez-vous du lever de soleil.',
          ],
          [
            'Riedweg / coteau de Mürini',
            '1 660 m',
            '15 min à pied (montée douce)',
            'Panorama surélevé, chalets de mélèze patinés menant l’œil vers le Cervin.',
          ],
          [
            'Pré inférieur de Hohbalmen',
            '1 750 m',
            '25 min à pied',
            'Lisière de pâturage calme, ligne de vue dégagée au-dessus des taxis électriques du village.',
          ],
          [
            'Kirchplatz / Zermatterhof',
            '1 620 m',
            '6 min à pied',
            'Centre historique, à côté de l’église Saint-Maurice et du Matterhorn Museum.',
          ],
        ],
      },
      sections: [
        {
          id: 'zermatt-village-matterhorn-views',
          heading: '1. Pourquoi la Kirchbrücke est le cœur de la photo à Zermatt',
          paragraphs: [
            'Il n’est pas toujours nécessaire de prendre un téléphérique ou un train à crémaillère pour voir le Cervin. La Kirchbrücke, sur la Mattervispa alimentée par le glacier, aligne le regard dans la vallée, droit sur la face Est déchiquetée et l’arête du Hörnli.',
            'Le pont est ouvert 24 heures sur 24 et gratuit. C’est le test du matin : si le sommet est net depuis la Kirchbrücke à l’aube, il est temps de monter aux stations.',
          ],
          bulletPoints: [
            {
              bold: 'Lueur d’aube :',
              text: 'Le Cervin regarde l’est : le soleil touche la pyramide alors que le village est encore à l’ombre. La pointe brille ambre et magenta pendant environ 15 minutes.',
            },
            {
              bold: 'Rivière au premier plan :',
              text: 'Les eaux glaciaires de la Mattervispa donnent de l’eau en mouvement et une ligne directrice vers le sommet.',
            },
            {
              bold: 'Éviter la foule du pont :',
              text: 'Les matins clairs, des dizaines de trépieds longent la rambarde. Pour le calme, continuez 10 minutes en montée vers le Riedweg / Mürini, au-dessus des toits de bois.',
            },
          ],
          proTip: {
            label: 'La règle de l’inversion basse',
            text: 'Si le village est dans un brouillard gris et froid, n’abandonnez pas. Quand les nuages bas sont denses et les nuages moyens ou hauts absents, le Gornergrat (3 089 m) et le Glacier Paradise (3 883 m) sont au-dessus des nuages, sous un ciel bleu.',
          },
        },
        {
          id: 'sunrise-timing-and-tips',
          heading: '2. Horaire et conseils photo depuis le village',
          paragraphs: [
            'Arrivez à la Kirchbrücke ou au Riedweg au moins 20 minutes avant l’heure officielle du lever. La première lumière n’apparaît pas au sol : elle touche d’abord l’aiguille du Cervin (4 478 m), puis descend le long de la paroi.',
            'En hiver, le village est sous la neige et les cheminées des chalets fument. En été et en automne, les mélèzes dorés des versants contrastent avec la pyramide de gneiss gris.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Peut-on voir le Cervin depuis le village de Zermatt ?',
          answer:
            'Oui. Le Cervin est nettement visible depuis plusieurs endroits publics du village, surtout la Kirchbrücke sur la Mattervispa et le chemin montant du Riedweg / Mürini, sans aucun billet.',
        },
        {
          question: 'Quel est le meilleur point de vue gratuit sur le Cervin à Zermatt ?',
          answer:
            'La Kirchbrücke est l’endroit gratuit le plus connu pour la lueur du lever. Pour un panorama sur les toits des chalets, avec moins de monde, montez 10 à 15 minutes le Riedweg.',
        },
        {
          question: 'À quelle heure le soleil se lève-t-il à la Kirchbrücke pour la lueur sur le Cervin ?',
          answer:
            'En été (juin–juillet), la lumière touche le sommet vers 05h30–05h50 CET. En automne (septembre–octobre), entre 06h45 et 07h30 CET. En hiver, vers 07h45–08h15 CET. Arrivez toujours 20 minutes avant l’heure officielle.',
        },
        {
          question: 'Que faire s’il y a du brouillard dans le village de Zermatt ?',
          answer:
            'Un stratus de vallée couvre souvent Zermatt vers 1 600 m alors que les sommets sont dégagés. Vérifiez les scores d’altitude : si le Gornergrat (3 089 m) ou le Glacier Paradise (3 883 m) affiche 8–10/10, prenez le train ou le téléphérique pour sortir au-dessus des nuages.',
        },
      ],
    },
  },
  it: {
    gornergrat: {
      name: 'Belvedere del Gornergrat',
      shortName: 'Gornergrat',
      title: 'Webcam e meteo del Gornergrat | Vedere il Cervino',
      description: 'Telemetria meteo in tempo reale a 3.089 m, orari del treno a cremagliera, riflessi del Riffelsee e panorama alpino a 360° su Zermatt.',
      aspectLabel: 'Parete Est / Nord-Est (Classica silhouette del Toblerone)',
      transportSummary: 'Ferrovia a cremagliera Gornergrat Bahn (GGB) dalla stazione di Zermatt',
      journeyTime: '33 minuti per tratta',
      bestTimeWindow: '07:00–11:00 CET (La luce del mattino illumina la parete Est)',
      keyTakeaways: [
        'La ferrovia a cremagliera è operativa con qualsiasi condizione atmosferica ed è molto resistente al vento.',
        'Le corse prima delle 10:00 garantiscono le condizioni di visibilità più stabili e limpide.',
        'Il lago Riffelsee si trova a soli 5 minuti a piedi in discesa dalla fermata di Rotenboden.',
      ],
      heroStat: {
        label: 'Distanza di vista',
        value: '9,1 km a est',
        detail: 'Vista libera sulla cresta dell’Hörnli e sulla parete est (4.478 m)',
      },
      quickFacts: [
        {
          label: 'Angolo di vista',
          value: 'Toblerone classico',
          detail: 'Silhouette a piramide, est e nord-est, con il famoso uncino',
        },
        {
          label: 'Resistenza al vento',
          value: 'Molto alta',
          detail: 'Il treno a cremagliera circola quando le funivie si fermano',
        },
        {
          label: 'Posto migliore',
          value: 'A destra (salita)',
          detail: 'Sedete a destra nel senso di salita: il Cervino resta in vista',
        },
        {
          label: 'Fermata lago inclusa',
          value: 'Rotenboden (2.757 m)',
          detail: 'Una fermata sotto il Gornergrat, per lo specchio del Riffelsee',
        },
      ],
      comparisonTable: {
        caption: 'Gornergrat Bahn: visibilità del Cervino fermata per fermata',
        headers: ['Fermata', 'Quota', 'Tempo', 'Linea di vista e perché scendere qui'],
        rows: [
          ['Zermatt Bahnhof', '1.608 m', '0 min', 'Capolinea di fronte ai binari FFS; salite a destra.'],
          ['Riffelalp', '2.222 m', '16 min', 'Limite del bosco: il Cervino incorniciato da vecchi cirmoli.'],
          ['Riffelberg', '2.582 m', '23 min', 'Alpe aperto, grandangolo sulle creste dell’Hörnli e di Furgg.'],
          ['Rotenboden (Riffelsee)', '2.815 m', '28 min', 'Scendete qui: 5 minuti a piedi fino al Riffelsee (2.757 m) e al riflesso.'],
          ['Cima del Gornergrat', '3.089 m', '33 min', 'Terrazza a 360° sul Cervino, sul ghiacciaio del Gorner e su 29 quattromila.'],
        ],
      },
      sections: [
        {
          id: 'can-you-see-matterhorn-from-gornergrat-today',
          heading: '1. Leggere il punteggio di visibilità del Gornergrat prima di comprare il biglietto',
          paragraphs: [
            'Un andata e ritorno della Gornergrat Bahn costa tra 92 e 132 CHF (50 % di sconto con Swiss Travel Pass o Carta metà prezzo) e non è rimborsato per le nuvole. Controllare la telemetria in quota prima di salire è essenziale.',
            'Dal villaggio di Zermatt, a 1.608 m, vedete solo lo strato più basso. Il motore del Gornergrat interroga celle Open-Meteo tarate a 3.089 m, 45.9840° N, 7.7845° E. Un punteggio di 8/10–10/10 («visibile») significa parete est e cresta dell’Hörnli libere. A 6/10 o 7/10 («parzialmente visibile») passano nubi, oppure una bandiera di foehn resta sulla vetta.',
          ],
          bulletPoints: [
            { bold: 'Punteggio 8–10/10 (partite subito):', text: 'La nuvolosità media (3.000 m) è sotto il 25 % e la portata ottica supera i 20 km sul ghiacciaio del Gorner.' },
            { bold: 'Punteggio 5–7/10 (confrontate mattina e pomeriggio):', text: 'Spesso una finestra limpida al mattino (06:00–11:00 CET), poi cumuli termici. Prendete il primo treno.' },
            { bold: 'Punteggio 1–4/10 (tenete il biglietto):', text: 'Uno strato spesso o precipitazioni avvolgono la fascia 3.000–4.478 m. Controllate la webcam a 360° del Gornergrat prima di spendere oltre 100 CHF.' },
          ],
          proTip: {
            label: 'Il segreto dell’inversione di valle',
            text: 'Se il villaggio è grigio e nebbioso, confrontate le schede «nebbia di valle (< 2.000 m)» e «nubi medie (2.000–6.000 m)». Con nebbia bassa oltre il 70 % e nubi medie sotto il 20 %, il treno del Gornergrat vi porta sopra la nebbia, al sole a 3.089 m.',
          },
        },
        {
          id: 'best-time-and-lighting-gornergrat',
          heading: '2. Orario migliore al Gornergrat: alpenglow del mattino o nubi del pomeriggio',
          paragraphs: [
            'Il Gornergrat sta a est-sud-est del Cervino. Il sole del mattino colpisce quindi la parete est fino alle 11:00 CET e disegna fasce di roccia, nevai e la cresta dell’Hörnli.',
            'Dopo le 14:00 CET il sole passa dietro il Cervino verso l’Italia — la parete vista dal Gornergrat va in controluce — e le brezze di valle condensano nubi pomeridiane attorno alla vetta.',
          ],
        },
        {
          id: 'gornergrat-train-tips',
          heading: '3. Treno a cremagliera: posto, fermate e Riffelsee',
          paragraphs: [
            'I biglietti giornalieri ordinari della Gornergrat Bahn non vanno mai esauriti. Compratelo sul telefono o allo sportello 5 minuti prima della partenza, quando il punteggio su questa pagina è alto.',
          ],
          bulletPoints: [
            { bold: 'In salita, sempre a destra:', text: 'Salite e sedete a destra (nel senso di marcia in salita). Dopo il ponte del Findelbach il Cervino riempie i finestrini di destra fino a 3.089 m.' },
            { bold: 'Scendete a Rotenboden:', text: 'Il biglietto Gornergrat vale per le fermate intermedie. Rotenboden (2.815 m), una fermata sotto la cima, è a 5 minuti a piedi dal Riffelsee.' },
          ],
        },
      ],
      faqs: [
        { question: 'Si vede il Cervino dal Gornergrat oggi?', answer: 'Leggete il punteggio live da 1 a 10, mattina e pomeriggio, in cima a questa pagina. Si aggiorna ogni 15 minuti per il Gornergrat (3.089 m). 8–10/10: piramide nitida. 6–7/10: parzialmente visibile, con nubi leggere di cresta. 1–4/10: la vetta è nelle nubi.' },
        { question: 'Il Gornergrat vale la pena se in paese è nuvoloso?', answer: 'Dipende dalla quota delle nubi. Se le nubi basse (< 2.000 m) sono fitte ma quelle medie (2.000–6.000 m) restano sotto il 25 %, il Gornergrat (3.089 m) è sopra la nebbia, al sole. Se le nubi medie superano il 70 %, la stazione è dentro lo strato: tenete il biglietto per una finestra più limpida.' },
        { question: 'Quale lato del treno del Gornergrat ha la vista migliore sul Cervino?', answer: 'A destra in salita da Zermatt al Gornergrat, a sinistra in discesa. Il Cervino resta visibile dal finestrino destro per quasi tutta la salita di 33 minuti.' },
        { question: 'Bisogna prenotare i biglietti del Gornergrat?', answer: 'No. I treni a cremagliera regolari non richiedono prenotazione e non si esauriscono. Controllate il punteggio del mattino e la webcam Roundshot il giorno stesso, prima di comprare.' },
      ],
    },
    'glacier-paradise': {
      name: 'Matterhorn Glacier Paradise (Piccolo Cervino)',
      shortName: 'Glacier Paradise',
      title: 'Funivia Klein Matterhorn, webcam e meteo',
      description: 'La stazione di funivia più alta d’Europa (3.883 m). Diagnosi delle nubi in quota, cabine 3S e vista vertiginosa sulla parete Sud del Cervino.',
      aspectLabel: 'Parete Sud / Sud-Ovest (Prospettiva glaciale d’alta quota)',
      transportSummary: 'Matterhorn Express + cabinovia trifune 3S da Zermatt / Furi',
      journeyTime: '40–45 minuti per tratta',
      bestTimeWindow: '08:30–12:30 CET (Ottima visibilità prima dei cumuli termici pomeridiani)',
      keyTakeaways: [
        'A 3.883 m di quota la terrazza si trova spesso al di sopra dell’inversione termica e della nebbia di valle.',
        'Venti di Föhn superiori a 50 km/h possono comportare la chiusura temporanea degli impianti più alti.',
        'Accesso al palazzo di ghiaccio scavato nelle profondità del ghiacciaio perenne.',
      ],
      heroStat: {
        label: 'Quota della piattaforma',
        value: '3.883 m',
        detail: 'La stazione di funivia più alta d’Europa — 794 m sopra il Gornergrat',
      },
      quickFacts: [
        { label: 'Angolo sul Cervino', value: 'Parete Sud / Furgg', detail: 'Muro trapezoidale da vicino, non l’uncino Toblerone' },
        { label: 'Vantaggio di inversione', value: 'Sopra la nebbia < 3.500 m', detail: 'Sale sopra gli strati invernali e autunnali della valle' },
        { label: 'Sensibilità al vento', value: 'Allerta foehn', detail: 'La 3S può fermarsi se il vento da sud supera 50–55 km/h' },
        { label: 'Con qualsiasi tempo', value: 'Palazzo di ghiaccio', detail: 'Gallerie a 15 m nel ghiacciaio, aperte anche con le nubi' },
      ],
      comparisonTable: {
        caption: 'Klein Matterhorn (3.883 m): tratte e angoli di vista',
        headers: ['Tratta / fermata', 'Quota', 'Vista sul Cervino e ruolo dell’atmosfera'],
        rows: [
          ['Furi', '1.867 m', 'Radura in forte pendenza verso le pareti est e Furgg.'],
          ['Schwarzsee (deviazione)', '2.583 m', 'Ai piedi della cresta dell’Hörnli; il miglior primo piano a media quota.'],
          ['Trockener Steg', '2.939 m', 'Stazione sulla lingua glaciale sotto la parete est/Furgg; cambio per la 3S.'],
          ['Matterhorn Glacier Paradise (Klein Matterhorn)', '3.883 m', 'Piattaforma a 360° su 38 quattromila tra Svizzera, Italia e Francia, compreso il Monte Bianco.'],
          ['Testa Grigia (traversata alpina)', '3.480 m', '3S transfrontaliera sulla cresta italiana, sopra Breuil-Cervinia.'],
        ],
      },
      sections: [
        {
          id: 'klein-matterhorn-view-silhouette',
          heading: '1. Come appare il Cervino dal Klein Matterhorn (3.883 m)?',
          paragraphs: [
            'Prima di salire al Matterhorn Glacier Paradise (Klein Matterhorn) conta l’angolo. Da Zermatt e dal Gornergrat vedete il Cervino da nord-est: le pareti est e nord formano la piramide Toblerone, stretta e uncinata.',
            'Matterhorn Express e 3S verso sud, fino al Klein Matterhorn (3.883 m), vi fanno ruotare di quasi 90 gradi. Dalla piattaforma guardate a nord-nord-ovest le pareti sud (italiana) e Furgg. Il Cervino diventa una cittadella larga uscita dal ghiacciaio, non un uncino sottile. Si vedono anche 38 quattromila fino al Monte Bianco (4.808 m) e al Gran Paradiso.',
          ],
          proTip: {
            label: 'Entrambi gli angoli nello stesso giorno',
            text: 'In salita o in discesa dal Glacier Paradise, scendete dal Matterhorn Express a Schwarzsee (2.583 m) o a Trockener Steg (2.939 m). A Trockener Steg siete quasi sotto la parete est di 1.500 m.',
          },
        },
        {
          id: 'klein-matterhorn-weather-and-fohn',
          heading: '2. Visibilità al Klein Matterhorn: inversione di valle o foehn da sud',
          paragraphs: [
            'La previsione del Klein Matterhorn è calcolata a 3.883 m (45.9383° N, 7.7297° E), perché il tempo spesso diverge da quello del Gornergrat (3.089 m).',
            'In autunno e in inverno l’aria fredda ristagna nel Mattertal sotto un’inversione verso 2.800–3.200 m. Il Klein Matterhorn sporge allora di quasi 700 m sopra il mare di nubi, in cielo blu (10/10).',
            'Con il foehn da sud, l’aria umida della Valle d’Aosta è spinta sul versante di Breuil e sul Colle del Teodulo (3.300 m). Il Klein Matterhorn è la prima cima di Zermatt colpita: a 3.883 m la visibilità può scendere a 2/10 mentre il Gornergrat, riparato 6 km a nord-est, tiene ancora 7/10.',
          ],
          bulletPoints: [
            { bold: 'Soglia di vento (> 50 km/h):', text: 'Controllate la scheda «vento e rischio foehn». La 3S moderna regge il vento meglio degli impianti vecchi, ma raffiche di 50–60 km/h a 3.883 m possono fermare la tratta Trockener Steg–Klein Matterhorn.' },
            { bold: 'Sotto zero tutto l’anno:', text: 'Anche a luglio e agosto l’aria a 3.883 m resta in genere tra −6 °C e +2 °C. Antivento, occhiali da ghiacciaio (categoria 3/4) e passi lenti sull’ultima scala verso la terrazza.' },
          ],
        },
        {
          id: 'lighting-and-best-time-klein-matterhorn',
          heading: '3. Orario migliore per fotografare al Klein Matterhorn',
          paragraphs: [
            'A differenza del Gornergrat, dove la parete est perde il sole diretto dopo mezzogiorno, il Klein Matterhorn guarda i versanti sud e ovest. La luce al Matterhorn Glacier Paradise migliora quindi da tarda mattina a primo pomeriggio (10:00–15:00 CET), quando il sole illumina le creste italiane.',
          ],
        },
      ],
      faqs: [
        { question: 'Com’è la visibilità al Klein Matterhorn oggi?', answer: 'Leggete l’indice live da 1 a 10, mattina e pomeriggio, per il Matterhorn Glacier Paradise / Klein Matterhorn (3.883 m) in cima a questa pagina. Aggiornato ogni 15 minuti con dati a 3.883 m, un punteggio di 8–10/10 indica una vista a 360° libera su parete sud, Breithorn e Monte Bianco.' },
        { question: 'Perché il Cervino appare diverso dal Klein Matterhorn (Glacier Paradise)?', answer: 'Il Klein Matterhorn (3.883 m) sta a sud-sud-est del Cervino, sulla cresta di confine italiana. Invece della piramide stretta est/nord vista da Zermatt e dal Gornergrat, vedete da vicino le pareti sud e ovest (italiane, lato Breuil), più larghe e ripide, sopra il ghiacciaio del Teodulo.' },
        { question: 'La funivia del Klein Matterhorn chiude con il vento forte?', answer: 'Sì. La 3S tra Trockener Steg (2.939 m) e Klein Matterhorn (3.883 m) è progettata per il vento, ma un foehn da sud o raffiche oltre 50–60 km/h possono chiudere temporaneamente il tratto superiore. Controllate vento e foehn prima di andare alla stazione di Zermatt Sud.' },
        { question: 'Il Glacier Paradise vale la pena con una visibilità di 5/10 o 6/10?', answer: 'Con 6/10 («parzialmente visibile») il biglietto resta utile: include il palazzo di ghiaccio, scavato 15 m nel ghiaccio e indifferente alle nubi, e la Cinema Lounge. A 4/10 o meno la piattaforma a 3.883 m è nel bianco: meglio rimandare.' },
      ],
    },
    sunnegga: {
      name: 'Sunnegga',
      shortName: 'Sunnegga',
      title: 'Funicolare Sunnegga e parete est del Cervino',
      description: 'La funicolare di Sunnegga (2.288 m), la parete est, lo Stellisee, e quando conviene rispetto al Riffelsee.',
      aspectLabel: 'Parete est dalla terrazza inferiore',
      transportSummary: 'Funicolare di Sunnegga da Zermatt',
      journeyTime: '4,5 minuti',
      bestTimeWindow: 'Prima cabina, prima che la brezza raggiunga lo Stellisee',
      heroStat: {
        label: 'Funicolare',
        value: '4,5 min',
        detail: 'Da Zermatt alla terrazza a 2.288 m',
      },
      quickFacts: [
        { label: 'Terrazza', value: '2.288 m', detail: 'Parete est da un angolo più largo e più basso rispetto al Riffelsee' },
        { label: 'Stellisee', value: '20 min a piedi', detail: 'Proseguire fino a Blauherd (2.571 m), poi camminare fino al lago a 2.537 m' },
        { label: 'Leisee', value: 'Sotto la terrazza', detail: 'Il lago più facile, a pochi minuti dalla funicolare' },
        { label: 'Rispetto al Riffelsee', value: 'Partenza più tardi', detail: 'Il treno del Gornergrat arriva al Riffelsee verso le 07:30. Sunnegga apre più tardi.' },
      ],
      keyTakeaways: [
        'Sunnegga è la terrazza della funicolare a 2.288 m. La vista è la parete est, più bassa e più lontana che dal Riffelsee.',
        'Lo Stellisee è il lago del riflesso su questo versante. Cabinovia fino a Blauherd, poi 20 minuti a piedi.',
        'Scegliete Sunnegga per il Leisee, i bambini e i 5 laghi. Scegliete il Riffelsee per il riflesso più grande alla prima luce.',
      ],
      comparisonTable: {
        caption: 'Quando Sunnegga è la camminata migliore rispetto al Riffelsee',
        headers: ['Uscita', 'Scegliere Sunnegga', 'Scegliere il Riffelsee'],
        rows: [
          ['Riflesso più vicino', 'Stellisee, dopo la cabinovia e 20 minuti a piedi', 'Cinque minuti in discesa da Rotenboden. Lo specchio più grande della parete est.'],
          ['Prima luce', 'La funicolare apre verso le 08:00', 'Il primo treno del Gornergrat può lasciarvi al lago verso le 07:30'],
          ['Giornata facile', 'Il Leisee è accanto alla terrazza. Niente biglietto Gornergrat.', 'Un biglietto ferroviario fino a Rotenboden, poi una breve discesa'],
        ],
      },
      sections: [
        {
          id: 'sunnegga-funicular',
          heading: 'La funicolare di Sunnegga',
          paragraphs: [
            'La funicolare lascia Zermatt e sale alla terrazza di Sunnegga, a 2.288 m, in circa quattro minuti e mezzo. La parete est è davanti a voi, più larga e più bassa che dal Riffelsee.',
            'Il Leisee è appena sotto la terrazza. È il lago da fare con i bambini e non richiede il treno del Gornergrat.',
          ],
        },
        {
          id: 'stellisee',
          heading: 'Stellisee e parete est',
          paragraphs: [
            'Il riflesso di questo versante è lo Stellisee, a 2.537 m. Prendete la cabinovia da Sunnegga a Blauherd (2.571 m), poi camminate circa 20 minuti. In primo piano massi e erioforo; la vetta è la stessa parete est del Riffelsee.',
            'L’acqua specchia la montagna solo da fine giugno a ottobre, e solo finché il vento resta sotto circa 12 km/h. Un pomeriggio limpido fallisce appena si alza la brezza.',
          ],
        },
        {
          id: 'when-sunnegga-wins',
          heading: 'Quando Sunnegga batte la camminata al Riffelsee',
          paragraphs: [
            'Il Riffelsee è il riflesso più vicino e più grande, e il primo treno ci arriva prima. Sunnegga è la camminata migliore per i 5 laghi (Stellisee, Grindjisee, Grünsee, Moosjisee, Leisee), con i bambini, o senza biglietto Gornergrat.',
            'Partite da Blauherd appena apre la cabinovia, mentre lo Stellisee è ancora calmo. Se il vento è già alzato, il Grindjisee è più basso, riparato dai larici, e tiene un riflesso più avanti nella giornata.',
          ],
        },
      ],
      faqs: [
        { question: 'Che cos’è Sunnegga?', answer: 'Una terrazza della funicolare a 2.288 m sopra Zermatt. La salita dura circa 4,5 minuti. La vista è la parete est del Cervino, più bassa che dal Riffelsee.' },
        { question: 'È meglio Sunnegga o il Riffelsee per il riflesso?', answer: 'Il Riffelsee, se volete lo specchio più grande e la partenza più presto. Sunnegga è la terrazza più facile e l’inizio della camminata allo Stellisee.' },
        { question: 'Come si raggiunge lo Stellisee da Sunnegga?', answer: 'Prendete la cabinovia fino a Blauherd a 2.571 m, poi camminate circa 20 minuti fino allo Stellisee a 2.537 m.' },
      ],
    },
    'riffelsee': {
      name: 'Riflessi lacustri di Sunnegga e Riffelsee',
      shortName: 'Riflessi nei laghi',
      title: 'Quale montagna si riflette nel Riffelsee?',
      description: 'Misurazione istantanea del vento e quiete delle acque per catturare il celebre riflesso del Cervino nel lago Riffelsee e Stellisee.',
      aspectLabel: 'Riflesso parete Est (Suggestiva luce dorata all’alba)',
      transportSummary: 'Treno Gornergrat fino a Rotenboden oppure funicolare sotterranea verso Sunnegga',
      journeyTime: '25–35 minuti per tratta',
      bestTimeWindow: 'Dall’alba alle 09:30 CET (Acqua perfettamente immobile prima delle brezze termiche)',
      keyTakeaways: [
        'Per un riflesso limpido la velocità del vento deve rimanere sotto i 12 km/h.',
        'I laghi sono liberi dal ghiaccio da fine giugno a fine ottobre.',
        'Se il lago principale è increspato, scendi 100 metri verso il laghetto inferiore riparato.',
      ],
      heroStat: {
        label: 'Limite di vento per lo specchio',
        value: '< 12 km/h',
        detail: 'Oltre 15 km/h il Riffelsee e lo Stellisee si increspano',
      },
      quickFacts: [
        { label: 'Accesso al Riffelsee', value: '5 min a piedi', detail: 'Scendere dal treno del Gornergrat a Rotenboden (2.815 m) e camminare 60 m in discesa' },
        { label: 'Accesso allo Stellisee', value: '20 min di cammino', detail: 'Funicolare di Sunnegga (2.288 m) + cabinovia di Blauherd (2.571 m)' },
        { label: 'Acqua libera', value: 'Metà giugno – ott.', detail: 'Laghi ghiacciati e sotto la neve da novembre a inizio giugno' },
        { label: 'Piano B con il vento', value: 'Riffelsee inferiore', detail: 'Uno stagno più piccolo, 100 m a ovest, resta liscio quando il lago principale si increspa' },
      ],
      comparisonTable: {
        caption: 'Riffelsee, Riffelsee inferiore e Stellisee',
        headers: ['Lago del riflesso', 'Quota', 'Da Zermatt', 'Primo piano e riparo dal vento'],
        rows: [
          ['Riffelsee superiore (lago principale)', '2.757 m', 'Treno del Gornergrat fino a Rotenboden (28 min) + 5 min a piedi', 'Riflesso del Cervino più vicino e più grande; esposto alle brezze da est e da sud dopo le 10:00 CET.'],
          ['Riffelsee inferiore (secondo stagno)', '2.745 m', '2 min a ovest, oltre il Riffelsee superiore', 'Ottimo riparo dal vento, dietro un argine naturale; la riserva migliore se il lago principale è increspato.'],
          ['Stellisee (Sunnegga–Blauherd)', '2.537 m', 'Funicolare di Sunnegga + cabinovia di Blauherd + 20 min a piedi', 'Massi semisommersi ed erioforo; inquadratura di valle un po’ più larga.'],
          ['Grindjisee (5 laghi)', '2.334 m', '45 min sotto lo Stellisee, sul sentiero dei 5 laghi', 'Circondato da larici, il miglior riparo dal vento tra i laghi di Zermatt, ideale a ottobre.'],
          ['Leisee (terrazza di Sunnegga)', '2.232 m', 'Funicolare di Sunnegga (4,5 min) + ascensore', 'Lago per famiglie appena sotto la terrazza; l’accesso più semplice con i bambini.'],
        ],
      },
      sections: [
        {
          id: 'riffelsee-matterhorn-reflection-conditions',
          heading: '1. Le tre regole del riflesso al Riffelsee e allo Stellisee',
          paragraphs: [
            'Migliaia di visitatori salgono al Riffelsee o allo Stellisee in un pomeriggio di sole aspettandosi la cartolina, e trovano acqua scura e increspata, senza riflesso — o un campo di neve a maggio.',
            'Fotografare la piramide rovesciata del Cervino è un microclima preciso, retto da tre fattori che potete verificare qui prima di lasciare Zermatt:',
          ],
          bulletPoints: [
            { bold: 'Regola 1 — Il vento in superficie deve restare sotto i 12 km/h:', text: 'L’acqua fa da specchio solo senza onde capillari. A 0–10 km/h il riflesso è netto. A 12–20 km/h la vetta si sfoca in strisce verticali. Oltre 22 km/h il riflesso sparisce.' },
            { bold: 'Regola 2 — Le nubi medie devono essere scarse (punteggio ≥ 7/10):', text: 'Riffelsee (2.757 m) e Stellisee (2.537 m) guardano a sud-ovest, verso la vetta a 4.478 m. Una fascia di nubi tra 3.200 e 4.200 m copre la cima della piramide nel cielo e nell’acqua.' },
            { bold: 'Regola 3 — Finestra di disgelo (metà giugno – fine ottobre):', text: 'Tra 2.537 e 2.757 m, Stellisee e Riffelsee gelano a fine ottobre o a novembre e restano sotto la neve fino a metà o fine giugno. A inizio giugno aspettatevi lastre turchesi mezze sciolte.' },
          ],
          proTip: {
            label: 'Il trucco del Riffelsee inferiore',
            text: 'Non lasciate Rotenboden delusi se il lago grande è increspato. Camminate altri 100 m verso Riffelberg fino al secondo stagno («Riffelsee inferiore»). Più piccolo e protetto da un labbro morenico, resta piatto fino a 18–20 km/h di vento.',
          },
        },
        {
          id: 'sunnegga-vs-rotenboden-timing',
          heading: '2. Perché il mattino (07:15–09:30 CET) è decisivo per i riflessi',
          paragraphs: [
            'Nelle alte valli il vento segue un ritmo quotidiano stretto. Il raffreddamento notturno stabilizza l’aria: i laghi sono fermi all’alba. Verso le 10:00 CET il sole scalda le pareti del Mattertal e le brezze di pendio salgono a 15–25 km/h — increspano i laghi proprio quando i cumuli si formano sulla cresta dell’Hörnli.',
            'Il treno a cremagliera del Gornergrat parte da Zermatt alle 07:00 CET in estate. Scendete a Rotenboden alle 07:28 CET e siete al Riffelsee alle 07:33 CET, in aria immobile, con la luce dorata del mattino sulla parete est.',
          ],
        },
        {
          id: 'five-lakes-hike-strategy',
          heading: '3. Sunnegga e il sentiero dei 5 laghi (5-Seenweg)',
          paragraphs: [
            'Sul 5-Seenweg (Stellisee, Grindjisee, Grünsee, Moosjisee, Leisee, 9,8 km, circa 2 ore e mezza) partite sempre dall’alto (Blauherd, 2.571 m) appena apre la cabinovia, per arrivare allo Stellisee mentre l’acqua è ancora calma. Anche se più tardi si alza una brezza, il Grindjisee (2.334 m) è riparato da larici alti che bloccano il vento e tengono un riflesso fino al pomeriggio.',
          ],
        },
      ],
      faqs: [
        { question: 'Quale montagna si riflette nel Riffelsee?', answer: 'Il Cervino. Dalla fermata di Rotenboden sulla ferrovia del Gornergrat, cinque minuti a piedi portano al Riffelsee, dove la parete est riempie il riflesso. Sunnegga e lo Stellisee mostrano la stessa vetta da un angolo più basso.' },
        { question: 'Le condizioni di riflesso al Riffelsee sono buone oggi?', answer: 'Controllate la scheda live di Riffelsee e Stellisee in cima a questa pagina. Uno specchio nitido richiede un punteggio di visibilità di 7–10/10 e vento in superficie sotto i 12 km/h, nella finestra senza ghiaccio da metà giugno a ottobre.' },
        { question: 'Qual è il riflesso migliore del Cervino: Riffelsee o Stellisee?', answer: 'Il Riffelsee (2.757 m, treno del Gornergrat fino a Rotenboden + 5 minuti a piedi) offre il riflesso più vicino e più grande, ed è raggiungibile prima (07:30 CET), quando il vento è più calmo. Lo Stellisee (2.537 m, Sunnegga–Blauherd + 20 minuti a piedi) offre i massi in primo piano e l’inizio della camminata dei 5 laghi.' },
        { question: 'Il Riffelsee è ghiacciato a maggio, giugno o novembre?', answer: 'Sì. A 2.757 m il Riffelsee è ghiacciato e sotto la neve da novembre a inizio giugno (area sci e ciaspole del Gornergrat). Uno scioglimento turchese parziale avviene di solito tra il 10 e il 25 giugno; i riflessi in acqua libera vanno da fine giugno a fine ottobre.' },
        { question: 'Cosa fare se il Riffelsee è troppo ventoso per un riflesso?', answer: 'Camminate prima 100 m a ovest del bacino principale fino al piccolo stagno del «Riffelsee inferiore», in una conca riparata, spesso liscio quando il lago grande è mosso. In alternativa, un filtro ND da 6 o 10 stop e una posa di 15–30 secondi lisciano le increspature in un riflesso velato.' },
      ],
    },
    'zermatt-village': {
      name: 'Villaggio di Zermatt (Kirchbrücke & Riedweg)',
      shortName: 'Villaggio di Zermatt',
      title: 'Il Cervino dal villaggio di Zermatt: Visibilità live & Webcam Kirchbrücke',
      description: 'Visibilità in tempo reale del Cervino dal centro di Zermatt (ponte Kirchbrücke e Riedweg). Webcam in diretta e alba senza biglietto degli impianti.',
      aspectLabel: 'Prospettiva della valle e della parete Est',
      transportSummary: '5 minuti a piedi dalla stazione di Zermatt (Gratuito)',
      journeyTime: '0–10 minuti a piedi',
      bestTimeWindow: '20 minuti prima dell’alba – 08:30 CET',
      keyTakeaways: [
        'Kirchbrücke è il più celebre punto panoramico gratuito nel centro di Zermatt.',
        'Arrivate 20–30 minuti prima dell’alba per ammirare il primo raggio rosa sulla vetta.',
        'La salita al Riedweg regala una prospettiva elevata sopra i tetti di legno tradizionali.',
      ],
      heroStat: {
        label: 'Costo del biglietto',
        value: '0 CHF (gratis)',
        detail: 'Ponte e sentieri pubblici, aperti 24 ore su 24, senza ferrovie di montagna',
      },
      quickFacts: [
        { label: 'Punto migliore', value: 'Ponte Kirchbrücke', detail: 'Linea diretta sopra la Mattervispa verso la parete est' },
        { label: 'Punto elevato', value: 'Riedweg / Mürini', detail: '10 minuti in salita sopra i tetti, meno folla' },
        { label: 'Ora d’oro', value: 'Alpenglow sulla vetta', detail: 'La punta si accende di rosa e arancio circa 15–20 minuti prima dell’alba in valle' },
        { label: 'Rischio di nebbia', value: 'Controllare la base delle nubi', detail: 'La nebbia bassa (< 2.000 m) copre il villaggio anche se le vette sono libere' },
      ],
      comparisonTable: {
        caption: 'Punti di vista pubblici nel villaggio di Zermatt',
        headers: ['Punto di vista', 'Quota', 'Cammino dalla stazione', 'Uso e inquadratura'],
        rows: [
          ['Kirchbrücke (ponte della chiesa)', '1.608 m', '8 min a piedi', 'Cartolina classica sopra la Mattervispa; il ritrovo dell’alba.'],
          ['Riedweg / pendio di Mürini', '1.660 m', '15 min a piedi (salita dolce)', 'Panorama rialzato, chalet di larice stagionati che portano l’occhio al Cervino.'],
          ['Prato inferiore di Hohbalmen', '1.750 m', '25 min a piedi', 'Bordo di pascolo tranquillo, linea di vista libera sopra i taxi elettrici del paese.'],
          ['Kirchplatz / Zermatterhof', '1.620 m', '6 min a piedi', 'Centro storico, accanto alla chiesa di San Maurizio e al Matterhorn Museum.'],
        ],
      },
      sections: [
        {
          id: 'zermatt-village-matterhorn-views',
          heading: '1. Perché la Kirchbrücke è il cuore della fotografia a Zermatt',
          paragraphs: [
            'Non serve sempre una funivia o un treno a cremagliera per vedere il Cervino. La Kirchbrücke, sulla Mattervispa alimentata dal ghiacciaio, allinea lo sguardo lungo la valle, dritto sulla parete est frastagliata e sulla cresta dell’Hörnli.',
            'Il ponte è aperto 24 ore su 24 ed è gratuito. È la prova del mattino: se la vetta è nitida dalla Kirchbrücke all’alba, è il momento di salire alle stazioni.',
          ],
          bulletPoints: [
            { bold: 'Alpenglow del mattino:', text: 'Il Cervino guarda a est: il sole tocca la piramide mentre il villaggio è ancora in ombra. La punta brilla ambra e magenta per circa 15 minuti.' },
            { bold: 'Fiume in primo piano:', text: 'Le acque glaciali della Mattervispa danno acqua in movimento e una linea guida verso la vetta.' },
            { bold: 'Evitare la folla del ponte:', text: 'Nelle mattine limpide decine di treppiedi fiancheggiano la ringhiera. Per la quiete continuate 10 minuti in salita verso Riedweg / Mürini, sopra i tetti di legno.' },
          ],
          proTip: {
            label: 'La regola dell’inversione bassa',
            text: 'Se il villaggio è avvolto da nebbia grigia e fredda, non arrendetevi. Quando le nubi basse sono fitte e quelle medie o alte assenti, Gornergrat (3.089 m) e Glacier Paradise (3.883 m) stanno sopra le nubi, sotto un cielo blu.',
          },
        },
        {
          id: 'sunrise-timing-and-tips',
          heading: '2. Orario e consigli foto dal villaggio',
          paragraphs: [
            'Arrivate alla Kirchbrücke o al Riedweg almeno 20 minuti prima dell’alba ufficiale. La prima luce non compare a terra: tocca prima l’ago del Cervino (4.478 m), poi scende lungo la parete.',
            'In inverno il villaggio è sotto la neve e i camini dei chalet fumano. In estate e in autunno i larici dorati dei versanti contrastano con la piramide di gneiss grigio.',
          ],
        },
      ],
      faqs: [
        { question: 'Si vede il Cervino dal villaggio di Zermatt?', answer: 'Sì. Il Cervino è ben visibile da diversi punti pubblici del villaggio, soprattutto dalla Kirchbrücke sulla Mattervispa e dal sentiero in salita del Riedweg / Mürini, senza alcun biglietto.' },
        { question: 'Qual è il miglior punto di vista gratuito sul Cervino a Zermatt?', answer: 'La Kirchbrücke è il posto gratuito più noto per l’alpenglow dell’alba. Per un panorama sui tetti dei chalet, con meno gente, salite 10–15 minuti il Riedweg.' },
        { question: 'A che ora sorge il sole alla Kirchbrücke per l’alpenglow sul Cervino?', answer: 'In estate (giugno–luglio) la luce tocca la vetta verso le 05:30–05:50 CET. In autunno (settembre–ottobre) tra le 06:45 e le 07:30 CET. In inverno verso le 07:45–08:15 CET. Arrivate sempre 20 minuti prima dell’ora ufficiale.' },
        { question: 'Cosa fare se c’è nebbia nel villaggio di Zermatt?', answer: 'Uno strato di valle copre spesso Zermatt verso 1.600 m mentre le vette sono libere. Controllate i punteggi in quota: se Gornergrat (3.089 m) o Glacier Paradise (3.883 m) segnano 8–10/10, prendete il treno o la funivia per uscire sopra le nubi.' },
      ],
    },
  },
  es: {
    gornergrat: {
      name: 'Mirador de Gornergrat',
      shortName: 'Gornergrat',
      title: 'Mirador de Gornergrat: Visibilidad en vivo, cámaras y panorama del Cervino',
      description: 'Telemetría de visibilidad a 3.089 m, tren cremallera desde Zermatt, reflejos en el lago Riffelsee y panorama alpino de 360°.',
      aspectLabel: 'Cara Este / Noreste (Perfil clásico de Toblerone)',
      transportSummary: 'Tren cremallera Gornergrat Bahn (GGB) desde la estación de Zermatt',
      journeyTime: '33 minutos por trayecto',
      bestTimeWindow: '07:00–11:00 CET (La luz matinal ilumina de lleno la cara Este)',
      keyTakeaways: [
        'El tren cremallera opera con cualquier clima y es el transporte más resistente al viento en Zermatt.',
        'Las subidas antes de las 10:00 CET ofrecen las mayores probabilidades de cielo completamente despejado.',
        'El lago Riffelsee se encuentra a solo 5 minutos caminando cuesta abajo desde la estación Rotenboden.',
      ],
      heroStat: {
        label: 'Distancia de visión',
        value: '9,1 km al este',
        detail: 'Vista despejada de la arista Hörnli y la cara este (4.478 m)',
      },
      quickFacts: [
        { label: 'Ángulo de vista', value: 'Toblerone clásico', detail: 'Silueta piramidal del este y noreste, con el gancho icónico' },
        { label: 'Resistencia al viento', value: 'Muy alta', detail: 'El tren cremallera circula cuando los teleféricos cierran' },
        { label: 'Mejor asiento', value: 'A la derecha (subida)', detail: 'Siéntese a la derecha en sentido de subida: el Cervino no se pierde' },
        { label: 'Parada del lago', value: 'Rotenboden (2.757 m)', detail: 'Una parada bajo Gornergrat, para el espejo del Riffelsee' },
      ],
      comparisonTable: {
        caption: 'Gornergrat Bahn: visibilidad del Cervino parada a parada',
        headers: ['Estación', 'Altitud', 'Tiempo', 'Línea de vista y por qué bajar aquí'],
        rows: [
          ['Zermatt Bahnhof', '1.608 m', '0 min', 'Terminal frente a las vías de los CFF; suba por el lado derecho.'],
          ['Riffelalp', '2.222 m', '16 min', 'Límite del bosque: el Cervino enmarcado por pinos cembros viejos.'],
          ['Riffelberg', '2.582 m', '23 min', 'Pradera abierta, gran angular de las aristas Hörnli y Furgg.'],
          ['Rotenboden (Riffelsee)', '2.815 m', '28 min', 'Baje aquí: 5 minutos a pie hasta el Riffelsee (2.757 m) y el reflejo.'],
          ['Cima de Gornergrat', '3.089 m', '33 min', 'Terraza de 360° frente al Cervino, el glaciar Gorner y 29 cuatromiles.'],
        ],
      },
      sections: [
        {
          id: 'can-you-see-matterhorn-from-gornergrat-today',
          heading: '1. Cómo leer la puntuación de visibilidad de Gornergrat antes de comprar el billete',
          paragraphs: [
            'Un ida y vuelta del Gornergrat Bahn cuesta entre 92 y 132 CHF (50 % de descuento con el Swiss Travel Pass o la tarjeta de media tarifa) y no se reembolsa por nubes. Conviene mirar la telemetría de altura antes de subir.',
            'Desde el pueblo de Zermatt, a 1.608 m, solo se ve la capa más baja. El motor de Gornergrat consulta celdas de Open-Meteo calibradas a 3.089 m, 45.9840° N, 7.7845° E. Una puntuación de 8/10 a 10/10 («visible») significa cara este y arista Hörnli despejadas. Con 6/10 o 7/10 («parcialmente visible») pasan nubes, o una bandera de foehn queda en la cumbre.',
          ],
          bulletPoints: [
            { bold: 'Puntuación 8–10/10 (suba ya):', text: 'La nubosidad media (3.000 m) está por debajo del 25 % y el alcance óptico supera los 20 km sobre el glaciar Gorner.' },
            { bold: 'Puntuación 5–7/10 (compare mañana y tarde):', text: 'Suele haber una ventana clara por la mañana (06:00–11:00 CET) y cúmulos térmicos después. Tome el primer tren.' },
            { bold: 'Puntuación 1–4/10 (guarde el billete):', text: 'Un estrato espeso o precipitación envuelve la franja de 3.000–4.478 m. Mire la webcam de 360° de Gornergrat antes de gastar más de 100 CHF.' },
          ],
          proTip: {
            label: 'El secreto de la inversión del valle',
            text: 'Si el pueblo está gris y con niebla, compare las tarjetas «niebla de valle (< 2.000 m)» y «nubes medias (2.000–6.000 m)». Con niebla baja por encima del 70 % y nubes medias por debajo del 20 %, el tren de Gornergrat le saca de la niebla al sol, a 3.089 m.',
          },
        },
        {
          id: 'best-time-and-lighting-gornergrat',
          heading: '2. Mejor hora en Gornergrat: resplandor del amanecer o nubes de la tarde',
          paragraphs: [
            'Gornergrat está al este-sureste del Cervino. El sol de la mañana da de lleno en la cara este hasta las 11:00 CET y marca bandas de roca, neveros y la arista Hörnli.',
            'Después de las 14:00 CET el sol pasa detrás del Cervino hacia Italia — la pared vista desde Gornergrat queda a contraluz — y las brisas del valle condensan nubes de tarde alrededor de la cumbre.',
          ],
        },
        {
          id: 'gornergrat-train-tips',
          heading: '3. Tren cremallera: asiento, paradas y Riffelsee',
          paragraphs: [
            'Los billetes de día normales del Gornergrat Bahn nunca se agotan. Cómprelo en el teléfono o en taquilla 5 minutos antes de salir, cuando la puntuación de esta página sea alta.',
          ],
          bulletPoints: [
            { bold: 'Siempre a la derecha al subir:', text: 'Suba y siéntese a la derecha (en el sentido de la subida). Tras el puente del Findelbach, el Cervino llena las ventanillas de la derecha hasta 3.089 m.' },
            { bold: 'Baje en Rotenboden:', text: 'El billete de Gornergrat vale para las paradas intermedias. Rotenboden (2.815 m), una parada bajo la cima, está a 5 minutos a pie del Riffelsee.' },
          ],
        },
      ],
      faqs: [
        { question: '¿Se ve el Cervino desde Gornergrat hoy?', answer: 'Mire la puntuación en vivo de 1 a 10, mañana y tarde, al principio de esta página. Se actualiza cada 15 minutos para Gornergrat (3.089 m). 8–10/10: pirámide nítida. 6–7/10: parcialmente visible, con nubes ligeras en la arista. 1–4/10: la cumbre está entre nubes.' },
        { question: '¿Merece la pena Gornergrat si en el pueblo está nublado?', answer: 'Depende de la altura de las nubes. Si las nubes bajas (< 2.000 m) son densas pero las medias (2.000–6.000 m) quedan por debajo del 25 %, Gornergrat (3.089 m) está sobre la niebla, al sol. Si las nubes medias superan el 70 %, la estación está dentro de la capa: guarde el billete para una ventana más clara.' },
        { question: '¿Qué lado del tren de Gornergrat tiene la mejor vista del Cervino?', answer: 'A la derecha subiendo de Zermatt a Gornergrat, y a la izquierda bajando. El Cervino se ve por la ventanilla derecha durante casi toda la subida de 33 minutos.' },
        { question: '¿Hay que reservar los billetes de Gornergrat?', answer: 'No. Los trenes cremallera regulares no exigen reserva y no se agotan. Espere a la puntuación de la mañana y a la webcam Roundshot el mismo día antes de comprar.' },
      ],
    },
    'glacier-paradise': {
      name: 'Matterhorn Glacier Paradise (Klein Matterhorn)',
      shortName: 'Glacier Paradise',
      title: 'Matterhorn Glacier Paradise: Visibilidad en directo y webcams a 3.883 m',
      description: 'La estación de teleférico más alta de Europa (3.883 m). Diagnóstico de nubes en tiempo real, góndola 3S y vistas únicas de la cara Sur.',
      aspectLabel: 'Cara Sur / Suroeste (Perspectiva glaciar de gran altitud)',
      transportSummary: 'Matterhorn Express + teleférico 3S desde Zermatt / Furi',
      journeyTime: '40–45 minutos por trayecto',
      bestTimeWindow: '08:30–12:30 CET (Mejor iluminación antes de las nubes térmicas de la tarde)',
      keyTakeaways: [
        'A 3.883 m de altitud, el mirador se sitúa con frecuencia por encima de la niebla baja de los valles.',
        'Vientos de Föhn superiores a 50 km/h pueden suspender temporalmente el tramo superior por seguridad.',
        'Palacio de hielo tallado en el interior del glaciar y esquí abierto los 365 días del año.',
      ],
      heroStat: {
        label: 'Altitud de la plataforma',
        value: '3.883 m',
        detail: 'La estación de teleférico más alta de Europa — 794 m por encima de Gornergrat',
      },
      quickFacts: [
        { label: 'Ángulo del Cervino', value: 'Cara sur / Furgg', detail: 'Muro trapezoidal de cerca, no el gancho Toblerone' },
        { label: 'Ventaja de inversión', value: 'Sobre la niebla < 3.500 m', detail: 'Sube por encima de los estratos de invierno y otoño en el valle' },
        { label: 'Sensibilidad al viento', value: 'Alerta de foehn', detail: 'El 3S puede pararse si el viento del sur supera 50–55 km/h' },
        { label: 'Con cualquier tiempo', value: 'Palacio de hielo', detail: 'Galerías a 15 m dentro del glaciar, abiertas incluso con nubes' },
      ],
      comparisonTable: {
        caption: 'Klein Matterhorn (3.883 m): tramos y ángulos de vista',
        headers: ['Tramo / parada', 'Altitud', 'Vista del Cervino y papel de la atmósfera'],
        rows: [
          ['Furi', '1.867 m', 'Claro de bosque en fuerte pendiente hacia las caras este y Furgg.'],
          ['Schwarzsee (desvío)', '2.583 m', 'Al pie de la arista Hörnli; el mejor primer plano a media altura.'],
          ['Trockener Steg', '2.939 m', 'Estación en la lengua glaciar bajo la pared este/Furgg; transbordo al 3S.'],
          ['Matterhorn Glacier Paradise (Klein Matterhorn)', '3.883 m', 'Plataforma de 360° sobre 38 cuatromiles de Suiza, Italia y Francia, incluido el Mont Blanc.'],
          ['Testa Grigia (travesía alpina)', '3.480 m', '3S transfronterizo en la cresta italiana, sobre Breuil-Cervinia.'],
        ],
      },
      sections: [
        {
          id: 'klein-matterhorn-view-silhouette',
          heading: '1. ¿Cómo se ve el Cervino desde el Klein Matterhorn (3.883 m)?',
          paragraphs: [
            'Antes de subir al Matterhorn Glacier Paradise (Klein Matterhorn) importa el ángulo. Desde Zermatt y Gornergrat se ve el Cervino desde el noreste: las caras este y norte forman la pirámide Toblerone, estrecha y ganchuda.',
            'El Matterhorn Express y el 3S hacia el sur, hasta el Klein Matterhorn (3.883 m), le hacen girar casi 90 grados. Desde la plataforma se mira hacia el nornoroeste, a las caras sur (italiana) y Furgg. El Cervino parece una ciudadela ancha salida del glaciar, no un gancho fino. También se ven 38 cuatromiles hasta el Mont Blanc (4.808 m) y el Gran Paradiso.',
          ],
          proTip: {
            label: 'Los dos ángulos en el mismo día',
            text: 'De subida o de bajada del Glacier Paradise, baje del Matterhorn Express en Schwarzsee (2.583 m) o en Trockener Steg (2.939 m). En Trockener Steg está casi bajo la pared este de 1.500 m.',
          },
        },
        {
          id: 'klein-matterhorn-weather-and-fohn',
          heading: '2. Visibilidad en el Klein Matterhorn: inversión del valle o foehn del sur',
          paragraphs: [
            'La previsión del Klein Matterhorn se calcula a 3.883 m (45.9383° N, 7.7297° E), porque el tiempo suele apartarse del de Gornergrat (3.089 m).',
            'En otoño e invierno el aire frío se estanca en el Mattertal bajo una inversión hacia 2.800–3.200 m. El Klein Matterhorn asoma entonces casi 700 m sobre el mar de nubes, en cielo azul (10/10).',
            'Con foehn del sur, el aire húmedo del Valle de Aosta se empuja por la ladera de Breuil y el collado del Teodulo (3.300 m). El Klein Matterhorn es la primera cumbre de Zermatt que recibe esa pared de humedad: a 3.883 m la visibilidad puede caer a 2/10 mientras Gornergrat, resguardado 6 km al noreste, sigue en 7/10.',
          ],
          bulletPoints: [
            { bold: 'Umbral de viento (> 50 km/h):', text: 'Mire la tarjeta «viento y riesgo de foehn». El 3S moderno aguanta mejor el viento que los remontes antiguos, pero rachas de 50–60 km/h a 3.883 m pueden parar el tramo Trockener Steg–Klein Matterhorn.' },
            { bold: 'Bajo cero todo el año:', text: 'Incluso en julio y agosto el aire a 3.883 m suele estar entre −6 °C y +2 °C. Cortavientos, gafas de glaciar (categoría 3/4) y pasos lentos en la última escalera hacia la terraza.' },
          ],
        },
        {
          id: 'lighting-and-best-time-klein-matterhorn',
          heading: '3. Mejor hora para fotografiar en el Klein Matterhorn',
          paragraphs: [
            'A diferencia de Gornergrat, donde la cara este pierde el sol directo después del mediodía, el Klein Matterhorn mira las vertientes sur y oeste. La luz en el Matterhorn Glacier Paradise mejora desde media mañana hasta primera hora de la tarde (10:00–15:00 CET), cuando el sol ilumina las aristas italianas.',
          ],
        },
      ],
      faqs: [
        { question: '¿Cómo está la visibilidad en el Klein Matterhorn hoy?', answer: 'Mire el índice en vivo de 1 a 10, mañana y tarde, del Matterhorn Glacier Paradise / Klein Matterhorn (3.883 m) al principio de esta página. Actualizado cada 15 minutos con datos a 3.883 m, una puntuación de 8–10/10 indica una vista de 360° despejada de la cara sur, el Breithorn y el Mont Blanc.' },
        { question: '¿Por qué el Cervino se ve distinto desde el Klein Matterhorn (Glacier Paradise)?', answer: 'El Klein Matterhorn (3.883 m) está al sur-sureste del Cervino, en la cresta fronteriza italiana. En lugar de la pirámide estrecha este/norte que se ve desde Zermatt y Gornergrat, se ven de cerca las caras sur y oeste (italianas, lado Breuil), más anchas y empinadas, sobre el glaciar del Teodulo.' },
        { question: '¿El teleférico del Klein Matterhorn cierra con viento fuerte?', answer: 'Sí. El 3S entre Trockener Steg (2.939 m) y el Klein Matterhorn (3.883 m) está pensado para el viento, pero un foehn del sur o rachas por encima de 50–60 km/h pueden cerrar temporalmente el tramo superior. Compruebe el viento y el foehn antes de ir a la estación de Zermatt Sur.' },
        { question: '¿Merece la pena Glacier Paradise con una visibilidad de 5/10 o 6/10?', answer: 'Con 6/10 («parcialmente visible») el billete sigue compensando: incluye el palacio de hielo, excavado a 15 m en el hielo e indiferente a las nubes, y el Cinema Lounge. Con 4/10 o menos, la plataforma a 3.883 m está en blanco: mejor aplazar.' },
      ],
    },
    sunnegga: {
      name: 'Sunnegga',
      shortName: 'Sunnegga',
      title: 'Funicular de Sunnegga y cara este del Cervino',
      description: 'El funicular de Sunnegga (2.288 m), la cara este, el Stellisee y cuándo este mirador conviene más que el Riffelsee.',
      aspectLabel: 'Cara este desde la terraza inferior',
      transportSummary: 'Funicular de Sunnegga desde Zermatt',
      journeyTime: '4,5 minutos',
      bestTimeWindow: 'Primera cabina, antes de que la brisa llegue al Stellisee',
      heroStat: {
        label: 'Funicular',
        value: '4,5 min',
        detail: 'De Zermatt a la terraza de 2.288 m',
      },
      quickFacts: [
        { label: 'Terraza', value: '2.288 m', detail: 'Cara este desde un ángulo más amplio y más bajo que el Riffelsee' },
        { label: 'Stellisee', value: '20 min a pie', detail: 'Seguir hasta Blauherd (2.571 m) y caminar hasta el lago a 2.537 m' },
        { label: 'Leisee', value: 'Bajo la terraza', detail: 'El lago más fácil, a pocos minutos del funicular' },
        { label: 'Frente al Riffelsee', value: 'Salida más tarde', detail: 'El tren de Gornergrat llega al Riffelsee hacia las 07:30. Sunnegga abre más tarde.' },
      ],
      keyTakeaways: [
        'Sunnegga es la terraza del funicular a 2.288 m. La vista es la cara este, más baja y más lejana que desde el Riffelsee.',
        'El Stellisee es el lago del reflejo en esta vertiente. Telecabina hasta Blauherd y 20 minutos a pie.',
        'Elija Sunnegga para el Leisee, los niños y la ruta de los 5 lagos. Elija el Riffelsee si quiere el reflejo más grande con la primera luz.',
      ],
      comparisonTable: {
        caption: 'Cuándo Sunnegga es mejor paseo que el Riffelsee',
        headers: ['Salida', 'Elegir Sunnegga', 'Elegir el Riffelsee'],
        rows: [
          ['Reflejo más cercano', 'Stellisee, tras la telecabina y 20 minutos a pie', 'Cinco minutos cuesta abajo desde Rotenboden. El espejo más grande de la cara este.'],
          ['Primera luz', 'El funicular abre hacia las 08:00', 'El primer tren de Gornergrat puede dejarle en el lago hacia las 07:30'],
          ['Día fácil', 'El Leisee está junto a la terraza. Sin billete de Gornergrat.', 'Un billete de tren hasta Rotenboden y un breve descenso'],
        ],
      },
      sections: [
        {
          id: 'sunnegga-funicular',
          heading: 'El funicular de Sunnegga',
          paragraphs: [
            'El funicular sale de Zermatt y sube a la terraza de Sunnegga, a 2.288 m, en unos cuatro minutos y medio. La cara este queda delante, más ancha y más baja que desde el Riffelsee.',
            'El Leisee está justo bajo la terraza. Es el lago para ir con niños y no hace falta el tren de Gornergrat.',
          ],
        },
        {
          id: 'stellisee',
          heading: 'Stellisee y cara este',
          paragraphs: [
            'El reflejo de esta vertiente es el Stellisee, a 2.537 m. Tome la telecabina de Sunnegga a Blauherd (2.571 m) y camine unos 20 minutos. El primer plano son bloques y hierba algodonera; la cumbre es la misma cara este del Riffelsee.',
            'El agua solo refleja la montaña desde finales de junio hasta octubre, y solo mientras el viento se mantiene por debajo de unos 12 km/h. Una tarde despejada falla en cuanto empieza la brisa.',
          ],
        },
        {
          id: 'when-sunnegga-wins',
          heading: 'Cuándo Sunnegga gana al paseo hasta el Riffelsee',
          paragraphs: [
            'El Riffelsee es el reflejo más cercano y más grande, y el primer tren llega antes. Sunnegga es el mejor paseo para la ruta de los 5 lagos (Stellisee, Grindjisee, Grünsee, Moosjisee, Leisee), con niños o sin billete de Gornergrat.',
            'Salga de Blauherd en cuanto abra la telecabina, mientras el Stellisee sigue en calma. Si el viento ya se ha levantado, el Grindjisee está más bajo, al abrigo de los alerces, y conserva un reflejo más tarde.',
          ],
        },
      ],
      faqs: [
        { question: '¿Qué es Sunnegga?', answer: 'Una terraza de funicular a 2.288 m sobre Zermatt. El trayecto dura unos 4,5 minutos. La vista es la cara este del Cervino, más baja que desde el Riffelsee.' },
        { question: '¿Es mejor Sunnegga o el Riffelsee para el reflejo?', answer: 'El Riffelsee, si quiere el espejo más grande y la salida más temprana. Sunnegga es la terraza más fácil y el inicio del paseo al Stellisee.' },
        { question: '¿Cómo se llega al Stellisee desde Sunnegga?', answer: 'Tome la telecabina hasta Blauherd, a 2.571 m, y camine unos 20 minutos hasta el Stellisee, a 2.537 m.' },
      ],
    },
    'riffelsee': {
      name: 'Reflejos en los lagos de Sunnegga y Riffelsee',
      shortName: 'Reflejos en lagos',
      title: 'Riffelsee y Sunnegga: Condiciones en vivo del reflejo del Matterhorn en el agua',
      description: 'Medición de viento y quietud del agua para fotografiar el icónico reflejo del Cervino en el lago Riffelsee y Stellisee.',
      aspectLabel: 'Reflejo en agua de la cara Este (Amanecer dorado)',
      transportSummary: 'Tren Gornergrat hasta Rotenboden o funicular subterráneo a Sunnegga',
      journeyTime: '25–35 minutos por trayecto',
      bestTimeWindow: 'Desde el amanecer hasta las 09:30 CET (Calma total antes de las brisas térmicas)',
      keyTakeaways: [
        'Para lograr un reflejo en espejo, el viento en la superficie debe ser inferior a 12 km/h.',
        'El lago permanece descongelado desde finales de junio hasta finales de octubre.',
        'Si el lago principal presenta oleaje, camina 100 metros hacia el lago inferior protegido.',
      ],
      heroStat: {
        label: 'Límite de viento para el espejo',
        value: '< 12 km/h',
        detail: 'Por encima de 15 km/h se rizan el Riffelsee y el Stellisee',
      },
      quickFacts: [
        { label: 'Acceso al Riffelsee', value: '5 min a pie', detail: 'Baje del tren de Gornergrat en Rotenboden (2.815 m) y baje 60 m' },
        { label: 'Acceso al Stellisee', value: '20 min de camino', detail: 'Funicular de Sunnegga (2.288 m) + telecabina de Blauherd (2.571 m)' },
        { label: 'Agua libre', value: 'Mediados de junio – oct.', detail: 'Lagos helados y bajo la nieve de noviembre a principios de junio' },
        { label: 'Plan B con viento', value: 'Riffelsee inferior', detail: 'Una charca más pequeña, 100 m al oeste, sigue lisa cuando el lago principal se riza' },
      ],
      comparisonTable: {
        caption: 'Riffelsee, Riffelsee inferior y Stellisee',
        headers: ['Lago del reflejo', 'Altitud', 'Desde Zermatt', 'Primer plano y resguardo del viento'],
        rows: [
          ['Riffelsee superior (lago principal)', '2.757 m', 'Tren de Gornergrat hasta Rotenboden (28 min) + 5 min a pie', 'Reflejo del Cervino más cercano y más grande; expuesto a brisas del este y del sur después de las 10:00 CET.'],
          ['Riffelsee inferior (segunda charca)', '2.745 m', '2 min al oeste, pasado el Riffelsee superior', 'Mucho resguardo del viento, detrás de un talud; el mejor recurso si el lago principal está rizado.'],
          ['Stellisee (Sunnegga–Blauherd)', '2.537 m', 'Funicular de Sunnegga + telecabina de Blauherd + 20 min a pie', 'Bloques semisumergidos y hierba algodonera; encuadre de valle un poco más amplio.'],
          ['Grindjisee (5 lagos)', '2.334 m', '45 min por debajo del Stellisee, en la ruta de los 5 lagos', 'Rodeado de alerces, el mejor abrigo del viento de los lagos de Zermatt, ideal en octubre.'],
          ['Leisee (terraza de Sunnegga)', '2.232 m', 'Funicular de Sunnegga (4,5 min) + ascensor', 'Lago familiar justo bajo la terraza; el acceso más fácil con niños.'],
        ],
      },
      sections: [
        {
          id: 'riffelsee-matterhorn-reflection-conditions',
          heading: '1. Las tres reglas del reflejo en el Riffelsee y el Stellisee',
          paragraphs: [
            'Miles de visitantes suben al Riffelsee o al Stellisee en una tarde soleada esperando la postal, y encuentran agua oscura y rizada, sin reflejo, o un campo de nieve en mayo.',
            'Fotografiar la pirámide invertida del Cervino es un microclima preciso, regido por tres factores que puede comprobar aquí antes de salir de Zermatt:',
          ],
          bulletPoints: [
            { bold: 'Regla 1 — El viento en superficie debe quedar por debajo de 12 km/h:', text: 'El agua solo hace de espejo sin ondas capilares. A 0–10 km/h el reflejo es nítido. A 12–20 km/h la cumbre se emborrona en franjas verticales. Por encima de 22 km/h el reflejo desaparece.' },
            { bold: 'Regla 2 — Las nubes medias deben ser escasas (puntuación ≥ 7/10):', text: 'El Riffelsee (2.757 m) y el Stellisee (2.537 m) miran al suroeste, hacia la cumbre a 4.478 m. Una banda de nubes entre 3.200 y 4.200 m tapa la parte alta de la pirámide en el cielo y en el agua.' },
            { bold: 'Regla 3 — Ventana de deshielo (mediados de junio a finales de octubre):', text: 'Entre 2.537 y 2.757 m, el Stellisee y el Riffelsee se hielan a finales de octubre o en noviembre y siguen bajo la nieve hasta mediados o finales de junio. A principios de junio espere placas turquesas a medio derretir.' },
          ],
          proTip: {
            label: 'El truco del Riffelsee inferior',
            text: 'No se vaya de Rotenboden decepcionado si el lago grande está rizado. Camine 100 m más hacia Riffelberg hasta la segunda charca («Riffelsee inferior»). Más pequeña y protegida por un labio de morrena, sigue plana con viento de hasta 18–20 km/h.',
          },
        },
        {
          id: 'sunnegga-vs-rotenboden-timing',
          heading: '2. Por qué la mañana (07:15–09:30 CET) es decisiva para los reflejos',
          paragraphs: [
            'En los valles altos el viento sigue un ritmo diario estricto. El enfriamiento nocturno estabiliza el aire: los lagos están en calma al amanecer. Hacia las 10:00 CET el sol calienta las paredes del Mattertal y las brisas de ladera suben a 15–25 km/h: rizan los lagos justo cuando se forman cúmulos en la arista Hörnli.',
            'El tren cremallera de Gornergrat sale de Zermatt a las 07:00 CET en verano. Baja en Rotenboden a las 07:28 CET y está en el Riffelsee a las 07:33 CET, con el aire quieto y la luz dorada de la mañana en la cara este.',
          ],
        },
        {
          id: 'five-lakes-hike-strategy',
          heading: '3. Sunnegga y la ruta de los 5 lagos (5-Seenweg)',
          paragraphs: [
            'En el 5-Seenweg (Stellisee, Grindjisee, Grünsee, Moosjisee, Leisee; 9,8 km, unas 2 horas y media) salga siempre desde arriba (Blauherd, 2.571 m) en cuanto abra la telecabina, para llegar al Stellisee mientras el agua sigue en calma. Aunque luego se levante una brisa, el Grindjisee (2.334 m) está al abrigo de alerces altos que cortan el viento y conservan un reflejo hasta la tarde.',
          ],
        },
      ],
      faqs: [
        { question: '¿Qué montaña se refleja en el Riffelsee?', answer: 'El Cervino. Desde la parada de Rotenboden del tren de Gornergrat, cinco minutos a pie llevan al Riffelsee, donde la cara este llena el reflejo. Sunnegga y el Stellisee muestran la misma cumbre desde un ángulo más bajo.' },
        { question: '¿Las condiciones de reflejo en el Riffelsee son buenas hoy?', answer: 'Mire la tarjeta en vivo de Riffelsee y Stellisee al principio de esta página. Un espejo nítido exige una puntuación de visibilidad de 7–10/10 y viento en superficie por debajo de 12 km/h, en la ventana sin hielo de mediados de junio a octubre.' },
        { question: '¿Qué reflejo del Cervino es mejor: Riffelsee o Stellisee?', answer: 'El Riffelsee (2.757 m, tren de Gornergrat hasta Rotenboden + 5 minutos a pie) ofrece el reflejo más cercano y más grande, y se alcanza antes (07:30 CET), cuando el viento está más en calma. El Stellisee (2.537 m, Sunnegga–Blauherd + 20 minutos a pie) ofrece los bloques de primer plano y el inicio de la ruta de los 5 lagos.' },
        { question: '¿El Riffelsee está helado en mayo, junio o noviembre?', answer: 'Sí. A 2.757 m el Riffelsee está helado y bajo la nieve de noviembre a principios de junio (zona de esquí y raquetas de Gornergrat). Un deshielo turquesa parcial suele darse entre el 10 y el 25 de junio; los reflejos en agua libre van de finales de junio a finales de octubre.' },
        { question: '¿Qué hacer si el Riffelsee tiene demasiado viento para un reflejo?', answer: 'Camine primero 100 m al oeste de la cubeta principal hasta la charca del «Riffelsee inferior», en un hueco resguardado, a menudo lisa cuando el lago grande está picado. Si no, un filtro ND de 6 o 10 pasos y una exposición de 15 a 30 segundos alisan las rizaduras en un reflejo velado.' },
      ],
    },
    'zermatt-village': {
      name: 'Pueblo de Zermatt (Kirchbrücke & Riedweg)',
      shortName: 'Pueblo de Zermatt',
      title: 'El Cervino desde el pueblo de Zermatt: Visibilidad en vivo y Webcam',
      description: 'Visibilidad en tiempo real del Cervino desde el centro de Zermatt (Kirchbrücke y Riedweg). Cámara web en directo y amanecer sin coste de billetes.',
      aspectLabel: 'Perspectiva del valle y río hacia la cara Este',
      transportSummary: '5 minutos a pie desde la estación de Zermatt (Gratis)',
      journeyTime: '0–10 minutos a pie',
      bestTimeWindow: '20 minutos antes del amanecer – 08:30 CET',
      keyTakeaways: [
        'Kirchbrücke es el mirador público y gratuito más emblemático de Zermatt.',
        'Llegue 20 minutos antes del amanecer para presenciar el resplandor dorado sobre la cumbre.',
        'El sendero de Riedweg / Mürini ofrece vistas elevadas sobre los chalets de madera.',
      ],
      heroStat: {
        label: 'Precio del billete',
        value: '0 CHF (gratis)',
        detail: 'Puente y senderos públicos, abiertos las 24 horas, sin ferrocarriles de montaña',
      },
      quickFacts: [
        { label: 'Mejor punto', value: 'Puente Kirchbrücke', detail: 'Línea directa sobre el Mattervispa hacia la cara este' },
        { label: 'Punto elevado', value: 'Riedweg / Mürini', detail: '10 minutos cuesta arriba sobre los tejados, menos gente' },
        { label: 'Hora dorada', value: 'Resplandor en la cumbre', detail: 'La punta se enciende de rosa y naranja unos 15–20 minutos antes del amanecer en el valle' },
        { label: 'Riesgo de niebla', value: 'Comprobar la base de las nubes', detail: 'La niebla baja (< 2.000 m) tapa el pueblo aunque las cumbres estén despejadas' },
      ],
      comparisonTable: {
        caption: 'Miradores públicos en el pueblo de Zermatt',
        headers: ['Mirador', 'Altitud', 'Camino desde la estación', 'Uso y encuadre'],
        rows: [
          ['Kirchbrücke (puente de la iglesia)', '1.608 m', '8 min a pie', 'Postal clásica sobre el Mattervispa; el punto de encuentro del amanecer.'],
          ['Riedweg / ladera de Mürini', '1.660 m', '15 min a pie (subida suave)', 'Panorama elevado, chalets de alerce envejecidos que llevan la vista al Cervino.'],
          ['Prado inferior de Hohbalmen', '1.750 m', '25 min a pie', 'Borde de pasto tranquilo, línea de vista libre por encima de los taxis eléctricos del pueblo.'],
          ['Kirchplatz / Zermatterhof', '1.620 m', '6 min a pie', 'Centro histórico, junto a la iglesia de San Mauricio y el Matterhorn Museum.'],
        ],
      },
      sections: [
        {
          id: 'zermatt-village-matterhorn-views',
          heading: '1. Por qué la Kirchbrücke es el corazón de la fotografía en Zermatt',
          paragraphs: [
            'No siempre hace falta un teleférico o un tren cremallera para ver el Cervino. La Kirchbrücke, sobre el Mattervispa alimentado por el glaciar, alinea la mirada valle arriba, directa a la cara este dentada y a la arista Hörnli.',
            'El puente está abierto las 24 horas y es gratuito. Es la prueba de la mañana: si la cumbre está nítida desde la Kirchbrücke al alba, toca subir a las estaciones.',
          ],
          bulletPoints: [
            { bold: 'Resplandor del amanecer:', text: 'El Cervino mira al este: el sol toca la pirámide mientras el pueblo sigue en sombra. La punta brilla ámbar y magenta unos 15 minutos.' },
            { bold: 'Río en primer plano:', text: 'Las aguas glaciares del Mattervispa dan agua en movimiento y una línea de fuga hacia la cumbre.' },
            { bold: 'Evitar la aglomeración del puente:', text: 'En las mañanas despejadas, decenas de trípodes ocupan la barandilla. Para estar tranquilo, siga 10 minutos cuesta arriba hacia Riedweg / Mürini, sobre los tejados de madera.' },
          ],
          proTip: {
            label: 'La regla de la inversión baja',
            text: 'Si el pueblo está envuelto en niebla gris y fría, no lo deje. Cuando las nubes bajas son densas y las medias o altas no existen, Gornergrat (3.089 m) y Glacier Paradise (3.883 m) quedan sobre las nubes, bajo un cielo azul.',
          },
        },
        {
          id: 'sunrise-timing-and-tips',
          heading: '2. Horario y consejos de foto desde el pueblo',
          paragraphs: [
            'Llegue a la Kirchbrücke o al Riedweg al menos 20 minutos antes del amanecer oficial. La primera luz no aparece a ras de suelo: toca primero la aguja del Cervino (4.478 m) y luego baja por la pared.',
            'En invierno el pueblo está bajo la nieve y humean las chimeneas de los chalets. En verano y otoño, los alerces dorados de las laderas contrastan con la pirámide de gneis gris.',
          ],
        },
      ],
      faqs: [
        { question: '¿Se ve el Cervino desde el pueblo de Zermatt?', answer: 'Sí. El Cervino se ve con claridad desde varios puntos públicos del pueblo, sobre todo desde la Kirchbrücke sobre el Mattervispa y el sendero en subida de Riedweg / Mürini, sin ningún billete.' },
        { question: '¿Cuál es el mejor mirador gratuito del Cervino en Zermatt?', answer: 'La Kirchbrücke es el sitio gratuito más conocido para el resplandor del amanecer. Para un panorama sobre los tejados de los chalets, con menos gente, suba 10–15 minutos por el Riedweg.' },
        { question: '¿A qué hora amanece en la Kirchbrücke para el resplandor del Cervino?', answer: 'En verano (junio–julio) la luz toca la cumbre hacia las 05:30–05:50 CET. En otoño (septiembre–octubre), entre las 06:45 y las 07:30 CET. En invierno, hacia las 07:45–08:15 CET. Llegue siempre 20 minutos antes de la hora oficial.' },
        { question: '¿Qué hacer si hay niebla en el pueblo de Zermatt?', answer: 'Un estrato de valle cubre a menudo Zermatt hacia 1.600 m mientras las cumbres están despejadas. Mire las puntuaciones de altura: si Gornergrat (3.089 m) o Glacier Paradise (3.883 m) marcan 8–10/10, tome el tren o el teleférico para salir por encima de las nubes.' },
      ],
    },
  },
  pt: {
    gornergrat: {
      name: 'Miradouro de Gornergrat',
      shortName: 'Gornergrat',
      title: 'Webcam e meteorologia do Gornergrat | Ver o Matterhorn',
      description: 'Telemetria de visibilidade em direto a 3.089 m, comboio de cremalheira desde Zermatt, reflexos no Riffelsee e panorama alpino de 360°.',
      aspectLabel: 'Face leste e nordeste (perfil clássico Toblerone)',
      transportSummary: 'Comboio de cremalheira Gornergrat Bahn (GGB) desde a estação de Zermatt',
      journeyTime: '33 minutos por trajeto',
      bestTimeWindow: '07:00–11:00 CET (o sol da manhã ilumina a face leste)',
      heroStat: {
        label: 'Distância de vista',
        value: '9,1 km a leste',
        detail: 'Vista livre sobre a aresta Hörnli e a face leste (4.478 m)',
      },
      quickFacts: [
        { label: 'Ângulo de vista', value: 'Toblerone clássico', detail: 'Silhueta em pirâmide, leste e nordeste, com o gancho icónico' },
        { label: 'Resistência ao vento', value: 'Muito alta', detail: 'O comboio de cremalheira circula quando os teleféricos fecham' },
        { label: 'Melhor lugar', value: 'À direita (subida)', detail: 'Sente-se à direita no sentido da subida: o Matterhorn permanece à vista' },
        { label: 'Paragem do lago', value: 'Rotenboden (2.757 m)', detail: 'Uma paragem abaixo do Gornergrat, para o espelho do Riffelsee' },
      ],
      keyTakeaways: [
        'Confirme a pontuação da manhã e da tarde a 3.089 m antes de comprar o bilhete do Gornergrat Bahn: 7/10 a 10/10 garante a pirâmide Toblerone desimpedida.',
        'A 3.089 m, as nuvens médias (2.000–6.000 m) são o principal obstáculo. O nevoeiro do vale, abaixo de 2.000 m, fica muitas vezes por baixo do Gornergrat.',
        'As partidas de manhã (07:00–10:30 CET) batem as da tarde em 78 % do ano, porque o aquecimento solar gera cúmulos na aresta Hörnli.',
        'Ao contrário das gôndolas para o Klein Matterhorn, o comboio de cremalheira corre sobre carril dentado e raramente para com vento forte.',
      ],
      comparisonTable: {
        caption: 'Gornergrat Bahn: visibilidade do Matterhorn paragem a paragem',
        headers: ['Estação', 'Altitude', 'Tempo', 'Linha de vista e porquê descer aqui'],
        rows: [
          ['Zermatt Bahnhof', '1.608 m', '0 min', 'Terminal em frente às vias dos CFF; entre pelo lado direito.'],
          ['Riffelalp', '2.222 m', '16 min', 'Limite da floresta: o Matterhorn emoldurado por pinheiros-cembro antigos.'],
          ['Riffelberg', '2.582 m', '23 min', 'Prado aberto, grande angular das arestas Hörnli e Furgg.'],
          ['Rotenboden (Riffelsee)', '2.815 m', '28 min', 'Desça aqui: 5 minutos a pé até ao Riffelsee (2.757 m) e ao reflexo.'],
          ['Cume do Gornergrat', '3.089 m', '33 min', 'Terraço de 360° sobre o Matterhorn, o glaciar Gorner e 29 cumes acima de 4.000 m.'],
        ],
      },
      sections: [
        {
          id: 'can-you-see-matterhorn-from-gornergrat-today',
          heading: '1. Como ler a pontuação de visibilidade do Gornergrat antes de comprar o bilhete',
          paragraphs: [
            'Um bilhete de ida e volta do Gornergrat Bahn custa entre 92 e 132 CHF (50 % de desconto com o Swiss Travel Pass ou o cartão de meio preço) e não é reembolsado por causa de nuvens. Vale a pena verificar a telemetria de altitude antes de embarcar.',
            'Desde a aldeia de Zermatt, a 1.608 m, só se vê a camada mais baixa. O motor do Gornergrat consulta células Open-Meteo calibradas a 3.089 m, 45.9840° N, 7.7845° E. Uma pontuação de 8/10 a 10/10 («visível») significa face leste e aresta Hörnli desimpedidas. Com 6/10 ou 7/10 («parcialmente visível») passam nuvens, ou uma bandeira de foehn fica no cume.',
          ],
          bulletPoints: [
            { bold: 'Pontuação 8–10/10 (suba já):', text: 'A nebulosidade média (3.000 m) está abaixo de 25 % e o alcance ótico ultrapassa 20 km sobre o glaciar Gorner.' },
            { bold: 'Pontuação 5–7/10 (compare manhã e tarde):', text: 'Muitas vezes uma janela limpa de manhã (06:00–11:00 CET) e cúmulos térmicos depois. Apanhe o primeiro comboio.' },
            { bold: 'Pontuação 1–4/10 (guarde o bilhete):', text: 'Um estrato espesso ou precipitação envolve a faixa dos 3.000–4.478 m. Veja a webcam de 360° do Gornergrat antes de gastar mais de 100 CHF.' },
          ],
          proTip: {
            label: 'O segredo da inversão do vale',
            text: 'Se a aldeia está cinzenta e com nevoeiro, compare os cartões «nevoeiro de vale (< 2.000 m)» e «nuvens médias (2.000–6.000 m)». Com nevoeiro baixo acima de 70 % e nuvens médias abaixo de 20 %, o comboio do Gornergrat tira-o do nevoeiro para o sol, a 3.089 m.',
          },
        },
        {
          id: 'best-time-and-lighting-gornergrat',
          heading: '2. Melhor hora no Gornergrat: brilho da alvorada ou nuvens da tarde',
          paragraphs: [
            'O Gornergrat fica a leste-sudeste do Matterhorn. O sol da manhã incide na face leste até às 11:00 CET e desenha faixas de rocha, neveiros e a aresta Hörnli.',
            'Depois das 14:00 CET o sol passa para trás do Matterhorn, em direção a Itália — a parede vista do Gornergrat fica em contraluz — e as brisas do vale condensam nuvens de tarde à volta do cume.',
          ],
        },
        {
          id: 'gornergrat-train-tips',
          heading: '3. Comboio de cremalheira: lugar, paragens e Riffelsee',
          paragraphs: [
            'Os bilhetes de dia normais do Gornergrat Bahn nunca esgotam. Compre-o no telemóvel ou na bilheteira 5 minutos antes da partida, quando a pontuação nesta página estiver alta.',
          ],
          bulletPoints: [
            { bold: 'Na subida, sempre à direita:', text: 'Entre e sente-se à direita (no sentido da subida). Depois da ponte do Findelbach, o Matterhorn enche as janelas da direita até aos 3.089 m.' },
            { bold: 'Desça em Rotenboden:', text: 'O bilhete do Gornergrat vale para as paragens intermédias. Rotenboden (2.815 m), uma paragem abaixo do cume, fica a 5 minutos a pé do Riffelsee.' },
          ],
        },
      ],
      faqs: [
        { question: 'Vê-se o Matterhorn desde o Gornergrat hoje?', answer: 'Leia a pontuação em direto de 1 a 10, manhã e tarde, no topo desta página. Atualiza-se a cada 15 minutos para o Gornergrat (3.089 m). 8–10/10: pirâmide nítida. 6–7/10: parcialmente visível, com nuvens leves na aresta. 1–4/10: o cume está nas nuvens.' },
        { question: 'O Gornergrat vale a pena se a aldeia estiver nublada?', answer: 'Depende da altitude das nuvens. Se as nuvens baixas (< 2.000 m) forem densas mas as médias (2.000–6.000 m) ficarem abaixo de 25 %, o Gornergrat (3.089 m) está acima do nevoeiro, ao sol. Se as nuvens médias passarem de 70 %, a estação está dentro da camada: guarde o bilhete para uma janela mais limpa.' },
        { question: 'Que lado do comboio do Gornergrat tem a melhor vista do Matterhorn?', answer: 'À direita na subida de Zermatt para o Gornergrat, e à esquerda na descida. O Matterhorn vê-se pela janela direita durante quase toda a subida de 33 minutos.' },
        { question: 'É preciso reservar os bilhetes do Gornergrat?', answer: 'Não. Os comboios de cremalheira regulares não exigem reserva e não esgotam. Espere pela pontuação da manhã e pela webcam Roundshot no próprio dia antes de comprar.' },
      ],
    },
    'glacier-paradise': {
      name: 'Matterhorn Glacier Paradise (Klein Matterhorn)',
      shortName: 'Glacier Paradise',
      title: 'Teleférico do Klein Matterhorn, webcam e meteorologia',
      description: 'A estação de teleférico mais alta da Europa (3.883 m). Diagnóstico de nuvens em tempo real, gôndola 3S e vista da face sul do Matterhorn.',
      aspectLabel: 'Face sul e oeste, lado italiano / Breuil, e glaciar do Teodulo',
      transportSummary: 'Gôndola Matterhorn Express + teleférico 3S via Trockener Steg',
      journeyTime: '45 minutos desde a estação do vale, a sul de Zermatt',
      bestTimeWindow: '09:30–15:30 CET (sol alto nas faces sul e oeste)',
      heroStat: {
        label: 'Altitude da plataforma',
        value: '3.883 m',
        detail: 'A estação de teleférico mais alta da Europa — 794 m acima do Gornergrat',
      },
      quickFacts: [
        { label: 'Ângulo do Matterhorn', value: 'Face sul / Furgg', detail: 'Muro trapezoidal de perto, não o gancho Toblerone' },
        { label: 'Vantagem de inversão', value: 'Acima do nevoeiro < 3.500 m', detail: 'Sobe acima dos estratos de inverno e outono no vale' },
        { label: 'Sensibilidade ao vento', value: 'Alerta de foehn', detail: 'O 3S pode parar se o vento de sul ultrapassar 50–55 km/h' },
        { label: 'Com qualquer tempo', value: 'Palácio de gelo', detail: 'Galerias a 15 m dentro do glaciar, abertas mesmo com nuvens' },
      ],
      keyTakeaways: [
        'O Klein Matterhorn (Matterhorn Glacier Paradise) está a 3.883 m — apenas 595 m abaixo do cume do Matterhorn, a 4.478 m — e põe-no frente a frente com as faces sul e oeste.',
        'Daqui o Matterhorn não parece a pirâmide Toblerone da aldeia: vê-se a cidadela rochosa italiana, de perto, do outro lado do glaciar do Teodulo.',
        'A 3.883 m, o miradouro fica muitas vezes acima das inversões abaixo de 3.200 m e marca 8–9/10 quando os miradouros mais baixos estão no nevoeiro.',
        'Fica na crista da fronteira italiana (passo do Teodulo): com foehn húmido de sul acima de 35 km/h, as nuvens envolvem primeiro o Klein Matterhorn, e rajadas acima de 50 km/h podem parar o teleférico superior.',
      ],
      comparisonTable: {
        caption: 'Klein Matterhorn (3.883 m): troços e ângulos de vista',
        headers: ['Troço / paragem', 'Altitude', 'Vista do Matterhorn e papel da atmosfera'],
        rows: [
          ['Furi', '1.867 m', 'Clareira em forte declive para as faces leste e Furgg.'],
          ['Schwarzsee (desvio)', '2.583 m', 'No sopé da aresta Hörnli; o melhor plano aproximado a média altitude.'],
          ['Trockener Steg', '2.939 m', 'Estação na língua glaciar sob a parede leste/Furgg; transbordo para o 3S.'],
          ['Matterhorn Glacier Paradise (Klein Matterhorn)', '3.883 m', 'Plataforma de 360° sobre 38 cumes de quatro mil metros na Suíça, em Itália e em França, incluindo o Mont Blanc.'],
          ['Testa Grigia (travessia alpina)', '3.480 m', '3S transfronteiriço na crista italiana, sobre Breuil-Cervinia.'],
        ],
      },
      sections: [
        {
          id: 'klein-matterhorn-view-silhouette',
          heading: '1. Como é o Matterhorn visto do Klein Matterhorn (3.883 m)?',
          paragraphs: [
            'Antes de subir ao Matterhorn Glacier Paradise (Klein Matterhorn), o ângulo conta. Desde Zermatt e do Gornergrat vê-se o Matterhorn de nordeste: as faces leste e norte formam a pirâmide Toblerone, estreita e em gancho.',
            'O Matterhorn Express e o 3S para sul, até ao Klein Matterhorn (3.883 m), fazem-no rodar quase 90 graus. Da plataforma olha-se para nor-noroeste, para as faces sul (italiana) e Furgg. O Matterhorn parece uma cidadela larga saída do glaciar, não um gancho fino. Veem-se também 38 cumes acima de 4.000 m até ao Mont Blanc (4.808 m) e ao Gran Paradiso.',
          ],
          proTip: {
            label: 'Os dois ângulos no mesmo dia',
            text: 'Na subida ou na descida do Glacier Paradise, saia do Matterhorn Express em Schwarzsee (2.583 m) ou em Trockener Steg (2.939 m). Em Trockener Steg está quase por baixo da parede leste de 1.500 m.',
          },
        },
        {
          id: 'klein-matterhorn-weather-and-fohn',
          heading: '2. Visibilidade no Klein Matterhorn: inversão do vale ou foehn de sul',
          paragraphs: [
            'A previsão do Klein Matterhorn calcula-se a 3.883 m (45.9383° N, 7.7297° E), porque o tempo diverge muitas vezes do Gornergrat (3.089 m).',
            'No outono e no inverno o ar frio estagna no Mattertal sob uma inversão por volta de 2.800–3.200 m. O Klein Matterhorn fica então quase 700 m acima do mar de nuvens, em céu azul (10/10).',
            'Com foehn de sul, o ar húmido do Vale de Aosta é empurrado pela encosta de Breuil e pelo colo do Teodulo (3.300 m). O Klein Matterhorn é o primeiro cume de Zermatt atingido: a 3.883 m a visibilidade pode cair para 2/10 enquanto o Gornergrat, abrigado 6 km a nordeste, ainda tem 7/10.',
          ],
          bulletPoints: [
            { bold: 'Limiar de vento (> 50 km/h):', text: 'Veja o cartão «vento e risco de foehn». O 3S moderno aguenta melhor o vento do que os teleféricos antigos, mas rajadas de 50–60 km/h a 3.883 m podem parar o troço Trockener Steg–Klein Matterhorn.' },
            { bold: 'Abaixo de zero o ano todo:', text: 'Mesmo em julho e agosto o ar a 3.883 m fica em geral entre −6 °C e +2 °C. Corta-vento, óculos de glaciar (categoria 3/4) e passos lentos na última escada até ao terraço.' },
          ],
        },
        {
          id: 'lighting-and-best-time-klein-matterhorn',
          heading: '3. Melhor hora para fotografar no Klein Matterhorn',
          paragraphs: [
            'Ao contrário do Gornergrat, onde a face leste perde o sol direto depois do meio-dia, o Klein Matterhorn olha as vertentes sul e oeste. A luz no Matterhorn Glacier Paradise melhora do fim da manhã ao início da tarde (10:00–15:00 CET), quando o sol ilumina as arestas italianas.',
          ],
        },
      ],
      faqs: [
        { question: 'Como está a visibilidade no Klein Matterhorn hoje?', answer: 'Veja o índice em direto de 1 a 10, manhã e tarde, do Matterhorn Glacier Paradise / Klein Matterhorn (3.883 m) no topo desta página. Atualizado a cada 15 minutos com dados a 3.883 m, uma pontuação de 8–10/10 indica uma vista de 360° desimpedida da face sul, do Breithorn e do Mont Blanc.' },
        { question: 'Porque é que o Matterhorn parece diferente do Klein Matterhorn (Glacier Paradise)?', answer: 'O Klein Matterhorn (3.883 m) fica a sul-sudeste do Matterhorn, na crista da fronteira italiana. Em vez da pirâmide estreita leste/norte vista de Zermatt e do Gornergrat, vê de perto as faces sul e oeste (italianas, lado Breuil), mais largas e íngremes, sobre o glaciar do Teodulo.' },
        { question: 'O teleférico do Klein Matterhorn fecha com vento forte?', answer: 'Sim. O 3S entre Trockener Steg (2.939 m) e o Klein Matterhorn (3.883 m) foi concebido para o vento, mas um foehn de sul ou rajadas acima de 50–60 km/h podem fechar temporariamente o troço superior. Verifique o vento e o foehn antes de ir à estação de Zermatt Sul.' },
        { question: 'O Glacier Paradise vale a pena com uma visibilidade de 5/10 ou 6/10?', answer: 'Com 6/10 («parcialmente visível») o bilhete continua a compensar: inclui o palácio de gelo, escavado a 15 m no gelo e indiferente às nuvens, e o Cinema Lounge. Com 4/10 ou menos, a plataforma a 3.883 m está em branco: é melhor adiar.' },
      ],
    },
    sunnegga: {
      name: 'Sunnegga',
      shortName: 'Sunnegga',
      title: 'Funicular de Sunnegga e face leste do Matterhorn',
      description: 'O funicular de Sunnegga é o terraço inferior da face leste do Matterhorn, do Stellisee e da caminhada dos 5 lagos. Use-o quando quiser o arranque fácil, não o reflexo mais próximo.',
      aspectLabel: 'Face leste desde o terraço inferior',
      transportSummary: 'Funicular de Sunnegga desde Zermatt',
      journeyTime: '4,5 minutos',
      bestTimeWindow: 'Primeira cabina, antes de a brisa chegar ao Stellisee',
      heroStat: {
        label: 'Funicular',
        value: '4,5 min',
        detail: 'De Zermatt ao terraço de 2.288 m',
      },
      quickFacts: [
        { label: 'Terraço', value: '2.288 m', detail: 'Face leste de um ângulo mais largo e mais baixo do que o Riffelsee' },
        { label: 'Stellisee', value: '20 min a pé', detail: 'Seguir até Blauherd (2.571 m) e caminhar até ao lago a 2.537 m' },
        { label: 'Leisee', value: 'Abaixo do terraço', detail: 'O lago mais fácil, a poucos minutos do funicular' },
        { label: 'Em relação ao Riffelsee', value: 'Partida mais tarde', detail: 'O comboio do Gornergrat chega ao Riffelsee por volta das 07:30. Sunnegga abre mais tarde.' },
      ],
      keyTakeaways: [
        'Sunnegga é o terraço do funicular a 2.288 m. A vista é a face leste, mais baixa e mais distante do que no Riffelsee.',
        'O Stellisee é o lago do reflexo deste lado. Uma gôndola até Blauherd e 20 minutos a pé.',
        'Escolha Sunnegga para o Leisee, crianças e a caminhada dos 5 lagos. Escolha o Riffelsee quando quiser o reflexo maior à primeira luz.',
      ],
      comparisonTable: {
        caption: 'Quando Sunnegga é o melhor passeio do que o Riffelsee',
        headers: ['Passeio', 'Escolher Sunnegga', 'Escolher o Riffelsee'],
        rows: [
          ['Reflexo mais próximo', 'Stellisee, depois da gôndola e de 20 minutos a pé', 'Cinco minutos a descer desde Rotenboden. O maior espelho da face leste.'],
          ['Primeira luz', 'O funicular abre por volta das 08:00', 'O primeiro comboio do Gornergrat pode deixá-lo no lago por volta das 07:30'],
          ['Dia fácil', 'O Leisee fica junto ao terraço. Sem bilhete do Gornergrat.', 'Um bilhete de comboio até Rotenboden e uma curta descida'],
        ],
      },
      sections: [
        {
          id: 'sunnegga-funicular',
          heading: 'O funicular de Sunnegga',
          paragraphs: [
            'O funicular sai de Zermatt e sobe ao terraço de Sunnegga, a 2.288 m, em cerca de quatro minutos e meio. A face leste fica à frente, mais larga e mais baixa do que desde o Riffelsee.',
            'O Leisee está mesmo abaixo do terraço. É o lago para ir com crianças e não exige o comboio do Gornergrat.',
          ],
        },
        {
          id: 'stellisee',
          heading: 'Stellisee e face leste',
          paragraphs: [
            'O reflexo deste lado é o Stellisee, a 2.537 m. Apanhe a gôndola de Sunnegga até Blauherd (2.571 m) e caminhe cerca de 20 minutos. O primeiro plano são blocos e erva-algodão; o cume é a mesma face leste do Riffelsee.',
            'A água só espelha a montanha de finais de junho a outubro, e só enquanto o vento se mantém abaixo de cerca de 12 km/h. Uma tarde limpa falha assim que a brisa começa.',
          ],
        },
        {
          id: 'when-sunnegga-wins',
          heading: 'Quando Sunnegga ganha à caminhada até ao Riffelsee',
          paragraphs: [
            'O Riffelsee é o reflexo mais próximo e maior, e o primeiro comboio chega mais cedo. Sunnegga é o melhor passeio para a rota dos 5 lagos (Stellisee, Grindjisee, Grünsee, Moosjisee, Leisee), com crianças ou sem bilhete do Gornergrat.',
            'Saia de Blauherd assim que a gôndola abrir, enquanto o Stellisee ainda está calmo. Se o vento já se levantou, o Grindjisee fica mais baixo, abrigado por lariços, e conserva um reflexo mais tarde no dia.',
          ],
        },
      ],
      faqs: [
        { question: 'O que é Sunnegga?', answer: 'Um terraço de funicular a 2.288 m acima de Zermatt. A viagem demora cerca de 4,5 minutos. A vista é a face leste do Matterhorn, mais baixa do que no Riffelsee.' },
        { question: 'Sunnegga ou Riffelsee: qual é melhor para o reflexo?', answer: 'O Riffelsee, se quiser o maior espelho e a partida mais cedo. Sunnegga é o terraço mais fácil e o início da caminhada até ao Stellisee.' },
        { question: 'Como se chega ao Stellisee a partir de Sunnegga?', answer: 'Apanhe a gôndola até Blauherd, a 2.571 m, e caminhe cerca de 20 minutos até ao Stellisee, a 2.537 m.' },
      ],
    },
    riffelsee: {
      name: 'Riffelsee',
      shortName: 'Riffelsee',
      title: 'Que montanha se reflete no Riffelsee?',
      description: 'A face leste do Matterhorn é a montanha refletida no Riffelsee. Vento e nitidez em direto para Sunnegga, Stellisee e a caminhada desde Rotenboden.',
      aspectLabel: 'Ângulo clássico do reflexo da pirâmide leste-nordeste',
      transportSummary: 'Rotenboden (comboio do Gornergrat, 28 min) ou funicular de Sunnegga (4,5 min)',
      journeyTime: '28 min + 5 min a pé (Riffelsee) • 4,5 min até Sunnegga',
      bestTimeWindow: '07:15–09:45 CET (ar calmo da manhã, antes da brisa térmica)',
      heroStat: {
        label: 'Limite de vento para o espelho',
        value: '< 12 km/h',
        detail: 'Acima de 15 km/h a água do Riffelsee e do Stellisee encrespa-se',
      },
      quickFacts: [
        { label: 'Acesso ao Riffelsee', value: '5 min a pé', detail: 'Saia do comboio do Gornergrat em Rotenboden (2.815 m) e desça 60 m' },
        { label: 'Acesso ao Stellisee', value: '20 min de caminhada', detail: 'Funicular de Sunnegga (2.288 m) + gôndola de Blauherd (2.571 m)' },
        { label: 'Água livre', value: 'Meados de junho – out.', detail: 'Lagos gelados e sob neve de novembro até ao início de junho' },
        { label: 'Plano B com vento', value: 'Riffelsee inferior', detail: 'Uma lagoa mais pequena, 100 m a oeste, fica lisa quando o lago principal encrespa' },
      ],
      keyTakeaways: [
        'Um reflexo simétrico do Matterhorn exige três condições ao mesmo tempo: linha de vista da face leste (pontuação ≥ 7/10), vento à superfície abaixo de 12 km/h e água líquida sem gelo (meados de junho a finais de outubro).',
        'Mesmo num dia de sol 10/10, uma brisa de 18 km/h transforma o Riffelsee e o Stellisee em água picada, sem espelho. Veja o cartão de vento à superfície.',
        'O Riffelsee (2.757 m, via Rotenboden na linha do Gornergrat) alcança-se por volta das 07:30 CET no primeiro comboio, quando o ar alpino está mais calmo. O Stellisee (2.537 m, via Sunnegga–Blauherd) abre por volta das 08:15–08:30 CET.',
        'Se uma brisa ligeira (12–20 km/h) encrespar o Riffelsee principal, caminhe mais 100 m até à lagoa mais pequena do «Riffelsee inferior», abrigada por uma moreia.',
      ],
      comparisonTable: {
        caption: 'Riffelsee, Riffelsee inferior e Stellisee',
        headers: ['Lago do reflexo', 'Altitude', 'Desde Zermatt', 'Primeiro plano e abrigo do vento'],
        rows: [
          ['Riffelsee superior (lago principal)', '2.757 m', 'Comboio do Gornergrat até Rotenboden (28 min) + 5 min a pé', 'Reflexo do Matterhorn mais próximo e maior; exposto a brisas de leste e de sul depois das 10:00 CET.'],
          ['Riffelsee inferior (segunda lagoa)', '2.745 m', '2 min a oeste, para lá do Riffelsee superior', 'Bom abrigo do vento, atrás de um talude; o melhor recurso quando o lago principal está encrespado.'],
          ['Stellisee (Sunnegga–Blauherd)', '2.537 m', 'Funicular de Sunnegga + gôndola de Blauherd + 20 min a pé', 'Blocos semi-submersos e erva-algodão; enquadramento de vale um pouco mais largo.'],
          ['Grindjisee (5 lagos)', '2.334 m', '45 min abaixo do Stellisee, no trilho dos 5 lagos', 'Rodeado de lariços, o melhor abrigo do vento entre os lagos de Zermatt, ideal em outubro.'],
          ['Leisee (terraço de Sunnegga)', '2.232 m', 'Funicular de Sunnegga (4,5 min) + elevador', 'Lago familiar mesmo abaixo do terraço; o acesso mais simples com crianças.'],
        ],
      },
      sections: [
        {
          id: 'riffelsee-matterhorn-reflection-conditions',
          heading: '1. As três regras do reflexo no Riffelsee e no Stellisee',
          paragraphs: [
            'Milhares de visitantes sobem ao Riffelsee ou ao Stellisee numa tarde de sol à espera do postal e encontram água escura e encrespada, sem reflexo — ou um campo de neve em maio.',
            'Fotografar a pirâmide invertida do Matterhorn é um microclima preciso, regido por três fatores que pode verificar aqui antes de sair de Zermatt:',
          ],
          bulletPoints: [
            { bold: 'Regra 1 — O vento à superfície tem de ficar abaixo de 12 km/h:', text: 'A água só faz de espelho sem ondas capilares. A 0–10 km/h o reflexo é nítido. A 12–20 km/h o cume desfoca-se em riscas verticais. Acima de 22 km/h o reflexo desaparece.' },
            { bold: 'Regra 2 — As nuvens médias têm de ser escassas (pontuação ≥ 7/10):', text: 'O Riffelsee (2.757 m) e o Stellisee (2.537 m) olham para sudoeste, para o cume a 4.478 m. Uma faixa de nuvens entre 3.200 e 4.200 m tapa o topo da pirâmide no céu e na água.' },
            { bold: 'Regra 3 — Janela de degelo (meados de junho a finais de outubro):', text: 'Entre 2.537 e 2.757 m, o Stellisee e o Riffelsee gelam no fim de outubro ou em novembro e ficam sob a neve até meados ou finais de junho. No início de junho espere placas turquesa meio derretidas.' },
          ],
          proTip: {
            label: 'O truque do Riffelsee inferior',
            text: 'Não saia de Rotenboden desiludido se o lago grande estiver encrespado. Caminhe mais 100 m em direção a Riffelberg até à segunda lagoa («Riffelsee inferior»). Mais pequena e protegida por um lábio de moreia, mantém-se plana com vento até 18–20 km/h.',
          },
        },
        {
          id: 'sunnegga-vs-rotenboden-timing',
          heading: '2. Porque é que a manhã (07:15–09:30 CET) é decisiva para os reflexos',
          paragraphs: [
            'Nos vales altos o vento segue um ritmo diário rigoroso. O arrefecimento noturno estabiliza o ar: os lagos estão parados ao amanhecer. Por volta das 10:00 CET o sol aquece as paredes do Mattertal e as brisas de encosta sobem a 15–25 km/h — encrespam os lagos no momento em que os cúmulos se formam na aresta Hörnli.',
            'O comboio de cremalheira do Gornergrat parte de Zermatt às 07:00 CET no verão. Sai em Rotenboden às 07:28 CET e está no Riffelsee às 07:33 CET, com o ar parado e a luz dourada da manhã na face leste.',
          ],
        },
        {
          id: 'five-lakes-hike-strategy',
          heading: '3. Sunnegga e a caminhada dos 5 lagos (5-Seenweg)',
          paragraphs: [
            'No 5-Seenweg (Stellisee, Grindjisee, Grünsee, Moosjisee, Leisee; 9,8 km, cerca de 2 horas e meia) comece sempre no alto (Blauherd, 2.571 m) assim que a gôndola abrir, para chegar ao Stellisee enquanto a água ainda está calma. Mesmo que mais tarde se levante uma brisa, o Grindjisee (2.334 m) está abrigado por lariços altos que cortam o vento e conservam um reflexo até à tarde.',
          ],
        },
      ],
      faqs: [
        { question: 'Que montanha se reflete no Riffelsee?', answer: 'O Matterhorn. Desde a paragem de Rotenboden do comboio do Gornergrat, cinco minutos a pé levam ao Riffelsee, onde a face leste enche o reflexo. Sunnegga e o Stellisee mostram o mesmo cume de um ângulo mais baixo.' },
        { question: 'As condições de reflexo no Riffelsee estão boas hoje?', answer: 'Veja o cartão em direto do Riffelsee e do Stellisee no topo desta página. Um espelho nítido exige uma pontuação de visibilidade de 7–10/10 e vento à superfície abaixo de 12 km/h, na janela sem gelo de meados de junho a outubro.' },
        { question: 'Qual é o melhor reflexo do Matterhorn: Riffelsee ou Stellisee?', answer: 'O Riffelsee (2.757 m, comboio do Gornergrat até Rotenboden + 5 minutos a pé) oferece o reflexo mais próximo e maior, e alcança-se mais cedo (07:30 CET), quando o vento está mais calmo. O Stellisee (2.537 m, Sunnegga–Blauherd + 20 minutos a pé) oferece os blocos de primeiro plano e o início da caminhada dos 5 lagos.' },
        { question: 'O Riffelsee está gelado em maio, junho ou novembro?', answer: 'Sim. A 2.757 m o Riffelsee está gelado e sob neve de novembro até ao início de junho (zona de esqui e raquetes de neve do Gornergrat). Um degelo turquesa parcial ocorre em geral entre 10 e 25 de junho; os reflexos em água livre vão de finais de junho a finais de outubro.' },
        { question: 'O que fazer se o Riffelsee estiver demasiado ventoso para um reflexo?', answer: 'Caminhe primeiro 100 m a oeste da bacia principal até à lagoa do «Riffelsee inferior», numa cova abrigada, muitas vezes lisa quando o lago grande está picado. Em alternativa, um filtro ND de 6 ou 10 stops e uma exposição de 15 a 30 segundos alisam as rugas num reflexo velado.' },
      ],
    },
    'zermatt-village': {
      name: 'Aldeia de Zermatt (Kirchbrücke e Riedweg)',
      shortName: 'Aldeia de Zermatt',
      title: 'Vê-se o Matterhorn da aldeia de Zermatt hoje? Visibilidade na Kirchbrücke e webcam',
      description: 'Visibilidade do Matterhorn em tempo real a partir da aldeia de Zermatt (ponte Kirchbrücke e Riedweg). Webcam em direto, brilho do nascer do sol e nevoeiro do vale, sem bilhete de teleférico.',
      aspectLabel: 'Aresta nordeste e face leste enquadradas pelo vale',
      transportSummary: '5 minutos a pé desde a estação de Zermatt / largo da igreja (sem bilhete)',
      journeyTime: '0–10 minutos a pé (miradouro público gratuito)',
      bestTimeWindow: '20 min antes do nascer do sol – 08:30 CET (brilho da manhã e ar parado)',
      heroStat: {
        label: 'Preço do bilhete',
        value: '0 CHF (grátis)',
        detail: 'Ponte e trilhos públicos, abertos 24 horas, sem comboios de montanha',
      },
      quickFacts: [
        { label: 'Melhor ponto', value: 'Ponte Kirchbrücke', detail: 'Linha direta sobre o Mattervispa para a face leste' },
        { label: 'Ponto elevado', value: 'Riedweg / Mürini', detail: '10 minutos a subir acima dos telhados, menos gente' },
        { label: 'Hora dourada', value: 'Brilho no cume', detail: 'A ponta acende-se de rosa e laranja cerca de 15–20 minutos antes do nascer do sol no vale' },
        { label: 'Risco de nevoeiro', value: 'Verificar a base das nuvens', detail: 'O nevoeiro baixo (< 2.000 m) tapa a aldeia mesmo com os cumes limpos' },
      ],
      keyTakeaways: [
        'A Kirchbrücke é o principal miradouro gratuito de Zermatt: sem bilhete de comboio de montanha (90–220 CHF ou mais), acessível 24 horas no centro da aldeia.',
        'Para o famoso brilho dourado, esteja na ponte 20–30 minutos antes da hora oficial do nascer do sol; os 200 m mais altos do cume apanham a luz primeiro.',
        'Se a Kirchbrücke estiver cheia de fotógrafos, suba 10 minutos em direção a Riedweg / Mürini para uma vista sobre os chalés de madeira do Valais.',
        'Veja o diagnóstico de nuvens baixas: se o nevoeiro do vale (< 1.800 m) assentar sobre a aldeia, o Matterhorn pode estar invisível na Kirchbrücke e em pleno sol no Gornergrat (3.089 m) ou no Glacier Paradise (3.883 m).',
      ],
      comparisonTable: {
        caption: 'Miradouros públicos na aldeia de Zermatt',
        headers: ['Miradouro', 'Altitude', 'Caminhada desde a estação', 'Para quê e como se enquadra'],
        rows: [
          ['Kirchbrücke (ponte da igreja)', '1.608 m', '8 min a pé', 'Postal clássico sobre o Mattervispa; o ponto de encontro do nascer do sol.'],
          ['Riedweg / encosta de Mürini', '1.660 m', '15 min a pé (subida suave)', 'Panorama elevado, chalés de lariço envelhecidos que conduzem o olhar ao Matterhorn.'],
          ['Prado inferior de Hohbalmen', '1.750 m', '25 min a pé', 'Orla de pasto tranquila, linha de vista livre acima dos táxis elétricos da aldeia.'],
          ['Kirchplatz / Zermatterhof', '1.620 m', '6 min a pé', 'Centro histórico, junto à igreja de São Maurício e ao Matterhorn Museum.'],
        ],
      },
      sections: [
        {
          id: 'zermatt-village-matterhorn-views',
          heading: '1. Porque é que a Kirchbrücke é o coração da fotografia em Zermatt',
          paragraphs: [
            'Nem sempre é preciso um teleférico ou um comboio de cremalheira para ver o Matterhorn. A Kirchbrücke, sobre o Mattervispa alimentado pelo glaciar, alinha o olhar vale acima, direto à face leste recortada e à aresta Hörnli.',
            'A ponte está aberta 24 horas e é gratuita. É o teste da manhã: se o cume estiver nítido desde a Kirchbrücke ao amanhecer, é altura de subir às estações.',
          ],
          bulletPoints: [
            { bold: 'Brilho do nascer do sol:', text: 'O Matterhorn olha para leste: o sol toca a pirâmide enquanto a aldeia ainda está à sombra. A ponta brilha âmbar e magenta durante cerca de 15 minutos.' },
            { bold: 'Rio em primeiro plano:', text: 'As águas glaciares do Mattervispa dão água em movimento e uma linha de fuga até ao cume.' },
            { bold: 'Evitar a aglomeração da ponte:', text: 'Nas manhãs limpas, dezenas de tripés ocupam o gradeamento. Para sossego, continue 10 minutos a subir em direção a Riedweg / Mürini, por cima dos telhados de madeira.' },
          ],
          proTip: {
            label: 'A regra da inversão baixa',
            text: 'Se a aldeia estiver envolta em nevoeiro cinzento e frio, não desista. Quando as nuvens baixas são densas e as médias ou altas são nulas, o Gornergrat (3.089 m) e o Glacier Paradise (3.883 m) ficam acima das nuvens, sob um céu azul.',
          },
        },
        {
          id: 'sunrise-timing-and-tips',
          heading: '2. Horário e conselhos de fotografia desde a aldeia',
          paragraphs: [
            'Chegue à Kirchbrücke ou ao Riedweg pelo menos 20 minutos antes da hora oficial do nascer do sol. A primeira luz não aparece ao nível do chão: toca primeiro a agulha do Matterhorn (4.478 m) e desce depois pela parede.',
            'No inverno a aldeia está sob neve e as chaminés dos chalés fumegam. No verão e no outono, os lariços dourados das encostas contrastam com a pirâmide de gnaisse cinzento.',
          ],
        },
      ],
      faqs: [
        { question: 'Vê-se o Matterhorn desde a aldeia de Zermatt?', answer: 'Sim. O Matterhorn vê-se com clareza de vários pontos públicos da aldeia, sobretudo da Kirchbrücke sobre o Mattervispa e do caminho em subida do Riedweg / Mürini, sem qualquer bilhete.' },
        { question: 'Qual é o melhor miradouro gratuito do Matterhorn em Zermatt?', answer: 'A Kirchbrücke é o sítio gratuito mais conhecido para o brilho do nascer do sol. Para um panorama sobre os telhados dos chalés, com menos gente, suba 10–15 minutos pelo Riedweg.' },
        { question: 'A que horas nasce o sol na Kirchbrücke para o brilho do Matterhorn?', answer: 'No verão (junho–julho) a luz toca o cume por volta das 05:30–05:50 CET. No outono (setembro–outubro), entre as 06:45 e as 07:30 CET. No inverno, por volta das 07:45–08:15 CET. Chegue sempre 20 minutos antes da hora oficial.' },
        { question: 'E se houver nevoeiro na aldeia de Zermatt?', answer: 'Um estrato de vale cobre muitas vezes Zermatt por volta de 1.600 m enquanto os cumes estão limpos. Veja as pontuações de altitude: se o Gornergrat (3.089 m) ou o Glacier Paradise (3.883 m) marcarem 8–10/10, apanhe o comboio ou o teleférico para sair acima das nuvens.' },
      ],
    },
  },
  zh: {
    gornergrat: {
      name: '戈尔内格拉特观景台',
      shortName: '戈尔内格拉特',
      title: '戈尔内格拉特观景台：实时能见度、网络摄像头与马特洪峰全景指南',
      description: '海拔3,089米实时气象读数、策马特齿轨火车时刻、利菲尔湖倒影拍摄最佳时段及360°雪山全景全攻略。',
      aspectLabel: '东面 / 东北面（经典三角巧克力标志视角）',
      transportSummary: '从策马特火车站乘坐戈尔内格拉特登山齿轨火车 (GGB)',
      journeyTime: '单程约33分钟',
      bestTimeWindow: '07:00–11:00 CET（清晨晨光直射东面岩壁）',
      keyTakeaways: [
        '齿轨火车在恶劣天气下极其平稳，是策马特抗风能力最强的登山交通方式。',
        '建议赶乘早晨10:00前的班次上山，此时高空通透度最佳、云量最少。',
        '利菲尔湖 (Riffelsee) 距离罗滕博登 (Rotenboden) 站仅需步行5分钟。',
      ],
      heroStat: {
        label: '视线距离',
        value: '东侧9.1公里',
        detail: '可无遮挡看见霍恩利山脊与东壁（4,478米）',
      },
      quickFacts: [
        { label: '观看角度', value: '经典三角巧克力', detail: '标志性的东壁与东北壁金字塔剪影' },
        { label: '抗风能力', value: '非常高', detail: '缆车停运时，齿轨火车仍可运行' },
        { label: '最佳座位', value: '右侧（上山）', detail: '面向上山方向坐在右侧，马特洪峰几乎不离窗' },
        { label: '含湖站', value: '罗滕博登（2,757米）', detail: '戈尔内格拉特下一站，可看利菲尔湖倒影' },
      ],
      comparisonTable: {
        caption: '戈尔内格拉特铁路：各站海拔与马特洪峰视野',
        headers: ['车站', '海拔', '车程', '视线以及为何在此下车'],
        rows: [
          ['策马特火车站', '1,608米', '0分钟', '终点站正对瑞士联邦铁路到发线；从右侧上车。'],
          ['Riffelalp', '2,222米', '16分钟', '林线之上，古老瑞士石松框住马特洪峰。'],
          ['Riffelberg', '2,582米', '23分钟', '开阔高山草甸，可广角看到霍恩利山脊与富尔格山脊。'],
          ['罗滕博登（利菲尔湖）', '2,815米', '28分钟', '在此下车，步行5分钟到利菲尔湖（2,757米）拍倒影。'],
          ['戈尔内格拉特山顶', '3,089米', '33分钟', '360°观景台，面向马特洪峰、戈尔内冰川及29座四千米峰。'],
        ],
      },
      sections: [
        {
          id: 'can-you-see-matterhorn-from-gornergrat-today',
          heading: '1. 买票前如何读懂今天的戈尔内格拉特能见度',
          paragraphs: [
            '戈尔内格拉特铁路往返票价在92至132瑞士法郎之间（持瑞士旅行通票或半价卡可享50%折扣），因云层遮挡不予退票。上车前先看高海拔数据很有必要。',
            '在海拔1,608米的策马特村里，你只能看到最底层大气。本页的戈尔内格拉特模型查询的是校准到3,089米、坐标45.9840° N, 7.7845° E的Open-Meteo格点。分数在8/10至10/10（“可见”）时，东壁和霍恩利山脊没有遮挡。6/10或7/10（“部分可见”）时，会有过境云，或山顶拖着背风旗云。',
          ],
          bulletPoints: [
            { bold: '8–10/10（马上出发）：', text: '3,000米中层云量低于25%，戈尔内冰川方向的水平能见度超过20公里。' },
            { bold: '5–7/10（对比上午和下午）：', text: '通常上午（06:00–11:00 CET）有晴窗，午后热对流积云发展。赶最早一班。' },
            { bold: '1–4/10（先别买票）：', text: '厚层中云或降水包住3,000–4,478米。花100瑞士法郎以上之前，先看下方戈尔内格拉特360°摄像头。' },
          ],
          proTip: {
            label: '谷地逆温的窍门',
            text: '如果村里灰蒙蒙的，对照上方“2,000米以下谷雾”和“中层云（2,000–6,000米）”。低层雾超过70%、中层云低于20%时，齿轨火车会把你送出雾层，到3,089米的阳光里。',
          },
        },
        {
          id: 'best-time-and-lighting-gornergrat',
          heading: '2. 戈尔内格拉特的最佳时段：晨光与午后云',
          paragraphs: [
            '戈尔内格拉特位于马特洪峰的东南东方向。因此日出到11:00 CET，晨光直射东壁，岩带、雪原和霍恩利山脊都很清楚。',
            '14:00 CET之后，太阳转到山后朝向意大利，面对戈尔内格拉特的岩壁变成逆光，同时谷风抬升，山顶凝出午后云。',
          ],
        },
        {
          id: 'gornergrat-train-tips',
          heading: '3. 齿轨火车：座位、中途下车与利菲尔湖',
          paragraphs: [
            '普通戈尔内格拉特日票不会售罄。在本页确认能见度较高后，出发前5分钟用手机或车站窗口买票即可。',
          ],
          bulletPoints: [
            { bold: '上山一定坐右侧：', text: '面向上山方向坐在右侧。过了芬德尔巴赫桥，马特洪峰会填满右侧车窗，一直到3,089米。' },
            { bold: '在罗滕博登下车：', text: '车票允许在中途站上下。罗滕博登（2,815米）在山顶下一站，步行5分钟即到利菲尔湖。' },
          ],
        },
      ],
      faqs: [
        { question: '今天从戈尔内格拉特能看见马特洪峰吗？', answer: '看本页顶部每15分钟更新的1–10分上午/下午能见度，对应戈尔内格拉特（3,089米）。8–10/10表示金字塔清晰；6–7/10为部分可见、山脊有薄云；1–4/10表示云挡住了山顶。' },
        { question: '村里阴天，还值得上戈尔内格拉特吗？', answer: '要看云的高度。若低层云（2,000米以下）很多，但中层云（2,000–6,000米）低于25%，戈尔内格拉特（3,089米）在谷雾之上、阳光之中。若中层云超过70%，车站就在云里，把票留到更晴的窗口。' },
        { question: '戈尔内格拉特火车哪一侧看马特洪峰最好？', answer: '从策马特上山坐右侧，下山坐左侧。33分钟爬升中，右侧车窗几乎全程能看见马特洪峰。' },
        { question: '戈尔内格拉特车票需要提前预订吗？', answer: '不需要。常规齿轨列车不设座位预订，也不会售罄。出发当天先看早晨能见度和Roundshot摄像头，再买票。' },
      ],
    },
    'glacier-paradise': {
      name: '马特洪峰冰川天堂 (小马特洪峰)',
      shortName: '冰川天堂',
      title: '马特洪峰冰川天堂：海拔3,883米实时高空能见度与实况摄像头',
      description: '全欧洲海拔最高缆车站（3,883米）。实时峰顶云层高度监测、3S超快缆车体验及马特洪峰南坡险峻岩壁近景。',
      aspectLabel: '南面 / 西南面（高海拔冰川俯瞰视角）',
      transportSummary: '从策马特富里 (Furi) 换乘马特洪峰特快线及3S全景缆车',
      journeyTime: '单程约40–45分钟',
      bestTimeWindow: '08:30–12:30 CET（午后热对流积云形成前的黄金采光期）',
      keyTakeaways: [
        '3,883米的海拔常常耸立在山谷逆温层云海之上，常现云上晴空。',
        '如遭遇风速超过50公里/小时的焚风强阵风，顶层缆车可能会停运。',
        '拥有全年开放的冰雪乐园以及深入冰川地下的冰宫殿。',
      ],
      heroStat: {
        label: '平台海拔',
        value: '3,883米',
        detail: '欧洲最高缆车站——比戈尔内格拉特高794米',
      },
      quickFacts: [
        { label: '马特洪峰角度', value: '南壁 / 富尔格壁', detail: '近距离梯形岩壁，不是三角巧克力的弯钩' },
        { label: '逆温优势', value: '高出3,500米以下的雾', detail: '常升到山谷冬秋层云之上' },
        { label: '风敏感度', value: '焚风警报', detail: '南风超过50–55公里/小时时，3S缆车可能暂停' },
        { label: '全天候项目', value: '冰宫殿', detail: '冰川内15米的冰洞在云中仍然开放' },
      ],
      comparisonTable: {
        caption: '小马特洪峰（3,883米）：各段缆车与视角',
        headers: ['区间 / 车站', '海拔', '马特洪峰视野与大气角色'],
        rows: [
          ['富里 (Furi)', '1,867米', '林间草地，陡视东壁与富尔格壁。'],
          ['黑湖 Schwarzsee（可绕行）', '2,583米', '正对霍恩利山脊山脚，中海拔最佳近景。'],
          ['Trockener Steg', '2,939米', '冰川舌车站，位于东壁/富尔格壁正下方；换乘3S缆车。'],
          ['马特洪峰冰川天堂（小马特洪峰）', '3,883米', '360°平台，可望瑞士、意大利和法国的38座四千米峰，包括勃朗峰。'],
          ['Testa Grigia（阿尔卑斯跨境）', '3,480米', '跨境3S缆车抵达意大利边境山脊，俯瞰布勒伊-切尔维尼亚。'],
        ],
      },
      sections: [
        {
          id: 'klein-matterhorn-view-silhouette',
          heading: '1. 从小马特洪峰（3,883米）看，马特洪峰是什么样子？',
          paragraphs: [
            '上冰川天堂（小马特洪峰）之前，最要紧的是视角。从策马特和戈尔内格拉特看，你在东北侧：东壁与北壁合成窄而弯曲的“三角巧克力”金字塔。',
            '乘坐马特洪峰特快线和3S缆车向南到小马特洪峰（3,883米），等于绕山转了近90度。平台朝北北西，看的是南壁（意大利侧）和富尔格壁。山体像从冰川里拔起的宽肩岩堡，而不是细钩。同时可见38座四千米以上山峰，远至勃朗峰（4,808米）和意大利大帕拉迪索。',
          ],
          proTip: {
            label: '一次行程看两个角度',
            text: '往返冰川天堂时，在施瓦茨湖 Schwarzsee（2,583米）或 Trockener Steg（2,939米）下车。在 Trockener Steg，你几乎就站在1,500米高的东壁正下方。',
          },
        },
        {
          id: 'klein-matterhorn-weather-and-fohn',
          heading: '2. 小马特洪峰的能见度：谷地逆温与南来焚风',
          paragraphs: [
            '小马特洪峰的预报单独计算在3,883米（45.9383° N, 7.7297° E），因为这里的天气常常和戈尔内格拉特（3,089米）不一样。',
            '秋冬冷空气常积在马特河谷，逆温大约在2,800–3,200米。那些日子小马特洪峰会探出云海近700米，头顶是10/10的蓝天。',
            '一旦南来焚风建立，来自意大利奥斯塔谷的暖湿空气被抬过布勒伊坡和特奥杜尔山口（3,300米）。小马特洪峰是策马特一侧最先碰到这堵湿墙的山：3,883米能见度可以掉到2/10，而东北6公里处较背风的戈尔内格拉特仍可能有7/10。',
          ],
          bulletPoints: [
            { bold: '风速阈值（超过50公里/小时）：', text: '看上方“风与焚风风险”。现代3S缆车比旧索道抗风，但3,883米阵风超过50–60公里/小时时，Trockener Steg至小马特洪峰段仍可能因安全停运。' },
            { bold: '全年低于零度：', text: '即便七八月，3,883米气温通常在−6°C到+2°C。带防风层、冰川镜（3/4类），最后一段台阶放慢脚步。' },
          ],
        },
        {
          id: 'lighting-and-best-time-klein-matterhorn',
          heading: '3. 小马特洪峰摄影的最佳时段',
          paragraphs: [
            '戈尔内格拉特的东壁午后会失去直射阳光，小马特洪峰面对的是南壁和西壁。因此冰川天堂的光线从上午晚些时候到午后早段（10:00–15:00 CET）更好，太阳扫过南天，照亮意大利侧山脊。',
          ],
        },
      ],
      faqs: [
        { question: '今天小马特洪峰的能见度如何？', answer: '看本页顶部马特洪峰冰川天堂 / 小马特洪峰（3,883米）的1–10分上午/下午指数，每15分钟按3,883米数据更新。8–10/10表示南壁、布赖特峰和勃朗峰方向的360°视野清晰。' },
        { question: '为什么从冰川天堂看，马特洪峰不一样？', answer: '小马特洪峰（3,883米）在马特洪峰的南南东、意大利边境山脊上。你看到的不是村里和戈尔内格拉特那种窄东/北“三角巧克力”，而是隔着特奥杜尔冰川的更宽、更陡的南壁和西壁（意大利布勒伊侧）。' },
        { question: '大风时小马特洪峰缆车会停吗？', answer: '会。Trockener Steg（2,939米）到小马特洪峰（3,883米）的3S缆车抗风较好，但南来焚风或超过50–60公里/小时的阵风仍可能暂时关闭上段。去策马特南站之前先看风与焚风。' },
        { question: '能见度只有5/10或6/10，冰川天堂还值得去吗？', answer: '6/10（“部分可见”）仍然值得：票里包含深入冰川15米、完全不受云影响的冰宫殿，以及影视休息厅。若分数≤4/10，3,883米平台会是白茫茫一片，应改期。' },
      ],
    },
    'riffelsee': {
      name: '苏内加与利菲尔湖高山倒影',
      shortName: '湖面倒影',
      title: '利菲尔湖与苏内加：拍摄马特洪峰湖面倒影实时风力与水况诊断',
      description: '实时表面风速与水面平静度监测，助您在利菲尔湖 (2,757米) 与施泰利湖 (2,537米) 捕捉完美的马特洪峰镜面倒影。',
      aspectLabel: '东面湖面倒影（晨曦黄金时刻镜面）',
      transportSummary: '乘齿轨火车至罗滕博登 (利菲尔湖) 或地下缆车至苏内加 (施泰利湖)',
      journeyTime: '单程约25–35分钟',
      bestTimeWindow: '日出至09:30 CET（山谷上升热风刮起前的水面无风黄金期）',
      keyTakeaways: [
        '水面如镜的必要条件是现场地表风速低于12公里/小时。',
        '利菲尔湖的解冻期通常为6月下旬至10月下旬，其余季节被积雪覆盖。',
        '若上湖水面有风浪，顺小径向下走100米至下湖洼地，通常风平浪静。',
      ],
      heroStat: {
        label: '镜面风速上限',
        value: '< 12公里/小时',
        detail: '地表风速超过15公里/小时时，利菲尔湖与施泰利湖会起波纹',
      },
      quickFacts: [
        { label: '利菲尔湖到达', value: '步行5分钟', detail: '齿轨火车在罗滕博登（2,815米）下车，再下降约60米' },
        { label: '施泰利湖到达', value: '步行20分钟', detail: '苏内加缆车（2,288米）再换乘布劳赫德缆车（2,571米）' },
        { label: '明水季节', value: '6月中旬–10月', detail: '11月至6月上旬湖面封冻并被雪覆盖' },
        { label: '有风时的备选', value: '下利菲尔湖', detail: '主湖以西100米的小湖，主湖起波时这里往往仍平静' },
      ],
      comparisonTable: {
        caption: '上利菲尔湖、下利菲尔湖与施泰利湖',
        headers: ['倒影湖', '海拔', '从策马特如何到达', '前景与抗风'],
        rows: [
          ['上利菲尔湖（主湖）', '2,757米', '齿轨火车到罗滕博登（28分钟）再步行5分钟', '最近、最大的马特洪峰倒影；10:00 CET后易受东风和南风影响。'],
          ['下利菲尔湖（第二小湖）', '2,745米', '过主湖再向西步行2分钟', '天然土坎挡风；主湖起波时的最佳备用点。'],
          ['施泰利湖（苏内加–布劳赫德）', '2,537米', '苏内加缆车 + 布劳赫德缆车 + 步行20分钟', '半没入水中的巨石和羊胡子草；山谷取景略宽。'],
          ['格林吉湖（五湖步道）', '2,334米', '施泰利湖下方沿五湖步道步行45分钟', '落叶松环绕，策马特各湖中挡风最好，10月尤其合适。'],
          ['莱塞湖（苏内加平台）', '2,232米', '苏内加缆车（4.5分钟）加免费电梯', '就在日光平台下方，带孩子最容易。'],
        ],
      },
      sections: [
        {
          id: 'riffelsee-matterhorn-reflection-conditions',
          heading: '1. 利菲尔湖与施泰利湖倒影的三条规则',
          paragraphs: [
            '很多人在晴朗的下午走到利菲尔湖或施泰利湖，期待明信片式的倒影，结果只看到发暗的碎浪，或者五月的一片雪原。',
            '把倒立的马特洪峰拍进水里，是一场微气候：离开策马特之前，可以在这里核对三个物理条件。',
          ],
          bulletPoints: [
            { bold: '规则1——地表风速必须低于12公里/小时：', text: '只有没有毛细波时水面才是镜面。0–10公里/小时倒影锋利；12–20公里/小时峰顶被拉成竖条；超过22公里/小时倒影消失。' },
            { bold: '规则2——中层云必须少（分数≥7/10）：', text: '利菲尔湖（2,757米）和施泰利湖（2,537米）都朝西南看4,478米的山顶。3,200–4,200米的云带会同时挡住天空和倒影里的上半座金字塔。' },
            { bold: '规则3——解冻窗口（6月中旬至10月下旬）：', text: '两湖海拔在2,537–2,757米，通常10月下旬或11月封冻，积雪留到6月中下旬。6月上旬常见半融的青绿浮冰。' },
          ],
          proTip: {
            label: '下利菲尔湖的办法',
            text: '主湖起波也不必失望离开罗滕博登。沿小路再往里费尔贝格方向走100米，就是较小的“下利菲尔湖”。它更小，躲在冰碛唇后面，风速到18–20公里/小时仍可能平如镜。',
          },
        },
        {
          id: 'sunnegga-vs-rotenboden-timing',
          heading: '2. 为什么早晨（07:15–09:30 CET）对湖面倒影至关重要',
          paragraphs: [
            '高山谷地的风有固定日变化。夜间辐射冷却让黎明的湖面死寂。大约10:00 CET，太阳加热马特河谷岩壁，谷风以15–25公里/小时沿坡上吹，湖面起波，同时霍恩利山脊开始长出积云。',
            '夏季戈尔内格拉特齿轨火车07:00 CET从策马特出发。07:28到罗滕博登，07:33站在利菲尔湖边，空气仍静，东壁是金色晨光。',
          ],
        },
        {
          id: 'five-lakes-hike-strategy',
          heading: '3. 苏内加与五湖步道（5-Seenweg）',
          paragraphs: [
            '走五湖步道（施泰利湖、格林吉湖、绿湖、莫斯吉湖、莱塞湖，9.8公里，约2.5小时）时，缆车一开就从最高的布劳赫德（2,571米）出发，趁水面还静先到施泰利湖。即便中午起风，格林吉湖（2,334米）有高大落叶松挡风，倒影可以留到下午。',
          ],
        },
      ],
      faqs: [
        { question: '利菲尔湖里倒映的是哪座山？', answer: '马特洪峰。从戈尔内格拉特铁路的罗滕博登站步行五分钟到利菲尔湖，东壁填满倒影。苏内加和施泰利湖从更低的角度看到同一座峰。' },
        { question: '今天利菲尔湖的倒影条件好吗？', answer: '看本页顶部利菲尔湖与施泰利湖的实时诊断。清晰倒影需要能见度7–10/10，且地表风速低于12公里/小时，并处在6月中旬至10月的无冰期。' },
        { question: '看倒影，利菲尔湖和施泰利湖哪个更好？', answer: '利菲尔湖（2,757米，火车到罗滕博登再步行5分钟）最近、最大，而且更早到达（07:30 CET），那时风最静。施泰利湖（2,537米，苏内加至布劳赫德再步行20分钟）有标志性前景巨石，也是五湖步道的起点。' },
        { question: '五月、六月或十一月利菲尔湖会结冰吗？', answer: '会。2,757米的利菲尔湖从11月到6月上旬封冻覆雪（属于戈尔内格拉特冬季滑雪和雪鞋区）。青绿部分消融通常在6月10日至25日之间；完全的液态镜面从6月下旬持续到10月下旬。' },
        { question: '利菲尔湖风太大、拍不成倒影怎么办？', answer: '先向西走过主湖约100米，到更小的“下利菲尔湖”。它在避风洼地里，主湖起浪时往往仍然平滑。也可以用6挡或10挡ND镜，曝光15至30秒，把波纹抹成雾状倒影。' },
      ],
    },
    sunnegga: {
      name: '苏内加',
      shortName: '苏内加',
      title: '苏内加缆索铁路与马特洪峰东壁',
      description: '苏内加缆索铁路是马特洪峰东壁、施泰利湖和五湖步道的低处平台。想要轻松的起点、而不是最近的倒影时，选这里。',
      aspectLabel: '从低处平台看东壁',
      transportSummary: '从策马特乘坐苏内加缆索铁路',
      journeyTime: '4.5分钟',
      bestTimeWindow: '第一班缆车，赶在微风到达施泰利湖之前',
      heroStat: {
        label: '缆索铁路',
        value: '4.5分钟',
        detail: '从策马特到海拔2,288米的平台',
      },
      quickFacts: [
        { label: '平台', value: '2,288米', detail: '东壁视角比利菲尔湖更宽、更低' },
        { label: '施泰利湖', value: '步行20分钟', detail: '续乘至布劳赫德（2,571米），再走到2,537米的湖' },
        { label: '莱塞湖', value: '平台下方', detail: '最容易的湖，离缆车站只有几分钟' },
        { label: '与利菲尔湖相比', value: '出发更晚', detail: '戈尔内格拉特火车大约07:30可到利菲尔湖。苏内加开放更晚。' },
      ],
      keyTakeaways: [
        '苏内加是海拔2,288米的缆索铁路平台。看的是东壁，比利菲尔湖更低、更远。',
        '这一侧的倒影湖是施泰利湖。先乘缆车到布劳赫德，再步行20分钟。',
        '带孩子、走五湖步道或去莱塞湖，选苏内加。想要第一缕光里最大的倒影，选利菲尔湖。',
      ],
      comparisonTable: {
        caption: '什么时候苏内加比去利菲尔湖更好',
        headers: ['行程', '选苏内加', '选利菲尔湖'],
        rows: [
          ['最近的倒影', '施泰利湖：缆车之后再步行20分钟', '从罗滕博登向下走五分钟。东壁最大的镜子。'],
          ['第一缕光', '缆索铁路大约08:00开放', '第一班戈尔内格拉特火车大约07:30可到湖边'],
          ['轻松的一天', '莱塞湖就在平台旁。不需要戈尔内格拉特车票。', '买到罗滕博登的火车票，再短距离下坡'],
        ],
      },
      sections: [
        {
          id: 'sunnegga-funicular',
          heading: '苏内加缆索铁路',
          paragraphs: [
            '缆索铁路离开策马特，大约四分半钟升到苏内加平台（2,288米）。东壁就在面前，比从利菲尔湖看更宽、更低。',
            '莱塞湖就在平台下方。适合带孩子，也不需要乘坐戈尔内格拉特铁路。',
          ],
        },
        {
          id: 'stellisee',
          heading: '施泰利湖与东壁',
          paragraphs: [
            '这一侧的倒影是海拔2,537米的施泰利湖。从苏内加乘缆车到布劳赫德（2,571米），再步行约20分钟。前景是巨石和羊胡子草，山顶仍是利菲尔湖看到的那面东壁。',
            '水面只在6月下旬到10月能映出山，而且风速要保持在大约12公里/小时以下。下午即使晴朗，微风一起来倒影就没了。',
          ],
        },
        {
          id: 'when-sunnegga-wins',
          heading: '什么时候苏内加胜过走向利菲尔湖',
          paragraphs: [
            '利菲尔湖更近、更大，第一班火车也到得更早。想走五湖步道（施泰利湖、格林吉湖、绿湖、莫斯吉湖、莱塞湖）、带孩子，或不想买戈尔内格拉特车票时，苏内加更好。',
            '缆车一开就从布劳赫德出发，趁施泰利湖还平静。如果风已经起来，更低、有落叶松挡风的格林吉湖会把倒影留到更晚。',
          ],
        },
      ],
      faqs: [
        { question: '苏内加是什么？', answer: '策马特上方海拔2,288米的缆索铁路平台。车程约4.5分钟。看到的是马特洪峰东壁，比利菲尔湖更低。' },
        { question: '拍倒影，苏内加和利菲尔湖哪个更好？', answer: '想要最大的镜子和最早的出发，选利菲尔湖。苏内加是更轻松的平台，也是走向施泰利湖的起点。' },
        { question: '从苏内加怎么去施泰利湖？', answer: '乘缆车到海拔2,571米的布劳赫德，再步行约20分钟到海拔2,537米的施泰利湖。' },
      ],
    },
    'zermatt-village': {
      name: '策马特村（教堂桥与里德路）',
      shortName: '策马特村',
      title: '今天从策马特村能看见马特洪峰吗？教堂桥实时能见度与摄像头',
      description: '从策马特村（教堂桥与里德路）查看马特洪峰实时能见度。直播摄像头、日出霞光和谷雾，无需山地车票。',
      aspectLabel: '东北山脊与东壁的谷地取景',
      transportSummary: '从策马特火车站 / 教堂广场步行5分钟（无需车票）',
      journeyTime: '步行0–10分钟（免费公共观景点）',
      bestTimeWindow: '日出前20分钟至08:30 CET（晨间霞光与静风）',
      heroStat: {
        label: '票价',
        value: '0瑞士法郎（免费）',
        detail: '公共桥梁与步道，全天开放，无需登山铁路',
      },
      quickFacts: [
        { label: '最佳位置', value: '教堂桥 Kirchbrücke', detail: '越过马特维斯帕河，直视东壁' },
        { label: '高一点的点', value: '里德路 / Mürini', detail: '向上步行10分钟，越过木屋屋顶，人更少' },
        { label: '日出金色时刻', value: '山顶霞光', detail: '峰尖在谷地日出前约15–20分钟染上粉与橙' },
        { label: '谷雾风险', value: '查看云底', detail: '2,000米以下的低雾会挡住村里的视线，即使山顶是晴的' },
      ],
      keyTakeaways: [
        '教堂桥是策马特最重要的免费观景点：不用买90–220瑞士法郎以上的山地车票，村中心全天可到。',
        '想看著名的金色霞光，在官方日出前20–30分钟到桥上；最高约200米的峰尖最先被照亮。',
        '若桥上三脚架太多，向上步行10分钟到里德路 / Mürini，从传统木屋屋顶上方看过去。',
        '看上方低云诊断：若1,800米以下的谷雾罩住村子，教堂桥可能看不见山，而戈尔内格拉特（3,089米）或冰川天堂（3,883米）已在阳光里。',
      ],
      comparisonTable: {
        caption: '策马特村公共观景点',
        headers: ['观景点', '海拔', '从火车站步行', '适合什么、如何取景'],
        rows: [
          ['教堂桥 Kirchbrücke', '1,608米', '步行8分钟', '马特维斯帕河上的经典明信片；著名的日出集合点。'],
          ['里德路 / Mürini山坡', '1,660米', '步行15分钟（缓上坡）', '高处全景，风化落叶松木屋把视线引向马特洪峰。'],
          ['Hohbalmen下草地', '1,750米', '步行25分钟', '安静的牧场边缘，视线越过村里的电动出租车。'],
          ['教堂广场 / Zermatterhof', '1,620米', '步行6分钟', '历史中心，紧邻圣毛里求斯教堂和马特洪峰博物馆。'],
        ],
      },
      sections: [
        {
          id: 'zermatt-village-matterhorn-views',
          heading: '1. 为什么教堂桥是策马特摄影的中心',
          paragraphs: [
            '不一定要坐高海拔缆车或齿轨火车才能感受马特洪峰。横跨冰川融水马特维斯帕河的教堂桥，把视线沿山谷一直送到锯齿状的东壁和霍恩利山脊。',
            '桥全天开放、完全免费。它是早晨的试纸：黎明时从桥上看到的山顶如果清晰，就该去山上的车站。',
          ],
          bulletPoints: [
            { bold: '清晨霞光：', text: '马特洪峰面向东方，日出先照到峰顶金字塔，村子还在阴影里。峰尖大约亮15分钟的琥珀与品红。' },
            { bold: '河水前景：', text: '马特维斯帕河的冰川水在前景流动，形成指向峰顶的引导线。' },
            { bold: '避开桥上的人群：', text: '晴朗的早晨，栏杆边会排满三脚架。想安静些，继续向上走10分钟到里德路 / Mürini，从木屋顶上方取景。' },
          ],
          proTip: {
            label: '低层逆温规则',
            text: '村里被冷灰的雾罩住时不要放弃。低云很多、中高层云为零时，戈尔内格拉特（3,089米）和冰川天堂（3,883米）会站在云上的蓝天里。',
          },
        },
        {
          id: 'sunrise-timing-and-tips',
          heading: '2. 村里观景的时间与拍摄建议',
          paragraphs: [
            '至少在官方日出前20分钟到达教堂桥或里德路。第一缕光并不出现在地面，而是先碰到马特洪峰（4,478米）的针尖，再慢慢沿岩壁下降。',
            '冬天村子覆雪，木屋烟囱冒烟。夏秋时，谷坡金色落叶松衬着灰色片麻岩金字塔。',
          ],
        },
      ],
      faqs: [
        { question: '从策马特村能看见马特洪峰吗？', answer: '能。村里多个公共地点都能清楚看见，最有名的是马特维斯帕河上的教堂桥，以及向上的里德路 / Mürini，完全免费。' },
        { question: '策马特看马特洪峰，最好的免费点在哪里？', answer: '教堂桥是看日出霞光最著名的免费地点。想从传统木屋顶上方取景、人少一些，沿里德路向上走10–15分钟。' },
        { question: '教堂桥看马特洪峰霞光，日出是几点？', answer: '夏季（6–7月）光线大约在05:30–05:50 CET触到山顶。秋季（9–10月）在06:45至07:30 CET。冬季大约07:45–08:15 CET。请始终比官方日出早到20分钟。' },
        { question: '策马特村里有雾怎么办？', answer: '1,600米左右的谷地常有低层雾，而山顶完全晴朗。看高海拔分数：若戈尔内格拉特（3,089米）或冰川天堂（3,883米）是8–10/10，乘火车或缆车升到云上。' },
      ],
    },
  },
  'zh-tw': {
    gornergrat: {
      name: '高納葛拉特觀景台',
      shortName: '高納葛拉特',
      title: '高納葛拉特觀景台：即時能見度、實況鏡頭與馬特洪峰全景攻略',
      description: '海拔3,089公尺即時能見度數據、策馬特齒軌登山火車接駁指南、利菲爾湖倒影攝影時刻及360°阿爾卑斯全景。',
      aspectLabel: '東面 / 東北面（經典瑞士三角巧克力視角）',
      transportSummary: '從策馬特車站搭乘高納葛拉特登山齒軌鐵路 (GGB)',
      journeyTime: '單程約33分鐘',
      bestTimeWindow: '07:00–11:00 CET（清晨陽光直射東面金色岩壁）',
      keyTakeaways: [
        '齒軌火車極具防風與耐候性，是策馬特山區最風雨無阻的交通工具。',
        '早晨10點前搭車上山，能享有最透徹的天空視野與最低的雲霧機率。',
        '利菲爾湖 (Riffelsee) 距離羅滕博登 (Rotenboden) 站僅需步行5分鐘下坡。',
      ],
      heroStat: {
        label: '視線距離',
        value: '東側9.1公里',
        detail: '可無遮擋看見霍恩利山脊與東壁（4,478公尺）',
      },
      quickFacts: [
        { label: '觀看角度', value: '經典三角巧克力', detail: '標誌性的東壁與東北壁金字塔剪影' },
        { label: '抗風能力', value: '非常高', detail: '纜車停駛時，齒軌火車仍可運行' },
        { label: '最佳座位', value: '右側（上山）', detail: '面向上山方向坐在右側，馬特洪峰幾乎不離窗' },
        { label: '含湖站', value: '羅滕博登（2,757公尺）', detail: '高納葛拉特下一站，可看利菲爾湖倒影' },
      ],
      comparisonTable: {
        caption: '高納葛拉特鐵路：各站海拔與馬特洪峰視野',
        headers: ['車站', '海拔', '車程', '視線以及為何在此下車'],
        rows: [
          ['策馬特火車站', '1,608公尺', '0分鐘', '終點站正對瑞士聯邦鐵路到發線；從右側上車。'],
          ['Riffelalp', '2,222公尺', '16分鐘', '林線之上，古老瑞士石松框住馬特洪峰。'],
          ['Riffelberg', '2,582公尺', '23分鐘', '開闊高山草甸，可廣角看到霍恩利山脊與富爾格山脊。'],
          ['羅滕博登（利菲爾湖）', '2,815公尺', '28分鐘', '在此下車，步行5分鐘到利菲爾湖（2,757公尺）拍倒影。'],
          ['高納葛拉特山頂', '3,089公尺', '33分鐘', '360°觀景台，面向馬特洪峰、戈爾內冰川及29座四千米峰。'],
        ],
      },
      sections: [
        {
          id: 'can-you-see-matterhorn-from-gornergrat-today',
          heading: '1. 買票前如何讀懂今天的高納葛拉特能見度',
          paragraphs: [
            '高納葛拉特鐵路往返票價在92至132瑞士法郎之間（持瑞士旅行通票或半價卡可享50%折扣），因雲層遮擋不予退票。上車前先看高海拔數據很有必要。',
            '在海拔1,608公尺的策馬特村裡，你只能看到最底層大氣。本頁的高納葛拉特模型查詢的是校準到3,089公尺、座標45.9840° N, 7.7845° E的Open-Meteo格點。分數在8/10至10/10（「可見」）時，東壁和霍恩利山脊沒有遮擋。6/10或7/10（「部分可見」）時，會有過境雲，或山頂拖著背風旗雲。',
          ],
          bulletPoints: [
            { bold: '8–10/10（馬上出發）：', text: '3,000公尺中層雲量低於25%，戈爾內冰川方向的水平能見度超過20公里。' },
            { bold: '5–7/10（對比上午和下午）：', text: '通常上午（06:00–11:00 CET）有晴窗，午後熱對流積雲發展。趕最早一班。' },
            { bold: '1–4/10（先別買票）：', text: '厚層中雲或降水包住3,000–4,478公尺。花100瑞士法郎以上之前，先看下方高納葛拉特360°攝影機。' },
          ],
          proTip: {
            label: '谷地逆溫的竅門',
            text: '如果村裡灰濛濛的，對照上方「2,000公尺以下谷霧」和「中層雲（2,000–6,000公尺）」。低層霧超過70%、中層雲低於20%時，齒軌火車會把你送出霧層，到3,089公尺的陽光裡。',
          },
        },
        {
          id: 'best-time-and-lighting-gornergrat',
          heading: '2. 高納葛拉特的最佳時段：晨光與午後雲',
          paragraphs: [
            '高納葛拉特位於馬特洪峰的東南東方向。因此日出到11:00 CET，晨光直射東壁，岩帶、雪原和霍恩利山脊都很清楚。',
            '14:00 CET之後，太陽轉到山後朝向義大利，面對高納葛拉特的岩壁變成逆光，同時谷風抬升，山頂凝出午後雲。',
          ],
        },
        {
          id: 'gornergrat-train-tips',
          heading: '3. 齒軌火車：座位、中途下車與利菲爾湖',
          paragraphs: [
            '普通高納葛拉特日票不會售罄。在本頁確認能見度較高後，出發前5分鐘用手機或車站窗口買票即可。',
          ],
          bulletPoints: [
            { bold: '上山一定坐右側：', text: '面向上山方向坐在右側。過了芬德爾巴赫橋，馬特洪峰會填滿右側車窗，一直到3,089公尺。' },
            { bold: '在羅滕博登下車：', text: '車票允許在中途站上下。羅滕博登（2,815公尺）在山頂下一站，步行5分鐘即到利菲爾湖。' },
          ],
        },
      ],
      faqs: [
        { question: '今天從高納葛拉特能看見馬特洪峰嗎？', answer: '看本頁頂部每15分鐘更新的1–10分上午/下午能見度，對應高納葛拉特（3,089公尺）。8–10/10表示金字塔清晰；6–7/10為部分可見、山脊有薄雲；1–4/10表示雲擋住了山頂。' },
        { question: '村裡陰天，還值得上高納葛拉特嗎？', answer: '要看雲的高度。若低層雲（2,000公尺以下）很多，但中層雲（2,000–6,000公尺）低於25%，高納葛拉特（3,089公尺）在谷霧之上、陽光之中。若中層雲超過70%，車站就在雲裡，把票留到更晴的窗口。' },
        { question: '高納葛拉特火車哪一側看馬特洪峰最好？', answer: '從策馬特上山坐右側，下山坐左側。33分鐘爬升中，右側車窗幾乎全程能看見馬特洪峰。' },
        { question: '高納葛拉特車票需要提前預訂嗎？', answer: '不需要。常規齒軌列車不設座位預訂，也不會售罄。出發當天先看早晨能見度和Roundshot攝影機，再買票。' },
      ],
    },
    'glacier-paradise': {
      name: '馬特洪峰冰川天堂 (小馬特洪峰)',
      shortName: '冰川天堂',
      title: '馬特洪峰冰川天堂：海拔3,883公尺即時高空能見度與鏡頭直播',
      description: '歐洲最高纜車站（3,883公尺）。即時頂峰雲層診斷、3S全景纜車接駁及馬特洪峰南面壯麗冰川視角。',
      aspectLabel: '南面 / 西南面（高海拔冰原俯瞰視角）',
      transportSummary: '從策馬特富里 (Furi) 搭乘馬特洪峰快線轉乘3S纜車',
      journeyTime: '單程約40–45分鐘',
      bestTimeWindow: '08:30–12:30 CET（中午熱對流雲層聚集前的黃金賞景時段）',
      keyTakeaways: [
        '3,883公尺高度常常位處山谷低雲逆溫層之上，呈現雲海之上萬里無雲的景象。',
        '當焚風陣風超過每小時50公里時，最頂段纜車將依安全考量暫停營運。',
        '全年皆可滑雪，並可參觀深入冰川內部深處的冰宮殿。',
      ],
      heroStat: {
        label: '平台海拔',
        value: '3,883公尺',
        detail: '歐洲最高纜車站——比高納葛拉特高794公尺',
      },
      quickFacts: [
        { label: '馬特洪峰角度', value: '南壁 / 富爾格壁', detail: '近距離梯形岩壁，不是三角巧克力的彎鉤' },
        { label: '逆溫優勢', value: '高出3,500公尺以下的霧', detail: '常升到山谷冬秋層雲之上' },
        { label: '風敏感度', value: '焚風警報', detail: '南風超過每小時50–55公里時，3S纜車可能暫停' },
        { label: '全天候項目', value: '冰宮殿', detail: '冰川內15公尺的冰洞在雲中仍然開放' },
      ],
      comparisonTable: {
        caption: '小馬特洪峰（3,883公尺）：各段纜車與視角',
        headers: ['區間 / 車站', '海拔', '馬特洪峰視野與大氣角色'],
        rows: [
          ['富里 (Furi)', '1,867公尺', '林間草地，陡視東壁與富爾格壁。'],
          ['黑湖 Schwarzsee（可繞行）', '2,583公尺', '正對霍恩利山脊山腳，中海拔最佳近景。'],
          ['Trockener Steg', '2,939公尺', '冰川舌車站，位於東壁／富爾格壁正下方；轉乘3S纜車。'],
          ['馬特洪峰冰川天堂（小馬特洪峰）', '3,883公尺', '360°平台，可望瑞士、義大利和法國的38座四千米峰，包括勃朗峰。'],
          ['Testa Grigia（阿爾卑斯跨境）', '3,480公尺', '跨境3S纜車抵達義大利邊境山脊，俯瞰布勒伊－切爾維尼亞。'],
        ],
      },
      sections: [
        {
          id: 'klein-matterhorn-view-silhouette',
          heading: '1. 從小馬特洪峰（3,883公尺）看，馬特洪峰是什麼樣子？',
          paragraphs: [
            '上冰川天堂（小馬特洪峰）之前，最要緊的是視角。從策馬特和高納葛拉特看，你在東北側：東壁與北壁合成窄而彎曲的「三角巧克力」金字塔。',
            '乘坐馬特洪峰快線和3S纜車向南到小馬特洪峰（3,883公尺），等於繞山轉了近90度。平台朝北北西，看的是南壁（義大利側）和富爾格壁。山體像從冰川裡拔起的寬肩岩堡，而不是細鉤。同時可見38座四千米以上山峰，遠至勃朗峰（4,808公尺）和義大利大帕拉迪索。',
          ],
          proTip: {
            label: '一次行程看兩個角度',
            text: '往返冰川天堂時，在施瓦茨湖 Schwarzsee（2,583公尺）或 Trockener Steg（2,939公尺）下車。在 Trockener Steg，你幾乎就站在1,500公尺高的東壁正下方。',
          },
        },
        {
          id: 'klein-matterhorn-weather-and-fohn',
          heading: '2. 小馬特洪峰的能見度：谷地逆溫與南來焚風',
          paragraphs: [
            '小馬特洪峰的預報單獨計算在3,883公尺（45.9383° N, 7.7297° E），因為這裡的天氣常常和高納葛拉特（3,089公尺）不一樣。',
            '秋冬冷空氣常積在馬特河谷，逆溫大約在2,800–3,200公尺。那些日子小馬特洪峰會探出雲海近700公尺，頭頂是10/10的藍天。',
            '一旦南來焚風建立，來自義大利奧斯塔谷的暖濕空氣被抬過布勒伊坡和特奧杜爾山口（3,300公尺）。小馬特洪峰是策馬特一側最先碰到這堵濕牆的山：3,883公尺能見度可以掉到2/10，而東北6公里處較背風的高納葛拉特仍可能有7/10。',
          ],
          bulletPoints: [
            { bold: '風速閾值（超過每小時50公里）：', text: '看上方「風與焚風風險」。現代3S纜車比舊索道抗風，但3,883公尺陣風超過每小時50–60公里時，Trockener Steg至小馬特洪峰段仍可能因安全停駛。' },
            { bold: '全年低於零度：', text: '即便七八月，3,883公尺氣溫通常在−6°C到+2°C。帶防風層、冰川鏡（3/4類），最後一段台階放慢腳步。' },
          ],
        },
        {
          id: 'lighting-and-best-time-klein-matterhorn',
          heading: '3. 小馬特洪峰攝影的最佳時段',
          paragraphs: [
            '高納葛拉特的東壁午後會失去直射陽光，小馬特洪峰面對的是南壁和西壁。因此冰川天堂的光線從上午晚些時候到午後早段（10:00–15:00 CET）更好，太陽掃過南天，照亮義大利側山脊。',
          ],
        },
      ],
      faqs: [
        { question: '今天小馬特洪峰的能見度如何？', answer: '看本頁頂部馬特洪峰冰川天堂／小馬特洪峰（3,883公尺）的1–10分上午／下午指數，每15分鐘按3,883公尺數據更新。8–10/10表示南壁、布賴特峰和勃朗峰方向的360°視野清晰。' },
        { question: '為什麼從冰川天堂看，馬特洪峰不一樣？', answer: '小馬特洪峰（3,883公尺）在馬特洪峰的南南東、義大利邊境山脊上。你看到的不是村裡和高納葛拉特那種窄東／北「三角巧克力」，而是隔著特奧杜爾冰川的更寬、更陡的南壁和西壁（義大利布勒伊側）。' },
        { question: '大風時小馬特洪峰纜車會停嗎？', answer: '會。Trockener Steg（2,939公尺）到小馬特洪峰（3,883公尺）的3S纜車抗風較好，但南來焚風或超過每小時50–60公里的陣風仍可能暫時關閉上段。去策馬特南站之前先看風與焚風。' },
        { question: '能見度只有5/10或6/10，冰川天堂還值得去嗎？', answer: '6/10（「部分可見」）仍然值得：票裡包含深入冰川15公尺、完全不受雲影響的冰宮殿，以及影視休息廳。若分數≤4/10，3,883公尺平台會是白茫茫一片，應改期。' },
      ],
    },
    'riffelsee': {
      name: '蘇內加與利菲爾湖高山倒影',
      shortName: '湖面倒影',
      title: '利菲尔湖與蘇內加：拍攝馬特洪峰湖水鏡面倒影即時風速與水況監測',
      description: '即時風速與水面平靜度診斷，助您在利菲爾湖 (2,757公尺) 與施泰利湖 (2,537公尺) 拍下絕美倒影。',
      aspectLabel: '東面湖面倒影（日出晨曦金色倒影）',
      transportSummary: '搭火車至羅滕博登 (利菲爾湖) 或地下纜車至蘇內加 (施泰利湖)',
      journeyTime: '單程約25–35分鐘',
      bestTimeWindow: '日出至09:30 CET（山谷熱對流風吹起前最平靜無波的時刻）',
      keyTakeaways: [
        '水面平靜如鏡的關鍵條件是現場風速必須低於每小時12公里。',
        '利菲爾湖每年6月下旬至10月下旬融冰開放入水，其餘月份被白雪封閉。',
        '若主湖水面起漣漪，可沿步道往下走100公尺至避風的小下湖嘗試拍攝。',
      ],
      heroStat: {
        label: '鏡面風速上限',
        value: '< 每小時12公里',
        detail: '地表風速超過每小時15公里時，利菲爾湖與施泰利湖會起波紋',
      },
      quickFacts: [
        { label: '利菲爾湖到達', value: '步行5分鐘', detail: '齒軌火車在羅滕博登（2,815公尺）下車，再下降約60公尺' },
        { label: '施泰利湖到達', value: '步行20分鐘', detail: '蘇內加纜索鐵路（2,288公尺）再轉乘布勞赫德纜車（2,571公尺）' },
        { label: '明水季節', value: '6月中旬–10月', detail: '11月至6月上旬湖面封凍並被雪覆蓋' },
        { label: '有風時的備選', value: '下利菲爾湖', detail: '主湖以西100公尺的小湖，主湖起波時這裡往往仍平靜' },
      ],
      comparisonTable: {
        caption: '上利菲爾湖、下利菲爾湖與施泰利湖',
        headers: ['倒影湖', '海拔', '從策馬特如何到達', '前景與抗風'],
        rows: [
          ['上利菲爾湖（主湖）', '2,757公尺', '齒軌火車到羅滕博登（28分鐘）再步行5分鐘', '最近、最大的馬特洪峰倒影；10:00 CET後易受東風和南風影響。'],
          ['下利菲爾湖（第二小湖）', '2,745公尺', '過主湖再向西步行2分鐘', '天然土坎擋風；主湖起波時的最佳備用點。'],
          ['施泰利湖（蘇內加–布勞赫德）', '2,537公尺', '蘇內加纜索鐵路 + 布勞赫德纜車 + 步行20分鐘', '半沒入水中的巨石和羊鬍子草；山谷取景略寬。'],
          ['格林吉湖（五湖步道）', '2,334公尺', '施泰利湖下方沿五湖步道步行45分鐘', '落葉松環繞，策馬特各湖中擋風最好，10月尤其合適。'],
          ['萊塞湖（蘇內加平台）', '2,232公尺', '蘇內加纜索鐵路（4.5分鐘）加免費電梯', '就在日光平台下方，帶孩子最容易。'],
        ],
      },
      sections: [
        {
          id: 'riffelsee-matterhorn-reflection-conditions',
          heading: '1. 利菲爾湖與施泰利湖倒影的三條規則',
          paragraphs: [
            '很多人在晴朗的下午走到利菲爾湖或施泰利湖，期待明信片式的倒影，結果只看到發暗的碎浪，或者五月的一片雪原。',
            '把倒立的馬特洪峰拍進水裡，是一場微氣候：離開策馬特之前，可以在這裡核對三個物理條件。',
          ],
          bulletPoints: [
            { bold: '規則1——地表風速必須低於每小時12公里：', text: '只有沒有毛細波時水面才是鏡面。0–10公里／小時倒影鋒利；12–20公里／小時峰頂被拉成豎條；超過22公里／小時倒影消失。' },
            { bold: '規則2——中層雲必須少（分數≥7/10）：', text: '利菲爾湖（2,757公尺）和施泰利湖（2,537公尺）都朝西南看4,478公尺的山頂。3,200–4,200公尺的雲帶會同時擋住天空和倒影裡的上半座金字塔。' },
            { bold: '規則3——解凍窗口（6月中旬至10月下旬）：', text: '兩湖海拔在2,537–2,757公尺，通常10月下旬或11月封凍，積雪留到6月中下旬。6月上旬常見半融的青綠浮冰。' },
          ],
          proTip: {
            label: '下利菲爾湖的辦法',
            text: '主湖起波也不必失望離開羅滕博登。沿小路再往里費爾貝格方向走100公尺，就是較小的「下利菲爾湖」。它更小，躲在冰磧唇後面，風速到每小時18–20公里仍可能平如鏡。',
          },
        },
        {
          id: 'sunnegga-vs-rotenboden-timing',
          heading: '2. 為什麼早晨（07:15–09:30 CET）對湖面倒影至關重要',
          paragraphs: [
            '高山谷地的風有固定日變化。夜間輻射冷卻讓黎明的湖面死寂。大約10:00 CET，太陽加熱馬特河谷岩壁，谷風以每小時15–25公里沿坡上吹，湖面起波，同時霍恩利山脊開始長出積雲。',
            '夏季高納葛拉特齒軌火車07:00 CET從策馬特出發。07:28到羅滕博登，07:33站在利菲爾湖邊，空氣仍靜，東壁是金色晨光。',
          ],
        },
        {
          id: 'five-lakes-hike-strategy',
          heading: '3. 蘇內加與五湖步道（5-Seenweg）',
          paragraphs: [
            '走五湖步道（施泰利湖、格林吉湖、綠湖、莫斯吉湖、萊塞湖，9.8公里，約2.5小時）時，纜車一開就從最高的布勞赫德（2,571公尺）出發，趁水面還靜先到施泰利湖。即便中午起風，格林吉湖（2,334公尺）有高大落葉松擋風，倒影可以留到下午。',
          ],
        },
      ],
      faqs: [
        { question: '利菲爾湖裡倒映的是哪座山？', answer: '馬特洪峰。從高納葛拉特鐵路的羅滕博登站步行五分鐘到利菲爾湖，東壁填滿倒影。蘇內加和施泰利湖從更低的角度看到同一座峰。' },
        { question: '今天利菲爾湖的倒影條件好嗎？', answer: '看本頁頂部利菲爾湖與施泰利湖的即時診斷。清晰倒影需要能見度7–10/10，且地表風速低於每小時12公里，並處在6月中旬至10月的無冰期。' },
        { question: '看倒影，利菲爾湖和施泰利湖哪個更好？', answer: '利菲爾湖（2,757公尺，火車到羅滕博登再步行5分鐘）最近、最大，而且更早到達（07:30 CET），那時風最靜。施泰利湖（2,537公尺，蘇內加至布勞赫德再步行20分鐘）有標誌性前景巨石，也是五湖步道的起點。' },
        { question: '五月、六月或十一月利菲爾湖會結冰嗎？', answer: '會。2,757公尺的利菲爾湖從11月到6月上旬封凍覆雪（屬於高納葛拉特冬季滑雪和雪鞋區）。青綠部分消融通常在6月10日至25日之間；完全的液態鏡面從6月下旬持續到10月下旬。' },
        { question: '利菲爾湖風太大、拍不成倒影怎麼辦？', answer: '先向西走過主湖約100公尺，到更小的「下利菲爾湖」。它在避風窪地裡，主湖起浪時往往仍然平滑。也可以用6擋或10擋ND鏡，曝光15至30秒，把波紋抹成霧狀倒影。' },
      ],
    },
    sunnegga: {
      name: '蘇內加',
      shortName: '蘇內加',
      title: '蘇內加纜索鐵路與馬特洪峰東壁',
      description: '蘇內加纜索鐵路是馬特洪峰東壁、施泰利湖和五湖步道的低處平台。想要輕鬆的起點、而不是最近的倒影時，選這裡。',
      aspectLabel: '從低處平台看東壁',
      transportSummary: '從策馬特搭乘蘇內加纜索鐵路',
      journeyTime: '4.5分鐘',
      bestTimeWindow: '第一班纜車，趕在微風到達施泰利湖之前',
      heroStat: {
        label: '纜索鐵路',
        value: '4.5分鐘',
        detail: '從策馬特到海拔2,288公尺的平台',
      },
      quickFacts: [
        { label: '平台', value: '2,288公尺', detail: '東壁視角比利菲爾湖更寬、更低' },
        { label: '施泰利湖', value: '步行20分鐘', detail: '續乘至布勞赫德（2,571公尺），再走到2,537公尺的湖' },
        { label: '萊塞湖', value: '平台下方', detail: '最容易的湖，離纜車站只有幾分鐘' },
        { label: '與利菲爾湖相比', value: '出發更晚', detail: '高納葛拉特火車大約07:30可到利菲爾湖。蘇內加開放更晚。' },
      ],
      keyTakeaways: [
        '蘇內加是海拔2,288公尺的纜索鐵路平台。看的是東壁，比利菲爾湖更低、更遠。',
        '這一側的倒影湖是施泰利湖。先乘纜車到布勞赫德，再步行20分鐘。',
        '帶孩子、走五湖步道或去萊塞湖，選蘇內加。想要第一縷光裡最大的倒影，選利菲爾湖。',
      ],
      comparisonTable: {
        caption: '什麼時候蘇內加比去利菲爾湖更好',
        headers: ['行程', '選蘇內加', '選利菲爾湖'],
        rows: [
          ['最近的倒影', '施泰利湖：纜車之後再步行20分鐘', '從羅滕博登向下走五分鐘。東壁最大的鏡子。'],
          ['第一縷光', '纜索鐵路大約08:00開放', '第一班高納葛拉特火車大約07:30可到湖邊'],
          ['輕鬆的一天', '萊塞湖就在平台旁。不需要高納葛拉特車票。', '買到羅滕博登的火車票，再短距離下坡'],
        ],
      },
      sections: [
        {
          id: 'sunnegga-funicular',
          heading: '蘇內加纜索鐵路',
          paragraphs: [
            '纜索鐵路離開策馬特，大約四分半鐘升到蘇內加平台（2,288公尺）。東壁就在面前，比從利菲爾湖看更寬、更低。',
            '萊塞湖就在平台下方。適合帶孩子，也不需要搭乘高納葛拉特鐵路。',
          ],
        },
        {
          id: 'stellisee',
          heading: '施泰利湖與東壁',
          paragraphs: [
            '這一側的倒影是海拔2,537公尺的施泰利湖。從蘇內加乘纜車到布勞赫德（2,571公尺），再步行約20分鐘。前景是巨石和羊鬍子草，山頂仍是利菲爾湖看到的那面東壁。',
            '水面只在6月下旬到10月能映出山，而且風速要保持在大約每小時12公里以下。下午即使晴朗，微風一起來倒影就沒了。',
          ],
        },
        {
          id: 'when-sunnegga-wins',
          heading: '什麼時候蘇內加勝過走向利菲爾湖',
          paragraphs: [
            '利菲爾湖更近、更大，第一班火車也到得更早。想走五湖步道（施泰利湖、格林吉湖、綠湖、莫斯吉湖、萊塞湖）、帶孩子，或不想買高納葛拉特車票時，蘇內加更好。',
            '纜車一開就從布勞赫德出發，趁施泰利湖還平靜。如果風已經起來，更低、有落葉松擋風的格林吉湖會把倒影留到更晚。',
          ],
        },
      ],
      faqs: [
        { question: '蘇內加是什麼？', answer: '策馬特上方海拔2,288公尺的纜索鐵路平台。車程約4.5分鐘。看到的是馬特洪峰東壁，比利菲爾湖更低。' },
        { question: '拍倒影，蘇內加和利菲爾湖哪個更好？', answer: '想要最大的鏡子和最早的出發，選利菲爾湖。蘇內加是更輕鬆的平台，也是走向施泰利湖的起點。' },
        { question: '從蘇內加怎麼去施泰利湖？', answer: '乘纜車到海拔2,571公尺的布勞赫德，再步行約20分鐘到海拔2,537公尺的施泰利湖。' },
      ],
    },
    'zermatt-village': {
      name: '策馬特村（教堂橋與里德路）',
      shortName: '策馬特村',
      title: '今天從策馬特村能看見馬特洪峰嗎？教堂橋即時能見度與攝影機',
      description: '從策馬特村（教堂橋與里德路）查看馬特洪峰即時能見度。直播攝影機、日出霞光和谷霧，無需山地車票。',
      aspectLabel: '東北山脊與東壁的谷地取景',
      transportSummary: '從策馬特火車站／教堂廣場步行5分鐘（無需車票）',
      journeyTime: '步行0–10分鐘（免費公共觀景點）',
      bestTimeWindow: '日出前20分鐘至08:30 CET（晨間霞光與靜風）',
      heroStat: {
        label: '票價',
        value: '0瑞士法郎（免費）',
        detail: '公共橋樑與步道，全天開放，無需登山鐵路',
      },
      quickFacts: [
        { label: '最佳位置', value: '教堂橋 Kirchbrücke', detail: '越過馬特維斯帕河，直視東壁' },
        { label: '高一點的點', value: '里德路 / Mürini', detail: '向上步行10分鐘，越過木屋屋頂，人更少' },
        { label: '日出金色時刻', value: '山頂霞光', detail: '峰尖在谷地日出前約15–20分鐘染上粉與橙' },
        { label: '谷霧風險', value: '查看雲底', detail: '2,000公尺以下的低霧會擋住村裡的視線，即使山頂是晴的' },
      ],
      keyTakeaways: [
        '教堂橋是策馬特最重要的免費觀景點：不用買90–220瑞士法郎以上的山地車票，村中心全天可到。',
        '想看著名的金色霞光，在官方日出前20–30分鐘到橋上；最高約200公尺的峰尖最先被照亮。',
        '若橋上三腳架太多，向上步行10分鐘到里德路／Mürini，從傳統木屋屋頂上方看過去。',
        '看上方低雲診斷：若1,800公尺以下的谷霧罩住村子，教堂橋可能看不見山，而高納葛拉特（3,089公尺）或冰川天堂（3,883公尺）已在陽光裡。',
      ],
      comparisonTable: {
        caption: '策馬特村公共觀景點',
        headers: ['觀景點', '海拔', '從火車站步行', '適合什麼、如何取景'],
        rows: [
          ['教堂橋 Kirchbrücke', '1,608公尺', '步行8分鐘', '馬特維斯帕河上的經典明信片；著名的日出集合點。'],
          ['里德路／Mürini山坡', '1,660公尺', '步行15分鐘（緩上坡）', '高處全景，風化落葉松木屋把視線引向馬特洪峰。'],
          ['Hohbalmen下草地', '1,750公尺', '步行25分鐘', '安靜的牧場邊緣，視線越過村裡的電動計程車。'],
          ['教堂廣場／Zermatterhof', '1,620公尺', '步行6分鐘', '歷史中心，緊鄰聖毛里求斯教堂和馬特洪峰博物館。'],
        ],
      },
      sections: [
        {
          id: 'zermatt-village-matterhorn-views',
          heading: '1. 為什麼教堂橋是策馬特攝影的中心',
          paragraphs: [
            '不一定要坐高海拔纜車或齒軌火車才能感受馬特洪峰。橫跨冰川融水馬特維斯帕河的教堂橋，把視線沿山谷一直送到鋸齒狀的東壁和霍恩利山脊。',
            '橋全天開放、完全免費。它是早晨的試紙：黎明時從橋上看到的山頂如果清晰，就該去山上的車站。',
          ],
          bulletPoints: [
            { bold: '清晨霞光：', text: '馬特洪峰面向東方，日出先照到峰頂金字塔，村子還在陰影裡。峰尖大約亮15分鐘的琥珀與品紅。' },
            { bold: '河水前景：', text: '馬特維斯帕河的冰川水在前景流動，形成指向峰頂的引導線。' },
            { bold: '避開橋上的人群：', text: '晴朗的早晨，欄杆邊會排滿三腳架。想安靜些，繼續向上走10分鐘到里德路／Mürini，從木屋頂上方取景。' },
          ],
          proTip: {
            label: '低層逆溫規則',
            text: '村裡被冷灰的霧罩住時不要放棄。低雲很多、中高層雲為零時，高納葛拉特（3,089公尺）和冰川天堂（3,883公尺）會站在雲上的藍天裡。',
          },
        },
        {
          id: 'sunrise-timing-and-tips',
          heading: '2. 村裡觀景的時間與拍攝建議',
          paragraphs: [
            '至少在官方日出前20分鐘到達教堂橋或里德路。第一縷光並不出現在地面，而是先碰到馬特洪峰（4,478公尺）的針尖，再慢慢沿岩壁下降。',
            '冬天村子覆雪，木屋煙囪冒煙。夏秋時，谷坡金色落葉松襯著灰色片麻岩金字塔。',
          ],
        },
      ],
      faqs: [
        { question: '從策馬特村能看見馬特洪峰嗎？', answer: '能。村裡多個公共地點都能清楚看見，最有名的是馬特維斯帕河上的教堂橋，以及向上的里德路／Mürini，完全免費。' },
        { question: '策馬特看馬特洪峰，最好的免費點在哪裡？', answer: '教堂橋是看日出霞光最著名的免費地點。想從傳統木屋頂上方取景、人少一些，沿里德路向上走10–15分鐘。' },
        { question: '教堂橋看馬特洪峰霞光，日出是幾點？', answer: '夏季（6–7月）光線大約在05:30–05:50 CET觸到山頂。秋季（9–10月）在06:45至07:30 CET。冬季大約07:45–08:15 CET。請始終比官方日出早到20分鐘。' },
        { question: '策馬特村裡有霧怎麼辦？', answer: '1,600公尺左右的谷地常有低層霧，而山頂完全晴朗。看高海拔分數：若高納葛拉特（3,089公尺）或冰川天堂（3,883公尺）是8–10/10，乘火車或纜車升到雲上。' },
      ],
    },
  },
  ja: {
    gornergrat: {
      name: 'ゴルナーグラート展望台',
      shortName: 'ゴルナーグラート',
      title: 'ゴルナーグラート展望台：マッターホルン視界スコア・ライブカメラ＆パノラマ案内',
      description: '標高3,089mのリアルタイム気象テレメトリ、ツェルマット発登山鉄道ガイド、リッフェル湖の逆さマッターホルン撮影時間。',
      aspectLabel: '東壁・北東壁（トブラローネのロゴで有名なクラシックアングル）',
      transportSummary: 'ツェルマット駅前よりゴルナーグラート鉄道 (GGB) 登山列車利用',
      journeyTime: '片道約33分',
      bestTimeWindow: '07:00–11:00 CET（朝の光がマッターホルン東壁を黄金色に照らす時間帯）',
      keyTakeaways: [
        '登山鉄道は強風の影響を受けにくく、悪天候時でも最も運行信頼度が高いルートです。',
        '午前10時前の早い時間帯ほど雲が少なく、クリアな青空が広がる確率が高くなります。',
        'リッフェル湖（Riffelsee）はローテンボーデン駅から徒歩わずか5分の緩やかな下り道です。',
      ],
      heroStat: {
        label: '見通し距離',
        value: '東へ9.1km',
        detail: 'ヘルンリ稜と東壁（4,478m）を遮るものなく望む',
      },
      quickFacts: [
        { label: '見る角度', value: '定番トブラローネ', detail: '東壁と北東壁が作る、鉤型のピラミッドシルエット' },
        { label: '耐風性', value: '非常に高い', detail: 'ロープウェイが止まっても歯軌条の登山鉄道は動く' },
        { label: '最良の席', value: '右側（上り）', detail: '上り方向の右側に座ると、マッターホルンが窓から離れない' },
        { label: '湖の停車駅', value: 'ローテンボーデン（2,757m）', detail: 'ゴルナーグラートの1駅下。リッフェル湖の鏡面反射へ' },
      ],
      comparisonTable: {
        caption: 'ゴルナーグラート鉄道：駅ごとの標高とマッターホルンの見え方',
        headers: ['駅', '標高', '所要', '見通しと、ここで降りる理由'],
        rows: [
          ['ツェルマット駅', '1,608m', '0分', 'スイス国鉄の到着線の向かいに終着。右側から乗車。'],
          ['リッフェルアルプ', '2,222m', '16分', '森林限界。古いスイス石松（アルヴェ）がマッターホルンを額縁にする。'],
          ['リッフェルベルク', '2,582m', '23分', '開けた高山の草地。ヘルンリ稜とフルッグ稜の広角。'],
          ['ローテンボーデン（リッフェル湖）', '2,815m', '28分', 'ここで下車。徒歩5分でリッフェル湖（2,757m）の反射。'],
          ['ゴルナーグラート頂上', '3,089m', '33分', '360度テラス。マッターホルン、ゴルナー氷河、4,000m峰29座。'],
        ],
      },
      sections: [
        {
          id: 'can-you-see-matterhorn-from-gornergrat-today',
          heading: '1. 切符を買う前に、今日のゴルナーグラート視界スコアを読む',
          paragraphs: [
            'ゴルナーグラート鉄道の往復は92〜132スイスフラン（スイストラベルパスまたはハーフフェアカードで50%引き）で、雲を理由にした払い戻しはありません。乗る前に高所の数値を確認してください。',
            '標高1,608mのツェルマット村から見えるのは、いちばん下の大気層だけです。このページの計算は、3,089m・北緯45.9840度、東経7.7845度に合わせたOpen-Meteoの格子を見ています。8/10〜10/10（「見える」）なら東壁とヘルンリ稜は遮られていません。6/10または7/10（「部分的」）なら雲が通り過ぎるか、頂上に旗雲が残ります。',
          ],
          bulletPoints: [
            { bold: '8〜10/10（すぐ出発）：', text: '中層雲（3,000m）は25%未満で、ゴルナー氷河方向の視程は20kmを超えます。' },
            { bold: '5〜7/10（午前と午後を比べる）：', text: '午前（06:00〜11:00 CET）は晴れ、その後に積雲が出ることが多いです。いちばん早い列車に乗ってください。' },
            { bold: '1〜4/10（切符は保留）：', text: '厚い中層の層雲か降水が3,000〜4,478mを包みます。100スイスフラン超を使う前に、下の360度カメラを確認してください。' },
          ],
          proTip: {
            label: '谷の逆転層のコツ',
            text: '村が灰色でも、「2,000m未満の谷霧」と「中層雲（2,000〜6,000m）」を見比べてください。低層霧が70%超、中層雲が20%未満なら、登山鉄道は霧の上、3,089mの日差しへ連れていきます。',
          },
        },
        {
          id: 'best-time-and-lighting-gornergrat',
          heading: '2. ゴルナーグラートの最良の時間：朝焼けと午後の雲',
          paragraphs: [
            'ゴルナーグラートはマッターホルンの東南東にあります。だから11:00 CETまで朝日が東壁に当たり、岩帯、雪田、ヘルンリ稜がくっきりします。',
            '14:00 CETを過ぎると太陽は山の向こう、イタリア側へ回り、ゴルナーグラートから見る壁は逆光になります。同時に谷風が凝結し、頂上に午後の雲ができます。',
          ],
        },
        {
          id: 'gornergrat-train-tips',
          heading: '3. 登山鉄道：座席、途中下車、リッフェル湖',
          paragraphs: [
            '通常のゴルナーグラート日券は売り切れません。このページでスコアが高いと分かってから、発車5分前にスマホか窓口で買えば足ります。',
          ],
          bulletPoints: [
            { bold: '上りは必ず右側：', text: '上り方向の右側に座ってください。フィンデルバッハ橋を越えると、マッターホルンが右の窓を3,089mまで埋めます。' },
            { bold: 'ローテンボーデンで降りる：', text: '切符は途中駅の乗り降りができます。頂上の1駅下、ローテンボーデン（2,815m）からリッフェル湖まで徒歩5分です。' },
          ],
        },
      ],
      faqs: [
        { question: '今日、ゴルナーグラートからマッターホルンは見えますか？', answer: 'ページ上部の1〜10の午前・午後スコアを見てください。ゴルナーグラート（3,089m）向けに15分ごとに更新されます。8〜10/10はピラミッドが明瞭、6〜7/10は稜線に薄い雲があって部分的、1〜4/10は雲が頂上を隠しています。' },
        { question: '村が曇っていてもゴルナーグラートは行く価値がありますか？', answer: '雲の高さによります。低層雲（2,000m未満）が多くても中層雲（2,000〜6,000m）が25%未満なら、ゴルナーグラート（3,089m）は谷霧の上の日差しです。中層雲が70%を超えると駅は雲の中です。より晴れた時間まで切符を取っておいてください。' },
        { question: 'ゴルナーグラート鉄道はどちら側からマッターホルンがよく見えますか？', answer: 'ツェルマットから上るときは右側、下るときは左側です。33分の上りでは、ほぼずっと右の窓にマッターホルンが見えます。' },
        { question: 'ゴルナーグラートの切符は事前予約が必要ですか？', answer: '不要です。通常の登山列車は座席指定がなく、売り切れません。当日の朝のスコアとRoundshotのカメラを見てから買ってください。' },
      ],
    },
    'glacier-paradise': {
      name: 'マッターホルン・グレイシャー・パラダイス（クライン・マッターホルン）',
      shortName: 'グレイシャー・パラダイス',
      title: 'マッターホルン・グレイシャー・パラダイス：標高3,883mの視界とライブカメラ',
      description: 'ヨーロッパ最高地点の展望台（標高3,883m）。リアルタイム雲高診断、最新3Sロープウェイ、迫力の南壁氷河パノラマ。',
      aspectLabel: '南壁・南西壁（高地氷原から見上げる大迫力アングル）',
      transportSummary: 'ツェルマットよりマッターホルン・エクスプレス＋3Sロープウェイ乗り継ぎ',
      journeyTime: '片道約40〜45分',
      bestTimeWindow: '08:30–12:30 CET（午後の熱上昇気流による雲が湧く前の絶好時間）',
      keyTakeaways: [
        '標高3,883mのため、谷が雲海（逆温層）に覆われていても展望台は快晴になることがよくあります。',
        '風速50km/h以上のフェーン風が吹く場合、安全のため最上部ロープウェイが運行休止となることがあります。',
        '年間を通してスキーが可能で、氷河の地下深くを歩ける氷の宮殿があります。',
      ],
      heroStat: {
        label: 'プラットフォームの標高',
        value: '3,883m',
        detail: 'ヨーロッパ最高所のロープウェイ駅。ゴルナーグラートより794m高い',
      },
      quickFacts: [
        { label: 'マッターホルンの角度', value: '南壁／フルッグ壁', detail: '近くから見る台形の壁。トブラローネの鉤型ではない' },
        { label: '逆転層の利点', value: '3,500m未満の霧の上', detail: '冬と秋の谷の層雲より上に出る' },
        { label: '風への敏感さ', value: 'フェーン警報', detail: '南風が50〜55km/hを超えると3Sが止まることがある' },
        { label: '天候を問わない見どころ', value: '氷の宮殿', detail: '氷河の中15mの洞は、雲の日も開いている' },
      ],
      comparisonTable: {
        caption: 'クライン・マッターホルン（3,883m）：区間と見る角度',
        headers: ['区間／駅', '標高', 'マッターホルンの見え方と大気の役割'],
        rows: [
          ['フーリー', '1,867m', '森の空き地から、東壁とフルッグ壁を急角度で見上げる。'],
          ['シュヴァルツゼー（寄り道）', '2,583m', 'ヘルンリ稜の直下。中高度でいちばん近い眺め。'],
          ['トロッケナー・シュテーク', '2,939m', '東壁／フルッグ壁の真下の氷河駅。3Sへの乗り換え。'],
          ['マッターホルン・グレイシャー・パラダイス（クライン・マッターホルン）', '3,883m', '360度。スイス、イタリア、フランスの4,000m峰38座。モンブランを含む。'],
          ['テスタ・グリージャ（アルプス横断）', '3,480m', '国境を越える3S。イタリア側の尾根からブレイユ＝チェルヴィニアを見下ろす。'],
        ],
      },
      sections: [
        {
          id: 'klein-matterhorn-view-silhouette',
          heading: '1. クライン・マッターホルン（3,883m）からマッターホルンはどう見えるか',
          paragraphs: [
            'グレイシャー・パラダイス（クライン・マッターホルン）へ上る前に、角度がすべてです。ツェルマットとゴルナーグラートからは北東側です。東壁と北壁が、細く曲がったトブラローネのピラミッドになります。',
            'マッターホルン・エクスプレスと3Sで南のクライン・マッターホルン（3,883m）へ行くと、山をほぼ90度回ります。展望台からは北北西、南壁（イタリア側）とフルッグ壁を見ます。氷河から立ち上がる肩幅の岩の城で、細い鉤ではありません。4,000m超の峰が38座、モンブラン（4,808m）とグラン・パラディーゾまで続きます。',
          ],
          proTip: {
            label: '同じ日に二つの角度',
            text: '往復の途中で、シュヴァルツゼー（2,583m）かトロッケナー・シュテーク（2,939m）でマッターホルン・エクスプレスを降りてください。トロッケナー・シュテークでは、高さ1,500mの東壁のほぼ真下に立ちます。',
          },
        },
        {
          id: 'klein-matterhorn-weather-and-fohn',
          heading: '2. クライン・マッターホルンの視界：谷の逆転層と南からのフェーン',
          paragraphs: [
            '予報は3,883m（北緯45.9383度、東経7.7297度）専用です。ゴルナーグラート（3,089m）と天気がしばしばずれます。',
            '秋と冬、冷気はマッタータールにたまり、逆転層はおよそ2,800〜3,200mです。その日、クライン・マッターホルンは雲海の上へ約700m突き出し、10/10の青空になります。',
            '南からのフェーンが立つと、アオスタ渓谷の湿った空気がブレイユ斜面とテオデュール峠（3,300m）を越えます。ツェルマット側で最初にこの湿った壁を受けるのがクライン・マッターホルンです。3,883mが2/10でも、北東6kmで風下のゴルナーグラートは7/10のことがあります。',
          ],
          bulletPoints: [
            { bold: '風の停止ライン（50km/h超）：', text: '上の「風とフェーンのリスク」を見てください。新しい3Sは旧索道より風に強いですが、3,883mで50〜60km/hの突風が出ると、トロッケナー・シュテーク〜クライン・マッターホルン区間が安全のため止まることがあります。' },
            { bold: '一年中氷点下：', text: '7月と8月でも3,883mの気温はだいたい−6°Cから+2°Cです。防風着、氷河用サングラス（カテゴリー3/4）、展望台への最後の階段はゆっくり。' },
          ],
        },
        {
          id: 'lighting-and-best-time-klein-matterhorn',
          heading: '3. クライン・マッターホルンで撮るなら、この時間',
          paragraphs: [
            'ゴルナーグラートの東壁は昼過ぎに直射を失いますが、こちらは南と西を向いています。グレイシャー・パラダイスの光は、太陽が南の空を渡りイタリア側の稜線を照らす午前遅めから午後早め（10:00〜15:00 CET）の方が良くなります。',
          ],
        },
      ],
      faqs: [
        { question: '今日のクライン・マッターホルンの視界は？', answer: 'ページ上部の、マッターホルン・グレイシャー・パラダイス／クライン・マッターホルン（3,883m）の1〜10の午前・午後指数を見てください。3,883mのデータで15分ごとに更新されます。8〜10/10は南壁、ブライトホルン、モンブラン方向の360度が晴れています。' },
        { question: 'なぜグレイシャー・パラダイスから見るとマッターホルンが違うのか？', answer: 'クライン・マッターホルン（3,883m）はマッターホルンの南南東、イタリア国境の尾根にあります。ツェルマットやゴルナーグラートの細い東／北のトブラローネではなく、テオデュール氷河越しに、より広く急な南壁と西壁（イタリア、ブレイユ側）を間近に見ます。' },
        { question: '強風でクライン・マッターホルンのロープウェイは止まりますか？', answer: '止まります。トロッケナー・シュテーク（2,939m）とクライン・マッターホルン（3,883m）の3Sは風に耐える設計ですが、南からのフェーンや50〜60km/h超の突風で上部が一時停止することがあります。ツェルマット南駅へ歩く前に風とフェーンを確認してください。' },
        { question: '視界が5/10や6/10でもグレイシャー・パラダイスは行く価値がありますか？', answer: '6/10（「部分的に見える」）ならまだ価値があります。氷の中15m、雲の影響を受けない氷の宮殿とシネマラウンジが切符に含まれます。4/10以下なら3,883mの展望台はホワイトアウトです。日を改めた方がよいです。' },
      ],
    },
    'riffelsee': {
      name: 'スネガ＆リッフェル湖の逆さマッターホルン',
      shortName: '湖の逆さ富士',
      title: 'リッフェル湖＆スネガ：逆さマッターホルン湖面反射のリアルタイム風速診断',
      description: 'リッフェル湖（2,757m）とステリ湖（2,537m）で美しい水面反射を捉えるための風速と湖面状態のリアルタイム診断。',
      aspectLabel: '東壁の湖面反射（朝焼けのゴールドリフレクション）',
      transportSummary: '登山列車でローテンボーデン（リッフェル湖）または地下ケーブルカーでスネガ（ステリ湖）',
      journeyTime: '片道約25〜35分',
      bestTimeWindow: '日の出〜09:30 CET（熱上昇風で水面が波立つ前の無風時間帯）',
      keyTakeaways: [
        '鏡のような完璧な反射を見るには、風速が12km/h未満である必要があります。',
        'リッフェル湖の雪解け時期は例年6月下旬〜10月下旬で、それ以外の期間は氷雪に覆われます。',
        '上部の本湖が風で波立っている場合、100m下った風除けの「下リッフェル湖」へ向かうのが裏ワザです。',
      ],
      heroStat: {
        label: '鏡面になる風の上限',
        value: '< 12km/h',
        detail: '15km/hを超えるとリッフェル湖とステリ湖にさざ波が立つ',
      },
      quickFacts: [
        { label: 'リッフェル湖へのアクセス', value: '徒歩5分', detail: '登山鉄道をローテンボーデン（2,815m）で降り、60m下る' },
        { label: 'ステリ湖へのアクセス', value: '徒歩20分', detail: 'スネガのケーブルカー（2,288m）＋ブラウヘルトのゴンドラ（2,571m）' },
        { label: '開水面の季節', value: '6月中旬〜10月', detail: '11月から6月上旬は凍結し、雪に覆われる' },
        { label: '風のときの予備', value: '下リッフェル湖', detail: '本湖の西100mの小さい池。本湖が波立ってもこちらはガラスのように残る' },
      ],
      comparisonTable: {
        caption: '上リッフェル湖、下リッフェル湖、ステリ湖',
        headers: ['反射の湖', '標高', 'ツェルマットから', '前景と風への強さ'],
        rows: [
          ['上リッフェル湖（本湖）', '2,757m', '登山鉄道でローテンボーデン（28分）＋徒歩5分', 'いちばん近く、いちばん大きい反射。10:00 CET以降は東風と南風にさらされる。'],
          ['下リッフェル湖（二つ目の池）', '2,745m', '本湖を過ぎて西へ徒歩2分', '自然の土手で風を防ぐ。本湖が波立つときの最良の予備。'],
          ['ステリ湖（スネガ〜ブラウヘルト）', '2,537m', 'スネガのケーブルカー＋ブラウヘルトのゴンドラ＋徒歩20分', '半ば沈んだ岩とワタスゲ。谷のフレーミングがやや広い。'],
          ['グリンジ湖（5つの湖）', '2,334m', 'ステリ湖の下、5湖歩道を45分', 'カラマツに囲まれ、ツェルマットの湖でいちばん風を防ぐ。10月に向く。'],
          ['ライ湖（スネガのテラス）', '2,232m', 'スネガのケーブルカー（4.5分）＋エレベーター', 'テラスのすぐ下。子ども連れでいちばん楽。'],
        ],
      },
      sections: [
        {
          id: 'riffelsee-matterhorn-reflection-conditions',
          heading: '1. リッフェル湖とステリ湖の反射、三つの規則',
          paragraphs: [
            '晴れた午後にリッフェル湖やステリ湖へ歩き、絵葉書の反射を期待して、暗いさざ波か、5月なら雪原だけを見つける人が何千といます。',
            '逆さマッターホルンは精密な微気候です。ツェルマットを出る前に、ここで三つの条件を確認できます。',
          ],
          bulletPoints: [
            { bold: '規則1 — 水面の風は12km/h未満：', text: '水面が鏡になるのは、さざ波がないときだけです。0〜10km/hは鋭い反射。12〜20km/hでは頂上が縦の筋ににじみ、22km/hを超えると反射は消えます。' },
            { bold: '規則2 — 中層雲は少ないこと（スコア7/10以上）：', text: 'リッフェル湖（2,757m）もステリ湖（2,537m）も南西、4,478mの頂上を見ます。3,200〜4,200mの雲の帯は、空と水面の両方でピラミッド上部を隠します。' },
            { bold: '規則3 — 解氷の窓（6月中旬〜10月下旬）：', text: '2,537〜2,757mの二つの湖は10月下旬か11月に凍結し、6月中旬から下旬まで雪の下です。6月上旬は、半分溶けたターコイズの氷が見られます。' },
          ],
          proTip: {
            label: '下リッフェル湖の裏ワザ',
            text: '本湖が波立っていても、がっかりしてローテンボーデンを去らないでください。リッフェルベルク方向へさらに100m、小さい「下リッフェル湖」があります。モレーンの縁に守られ、18〜20km/hでも鏡のように残ります。',
          },
        },
        {
          id: 'sunnegga-vs-rotenboden-timing',
          heading: '2. 朝（07:15〜09:30 CET）が湖の反射に決定的な理由',
          paragraphs: [
            '高い谷の風は、一日のリズムが決まっています。夜の放射冷却で夜明けの湖は無風です。10:00 CETごろ太陽がマッタータールの岩壁を温めると、斜面風が15〜25km/hで吹き上がり、ヘルンリ稜に積雲が出るのと同じ頃に湖を波立たせます。',
            '夏のゴルナーグラート登山鉄道は07:00 CETにツェルマットを出ます。07:28にローテンボーデン、07:33にリッフェル湖。空気はまだ静かで、東壁は朝の金色です。',
          ],
        },
        {
          id: 'five-lakes-hike-strategy',
          heading: '3. スネガと5つの湖（5-Seenweg）',
          paragraphs: [
            '5湖歩道（ステリ湖、グリンジ湖、グリューン湖、モースジー湖、ライ湖。9.8km、約2時間半）は、ゴンドラが開いたら必ず上のブラウヘルト（2,571m）から始め、水面が静かなうちにステリ湖へ着いてください。昼に風が出ても、グリンジ湖（2,334m）は高いカラマツが風を遮り、午後まで反射が残ります。',
          ],
        },
      ],
      faqs: [
        { question: 'リッフェル湖に映る山はどれですか？', answer: 'マッターホルンです。ゴルナーグラート鉄道のローテンボーデンから徒歩5分でリッフェル湖に着き、東壁が反射を埋めます。スネガとステリ湖は、同じ頂上をより低い角度から見せます。' },
        { question: '今日のリッフェル湖の反射条件は良いですか？', answer: 'ページ上部のリッフェル湖とステリ湖のライブ診断を見てください。明瞭な鏡面には、視界スコア7〜10/10と、水面の風12km/h未満が、6月中旬から10月の無氷期にそろっている必要があります。' },
        { question: '反射はリッフェル湖とステリ湖のどちらが良いですか？', answer: 'リッフェル湖（2,757m。登山鉄道でローテンボーデン、徒歩5分）がいちばん近く大きく、風がいちばん静かな07:30 CETに着きます。ステリ湖（2,537m。スネガ〜ブラウヘルトと徒歩20分）は前景の岩が有名で、5湖ハイクの起点です。' },
        { question: '5月、6月、11月のリッフェル湖は凍っていますか？', answer: '凍っています。2,757mのリッフェル湖は11月から6月上旬まで雪の下です（ゴルナーグラートの冬のスキーとスノーシュー区域）。ターコイズの部分的な解氷はだいたい6月10日から25日。水面の反射は6月下旬から10月下旬です。' },
        { question: '風が強くてリッフェル湖に反射が出ないときは？', answer: 'まず本湖の西へ100m歩き、風よけのくぼみにある小さい「下リッフェル湖」へ。本湖が波立っていても、こちらはしばしば平滑です。あるいは6段か10段のNDフィルターで15〜30秒露光し、さざ波を霧のような反射にならしてください。' },
      ],
    },
    sunnegga: {
      name: 'スネガ',
      shortName: 'スネガ',
      title: 'スネガのケーブルカーとマッターホルン東壁',
      description: 'スネガのケーブルカーは、マッターホルン東壁、ステリ湖、5つの湖歩きの低いテラスです。いちばん近い反射ではなく、楽な出発が欲しいときに使います。',
      aspectLabel: '低いテラスから見る東壁',
      transportSummary: 'ツェルマットからスネガのケーブルカー',
      journeyTime: '4.5分',
      bestTimeWindow: '最初の便。風がステリ湖に届く前',
      heroStat: {
        label: 'ケーブルカー',
        value: '4.5分',
        detail: 'ツェルマットから標高2,288mのテラスへ',
      },
      quickFacts: [
        { label: 'テラス', value: '2,288m', detail: 'リッフェル湖より広く、低い角度の東壁' },
        { label: 'ステリ湖', value: '徒歩20分', detail: 'ブラウヘルト（2,571m）までゴンドラ、その後2,537mの湖へ歩く' },
        { label: 'ライ湖', value: 'テラスの下', detail: 'いちばん楽な湖。ケーブルカーから数分' },
        { label: 'リッフェル湖との違い', value: '出発が遅い', detail: 'ゴルナーグラート鉄道は07:30ごろ湖に着く。スネガはもっと遅く開く。' },
      ],
      keyTakeaways: [
        'スネガは標高2,288mのケーブルカーのテラスです。見えるのは東壁で、リッフェル湖より低く、遠くにあります。',
        'こちら側の反射の湖はステリ湖です。ブラウヘルトまでゴンドラ、その後徒歩20分。',
        'ライ湖、子ども連れ、5つの湖歩きならスネガ。最初の光で最大の反射ならリッフェル湖。',
      ],
      comparisonTable: {
        caption: 'スネガの方がリッフェル湖への歩きより良いとき',
        headers: ['行程', 'スネガを選ぶ', 'リッフェル湖を選ぶ'],
        rows: [
          ['いちばん近い反射', 'ステリ湖。ゴンドラのあと徒歩20分', 'ローテンボーデンから下り5分。東壁最大の鏡。'],
          ['最初の光', 'ケーブルカーは08:00ごろ開く', '最初のゴルナーグラート鉄道なら07:30ごろ湖に着ける'],
          ['楽な一日', 'ライ湖はテラスのそば。ゴルナーグラートの切符は不要。', 'ローテンボーデンまでの鉄道切符と、短い下り'],
        ],
      },
      sections: [
        {
          id: 'sunnegga-funicular',
          heading: 'スネガのケーブルカー',
          paragraphs: [
            'ケーブルカーはツェルマットを出て、約4分半でスネガのテラス（2,288m）へ上ります。東壁は正面にあり、リッフェル湖から見るより広く、低く見えます。',
            'ライ湖はテラスのすぐ下です。子どもと行く湖で、ゴルナーグラート鉄道は要りません。',
          ],
        },
        {
          id: 'stellisee',
          heading: 'ステリ湖と東壁',
          paragraphs: [
            'こちら側の反射は標高2,537mのステリ湖です。スネガからブラウヘルト（2,571m）へゴンドラ、その後約20分歩きます。前景は岩とワタスゲ。頂上はリッフェル湖と同じ東壁です。',
            '水面が山を映すのは6月下旬から10月まで、風がおよそ12km/h未満のあいだだけです。午後が晴れていても、風が始まれば反射は失敗します。',
          ],
        },
        {
          id: 'when-sunnegga-wins',
          heading: 'スネガがリッフェル湖への歩きに勝つとき',
          paragraphs: [
            'リッフェル湖の方が近く大きく、最初の列車も早く着きます。5つの湖（ステリ湖、グリンジ湖、グリューン湖、モースジー湖、ライ湖）、子ども連れ、ゴルナーグラートの切符が要らない日は、スネガの方が良い歩きです。',
            'ゴンドラが開いたらすぐブラウヘルトを出発し、ステリ湖がまだ静かなうちに着いてください。すでに風があるなら、より低くカラマツに守られたグリンジ湖が、一日の遅い時間まで反射を残します。',
          ],
        },
      ],
      faqs: [
        { question: 'スネガとは何ですか？', answer: 'ツェルマットの上、標高2,288mのケーブルカーのテラスです。約4.5分。見えるのはマッターホルンの東壁で、リッフェル湖より低い位置からです。' },
        { question: '反射はスネガとリッフェル湖のどちらが良いですか？', answer: '最大の鏡と、いちばん早い出発ならリッフェル湖です。スネガは楽なテラスで、ステリ湖への歩きの起点です。' },
        { question: 'スネガからステリ湖へはどう行きますか？', answer: '標高2,571mのブラウヘルトまでゴンドラに乗り、そこから約20分歩いて標高2,537mのステリ湖へ着きます。' },
      ],
    },
    'zermatt-village': {
      name: 'ツェルマット村（キルヒブリュッケとリードヴェーク）',
      shortName: 'ツェルマット村',
      title: '今日、ツェルマット村からマッターホルンは見える？キルヒブリュッケのライブ視界とカメラ',
      description: 'ツェルマット村（キルヒブリュッケとリードヴェーク）からマッターホルンのリアルタイム視界。ライブカメラ、日の出のアルペングロー、谷霧。登山鉄道の切符は不要です。',
      aspectLabel: '北東稜と東壁を谷から見る構図',
      transportSummary: 'ツェルマット駅／教会広場から徒歩5分（切符不要）',
      journeyTime: '徒歩0〜10分（無料の公共展望）',
      bestTimeWindow: '日の出の20分前〜08:30 CET（朝のアルペングローと無風）',
      heroStat: {
        label: '切符の料金',
        value: '0スイスフラン（無料）',
        detail: '公共の橋と道。24時間。登山鉄道は不要',
      },
      quickFacts: [
        { label: '最良の地点', value: 'キルヒブリュッケ', detail: 'マッタービスパ川の上から東壁へ直線' },
        { label: '少し高い地点', value: 'リードヴェーク／ミューリニ', detail: '屋根の上へ10分の上り。人は少ない' },
        { label: '日の出のゴールデンアワー', value: '頂上のアルペングロー', detail: '谷の日の出の15〜20分前に、先端がピンクとオレンジに灯る' },
        { label: '谷霧のリスク', value: '雲底を確認', detail: '2,000m未満の低い霧は、頂上が晴れていても村の眺めを隠す' },
      ],
      keyTakeaways: [
        'キルヒブリュッケはツェルマット最良の無料展望です。90〜220スイスフラン以上の登山切符は不要で、村の中心に24時間入れます。',
        '有名な黄金のアルペングローには、公式の日の出の20〜30分前に橋へ。頂上の上200mほどが最初に光を受けます。',
        '橋が三脚で埋まったら、リードヴェーク／ミューリニへ10分上り、伝統的な木のシャレーの屋根越しに見てください。',
        '上の低層雲を確認してください。1,800m未満の谷霧が村を覆うと、橋からは見えなくてもゴルナーグラート（3,089m）やグレイシャー・パラダイス（3,883m）は青空の上にあります。',
      ],
      comparisonTable: {
        caption: 'ツェルマット村の公共展望',
        headers: ['展望地点', '標高', '駅からの徒歩', '向いている構図'],
        rows: [
          ['キルヒブリュッケ（教会の橋）', '1,608m', '徒歩8分', 'マッタービスパ川の定番絵葉書。日の出の集合場所。'],
          ['リードヴェーク／ミューリニの斜面', '1,660m', '徒歩15分（ゆるい上り）', '高いパノラマ。風化したカラマツのシャレーが視線をマッターホルンへ導く。'],
          ['ホーバルメン下の草地', '1,750m', '徒歩25分', '静かな牧草地の縁。村の電気タクシーの上を直線で見る。'],
          ['キルヒプラッツ／ツェルマッターホフ', '1,620m', '徒歩6分', '歴史的な中心。聖マウリティウス教会とマッターホルン博物館の隣。'],
        ],
      },
      sections: [
        {
          id: 'zermatt-village-matterhorn-views',
          heading: '1. キルヒブリュッケがツェルマットの写真の中心である理由',
          paragraphs: [
            'マッターホルンを見るのに、いつも高所のロープウェイや登山鉄道が要るわけではありません。氷河の水を集めたマッタービスパ川に架かるキルヒブリュッケは、谷のまっすぐ先に、ぎざぎざの東壁とヘルンリ稜を置きます。',
            '橋は24時間開いていて、無料です。朝の試験です。夜明けに橋から頂上が鋭ければ、山の駅へ向かうときです。',
          ],
          bulletPoints: [
            { bold: '朝のアルペングロー：', text: 'マッターホルンは東を向いています。村がまだ影のうちに、日の出が頂上のピラミッドに当たります。先端はおよそ15分、琥珀とマゼンタに光ります。' },
            { bold: '川の前景：', text: 'マッタービスパ川の氷河の水が前景で動き、頂上への誘導線になります。' },
            { bold: '橋の混雑を避ける：', text: '晴れた朝は欄干に三脚が並びます。静かに見るなら、リードヴェーク／ミューリニへさらに10分上り、木の屋根の上から見てください。' },
          ],
          proTip: {
            label: '低い逆転層の規則',
            text: '村が冷たい灰色の霧でも、あきらめないでください。低層雲が多く中層・高層がゼロなら、ゴルナーグラート（3,089m）とグレイシャー・パラダイス（3,883m）は雲の上の青空に立っています。',
          },
        },
        {
          id: 'sunrise-timing-and-tips',
          heading: '2. 村からの時間と撮影のコツ',
          paragraphs: [
            '公式の日の出の少なくとも20分前に、キルヒブリュッケかリードヴェークへ着いてください。最初の光は地面には出ません。まずマッターホルン（4,478m）の針の先に触れ、それから岩壁を下ってきます。',
            '冬の村は雪に覆われ、シャレーの煙突が煙ります。夏と秋は、谷の斜面の黄金のカラマツが、灰色の片麻岩のピラミッドと対照になります。',
          ],
        },
      ],
      faqs: [
        { question: 'ツェルマット村からマッターホルンは見えますか？', answer: '見えます。村のいくつかの公共の場所から明瞭で、いちばん有名なのはマッタービスパ川のキルヒブリュッケと、上りのリードヴェーク／ミューリニです。切符は要りません。' },
        { question: 'ツェルマットでマッターホルンを無料で見る最良の場所は？', answer: '日の出のアルペングローでいちばん有名な無料の場所はキルヒブリュッケです。伝統的なシャレーの屋根越しで人が少ない眺めなら、リードヴェークを10〜15分上ってください。' },
        { question: 'キルヒブリュッケでマッターホルンのアルペングローを見る日の出は何時ですか？', answer: '夏（6〜7月）は05:30〜05:50 CETごろ光が頂上に触れます。秋（9〜10月）は06:45〜07:30 CET。冬は07:45〜08:15 CETごろです。必ず公式の日の出の20分前に着いてください。' },
        { question: 'ツェルマット村が霧のときは？', answer: '1,600m付近の谷には低い霧がかかり、頂上は完全に晴れていることがよくあります。高所のスコアを見てください。ゴルナーグラート（3,089m）かグレイシャー・パラダイス（3,883m）が8〜10/10なら、列車かロープウェイで雲の上へ出てください。' },
      ],
    },
  },
  ko: {
    gornergrat: {
      name: '고르너그라트 전망대',
      shortName: '고르너그라트',
      title: '고르너그라트 전망대: 실시간 시야 스코어, 웹캠 및 마터호른 파노라마 가이드',
      description: '해발 3,089m 실시간 기상 관측 데이터, 체르마트 산악 열차 정보, 리펠제 호수 반영 촬영 팁 및 360° 알프스 파노라마.',
      aspectLabel: '동벽 / 북동벽 (토블론 초콜릿의 상징적인 뷰)',
      transportSummary: '체르마트 역 앞에서 고르너그라트 톱니바퀴 산악 열차(GGB) 탑승',
      journeyTime: '편도 약 33분',
      bestTimeWindow: '07:00–11:00 CET (아침 햇살이 동벽을 황금빛으로 비추는 시간)',
      keyTakeaways: [
        '산악 톱니바퀴 열차는 바람에 매우 강해 기상 악화 시에도 운행 신뢰도가 가장 높습니다.',
        '오전 10시 이전의 이른 아침 열차를 탈수록 구름 없는 청명한 정상을 볼 확률이 높습니다.',
        '리펠제(Riffelsee) 호수는 로텐보덴(Rotenboden) 역에서 도보로 5분 거리에 있습니다.',
      ],
      heroStat: {
        label: '시선 거리',
        value: '동쪽 9.1km',
        detail: '회른리 능선과 동벽(4,478m)이 가리지 않고 보입니다',
      },
      quickFacts: [
        { label: '보는 각도', value: '고전 토블론', detail: '동벽과 북동벽이 만드는 갈고리형 피라미드 실루엣' },
        { label: '내풍성', value: '매우 높음', detail: '케이블카가 멈춰도 톱니바퀴 열차는 운행합니다' },
        { label: '가장 좋은 좌석', value: '오른쪽(오르막)', detail: '오르막 방향 오른쪽에 앉으면 마터호른이 창에서 떠나지 않습니다' },
        { label: '호수 정차', value: '로텐보덴(2,757m)', detail: '고르너그라트 한 정거장 아래. 리펠제 거울 반영' },
      ],
      comparisonTable: {
        caption: '고르너그라트 철도: 역별 고도와 마터호른 시야',
        headers: ['역', '고도', '소요', '시선과 여기서 내리는 이유'],
        rows: [
          ['체르마트 역', '1,608m', '0분', '스위스 연방철도 도착선 맞은편 종점. 오른쪽에서 탑승.'],
          ['리펠알프', '2,222m', '16분', '수목한계. 오래된 스위스 돌소나무가 마터호른을 액자처럼 감쌉니다.'],
          ['리펠베르크', '2,582m', '23분', '열린 고산 초원. 회른리 능선과 푸르크 능선의 광각.'],
          ['로텐보덴(리펠제)', '2,815m', '28분', '여기서 하차. 도보 5분이면 리펠제(2,757m) 반영.'],
          ['고르너그라트 정상', '3,089m', '33분', '360° 테라스. 마터호른, 고르너 빙하, 4,000m 봉우리 29개.'],
        ],
      },
      sections: [
        {
          id: 'can-you-see-matterhorn-from-gornergrat-today',
          heading: '1. 표를 사기 전에 오늘의 고르너그라트 시야 점수를 읽는 법',
          paragraphs: [
            '고르너그라트 철도 왕복은 92~132스위스프랑이며(스위스 트래블 패스 또는 하프페어 카드 50% 할인), 구름을 이유로 환불되지 않습니다. 타기 전에 고도 수치를 확인하는 편이 낫습니다.',
            '해발 1,608m 체르마트 마을에서는 가장 아래 대기층만 보입니다. 이 페이지의 계산은 3,089m, 북위 45.9840°, 동경 7.7845°에 맞춘 Open-Meteo 격자를 봅니다. 8/10~10/10(“보임”)이면 동벽과 회른리 능선이 트여 있습니다. 6/10 또는 7/10(“부분적으로 보임”)이면 구름이 지나가거나 정상에 깃발 구름이 남습니다.',
          ],
          bulletPoints: [
            { bold: '8–10/10(바로 출발):', text: '중층운(3,000m)이 25% 미만이고, 고르너 빙하 방향 시정은 20km를 넘습니다.' },
            { bold: '5–7/10(오전과 오후를 비교):', text: '오전(06:00–11:00 CET)은 맑고 그 뒤에 적운이 생기는 경우가 많습니다. 가장 이른 열차를 타십시오.' },
            { bold: '1–4/10(표는 보류):', text: '두꺼운 중층 층운이나 강수가 3,000–4,478m를 감쌉니다. 100스위스프랑을 넘게 쓰기 전에 아래 360° 카메라를 확인하십시오.' },
          ],
          proTip: {
            label: '계곡 역전층의 요령',
            text: '마을이 회색이어도 “2,000m 미만 계곡 안개”와 “중층운(2,000–6,000m)”을 비교하십시오. 하층 안개가 70%를 넘고 중층운이 20% 미만이면, 톱니바퀴 열차가 안개 위 3,089m의 햇살로 데려갑니다.',
          },
        },
        {
          id: 'best-time-and-lighting-gornergrat',
          heading: '2. 고르너그라트의 가장 좋은 시간: 아침 빛과 오후 구름',
          paragraphs: [
            '고르너그라트는 마터호른의 동남동쪽에 있습니다. 그래서 11:00 CET까지 아침 해가 동벽에 들고, 암벽 띠와 설원, 회른리 능선이 선명합니다.',
            '14:00 CET가 지나면 해는 산 너머 이탈리아 쪽으로 돌아가 고르너그라트에서 보는 벽은 역광이 되고, 골짜기 바람이 응결해 정상에 오후 구름이 생깁니다.',
          ],
        },
        {
          id: 'gornergrat-train-tips',
          heading: '3. 톱니바퀴 열차: 좌석, 중간 하차, 리펠제',
          paragraphs: [
            '일반 고르너그라트 일일권은 매진되지 않습니다. 이 페이지에서 점수가 높은 것을 확인한 뒤, 출발 5분 전에 휴대폰이나 창구에서 사면 됩니다.',
          ],
          bulletPoints: [
            { bold: '오르막은 반드시 오른쪽:', text: '오르막 방향 오른쪽에 앉으십시오. 핀델바흐 다리를 지나면 마터호른이 오른쪽 창을 3,089m까지 채웁니다.' },
            { bold: '로텐보덴에서 내리기:', text: '표는 중간 역 승하차가 됩니다. 정상 한 정거장 아래 로텐보덴(2,815m)에서 리펠제까지 도보 5분입니다.' },
          ],
        },
      ],
      faqs: [
        { question: '오늘 고르너그라트에서 마터호른이 보입니까?', answer: '페이지 위쪽 1–10 오전·오후 점수를 보십시오. 고르너그라트(3,089m)용으로 15분마다 갱신됩니다. 8–10/10은 피라미드가 선명하고, 6–7/10은 능선에 얇은 구름이 있는 부분 가시, 1–4/10은 구름이 정상을 가립니다.' },
        { question: '마을이 흐려도 고르너그라트는 갈 가치가 있습니까?', answer: '구름 높이에 달렸습니다. 하층운(2,000m 미만)이 많아도 중층운(2,000–6,000m)이 25% 미만이면 고르너그라트(3,089m)는 계곡 안개 위의 햇살입니다. 중층운이 70%를 넘으면 역이 구름 안입니다. 더 맑은 시간까지 표를 아껴 두십시오.' },
        { question: '고르너그라트 열차는 어느 쪽에서 마터호른이 잘 보입니까?', answer: '체르마트에서 올라갈 때는 오른쪽, 내려올 때는 왼쪽입니다. 33분 오르막 동안 오른쪽 창에 거의 내내 마터호른이 보입니다.' },
        { question: '고르너그라트 표는 미리 예약해야 합니까?', answer: '아닙니다. 일반 톱니바퀴 열차는 좌석 지정이 없고 매진되지 않습니다. 당일 아침 점수와 Roundshot 카메라를 본 뒤에 사십시오.' },
      ],
    },
    'glacier-paradise': {
      name: '마터호른 글래시어 파라다이스 (클라인 마터호른)',
      shortName: '글래시어 파라다이스',
      title: '마터호른 글래시어 파라다이스: 해발 3,883m 실시간 시야와 고산 웹캠',
      description: '유럽에서 가장 높은 케이블카 역(3,883m). 실시간 구름 높이 진단, 최신 3S 곤돌라 및 마터호른 남벽 뷰.',
      aspectLabel: '남벽 / 남서벽 (고산 빙하 고원에서 바라보는 웅장한 뷰)',
      transportSummary: '체르마트 푸리(Furi)에서 마터호른 익스프레스 + 3S 케이블카 환승',
      journeyTime: '편도 약 40–45분',
      bestTimeWindow: '08:30–12:30 CET (오후 적운이 발달하기 전 가장 시야가 좋은 시간)',
      keyTakeaways: [
        '3,883m 높이에 위치해 계곡에 짙은 안개나 구름이 깔려 있어도 구름 위는 맑은 경우가 많습니다.',
        '풍속 50km/h 이상의 강한 푄 현상 발생 시 최상단 케이블카가 운행 중단될 수 있습니다.',
        '365일 연중 스키가 가능하며 빙하 깊숙이 들어가는 얼음 궁전이 있습니다.',
      ],
      heroStat: {
        label: '플랫폼 고도',
        value: '3,883m',
        detail: '유럽에서 가장 높은 케이블카 역. 고르너그라트보다 794m 높습니다',
      },
      quickFacts: [
        { label: '마터호른 각도', value: '남벽 / 푸르크 벽', detail: '가까이서 보는 사다리꼴 벽. 토블론 갈고리가 아닙니다' },
        { label: '역전층 이점', value: '3,500m 미만 안개 위', detail: '겨울과 가을 계곡 층운보다 위로 올라갑니다' },
        { label: '바람에 대한 민감도', value: '푄 경보', detail: '남풍이 50–55km/h를 넘으면 3S가 멈출 수 있습니다' },
        { label: '날씨와 무관한 볼거리', value: '얼음 궁전', detail: '빙하 안 15m 동굴은 구름 낀 날에도 엽니다' },
      ],
      comparisonTable: {
        caption: '클라인 마터호른(3,883m): 구간과 보는 각도',
        headers: ['구간 / 역', '고도', '마터호른이 보이는 방식과 대기의 역할'],
        rows: [
          ['푸리', '1,867m', '숲 빈터에서 동벽과 푸르크 벽을 가파르게 올려다봅니다.'],
          ['슈바르츠제(우회)', '2,583m', '회른리 능선 바로 아래. 중간 고도에서 가장 가까운 전망.'],
          ['트로케너 슈테크', '2,939m', '동벽/푸르크 벽 바로 아래 빙하 역. 3S 환승.'],
          ['마터호른 글래시어 파라다이스(클라인 마터호른)', '3,883m', '360°. 스위스, 이탈리아, 프랑스의 4,000m 봉우리 38개. 몽블랑 포함.'],
          ['테스타 그리지아(알프스 횡단)', '3,480m', '국경을 넘는 3S. 이탈리아 능선에서 브로이-체르비니아를 내려다봅니다.'],
        ],
      },
      sections: [
        {
          id: 'klein-matterhorn-view-silhouette',
          heading: '1. 클라인 마터호른(3,883m)에서 마터호른은 어떻게 보입니까?',
          paragraphs: [
            '글래시어 파라다이스(클라인 마터호른)로 오르기 전에 각도가 전부입니다. 체르마트와 고르너그라트에서는 북동쪽입니다. 동벽과 북벽이 가늘고 휜 토블론 피라미드가 됩니다.',
            '마터호른 익스프레스와 3S로 남쪽 클라인 마터호른(3,883m)에 가면 산을 거의 90도 돕니다. 전망대에서는 북북서, 남벽(이탈리아 쪽)과 푸르크 벽을 봅니다. 빙하에서 일어선 넓은 어깨의 바위 성이지, 가는 갈고리가 아닙니다. 4,000m가 넘는 봉우리 38개가 몽블랑(4,808m)과 그란 파라디소까지 이어집니다.',
          ],
          proTip: {
            label: '같은 날에 두 각도',
            text: '왕복 도중에 슈바르츠제(2,583m)나 트로케너 슈테크(2,939m)에서 마터호른 익스프레스를 내리십시오. 트로케너 슈테크에서는 높이 1,500m 동벽 거의 바로 아래에 섭니다.',
          },
        },
        {
          id: 'klein-matterhorn-weather-and-fohn',
          heading: '2. 클라인 마터호른 시야: 계곡 역전층과 남쪽 푄',
          paragraphs: [
            '예보는 3,883m(북위 45.9383°, 동경 7.7297°) 전용입니다. 고르너그라트(3,089m)와 날씨가 자주 어긋납니다.',
            '가을과 겨울, 찬 공기는 마터탈에 고이고 역전층은 대략 2,800–3,200m입니다. 그날 클라인 마터호른은 운해 위로 약 700m 솟아 10/10의 푸른 하늘이 됩니다.',
            '남쪽 푄이 서면 아오스타 계곡의 습한 공기가 브로이 사면과 테오둘 고개(3,300m)를 넘습니다. 체르마트 쪽에서 이 습한 벽을 맨 먼저 받는 산이 클라인 마터호른입니다. 3,883m가 2/10이어도 북동 6km, 바람 그늘의 고르너그라트는 7/10일 수 있습니다.',
          ],
          bulletPoints: [
            { bold: '바람 정지선(50km/h 초과):', text: '위의 “바람과 푄 위험”을 보십시오. 새 3S는 옛 삭도보다 바람에 강하지만, 3,883m에서 50–60km/h 돌풍이 나오면 트로케너 슈테크–클라인 마터호른 구간이 안전을 위해 멈출 수 있습니다.' },
            { bold: '일 년 내내 영하:', text: '7월과 8월에도 3,883m 기온은 대체로 −6°C에서 +2°C입니다. 방풍 옷, 빙하 선글라스(카테고리 3/4), 전망대로 가는 마지막 계단은 천천히.' },
          ],
        },
        {
          id: 'lighting-and-best-time-klein-matterhorn',
          heading: '3. 클라인 마터호른에서 찍는다면 이 시간',
          paragraphs: [
            '고르너그라트 동벽은 한낮이 지나면 직사를 잃지만, 여기는 남과 서를 향합니다. 글래시어 파라다이스의 빛은 해가 남쪽 하늘을 지나 이탈리아 쪽 능선을 비추는 늦은 오전에서 이른 오후(10:00–15:00 CET)가 더 좋습니다.',
          ],
        },
      ],
      faqs: [
        { question: '오늘 클라인 마터호른 시야는 어떻습니까?', answer: '페이지 위쪽, 마터호른 글래시어 파라다이스 / 클라인 마터호른(3,883m)의 1–10 오전·오후 지수를 보십시오. 3,883m 자료로 15분마다 갱신됩니다. 8–10/10은 남벽, 브라이트호른, 몽블랑 방향 360°가 맑습니다.' },
        { question: '글래시어 파라다이스에서 보면 마터호른이 왜 다릅니까?', answer: '클라인 마터호른(3,883m)은 마터호른의 남남동, 이탈리아 국경 능선에 있습니다. 체르마트나 고르너그라트의 가는 동/북 토블론이 아니라, 테오둘 빙하 너머로 더 넓고 가파른 남벽과 서벽(이탈리아, 브로이 쪽)을 가까이 봅니다.' },
        { question: '강풍에 클라인 마터호른 케이블카는 멈춥니까?', answer: '멈춥니다. 트로케너 슈테크(2,939m)와 클라인 마터호른(3,883m) 사이 3S는 바람에 견디도록 설계됐지만, 남쪽 푄이나 50–60km/h를 넘는 돌풍으로 상부가 잠시 닫힐 수 있습니다. 체르마트 남쪽 역으로 걷기 전에 바람과 푄을 확인하십시오.' },
        { question: '시야가 5/10이나 6/10이어도 글래시어 파라다이스는 갈 가치가 있습니까?', answer: '6/10(“부분적으로 보임”)이면 아직 가치가 있습니다. 얼음 속 15m, 구름의 영향을 받지 않는 얼음 궁전과 시네마 라운지가 표에 포함됩니다. 4/10 이하면 3,883m 전망대는 화이트아웃입니다. 날짜를 바꾸는 편이 낫습니다.' },
      ],
    },
    'riffelsee': {
      name: '수네가 & 리펠제 호수 반영',
      shortName: '호수 반영 뷰',
      title: '리펠제 & 수네가: 마터호른 거울 반영 촬영을 위한 실시간 바람 및 수면 진단',
      description: '리펠제(2,757m)와 슈텔리제(2,537m)에서 호수에 비치는 완벽한 마터호른 반영 사진을 찍기 위한 실시간 풍속 데이터.',
      aspectLabel: '동벽 호수 거울 반영 (일출 골든아워)',
      transportSummary: '로텐보덴행 열차(리펠제) 또는 지하 푸니쿨라로 수네가(슈텔리제) 이동',
      journeyTime: '편도 약 25–35분',
      bestTimeWindow: '일출부터 09:30 CET (골짜기 열풍이 불기 전 물결 없는 고요한 아침)',
      keyTakeaways: [
        '호수에 거울처럼 마터호른이 비치려면 표면 풍속이 12km/h 미만이어야 합니다.',
        '리펠제 호수는 6월 말부터 10월 말까지만 얼음이 녹아 있으며 그 외 계절은 눈에 덮여 있습니다.',
        '본 호수에 바람이 불어 물결이 치면 100m 아래쪽 바람막이 지형의 작은 하부 호수로 내려가 보세요.',
      ],
      heroStat: {
        label: '거울이 되는 바람 한계',
        value: '< 12km/h',
        detail: '15km/h를 넘으면 리펠제와 슈텔리제에 잔물결이 입니다',
      },
      quickFacts: [
        { label: '리펠제 접근', value: '도보 5분', detail: '톱니바퀴 열차를 로텐보덴(2,815m)에서 내려 60m 내려갑니다' },
        { label: '슈텔리제 접근', value: '도보 20분', detail: '수네가 푸니쿨라(2,288m) + 블라우헤르트 곤돌라(2,571m)' },
        { label: '열린 수면 계절', value: '6월 중순–10월', detail: '11월부터 6월 초까지는 얼고 눈에 덮입니다' },
        { label: '바람 날의 대안', value: '하 리펠제', detail: '본호 서쪽 100m의 작은 연못. 본호가 일렁여도 여기는 유리처럼 남습니다' },
      ],
      comparisonTable: {
        caption: '상 리펠제, 하 리펠제, 슈텔리제',
        headers: ['반영 호수', '고도', '체르마트에서', '전경과 바람에 대한 버티기'],
        rows: [
          ['상 리펠제(본호)', '2,757m', '톱니바퀴 열차로 로텐보덴(28분) + 도보 5분', '가장 가깝고 가장 큰 반영. 10:00 CET 이후 동풍과 남풍에 노출됩니다.'],
          ['하 리펠제(두 번째 연못)', '2,745m', '본호를 지나 서쪽으로 도보 2분', '자연 둑이 바람을 막습니다. 본호가 일렁일 때의 가장 좋은 대안.'],
          ['슈텔리제(수네가–블라우헤르트)', '2,537m', '수네가 푸니쿨라 + 블라우헤르트 곤돌라 + 도보 20분', '반쯤 잠긴 바위와 황새풀. 계곡 프레임이 조금 더 넓습니다.'],
          ['그린지제(5호수)', '2,334m', '슈텔리제 아래, 5호수 길을 45분', '낙엽송에 둘러싸여 체르마트 호수 중 바람을 가장 잘 막습니다. 10월에 좋습니다.'],
          ['라이제(수네가 테라스)', '2,232m', '수네가 푸니쿨라(4.5분) + 엘리베이터', '테라스 바로 아래. 아이와 가기 가장 쉽습니다.'],
        ],
      },
      sections: [
        {
          id: 'riffelsee-matterhorn-reflection-conditions',
          heading: '1. 리펠제와 슈텔리제 반영의 세 가지 규칙',
          paragraphs: [
            '맑은 오후에 리펠제나 슈텔리제로 걸어 엽서 같은 반영을 기대했다가, 어두운 잔물결이나 5월이라면 설원만 보는 사람이 수천 명입니다.',
            '거꾸로 선 마터호른은 정밀한 미기후입니다. 체르마트를 떠나기 전에 여기서 세 조건을 확인할 수 있습니다.',
          ],
          bulletPoints: [
            { bold: '규칙 1 — 수면 바람은 12km/h 미만:', text: '수면이 거울이 되는 것은 잔물결이 없을 때뿐입니다. 0–10km/h는 날카로운 반영. 12–20km/h에서는 정상이 세로 줄로 번지고, 22km/h를 넘으면 반영이 사라집니다.' },
            { bold: '규칙 2 — 중층운은 적어야 합니다(점수 7/10 이상):', text: '리펠제(2,757m)와 슈텔리제(2,537m)는 남서, 4,478m 정상을 봅니다. 3,200–4,200m 구름 띠는 하늘과 수면 양쪽에서 피라미드 상부를 가립니다.' },
            { bold: '규칙 3 — 해빙 창(6월 중순–10월 말):', text: '2,537–2,757m의 두 호수는 10월 말이나 11월에 얼고, 6월 중순에서 말까지 눈 아래에 있습니다. 6월 초에는 반쯤 녹은 청록 얼음이 보입니다.' },
          ],
          proTip: {
            label: '하 리펠제 요령',
            text: '본호가 일렁여도 실망하고 로텐보덴을 떠나지 마십시오. 리펠베르크 방향으로 100m 더 가면 작은 “하 리펠제”가 있습니다. 모레인 가장자리에 가려 18–20km/h에도 거울처럼 남습니다.',
          },
        },
        {
          id: 'sunnegga-vs-rotenboden-timing',
          heading: '2. 아침(07:15–09:30 CET)이 호수 반영에 결정적인 이유',
          paragraphs: [
            '높은 골짜기의 바람은 하루 리듬이 정해져 있습니다. 밤의 복사 냉각으로 새벽 호수는 무풍입니다. 10:00 CET쯤 해가 마터탈 암벽을 데우면 사면풍이 15–25km/h로 불어 오르고, 회른리 능선에 적운이 생길 때쯤 호수를 일렁이게 합니다.',
            '여름 고르너그라트 톱니바퀴 열차는 07:00 CET에 체르마트를 떠납니다. 07:28에 로텐보덴, 07:33에 리펠제. 공기는 아직 고요하고 동벽은 아침의 금색입니다.',
          ],
        },
        {
          id: 'five-lakes-hike-strategy',
          heading: '3. 수네가와 5호수 길(5-Seenweg)',
          paragraphs: [
            '5호수 길(슈텔리제, 그린지제, 그륀제, 모스지제, 라이제. 9.8km, 약 2시간 반)은 곤돌라가 열리자마자 반드시 위쪽 블라우헤르트(2,571m)에서 시작해, 수면이 고요할 때 슈텔리제에 도착하십시오. 한낮에 바람이 나도 그린지제(2,334m)는 키 큰 낙엽송이 바람을 막아 오후까지 반영이 남습니다.',
          ],
        },
      ],
      faqs: [
        { question: '리펠제에 비치는 산은 무엇입니까?', answer: '마터호른입니다. 고르너그라트 철도 로텐보덴에서 도보 5분이면 리펠제에 도착하고, 동벽이 반영을 채웁니다. 수네가와 슈텔리제는 같은 정상을 더 낮은 각도에서 보여 줍니다.' },
        { question: '오늘 리펠제 반영 조건은 좋습니까?', answer: '페이지 위쪽 리펠제와 슈텔리제 실시간 진단을 보십시오. 선명한 거울에는 시야 점수 7–10/10과 수면 바람 12km/h 미만이, 6월 중순부터 10월의 무빙기에 함께 있어야 합니다.' },
        { question: '반영은 리펠제와 슈텔리제 중 어디가 낫습니까?', answer: '리펠제(2,757m. 톱니바퀴 열차로 로텐보덴, 도보 5분)가 가장 가깝고 크며, 바람이 가장 고요한 07:30 CET에 도착합니다. 슈텔리제(2,537m. 수네가–블라우헤르트와 도보 20분)는 전경 바위가 유명하고 5호수 하이킹의 출발점입니다.' },
        { question: '5월, 6월, 11월의 리펠제는 얼어 있습니까?', answer: '얼어 있습니다. 2,757m 리펠제는 11월부터 6월 초까지 눈 아래입니다(고르너그라트 겨울 스키와 스노슈 구역). 청록색의 부분 해빙은 대체로 6월 10일부터 25일. 수면 반영은 6월 말부터 10월 말입니다.' },
        { question: '바람이 세서 리펠제에 반영이 안 나오면?', answer: '먼저 본호 서쪽으로 100m 걸어, 바람막이 움푹한 곳의 작은 “하 리펠제”로 가십시오. 본호가 일렁여도 여기는 종종 매끈합니다. 또는 6스톱이나 10스톱 ND 필터로 15–30초 노출해 잔물결을 안개 같은 반영으로 만드십시오.' },
      ],
    },
    sunnegga: {
      name: '수네가',
      shortName: '수네가',
      title: '수네가 푸니쿨라와 마터호른 동벽',
      description: '수네가 푸니쿨라는 마터호른 동벽, 슈텔리제, 5호수 걷기의 낮은 테라스입니다. 가장 가까운 반영이 아니라 쉬운 출발이 필요할 때 이용합니다.',
      aspectLabel: '낮은 테라스에서 보는 동벽',
      transportSummary: '체르마트에서 수네가 푸니쿨라',
      journeyTime: '4.5분',
      bestTimeWindow: '첫 칸. 바람이 슈텔리제에 닿기 전',
      heroStat: {
        label: '푸니쿨라',
        value: '4.5분',
        detail: '체르마트에서 해발 2,288m 테라스까지',
      },
      quickFacts: [
        { label: '테라스', value: '2,288m', detail: '리펠제보다 넓고 낮은 각도의 동벽' },
        { label: '슈텔리제', value: '도보 20분', detail: '블라우헤르트(2,571m)까지 곤돌라, 그다음 2,537m 호수까지 걷기' },
        { label: '라이제', value: '테라스 아래', detail: '가장 쉬운 호수. 푸니쿨라에서 몇 분' },
        { label: '리펠제와 비교', value: '출발이 늦음', detail: '고르너그라트 열차는 07:30쯤 호수에 도착합니다. 수네가는 더 늦게 엽니다.' },
      ],
      keyTakeaways: [
        '수네가는 해발 2,288m 푸니쿨라 테라스입니다. 보이는 것은 동벽이며, 리펠제보다 낮고 멉니다.',
        '이쪽의 반영 호수는 슈텔리제입니다. 블라우헤르트까지 곤돌라, 그다음 도보 20분.',
        '라이제, 아이와 함께, 5호수 걷기라면 수네가. 첫 빛에서 가장 큰 반영이라면 리펠제.',
      ],
      comparisonTable: {
        caption: '수네가 걷기가 리펠제보다 나을 때',
        headers: ['일정', '수네가 선택', '리펠제 선택'],
        rows: [
          ['가장 가까운 반영', '슈텔리제. 곤돌라 뒤 도보 20분', '로텐보덴에서 내리막 5분. 동벽에서 가장 큰 거울.'],
          ['첫 빛', '푸니쿨라는 08:00쯤 엽니다', '첫 고르너그라트 열차면 07:30쯤 호수에 도착'],
          ['편한 하루', '라이제는 테라스 옆. 고르너그라트 표는 필요 없습니다.', '로텐보덴까지 열차 표와 짧은 내리막'],
        ],
      },
      sections: [
        {
          id: 'sunnegga-funicular',
          heading: '수네가 푸니쿨라',
          paragraphs: [
            '푸니쿨라는 체르마트를 떠나 약 4분 30초 만에 수네가 테라스(2,288m)로 오릅니다. 동벽은 정면에 있고, 리펠제에서 볼 때보다 넓고 낮게 보입니다.',
            '라이제는 테라스 바로 아래입니다. 아이와 가는 호수이며 고르너그라트 열차는 필요 없습니다.',
          ],
        },
        {
          id: 'stellisee',
          heading: '슈텔리제와 동벽',
          paragraphs: [
            '이쪽 반영은 해발 2,537m 슈텔리제입니다. 수네가에서 블라우헤르트(2,571m)로 곤돌라를 탄 뒤 약 20분 걷습니다. 전경은 바위와 황새풀. 정상은 리펠제와 같은 동벽입니다.',
            '수면이 산을 비추는 것은 6월 말부터 10월까지, 바람이 대략 12km/h 미만인 동안뿐입니다. 오후가 맑아도 바람이 시작되면 반영은 실패합니다.',
          ],
        },
        {
          id: 'when-sunnegga-wins',
          heading: '수네가가 리펠제로 가는 걷기를 이길 때',
          paragraphs: [
            '리펠제가 더 가깝고 크며, 첫 열차도 더 일찍 도착합니다. 5호수(슈텔리제, 그린지제, 그륀제, 모스지제, 라이제), 아이와 함께, 고르너그라트 표가 없는 날에는 수네가 걷기가 더 낫습니다.',
            '곤돌라가 열리자마자 블라우헤르트를 출발해 슈텔리제가 아직 고요할 때 도착하십시오. 이미 바람이 있다면, 더 낮고 낙엽송에 가려진 그린지제가 하루 늦은 시간까지 반영을 남깁니다.',
          ],
        },
      ],
      faqs: [
        { question: '수네가는 무엇입니까?', answer: '체르마트 위, 해발 2,288m 푸니쿨라 테라스입니다. 약 4.5분. 보이는 것은 마터호른 동벽이며, 리펠제보다 낮은 위치에서입니다.' },
        { question: '반영은 수네가가 낫습니까, 리펠제가 낫습니까?', answer: '가장 큰 거울과 가장 이른 출발이라면 리펠제입니다. 수네가는 편한 테라스이고 슈텔리제로 가는 걷기의 출발점입니다.' },
        { question: '수네가에서 슈텔리제에는 어떻게 갑니까?', answer: '해발 2,571m 블라우헤르트까지 곤돌라를 타고, 거기서 약 20분 걸어 해발 2,537m 슈텔리제에 도착합니다.' },
      ],
    },
    'zermatt-village': {
      name: '체르마트 마을(키르히브뤼케와 리드베크)',
      shortName: '체르마트 마을',
      title: '오늘 체르마트 마을에서 마터호른이 보입니까? 키르히브뤼케 실시간 시야와 카메라',
      description: '체르마트 마을(키르히브뤼케와 리드베크)에서 마터호른 실시간 시야. 라이브 카메라, 일출 알펜글로, 계곡 안개. 산악 열차 표는 필요 없습니다.',
      aspectLabel: '북동 능선과 동벽을 계곡에서 보는 구도',
      transportSummary: '체르마트 역 / 교회 광장에서 도보 5분(표 불필요)',
      journeyTime: '도보 0–10분(무료 공공 전망)',
      bestTimeWindow: '일출 20분 전–08:30 CET(아침 알펜글로와 무풍)',
      heroStat: {
        label: '표 가격',
        value: '0스위스프랑(무료)',
        detail: '공공 다리와 길. 24시간. 산악 열차 불필요',
      },
      quickFacts: [
        { label: '가장 좋은 지점', value: '키르히브뤼케', detail: '마터비스파 강 위에서 동벽으로 직선' },
        { label: '조금 높은 지점', value: '리드베크 / 뮈리니', detail: '지붕 위로 10분 오르막. 사람은 적습니다' },
        { label: '일출 골든아워', value: '정상 알펜글로', detail: '계곡 일출 15–20분 전에 끝이 분홍과 주황으로 켜집니다' },
        { label: '계곡 안개 위험', value: '운저 확인', detail: '2,000m 미만의 낮은 안개는 정상이 맑아도 마을 전망을 가립니다' },
      ],
      keyTakeaways: [
        '키르히브뤼케는 체르마트 최고의 무료 전망입니다. 90–220스위스프랑 이상의 산악 표는 필요 없고, 마을 한가운데 24시간 들어갈 수 있습니다.',
        '유명한 황금 알펜글로를 보려면 공식 일출 20–30분 전에 다리로. 정상 위쪽 약 200m가 먼저 빛을 받습니다.',
        '다리가 삼각대로 가득하면 리드베크 / 뮈리니로 10분 올라가, 전통 나무 샬레 지붕 너머로 보십시오.',
        '위의 하층운을 확인하십시오. 1,800m 미만 계곡 안개가 마을을 덮으면 다리에서는 안 보여도 고르너그라트(3,089m)나 글래시어 파라다이스(3,883m)는 푸른 하늘 위에 있습니다.',
      ],
      comparisonTable: {
        caption: '체르마트 마을의 공공 전망',
        headers: ['전망 지점', '고도', '역에서 도보', '어울리는 구도'],
        rows: [
          ['키르히브뤼케(교회 다리)', '1,608m', '도보 8분', '마터비스파 강의 정석 엽서. 일출 모임 장소.'],
          ['리드베크 / 뮈리니 비탈', '1,660m', '도보 15분(완만한 오르막)', '높은 파노라마. 풍화된 낙엽송 샬레가 시선을 마터호른으로 이끕니다.'],
          ['호발멘 아래 초지', '1,750m', '도보 25분', '조용한 목초지 가장자리. 마을 전기 택시 위로 직선을 봅니다.'],
          ['키르히플라츠 / 체르마터호프', '1,620m', '도보 6분', '역사적인 중심. 성 마우리티우스 교회와 마터호른 박물관 옆.'],
        ],
      },
      sections: [
        {
          id: 'zermatt-village-matterhorn-views',
          heading: '1. 키르히브뤼케가 체르마트 사진의 중심인 이유',
          paragraphs: [
            '마터호른을 보려면 언제나 고소 케이블카나 톱니바퀴 열차가 필요한 것은 아닙니다. 빙하 물을 모은 마터비스파 강에 놓인 키르히브뤼케는 골짜기 정면에 들쭉날쭉한 동벽과 회른리 능선을 둡니다.',
            '다리는 24시간 열려 있고 무료입니다. 아침의 시험입니다. 새벽에 다리에서 정상이 날카로우면 산 역으로 갈 때입니다.',
          ],
          bulletPoints: [
            { bold: '아침 알펜글로:', text: '마터호른은 동쪽을 향합니다. 마을이 아직 그늘일 때 일출이 정상 피라미드에 닿습니다. 끝은 약 15분, 호박색과 마젠타로 빛납니다.' },
            { bold: '강의 전경:', text: '마터비스파 강의 빙하 물이 전경에서 움직이며 정상으로 가는 유도선이 됩니다.' },
            { bold: '다리의 혼잡을 피하기:', text: '맑은 아침에는 난간에 삼각대가 늘어섭니다. 조용히 보려면 리드베크 / 뮈리니로 10분 더 올라가 나무 지붕 위에서 보십시오.' },
          ],
          proTip: {
            label: '낮은 역전층의 규칙',
            text: '마을이 차갑고 회색인 안개라도 포기하지 마십시오. 하층운이 많고 중층·상층이 없으면 고르너그라트(3,089m)와 글래시어 파라다이스(3,883m)는 구름 위 푸른 하늘에 서 있습니다.',
          },
        },
        {
          id: 'sunrise-timing-and-tips',
          heading: '2. 마을에서의 시간과 촬영 요령',
          paragraphs: [
            '공식 일출보다 적어도 20분 전에 키르히브뤼케나 리드베크에 도착하십시오. 첫 빛은 땅에 나타나지 않습니다. 먼저 마터호른(4,478m) 바늘 끝에 닿고, 그다음 암벽을 내려옵니다.',
            '겨울 마을은 눈에 덮이고 샬레 굴뚝이 연기를 냅니다. 여름과 가을에는 골짜기 사면의 황금 낙엽송이 회색 편마암 피라미드와 대비됩니다.',
          ],
        },
      ],
      faqs: [
        { question: '체르마트 마을에서 마터호른이 보입니까?', answer: '보입니다. 마을의 여러 공공 장소에서 선명하고, 가장 유명한 곳은 마터비스파 강의 키르히브뤼케와 오르막 리드베크 / 뮈리니입니다. 표는 필요 없습니다.' },
        { question: '체르마트에서 마터호른을 무료로 보는 가장 좋은 곳은?', answer: '일출 알펜글로로 가장 유명한 무료 장소는 키르히브뤼케입니다. 전통 샬레 지붕 너머로 사람이 적은 전망이라면 리드베크를 10–15분 오르십시오.' },
        { question: '키르히브뤼케에서 마터호른 알펜글로를 보는 일출은 몇 시입니까?', answer: '여름(6–7월)에는 05:30–05:50 CET쯤 빛이 정상에 닿습니다. 가을(9–10월)은 06:45–07:30 CET. 겨울은 07:45–08:15 CET쯤입니다. 반드시 공식 일출 20분 전에 도착하십시오.' },
        { question: '체르마트 마을에 안개가 있으면?', answer: '1,600m 부근 골짜기에는 낮은 안개가 끼고 정상은 완전히 맑은 일이 흔합니다. 고소 점수를 보십시오. 고르너그라트(3,089m)나 글래시어 파라다이스(3,883m)가 8–10/10이면 열차나 케이블카로 구름 위로 나가십시오.' },
      ],
    },
  },
};

/**
 * Returns a localized viewpoint page configuration with full fallback to default English.
 */
export function getLocalizedViewpointPage(
  slug: ViewpointPageSlug,
  locale: Locale = 'en'
): ViewpointPageConfig {
  const base = VIEWPOINT_PAGES.find((vp) => vp.slug === slug) || VIEWPOINT_PAGES[0];
  if (locale === 'en') return base;

  const translation = VIEWPOINT_TRANSLATIONS[locale]?.[slug];
  if (!translation) return base;

  return {
    ...base,
    name: translation.name || base.name,
    shortName: translation.shortName || base.shortName,
    title: translation.title || base.title,
    seoTitle: translation.title || base.seoTitle,
    description: translation.description || base.description,
    aspectLabel: translation.aspectLabel || base.aspectLabel,
    transportSummary: translation.transportSummary || base.transportSummary,
    journeyTime: translation.journeyTime || base.journeyTime,
    bestTimeWindow: translation.bestTimeWindow || base.bestTimeWindow,
    keyTakeaways: translation.keyTakeaways || base.keyTakeaways,
    heroStat: translation.heroStat
      ? {
          label: translation.heroStat.label,
          value: translation.heroStat.value ?? base.heroStat.value,
          detail: translation.heroStat.detail,
        }
      : base.heroStat,
    quickFacts: translation.quickFacts
      ? base.quickFacts.map((qf, i) => ({
          ...qf,
          label: translation.quickFacts![i]?.label || qf.label,
          value: translation.quickFacts![i]?.value || qf.value,
          detail: translation.quickFacts![i]?.detail || qf.detail,
        }))
      : base.quickFacts,
    comparisonTable: translation.comparisonTable ?? base.comparisonTable,
    sections: translation.sections ?? base.sections,
    faqs: translation.faqs || [
      ...base.faqs,
      ...(translation.extraFaqs ?? []),
    ],
  };
}
