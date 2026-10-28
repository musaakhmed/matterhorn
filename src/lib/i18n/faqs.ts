import { Locale } from './config';
import { VisibilityApiResponse, VisibilityStatus } from '../types';

export interface LocalizedFaq {
  question: string;
  answer: string;
  guideHref?: string;
  guideLabel?: string;
}

const STATUS: Record<Locale, Record<VisibilityStatus, string>> = {
  en: {
    Visible: 'Visible',
    'Partially Visible': 'Partially Visible',
    'Barely Visible': 'Barely Visible',
    'Not Visible': 'Not Visible',
  },
  de: {
    Visible: 'Sichtbar',
    'Partially Visible': 'Teilweise sichtbar',
    'Barely Visible': 'Kaum sichtbar',
    'Not Visible': 'Nicht sichtbar',
  },
  fr: {
    Visible: 'Visible',
    'Partially Visible': 'Partiellement visible',
    'Barely Visible': 'À peine visible',
    'Not Visible': 'Invisible',
  },
  it: {
    Visible: 'Visibile',
    'Partially Visible': 'Parzialmente visibile',
    'Barely Visible': 'Appena visibile',
    'Not Visible': 'Non visibile',
  },
  es: {
    Visible: 'Visible',
    'Partially Visible': 'Parcialmente visible',
    'Barely Visible': 'Apenas visible',
    'Not Visible': 'No visible',
  },
  pt: {
    Visible: 'Visível',
    'Partially Visible': 'Parcialmente visível',
    'Barely Visible': 'Mal visível',
    'Not Visible': 'Não visível',
  },
  zh: {
    Visible: '清晰可见',
    'Partially Visible': '部分可见',
    'Barely Visible': '勉强可见',
    'Not Visible': '不可见',
  },
  'zh-tw': {
    Visible: '清晰可見',
    'Partially Visible': '部分可見',
    'Barely Visible': '勉強可見',
    'Not Visible': '不可見',
  },
  ja: {
    Visible: 'よく見える',
    'Partially Visible': '一部見える',
    'Barely Visible': 'ほとんど見えない',
    'Not Visible': '見えない',
  },
  ko: {
    Visible: '잘 보임',
    'Partially Visible': '일부 보임',
    'Barely Visible': '거의 안 보임',
    'Not Visible': '안 보임',
  },
};

function statusLabel(locale: Locale, status: string): string {
  const table = STATUS[locale] ?? STATUS.en;
  return table[status as VisibilityStatus] ?? status;
}

/** Live sentence prepended to the first homepage FAQ when telemetry is present. */
export function liveVisibilityPrefix(
  locale: Locale,
  data?: VisibilityApiResponse
): string {
  const gornergrat = data?.viewpoints.gornergrat;
  const glacier = data?.viewpoints['glacier-paradise'];
  if (!data || !gornergrat || !glacier) return '';

  const time = data.swissTimeFormatted;
  const g = gornergrat.currentScore;
  const gs = statusLabel(locale, gornergrat.currentStatus);
  const gam = gornergrat.today.morning.score;
  const gpm = gornergrat.today.afternoon.score;
  const c = glacier.currentScore;
  const cs = statusLabel(locale, glacier.currentStatus);
  const cam = glacier.today.morning.score;
  const cpm = glacier.today.afternoon.score;

  switch (locale) {
    case 'de':
      return `Gerade jetzt (${time}) liegt der Gornergrat (3.089 m, Ostwand) bei ${g}/10 (${gs} — Vormittag: ${gam}/10, Nachmittag: ${gpm}/10) und das Matterhorn Glacier Paradise (3.883 m, Südwand) bei ${c}/10 (${cs} — Vormittag: ${cam}/10, Nachmittag: ${cpm}/10). `;
    case 'fr':
      return `En ce moment (${time}), le Gornergrat (3 089 m, face est) est à ${g}/10 (${gs} — matin : ${gam}/10, après-midi : ${gpm}/10) et le Matterhorn Glacier Paradise (3 883 m, face sud) à ${c}/10 (${cs} — matin : ${cam}/10, après-midi : ${cpm}/10). `;
    case 'it':
      return `Adesso (${time}) il Gornergrat (3.089 m, parete est) è a ${g}/10 (${gs} — mattina: ${gam}/10, pomeriggio: ${gpm}/10) e il Matterhorn Glacier Paradise (3.883 m, parete sud) a ${c}/10 (${cs} — mattina: ${cam}/10, pomeriggio: ${cpm}/10). `;
    case 'es':
      return `Ahora mismo (${time}), Gornergrat (3.089 m, cara este) marca ${g}/10 (${gs} — mañana: ${gam}/10, tarde: ${gpm}/10) y Matterhorn Glacier Paradise (3.883 m, cara sur) marca ${c}/10 (${cs} — mañana: ${cam}/10, tarde: ${cpm}/10). `;
    case 'pt':
      return `Neste momento (${time}), o Gornergrat (3.089 m, face este) está em ${g}/10 (${gs} — manhã: ${gam}/10, tarde: ${gpm}/10) e o Matterhorn Glacier Paradise (3.883 m, face sul) em ${c}/10 (${cs} — manhã: ${cam}/10, tarde: ${cpm}/10). `;
    case 'zh':
      return `此刻（${time}），戈尔内格拉特（3,089米，东壁）为 ${g}/10（${gs} — 上午 ${gam}/10，下午 ${gpm}/10），马特洪峰冰川天堂（3,883米，南壁）为 ${c}/10（${cs} — 上午 ${cam}/10，下午 ${cpm}/10）。`;
    case 'zh-tw':
      return `此刻（${time}），高納葛拉特（3,089公尺，東壁）為 ${g}/10（${gs} — 上午 ${gam}/10，下午 ${gpm}/10），馬特洪峰冰川天堂（3,883公尺，南壁）為 ${c}/10（${cs} — 上午 ${cam}/10，下午 ${cpm}/10）。`;
    case 'ja':
      return `ただ今（${time}）、ゴルナーグラート（3,089m・東壁）は ${g}/10（${gs} — 午前 ${gam}/10、午後 ${gpm}/10）、マッターホルン・グレイシャー・パラダイス（3,883m・南壁）は ${c}/10（${cs} — 午前 ${cam}/10、午後 ${cpm}/10）です。`;
    case 'ko':
      return `지금 (${time}) 고르너그라트(3,089m, 동벽)는 ${g}/10 (${gs} — 오전 ${gam}/10, 오후 ${gpm}/10), 마터호른 글래시어 파라다이스(3,883m, 남벽)는 ${c}/10 (${cs} — 오전 ${cam}/10, 오후 ${cpm}/10)입니다. `;
    default:
      return `Right now (${time}), Gornergrat (3,089m East Face) scores ${g}/10 (${gs} — Morning AM: ${gam}/10, Afternoon PM: ${gpm}/10) and Matterhorn Glacier Paradise (3,883m South Face) scores ${c}/10 (${cs} — Morning AM: ${cam}/10, Afternoon PM: ${cpm}/10). `;
  }
}

