import { GuideTranslation } from '../guides';

export const itGuides: Record<string, GuideTranslation> = {
  'gornergrat-vs-glacier-paradise': {
    title: 'Gornergrat o Glacier Paradise',
    shortTitle: 'Gornergrat vs. Glacier Paradise',
    description: 'Altitudine, treno a cremagliera contro funivia, angolazioni e meteo a confronto per i due punti panoramici iconici di Zermatt.',
    category: 'Viewpoints',
    heroStat: {
      label: 'Differenza di quota',
      value: '794 m',
      detail: 'Gornergrat (3.089 m) vs. Piccolo Cervino (3.883 m)',
    },
    keyTakeaways: [
      'Il Gornergrat (3.089 m) offre l’iconica silhouette piramidale della parete Est (il profilo classico del Toblerone) ed è molto meno soggetto a chiusure per vento.',
      'Il Matterhorn Glacier Paradise (3.883 m) vi porta quasi 800 metri più in alto sul ghiacciaio, rivelando la ripida e maestosa parete Sud/Ovest.',
      'A causa di venti di Föhn e nubi orografiche, capita spesso che una vetta abbia un punteggio di 8/10 e l’altra solo 4/10: confrontate sempre entrambi i dati prima di acquistare i biglietti.',
      'Se potete fare una sola escursione per fotografare la classica forma del Cervino, scegliete il Gornergrat con il treno a cremagliera.',
    ],
    comparisonTable: {
      caption: 'Confronto diretto: Gornergrat vs. Matterhorn Glacier Paradise',
      headers: ['Caratteristica', 'Gornergrat (3.089 m)', 'Matterhorn Glacier Paradise (3.883 m)'],
      rows: [
        [
          'Profilo del Cervino',
          'Parete Est classica e cresta dell’Hörnli (profilo "Toblerone")',
          'Ripide pareti Sud e Ovest lungo il confine italo-svizzero',
        ],
        [
          'Mezzo di trasporto',
          'Treno panoramico a cremagliera (33 min. da Zermatt)',
          'Funivie e cabinovie 3S via Furi / Trockener Steg (45 min.)',
        ],
        [
          'Resistenza a vento e bufere',
          'Molto alta — Il treno su rotaia viaggia anche con vento forte',
          'Moderata — Le funivie a 3.883 m chiudono con raffiche oltre 50 km/h',
        ],
        [
          'Miglior orario di luce',
          '06:00–11:00 CET (Sole del mattino e alpenglow sulla parete Est)',
          '11:00–16:00 CET (Sole alto e illuminazione pomeridiana da Ovest)',
        ],
        [
          'Riflesso nel lago',
          'Sì — Lago Riffelsee (fermata Rotenboden, giugno–ottobre)',
          'Deviazione opzionale via Schwarzsee (2.583 m)',
        ],
        [
          'Effetti dell’altitudine',
          'Basso o moderato (3.089 m)',
          'Aria sensibilmente rarefatta salendo rapidamente a 3.883 m',
        ],
      ],
    },
    sections: [
      {
        id: 'matterhorn-angle',
        heading: '1. La silhouette del Cervino: Piramide classica vs. parete d’alta quota',
        paragraphs: [
          'Chi visita Zermatt per la prima volta resta spesso stupito: dal Glacier Paradise (Piccolo Cervino), la montagna appare completamente diversa rispetto al paese o al Gornergrat.',
          'Dal Gornergrat a 3.089 metri si guarda direttamente oltre il ghiacciaio del Gorner verso le pareti Est e Nord, divise dalla cresta affilata dell’Hörnli. È la famosa piramide nota in tutto il mondo. Dal Glacier Paradise a 3.883 metri, a ridosso del confine italiano, il Cervino è visto di lato: più largo, massiccio e meno slanciato.',
        ],
        proTip: {
          label: 'Verdetto fotografico',
          text: 'Per lo scatto da cartolina per eccellenza — abbinato al riflesso a specchio nel lago Riffelsee alla stazione di Rotenboden — il Gornergrat vince senza confronti.',
        },
      },
      {
        id: 'weather-differences',
        heading: '2. Perché la visibilità differisce tra 3.089 m e 3.883 m',
        paragraphs: [
          'Il motivo principale per cui forniamo due punteggi separati su isthematterhornvisible.com è che Gornergrat e Glacier Paradise si trovano in regimi meteorologici differenti.',
          'Quando aria umida di Föhn risale dalla Valtournenche italiana, scavalca il Colle del Teodulo (3.300 m) e avvolge prima il Piccolo Cervino (3.883 m), mentre il Gornergrat, più riparato a Est, gode spesso di altre 2-3 ore di pieno sole. Al contrario, con l’inversione termica invernale sotto i 2.800 metri, il Glacier Paradise svetta nitido sopra un mare di nebbia bianca.',
        ],
        bulletPoints: [
          {
            bold: 'Nuvole a quota media (3.000 m–4.000 m):',
            text: 'Intersecano direttamente entrambe le cime e pesano per il 60% nel nostro indice di visibilità.',
          },
          {
            bold: 'Chiusure per vento di Föhn:',
            text: 'Venti da Sud oltre i 50 km/h bloccano regolarmente la funivia Trockener Steg–Piccolo Cervino, mentre il treno del Gornergrat prosegue regolarmente.',
          },
        ],
      },
      {
        id: 'ticket-strategy',
        heading: '3. Strategia biglietti: Non prenotate mai con settimane di anticipo',
        paragraphs: [
          'I biglietti per le vette di Zermatt sono costosi (da 90 a oltre 220 CHF a seconda della stagione e delle riduzioni Swiss Travel Pass / Metà-prezzo), ma i posti non si esauriscono mai.',
          'Aspettate la sera prima o la mattina della salita: consultate il nostro indice di visibilità AM/PM in tempo reale e le webcam Roundshot. Acquistate il biglietto solo se la previsione segna almeno 7/10.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Su quale lato conviene sedersi sul treno del Gornergrat?',
        answer:
          'Sedetevi sul lato destro (nella direzione di marcia salendo da Zermatt). Il Cervino domina il finestrino per quasi tutti i 33 minuti di salita passando da Riffelalp e Rotenboden.',
      },
      {
        question: 'Si possono visitare sia Gornergrat sia Glacier Paradise in un giorno?',
        answer:
          'Sì, con lo Zermatt Peak Pass, ma è consigliato solo con un punteggio di 9/10 o 10/10 per tutto il giorno. Iniziate dal Gornergrat alle 08:00 per la luce mattutina e salite al Glacier Paradise dopo le 11:30.',
      },
      {
        question: 'Quale vetta è migliore in caso di cielo coperto?',
        answer:
          'Se entrambi i punti segnano 4/10 o meno, risparmiate i soldi e restate in valle. Se si tratta solo di nebbia bassa da inversione (< 2.800 m), il Glacier Paradise (3.883 m) ha più probabilità di sbucare sopra le nubi.',
      },
    ],
  },

  'best-time-to-see-matterhorn': {
    title: 'Meteo di Zermatt per mese | Quando vedere il Cervino',
    shortTitle: 'Miglior mese e orario',
    description: 'Dati statistici a confronto: perché dicembre e gennaio offrono l’88%+ di limpidezza, mentre i pomeriggi estivi si coprono di cumuli termici.',
    category: 'Climatology',
    heroStat: {
      label: 'Fascia più limpida',
      value: '06:00–10:30',
      detail: 'Il mattino (AM) supera il pomeriggio (PM) nel 78% dell’anno',
    },
    keyTakeaways: [
      'Dicembre (89%) e gennaio (88%) offrono statisticamente la più alta probabilità giornaliera di una vetta perfettamente sgombra da nubi.',
      'Giugno (48%) e luglio (52%) registrano la visibilità giornaliera più bassa a causa delle nubi convettive pomeridiane dovute al riscaldamento solare.',
      'In qualsiasi stagione, la finestra mattutina (06:00–11:00 CET) è nettamente più limpida del blocco pomeridiano (12:00–18:00 CET).',
      'Settembre e ottobre ("l’autunno dorato") combinano sentieri senza neve e un’affidabilità di cielo sereno tra il 72% e il 79%.',
    ],
    sections: [
      {
        id: 'morning-vs-afternoon',
        heading: '1. La regola d’oro di Zermatt: Perché il mattino vince sempre sul pomeriggio',
        paragraphs: [
          'Se dovete seguire un solo consiglio per il vostro viaggio: puntate la sveglia presto. In primavera, estate e inizio autunno, il Cervino si sveglia spesso sotto un cielo blu cobalto alle 06:30, per essere completamente inghiottito dai cumuli entro le 13:30.',
          'Non appena il sole scalda le pareti rocciose scure della valle di Zermatt, l’aria calda sale verso l’alto (brezze anabatiche). Superando lo zero termico attorno a 3.000 metri, l’umidità si condensa sulle creste. Il nostro cruscotto separa ogni giorno in score mattutino e pomeridiano affinché non sprechiate il mattino dormendo.',
        ],
        proTip: {
          label: 'Tattica del primo treno',
          text: 'Prendete il treno del Gornergrat delle 07:00 o delle 07:36 in estate per raggiungere il Riffelsee prima che la brezza diurna increspi l’acqua.',
        },
      },
      {
        id: 'seasonal-breakdown',
        heading: '2. Analisi della visibilità stagione per stagione',
        paragraphs: [
          'Spesso si pensa che l’estate offra il "meteo migliore". In alta montagna, tuttavia, l’aria fredda contiene molta meno umidità e azzera le turbolenze termiche.',
        ],
        bulletPoints: [
          {
            bold: 'Inverno (nov–feb • 84%–89% di limpidezza):',
            text: 'Campi di alta pressione freddi e stabili creano una visibilità tagliente senza nubi pomeridiane, spesso fino al tramonto.',
          },
          {
            bold: 'Fine primavera e inizio estate (mag–lug • 48%–58% di limpidezza):',
            text: 'Lo scioglimento della neve fornisce umidità che alimenta nubi torreggianti già a mezzogiorno. Alzarsi presto è fondamentale.',
          },
          {
            bold: 'Autunno (set–ott • 72%–79% di limpidezza):',
            text: 'Le notti fresche placano la convezione mentre i larici dorati incorniciano la valle: la stagione fotografica per eccellenza.',
          },
        ],
      },
      {
        id: 'zermatt-weather-december',
        heading: 'Meteo di Zermatt a dicembre',
        paragraphs: [
          'Dicembre è il mese più limpido della serie trentennale, con l’89% di probabilità di vedere la cima del Cervino in un dato giorno. L’aria fredda e stabile non forma quasi cumuli nel pomeriggio.',
          'Il paese è innevato e i laghi sono ghiacciati: è un mese per guardare e sciare, non per i riflessi. Per la settimana di Natale vedi la [guida al Natale a Zermatt](/guides/christmas-in-zermatt-matterhorn). La pagina del mese è [Meteo di Zermatt a dicembre](/guides/zermatt-weather-december).',
        ],
      },
      {
        id: 'zermatt-weather-september',
        heading: 'Meteo di Zermatt a settembre',
        paragraphs: [
          'A settembre la cima è libera circa il 72% dei giorni. Le notti più fresche spengono le termiche pomeridiane di giugno e luglio, e i larici intorno alla parete est diventano oro.',
          'I sentieri sono ancora senza neve e il Riffelsee è liquido. È il mese del riflesso del Cervino da Sunnegga o Rotenboden. Parti all’alba. La pagina del mese è [Meteo di Zermatt a settembre](/guides/zermatt-weather-september).',
        ],
      },
      {
        id: 'zermatt-weather-may',
        heading: 'Meteo di Zermatt a maggio',
        paragraphs: [
          'Maggio è un mese di passaggio. La probabilità di cielo sereno resta nella fascia di tarda primavera, 48–58%, e la finestra affidabile è la mattina. L’umidità del disgelo alimenta i cumuli nel primo pomeriggio.',
          'Il Riffelsee a maggio è ancora ghiacciato. Lascia lo scatto a specchio a fine giugno. Usa una mattina limpida per il Gornergrat o il ponte del paese e tieni il pomeriggio in valle. La pagina del mese è [Meteo di Zermatt a maggio](/guides/zermatt-weather-may).',
        ],
      },
      {
        id: 'how-many-days',
        heading: '3. Quanti giorni servono a Zermatt per garantire la vista del Cervino?',
        paragraphs: [
          'In base alle serie storiche trentennali di Zermatt, un soggiorno di una sola notte a luglio offre solo il 50% di probabilità di ammirare la vetta libera. Prevedere tre mattinate complete alza la probabilità di almeno una finestra con punteggio ≥ 8/10 a oltre l’88% in estate e oltre il 98% in autunno/inverno.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Qual è il mese migliore in assoluto per vedere il Cervino senza nuvole?',
        answer:
          'Dicembre (89%) e gennaio (88%) vantano le percentuali più alte. Per chi vuole fare trekking su sentieri senza neve, la fine di settembre e ottobre (72%–79%) sono l’ideale.',
      },
      {
        question: 'A che ora il sole illumina la vetta all’alba?',
        answer:
          'I primi raggi toccano la punta della parete Est circa 5-10 minuti prima dell’alba ufficiale a Zermatt: verso le 05:30 a giugno, le 06:50 a settembre e le 08:00 a dicembre.',
      },
    ],
  },

  'zermatt-cloudy-rainy-day-guide': {
    title: 'Cosa fare a Zermatt se il Cervino è tra le nuvole (Guida per maltempo)',
    shortTitle: 'Guida per pioggia e nubi',
    description: 'Punteggio di visibilità pari o inferiore a 4/10? Evitate di spendere oltre 100 CHF nella nebbia e scoprite le migliori attività a valle, gole e terme.',
    category: 'Bad Weather',
    heroStat: {
      label: 'Risparmio sul biglietto',
      value: 'CHF 110+',
      detail: 'Per persona evitando una salita inutile nella nebbia',
    },
    keyTakeaways: [
      'Non comprate biglietti per Gornergrat o Glacier Paradise se l’indice è ≤ 4/10: vi trovereste immersi in un muro bianco.',
      'Verificate se si tratta di semplice inversione termica: a volte Zermatt paese (1.608 m) è coperta mentre oltre i 3.000 metri splende il sole.',
      'La gola della Gorner (Gornerschlucht) è ancora più spettacolare con il cielo coperto grazie alle cascate d’acqua turchese tra le pareti di serpentinite verde.',
      'Il museo Zermatlantis e le spa alpine del paese rendono speciale anche una giornata piovosa.',
    ],
    sections: [
      {
        id: 'check-inversion-first',
        heading: '1. Inversione termica o maltempo vero: controllate gli strati nuvolosi',
        paragraphs: [
          'Prima di rinunciare alla montagna, guardate la distribuzione delle nuvole sul nostro cruscotto. Se le nubi basse (2.000 m) sono al 90% ma quelle medie e alte sono sotto il 15%, il paese si trova sotto una coltre di inversione termica.',
          'In questo caso salendo con il treno o la funivia bucherete la nebbia per sbucare sotto un sole radioso affacciato su un magnifico mare di nuvole. Verificate sulle webcam prima di partire.',
        ],
        proTip: {
          label: 'Verifica webcam',
          text: 'Se le nubi medie superano il 75% e la telecamera del Gornergrat mostra solo bianco, restate a valle.',
        },
      },
      {
        id: 'valley-alternatives',
        heading: '2. Le migliori attività a valle con punteggio da 1/10 a 4/10',
        paragraphs: [
          'Quando una perturbazione atlantica copre le Alpi vallesane, preservate il budget per una giornata limpida ed esplorate il paese:',
        ],
        bulletPoints: [
          {
            bold: 'Zermatlantis (Museo del Cervino):',
            text: 'Situato sotto la piazza della chiesa. Custodisce la corda originale spezzata della tragica prima ascensione del 1865 e antichi chalet in legno.',
          },
          {
            bold: 'Gola della Gorner (Gornerschlucht):',
            text: 'A 20 minuti a piedi dal centro. Passerelle in legno sospese su acque glaciali color smeraldo tra rocce a strapiombo.',
          },
          {
            bold: 'Quartiere storico dell’Hinterdorf:',
            text: 'Fienili e granai in larice vecchi di 500 anni poggiati su dischi di pietra contro i roditori: splendidi con la luce morbida e diffusa della pioggia.',
          },
          {
            bold: 'Day spa alpina e fonduta valdese:',
            text: 'Pomeriggio rilassante in una spa d’hotel con piscina riscaldata seguito da un’autentica fonduta al tartufo o alle erbe di montagna.',
          },
        ],
      },
      {
        id: 'day-trip-escape',
        heading: '3. Fuga col treno verso il microclima soleggiato della Valle del Rodano (45–70 min)',
        paragraphs: [
          'Poiché i 4.000 metri trattengono l’umidità a Sud, la Valle del Rodano (Visp, Briga, Sion) è spesso calda e soleggiata anche quando a Zermatt piove. Con lo Swiss Travel Pass potete raggiungere Briga in un’ora per visitare il castello Stockalper o rilassarvi alle terme di Brigerbad.',
        ],
      },
    ],
    faqs: [
      {
        question: 'I biglietti delle funivie vengono rimborsati in caso di brutto tempo?',
        answer:
          'No. Le società degli impianti di Zermatt non rimborsano i biglietti per scarsa visibilità una volta emessi. Controllate sempre i dati prima di salire.',
      },
      {
        question: 'Le gole della Gorner sono aperte con la pioggia?',
        answer:
          'Sì, durante tutta la stagione estiva (da maggio a ottobre). Indossate scarpe con buona aderenza e una giacca impermeabile.',
      },
    ],
  },

  'best-matterhorn-photo-viewpoints': {
    title: 'I migliori punti fotografici per il Cervino e albe a Zermatt',
    shortTitle: 'Migliori spot fotografici & alba',
    description: 'Coordinate, tempi di cammino e angolazioni ottimali di luce: Kirchbrücke, Stellisee, Riffelsee, Findeln e Mürini.',
    category: 'Photography',
    heroStat: {
      label: 'Laghi con riflesso',
      value: '2.537 m & 2.757 m',
      detail: 'Stellisee (Blauherd) e Riffelsee (Rotenboden)',
    },
    keyTakeaways: [
      'Il ponte della chiesa (Kirchbrücke) è il miglior punto panoramico gratuito per fotografare l’alpenglow infuocato sulla punta.',
      'Il lago Stellisee (2.537 m) incornicia il Cervino con massi in primo piano; il Riffelsee (2.757 m) regala il riflesso ravvicinato più impressionante.',
      'Per avere il riflesso a specchio il vento deve rimanere sotto i 12 km/h: controllate la velocità del vento sul cruscotto.',
      'Per inquadrare i tetti in legno di Zermatt e il Cervino insieme, salite 10 minuti fino al punto panoramico di Mürini / Riedweg.',
    ],
    comparisonTable: {
      caption: 'Guida rapida ai migliori punti fotografici di Zermatt',
      headers: ['Punto panoramico', 'Altitudine', 'Accesso da Zermatt', 'Momento di luce migliore'],
      rows: [
        [
          'Kirchbrücke (Ponte della chiesa)',
          '1.615 m',
          '5 min a piedi dalla stazione (Gratuito)',
          '15 min prima dell’alba (Alpenglow dorato)',
        ],
        [
          'Mürini / Riedweg',
          '1.710 m',
          '12 min di cammino in salita (Gratuito)',
          'Ora blu e alba (Chalet e cima)',
        ],
        [
          'Riffelsee (Rotenboden)',
          '2.757 m',
          '28 min treno Gornergrat + 5 min a piedi',
          '07:30–10:00 CET (Acqua calma e specchio)',
        ],
        [
          'Stellisee (Blauherd)',
          '2.537 m',
          'Funicolare Sunnegga + cabinovia Blauherd + 20 min',
          '08:30–11:00 CET o tramonto',
        ],
        [
          'Borgo di Findeln',
          '2.050 m',
          '35 min di discesa a piedi da Sunnegga',
          'Metà mattina (Chalet di legno e prati fioriti)',
        ],
      ],
    },
    sections: [
      {
        id: 'village-sunrise',
        heading: '1. I punti gratuiti in paese: Kirchbrücke e Mürini',
        paragraphs: [
          'Non serve un costoso biglietto per realizzare fotografie memorabili. Poiché il sole sorge a Est, i primi raggi colpiscono la punta della parete Est mentre il paese di Zermatt è ancora avvolto nell’ombra azzurrina.',
          'Trovate posto sul Kirchbrücke sopra il torrente Mattervispa 20 minuti prima dell’alba. Per evitare la folla dei cavalletti sul ponte, salite 10 minuti lungo il sentiero lastricato verso Riedweg (belvedere Mürini), dove i tetti in scandole guidano lo sguardo dritto alla cima.',
        ],
        proTip: {
          label: 'Verifica alba',
          text: 'Alle 05:30 controllate il nostro score mattutino: cirri sottili (20–35%) intensificano le tinte infuocate, mentre nubi medie oltre il 50% coprono l’alpenglow.',
        },
      },
      {
        id: 'mirror-lakes',
        heading: '2. Stellisee vs. Riffelsee: Quale lago alpino scegliere?',
        paragraphs: [
          'Zermatt ha due laghi alpini celebri in tutto il mondo per il riflesso del Cervino. Due condizioni devono coincidere: lago scongelato (da metà giugno a metà ottobre) e vento calmo (< 12 km/h).',
        ],
        bulletPoints: [
          {
            bold: 'Riffelsee (2.757 m via Rotenboden):',
            text: 'A soli 5 minuti dalla stazione di Rotenboden. Con il treno attivo dalle 07:00, arrivate prima che si alzi la brezza termica. Consiglio: se l’acqua è increspata, camminate 100 metri fino al laghetto inferiore.',
          },
          {
            bold: 'Stellisee (2.537 m via Sunnegga–Blauherd):',
            text: 'Caratterizzato da massi che emergono dall’acqua e da una prospettiva valliva più ampia. Poiché gli impianti aprono più tardi (verso le 08:30), puntate su giornate con vento sotto i 10 km/h.',
          },
        ],
      },
    ],
    faqs: [
      {
        question: 'In quali mesi Riffelsee e Stellisee sono ghiacciati?',
        answer:
          'Entrambi i laghi superano i 2.500 metri e sono ricoperti da neve e ghiaccio da novembre a inizio giugno. I riflessi nell’acqua sono possibili solo da fine giugno a ottobre.',
      },
      {
        question: 'Perché non c’era riflesso nonostante il cielo sereno?',
        answer:
          'Una brezza di soli 15 km/h basta a increspare la superficie. Controllate sempre il vento sul nostro cruscotto e spostatevi sul lato di riva riparato sottovento.',
      },
    ],
  },

  'matterhorn-banner-cloud-fohn-wind': {
    title: 'Perché il Cervino ha spesso una nuvola sulla cima? (Fisica del Föhn)',
    shortTitle: 'Nube a bandiera & fisica del Föhn',
    description: 'La fisica dell’atmosfera dietro la celebre nube a bandiera: come il vento di Föhn genera il pennacchio anche con cielo terso e come lo prevediamo.',
    category: 'Meteorology',
    heroStat: {
      label: 'Quota vetta',
      value: '4.478 m',
      detail: 'La piramide isolata crea un vortice di bassa pressione sottovento',
    },
    keyTakeaways: [
      'La geometria piramidale isolata del Cervino agisce come un profilo alare nelle correnti d’alta quota, creando un vortice di depressione sul lato sottovento.',
      'L’aria risucchiata verso l’alto si raffredda adiabaticamente condensando il vapore in una nube a bandiera stazionaria attaccata alla vetta.',
      'Le normali app meteo indicano spesso "Sereno / 0% pioggia" a Zermatt (1.608 m) anche quando gli ultimi 500 metri della montagna sono celati dalla nube.',
      'Il nostro algoritmo penalizza specificamente l’umidità a quota media e i venti meridionali di Föhn (150°–210° oltre 30 km/h) per prevedere le nubi a bandiera.',
    ],
    sections: [
      {
        id: 'banner-cloud-physics',
        heading: '1. Le leggi fisiche della nube a bandiera del Cervino',
        paragraphs: [
          'Quasi ogni visitatore a Zermatt assiste prima o poi a uno spettacolo curioso: l’intero cielo sopra la Svizzera è di un azzurro impeccabile, tranne sulla cima del Cervino, da cui fuoriesce un pennacchio bianco simile al fumo di un vulcano.',
          'A differenza delle nubi trasportate dal vento, la nube a bandiera nasce e svanisce continuamente nello stesso punto. Quando il vento d’alta quota urta la parete sopravento della piramide di 4.478 metri, l’aria è costretta a scavalcare le creste. Sul lato sottovento riparato, la separazione aerodinamica crea una marcata sacca di bassa pressione.',
          'Aria più umida proveniente da quote inferiori viene aspirata verso l’alto. Espandendosi si raffredda sotto il punto di rugiada e condensa all’istante. Pochi metri più avanti sottovento, l’aria ridiscende, si scalda e la nuvola scompare nel nulla.',
        ],
        proTip: {
          label: 'Leggere la bandiera',
          text: 'Se il pennacchio punta verso Nord in direzione di Zermatt, il Föhn da Sud è attivo e il meteo spesso peggiora nelle 12–24 ore successive. Se punta a Sud, prevale aria più asciutta da Nord.',
        },
      },
      {
        id: 'fohn-wind-effect',
        heading: '2. Perché le normali app meteo falliscono a Zermatt',
        paragraphs: [
          'Le comuni app calcolano il meteo per il fondovalle a 1.608 metri, dove l’aria è mite, secca e protetta dai venti.',
          'Quasi 3.000 metri più in alto sulla vetta, i venti dell’alta troposfera e l’umidità a media quota dettano legge. Ecco perché isthematterhornvisible.com interroga i livelli atmosferici direttamente a 3.089 m e 3.883 m, applicando penalità quando il Föhn da sud (150°–210°) supera 30 km/h.',
        ],
        bulletPoints: [
          {
            bold: 'Nuvole a media quota (Peso 60%):',
            text: 'Tra 3.000 e 4.000 m tagliano direttamente la linea visiva tra i punti panoramici e la vetta.',
          },
          {
            bold: 'Nuvole basse (Peso 25%):',
            text: 'Influenzano la vista dal paese, ma dal Gornergrat si possono scavalcare.',
          },
          {
            bold: 'Cirri alti (Peso 15%):',
            text: 'Nubi di cristalli di ghiaccio sopra i 5.000 m non oscurano quasi mai la sagoma del monte.',
          },
        ],
      },
    ],
    faqs: [
      {
        question: 'Con la nube a bandiera il Cervino è del tutto invisibile?',
        answer:
          'Di solito no: la bandiera sventola solo da un lato della cresta, lasciando visibile il 70%–85% della montagna (punteggio di 6/10 o 7/10). Con Föhn molto violento, tuttavia, può ingrossarsi fino a diventare un muro compatto.',
      },
      {
        question: 'Perché la nube a bandiera sparisce di notte?',
        answer:
          'Senza il riscaldamento del sole cessano le correnti ascensionali che riforniscono di umidità il vortice. Per questo la cima è spesso limpida all’alba e al crepuscolo.',
      },
    ],
  },

  'zurich-geneva-to-zermatt-day-trip': {
    title: 'Treno Zurigo–Zermatt | Orari, cambio a Visp',
    shortTitle: 'Gita da Zurigo & Ginevra',
    description: 'Coincidenze FFS a Visp, tempi e regola di decisione Go/No-Go per la vostra escursione in giornata da Zurigo (3h 14m) o Ginevra (3h 45m).',
    category: 'Day Trips',
    heroStat: {
      label: 'Tempo di treno A/R',
      value: '6,5 – 7,5 ore',
      detail: '3h 14m solo andata da Zurigo HB • 3h 45m da Ginevra',
    },
    keyTakeaways: [
      'Una gita a Zermatt da Zurigo o Ginevra comporta dalle 6,5 alle 7,5 ore complessive di treno: indimenticabile con punteggio ≥ 8/10, ma un rimpianto costoso con score ≤ 4/10.',
      'Anche partendo alle 06:30 si arriva a Zermatt verso le 10:00: la visita cade a cavallo di mezzogiorno, controllate sia il punteggio AM sia quello PM prima di salire sul treno.',
      'In estate i cumuli compaiono spesso già alle 13:00: appena arrivati salite subito sul Gornergrat prima di visitare il paese.',
      'Se il punteggio del mattino è ≤ 5/10, sfruttate il vostro Swiss Travel Pass verso mete più soleggiate (Lucerna/Rigi, Oberland Bernese o Montreux) e tenete Zermatt per un giorno limpido.',
    ],
    comparisonTable: {
      caption: 'Collegamenti ferroviari FFS verso Zermatt',
      headers: ['Stazione di partenza', 'Tempo di viaggio', 'Coincidenza', 'Partenza ideale', 'Arrivo a Zermatt'],
      rows: [
        ['Zurigo HB', '3h 14m', '1 cambio a Visp (7–9 min stesso marciapiede)', '06:02 o 07:02 CET', '09:14 o 10:14 CET'],
        ['Ginevra Cornavin', '3h 45m', '1 cambio a Visp (IR90 a treno MGB)', '05:50 o 06:24 CET', '09:51 o 10:14 CET'],
        ['Berna', '2h 10m', '1 cambio a Visp (tunnel di base)', '07:07 o 08:07 CET', '09:14 o 10:14 CET'],
        ['Basilea FFS', '3h 12m', '1 cambio a Visp', '06:03 o 06:56 CET', '09:14 o 10:14 CET'],
        ['Interlaken Est', '2h 18m', '2 cambi a Spiez & Visp', '07:00 o 08:00 CET', '09:14 o 10:14 CET'],
      ],
    },
    sections: [
      {
        id: 'go-no-go-matrix',
        heading: '1. La regola di decisione delle 06:00 prima di salire in treno',
        paragraphs: [
          'L’errore più grande è prenotare con largo anticipo una gita rigida a Zermatt da Zurigo o Ginevra. Zermatt si trova in una profonda vallata alpina del Sud, meteorologicamente scollegata dal resto della Svizzera: può piovere a Zurigo mentre il Cervino brilla in cielo sereno — o viceversa.',
          'Prima di uscire dall’hotel alle 06:00, verificate i nostri score AM/PM:',
        ],
        bulletPoints: [
          {
            bold: 'GO — Entrambi gli score AM e PM tra 8/10 e 10/10:',
            text: 'Salite sul treno senza indugi! Un campo di alta pressione stabile garantirà ottima visibilità per l’intera giornata.',
          },
          {
            bold: 'GO MATTINIERO — Score AM 8–10/10, poi cala a 5–6/10 in PM:',
            text: 'Molto frequente da maggio ad agosto. Vale la pena solo prendendo il primo treno (06:02 da Zurigo / 06:24 da Ginevra) e salendo sul Gornergrat subito alle 09:30/10:15 PRIMA di pranzare.',
          },
          {
            bold: 'NO-GO — Entrambi gli score ≤ 4/10:',
            text: 'Annullate o rinviate. Passare 7 ore in treno per guardare la nebbia fitta a 3.089 m non ripaga mai la spesa.',
          },
        ],
        proTip: {
          label: 'Segreto del cambio a Visp',
          text: 'Non abbiate timore per i 7 minuti a Visp: i treni rossi della Matterhorn Gotthard Bahn aspettano proprio davanti al vostro binario. Sedetevi sul lato SINISTRO salendo per gli scorci più spettacolari sulle gole.',
        },
      },
      {
        id: 'perfect-day-trip-itinerary',
        heading: '2. L’itinerario ottimale: Vetta al mattino, paese al pomeriggio',
        paragraphs: [
          'Dato che le nubi si formano quasi sempre nel pomeriggio, invertite la consuetudine dei turisti: non sprecate la limpidezza del mattino nei negozi della Bahnhofstrasse.',
          'All’arrivo alle 09:14 o 10:14, attraversate la piazza (60 metri) verso la stazione del Gornergrat. In cima a 3.089 m la parete Est brilla al sole mattutino. Scendendo verso mezzogiorno, scendete a Rotenboden (2.757 m) per fotografare il Cervino specchiato nel Riffelsee. Alle 13:30 tornate in paese per il pranzo, il Kirchbrücke e i granai storici dell’Hinterdorf.',
        ],
      },
      {
        id: 'gornergrat-vs-glacier-daytrip',
        heading: '3. Gornergrat vs. Glacier Paradise con tempi ristretti',
        paragraphs: [
          'In una gita in giornata, il Gornergrat è quasi sempre preferibile rispetto al Glacier Paradise (3.883 m). La stazione del treno si trova di fronte all’arrivo delle FFS, risparmiandovi i 15 minuti a piedi o in bus per attraversare tutto il paese.',
          'Inoltre, salire da Zurigo (408 m) a 3.883 m in un solo mattino rappresenta un dislivello di circa 3.500 metri che provoca spesso mal di testa e vertigini, mentre il Gornergrat (3.089 m) è molto più tollerabile e regala la vista del Toblerone per tutta la salita.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Lo Swiss Travel Pass copre il tragitto in treno fino a Zermatt?',
        answer:
          'Sì! Lo Swiss Travel Pass (e il Biglietto risparmio FFS) copre il 100% del tragitto fino a Zermatt (inclusa la ferrovia a scartamento ridotto da Visp). Offre inoltre il 50% di sconto sul Gornergrat e sul Glacier Paradise.',
      },
      {
        question: 'Si può fare la gita di un giorno a Zermatt in inverno?',
        answer:
          'Certamente: da novembre a febbraio si registrano i giorni più sereni dell’anno (84%–89%). Ricordate che a dicembre il sole tramonta verso le 16:45, quindi partire alle 06:02 o 07:02 è essenziale.',
      },
      {
        question: 'Qual è l’ultimo treno per rientrare a Zurigo o Ginevra?',
        answer:
          'I treni partono ogni 30–60 minuti fino alle 20:37 circa (arrivo a Zurigo HB verso le 00:05, a Ginevra verso le 00:20). La maggior parte dei visitatori riparte con i treni delle 16:37, 17:37 o 18:37 dopo l’alpenglow dal Kirchbrücke.',
      },
    ],
  },
  'what-is-the-matterhorn': {
    title: 'Che cos’è il Cervino? | Altezza, dove si trova e visibilità',
    shortTitle: 'Che cos’è il Cervino?',
    description:
      'Il Cervino è una piramide di 4.478 m sul confine italo-svizzero sopra Zermatt. Altezza, posizione e se oggi è visibile.',
    category: 'Punti panoramici',
    heroStat: {
      label: 'Altezza della cima',
      value: '4.478 m',
      detail: 'Zermatt, Vallese, sul confine italo-svizzero',
    },
    keyTakeaways: [
      'Il Cervino è una piramide a quattro facce. In tedesco si chiama Matterhorn, in francese Cervin.',
      'La cima è a 4.478 m (14.692 piedi).',
      'Sovrasta Zermatt nel Vallese e Breuil-Cervinia in Valle d’Aosta.',
      'Controlla il punteggio live prima di comprare un biglietto. Il Gornergrat guarda la parete est, il Klein Matterhorn la parete sud.',
    ],
    sections: [
      {
        id: 'what-it-is',
        heading: 'Che cos’è il Cervino?',
        paragraphs: [
          'Il Cervino è una piramide di roccia a quattro facce nelle Alpi Pennine. Da Zermatt la cima sembra una sola punta, da cui il soprannome Toblerone per la parete est.',
          'La montagna ha tre nomi. Tedesco e inglese dicono Matterhorn, italiano Cervino, francese Cervin. È questa cima, non l’attrazione di Disneyland e non un oleodotto.',
        ],
      },
      {
        id: 'where-and-height',
        heading: 'Dove si trova il Cervino e quanto è alto?',
        paragraphs: [
          'La cima misura 4.478 metri, cioè 14.692 piedi. Si trova sul confine tra Svizzera e Italia.',
          'Sul versante svizzero sovrasta Zermatt, nel canton Vallese. Sul versante italiano sovrasta Breuil-Cervinia, in Valle d’Aosta. Le pareti est e nord sono la vista classica dal paese, dal Gornergrat e dal Riffelsee. Le pareti sud e ovest guardano l’Italia e si vedono dal Matterhorn Glacier Paradise.',
        ],
      },
      {
        id: 'how-to-see-it',
        heading: 'Come vedere il Cervino oggi',
        paragraphs: [
          'Il [punteggio di visibilità live](/) si aggiorna ogni 15 minuti. 8–10 significa una piramide libera. 1–2 significa nuvole. Le app meteo del paese leggono Zermatt a 1.608 m e non vedono le nubi intorno alla cima.',
          'Il Gornergrat (3.089 m) mostra la parete est, con il treno a cremagliera. Il Klein Matterhorn (3.883 m) è la funivia verso la parete sud. Il Kirchbrücke in paese è gratuito. Guarda la webcam del Gornergrat e quella del Klein Matterhorn in homepage prima di comprare il biglietto.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Che cos’è il Cervino?',
        answer:
          'Una piramide a quattro facce nelle Alpi Pennine, chiamata Matterhorn in tedesco e Cervin in francese. La cima è a 4.478 m sopra Zermatt.',
      },
      {
        question: 'Dove si trova il Cervino?',
        answer:
          'Sul confine italo-svizzero. Il versante svizzero è sopra Zermatt, nel Vallese. Il versante italiano è sopra Breuil-Cervinia, in Valle d’Aosta.',
      },
      {
        question: 'Quanto è alto il Cervino?',
        answer: '4.478 metri (14.692 piedi).',
      },
    ],
  },
  'zermatt-weather-december': {
    title: 'Meteo di Zermatt a dicembre',
    shortTitle: 'Meteo di dicembre',
    description: 'Dicembre è il mese più limpido a Zermatt, con l’89% di probabilità di vedere il Cervino. Neve, laghi ghiacciati e il controllo di oggi.',
    category: 'Climatologia',
    heroStat: { label: 'Giorni limpidi', value: '89%', detail: 'Il mese più chiaro della serie trentennale' },
    keyTakeaways: [
      'La cima è libera l’89% dei giorni di dicembre. Mattina e pomeriggio restano aperti.',
      'Il paese è sotto la neve e il Riffelsee è ghiacciato.',
      'Controlla il punteggio live prima di un biglietto per il Gornergrat o per lo sci.',
    ],
    sections: [
      {
        id: 'december-clarity',
        heading: 'Meteo di Zermatt a dicembre',
        paragraphs: [
          'Dicembre è il mese più limpido della serie trentennale, con l’89% di probabilità di vedere la cima in un dato giorno. L’aria fredda e stabile non forma quasi cumuli nel pomeriggio.',
          'Il paese è innevato e i laghi sono ghiacciati: un mese per guardare e sciare, non per i riflessi. Per Natale vedi la [guida al Natale a Zermatt](/guides/christmas-in-zermatt-matterhorn).',
          'Il [punteggio live](/) vale per oggi. L’anno è in [meteo di Zermatt per mese](/guides/best-time-to-see-matterhorn).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Che tempo fa a Zermatt a dicembre?',
        answer: 'Freddo e insolitamente limpido. Il Cervino è visibile circa l’89% dei giorni, anche nel pomeriggio.',
      },
      {
        question: 'Il Riffelsee riflette il Cervino a dicembre?',
        answer: 'No. Il lago è ghiacciato e coperto di neve da novembre a inizio giugno.',
      },
    ],
  },
  'zermatt-weather-september': {
    title: 'Meteo di Zermatt a settembre',
    shortTitle: 'Meteo di settembre',
    description: 'A settembre la cima è libera circa il 72% dei giorni. I sentieri sono aperti e il Riffelsee è liquido.',
    category: 'Climatologia',
    heroStat: { label: 'Giorni limpidi', value: '72%', detail: 'Notti fresche, larici d’oro, laghi aperti' },
    keyTakeaways: [
      'Circa il 72% dei giorni di settembre è limpido.',
      'I sentieri sono senza neve e il Riffelsee può riflettere la parete est.',
      'Parti all’alba. Nel primo pomeriggio il vento increspa spesso il lago.',
    ],
    sections: [
      {
        id: 'september-clarity',
        heading: 'Meteo di Zermatt a settembre',
        paragraphs: [
          'A settembre la cima è libera circa il 72% dei giorni. Le notti più fresche spengono le termiche di giugno e luglio, e i larici intorno alla parete est diventano oro.',
          'I sentieri sono ancora senza neve e il Riffelsee è liquido. È il mese del riflesso da Sunnegga o Rotenboden. Parti all’alba.',
          'Controlla il [punteggio live](/) la mattina. L’anno è in [meteo di Zermatt per mese](/guides/best-time-to-see-matterhorn).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Che tempo fa a Zermatt a settembre?',
        answer: 'Limpido circa il 72% dei giorni. Le notti sono abbastanza fresche da frenare i cumuli di piena estate.',
      },
      {
        question: 'Il Riffelsee è liquido a settembre?',
        answer: 'Sì. La finestra del riflesso va da fine giugno a fine ottobre. Settembre ci sta dentro. Vai all’alba.',
      },
    ],
  },
  'zermatt-weather-may': {
    title: 'Meteo di Zermatt a maggio',
    shortTitle: 'Meteo di maggio',
    description: 'A maggio Zermatt è limpida il 48–58% delle mattine. Nel pomeriggio arrivano le nubi e il Riffelsee è ancora ghiacciato.',
    category: 'Climatologia',
    heroStat: { label: 'Giorni limpidi', value: '48–58%', detail: 'Affidabile solo prima di mezzogiorno' },
    keyTakeaways: [
      'Maggio resta nella fascia del 48–58% di giorni limpidi.',
      'La finestra utile è la mattina. Il disgelo alimenta i cumuli.',
      'Il Riffelsee è ancora ghiacciato. Il riflesso aspetta fine giugno.',
    ],
    sections: [
      {
        id: 'may-clarity',
        heading: 'Meteo di Zermatt a maggio',
        paragraphs: [
          'Maggio è un mese di passaggio. La probabilità di cielo sereno è del 48–58%, e la finestra affidabile è la mattina. L’umidità del disgelo alimenta i cumuli nel primo pomeriggio.',
          'Il Riffelsee è ancora ghiacciato. Una mattina limpida serve per il Gornergrat o il ponte del paese; il pomeriggio resta in valle.',
          'Controlla il [punteggio live](/) prima di uscire. Gli altri mesi sono in [meteo di Zermatt per mese](/guides/best-time-to-see-matterhorn).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Che tempo fa a Zermatt a maggio?',
        answer: 'Un mese di spalla. Circa metà dei giorni è limpida al mattino, poi i cumuli salgono nel primo pomeriggio.',
      },
      {
        question: 'Si può fotografare il Riffelsee a maggio?',
        answer: 'Il lago a maggio è ancora ghiacciato. I riflessi liquidi iniziano a fine giugno.',
      },
    ],
  },
  'glacier-express': {
    title: 'Prezzo, percorso e prenotazione del Glacier Express',
    shortTitle: 'Glacier Express',
    description: 'Prezzi, prenotazione obbligatoria del posto, percorso Zermatt–St. Moritz e differenza dal Bernina Express.',
    category: 'Gite di un giorno',
    heroStat: { label: 'Prenotazione', value: 'CHF 39–49', detail: 'Obbligatoria, oltre al biglietto' },
    keyTakeaways: [
      'Sola andata: circa CHF 159 in 2ª classe, CHF 272 in 1ª. La prenotazione si aggiunge.',
      'La prenotazione costa CHF 39 in bassa stagione e CHF 49 in piena estate. Apre 93 giorni prima.',
      'L’Excellence Class aggiunge CHF 470 a un biglietto di 1ª. I posti sono 20.',
      'Il Bernina Express è la stessa famiglia ferroviaria in un’altra valle. Non va a Zermatt.',
    ],
    sections: [
      {
        id: 'glacier-express-price',
        heading: 'Prezzo del Glacier Express',
        paragraphs: [
          'Un adulto in sola andata paga circa CHF 159 in 2ª classe o CHF 272 in 1ª, senza il posto. Swiss Travel Pass ed Eurail coprono il biglietto, non la prenotazione.',
          'L’Excellence Class è una carrozza panoramica da 20 posti in disposizione 1+1. Il supplemento è di CHF 470 su un biglietto di 1ª e include accoglienza e pranzo di cinque portate.',
        ],
      },
      {
        id: 'seat-reservation',
        heading: 'Prenotazione del posto',
        paragraphs: [
          'Ogni passeggero serve una prenotazione: CHF 39 in bassa stagione, CHF 49 in piena estate. La pagano anche i bambini che viaggiano gratis. I posti aprono 93 giorni prima della partenza.',
          'Il treno panoramico si ferma circa da metà ottobre a metà dicembre. I regionali della Matterhorn Gotthard Bahn e della RhB continuano sugli stessi binari, senza prenotazione Glacier Express e senza carrozza ristorante.',
        ],
      },
      {
        id: 'route',
        heading: 'Percorso da Zermatt a St. Moritz',
        paragraphs: [
          'L’intero percorso dura circa otto ore, da Zermatt (1.604 m) a St. Moritz (1.775 m), sul Passo dell’Oberalp a 2.033 m. Alcuni treni proseguono verso Davos. Le gole del Reno e il viadotto della Landwasser a Filisur sono i tratti noti.',
          'Da Zurigo o Ginevra si cambia a Visp sulla Matterhorn Gotthard Bahn per Zermatt, poi si sale sul Glacier Express. Anche i tratti brevi, Zermatt–Briga o Zermatt–Andermatt, richiedono la prenotazione.',
        ],
      },
      {
        id: 'bernina-express',
        heading: 'Glacier Express o Bernina Express',
        paragraphs: [
          'Entrambi sono treni panoramici di RhB e Matterhorn Gotthard Bahn, e non si sostituiscono. Il Glacier Express attraversa le Alpi da Zermatt a St. Moritz. Il Bernina Express va da Coira o St. Moritz sul Passo del Bernina fino a Tirano, in Italia.',
          'Prendi il Glacier Express per il Cervino, l’Oberalp e Zermatt. Prendi il Bernina Express per i ghiacciai del Bernina e la discesa in Italia. St. Moritz è l’unico punto in comune.',
        ],
      },
      {
        id: 'today',
        heading: 'Conviene salire oggi?',
        paragraphs: [
          'La [pagina dei treni](/trains) dice se il Glacier Express segue l’orario di stagione o è in pausa autunnale, più il punteggio del Gornergrat. Un punteggio alto significa Cervino libero a Zermatt. Non descrive il tempo all’Oberalp.',
          'Il Gornergrat è un altro treno: 33 minuti di cremagliera fino a 3.089 m, senza prenotazione obbligatoria. Il confronto è nella [guida Gornergrat contro Glacier Express](/trains).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Quanto costa il Glacier Express?',
        answer: 'Circa CHF 159 in sola andata in 2ª classe o CHF 272 in 1ª, più una prenotazione obbligatoria di CHF 39 o CHF 49. Il Swiss Travel Pass copre il biglietto, non la prenotazione.',
      },
      {
        question: 'Serve prenotare il posto?',
        answer: 'Sì. Senza prenotazione non si sale. Prenota all’apertura, 93 giorni prima. L’Excellence Class costa CHF 470 in più e ha 20 posti.',
      },
      {
        question: 'Qual è il percorso del Glacier Express?',
        answer: 'Zermatt–St. Moritz in circa otto ore, via Visp, Briga, Andermatt e l’Oberalp, alcuni treni verso Davos. Il Bernina Express è un’altra linea, da St. Moritz a Tirano.',
      },
    ],
  },
  'hotels-with-matterhorn-view': {
    title: 'Hotel con vista sul Cervino',
    shortTitle: 'Hotel con vista',
    description: 'Quali camere vedono la parete est, quali stanno sul sentiero del riflesso e quali restano sopra la nebbia di valle.',
    category: 'Punti panoramici',
    heroStat: { label: 'Vista che cade per prima', value: 'Paese', detail: 'Le camere a 1.620 m perdono la cima nella nebbia' },
    keyTakeaways: [
      'Le camere in paese vedono la parete est e perdono la cima per prime quando scende la base delle nubi.',
      'Il Riffelalp Resort è sull’andata al Riffelsee. Sunnegga è una terrazza diurna, non un hotel.',
      'Riffelhaus e Kulmhotel Gornergrat restano sopra la nebbia che nasconde il paese.',
    ],
    sections: [
      {
        id: 'village-east-face',
        heading: 'Parete est dal paese',
        paragraphs: [
          'Le camere in paese guardano la parete est. The Omnia sta sul pendio sopra la chiesa, e il Mont Cervin Palace guarda la cima dal fondo del paese. Entrambi sono a piedi dal Kirchbrücke.',
          'È la vista che sparisce per prima. Un tetto di nubi verso 2.000–2.500 m nasconde la cima in paese mentre il Gornergrat, a 3.089 m, è ancora libero. Controlla il [punteggio live](/) e il [punto di vista del paese](/viewpoints/zermatt-village).',
        ],
      },
      {
        id: 'riffelsee-and-sunnegga',
        heading: 'Sunnegga e Riffelsee',
        paragraphs: [
          'Il riflesso è la parete est nel Riffelsee, cinque minuti sotto Rotenboden, e nello Stellisee sopra Sunnegga. Sunnegga è una terrazza della funicolare per la giornata. Non c’è un hotel sulla riva.',
          'Il Riffelalp Resort 2222 è l’hotel di quel percorso, sulla ferrovia del Gornergrat, sotto Rotenboden, con la parete est davanti. L’acqua riflette solo da fine giugno a ottobre, e solo con vento sotto circa 12 km/h. Il controllo del giorno è la [pagina Riffelsee](/viewpoints/riffelsee). [Sunnegga](/viewpoints/sunnegga) è la terrazza bassa.',
        ],
      },
      {
        id: 'gornergrat-side',
        heading: 'Lato Gornergrat',
        paragraphs: [
          'Due hotel stanno sopra la nebbia che riempie Zermatt. Il Riffelhaus 1853 è a Riffelberg, 2.582 m, una fermata sotto Rotenboden. Il Kulmhotel Gornergrat è alla stazione di vetta, 3.089 m.',
          'Queste camere tengono la parete est quando il paese è nelle nubi, e la perdono quando è coperta la cima stessa. Il punteggio di quella quota è sulla [pagina Gornergrat](/viewpoints/gornergrat).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Quali hotel hanno vista sul Cervino?',
        answer: 'In paese, The Omnia e il Mont Cervin Palace guardano la parete est. Sulla linea, il Riffelalp Resort 2222 vede la stessa cima più vicino al Riffelsee. Riffelhaus 1853 e Kulmhotel Gornergrat sono sopra la nebbia.',
      },
      {
        question: 'Quale vista sparisce per prima?',
        answer: 'Quella del paese. Una base nuvolosa verso 2.000 m nasconde la cima al Kirchbrücke mentre gli hotel del Gornergrat sono ancora sopra.',
      },
    ],
  },
  'christmas-in-zermatt-matterhorn': {
    title: 'Natale a Zermatt: magia invernale, chalet accoglienti e vista sul Cervino',
    shortTitle: 'Guida al Natale a Zermatt',
    description:
      'Tutto sul Natale a Zermatt: chalet innevati da fiaba, 89% di cielo limpido a dicembre, fonduta al camino, slitte e impianti aperti.',
    category: 'Inverno e stagioni',
    heroStat: {
      label: 'Cielo limpido a dicembre',
      value: '89% di limpidezza',
      detail: 'La più alta probabilità mensile di cima libera di tutto l’anno',
    },
    keyTakeaways: [
      'Dicembre ha l’89% di probabilità statistica di cima libera, la più alta dell’anno a Zermatt, grazie all’aria fredda e secca di alta pressione e all’assenza delle termiche estive.',
      'Zermatt è senza auto: a Natale i vicoli si percorrono in taxi elettrico, in slitta con campanelle d’ottone, o a piedi sotto le luminarie.',
      'Le cene della vigilia e di Natale (fonduta svizzera, raclette vallesana e specialità al tartufo nero) si esauriscono mesi prima: prenotate il tavolo a ottobre o novembre.',
      'Il treno a cremagliera del Gornergrat e le funivie del Piccolo Cervino funzionano 365 giorni l’anno: salire a 3.089 m la mattina di Natale è una tradizione alpina.',
    ],
    comparisonTable: {
      caption: 'Escursioni di Natale e momenti dell’inverno a Zermatt',
      headers: [
        'Attività / tradizione',
        'Luogo / percorso',
        'Momento migliore',
        'Perché è magico a Natale',
      ],
      rows: [
        [
          'Passeggiata della vigilia e vin brulé',
          'Bahnhofstrasse e Kirchplatz',
          '17:00–19:30 CET (crepuscolo)',
          'Albero illuminato, cori presso la chiesa di San Maurizio, caldarroste.',
        ],
        [
          'Panorama invernale del Gornergrat',
          'Treno a cremagliera da Zermatt (33 min)',
          '09:00–14:00 CET',
          'Salita tra pini cembri innevati fino a 3.089 m, vista a 360° su 29 quattromila.',
        ],
        [
          'Passeggiata tra i chalet dello Hinterdorf',
          'Dietro l’hotel Monte Rosa',
          'Ora blu (16:30–17:30 CET)',
          'Fienili in larice di 500 anni (Gädi) sotto una coltre spessa di neve fresca.',
        ],
        [
          'Fonduta al camino',
          'Stübli e chalet tradizionali di Zermatt',
          '19:00–22:00 CET',
          'Formaggi AOP del Vallese fusi con aglio e Fendant, accanto al fuoco.',
        ],
        [
          'Palazzo di ghiaccio e sci',
          'Piccolo Cervino (3.883 m)',
          '10:00–14:30 CET',
          'Le piste più alte d’Europa e gallerie di sculture di ghiaccio a 15 m nel ghiacciaio.',
        ],
      ],
    },
    sections: [
      {
        id: 'why-zermatt-christmas-is-magical',
        heading: '1. Perché Zermatt è la meta alpina del Natale per eccellenza',
        image: {
          src: '/guides/zermatt-christmas-chalets.jpg',
          alt: 'Chalet svizzeri in legno a Zermatt sotto una neve invernale spessa, con il Cervino sullo sfondo',
          caption: 'Chalet storici in larice scurito dal sole, coperti di neve fresca di dicembre a Zermatt.',
        },
        paragraphs: [
          'Pochi luoghi incarnano lo spirito fiabesco del Natale come Zermatt. In fondo alla valle, sotto la piramide ripida del Cervino (in tedesco Matterhorn, 4.478 m), questo paese senza auto diventa ogni dicembre una palla di neve viva.',
          'I motori a combustione sono vietati dal 1966. Non c’è rombo di traffico né neve sporca di scarico: solo lo scricchiolio della neve fresca, il ronzio sommesso dei piccoli bus elettrici e il tintinnio delle campanelle d’ottone sulle slitte davanti a hotel storici come il Mont Cervin Palace e il Grand Hotel Zermatterhof.',
          'Lungo la Bahnhofstrasse e sul Kirchplatz, luci dorate avvolgono gli abeti carichi di neve. Le vetrine espongono ornamenti in legno intagliati a mano, cioccolato artigianale e paioli di rame con vin brulé (Glühwein) e caldarroste (marroni).',
        ],
        proTip: {
          label: 'Segreto locale',
          text: 'Entrate nello Hinterdorf, subito dietro la Bahnhofstrasse, al crepuscolo (16:45 CET). I vicoli stretti tra i fienili in larice del XVI secolo, sotto la neve pesante, sembrano un dipinto invernale dell’Ottocento.',
        },
      },
      {
        id: 'december-weather-matterhorn-clarity',
        heading: '2. Meteo di dicembre: perché Natale ha il cielo più limpido dell’anno',
        paragraphs: [
          'Si pensa spesso che l’estate offra il meteo migliore in montagna. Trent’anni di misure alpine svizzere dicono l’opposto. Dicembre è statisticamente il mese più limpido dell’anno a Zermatt, con l’89% di probabilità di cielo sereno sulla cima del Cervino.',
          'In inverno l’atmosfera sopra le Alpi Pennine è dominata da anticicloni continentali freddi, stabili e secchi. A differenza di luglio e agosto, quando il sole di valle crea termiche (venti anabatici) e cumuli fitti entro le 13:00 CET, l’aria di dicembre resta cristallina tutto il giorno. Alle 10:00 CET come alle 15:00 CET il Cervino è inciso su un cielo indaco.',
        ],
        bulletPoints: [
          {
            bold: 'L’aria sotto zero tiene la visibilità nitida:',
            text: 'A dicembre il paese oscilla tra -6 °C e +1 °C, le terrazze di quota (3.089–3.883 m) tra -14 °C e -8 °C. L’aria fredda trattiene poca umidità e la nebbia di vetta sparisce.',
          },
          {
            bold: 'Alpenglow presto (16:30–16:50 CET):',
            text: 'Il sole tramonta presto a fine dicembre: non serve aspettare la sera tardi per fotografare il rosa e il viola sulla parete est del Cervino.',
          },
          {
            bold: 'Controllate la telemetria con il Föhn:',
            text: 'Anche in inverno un fronte di Föhn da sud può portare raffiche oltre 45 km/h sul Piccolo Cervino. Ogni mattina guardate il punteggio di visibilità live da 1 a 10 (AM/PM) prima di salire.',
          },
        ],
      },
      {
        id: 'cozy-dining-fireside-fondue',
        heading: '3. Tavola alpina: fonduta al fuoco, raclette e cene di Natale',
        image: {
          src: '/guides/zermatt-christmas-fondue.jpg',
          alt: 'Pentola di fonduta al formaggio svizzero con pane e vino, di fronte al Cervino innevato',
          caption: 'Niente vale una fonduta vallesana e un bicchiere di Fendant fresco dopo una giornata nella neve.',
        },
        paragraphs: [
          'Dopo una mattina limpida sul Gornergrat o sulle piste verso Cervinia, niente scalda come un caquelon di vera fonduta al formaggio svizzero.',
          'Gli Stübli di Zermatt, tra cui Ferdinand by Cervo, Saycheese!, Chez Vrony e la Schäferstube, fondono formaggi AOP del Vallese con vino bianco secco, aglio e un goccio di Kirsch. Formaggio caldo sulla patata novella (raclette) accanto a un focolare di pietra, mentre fuori nevica in silenzio: è il comfort del Natale.',
        ],
        proTip: {
          label: 'Strategia per la cena di Natale',
          text: 'I tavoli della vigilia (24 dicembre) e di Natale (25 dicembre) si esauriscono settimane o mesi prima. Molti ristoranti propongono un menu festivo. Prenotate già a ottobre o novembre.',
        },
      },
      {
        id: 'christmas-day-mountain-excursions',
        heading: '4. Escursioni del giorno di Natale: Gornergrat e Glacier Paradise',
        image: {
          src: '/guides/zermatt-christmas-morning-train.jpg',
          alt: 'Pendii alpini innevati sopra il paese di Zermatt sotto neve fresca intatta',
          caption: 'Paesaggio invernale: i pendii sopra Zermatt restano aperti il giorno di Natale per la cremagliera e le camminate.',
        },
        paragraphs: [
          'Chi arriva la prima volta si chiede se le ferrovie di montagna circolino il giorno di Natale. La risposta è sì, senza dubbi: il treno a cremagliera del Gornergrat e le funivie del Matterhorn Glacier Paradise funzionano 365 giorni l’anno, se il tempo lo consente.',
          'Salire sul treno riscaldato dalla stazione di Zermatt la mattina di Natale è un viaggio che resta. Il convoglio rosso sale tra larici e pini cembri carichi di neve, sbuca sui campi aperti del Riffelberg (2.582 m) e di Rotenboden (2.815 m) e termina sulla terrazza del Gornergrat (3.089 m). Da lì lo sguardo attraversa le lingue gelate dei ghiacciai del Gorner e del Findel verso le pareti nord ed est del Cervino, ricoperte di neve.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Nevica sempre a Zermatt a Natale?',
        answer:
          'Zermatt è a 1.608 metri e il comprensorio sale fino a 3.883 metri: uno degli innevamenti naturali più affidabili delle Alpi. Un Natale bianco in paese è praticamente sicuro, e le piste d’alta quota restano interamente innevate per tutto dicembre.',
      },
      {
        question: 'Treni di montagna e impianti sono aperti il giorno di Natale a Zermatt?',
        answer:
          'Sì. Gornergrat Bahn, funicolare di Sunnegga e funivie del Matterhorn Glacier Paradise seguono l’orario invernale il 24, 25 e 26 dicembre. La mattina del viaggio controllate il punteggio di visibilità live da 1 a 10 (AM/PM) per essere sicuri che la cima sia libera.',
      },
      {
        question: 'Ristoranti e negozi sono aperti nella settimana di Natale a Zermatt?',
        answer:
          'Sì. Dalla settimana di Natale a Capodanno è l’alta stagione festiva. Alimentari e noleggi sci restano aperti, con orari un po’ ridotti la sera del 24 dicembre e il 25 dicembre. Ristoranti e bar lavorano a pieno regime. La prenotazione è indispensabile per la vigilia e per Natale.',
      },
      {
        question: 'Qual è il modo migliore per vedere il Cervino il giorno di Natale?',
        answer:
          'Prendete il treno a cremagliera del Gornergrat alle 08:24 o alle 09:00 CET dalla stazione di Zermatt. Sedetevi a destra in salita: la parete est innevata resta nel finestrino, nella luce dorata del mattino, per quasi tutta la corsa.',
      },
    ],
  },
  'gornergrat-railway-vs-glacier-express': {
    title:
      'Ferrovia del Gornergrat contro Glacier Express: i due treni di montagna più iconici della Svizzera',
    shortTitle: 'Gornergrat contro Glacier Express',
    description:
      'Confrontate le due ferrovie leggendarie di Zermatt: la cremagliera fino a 3.089 m e il viaggio panoramico di 8 ore del Glacier Express. Swiss Travel Pass, prenotazione del posto, lato migliore e stato live.',
    category: 'Gite di un giorno',
    heroStat: {
      label: 'Tipo di viaggio',
      value: '33 min vs 7h 45m',
      detail: 'Salita verticale in cremagliera (3.089 m) contro 291 km di ferrovia panoramica transalpina',
    },
    keyTakeaways: [
      'La ferrovia del Gornergrat (GGB) è una salita verticale a cremagliera: 33 minuti da Zermatt (1.604 m) fino al crinale a 3.089 m, con la parete est del Cervino in primo piano.',
      'Il Glacier Express (GEX) è un viaggio panoramico transalpino di 8 ore e 291 chilometri, con 291 ponti e 91 gallerie tra Zermatt e St. Moritz.',
      'Le regole del Swiss Travel Pass divergono: sul Gornergrat c’è il 50% di sconto e nessuna prenotazione; il Glacier Express è coperto al 100% ma la prenotazione del posto è OBBLIGATORIA (CHF 39–49).',
      'Non dovete scegliere: i due treni si incontrano uno di fronte all’altro sulla piazza della stazione di Zermatt. Si arriva in Glacier Express e si sale al Gornergrat.',
      'Prima di prenotare, controllate lo [hub live dei treni panoramici e il confronto biglietti](/trains) per i punteggi meteo in vetta, la disposizione delle carrozze e gli orari.',
    ],
    comparisonTable: {
      caption: 'Gornergrat Bahn vs Glacier Express: caratteristiche e biglietti (2026)',
      headers: ['Caratteristica', 'Ferrovia del Gornergrat (GGB)', 'Glacier Express (GEX)'],
      rows: [
        [
          'Scopo principale',
          'Escursione verticale in vetta e punto di vista sul Cervino',
          'Grande viaggio panoramico transalpino',
        ],
        [
          'Percorso e capolinea',
          'Zermatt (1.604 m) ↔ vetta del Gornergrat (3.089 m)',
          'Zermatt (Vallese) ↔ St. Moritz / Davos (Grigioni)',
        ],
        [
          'Durata',
          '33 minuti per tratta',
          '7 ore e 45 minuti (intero percorso di 291 km)',
        ],
        [
          'Binario e trazione',
          'Cremagliera doppia sistema Abt (scartamento metrico, 1.000 mm)',
          'Aderenza e tratti a cremagliera (Matterhorn Gotthard Bahn / RhB)',
        ],
        [
          'Dislivello / punto più alto',
          '+1.485 m (punto più alto: vetta a 3.089 m)',
          'Punto più alto: Passo dell’Oberalp (2.033 m) / punto più basso: Coira (585 m)',
        ],
        [
          'Stagione',
          '365 giorni l’anno (nessuna chiusura stagionale)',
          'Inizio dicembre a fine ottobre (manutenzione da novembre a inizio dicembre)',
        ],
        [
          'Swiss Travel Pass',
          'Sconto del 50% (andata e ritorno CHF 51–66)',
          'Biglietto gratuito al 100% (prenotazione del posto obbligatoria a parte)',
        ],
        [
          'Prenotazione del posto',
          'Non serve (salita libera, pass prioritario facoltativo CHF 7)',
          'OBBLIGATORIA (CHF 39 bassa stagione / CHF 49 piena estate)',
        ],
        [
          'Eurail / Interrail',
          'Nessuno sconto (biglietto intero)',
          'Biglietto gratuito al 100% (prenotazione del posto obbligatoria a parte)',
        ],
        [
          'Lato migliore',
          'Lato destro in salita da Zermatt (vista sul Cervino)',
          'Lato sinistro in partenza da Zermatt verso Disentis / entrambi i lati nella gola del Reno',
        ],
        [
          'Visibilità del Cervino',
          'Vista diretta continua per tutta la corsa e in vetta',
          'Visibile solo in partenza o in arrivo nella valle di Zermatt',
        ],
        [
          'Punti forti',
          'Riflesso del Riffelsee, ghiacciaio del Gorner, 29 quattromila',
          'Viadotto della Landwasser, gola del Reno, lago del Passo dell’Oberalp',
        ],
      ],
    },
    sections: [
      {
        id: 'gornergrat-overview',
        heading: 'Gornergrat Bahn (GGB): la cremagliera a cielo aperto più alta d’Europa',
        image: {
          src: '/guides/gornergrat-bahn-cogwheel-train.jpg',
          alt: 'Treno a cremagliera del Gornergrat in salita sulla rampa alpina verso la vetta, con il Cervino sullo sfondo',
          caption: 'Il treno del Gornergrat sale tra alpeggi e boschi di larice verso la terrazza panoramica a 3.089 metri.',
        },
        paragraphs: [
          'Aperto nel 1898 come prima ferrovia a cremagliera interamente elettrica della Svizzera, il Gornergrat Bahn (GGB) è un capolavoro di ingegneria. In 33 minuti i convogli cremisi e oro superano 1.485 metri di dislivello, da Zermatt (1.604 m) fino al crinale roccioso del Gornergrat (3.089 m).',
          'A differenza dei treni panoramici che scivolano nelle valli, il Gornergrat Bahn è una salita verticale pura. Mentre la cremagliera affronta pendenze del 20%, la parete est del Cervino si apre sempre di più. Le fermate intermedie sono Findelbach (su un viadotto di pietra), Riffelalp (2.211 m), Riffelberg (2.582 m) e Rotenboden (2.815 m), inizio della celebre camminata di 10 minuti fino al Riffelsee, dove il Cervino si specchia nell’acqua alpina.',
          'Al capolinea (3.089 m) si esce direttamente sulla terrazza dello storico 3100 Kulmhotel Gornergrat. Da lì un panorama a 360 gradi comprende il Monte Rosa (4.634 m, la cima più alta della Svizzera), la lingua del ghiacciaio del Gorner e 29 vette sopra i 4.000 metri.',
          'Per pianificare la salita e la nuvolosità in vetta in tempo reale, aprite la [guida del Gornergrat nell’hub dei treni](/trains#gornergrat).',
        ],
        bulletPoints: [
          {
            bold: 'Velocità e durata:',
            text: '33 minuti per tratta su 9,3 km di binario, tutto l’anno, con partenze ogni 24–48 minuti.',
          },
          {
            bold: 'Profilo altimetrico:',
            text: 'Da 1.604 m a Zermatt a 3.089 m sulla vetta del Gornergrat (+1.485 m di dislivello).',
          },
          {
            bold: 'Salita senza prenotazione:',
            text: 'Nessuna prenotazione del posto. Passate il codice QR o lo Swiss Pass ai tornelli e salite.',
          },
          {
            bold: 'Fermate per camminare:',
            text: 'Scendete a Rotenboden per il sentiero del riflesso al Riffelsee, o a Riffelberg per un pranzo alpino di fronte al Cervino.',
          },
        ],
        proTip: {
          label: 'Lato migliore',
          text: 'Sedetevi sempre a DESTRA nel senso di salita partendo da Zermatt. I finestrini di destra mostrano la piramide del Cervino in modo continuo, appena il treno supera il limite del bosco.',
        },
      },
      {
        id: 'glacier-express-overview',
        heading: 'Glacier Express (GEX): "il treno espresso più lento del mondo"',
        image: {
          src: '/guides/glacier-express-panoramic-train.jpg',
          alt: 'Treno panoramico Glacier Express attraverso le Alpi svizzere, con vetrate a cupola sotto un cielo blu',
          caption: 'Il Glacier Express scorre tra le Alpi svizzere, con vetrate panoramiche che salgono fino al soffitto.',
        },
        paragraphs: [
          'Se il Gornergrat Bahn è un ascensore verticale verso il cielo alpino, il Glacier Express è l’odissea lenta e orizzontale lungo la dorsale delle Alpi svizzere. Collega Zermatt, nel Vallese, a St. Moritz, in Engadina, e copre 291 chilometri (181 miglia) in circa 7 ore e 45 minuti.',
          'Lungo il percorso il treno attraversa 291 viadotti, entra in 91 gallerie alpine e sale al Passo dell’Oberalp a 2.033 metri (6.670 piedi), il punto più alto della linea e la sorgente del Reno. Tra i passaggi noti: il viadotto della Landwasser, un ponte di calcare curvo alto 65 metri che si infila dritto in una galleria nella parete, e la gola del Reno (Ruinaulta), spesso chiamata il Grand Canyon svizzero.',
          'Le carrozze sono panoramiche, con grandi vetri curvi che arrivano al soffitto. Un pranzo di tre portate viene cucinato a bordo e servito al posto, mentre il paesaggio scorre.',
          'Disposizione dei posti, menu e come prenotare sono nella [guida al percorso e ai posti del Glacier Express](/trains#glacier-express).',
        ],
        bulletPoints: [
          {
            bold: 'Percorso e durata:',
            text: '291 km tra Zermatt e St. Moritz, circa 7 ore e 45 minuti.',
          },
          {
            bold: 'Opere di ingegneria:',
            text: '291 viadotti in pietra e 91 gallerie, comprese le gallerie elicoidali della linea dell’Albula, patrimonio UNESCO.',
          },
          {
            bold: 'Excellence Class:',
            text: 'Classe di lusso con posto finestrino singolo garantito, concierge dedicato, Glacier Bar privata e menu regionale di cinque portate con abbinamento di vini.',
          },
          {
            bold: 'Chiusura stagionale:',
            text: 'A differenza del Gornergrat, che circola 365 giorni, il Glacier Express si ferma per manutenzione da fine ottobre a metà dicembre.',
          },
        ],
        proTip: {
          label: 'Prenotazione del posto obbligatoria',
          text: 'A differenza dei treni svizzeri ordinari, NON si sale sul Glacier Express senza un posto riservato, nemmeno con uno Swiss Travel Pass di 1ª classe illimitato. La prenotazione apre esattamente 93 giorni prima sul portale ufficiale. Mettete un promemoria: i posti panoramici dei picchi estivi e delle date di sci si esauriscono in poche ore.',
        },
      },
      {
        id: 'pass-rules-pricing',
        heading: 'Prezzo del Glacier Express, prenotazione del posto e Swiss Travel Pass',
        paragraphs: [
          'Molti pensano che uno Swiss Travel Pass permetta di salire gratis su qualsiasi treno in Svizzera. La rete è integrata, ma il Gornergrat Bahn e il Glacier Express rientrano in tariffe del tutto diverse.',
          'Conoscere queste regole prima evita supplementi allo sportello e rifiuti all’imbarco.',
        ],
        bulletPoints: [
          {
            bold: 'Gornergrat Bahn con lo Swiss Travel Pass:',
            text: 'Avete il 50% di sconto sul biglietto adulto standard (il biglietto estivo di andata e ritorno scende da circa CHF 132 a CHF 66; quello invernale da circa CHF 102 a CHF 51). Non è gratis al 100%, perché la linea è classificata come escursione di vetta. Non serve prenotare il posto.',
          },
          {
            bold: 'Gornergrat con la Swiss Half Fare Card:',
            text: 'Lo stesso sconto del 50% dello Swiss Travel Pass. I bambini dai 6 ai 15 anni con Swiss Family Card viaggiano gratis se accompagnati da un genitore pagante.',
          },
          {
            bold: 'Glacier Express con lo Swiss Travel Pass:',
            text: 'Il viaggio è COPERTO al 100% dallo Swiss Travel Pass (e da Eurail / Interrail). Dovete però pagare la prenotazione obbligatoria del posto: CHF 39 in bassa stagione (primavera/autunno) o CHF 49 in piena estate e in inverno. Senza la ricevuta della prenotazione l’accesso è rifiutato.',
          },
          {
            bold: 'Supplemento Excellence Class del Glacier Express:',
            text: 'Serve un biglietto di 1ª classe valido (o uno Swiss Travel Pass di 1ª classe) più un supplemento Excellence Class non scontabile di CHF 470 a persona.',
          },
        ],
        proTip: {
          label: 'Confronto live di biglietti e pass',
          text: 'Confrontate tariffe, regole per i bambini e per i cani sulla [pagina di confronto dei treni di montagna svizzeri](/trains).',
        },
      },
      {
        id: 'which-train-to-choose',
        heading: 'Quale treno prendere, o come combinare i due',
        paragraphs: [
          'Entrambi i treni partono dalla stessa piazza della stazione di Zermatt, uno di fronte all’altro. Si completano. Quale privilegiare dipende dalla durata del soggiorno e da ciò che volete vedere:',
          '1. Se avete solo uno o due giorni a Zermatt: prendete il Gornergrat Bahn. L’obiettivo è vedere e fotografare il Cervino, camminare fino al riflesso del Riffelsee e arrivare a 3.089 metri. In poco più di mezz’ora il Gornergrat vi mette davanti alla montagna.',
          '2. Se viaggiate tra la Svizzera orientale e Zermatt: prendete il Glacier Express come trasferimento panoramico. Invece dei regionali attraverso la lunga galleria di base del Lötschberg, la giornata di viaggio diventa l’escursione.',
          '3. L’itinerario alpino di 48 ore: arrivate a Zermatt con il Glacier Express nel tardo pomeriggio, di fronte alle pareti del Mattertal. Dopo la fonduta in paese, prendete il primo Gornergrat alle 08:00 per la luce dorata sul ghiacciaio del Gorner e sul Cervino.',
          'Prima di prenotare, guardate i punteggi meteo live e le alternative sul [cruscotto di visibilità del Cervino](/).',
        ],
      },
      {
        id: 'live-tracking-and-weather',
        heading: 'Meteo di vetta in diretta, e perché l’orario della corsa conta',
        paragraphs: [
          'Una differenza di fondo tra i due viaggi è la dipendenza dal meteo. Il Glacier Express corre soprattutto in valli profonde e su passi. Anche con cielo coperto o pioggia leggera, gole, cascate e pareti di calcare restano spettacolari.',
          'Il Gornergrat Bahn è invece una salita a cielo aperto fino alla vetta. Se uno strato basso o una nube a bandiera di Föhn da sud avvolge il crinale a 3.089 m, la visibilità dalla terrazza può cadere a zero e nascondere sia il Cervino sia il ghiacciaio del Gorner.',
          'I biglietti del Gornergrat valgono per qualsiasi treno del giorno scelto. Non comprateli giorni prima senza verificare la vetta. Prima di salire, controllate il [punteggio di visibilità del Gornergrat sul monitoraggio dei treni](/trains): nubi d’alta quota, webcam di vetta e il taglio del vento danno un punteggio da 1 a 10, Go o No-Go.',
        ],
        proTip: {
          label: 'Inversione e mare di nubi',
          text: 'In tardo autunno e in inverno Zermatt può restare sotto una nebbia fitta (Nebeldecke) mentre il Gornergrat, a 3.089 m, è in cielo blu sopra un mare di nubi. Guardate le webcam d’alta quota prima di concludere che un paese grigio significhi brutto tempo in vetta.',
        },
      },
    ],
    faqs: [
      {
        question: 'Gornergrat Bahn e Glacier Express partono dalla stessa stazione a Zermatt?',
        answer:
          'Sì, a circa 50 metri l’uno dall’altro, alla stazione di Zermatt. Il Glacier Express arriva e parte sui binari principali della Matterhorn Gotthard Bahn (MGB) / FFS. Il Gornergrat Bahn ha un proprio edificio storico, subito di fronte, dall’altra parte della piazza.',
      },
      {
        question: 'Il Gornergrat Bahn è gratuito al 100% con lo Swiss Travel Pass?',
        answer:
          'No. È classificato come ferrovia di escursione in alta quota: lo Swiss Travel Pass dà il 50% di sconto, non la gratuità. Nel 2026 un biglietto di andata e ritorno per un adulto costa circa CHF 66 in estate e CHF 51 in inverno con il pass.',
      },
      {
        question: 'Posso fare solo un tratto del Glacier Express invece delle 8 ore intere?',
        answer:
          'Sì. I tratti brevi più scelti sono Zermatt–Briga (1 h 20), Zermatt–Andermatt (3 h 15) e Coira–St. Moritz sul viadotto della Landwasser (2 h). La prenotazione del posto è obbligatoria su tutti i segmenti.',
      },
      {
        question: 'Quale lato del treno ha la vista migliore sul Gornergrat Bahn?',
        answer:
          'Sedetevi sempre a destra salendo da Zermatt al Gornergrat, e a sinistra scendendo. I finestrini di destra guardano il Cervino per quasi tutta la salita di 33 minuti.',
      },
      {
        question: 'Cosa succede se ho un biglietto del Gornergrat e il Cervino è nelle nubi?',
        answer:
          'I biglietti standard del Gornergrat Bahn valgono per qualsiasi treno del giorno di calendario scelto, ma di regola non sono rimborsabili una volta attivati. Per evitare la delusione, controllate il punteggio di visibilità live da 1 a 10 (AM/PM) e le webcam di vetta sul [cruscotto dei treni](/trains) prima di comprare allo sportello.',
      },
    ],
  },
};