const HOME: Record<Locale, LocalizedFaq[]> = {
  en: [
    {
      question: 'Is the Matterhorn visible today in Zermatt?',
      answer:
        'Our high-altitude telemetry engine updates every 15 minutes across both Gornergrat (3,089m) and Matterhorn Glacier Paradise (3,883m). A visibility index of 8–10/10 indicates crystal-clear, unobstructed views of the 4,478m pyramid; 6–7/10 means partially visible with light ridge or banner clouds; 3–5/10 indicates barely visible conditions; and 1–2/10 means the summit is completely socked in.',
      guideHref: '/guides/gornergrat-vs-glacier-paradise',
      guideLabel: 'Compare Gornergrat vs. Glacier Paradise viewpoints',
    },
    {
      question: 'What is the best time of day to see the Matterhorn clearly?',
      answer:
        'The Morning (AM) window between 06:00 and 11:00 CET is statistically clearer than the Afternoon (PM) window (12:00–18:00 CET) 78% of the year. Solar heating of the dark Mattertal valley walls triggers rising thermal updrafts by late morning, which condense into cumulus cloud bands around 3,000–4,000 meters after noon. Always target the first cogwheel train or gondola departure.',
      guideHref: '/guides/best-time-to-see-matterhorn',
      guideLabel: 'Read the 30-year morning vs. afternoon climatology guide',
    },
    {
      question:
        'Which viewpoint has better Matterhorn visibility: Gornergrat (3,089m) or Matterhorn Glacier Paradise (3,883m)?',
      answer:
        'Gornergrat (3,089m) offers the iconic East/Northeast "Toblerone" pyramid silhouette, Riffelsee lake reflections, and a wind-resilient cogwheel train. Matterhorn Glacier Paradise (3,883m) views the broader Southern/Italian face and sits nearly 800 meters higher—making it superior during winter low-cloud valley inversions (under 3,200m), though its aerial cableways close earlier during southerly Föhn gales (over 50 km/h).',
      guideHref: '/guides/gornergrat-vs-glacier-paradise',
      guideLabel: 'Full Gornergrat vs. Glacier Paradise comparison',
    },
    {
      question: 'What are the best months of the year to see the Matterhorn without clouds?',
      answer:
        'Based on 30-year Zermatt climatology, December (89%) and January (88%) deliver the highest daily clear-sky probability thanks to cold, stable winter air with minimal thermal convection. For snow-free hiking and alpine lake reflections, September (72%) and October (79%) offer the best balance. June (48%) and July (52%) record the lowest full-day visibility due to afternoon convective cloud buildup.',
      guideHref: '/guides/best-time-to-see-matterhorn',
      guideLabel: 'Explore month-by-month visibility probabilities',
    },
    {
      question: 'Why does the Matterhorn have a cloud on top even when Zermatt village is sunny?',
      answer:
        'The Matterhorn’s isolated four-sided pyramid (4,478m) acts like an aerodynamic barrier. Moist air drawn up the lee side cools and condenses into a stationary banner cloud on the peak—especially when southerly Föhn winds (150°–210°, above 30 km/h) push moisture across the Italian ridge.',
      guideHref: '/guides/matterhorn-banner-cloud-fohn-wind',
      guideLabel: 'How banner clouds and Föhn wind scoring work',
    },
    {
      question: 'Where is the live Zermatt webcam of the Matterhorn?',
      answer:
        'The homepage plays four Roundshot feeds: Gornergrat (3,089m), Rothorn, Trockener Steg toward Klein Matterhorn, and Zermatt village at Kirchbrücke. Each frame refreshes every 10–15 minutes beside the live visibility score.',
      guideHref: '/viewpoints/gornergrat',
      guideLabel: 'Gornergrat webcam and weather',
    },
    {
      question:
        'Are Gornergrat or Glacier Paradise tickets refundable if the Matterhorn is hidden in clouds?',
      answer:
        'No. Zermatt Bergbahnen and the Gornergrat Bahn do not refund cloud cover or zero summit visibility once a ticket is purchased, and standard daily passes do not sell out in advance. Check the live 1–10 AM/PM score and the four webcams on the morning you travel before spending CHF 100+ per person.',
      guideHref: '/guides/zermatt-cloudy-rainy-day-guide',
      guideLabel: 'What to do in Zermatt on a cloudy or rainy day',
    },
  ],
  de: [
    {
      question: 'Ist das Matterhorn heute in Zermatt sichtbar?',
      answer:
        'Die Höhen-Telemetrie aktualisiert sich alle 15 Minuten für den Gornergrat (3.089 m) und das Matterhorn Glacier Paradise (3.883 m). 8–10/10 bedeutet eine freie Sicht auf die 4.478 m hohe Pyramide, 6–7/10 eine teilweise Sicht mit leichter Grat- oder Fahnenwolke, 3–5/10 kaum sichtbar, und 1–2/10 einen vollständig verhüllten Gipfel.',
      guideHref: '/guides/gornergrat-vs-glacier-paradise',
      guideLabel: 'Gornergrat und Glacier Paradise vergleichen',
    },
    {
      question: 'Wann am Tag sieht man das Matterhorn am klarsten?',
      answer:
        'Das Vormittagsfenster von 06:00 bis 11:00 Uhr MEZ ist an 78 % der Tage klarer als der Nachmittag (12:00–18:00 Uhr). Die Sonne erwärmt die dunklen Hänge des Mattertals, und ab dem späten Vormittag steigen Thermikwolken auf 3.000–4.000 m auf. Nehmen Sie die erste Zahnradbahn oder Gondel.',
      guideHref: '/guides/best-time-to-see-matterhorn',
      guideLabel: 'Klimatologie: Vormittag gegen Nachmittag',
    },
    {
      question:
        'Wo ist die Sicht besser: Gornergrat (3.089 m) oder Matterhorn Glacier Paradise (3.883 m)?',
      answer:
        'Der Gornergrat zeigt die ikonische Ost-/Nordost-Silhouette, den Riffelsee und eine windstabile Zahnradbahn. Glacier Paradise liegt fast 800 m höher und blickt auf die Süd-/Italienseite — besser bei winterlicher Inversion unter 3.200 m, aber die Seilbahnen schliessen früher bei Südföhn über 50 km/h.',
      guideHref: '/guides/gornergrat-vs-glacier-paradise',
      guideLabel: 'Voller Vergleich Gornergrat gegen Glacier Paradise',
    },
    {
      question: 'In welchen Monaten ist das Matterhorn am häufigsten wolkenfrei?',
      answer:
        'Im 30-Jahres-Mittel sind Dezember (89 %) und Januar (88 %) die klarsten Monate, weil kalte, stabile Winterluft kaum Thermik erzeugt. Für schneefreie Wanderungen und Seespiegelungen eignen sich September (72 %) und Oktober (79 %). Juni (48 %) und Juli (52 %) haben die niedrigste Ganztagessicht wegen nachmittäglicher Quellwolken.',
      guideHref: '/guides/best-time-to-see-matterhorn',
      guideLabel: 'Sichtwahrscheinlichkeit Monat für Monat',
    },
    {
      question: 'Warum hängt eine Wolke am Matterhorn, obwohl Zermatt sonnig ist?',
      answer:
        'Die freistehende Pyramide (4.478 m) staut den Höhenwind. Feuchte Luft steigt auf der Leeseite auf, kühlt ab und kondensiert zu einer stationären Fahnenwolke — besonders bei Südföhn (150°–210°, über 30 km/h) über den italienischen Grat.',
      guideHref: '/guides/matterhorn-banner-cloud-fohn-wind',
      guideLabel: 'Fahnenwolke und Föhn erklärt',
    },
    {
      question: 'Wo ist die Live-Webcam des Matterhorns in Zermatt?',
      answer:
        'Die Startseite zeigt vier Roundshot-Bilder: Gornergrat (3.089 m), Rothorn, Trockener Steg Richtung Klein Matterhorn und das Dorf an der Kirchbrücke. Jedes Bild aktualisiert sich alle 10–15 Minuten neben dem Live-Score.',
      guideHref: '/viewpoints/gornergrat',
      guideLabel: 'Gornergrat-Webcam und Wetter',
    },
    {
      question:
        'Gibt es das Ticket zurück, wenn das Matterhorn in Wolken steckt?',
      answer:
        'Nein. Zermatt Bergbahnen und die Gornergrat Bahn erstatten keine Tickets wegen Wolken oder fehlender Gipfelsicht, und Tageskarten sind im Voraus nicht ausverkauft. Prüfen Sie am Morgen den Live-Score 1–10 und die vier Webcams, bevor Sie über CHF 100 pro Person ausgeben.',
      guideHref: '/guides/zermatt-cloudy-rainy-day-guide',
      guideLabel: 'Was tun in Zermatt bei Wolken oder Regen',
    },
  ],
  fr: [
    {
      question: 'Le Cervin est-il visible aujourd’hui à Zermatt ?',
      answer:
        'La télémétrie d’altitude se met à jour toutes les 15 minutes au Gornergrat (3 089 m) et au Matterhorn Glacier Paradise (3 883 m). 8–10/10 signifie une pyramide de 4 478 m dégagée, 6–7/10 une vue partielle avec un peu de nuage de crête, 3–5/10 une vue à peine visible, et 1–2/10 un sommet complètement bouché.',
      guideHref: '/guides/gornergrat-vs-glacier-paradise',
      guideLabel: 'Comparer Gornergrat et Glacier Paradise',
    },
    {
      question: 'Quel est le meilleur moment de la journée pour voir le Cervin ?',
      answer:
        'La fenêtre du matin, de 06:00 à 11:00 CET, est statistiquement plus claire que l’après-midi (12:00–18:00) 78 % de l’année. Le soleil chauffe les parois sombres du Mattertal et des cumulus se forment vers 3 000–4 000 m après midi. Prenez le premier train à crémaillère ou la première télécabine.',
      guideHref: '/guides/best-time-to-see-matterhorn',
      guideLabel: 'Climatologie matin contre après-midi sur 30 ans',
    },
    {
      question:
        'Quel belvédère voit mieux le Cervin : Gornergrat (3 089 m) ou Glacier Paradise (3 883 m) ?',
      answer:
        'Le Gornergrat offre la silhouette est/nord-est dite Toblerone, le reflet du Riffelsee et un train à crémaillère stable au vent. Glacier Paradise, près de 800 m plus haut, regarde la face sud italienne : meilleur sous une inversion hivernale sous 3 200 m, mais ses téléphériques ferment plus tôt par Foehn de sud au-delà de 50 km/h.',
      guideHref: '/guides/gornergrat-vs-glacier-paradise',
      guideLabel: 'Comparaison complète Gornergrat / Glacier Paradise',
    },
    {
      question: 'Quels mois offrent le Cervin le plus souvent sans nuages ?',
      answer:
        'Sur 30 ans, décembre (89 %) et janvier (88 %) sont les plus clairs grâce à l’air froid et stable. Pour la randonnée sans neige et les reflets de lacs, septembre (72 %) et octobre (79 %) sont le meilleur compromis. Juin (48 %) et juillet (52 %) ont la plus faible visibilité sur la journée à cause des cumulus d’après-midi.',
      guideHref: '/guides/best-time-to-see-matterhorn',
      guideLabel: 'Probabilités de ciel clair mois par mois',
    },
    {
      question: 'Pourquoi un nuage coiffe le Cervin alors que Zermatt est au soleil ?',
      answer:
        'La pyramide isolée (4 478 m) barre le vent d’altitude. L’air humide soulevé sous le vent se refroidit et forme un nuage-bannière stationnaire, surtout par Foehn de sud (150°–210°, plus de 30 km/h) franchissant la crête italienne.',
      guideHref: '/guides/matterhorn-banner-cloud-fohn-wind',
      guideLabel: 'Nuage-bannière et vent de Foehn',
    },
    {
      question: 'Où est la webcam en direct du Cervin à Zermatt ?',
      answer:
        'La page d’accueil diffuse quatre flux Roundshot : Gornergrat (3 089 m), Rothorn, Trockener Steg vers le Klein Matterhorn, et le village au Kirchbrücke. Chaque image se rafraîchit toutes les 10 à 15 minutes à côté du score.',
      guideHref: '/viewpoints/gornergrat',
      guideLabel: 'Webcam et météo du Gornergrat',
    },
    {
      question:
        'Les billets Gornergrat ou Glacier Paradise sont-ils remboursés si le Cervin est dans les nuages ?',
      answer:
        'Non. Zermatt Bergbahnen et le Gornergrat Bahn ne remboursent ni les nuages ni une visibilité nulle une fois le billet acheté, et les forfaits journaliers ne sont pas épuisés à l’avance. Vérifiez le score 1–10 et les quatre webcams le matin même avant de dépenser plus de 100 CHF par personne.',
      guideHref: '/guides/zermatt-cloudy-rainy-day-guide',
      guideLabel: 'Que faire à Zermatt par temps couvert ou pluvieux',
    },
  ],
  it: [
    {
      question: 'Il Cervino è visibile oggi a Zermatt?',
      answer:
        'La telemetria d’alta quota si aggiorna ogni 15 minuti al Gornergrat (3.089 m) e al Matterhorn Glacier Paradise (3.883 m). 8–10/10 significa una piramide di 4.478 m libera, 6–7/10 una vista parziale con nubi di cresta, 3–5/10 appena visibile, e 1–2/10 una vetta completamente coperta.',
      guideHref: '/guides/gornergrat-vs-glacier-paradise',
      guideLabel: 'Confronta Gornergrat e Glacier Paradise',
    },
    {
      question: 'Qual è l’ora migliore per vedere il Cervino?',
      answer:
        'La finestra del mattino, dalle 06:00 alle 11:00 CET, è statisticamente più limpida del pomeriggio (12:00–18:00) nel 78 % dell’anno. Il sole scalda le pareti scure del Mattertal e dopo mezzogiorno si formano cumuli tra 3.000 e 4.000 m. Prendi il primo treno a cremagliera o la prima funivia.',
      guideHref: '/guides/best-time-to-see-matterhorn',
      guideLabel: 'Climatologia mattina contro pomeriggio',
    },
    {
      question:
        'Da dove si vede meglio il Cervino: Gornergrat (3.089 m) o Glacier Paradise (3.883 m)?',
      answer:
        'Il Gornergrat offre la sagoma est/nord-est, il riflesso del Riffelsee e un treno stabile al vento. Glacier Paradise è quasi 800 m più in alto e guarda la parete sud italiana: meglio con un’inversione invernale sotto i 3.200 m, ma le funivie chiudono prima con Föhn da sud oltre 50 km/h.',
      guideHref: '/guides/gornergrat-vs-glacier-paradise',
      guideLabel: 'Confronto completo Gornergrat / Glacier Paradise',
    },
    {
      question: 'In quali mesi il Cervino è più spesso senza nuvole?',
      answer:
        'Su 30 anni, dicembre (89 %) e gennaio (88 %) sono i mesi più limpidi grazie all’aria fredda e stabile. Per i sentieri senza neve e i riflessi nei laghi, settembre (72 %) e ottobre (79 %) sono il miglior equilibrio. Giugno (48 %) e luglio (52 %) hanno la visibilità giornaliera più bassa per i cumuli pomeridiani.',
      guideHref: '/guides/best-time-to-see-matterhorn',
      guideLabel: 'Probabilità di cielo sereno mese per mese',
    },
    {
      question: 'Perché c’è una nuvola sul Cervino anche se Zermatt è al sole?',
      answer:
        'La piramide isolata (4.478 m) ostacola il vento in quota. L’aria umida risale sul versante sottovento, si raffredda e condensa in una nuvola a bandiera ferma sulla cima, soprattutto con Föhn da sud (150°–210°, oltre 30 km/h).',
      guideHref: '/guides/matterhorn-banner-cloud-fohn-wind',
      guideLabel: 'Nuvola a bandiera e vento di Föhn',
    },
    {
      question: 'Dov’è la webcam live del Cervino a Zermatt?',
      answer:
        'La homepage mostra quattro flussi Roundshot: Gornergrat (3.089 m), Rothorn, Trockener Steg verso il Klein Matterhorn e il paese al Kirchbrücke. Ogni fotogramma si aggiorna ogni 10–15 minuti accanto al punteggio.',
      guideHref: '/viewpoints/gornergrat',
      guideLabel: 'Webcam e meteo del Gornergrat',
    },
    {
      question:
        'I biglietti di Gornergrat o Glacier Paradise si rimborsano se il Cervino è nelle nuvole?',
      answer:
        'No. Zermatt Bergbahnen e la Gornergrat Bahn non rimborsano nuvole o visibilità zero dopo l’acquisto, e i giornalieri non vanno esauriti in anticipo. Controlla il punteggio 1–10 e le quattro webcam la mattina stessa prima di spendere più di 100 CHF a persona.',
      guideHref: '/guides/zermatt-cloudy-rainy-day-guide',
      guideLabel: 'Cosa fare a Zermatt con nuvole o pioggia',
    },
  ],
  es: [
    {
      question: '¿Se ve el Cervino hoy en Zermatt?',
      answer:
        'La telemetría de altura se actualiza cada 15 minutos en Gornergrat (3.089 m) y en Matterhorn Glacier Paradise (3.883 m). 8–10/10 es una pirámide de 4.478 m despejada, 6–7/10 una vista parcial con nubes de cresta, 3–5/10 apenas visible, y 1–2/10 una cumbre totalmente cubierta.',
      guideHref: '/guides/gornergrat-vs-glacier-paradise',
      guideLabel: 'Comparar Gornergrat y Glacier Paradise',
    },
    {
      question: '¿Cuál es la mejor hora del día para ver el Cervino?',
      answer:
        'La ventana de la mañana, de 06:00 a 11:00 CET, es estadísticamente más clara que la tarde (12:00–18:00) el 78 % del año. El sol calienta las laderas oscuras del Mattertal y después del mediodía se forman cúmulos entre 3.000 y 4.000 m. Suba en el primer tren cremallera o el primer teleférico.',
      guideHref: '/guides/best-time-to-see-matterhorn',
      guideLabel: 'Climatología de mañana frente a tarde',
    },
    {
      question:
        '¿Desde dónde se ve mejor el Cervino: Gornergrat (3.089 m) o Glacier Paradise (3.883 m)?',
      answer:
        'Gornergrat ofrece la silueta este/noreste, el reflejo del Riffelsee y un tren cremallera estable al viento. Glacier Paradise está casi 800 m más alto y mira la cara sur italiana: mejor con una inversión invernal por debajo de 3.200 m, aunque sus teleféricos cierran antes con Föhn del sur por encima de 50 km/h.',
      guideHref: '/guides/gornergrat-vs-glacier-paradise',
      guideLabel: 'Comparación completa Gornergrat / Glacier Paradise',
    },
    {
      question: '¿En qué meses se ve el Cervino más a menudo sin nubes?',
      answer:
        'En 30 años, diciembre (89 %) y enero (88 %) son los meses más despejados por el aire frío y estable. Para senderismo sin nieve y reflejos en lagos, septiembre (72 %) y octubre (79 %) equilibran mejor. Junio (48 %) y julio (52 %) tienen la visibilidad diaria más baja por los cúmulos de la tarde.',
      guideHref: '/guides/best-time-to-see-matterhorn',
      guideLabel: 'Probabilidad de cielo despejado por mes',
    },
    {
      question: '¿Por qué hay una nube en el Cervino si Zermatt está soleado?',
      answer:
        'La pirámide aislada (4.478 m) frena el viento de altura. El aire húmedo asciende a sotavento, se enfría y condensa en una nube bandera quieta sobre la cima, sobre todo con Föhn del sur (150°–210°, más de 30 km/h).',
      guideHref: '/guides/matterhorn-banner-cloud-fohn-wind',
      guideLabel: 'Nube bandera y viento Föhn',
    },
    {
      question: '¿Dónde está la webcam en directo del Cervino en Zermatt?',
      answer:
        'La portada muestra cuatro cámaras Roundshot: Gornergrat (3.089 m), Rothorn, Trockener Steg hacia el Klein Matterhorn y el pueblo en el Kirchbrücke. Cada imagen se renueva cada 10–15 minutos junto a la puntuación.',
      guideHref: '/viewpoints/gornergrat',
      guideLabel: 'Webcam y tiempo del Gornergrat',
    },
    {
      question:
        '¿Devuelven el billete de Gornergrat o Glacier Paradise si el Cervino está entre nubes?',
      answer:
        'No. Zermatt Bergbahnen y el Gornergrat Bahn no reembolsan nubes ni visibilidad nula una vez comprado el billete, y los pases diarios no se agotan por adelantado. Mire la puntuación 1–10 y las cuatro webcams esa misma mañana antes de gastar más de 100 CHF por persona.',
      guideHref: '/guides/zermatt-cloudy-rainy-day-guide',
      guideLabel: 'Qué hacer en Zermatt con nubes o lluvia',
    },
  ],
  pt: [
    {
      question: 'O Matterhorn está visível hoje em Zermatt?',
      answer:
        'A telemetria de altitude atualiza-se a cada 15 minutos no Gornergrat (3.089 m) e no Matterhorn Glacier Paradise (3.883 m). 8–10/10 é uma pirâmide de 4.478 m limpa, 6–7/10 uma vista parcial com nuvens de crista, 3–5/10 mal visível, e 1–2/10 um cume completamente tapado.',
      guideHref: '/guides/gornergrat-vs-glacier-paradise',
      guideLabel: 'Comparar Gornergrat e Glacier Paradise',
    },
    {
      question: 'Qual é a melhor hora do dia para ver o Matterhorn?',
      answer:
        'A janela da manhã, das 06:00 às 11:00 CET, é estatisticamente mais limpa do que a tarde (12:00–18:00) em 78 % do ano. O sol aquece as encostas escuras do Mattertal e, depois do meio-dia, formam-se cúmulos entre 3.000 e 4.000 m. Apanhe o primeiro comboio de cremalheira ou o primeiro teleférico.',
      guideHref: '/guides/best-time-to-see-matterhorn',
      guideLabel: 'Climatologia de manhã contra tarde',
    },
    {
      question:
        'De onde se vê melhor o Matterhorn: Gornergrat (3.089 m) ou Glacier Paradise (3.883 m)?',
      answer:
        'O Gornergrat mostra a silhueta este/nordeste, o reflexo do Riffelsee e um comboio estável ao vento. O Glacier Paradise fica quase 800 m mais alto e olha a face sul italiana: melhor numa inversão de inverno abaixo de 3.200 m, mas os teleféricos fecham mais cedo com Föhn de sul acima de 50 km/h.',
      guideHref: '/guides/gornergrat-vs-glacier-paradise',
      guideLabel: 'Comparação completa Gornergrat / Glacier Paradise',
    },
    {
      question: 'Em que meses o Matterhorn aparece mais vezes sem nuvens?',
      answer:
        'Em 30 anos, dezembro (89 %) e janeiro (88 %) são os meses mais limpos graças ao ar frio e estável. Para caminhadas sem neve e reflexos nos lagos, setembro (72 %) e outubro (79 %) equilibram melhor. Junho (48 %) e julho (52 %) têm a visibilidade diária mais baixa por causa dos cúmulos da tarde.',
      guideHref: '/guides/best-time-to-see-matterhorn',
      guideLabel: 'Probabilidade de céu limpo mês a mês',
    },
    {
      question: 'Porque há uma nuvem no Matterhorn quando Zermatt está soalheiro?',
      answer:
        'A pirâmide isolada (4.478 m) trava o vento de altitude. O ar húmido sobe a sotavento, arrefece e condensa numa nuvem em bandeira parada no cume, sobretudo com Föhn de sul (150°–210°, acima de 30 km/h).',
      guideHref: '/guides/matterhorn-banner-cloud-fohn-wind',
      guideLabel: 'Nuvem em bandeira e vento Föhn',
    },
    {
      question: 'Onde está a webcam ao vivo do Matterhorn em Zermatt?',
      answer:
        'A página inicial mostra quatro câmaras Roundshot: Gornergrat (3.089 m), Rothorn, Trockener Steg em direção ao Klein Matterhorn e a aldeia na Kirchbrücke. Cada imagem atualiza-se a cada 10–15 minutos ao lado da pontuação.',
      guideHref: '/viewpoints/gornergrat',
      guideLabel: 'Webcam e tempo do Gornergrat',
    },
    {
      question:
        'Os bilhetes do Gornergrat ou do Glacier Paradise são reembolsados se o Matterhorn estiver nas nuvens?',
      answer:
        'Não. A Zermatt Bergbahnen e o Gornergrat Bahn não reembolsam nuvens nem visibilidade nula depois da compra, e os passes diários não esgotam antecipadamente. Veja a pontuação 1–10 e as quatro webcams nessa manhã antes de gastar mais de 100 CHF por pessoa.',
      guideHref: '/guides/zermatt-cloudy-rainy-day-guide',
      guideLabel: 'O que fazer em Zermatt com nuvens ou chuva',
    },
  ],
  zh: [
    {
      question: '今天在策马特能看到马特洪峰吗？',
      answer:
        '高空遥测每 15 分钟更新一次，覆盖戈尔内格拉特（3,089米）和马特洪峰冰川天堂（3,883米）。8–10/10 表示 4,478 米金字塔清晰无遮挡；6–7/10 为部分可见，山脊有轻云或旗云；3–5/10 勉强可见；1–2/10 表示峰顶完全被云封住。',
      guideHref: '/guides/gornergrat-vs-glacier-paradise',
      guideLabel: '比较戈尔内格拉特与冰川天堂',
    },
    {
      question: '一天中什么时候看马特洪峰最清楚？',
      answer:
        '全年 78% 的日子里，上午 06:00–11:00（欧洲中部时间）比下午 12:00–18:00 更晴。阳光加热马特河谷的深色岩壁，午后在 3,000–4,000 米形成积云。尽量赶第一班登山火车或缆车。',
      guideHref: '/guides/best-time-to-see-matterhorn',
      guideLabel: '三十年上午与下午气候对照',
    },
    {
      question: '戈尔内格拉特（3,089米）和冰川天堂（3,883米），哪里更能看清马特洪峰？',
      answer:
        '戈尔内格拉特能看到标志性的东北东壁轮廓、利菲尔湖倒影，齿轨火车也更抗风。冰川天堂高出近 800 米，面向南壁和意大利一侧，冬季低云逆温（低于 3,200 米）时更好；但南向焚风超过 50 公里/小时时，缆车会更早停运。',
      guideHref: '/guides/gornergrat-vs-glacier-paradise',
      guideLabel: '戈尔内格拉特与冰川天堂完整对比',
    },
    {
      question: '一年中哪几个月最容易看到无云的马特洪峰？',
      answer:
        '据策马特 30 年气候，12 月（89%）和 1 月（88%）晴空概率最高，因为冬季冷空气稳定、热对流少。想要无雪徒步和湖面倒影，9 月（72%）和 10 月（79%）最均衡。6 月（48%）和 7 月（52%）因午后积云，全天能见度最低。',
      guideHref: '/guides/best-time-to-see-matterhorn',
      guideLabel: '逐月晴空概率',
    },
    {
      question: '为什么村里晴天，马特洪峰顶上仍有一朵云？',
      answer:
        '孤立的四面金字塔（4,478米）像一道空气屏障。背风面的湿空气被抬升、冷却，凝成停在峰顶的旗状云。南向焚风（150°–210°、超过 30 公里/小时）越过意大利山脊时尤其明显。',
      guideHref: '/guides/matterhorn-banner-cloud-fohn-wind',
      guideLabel: '旗云与焚风如何计分',
    },
    {
      question: '策马特看马特洪峰的实时摄像头在哪里？',
      answer:
        '首页播放四路 Roundshot：戈尔内格拉特（3,089米）、罗特洪、朝向小马特洪峰的干岩站，以及村里的教堂桥。每帧约 10–15 分钟刷新一次，就在实时能见度分数旁边。',
      guideHref: '/viewpoints/gornergrat',
      guideLabel: '戈尔内格拉特摄像头与天气',
    },
    {
      question: '如果峰被云挡住，戈尔内格拉特或冰川天堂的票能退吗？',
      answer:
        '不能。策马特登山铁路和戈尔内格拉特铁路不因云层或峰顶不可见退票，普通日票也不会提前售罄。出发当天早上先看 1–10 分的上午/下午指数和四路摄像头，再决定是否花费每人 100 瑞士法郎以上。',
      guideHref: '/guides/zermatt-cloudy-rainy-day-guide',
      guideLabel: '策马特阴雨天可以做什么',
    },
  ],
  'zh-tw': [
    {
      question: '今天在策馬特看得到馬特洪峰嗎？',
      answer:
        '高空遙測每 15 分鐘更新一次，涵蓋高納葛拉特（3,089公尺）與馬特洪峰冰川天堂（3,883公尺）。8–10/10 表示 4,478 公尺金字塔清晰無遮擋；6–7/10 為部分可見，山脊有輕雲或旗雲；3–5/10 勉強可見；1–2/10 表示峰頂完全被雲封住。',
      guideHref: '/guides/gornergrat-vs-glacier-paradise',
      guideLabel: '比較高納葛拉特與冰川天堂',
    },
    {
      question: '一天之中什麼時候看馬特洪峰最清楚？',
      answer:
        '全年 78% 的日子裡，上午 06:00–11:00（歐洲中部時間）比下午 12:00–18:00 更晴。陽光加熱馬特河谷的深色岩壁，午後在 3,000–4,000 公尺形成積雲。盡量搭第一班登山火車或纜車。',
      guideHref: '/guides/best-time-to-see-matterhorn',
      guideLabel: '三十年上午與下午氣候對照',
    },
    {
      question: '高納葛拉特（3,089公尺）和冰川天堂（3,883公尺），哪裡更能看清馬特洪峰？',
      answer:
        '高納葛拉特能看到標誌性的東北東壁輪廓、利菲爾湖倒影，齒軌火車也較抗風。冰川天堂高出近 800 公尺，面向南壁與義大利一側，冬季低雲逆溫（低於 3,200 公尺）時更好；但南向焚風超過每小時 50 公里時，纜車會更早停駛。',
      guideHref: '/guides/gornergrat-vs-glacier-paradise',
      guideLabel: '高納葛拉特與冰川天堂完整比較',
    },
    {
      question: '一年中哪幾個月最容易看到無雲的馬特洪峰？',
      answer:
        '依策馬特 30 年氣候，12 月（89%）和 1 月（88%）晴空機率最高，因為冬季冷空氣穩定、熱對流少。想要無雪健行和湖面倒影，9 月（72%）和 10 月（79%）最均衡。6 月（48%）和 7 月（52%）因午後積雲，全天能見度最低。',
      guideHref: '/guides/best-time-to-see-matterhorn',
      guideLabel: '逐月晴空機率',
    },
    {
      question: '為什麼村裡晴天，馬特洪峰頂上仍有一朵雲？',
      answer:
        '孤立的四面金字塔（4,478公尺）像一道氣流屏障。背風面的濕空氣被抬升、冷卻，凝成停在峰頂的旗狀雲。南向焚風（150°–210°、超過每小時 30 公里）越過義大利山脊時尤其明顯。',
      guideHref: '/guides/matterhorn-banner-cloud-fohn-wind',
      guideLabel: '旗雲與焚風如何計分',
    },
    {
      question: '策馬特看馬特洪峰的即時攝影機在哪裡？',
      answer:
        '首頁播放四路 Roundshot：高納葛拉特（3,089公尺）、羅特洪、朝向小馬特洪峰的乾岩站，以及村裡的教堂橋。每幀約 10–15 分鐘更新一次，就在即時能見度分數旁邊。',
      guideHref: '/viewpoints/gornergrat',
      guideLabel: '高納葛拉特攝影機與天氣',
    },
    {
      question: '如果山峰被雲擋住，高納葛拉特或冰川天堂的票能退嗎？',
      answer:
        '不能。策馬特登山纜車與高納葛拉特鐵路不因雲層或峰頂不可見退票，一般日票也不會提前售罄。出發當天早上先看 1–10 分的上午／下午指數和四路影像，再決定是否花費每人 100 瑞士法郎以上。',
      guideHref: '/guides/zermatt-cloudy-rainy-day-guide',
      guideLabel: '策馬特陰雨天可以做什麼',
    },
  ],
  ja: [
    {
      question: '今日、ツェルマットからマッターホルンは見えますか？',
      answer:
        '高所テレメトリは15分ごとに更新され、ゴルナーグラート（3,089m）とマッターホルン・グレイシャー・パラダイス（3,883m）を見ています。8–10/10は標高4,478mのピラミッドが遮るものなく見える状態、6–7/10は尾根の薄い雲や旗雲で一部見える状態、3–5/10はほとんど見えない状態、1–2/10は山頂が完全に雲の中です。',
      guideHref: '/guides/gornergrat-vs-glacier-paradise',
      guideLabel: 'ゴルナーグラートとグレイシャーを比較',
    },
    {
      question: 'マッターホルンが一番よく見える時間帯は？',
      answer:
        '午前6:00–11:00（中央ヨーロッパ時間）は、午後12:00–18:00より年間の78%で晴れています。マッター谷の暗い岩壁が日射で暖まり、正午過ぎに標高3,000–4,000mへ積雲が湧きます。始発の登山鉄道かゴンドラを目指してください。',
      guideHref: '/guides/best-time-to-see-matterhorn',
      guideLabel: '30年の午前と午後の気候',
    },
    {
      question:
        'マッターホルンはゴルナーグラート（3,089m）とグレイシャー・パラダイス（3,883m）のどちらがよく見えますか？',
      answer:
        'ゴルナーグラートは象徴的な東・北東壁、リッフェル湖の反射、風に強い登山鉄道です。グレイシャー・パラダイスは約800m高く、南壁とイタリア側を見ます。冬季に3,200m未満の逆転層があるときは有利ですが、南風フェーンが50km/hを超えるとロープウェイは早く止まります。',
      guideHref: '/guides/gornergrat-vs-glacier-paradise',
      guideLabel: 'ゴルナーグラートとグレイシャーの完全比較',
    },
    {
      question: '雲のないマッターホルンを見やすい月は？',
      answer:
        'ツェルマットの30年気候では、冷たく安定した冬の空気のため12月（89%）と1月（88%）が最も晴れます。雪のない登山と湖の反射なら9月（72%）と10月（79%）がバランス良好です。6月（48%）と7月（52%）は午後の積雲で、一日を通した視界が最も低くなります。',
      guideHref: '/guides/best-time-to-see-matterhorn',
      guideLabel: '月ごとの晴天確率',
    },
    {
      question: '村が晴れていても山頂に雲がかかるのはなぜ？',
      answer:
        '孤立した四面のピラミッド（4,478m）が上空の風をせき止めます。風下に吸い上げられた湿った空気が冷えて、山頂に動かない旗雲になります。南風フェーン（150°–210°、30km/h超）がイタリア側の尾根を越えるときに特に起きます。',
      guideHref: '/guides/matterhorn-banner-cloud-fohn-wind',
      guideLabel: '旗雲とフェーンの仕組み',
    },
    {
      question: 'ツェルマットのマッターホルンライブカメラはどこ？',
      answer:
        'トップページにRoundshotが4本あります。ゴルナーグラート（3,089m）、ロータン、クライン・マッターホルン方向のトロッケナー・シュテーク、そして村のキルヒ橋です。各映像はライブスコアの横で10–15分ごとに更新されます。',
      guideHref: '/viewpoints/gornergrat',
      guideLabel: 'ゴルナーグラートのカメラと天気',
    },
    {
      question: '雲で山が見えなくても、ゴルナーグラートやグレイシャーの切符は返金されますか？',
      answer:
        'されません。ツェルマット・ベルクバーネンとゴルナーグラート鉄道は、購入後の雲や視界ゼロを返金せず、通常の一日券は事前に売り切れることもありません。一人100スイスフラン以上を使う前に、出発当日の朝に1–10の午前・午後スコアと4台のカメラを確認してください。',
      guideHref: '/guides/zermatt-cloudy-rainy-day-guide',
      guideLabel: 'ツェルマットの曇り・雨の日の過ごし方',
    },
  ],
  ko: [
    {
      question: '오늘 체르마트에서 마터호른이 보이나요?',
      answer:
        '고도 관측은 15분마다 갱신되며 고르너그라트(3,089m)와 마터호른 글래시어 파라다이스(3,883m)를 봅니다. 8–10/10은 4,478m 피라미드가 가림 없이 보이는 상태, 6–7/10은 능선 구름이나 깃발 구름으로 일부만 보이는 상태, 3–5/10은 거의 안 보이는 상태, 1–2/10은 정상이 완전히 구름에 갇힌 상태입니다.',
      guideHref: '/guides/gornergrat-vs-glacier-paradise',
      guideLabel: '고르너그라트와 글래시어 비교',
    },
    {
      question: '마터호른이 가장 잘 보이는 시간대는 언제인가요?',
      answer:
        '오전 06:00–11:00(중앙유럽 시간)은 오후 12:00–18:00보다 한 해의 78%에서 더 맑습니다. 마터 계곡의 어두운 암벽이 햇볕에 데워지면 정오 이후 해발 3,000–4,000m에 적운이 생깁니다. 첫 톱니바퀴 열차나 첫 곤돌라를 타세요.',
      guideHref: '/guides/best-time-to-see-matterhorn',
      guideLabel: '30년 오전·오후 기후',
    },
    {
      question:
        '마터호른은 고르너그라트(3,089m)와 글래시어 파라다이스(3,883m) 중 어디서 더 잘 보이나요?',
      answer:
        '고르너그라트는 상징적인 동·북동벽, 리펠제 반영, 바람에 강한 산악 열차를 제공합니다. 글래시어 파라다이스는 약 800m 더 높고 남벽과 이탈리아 쪽을 봅니다. 겨울에 3,200m 미만 역전층이 있을 때 유리하지만, 남풍 푄이 시속 50km를 넘으면 케이블카가 더 일찍 멈춥니다.',
      guideHref: '/guides/gornergrat-vs-glacier-paradise',
      guideLabel: '고르너그라트와 글래시어 전체 비교',
    },
    {
      question: '구름 없는 마터호른을 보기 좋은 달은 언제인가요?',
      answer:
        '체르마트 30년 기후에서 12월(89%)과 1월(88%)이 가장 맑습니다. 차갑고 안정된 겨울 공기 때문에 열 대류가 적기 때문입니다. 눈 없는 하이킹과 호수 반영은 9월(72%)과 10월(79%)이 균형이 좋습니다. 6월(48%)과 7월(52%)은 오후 적운 때문에 하루 종일 시야가 가장 낮습니다.',
      guideHref: '/guides/best-time-to-see-matterhorn',
      guideLabel: '월별 맑을 확률',
    },
    {
      question: '마을은 맑은데 마터호른 정상에 구름이 있는 이유는 무엇인가요?',
      answer:
        '고립된 사면 피라미드(4,478m)가 고공 바람을 막습니다. 풍하측으로 올라간 습한 공기가 식으며 정상에 붙는 깃발 구름이 됩니다. 남풍 푄(150°–210°, 시속 30km 초과)이 이탈리아 능선을 넘을 때 특히 그렇습니다.',
      guideHref: '/guides/matterhorn-banner-cloud-fohn-wind',
      guideLabel: '깃발 구름과 푄 바람',
    },
    {
      question: '체르마트 마터호른 실시간 웹캠은 어디에 있나요?',
      answer:
        '홈에는 Roundshot 네 개가 있습니다. 고르너그라트(3,089m), 로트호른, 클라인 마터호른 방향의 트로케너 슈테크, 그리고 마을 키르히 다리입니다. 각 화면은 실시간 점수 옆에서 10–15분마다 갱신됩니다.',
      guideHref: '/viewpoints/gornergrat',
      guideLabel: '고르너그라트 웹캠과 날씨',
    },
    {
      question: '구름에 산이 가려져도 고르너그라트나 글래시어 티켓을 환불받을 수 있나요?',
      answer:
        '없습니다. 체르마트 베르크바넨과 고르너그라트 철도는 구매 후 구름이나 정상 시야 제로를 환불하지 않으며, 일반 일일권은 미리 매진되지도 않습니다. 1인당 100스위스프랑 이상을 쓰기 전에 출발 당일 아침 1–10 오전·오후 점수와 웹캠 네 개를 확인하세요.',
      guideHref: '/guides/zermatt-cloudy-rainy-day-guide',
      guideLabel: '체르마트에서 흐리거나 비 오는 날',
    },
  ],
};

const GUIDES_INDEX: Record<Locale, LocalizedFaq[]> = {
  en: [
    {
      question: 'Why do standard phone weather apps get Matterhorn visibility wrong?',
      answer:
        'Consumer weather apps report conditions for Zermatt village on the valley floor at 1,608 meters. The Matterhorn summit stands at 4,478 meters—nearly 2,900 vertical meters higher—where mid-level cloud decks (3,000–4,000m) and upper-level Föhn winds decide whether the peak is visible.',
    },
    {
      question: 'What visibility score should I wait for before buying a mountain lift pass?',
      answer:
        'Wait for a live Morning (AM) or Afternoon (PM) score of 7/10 or higher. When scores sit at 1/10 to 4/10, mid-level clouds block the summit and you should switch to valley stops such as the Matterhorn Museum or Gorner Gorge.',
    },
    {
      question: 'Can you see the Matterhorn from Zermatt village without buying a lift ticket?',
      answer:
        'Yes. Kirchbrücke, the bridge by the church over the Mattervispa, is a 5-minute walk from Zermatt station. The Mürini/Riedweg overlook is a 12-minute uphill walk. Both frame the east and north faces, especially at sunrise, with no ticket.',
    },
    {
      question: 'How many mornings in Zermatt do I need to guarantee seeing the Matterhorn?',
      answer:
        'Three full mornings raises the chance of at least one crystal-clear window (8/10 or better) above 88% in summer (June–August) and to about 98% in autumn and winter.',
    },
  ],
  de: [
    {
      question: 'Warum liegen Handy-Wetterapps bei der Matterhorn-Sicht falsch?',
      answer:
        'Sie melden das Dorf Zermatt auf 1.608 m im Talboden. Der Gipfel steht auf 4.478 m, fast 2.900 Höhenmeter darüber. Dort entscheiden mittelhohe Wolken (3.000–4.000 m) und der Höhenföhn, ob die Spitze frei ist.',
    },
    {
      question: 'Welchen Sichtwert sollte ich abwarten, bevor ich ein Bergbahnticket kaufe?',
      answer:
        'Warten Sie auf einen Live-Wert von mindestens 7/10 am Vormittag oder Nachmittag. Bei 1/10 bis 4/10 verdecken mittelhohe Wolken den Gipfel. Dann bleiben Sie im Tal, zum Beispiel im Matterhorn-Museum oder in der Gorner-Schlucht.',
    },
    {
      question: 'Sieht man das Matterhorn vom Dorf aus ohne Bergbahnticket?',
      answer:
        'Ja. Die Kirchbrücke über die Mattervispa liegt fünf Gehminuten vom Bahnhof. Der Blick vom Mürini/Riedweg ist zwölf Minuten bergauf. Beide zeigen Ost- und Nordwand, besonders bei Sonnenaufgang, und kosten nichts.',
    },
    {
      question: 'Wie viele Morgen in Zermatt brauche ich, um das Matterhorn sicher zu sehen?',
      answer:
        'Drei volle Morgen heben die Chance auf mindestens ein klares Fenster (8/10 oder besser) im Sommer (Juni–August) auf über 88 % und im Herbst und Winter auf etwa 98 %.',
    },
  ],
  fr: [
    {
      question: 'Pourquoi les applis météo se trompent-elles sur la visibilité du Cervin ?',
      answer:
        'Elles décrivent le village de Zermatt, à 1 608 m au fond de la vallée. Le sommet est à 4 478 m, près de 2 900 m plus haut. Là, les nuages moyens (3 000–4 000 m) et le Foehn d’altitude décident si la pointe est visible.',
    },
    {
      question: 'Quel score attendre avant d’acheter un forfait de remontée ?',
      answer:
        'Attendez un score du matin ou de l’après-midi d’au moins 7/10. Entre 1/10 et 4/10, les nuages moyens cachent le sommet. Restez dans la vallée, au musée du Cervin ou aux gorges du Gorner.',
    },
    {
      question: 'Peut-on voir le Cervin depuis le village sans billet de remontée ?',
      answer:
        'Oui. Le Kirchbrücke, le pont près de l’église sur la Mattervispa, est à 5 minutes à pied de la gare. Le belvédère Mürini/Riedweg est à 12 minutes en montée. Les deux cadrent les faces est et nord, surtout au lever du soleil, sans billet.',
    },
    {
      question: 'Combien de matins à Zermatt pour être sûr de voir le Cervin ?',
      answer:
        'Trois matins complets portent la chance d’au moins une fenêtre limpide (8/10 ou plus) au-dessus de 88 % en été (juin–août) et à environ 98 % en automne et en hiver.',
    },
  ],
  it: [
    {
      question: 'Perché le app meteo sbagliano la visibilità del Cervino?',
      answer:
        'Riportano il paese di Zermatt, a 1.608 m sul fondovalle. La cima è a 4.478 m, quasi 2.900 m più in alto. Lì le nubi medie (3.000–4.000 m) e il Föhn in quota decidono se la vetta si vede.',
    },
    {
      question: 'Che punteggio conviene aspettare prima di comprare un biglietto?',
      answer:
        'Aspetta un punteggio live di mattina o pomeriggio di almeno 7/10. Tra 1/10 e 4/10 le nubi medie coprono la cima. Resta in valle, al museo del Cervino o nelle gole del Gorner.',
    },
    {
      question: 'Si vede il Cervino dal paese senza biglietto della funivia?',
      answer:
        'Sì. Il Kirchbrücke, il ponte vicino alla chiesa sulla Mattervispa, è a 5 minuti a piedi dalla stazione. Il belvedere Mürini/Riedweg è a 12 minuti in salita. Entrambi inquadrano le pareti est e nord, soprattutto all’alba, gratis.',
    },
    {
      question: 'Quante mattine a Zermatt servono per vedere il Cervino?',
      answer:
        'Tre mattine intere portano la probabilità di almeno una finestra limpida (8/10 o più) sopra l’88 % in estate (giugno–agosto) e a circa il 98 % in autunno e inverno.',
    },
  ],
  es: [
    {
      question: '¿Por qué las apps del tiempo fallan con la visibilidad del Cervino?',
      answer:
        'Informan del pueblo de Zermatt, a 1.608 m en el fondo del valle. La cumbre está a 4.478 m, casi 2.900 m más arriba. Allí las nubes medias (3.000–4.000 m) y el Föhn de altura deciden si el pico se ve.',
    },
    {
      question: '¿Qué puntuación conviene esperar antes de comprar un forfait?',
      answer:
        'Espere una puntuación en vivo de mañana o tarde de al menos 7/10. Entre 1/10 y 4/10 las nubes medias tapan la cumbre. Quédese en el valle, en el museo del Cervino o en el desfiladero del Gorner.',
    },
    {
      question: '¿Se ve el Cervino desde el pueblo sin billete de remontes?',
      answer:
        'Sí. El Kirchbrücke, el puente junto a la iglesia sobre el Mattervispa, está a 5 minutos a pie de la estación. El mirador Mürini/Riedweg está a 12 minutos cuesta arriba. Los dos enmarcan las caras este y norte, sobre todo al amanecer, sin billete.',
    },
    {
      question: '¿Cuántas mañanas en Zermatt hacen falta para ver el Cervino?',
      answer:
        'Tres mañanas completas suben la probabilidad de al menos una ventana despejada (8/10 o más) por encima del 88 % en verano (junio–agosto) y a cerca del 98 % en otoño e invierno.',
    },
  ],
  pt: [
    {
      question: 'Porque é que as aplicações de meteorologia erram a visibilidade do Matterhorn?',
      answer:
        'Descrevem a aldeia de Zermatt, a 1.608 m no fundo do vale. O cume está a 4.478 m, quase 2.900 m mais acima. Aí, as nuvens médias (3.000–4.000 m) e o Föhn de altitude decidem se o pico se vê.',
    },
    {
      question: 'Que pontuação devo esperar antes de comprar um bilhete de subida?',
      answer:
        'Espere uma pontuação ao vivo de manhã ou de tarde de pelo menos 7/10. Entre 1/10 e 4/10, as nuvens médias tapam o cume. Fique no vale, no museu do Matterhorn ou na garganta do Gorner.',
    },
    {
      question: 'Dá para ver o Matterhorn a partir da aldeia sem bilhete de teleférico?',
      answer:
        'Sim. A Kirchbrücke, a ponte junto à igreja sobre o Mattervispa, fica a 5 minutos a pé da estação. O miradouro Mürini/Riedweg fica a 12 minutos a subir. Os dois enquadram as faces este e norte, sobretudo ao nascer do sol, sem bilhete.',
    },
    {
      question: 'Quantas manhãs em Zermatt são precisas para ver o Matterhorn?',
      answer:
        'Três manhãs completas elevam a probabilidade de pelo menos uma janela limpa (8/10 ou mais) acima de 88 % no verão (junho–agosto) e para cerca de 98 % no outono e no inverno.',
    },
  ],
  zh: [
    {
      question: '为什么手机天气应用判断不好马特洪峰能不能看见？',
      answer:
        '它们报的是谷底策马特村，海拔 1,608 米。峰顶在 4,478 米，高出近 2,900 米。决定峰顶是否可见的，是 3,000–4,000 米的中层云和高空焚风。',
    },
    {
      question: '买登山票之前应该等到多少分？',
      answer:
        '等到上午或下午的实时分数至少 7/10。1/10 到 4/10 时，中层云挡住峰顶，应改去山谷，例如马特洪峰博物馆或戈尔纳峡谷。',
    },
    {
      question: '不买缆车票，能从村里看到马特洪峰吗？',
      answer:
        '能。教堂旁跨过马特维斯帕河的教堂桥离火车站步行约 5 分钟。Mürini/Riedweg 观景点上坡约 12 分钟。两处都能看到东壁和北壁，日出时最好，而且免费。',
    },
    {
      question: '在策马特住几个早晨，才比较有把握看到马特洪峰？',
      answer:
        '三个完整的早晨，能把至少遇到一次晴窗（8/10 或更高）的概率，在夏季（6–8 月）提到 88% 以上，在秋季和冬季提到大约 98%。',
    },
  ],
  'zh-tw': [
    {
      question: '為什麼手機天氣應用判斷不好馬特洪峰能不能看見？',
      answer:
        '它們報的是谷底策馬特村，海拔 1,608 公尺。峰頂在 4,478 公尺，高出近 2,900 公尺。決定峰頂是否可見的，是 3,000–4,000 公尺的中層雲和高空焚風。',
    },
    {
      question: '買登山票之前應該等到多少分？',
      answer:
        '等到上午或下午的即時分數至少 7/10。1/10 到 4/10 時，中層雲擋住峰頂，應改去山谷，例如馬特洪峰博物館或戈爾納峽谷。',
    },
    {
      question: '不買纜車票，能從村裡看到馬特洪峰嗎？',
      answer:
        '能。教堂旁跨過馬特維斯帕河的教堂橋離火車站步行約 5 分鐘。Mürini/Riedweg 觀景點上坡約 12 分鐘。兩處都能看到東壁和北壁，日出時最好，而且免費。',
    },
    {
      question: '在策馬特住幾個早晨，才比較有把握看到馬特洪峰？',
      answer:
        '三個完整的早晨，能把至少遇到一次晴窗（8/10 或更高）的機率，在夏季（6–8 月）提到 88% 以上，在秋季和冬季提到大約 98%。',
    },
  ],
  ja: [
    {
      question: 'スマホの天気アプリは、なぜマッターホルンの視界を外すのですか？',
      answer:
        '谷底のツェルマット村、標高1,608mの天気を出しているからです。山頂は4,478mで、約2,900m高い位置にあります。見えるかどうかは3,000–4,000mの中層雲と上空のフェーンが決めます。',
    },
    {
      question: '山の切符を買う前に、何点まで待つべきですか？',
      answer:
        '午前か午後のライブスコアが7/10以上になるまで待ってください。1/10から4/10では中層雲が山頂を隠します。そのときはマッターホルン博物館やゴルナー峡谷など、谷の予定に切り替えてください。',
    },
    {
      question: 'リフト券なしで、村からマッターホルンは見えますか？',
      answer:
        '見えます。教会のそば、マッターヴィス川にかかるキルヒ橋は駅から徒歩約5分です。Mürini/Riedwegの見晴らしは上り約12分です。どちらも東壁と北壁が入り、日の出が特によく、切符は要りません。',
    },
    {
      question: 'マッターホルンを見るには、ツェルマットで何朝あれば足りますか？',
      answer:
        '朝を3回そろえると、快晴の窓（8/10以上）に少なくとも一度当たる確率は、夏（6–8月）で88%超、秋と冬で約98%になります。',
    },
  ],
  ko: [
    {
      question: '휴대폰 날씨 앱은 왜 마터호른 가시성을 잘못 말할까요?',
      answer:
        '계곡 바닥의 체르마트 마을, 해발 1,608m 날씨를 보여 주기 때문입니다. 정상은 4,478m로 약 2,900m 더 높습니다. 보이는지는 3,000–4,000m 중층운과 고공 푄이 결정합니다.',
    },
    {
      question: '산악 티켓을 사기 전에 몇 점까지 기다려야 하나요?',
      answer:
        '오전이나 오후 실시간 점수가 7/10 이상이 될 때까지 기다리세요. 1/10에서 4/10이면 중층운이 정상을 가립니다. 그때는 마터호른 박물관이나 고르너 협곡처럼 계곡 일정으로 바꾸세요.',
    },
    {
      question: '리프트 티켓 없이 마을에서 마터호른이 보이나요?',
      answer:
        '보입니다. 교회 옆, 마터비스파 강의 키르히 다리는 역에서 도보 약 5분입니다. Mürini/Riedweg 전망은 오르막 약 12분입니다. 둘 다 동벽과 북벽이 들어오고, 일출에 특히 좋으며 티켓이 필요 없습니다.',
    },
    {
      question: '마터호른을 보려면 체르마트에서 아침을 며칠 잡아야 하나요?',
      answer:
        '아침을 세 번 잡으면 맑은 창(8/10 이상)을 적어도 한 번 만날 확률이 여름(6–8월)에는 88%를 넘고, 가을과 겨울에는 약 98%가 됩니다.',
    },
  ],
};

export function getHomeFaqs(locale: Locale = 'en'): LocalizedFaq[] {
  return HOME[locale] ?? HOME.en;
}

export function getGuidesIndexFaqs(locale: Locale = 'en'): LocalizedFaq[] {
  return GUIDES_INDEX[locale] ?? GUIDES_INDEX.en;
}
