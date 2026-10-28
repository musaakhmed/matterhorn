import type { Locale } from './config';
import {
  APRES_SKI_SPOTS,
  MOUNTAIN_DINING,
  SKI_FAQS,
  SKI_PASS_OPTIONS,
  SKI_SECTORS,
  calculateSkiPassEstimate,
  evaluateCrossBorderLink,
  type ApresSkiSpot,
  type MountainDiningSpot,
  type SkiFaq,
  type SkiPassOption,
  type SkiSector,
} from '../ski';

type NonEn = Exclude<Locale, 'en'>;

type SectorId = SkiSector['id'];

interface SectorText {
  sunExposure: string;
  bestFor: string;
  description: string;
  topRunName: string;
  topRunDescription: string;
  keyLifts: string[];
}

interface PassText {
  name: string;
  scope: string;
  keyFeature: string;
  bestSuitedFor: string;
  ikonNote?: string;
}

interface DiningText {
  cuisine: string;
  signatureDish: string;
  vibe: string;
  tip: string;
}

interface ApresText {
  location: string;
  vibe: string;
  highlight: string;
  access: string;
}

interface FaqText {
  question: string;
  answer: string;
}

interface PhraseMap {
  [english: string]: string;
}

interface BorderReason {
  closed: string;
  standby: string;
  open: string;
}

const COUNTRY: Record<NonEn, Record<SkiSector['country'], string>> = {
  de: { Switzerland: 'Schweiz', Italy: 'Italien' },
  es: { Switzerland: 'Suiza', Italy: 'Italia' },
  fr: { Switzerland: 'Suisse', Italy: 'Italie' },
  it: { Switzerland: 'Svizzera', Italy: 'Italia' },
  pt: { Switzerland: 'Suíça', Italy: 'Itália' },
  ko: { Switzerland: '스위스', Italy: '이탈리아' },
  ja: { Switzerland: 'スイス', Italy: 'イタリア' },
  zh: { Switzerland: '瑞士', Italy: '意大利' },
  'zh-tw': { Switzerland: '瑞士', Italy: '義大利' },
};

const ACCESS: Record<NonEn, Record<MountainDiningSpot['access'], string>> = {
  de: {
    'Ski-in (Easy Blue)': 'Ski-in (leichte blaue Piste)',
    'Ski-in (Red)': 'Ski-in (rote Piste)',
    'Ski-in & Foot / Train': 'Ski-in und zu Fuss / Bahn',
    'Pedestrian Accessible': 'Zu Fuss erreichbar',
  },
  es: {
    'Ski-in (Easy Blue)': 'Acceso esquiando (azul fácil)',
    'Ski-in (Red)': 'Acceso esquiando (roja)',
    'Ski-in & Foot / Train': 'Esquiando y a pie / tren',
    'Pedestrian Accessible': 'Acceso a pie',
  },
  fr: {
    'Ski-in (Easy Blue)': 'Accès à skis (bleu facile)',
    'Ski-in (Red)': 'Accès à skis (rouge)',
    'Ski-in & Foot / Train': 'À skis et à pied / train',
    'Pedestrian Accessible': 'Accessible à pied',
  },
  it: {
    'Ski-in (Easy Blue)': 'Accesso con gli sci (blu facile)',
    'Ski-in (Red)': 'Accesso con gli sci (rossa)',
    'Ski-in & Foot / Train': 'Con gli sci e a piedi / treno',
    'Pedestrian Accessible': 'Accessibile a piedi',
  },
  pt: {
    'Ski-in (Easy Blue)': 'Acesso em esqui (pista azul fácil)',
    'Ski-in (Red)': 'Acesso em esqui (pista vermelha)',
    'Ski-in & Foot / Train': 'Em esqui e a pé / comboio',
    'Pedestrian Accessible': 'Acessível a pé',
  },
  ko: {
    'Ski-in (Easy Blue)': '스키 활강 접근 (쉬운 블루)',
    'Ski-in (Red)': '스키 활강 접근 (레드)',
    'Ski-in & Foot / Train': '스키 활강 및 도보 / 열차',
    'Pedestrian Accessible': '도보 접근 가능',
  },
  ja: {
    'Ski-in (Easy Blue)': 'スキーイン（易しいブルー）',
    'Ski-in (Red)': 'スキーイン（レッド）',
    'Ski-in & Foot / Train': 'スキーインと徒歩／鉄道',
    'Pedestrian Accessible': '徒歩でアクセス可',
  },
  zh: {
    'Ski-in (Easy Blue)': '滑进到达（简单蓝道）',
    'Ski-in (Red)': '滑进到达（红道）',
    'Ski-in & Foot / Train': '滑进以及步行 / 火车',
    'Pedestrian Accessible': '步行可达',
  },
  'zh-tw': {
    'Ski-in (Easy Blue)': '滑雪滑入（簡單藍色雪道）',
    'Ski-in (Red)': '滑雪滑入（紅色雪道）',
    'Ski-in & Foot / Train': '可滑雪滑入，也可步行或搭火車',
    'Pedestrian Accessible': '步行即可抵達',
  },
};

const FAQ_CATEGORY: Record<NonEn, Record<SkiFaq['category'], string>> = {
  de: {
    'Cross-Border': 'Grenzübertritt',
    'Passes & Ikon': 'Skipässe & Ikon',
    Conditions: 'Verhältnisse',
    'Dining & Village': 'Gastronomie & Dorf',
  },
  es: {
    'Cross-Border': 'Transfronterizo',
    'Passes & Ikon': 'Forfaits e Ikon',
    Conditions: 'Condiciones',
    'Dining & Village': 'Restauración y pueblo',
  },
  fr: {
    'Cross-Border': 'Transfrontalier',
    'Passes & Ikon': 'Forfaits et Ikon',
    Conditions: 'Conditions',
    'Dining & Village': 'Restaurants et village',
  },
  it: {
    'Cross-Border': 'Transfrontaliero',
    'Passes & Ikon': 'Skipass e Ikon',
    Conditions: 'Condizioni',
    'Dining & Village': 'Ristorazione e paese',
  },
  pt: {
    'Cross-Border': 'Transfronteiriço',
    'Passes & Ikon': 'Passes e Ikon',
    Conditions: 'Condições',
    'Dining & Village': 'Restauração e aldeia',
  },
  ko: {
    'Cross-Border': '국경 횡단',
    'Passes & Ikon': '패스 & Ikon',
    Conditions: '설질',
    'Dining & Village': '식사 & 마을',
  },
  ja: {
    'Cross-Border': '越境',
    'Passes & Ikon': 'パスと Ikon',
    Conditions: 'コンディション',
    'Dining & Village': '食事と村',
  },
  zh: {
    'Cross-Border': '跨境',
    'Passes & Ikon': '雪票与 Ikon',
    Conditions: '雪况',
    'Dining & Village': '餐饮与村镇',
  },
  'zh-tw': {
    'Cross-Border': '跨境',
    'Passes & Ikon': '雪票與 Ikon',
    Conditions: '雪況',
    'Dining & Village': '餐飲與村落',
  },
};

const SECTOR_TEXT: Record<NonEn, Record<SectorId, SectorText>> = {
  de: {
    'sunnegga-rothorn': {
      sunExposure: 'Süd & Südwest (erste Morgensonne)',
      bestFor: 'Carving-Pisten, sonnige Terrassen, erstklassige Buckelpisten-Routen',
      description:
        'Der sonnigste Sektor in Zermatt: geschützte Waldabfahrten, hochalpine Mulden unter dem Rothorn und die legendären Gourmethütten von Findeln.',
      topRunName: 'Rothorn nach Patrullarve & Findeln (Piste #6 & #7)',
      topRunDescription:
        'Lange Panoramaabfahrt am Gourmetdorf Findeln vorbei, mit freiem Blick auf die Ostwand des Matterhorns.',
      keyLifts: [
        'Sunnegga Express Standseilbahn (unterirdische Metro ab Zermatt)',
        'Kombi-Gondel / Sessellift Blauherd',
        'Rothorn-Luftseilbahn für 150 Personen (3,103 m)',
        'Kumme 10er-Gondel (erste autonome AURO-Seilbahn der Schweiz)',
      ],
    },
    gornergrat: {
      sunExposure: 'Ost bis Südwest',
      bestFor: 'Breite Autobahnpisten, Familien, Fortgeschrittene und Panoramafahrten mit der Zahnradbahn',
      description:
        'Das Panoramaherz von Zermatt: hier gleitet man am Gornergletscher und an den historischen Zahnradgleisen entlang, mit sanften bis mittleren Gefällen.',
      topRunName: 'Riffelberg nach Furi (Piste #36 & #41)',
      topRunDescription:
        'Weite mittelschwere Cruiser mit durchgehendem Frontalblick auf die Matterhorn-Pyramide.',
      keyLifts: [
        'Gornergrat Bahn (Zahnradbahn, alle 24 Min.)',
        'Riffelberg Express Gondel (direkte Verbindung nach Furi)',
        'Gifthittli beheizter 6er-Sessellift',
        'Hohtälli-Luftseilbahn (3,286 m)',
      ],
    },
    'glacier-paradise': {
      sunExposure: 'Hochalpiner Grat / Süd',
      bestFor: 'Garantierter Gletscherschnee, Europas höchste Skipisten (3,883 m) und die internationale Verbindung nach Italien',
      description:
        'Europas höchstes liftbedientes Skigebiet. Liegt auf dem Theodulgletscher, mit Schneesicherheit das ganze Jahr und direkter Verbindung über die italienische Grenze.',
      topRunName: 'Matterhorn Glacier Paradise hinunter nach Zermatt (Piste #83/84/85)',
      topRunDescription:
        'Eine der längsten Skiabfahrten der Welt: 2,263 Höhenmeter nonstop über 16 zusammenhängende Kilometer.',
      keyLifts: [
        'Matterhorn Glacier Ride I & II (3S-Bahnen von Trockener Steg zum Klein Matterhorn und zur Testa Grigia)',
        'Matterhorn Express 8er-Gondel (Zermatt – Furi – Schwarzsee – Trockener Steg)',
        'Furggsattel 6er-Sessellift (Stützen stehen auf aktivem Gletschereis)',
        'Plateau-Rosa-Bügel (hochalpines Gletschergelände im Sommer und Winter)',
      ],
    },
    'cervinia-valtournenche': {
      sunExposure: 'Süd & Südost (den ganzen Tag Sonne)',
      bestFor: 'Endlose breite Cruiser, günstige hausgemachte italienische Mittagessen und grosse Höhenunterschiede',
      description:
        'Die italienische Seite von Matterhorn Ski Paradise. Bekannt für breitere, verzeihende Pisten, sonnige Lagen und erstklassige Pasta-Terrassen zu etwa dem halben Schweizer Preis.',
      topRunName: 'Ventina vom Plateau Rosa hinunter nach Cervinia (Piste #7)',
      topRunDescription:
        '11 Kilometer durchgehende, geschwungene rote Carvingpiste mit über 1,400 Höhenmetern unter der italienischen Matterhornwand (Monte Cervino).',
      keyLifts: [
        'Matterhorn Alpine Crossing (3S-Verbindung Testa Grigia – Klein Matterhorn)',
        'Gondel und Seilbahn Cervinia – Plan Maison',
        'Pancheron schneller 6er-Sessellift',
        'Verbindung Valtournenche Reine Blanche (bis auf den Talboden bei 1,524 m)',
      ],
    },
  },
  es: {
    'sunnegga-rothorn': {
      sunExposure: 'Sur y suroeste (primer sol de la mañana)',
      bestFor: 'Pistas de carving, terrazas soleadas e itinerarios de baches de primer nivel',
      description:
        'El sector más soleado de Zermatt, con bajadas resguardadas entre el bosque, cuencos de alta montaña bajo el Rothorn y los legendarios refugios gastronómicos de Findeln.',
      topRunName: 'Rothorn hasta Patrullarve y Findeln (pistas #6 y #7)',
      topRunDescription:
        'Largo descenso panorámico que pasa por el pueblo de chalés gourmet de Findeln, con la cara este del Matterhorn a la vista.',
      keyLifts: [
        'Funicular Sunnegga Express (metro subterráneo desde Zermatt)',
        'Telecabina y telesilla combinados de Blauherd',
        'Teleférico del Rothorn para 150 personas (3,103 m)',
        'Telecabina Kumme de 10 plazas (primer remontador autónomo AURO de Suiza)',
      ],
    },
    gornergrat: {
      sunExposure: 'Este a suroeste',
      bestFor: 'Cruceros anchos, familias, esquiadores de nivel medio y viajes en el tren cremallera panorámico',
      description:
        'El corazón panorámico de Zermatt, donde se esquía junto al glaciar Gorner y las vías históricas del cremallera, con pendientes suaves o moderadas.',
      topRunName: 'Riffelberg hasta Furi (pistas #36 y #41)',
      topRunDescription:
        'Amplios cruceros de nivel medio con el encuadre frontal y continuo de la pirámide del Matterhorn.',
      keyLifts: [
        'Gornergrat Bahn (tren cremallera, cada 24 min)',
        'Telecabina Riffelberg Express (enlace directo entre sectores hasta Furi)',
        'Telesilla calefactado Gifthittli de 6 plazas',
        'Teleférico de Hohtälli (3,286 m)',
      ],
    },
    'glacier-paradise': {
      sunExposure: 'Cresta de alta montaña / sur',
      bestFor: 'Nieve glaciar garantizada, las pistas más altas de Europa (3,883 m) y el enlace internacional con Italia',
      description:
        'El dominio esquiable con remontadores más alto de Europa. Se asienta sobre el glaciar Theodul, con nieve todo el año y conexión directa al otro lado de la frontera italiana.',
      topRunName: 'Matterhorn Glacier Paradise hasta Zermatt (pistas #83/84/85)',
      topRunDescription:
        'Uno de los descensos esquiables más largos del planeta: 2,263 metros de desnivel sin parar a lo largo de 16 kilómetros continuos.',
      keyLifts: [
        'Matterhorn Glacier Ride I y II (teleféricos 3S de Trockener Steg a Klein Matterhorn y Testa Grigia)',
        'Telecabina Matterhorn Express de 8 plazas (Zermatt – Furi – Schwarzsee – Trockener Steg)',
        'Telesilla Furggsattel de 6 plazas (las torres se apoyan en hielo glaciar activo)',
        'Telesquís de Plateau Rosa (terreno de glaciar alto en verano e invierno)',
      ],
    },
    'cervinia-valtournenche': {
      sunExposure: 'Sur y sureste (sol todo el día)',
      bestFor: 'Cruceros anchos sin fin, almuerzos italianos caseros a buen precio y grandes desniveles',
      description:
        'La vertiente italiana de Matterhorn Ski Paradise. Conocida por pistas más anchas y permisivas, orientaciones soleadas y terrazas de pasta de primer nivel a mitad de precio suizo.',
      topRunName: 'Pista Ventina desde Plateau Rosa hasta Cervinia (pista #7)',
      topRunDescription:
        '11 kilómetros de carving continuo en pista roja, con más de 1,400 metros de desnivel bajo la cara italiana del Matterhorn (Monte Cervino).',
      keyLifts: [
        'Matterhorn Alpine Crossing (enlace 3S Testa Grigia – Klein Matterhorn)',
        'Telecabina y teleférico Cervinia – Plan Maison',
        'Telesilla rápido Pancheron de 6 plazas',
        'Enlace Valtournenche Reine Blanche (hasta el fondo del valle a 1,524 m)',
      ],
    },
  },
  fr: {
    'sunnegga-rothorn': {
      sunExposure: 'Sud et sud-ouest (premier soleil du matin)',
      bestFor: 'Pistes de carving, terrasses ensoleillées, itinéraires à bosses de niveau mondial',
      description:
        'Le secteur le plus ensoleillé de Zermatt : pistes abritées en forêt, combes de haute altitude sous le Rothorn et les chalets gastronomiques légendaires de Findeln.',
      topRunName: 'Rothorn vers Patrullarve et Findeln (pistes #6 et #7)',
      topRunDescription:
        'Longue descente panoramique qui longe le hameau gastronomique de Findeln, avec la face est du Cervin dégagée.',
      keyLifts: [
        'Funiculaire Sunnegga Express (métro souterrain depuis Zermatt)',
        'Télécabine et télésiège combinés de Blauherd',
        'Téléphérique du Rothorn pour 150 personnes (3,103 m)',
        'Télécabine Kumme 10 places (premier téléporté autonome AURO de Suisse)',
      ],
    },
    gornergrat: {
      sunExposure: 'Est à sud-ouest',
      bestFor: 'Larges pistes autoroutes, familles, skieurs intermédiaires et trajets en train à crémaillère panoramique',
      description:
        'Le cœur panoramique de Zermatt, où l’on glisse le long du glacier du Gorner et des voies historiques à crémaillère, sur des pentes douces à modérées.',
      topRunName: 'Riffelberg vers Furi (pistes #36 et #41)',
      topRunDescription:
        'Larges pistes intermédiaires avec la pyramide du Cervin cadrée de face en continu.',
      keyLifts: [
        'Gornergrat Bahn (train à crémaillère toutes les 24 min)',
        'Télécabine Riffelberg Express (liaison directe vers Furi)',
        'Télésiège chauffant Gifthittli 6 places',
        'Téléphérique de Hohtälli (3,286 m)',
      ],
    },
    'glacier-paradise': {
      sunExposure: 'Crête de haute altitude / sud',
      bestFor: 'Neige glaciaire garantie, pistes les plus hautes d’Europe (3,883 m) et liaison internationale vers l’Italie',
      description:
        'Le plus haut domaine skiable desservi d’Europe. Il repose sur le glacier du Théodule, avec de la neige toute l’année et une liaison directe au-delà de la frontière italienne.',
      topRunName: 'Matterhorn Glacier Paradise jusqu’à Zermatt (pistes #83/84/85)',
      topRunDescription:
        'L’une des plus longues descentes à ski au monde : 2,263 mètres de dénivelé sans arrêt sur 16 kilomètres continus.',
      keyLifts: [
        'Matterhorn Glacier Ride I et II (téléphériques 3S de Trockener Steg vers Klein Matterhorn et Testa Grigia)',
        'Télécabine Matterhorn Express 8 places (Zermatt – Furi – Schwarzsee – Trockener Steg)',
        'Télésiège Furggsattel 6 places (les pylônes reposent sur la glace vive)',
        'Téléskis de Plateau Rosa (terrain de glacier d’altitude, été et hiver)',
      ],
    },
    'cervinia-valtournenche': {
      sunExposure: 'Sud et sud-est (soleil toute la journée)',
      bestFor: 'Larges pistes sans fin, déjeuners italiens faits maison à prix doux et grands dénivelés',
      description:
        'Le versant italien de Matterhorn Ski Paradise. Réputé pour des pistes plus larges et tolérantes, des expositions ensoleillées et des terrasses de pâtes d’exception à environ la moitié des prix suisses.',
      topRunName: 'Piste Ventina de Plateau Rosa jusqu’à Cervinia (piste #7)',
      topRunDescription:
        '11 kilomètres de carving continu sur piste rouge, avec plus de 1,400 mètres de dénivelé sous la face italienne du Cervin (Monte Cervino).',
      keyLifts: [
        'Matterhorn Alpine Crossing (liaison 3S Testa Grigia – Klein Matterhorn)',
        'Télécabine et téléphérique Cervinia – Plan Maison',
        'Télésiège rapide Pancheron 6 places',
        'Liaison Valtournenche Reine Blanche (jusqu’au fond de vallée à 1,524 m)',
      ],
    },
  },
  it: {
    'sunnegga-rothorn': {
      sunExposure: 'Sud e sud-ovest (primo sole del mattino)',
      bestFor: 'Piste da carving, terrazze al sole, itinerari di gobbe di livello mondiale',
      description:
        'Il settore più soleggiato di Zermatt: piste riparate nel bosco, conche d’alta quota sotto il Rothorn e le leggendarie baite gourmet di Findeln.',
      topRunName: 'Dal Rothorn a Patrullarve e Findeln (piste #6 e #7)',
      topRunDescription:
        'Lunga discesa panoramica che costeggia il villaggio gourmet di Findeln, con la parete est del Cervino libera.',
      keyLifts: [
        'Funicolare Sunnegga Express (metropolitana sotterranea da Zermatt)',
        'Cabinovia e seggiovia combinate di Blauherd',
        'Funivia del Rothorn da 150 posti (3,103 m)',
        'Cabinovia Kumme da 10 posti (primo impianto autonomo AURO della Svizzera)',
      ],
    },
    gornergrat: {
      sunExposure: 'Da est a sud-ovest',
      bestFor: 'Ampie piste autostrada, famiglie, sciatori intermedi e corse panoramiche in cremagliera',
      description:
        'Il cuore panoramico di Zermatt: si scia lungo il ghiacciaio del Gorner e i binari storici della cremagliera, con pendenze da dolci a moderate.',
      topRunName: 'Da Riffelberg a Furi (piste #36 e #41)',
      topRunDescription:
        'Ampie piste intermedie con la piramide del Cervino inquadrata di fronte per tutto il tratto.',
      keyLifts: [
        'Gornergrat Bahn (cremagliera, ogni 24 min)',
        'Cabinovia Riffelberg Express (collegamento diretto verso Furi)',
        'Seggiovia riscaldata Gifthittli a 6 posti',
        'Funivia di Hohtälli (3,286 m)',
      ],
    },
    'glacier-paradise': {
      sunExposure: 'Cresta d’alta quota / sud',
      bestFor: 'Neve glaciale garantita, le piste più alte d’Europa (3,883 m) e il collegamento internazionale con l’Italia',
      description:
        'Il comprensorio sciistico servito più alto d’Europa. Sorge sul ghiacciaio del Teodulo, con neve tutto l’anno e collegamento diretto oltre il confine italiano.',
      topRunName: 'Da Matterhorn Glacier Paradise fino a Zermatt (piste #83/84/85)',
      topRunDescription:
        'Una delle discese più lunghe al mondo: 2,263 metri di dislivello senza sosta su 16 chilometri continui.',
      keyLifts: [
        'Matterhorn Glacier Ride I e II (funivie 3S da Trockener Steg a Klein Matterhorn e Testa Grigia)',
        'Cabinovia Matterhorn Express a 8 posti (Zermatt – Furi – Schwarzsee – Trockener Steg)',
        'Seggiovia Furggsattel a 6 posti (i piloni poggiano sul ghiaccio vivo)',
        'Sciovie di Plateau Rosa (terreno glaciale d’alta quota, estate e inverno)',
      ],
    },
    'cervinia-valtournenche': {
      sunExposure: 'Sud e sud-est (sole tutto il giorno)',
      bestFor: 'Piste larghe senza fine, pranzi italiani fatti in casa a buon prezzo e grandi dislivelli',
      description:
        'Il versante italiano di Matterhorn Ski Paradise. Noto per piste più larghe e tolleranti, esposizioni soleggiate e terrazze di pasta di livello mondiale a circa metà dei prezzi svizzeri.',
      topRunName: 'Pista Ventina da Plateau Rosa fino a Cervinia (pista #7)',
      topRunDescription:
        '11 chilometri di carving continuo su pista rossa, con oltre 1,400 metri di dislivello sotto la parete italiana del Cervino (Monte Cervino).',
      keyLifts: [
        'Matterhorn Alpine Crossing (collegamento 3S Testa Grigia – Klein Matterhorn)',
        'Cabinovia e funivia Cervinia – Plan Maison',
        'Seggiovia veloce Pancheron a 6 posti',
        'Collegamento Valtournenche Reine Blanche (fino al fondovalle a 1,524 m)',
      ],
    },
  },
  pt: {
    'sunnegga-rothorn': {
      sunExposure: 'Sul e sudoeste (primeiro sol da manhã)',
      bestFor: 'Pistas de carving, esplanadas soalheiras e itinerários de moguls de nível mundial',
      description:
        'O sector mais soalheiro de Zermatt: pistas abrigadas no bosque, bacias de alta montanha sob o Rothorn e os lendários chalés gourmet de Findeln.',
      topRunName: 'Do Rothorn a Patrullarve e Findeln (pistas #6 e #7)',
      topRunDescription:
        'Longa descida panorâmica ao longo da aldeia gourmet de Findeln, com a face leste do Matterhorn desimpedida.',
      keyLifts: [
        'Funicular Sunnegga Express (metro subterrâneo a partir de Zermatt)',
        'Telecabine e telesqui de cadeira combinados de Blauherd',
        'Teleférico do Rothorn para 150 pessoas (3,103 m)',
        'Telecabine Kumme de 10 lugares (primeiro teleférico autónomo AURO da Suíça)',
      ],
    },
    gornergrat: {
      sunExposure: 'Este a sudoeste',
      bestFor: 'Pistas largas, famílias, esquiadores intermédios e viagens panorâmicas no comboio de cremalheira',
      description:
        'O coração panorâmico de Zermatt, onde se esquia ao lado do glaciar Gorner e dos carris históricos de cremalheira, com pendentes suaves a moderadas.',
      topRunName: 'De Riffelberg a Furi (pistas #36 e #41)',
      topRunDescription:
        'Pistas intermédias amplas, com a pirâmide do Matterhorn enquadrada de frente ao longo de todo o traçado.',
      keyLifts: [
        'Gornergrat Bahn (comboio de cremalheira, de 24 em 24 min)',
        'Telecabine Riffelberg Express (ligação direta entre sectores até Furi)',
        'Telesqui de cadeira aquecido Gifthittli de 6 lugares',
        'Teleférico de Hohtälli (3,286 m)',
      ],
    },
    'glacier-paradise': {
      sunExposure: 'Crista de alta montanha / sul',
      bestFor: 'Neve glaciar garantida, as pistas de esqui mais altas da Europa (3,883 m) e a ligação internacional para Itália',
      description:
        'O domínio de esqui servido por teleféricos mais alto da Europa. Assenta no glaciar Theodul, com neve todo o ano e ligação direta para lá da fronteira italiana.',
      topRunName: 'De Matterhorn Glacier Paradise até Zermatt (pistas #83/84/85)',
      topRunDescription:
        'Uma das descidas de esqui mais longas do mundo: 2,263 metros de desnível sem parar ao longo de 16 quilómetros contínuos.',
      keyLifts: [
        'Matterhorn Glacier Ride I e II (teleféricos 3S de Trockener Steg ao Klein Matterhorn e à Testa Grigia)',
        'Telecabine Matterhorn Express de 8 lugares (Zermatt – Furi – Schwarzsee – Trockener Steg)',
        'Telesqui de cadeira Furggsattel de 6 lugares (os pilares assentam em gelo glaciar ativo)',
        'Telesquis de Plateau Rosa (terreno de glaciar alto, verão e inverno)',
      ],
    },
    'cervinia-valtournenche': {
      sunExposure: 'Sul e sudeste (sol todo o dia)',
      bestFor: 'Pistas largas sem fim, almoços italianos caseiros a bom preço e grandes desníveis',
      description:
        'O lado italiano do Matterhorn Ski Paradise. Conhecido por pistas mais largas e perdoáveis, exposições soalheiras e esplanadas de massa de nível mundial a cerca de metade dos preços suíços.',
      topRunName: 'Pista Ventina de Plateau Rosa até Cervinia (pista #7)',
      topRunDescription:
        '11 quilómetros de carving contínuo em pista vermelha, com mais de 1,400 metros de desnível sob a face italiana do Matterhorn (Monte Cervino).',
      keyLifts: [
        'Matterhorn Alpine Crossing (ligação 3S Testa Grigia – Klein Matterhorn)',
        'Telecabine e teleférico Cervinia – Plan Maison',
        'Telesqui de cadeira rápido Pancheron de 6 lugares',
        'Ligação Valtournenche Reine Blanche (até ao fundo do vale a 1,524 m)',
      ],
    },
  },
  ko: {
    'sunnegga-rothorn': {
      sunExposure: '남향·남서향 (아침 첫 햇살)',
      bestFor: '카빙 크루징, 햇살 테라스 식사, 세계적인 모글 루트',
      description:
        '체르마트에서 가장 햇살이 좋은 구역입니다. 숲에 가려진 슬로프, 로토른 정상 아래의 고산 분지, 핀델른의 전설적인 미식 산장이 있습니다.',
      topRunName: '로토른에서 파트룰라르베와 핀델른까지 (슬로프 #6 & #7)',
      topRunDescription:
        '핀델른 미식 샤레 마을을 지나며 마터호른 동벽이 탁 트여 보이는 긴 전망 활강입니다.',
      keyLifts: [
        'Sunnegga Express 푸니쿨라 (체르마트에서 출발하는 지하 지하철)',
        'Blauherd 곤돌라·체어리프트 복합 리프트',
        'Rothorn 150인승 공중 케이블카 (3,103 m)',
        'Kumme 10인승 곤돌라 (스위스 최초의 자율 AURO 로프웨이)',
      ],
    },
    gornergrat: {
      sunExposure: '동향에서 남서향',
      bestFor: '넓은 고속도로형 슬로프, 가족, 중급 스키어, 파노라마 톱니바퀴 열차',
      description:
        '체르마트의 파노라마 중심입니다. 고르너 빙하와 역사적인 톱니바퀴 선로를 따라 완만하거나 중간 경사의 슬로프를 활강합니다.',
      topRunName: '리펠베르크에서 푸리까지 (슬로프 #36 & #41)',
      topRunDescription: '마터호른 피라미드가 정면으로 계속 보이는 넓은 중급 크루징 슬로프입니다.',
      keyLifts: [
        'Gornergrat Bahn (24분 간격 톱니바퀴 열차)',
        'Riffelberg Express 곤돌라 (푸리로 이어지는 구역 간 연결)',
        'Gifthittli 난방 6인승 체어리프트',
        'Hohtälli 공중 케이블카 (3,286 m)',
      ],
    },
    'glacier-paradise': {
      sunExposure: '고산 능선 / 남향',
      bestFor: '보장된 빙하 설질, 유럽에서 가장 높은 스키 슬로프 (3,883 m), 이탈리아 국제 연결',
      description:
        '유럽에서 리프트가 닿는 가장 높은 스키 구역입니다. 테오둘 빙하 위에 있으며 연중 눈이 보장되고 이탈리아 국경으로 바로 이어집니다.',
      topRunName: 'Matterhorn Glacier Paradise에서 체르마트까지 (슬로프 #83/84/85)',
      topRunDescription:
        '지구에서 가장 긴 스키 활강 중 하나: 2,263 m 고도차를 16 km 연속으로 멈추지 않고 내려갑니다.',
      keyLifts: [
        'Matterhorn Glacier Ride I & II (Trockener Steg에서 Klein Matterhorn과 Testa Grigia를 잇는 3S 케이블)',
        'Matterhorn Express 8인승 곤돌라 (Zermatt – Furi – Schwarzsee – Trockener Steg)',
        'Furggsattel 6인승 체어리프트 (지주가 움직이는 빙하 얼음 위에 서 있음)',
        'Plateau Rosa T-바 (여름·겨울 고산 빙하 지형)',
      ],
    },
    'cervinia-valtournenche': {
      sunExposure: '남향·남동향 (하루 종일 햇살)',
      bestFor: '끝없이 넓은 크루징, 합리적인 수제 이탈리아 점심, 큰 고도차 활강',
      description:
        'Matterhorn Ski Paradise의 이탈리아 쪽입니다. 더 넓고 관대한 슬로프, 햇살 좋은 사면, 스위스 가격의 약 절반인 파스타 테라스로 알려져 있습니다.',
      topRunName: 'Plateau Rosa에서 Cervinia까지 Ventina 슬로프 (슬로프 #7)',
      topRunDescription:
        '이탈리아 쪽 마터호른 벽(Monte Cervino) 아래에서 1,400 m 넘는 고도차를 잇는 11 km 연속 레드 카빙입니다.',
      keyLifts: [
        'Matterhorn Alpine Crossing (Testa Grigia – Klein Matterhorn 3S 연결)',
        'Cervinia – Plan Maison 곤돌라와 케이블카',
        'Pancheron 고속 6인승 체어리프트',
        'Valtournenche Reine Blanche 연결 (해발 1,524 m 계곡 바닥까지)',
      ],
    },
  },
  ja: {
    'sunnegga-rothorn': {
      sunExposure: '南・南西向き（朝いちばんの日差し）',
      bestFor: 'カービングのクルージング、日向のテラス食事、世界水準のモーグルルート',
      description:
        'ツェルマットで最も日当たりのよいエリア。守られた樹林コース、ロートホルン直下の高山のボウル、フィンデルンの伝説的なグルメヒュッテがあります。',
      topRunName: 'ロートホルンから Patrullarve と Findeln へ（コース #6 と #7）',
      topRunDescription:
        'フィンデルンのグルメ集落を抜け、マッターホルン東壁が開けて見える長い展望滑降です。',
      keyLifts: [
        'Sunnegga Express ケーブルカー（ツェルマットからの地下メトロ）',
        'Blauherd のゴンドラ／チェアリフト複合',
        'Rothorn 150人乗りロープウェイ（3,103 m）',
        'Kumme 10人乗りゴンドラ（スイス初の自律 AURO 索道）',
      ],
    },
    gornergrat: {
      sunExposure: '東から南西',
      bestFor: '広い高速道路のようなクルージング、ファミリー、中級者、パノラマのラック式鉄道',
      description:
        'ツェルマットのパノラマの中心。ゴルナー氷河と歴史あるラック式線路に沿い、緩やかから中程度の斜度を滑ります。',
      topRunName: 'Riffelberg から Furi へ（コース #36 と #41）',
      topRunDescription: 'マッターホルンのピラミッドが正面に続き、広い中級クルージングコースです。',
      keyLifts: [
        'Gornergrat Bahn（24分間隔のラック式鉄道）',
        'Riffelberg Express ゴンドラ（Furi へのエリア間連絡）',
        'Gifthittli 暖房付き6人乗りチェアリフト',
        'Hohtälli ロープウェイ（3,286 m）',
      ],
    },
    'glacier-paradise': {
      sunExposure: '高山の稜線／南',
      bestFor: '保証された氷河の雪、ヨーロッパ最高所のゲレンデ（3,883 m）、イタリアへの国際連絡',
      description:
        'ヨーロッパでリフトが届く最高所のスキーエリア。テオドゥル氷河の上にあり、通年の雪とイタリア国境を越える直結があります。',
      topRunName: 'Matterhorn Glacier Paradise からツェルマットまで（コース #83/84/85）',
      topRunDescription:
        '世界最長級のスキー滑降の一つ。2,263 m の標高差を、16 km 連続でノンストップです。',
      keyLifts: [
        'Matterhorn Glacier Ride I & II（Trockener Steg から Klein Matterhorn と Testa Grigia を結ぶ 3S）',
        'Matterhorn Express 8人乗りゴンドラ（Zermatt – Furi – Schwarzsee – Trockener Steg）',
        'Furggsattel 6人乗りチェアリフト（支柱が動く氷河氷の上に立つ）',
        'Plateau Rosa のTバー（夏冬の高所氷河地形）',
      ],
    },
    'cervinia-valtournenche': {
      sunExposure: '南・南東（一日中日向）',
      bestFor: '終わりのない広いクルージング、手頃な自家製イタリア料理の昼食、大きな標高差',
      description:
        'Matterhorn Ski Paradise のイタリア側。より広く滑りやすいゲレンデ、日当たり、スイスの約半額のパスタテラスで知られます。',
      topRunName: 'Plateau Rosa から Cervinia への Ventina（コース #7）',
      topRunDescription:
        'イタリア側のマッターホルン壁（Monte Cervino）の下で、1,400 m 超の標高差を連続レッドでカービングする 11 km です。',
      keyLifts: [
        'Matterhorn Alpine Crossing（Testa Grigia – Klein Matterhorn の 3S 連絡）',
        'Cervinia – Plan Maison のゴンドラとロープウェイ',
        'Pancheron 高速6人乗りチェアリフト',
        'Valtournenche Reine Blanche 連絡（標高 1,524 m の谷底まで）',
      ],
    },
  },
  zh: {
    'sunnegga-rothorn': {
      sunExposure: '南向与西南向（清晨第一缕阳光）',
      bestFor: '巡航式大回转、向阳露台用餐、世界级蘑菇道线路',
      description:
        '采尔马特阳光最好的雪区：有树林庇护的雪道、罗特峰下的高山雪盆，以及芬德尔恩传奇的美食木屋。',
      topRunName: '从 Rothorn 到 Patrullarve 与 Findeln（雪道 #6 与 #7）',
      topRunDescription: '漫长的景观滑降经过芬德尔恩美食木屋村，马特洪峰东壁一览无余。',
      keyLifts: [
        'Sunnegga Express 缆索铁路（从采尔马特出发的地下地铁）',
        'Blauherd 缆车与吊椅组合索道',
        'Rothorn 150 人吊厢索道（3,103 米）',
        'Kumme 10 人缆车（瑞士第一条自主运行的 AURO 索道）',
      ],
    },
    gornergrat: {
      sunExposure: '东向至西南向',
      bestFor: '宽阔的巡航雪道、家庭、中级滑雪者，以及齿轨列车的全景行程',
      description:
        '采尔马特的全景中心。滑雪者沿着戈尔内冰川和历史齿轨滑行，坡度由缓到中等。',
      topRunName: '从 Riffelberg 到 Furi（雪道 #36 与 #41）',
      topRunDescription: '开阔的中级巡航道，马特洪峰金字塔始终正对前方。',
      keyLifts: [
        'Gornergrat Bahn（齿轨列车，每 24 分钟一班）',
        'Riffelberg Express 缆车（直达 Furi 的跨区连接）',
        'Gifthittli 加热 6 人吊椅',
        'Hohtälli 吊厢索道（3,286 米）',
      ],
    },
    'glacier-paradise': {
      sunExposure: '高山地脊 / 南向',
      bestFor: '有保障的冰川雪、欧洲最高的滑雪道（3,883 米），以及通往意大利的国际连接',
      description:
        '欧洲海拔最高、有索道服务的滑雪区。坐落在特奥杜尔冰川上，全年有雪，并可直接越过意大利边境。',
      topRunName: '从 Matterhorn Glacier Paradise 滑到采尔马特（雪道 #83/84/85）',
      topRunDescription: '地球上最长的滑雪下降之一：连续 16 公里、落差 2,263 米，中途不停。',
      keyLifts: [
        'Matterhorn Glacier Ride I 与 II（连接 Trockener Steg、Klein Matterhorn 与 Testa Grigia 的 3S 索道）',
        'Matterhorn Express 8 人缆车（Zermatt – Furi – Schwarzsee – Trockener Steg）',
        'Furggsattel 6 人吊椅（支架立在活动冰川冰面上）',
        'Plateau Rosa 拖牵（夏冬皆可滑的高海拔冰川地形）',
      ],
    },
    'cervinia-valtournenche': {
      sunExposure: '南向与东南向（全天有阳光）',
      bestFor: '没有尽头的宽阔巡航道、实惠的自制意大利午餐，以及巨大的垂直落差',
      description:
        'Matterhorn Ski Paradise 的意大利一侧。以更宽、更宽容的雪道、向阳坡面，以及大约瑞士一半价格的意面露台闻名。',
      topRunName: '从 Plateau Rosa 到 Cervinia 的 Ventina（雪道 #7）',
      topRunDescription:
        '连续 11 公里的红道大回转，落差超过 1,400 米，就在意大利一侧的马特洪峰岩壁（Monte Cervino）之下。',
      keyLifts: [
        'Matterhorn Alpine Crossing（Testa Grigia – Klein Matterhorn 的 3S 连接）',
        'Cervinia – Plan Maison 缆车与吊厢',
        'Pancheron 高速 6 人吊椅',
        'Valtournenche Reine Blanche 连接（下到海拔 1,524 米的谷底）',
      ],
    },
  },
  'zh-tw': {
    'sunnegga-rothorn': {
      sunExposure: '朝南與西南（清晨最先照到的陽光）',
      bestFor: '適合巡航大迴轉、向陽露臺用餐，以及世界級的蘑菇道路線',
      description:
        '策馬特日照最好的雪區：有樹林遮蔽的雪道、羅特峰下的高山雪盆，還有芬德爾恩那些出名的美食木屋。',
      topRunName: '從 Rothorn 到 Patrullarve 與 Findeln（雪道 #6 與 #7）',
      topRunDescription: '漫長的景觀滑降經過芬德爾恩美食木屋聚落，馬特洪峰東壁完全敞開。',
      keyLifts: [
        'Sunnegga Express 纜索鐵路（從策馬特出發的地下地鐵）',
        'Blauherd 纜車與吊椅複合索道',
        'Rothorn 150 人吊廂（海拔 3,103 公尺）',
        'Kumme 10 人纜車（瑞士第一條自主運轉的 AURO 索道）',
      ],
    },
    gornergrat: {
      sunExposure: '東向到西南向',
      bestFor: '寬闊的巡航雪道、家庭、中級滑雪者，以及齒軌列車的全景行程',
      description:
        '策馬特的全景核心。滑雪者沿著戈爾內冰川與歷史齒軌滑行，坡度由緩到中等。',
      topRunName: '從 Riffelberg 到 Furi（雪道 #36 與 #41）',
      topRunDescription: '開闊的中級巡航道，馬特洪峰金字塔始終正對著前方。',
      keyLifts: [
        'Gornergrat Bahn（齒軌列車，每 24 分鐘一班）',
        'Riffelberg Express 纜車（直達 Furi 的跨區聯絡）',
        'Gifthittli 有加熱的 6 人吊椅',
        'Hohtälli 吊廂索道（海拔 3,286 公尺）',
      ],
    },
    'glacier-paradise': {
      sunExposure: '高山地脊／朝南',
      bestFor: '有保障的冰川雪、歐洲最高的滑雪道（3,883 公尺），以及通往義大利的跨境聯絡',
      description:
        '歐洲海拔最高、有索道服務的滑雪區。坐落在特奧杜爾冰川上，全年有雪，並可直接越到義大利邊界另一側。',
      topRunName: '從 Matterhorn Glacier Paradise 滑到策馬特（雪道 #83/84/85）',
      topRunDescription: '世上最長的滑雪下降之一：連續 16 公里、落差 2,263 公尺，中途不用停。',
      keyLifts: [
        'Matterhorn Glacier Ride I 與 II（連接 Trockener Steg、Klein Matterhorn 與 Testa Grigia 的 3S 索道）',
        'Matterhorn Express 8 人纜車（Zermatt – Furi – Schwarzsee – Trockener Steg）',
        'Furggsattel 6 人吊椅（支架立在仍在移動的冰川冰面上）',
        'Plateau Rosa 拖牽（夏冬都能滑的高海拔冰川地形）',
      ],
    },
    'cervinia-valtournenche': {
      sunExposure: '朝南與東南（整天都有陽光）',
      bestFor: '沒有盡頭的寬闊巡航道、價格友善的義式家常午餐，以及很大的垂直落差',
      description:
        'Matterhorn Ski Paradise 的義大利這一側。雪道更寬、更好滑，坡面向陽，義麵露臺的價位大約只有瑞士的一半。',
      topRunName: '從 Plateau Rosa 到 Cervinia 的 Ventina（雪道 #7）',
      topRunDescription:
        '連續 11 公里的紅道大迴轉，落差超過 1,400 公尺，就在義大利這一側的馬特洪峰岩壁（Monte Cervino）底下。',
      keyLifts: [
        'Matterhorn Alpine Crossing（Testa Grigia – Klein Matterhorn 的 3S 聯絡）',
        'Cervinia – Plan Maison 纜車與吊廂',
        'Pancheron 高速 6 人吊椅',
        'Valtournenche Reine Blanche 聯絡（下到海拔 1,524 公尺的谷底）',
      ],
    },
  },
};

const PASS_TEXT: Record<NonEn, Record<string, PassText>> = {
  de: {
    'zermatt-local': {
      name: 'Zermatt Lokal-Skipass',
      scope: 'Nur Zermatt (Schweiz)',
      keyFeature: 'Gilt für Sunnegga, Rothorn, Gornergrat und Klein Matterhorn bis zur italienischen Grenze.',
      bestSuitedFor: 'Wer nur in der Schweiz bleibt oder an Tagen, an denen die Verbindung nach Italien geschlossen ist.',
    },
    'matterhorn-international': {
      name: 'Matterhorn International-Skipass',
      scope: 'International (Zermatt + Cervinia)',
      keyFeature: 'Voller Zugang zu allen 360 km Pisten in der Schweiz und in Italien (Breuil-Cervinia & Valtournenche).',
      bestSuitedFor: 'Wer das grenzüberschreitende Erlebnis und ein Mittagessen in Italien will.',
      ikonNote: 'Täglich aufrüstbar, wenn der Ikon Pass die Schweizer Seite abdeckt.',
    },
    'wolli-card': {
      name: 'Wolli Card / Einsteigerpass',
      scope: 'Einsteiger (Wolli Card)',
      keyFeature: 'Kinder bis 8.99 Jahre fahren im gesamten Skigebiet Zermatt komplett GRATIS.',
      bestSuitedFor: 'Familien mit kleinen Kindern (kostenlose Wolli Card am Schalter mit Ausweis).',
    },
  },
  es: {
    'zermatt-local': {
      name: 'Forfait local de Zermatt',
      scope: 'Solo Zermatt (Suiza)',
      keyFeature: 'Cubre Sunnegga, Rothorn, Gornergrat y Klein Matterhorn hasta la frontera italiana.',
      bestSuitedFor: 'Quien esquía solo en Suiza o los días de mal tiempo en que el enlace con Italia está cerrado.',
    },
    'matterhorn-international': {
      name: 'Forfait internacional Matterhorn',
      scope: 'Internacional (Zermatt + Cervinia)',
      keyFeature: 'Acceso completo a los 360 km de pistas en Suiza e Italia (Breuil-Cervinia y Valtournenche).',
      bestSuitedFor: 'Quien quiere la experiencia transfronteriza completa y comer en Italia.',
      ikonNote: 'Se puede ampliar cada día si el Ikon Pass cubre el lado suizo.',
    },
    'wolli-card': {
      name: 'Wolli Card / forfait de principiante',
      scope: 'Principiante (Wolli Card)',
      keyFeature: 'Los niños de hasta 8.99 años esquían GRATIS en toda la estación de Zermatt.',
      bestSuitedFor: 'Familias con niños pequeños (Wolli Card gratuita en taquilla con documento).',
    },
  },
  fr: {
    'zermatt-local': {
      name: 'Forfait ski local de Zermatt',
      scope: 'Zermatt seulement (Suisse)',
      keyFeature: 'Couvre Sunnegga, Rothorn, Gornergrat et Klein Matterhorn jusqu’à la frontière italienne.',
      bestSuitedFor: 'Ski uniquement en Suisse, ou journées où la liaison vers l’Italie est fermée.',
    },
    'matterhorn-international': {
      name: 'Forfait international Matterhorn',
      scope: 'International (Zermatt + Cervinia)',
      keyFeature: 'Accès à l’ensemble des 360 km de pistes en Suisse et en Italie (Breuil-Cervinia et Valtournenche).',
      bestSuitedFor: 'Pour l’expérience transfrontalière complète et le déjeuner en Italie.',
      ikonNote: 'Surclassement possible chaque jour si l’Ikon Pass couvre le versant suisse.',
    },
    'wolli-card': {
      name: 'Wolli Card / forfait débutant',
      scope: 'Débutant (Wolli Card)',
      keyFeature: 'Les enfants jusqu’à 8.99 ans skient GRATUITEMENT dans toute la station de Zermatt.',
      bestSuitedFor: 'Familles avec jeunes enfants (Wolli Card gratuite au guichet avec pièce d’identité).',
    },
  },
  it: {
    'zermatt-local': {
      name: 'Skipass locale di Zermatt',
      scope: 'Solo Zermatt (Svizzera)',
      keyFeature: 'Copre Sunnegga, Rothorn, Gornergrat e Klein Matterhorn fino al confine italiano.',
      bestSuitedFor: 'Chi scia solo in Svizzera o nei giorni in cui il collegamento con l’Italia è chiuso.',
    },
    'matterhorn-international': {
      name: 'Skipass internazionale Matterhorn',
      scope: 'Internazionale (Zermatt + Cervinia)',
      keyFeature: 'Accesso completo a tutti i 360 km di piste in Svizzera e in Italia (Breuil-Cervinia e Valtournenche).',
      bestSuitedFor: 'Chi vuole l’esperienza transfrontaliera e il pranzo in Italia.',
      ikonNote: 'Si può integrare ogni giorno se l’Ikon Pass copre il versante svizzero.',
    },
    'wolli-card': {
      name: 'Wolli Card / skipass principianti',
      scope: 'Principianti (Wolli Card)',
      keyFeature: 'I bambini fino a 8.99 anni sciano GRATIS in tutto il comprensorio di Zermatt.',
      bestSuitedFor: 'Famiglie con bambini piccoli (Wolli Card gratuita in biglietteria con documento).',
    },
  },
  pt: {
    'zermatt-local': {
      name: 'Passe de esqui local de Zermatt',
      scope: 'Apenas Zermatt (Suíça)',
      keyFeature: 'Cobre Sunnegga, Rothorn, Gornergrat e Klein Matterhorn até à fronteira italiana.',
      bestSuitedFor: 'Quem esquia só na Suíça, ou nos dias de mau tempo em que a ligação a Itália está fechada.',
    },
    'matterhorn-international': {
      name: 'Passe de esqui internacional Matterhorn',
      scope: 'Internacional (Zermatt + Cervinia)',
      keyFeature: 'Acesso total aos 360 km de pistas na Suíça e em Itália (Breuil-Cervinia e Valtournenche).',
      bestSuitedFor: 'Quem quer a travessia completa da fronteira e almoçar em Itália.',
      ikonNote: 'Pode ser reforçado por dia se o Ikon Pass cobrir o lado suíço.',
    },
    'wolli-card': {
      name: 'Wolli Card / passe de iniciação',
      scope: 'Iniciação (Wolli Card)',
      keyFeature: 'Crianças até 8.99 anos esquiam GRÁTIS em toda a estância de Zermatt.',
      bestSuitedFor: 'Famílias com crianças pequenas (Wolli Card gratuita na bilheteira com documento).',
    },
  },
  ko: {
    'zermatt-local': {
      name: '체르마트 로컬 스키 패스',
      scope: '체르마트만 (스위스)',
      keyFeature: 'Sunnegga, Rothorn, Gornergrat, Klein Matterhorn까지 이탈리아 국경 직전을 포함합니다.',
      bestSuitedFor: '스위스에만 머물거나, 이탈리아 연결이 닫힌 악천후일에 적합합니다.',
    },
    'matterhorn-international': {
      name: '마터호른 인터내셔널 스키 패스',
      scope: '국제 (Zermatt + Cervinia)',
      keyFeature: '스위스와 이탈리아(Breuil-Cervinia & Valtournenche)의 360 km 슬로프 전체.',
      bestSuitedFor: '국경을 넘는 경험과 이탈리아 점심을 원하는 스키어.',
      ikonNote: 'Ikon Pass가 스위스 쪽을 포함하면 매일 업그레이드할 수 있습니다.',
    },
    'wolli-card': {
      name: 'Wolli Card / 입문 패스',
      scope: '입문 (Wolli Card)',
      keyFeature: '만 8.99세까지 어린이는 체르마트 전 리프트가 완전히 무료입니다.',
      bestSuitedFor: '어린 자녀가 있는 가족 (매표소에서 신분증으로 무료 Wolli Card 수령).',
    },
  },
  ja: {
    'zermatt-local': {
      name: 'ツェルマット現地スキーパス',
      scope: 'ツェルマットのみ（スイス）',
      keyFeature: 'Sunnegga、Rothorn、Gornergrat、Klein Matterhorn からイタリア国境までを含みます。',
      bestSuitedFor: 'スイス側だけ滑る人、またはイタリア連絡が閉鎖の悪天日。',
    },
    'matterhorn-international': {
      name: 'マッターホルン国際スキーパス',
      scope: '国際（Zermatt + Cervinia）',
      keyFeature: 'スイスとイタリア（Breuil-Cervinia と Valtournenche）の 360 km すべてに乗れます。',
      bestSuitedFor: '国境を越える体験とイタリアでの昼食を求める人。',
      ikonNote: 'Ikon Pass がスイス側を含む場合、日ごとにアップグレードできます。',
    },
    'wolli-card': {
      name: 'Wolli Card／初心者パス',
      scope: '初心者（Wolli Card）',
      keyFeature: '8.99歳までの子どもはツェルマット全域が完全無料です。',
      bestSuitedFor: '小さな子どものいる家族（窓口で身分証を提示すれば Wolli Card は無料）。',
    },
  },
  zh: {
    'zermatt-local': {
      name: '采尔马特本地滑雪通票',
      scope: '仅采尔马特（瑞士）',
      keyFeature: '覆盖 Sunnegga、Rothorn、Gornergrat 和 Klein Matterhorn，直到意大利边境。',
      bestSuitedFor: '只在瑞士滑，或意大利连接因天气关闭的日子。',
    },
    'matterhorn-international': {
      name: '马特洪峰国际滑雪通票',
      scope: '国际（采尔马特 + 切尔维尼亚）',
      keyFeature: '瑞士和意大利（Breuil-Cervinia 与 Valtournenche）全部 360 公里雪道。',
      bestSuitedFor: '想完成跨境滑行并在意大利吃午饭的人。',
      ikonNote: '若 Ikon Pass 已含瑞士一侧，可按天升级。',
    },
    'wolli-card': {
      name: 'Wolli Card / 初学者通票',
      scope: '初学者（Wolli Card）',
      keyFeature: '未满 8.99 岁的儿童在整个采尔马特雪场完全免费。',
      bestSuitedFor: '有幼儿的家庭（在售票处凭证件领取免费 Wolli Card）。',
    },
  },
  'zh-tw': {
    'zermatt-local': {
      name: '策馬特本地滑雪通票',
      scope: '僅策馬特（瑞士）',
      keyFeature: '涵蓋 Sunnegga、Rothorn、Gornergrat 與 Klein Matterhorn，直到義大利邊境。',
      bestSuitedFor: '只在瑞士滑，或義大利聯絡因天氣關閉的日子。',
    },
    'matterhorn-international': {
      name: '馬特洪峰國際滑雪通票',
      scope: '國際（策馬特 + 切爾維尼亞）',
      keyFeature: '瑞士與義大利（Breuil-Cervinia 及 Valtournenche）全部 360 公里雪道。',
      bestSuitedFor: '想完成跨境滑行，並在義大利吃午餐的人。',
      ikonNote: '若 Ikon Pass 已含瑞士這一側，可以按天加購。',
    },
    'wolli-card': {
      name: 'Wolli Card／初學通票',
      scope: '初學（Wolli Card）',
      keyFeature: '未滿 8.99 歲的孩童在整個策馬特雪場完全免費。',
      bestSuitedFor: '有幼兒的家庭（在售票處憑證件領取免費 Wolli Card）。',
    },
  },
};

const DINING_TEXT: Record<NonEn, Record<string, DiningText>> = {
  de: {
    'chez-vrony': {
      cuisine: 'Bio-Walliser Spezialitäten und moderne alpine Gourmetküche',
      signatureDish: 'Vrony-Burger mit Trockenfleisch und Walliser Käse, hausgemachte Ravioli und Apfelstrudel mit Vanillesauce.',
      vibe: 'Schick-rustikaler Luxus mit Sonnenterrasse direkt zur Ostwand des Matterhorns.',
      tip: '3–6 Wochen im Voraus buchen, wenn um 13:00 ein Liegestuhl in der ersten Reihe frei sein soll.',
    },
    findlerhof: {
      cuisine: 'Feine Walliser Küche, frische Trüffel und ein grosser Weinkeller',
      signatureDish: 'Matterhorn-Quiche, Trüffelpasta und frischer Lammrücken mit Walliser Kräutern.',
      vibe: 'Intimes, verwittertes Holzchalet mit einer geschützten Gartenterrasse.',
      tip: 'Etwas tiefer an der Findeln-Piste #6. Ohne Ski etwa 20 Minuten zu Fuss ab der Sunnegga-Standseilbahn.',
    },
    alphitta: {
      cuisine: 'Alpine Hausmannskost und Terrasse mit Livemusik',
      signatureDish: 'Frische Rösti, Tomahawk-Steaks und handgemachte Käsefondues.',
      vibe: 'Lebendige Akustikmusik, Liegestühle mit Schaffell und volles Nachmittagspublikum.',
      tip: 'Gute Alternative, wenn Chez Vrony ausgebucht ist.',
    },
    bontadini: {
      cuisine: 'Aostatal und italienische Pasta',
      signatureDish: 'Handgemachte Tagliolini mit schwarzem Trüffel, Hirschragù und Polenta concia mit Fontina aus dem Aostatal.',
      vibe: 'Italienische Wärme auf 3,000 m, mit hausgemachter Pasta zu etwa dem halben Schweizer Preis.',
      tip: 'Knapp unter dem Theodulpass auf der italienischen Seite. Die Uhr im Blick behalten, um die Bahn zurück nach Zermatt zu erwischen.',
    },
    'chalet-etoile': {
      cuisine: 'Schwedisch-italienische Meeresküche und Bergfusion',
      signatureDish: 'Königskrabben-Ravioli, Hummerpasta und Rentiersteak.',
      vibe: 'Seit 1974 eines der bekanntesten Skirestaurants der italienischen Alpen.',
      tip: 'An Winterwochenenden ist eine Reservation nötig. Über leichte blaue Pisten ab Plan Maison erreichbar.',
    },
    'iglu-dorf': {
      cuisine: 'Klassisches Schweizer Käsefondue und Glühweinbar',
      signatureDish: 'Walliser All-Cheese-Fondue in handgeschnitzten Schnee- und Eisräumen.',
      vibe: 'Eisbar, Sonnenliegen und entspannte Musik direkt an den Pisten von Riffelberg.',
      tip: 'Ohne Ski mit der Gornergrat Bahn nach Rotenboden und 10 Minuten zu Fuss hinunter.',
    },
  },
  es: {
    'chez-vrony': {
      cuisine: 'Especialidades ecológicas del Valais y alta cocina alpina',
      signatureDish: 'Hamburguesa Vrony con carne seca y queso del Valais, raviolis caseros y strudel de manzana con salsa de vainilla.',
      vibe: 'Lujo rústico con terraza al sol de cara a la cara este del Matterhorn.',
      tip: 'Reserve con 3–6 semanas de antelación para una tumbona de primera fila a las 13:00.',
    },
    findlerhof: {
      cuisine: 'Cocina fina del Valais, trufa fresca y gran bodega',
      signatureDish: 'Quiche Matterhorn, pasta con trufa y carré de cordero fresco con hierbas del Valais.',
      vibe: 'Chalé íntimo de madera envejecida con una terraza-jardín muy resguardada.',
      tip: 'Un poco más abajo en la pista #6 de Findeln. Sin esquís, unos 20 minutos a pie desde el funicular de Sunnegga.',
    },
    alphitta: {
      cuisine: 'Cocina alpina de confort y terraza con música en vivo',
      signatureDish: 'Rösti recién hecha, steaks tomahawk y fondues de queso artesanas.',
      vibe: 'Música acústica en vivo, tumbonas con piel de oveja y ambiente animado por la tarde.',
      tip: 'Buena alternativa si Chez Vrony está completo.',
    },
    bontadini: {
      cuisine: 'Pasta auténtica del Valle de Aosta e italiana',
      signatureDish: 'Tagliolini hechos a mano con trufa negra, ragú de ciervo y polenta concia con fontina de Aosta.',
      vibe: 'Calidez italiana en altura, con pasta casera a aproximadamente la mitad del precio suizo.',
      tip: 'Justo bajo el Theodulpass, en el lado italiano. Mire el reloj para coger el teleférico de vuelta a Zermatt.',
    },
    'chalet-etoile': {
      cuisine: 'Marisco sueco-italiano y fusión de montaña',
      signatureDish: 'Raviolis de centollo, pasta de bogavante y filete de reno.',
      vibe: 'Uno de los restaurantes de esquí más famosos de los Alpes italianos desde 1974.',
      tip: 'En fines de semana de invierno la reserva es imprescindible. Se llega por pistas azules suaves desde Plan Maison.',
    },
    'iglu-dorf': {
      cuisine: 'Fondue de queso suiza clásica y bar de vino caliente',
      signatureDish: 'Fondue del Valais solo de queso, servida en salas de nieve y hielo talladas a mano.',
      vibe: 'Bar de hielo, tumbonas al sol y música suave junto a las pistas de Riffelberg.',
      tip: 'Sin esquís: Gornergrat Bahn hasta Rotenboden y 10 minutos a pie cuesta abajo.',
    },
  },
  fr: {
    'chez-vrony': {
      cuisine: 'Spécialités bio du Valais et gastronomie alpine moderne',
      signatureDish: 'Burger Vrony à la viande séchée et au fromage du Valais, raviolis maison et strudel aux pommes, sauce vanille.',
      vibe: 'Luxe rustique chic, terrasse au soleil face à la face est du Cervin.',
      tip: 'Réserver 3 à 6 semaines à l’avance pour un transat au premier rang à 13:00.',
    },
    findlerhof: {
      cuisine: 'Cuisine valaisanne fine, truffes fraîches et grande cave',
      signatureDish: 'Quiche Matterhorn, pâtes à la truffe et carré d’agneau frais aux herbes du Valais.',
      vibe: 'Chalet intime en bois patiné, avec une terrasse-jardin très abritée.',
      tip: 'Un peu plus bas sur la piste #6 de Findeln. Sans skis, environ 20 minutes à pied depuis le funiculaire de Sunnegga.',
    },
    alphitta: {
      cuisine: 'Cuisine alpine réconfortante et terrasse avec musique live',
      signatureDish: 'Poêles de rösti fraîches, steaks tomahawk et fondues au fromage artisanales.',
      vibe: 'Musique acoustique live, transats en peau de mouton et foule animée l’après-midi.',
      tip: 'Bonne alternative si Chez Vrony est complet.',
    },
    bontadini: {
      cuisine: 'Pâtes authentiques du Val d’Aoste et d’Italie',
      signatureDish: 'Tagliolini faits main à la truffe noire, ragù de cerf et polenta concia à la fontina d’Aoste.',
      vibe: 'Chaleur italienne en altitude, pâtes maison à environ la moitié des prix suisses.',
      tip: 'Juste sous le Theodulpass, côté italien. Surveillez l’heure pour reprendre le téléphérique vers Zermatt.',
    },
    'chalet-etoile': {
      cuisine: 'Fruits de mer suédo-italiens et fusion de montagne',
      signatureDish: 'Raviolis au crabe royal, pâtes au homard et steak de renne.',
      vibe: 'L’un des restaurants de ski les plus connus des Alpes italiennes depuis 1974.',
      tip: 'La réservation est indispensable les week-ends d’hiver. Accès par des bleues douces depuis Plan Maison.',
    },
    'iglu-dorf': {
      cuisine: 'Fondue au fromage suisse classique et bar à vin chaud',
      signatureDish: 'Fondue valaisanne tout fromage, servie dans des salles de neige et de glace sculptées à la main.',
      vibe: 'Bar de glace, transats au soleil et musique douce au bord des pistes de Riffelberg.',
      tip: 'Sans skis : Gornergrat Bahn jusqu’à Rotenboden, puis 10 minutes à pied en descente.',
    },
  },
  it: {
    'chez-vrony': {
      cuisine: 'Specialità bio del Vallese e cucina alpina moderna',
      signatureDish: 'Burger Vrony con carne secca e formaggio vallesano, ravioli fatti in casa e strudel di mele con salsa alla vaniglia.',
      vibe: 'Lusso rustico con terrazza al sole di fronte alla parete est del Cervino.',
      tip: 'Prenotare 3–6 settimane prima per un lettino in prima fila alle 13:00.',
    },
    findlerhof: {
      cuisine: 'Cucina fine del Vallese, tartufo fresco e grande cantina',
      signatureDish: 'Quiche Matterhorn, pasta al tartufo e carré d’agnello fresco con erbe vallesane.',
      vibe: 'Chalet intimo in legno vissuto, con una terrazza-giardino molto riparata.',
      tip: 'Poco più in basso sulla pista #6 di Findeln. Senza sci, circa 20 minuti a piedi dalla funicolare di Sunnegga.',
    },
    alphitta: {
      cuisine: 'Cucina alpina di conforto e terrazza con musica dal vivo',
      signatureDish: 'Rösti appena fatte, tomahawk e fondute di formaggio artigianali.',
      vibe: 'Musica acustica dal vivo, lettini in pelle di pecora e folla vivace nel pomeriggio.',
      tip: 'Buona alternativa se Chez Vrony è al completo.',
    },
    bontadini: {
      cuisine: 'Pasta autentica della Valle d’Aosta e italiana',
      signatureDish: 'Tagliolini fatti a mano al tartufo nero, ragù di cervo e polenta concia con fontina della Valle d’Aosta.',
      vibe: 'Calore italiano in quota, con pasta fatta in casa a circa metà dei prezzi svizzeri.',
      tip: 'Appena sotto il Theodulpass, lato italiano. Tenete d’occhio l’orologio per la funivia di rientro a Zermatt.',
    },
    'chalet-etoile': {
      cuisine: 'Pesce svedese-italiano e fusion di montagna',
      signatureDish: 'Ravioli di granchio reale, pasta all’astice e bistecca di renna.',
      vibe: 'Dal 1974 uno dei ristoranti sciistici più noti delle Alpi italiane.',
      tip: 'Nel fine settimana invernale la prenotazione è indispensabile. Si raggiunge su blu facili da Plan Maison.',
    },
    'iglu-dorf': {
      cuisine: 'Fonduta di formaggio svizzera classica e bar di vin brulé',
      signatureDish: 'Fonduta vallesana solo formaggio, servita in sale di neve e ghiaccio scolpite a mano.',
      vibe: 'Bar di ghiaccio, lettini al sole e musica soft proprio sulle piste di Riffelberg.',
      tip: 'Senza sci: Gornergrat Bahn fino a Rotenboden e 10 minuti a piedi in discesa.',
    },
  },
  pt: {
    'chez-vrony': {
      cuisine: 'Especialidades biológicas do Valais e cozinha alpina moderna',
      signatureDish: 'Hambúrguer Vrony com carne seca e queijo do Valais, ravioli caseiro e strudel de maçã com molho de baunilha.',
      vibe: 'Luxo rústico com esplanada ao sol, de frente para a face leste do Matterhorn.',
      tip: 'Reserve com 3–6 semanas de antecedência para uma espreguiçadeira na primeira fila às 13:00.',
    },
    findlerhof: {
      cuisine: 'Cozinha fina do Valais, trufa fresca e grande cave de vinhos',
      signatureDish: 'Quiche Matterhorn, massa com trufa e carré de borrego fresco com ervas do Valais.',
      vibe: 'Chalé íntimo de madeira envelhecida, com um terraço-jardim muito abrigado.',
      tip: 'Um pouco mais abaixo na pista #6 de Findeln. Sem esqui, cerca de 20 minutos a pé desde o funicular de Sunnegga.',
    },
    alphitta: {
      cuisine: 'Cozinha alpina de conforto e esplanada com música ao vivo',
      signatureDish: 'Rösti acabada de fazer, steaks tomahawk e fondues de queijo artesanais.',
      vibe: 'Música acústica ao vivo, espreguiçadeiras com pele de ovelha e movimento à tarde.',
      tip: 'Boa alternativa se o Chez Vrony estiver esgotado.',
    },
    bontadini: {
      cuisine: 'Massa autêntica do Vale de Aosta e italiana',
      signatureDish: 'Tagliolini feitos à mão com trufa negra, ragù de veado e polenta concia com fontina de Aosta.',
      vibe: 'Calor italiano em altitude, com massa caseira a cerca de metade dos preços suíços.',
      tip: 'Mesmo abaixo do Theodulpass, do lado italiano. Vigie o relógio para apanhar o teleférico de regresso a Zermatt.',
    },
    'chalet-etoile': {
      cuisine: 'Marisco sueco-italiano e fusão de montanha',
      signatureDish: 'Ravioli de caranguejo-real, massa de lavagante e bife de rena.',
      vibe: 'Desde 1974, um dos restaurantes de esqui mais conhecidos dos Alpes italianos.',
      tip: 'Aos fins de semana de inverno a reserva é indispensável. Chega-se por pistas azuis suaves a partir de Plan Maison.',
    },
    'iglu-dorf': {
      cuisine: 'Fondue de queijo suíça clássica e bar de vinho quente',
      signatureDish: 'Fondue do Valais só de queijo, servida em salas de neve e gelo esculpidas à mão.',
      vibe: 'Bar de gelo, espreguiçadeiras ao sol e música calma mesmo ao lado das pistas de Riffelberg.',
      tip: 'Sem esqui: comboio Gornergrat Bahn até Rotenboden e 10 minutos a pé a descer.',
    },
  },
  ko: {
    'chez-vrony': {
      cuisine: '유기농 발레 요리와 현대 알파인 고메',
      signatureDish: '건조 쇠고기와 발레 치즈를 넣은 Vrony 버거, 수제 라비올리, 바닐라 소스를 곁들인 사과 슈트루델.',
      vibe: '마터호른 동벽을 정면으로 보는 햇빛 테라스가 있는 세련된  rustic 럭셔리.',
      tip: '13:00 맨 앞줄 선베드를 원하면 3–6주 전에 예약하세요.',
    },
    findlerhof: {
      cuisine: '섬세한 발레 요리, 생트러플, 넓은 와인 셀러',
      signatureDish: '마터호른 키시, 트러플 파스타, 발레 허브를 곁들인 신선한 양갈비.',
      vibe: '비바람을 막아 주는 정원 테라스가 있는 아늑한 오래된 목재 샤레.',
      tip: '핀델른 슬로프 #6 아래쪽입니다. 스키 없이 Sunnegga 푸니쿨라에서 약 20분 걸어서 내려옵니다.',
    },
    alphitta: {
      cuisine: '알파인 편안한 요리와 라이브 음악 테라스',
      signatureDish: '갓 만든 뢰스티, 토마호크 스테이크, 수제 치즈 퐁듀.',
      vibe: '라이브 어쿠스틱, 양가죽 선베드, 오후의 활기찬 손님.',
      tip: 'Chez Vrony가 만석일 때 좋은 대안입니다.',
    },
    bontadini: {
      cuisine: '아오스타 계곡과 이탈리아 정통 파스타',
      signatureDish: '검은 트러플 수제 탈리올리니, 사슴 라구, 폰티나를 넣은 아오스타 폴렌타 콘차.',
      vibe: '고도의 이탈리아식 따뜻함. 수제 파스타가 스위스 가격의 대략 절반입니다.',
      tip: '이탈리아 쪽 테오둘 고개 바로 아래입니다. 체르마트로 돌아가는 케이블카 시간을 놓치지 마세요.',
    },
    'chalet-etoile': {
      cuisine: '스웨덴-이탈리아 해산물과 산악 퓨전',
      signatureDish: '킹크랩 라비올리, 랍스터 파스타, 순록 스테이크.',
      vibe: '1974년부터 이탈리아 알프스에서 가장 유명한 스키 레스토랑 중 하나.',
      tip: '겨울 주말에는 예약이 필수입니다. Plan Maison에서 완만한 블루 슬로프로 갑니다.',
    },
    'iglu-dorf': {
      cuisine: '전통 스위스 치즈 퐁듀와 글뤼바인 바',
      signatureDish: '손으로 조각한 눈과 얼음 방에서 내는 발레 치즈 퐁듀.',
      vibe: '얼음 바, 야외 선베드, 리펠베르크 슬로프 옆의 느긋한 음악.',
      tip: '스키 없이 Gornergrat Bahn으로 Rotenboden까지 간 뒤 10분 걸어 내려갑니다.',
    },
  },
  ja: {
    'chez-vrony': {
      cuisine: '有機ヴァレー料理と現代アルパインの美食',
      signatureDish: '干し牛肉とヴァレーチーズの Vrony バーガー、手作りラビオリ、バニラソースのアップルシュトルーデル。',
      vibe: 'マッターホルン東壁に面した日向テラスのある、洗練された素朴な高級感。',
      tip: '13:00 の最前列サンラウンジャーは 3–6 週間前に予約を。',
    },
    findlerhof: {
      cuisine: '繊細なヴァレー料理、生トリュフ、豊富なワインセラー',
      signatureDish: 'マッターホルンキッシュ、トリュフパスタ、ヴァレーのハーブを添えた新鮮なラムのラック。',
      vibe: '風を遮る庭テラスのある、親密な古材のシャレー。',
      tip: 'Findeln のコース #6 のやや下。スキーなしなら Sunnegga のケーブルカーから徒歩約 20 分。',
    },
    alphitta: {
      cuisine: 'アルパインの家庭料理と生演奏のテラス',
      signatureDish: 'できたてのレシュティ、トマホーク、手作りチーズフォンデュ。',
      vibe: 'ライブのアコースティック、羊皮のサンラウンジャー、午後のにぎわい。',
      tip: 'Chez Vrony が満席のときの良い代わりです。',
    },
    bontadini: {
      cuisine: 'アオスタ渓谷とイタリアの本格パスタ',
      signatureDish: '黒トリュフの手作りタリオリーニ、鹿のラグー、フォンティーナのアオスタ風ポレンタ・コンチャ。',
      vibe: '高所のイタリアらしい温かさ。手作りパスタはスイスのおよそ半額です。',
      tip: 'イタリア側、テオドゥル峠のすぐ下。ツェルマットへ戻るロープウェイの時刻に注意。',
    },
    'chalet-etoile': {
      cuisine: 'スウェーデンとイタリアの海鮮、山のフュージョン',
      signatureDish: 'キングクラブのラビオリ、ロブスターパスタ、トナカイのステーキ。',
      vibe: '1974 年からイタリアアルプスで最も有名なスキーレストランの一つ。',
      tip: '冬の週末は予約が必須。Plan Maison から緩いブルーで到達できます。',
    },
    'iglu-dorf': {
      cuisine: '伝統的なスイスのチーズフォンデュとグリューワインバー',
      signatureDish: '手彫りの雪と氷の部屋で出す、ヴァレーのチーズだけのフォンデュ。',
      vibe: '氷のバー、屋外のサンラウンジャー、Riffelberg の斜面すぐ脇の落ち着いた音楽。',
      tip: 'スキーなしなら Gornergrat Bahn で Rotenboden へ、そこから徒歩 10 分下り。',
    },
  },
  zh: {
    'chez-vrony': {
      cuisine: '有机瓦莱特色与现代高山美食',
      signatureDish: '配风干牛肉和瓦莱奶酪的 Vrony 汉堡、手工馄饨，以及香草酱苹果卷。',
      vibe: '雅致的乡村奢华，阳光露台正对马特洪峰东壁。',
      tip: '若想在 13:00 坐到第一排躺椅，请提前 3–6 周预订。',
    },
    findlerhof: {
      cuisine: '精致瓦莱菜、新鲜松露和丰富酒窖',
      signatureDish: '马特洪峰咸派、松露意面，以及配瓦莱香草的新鲜羊排。',
      vibe: '私密的老木屋，带一处避风的花园露台。',
      tip: '在 Findeln #6 雪道稍低处。不滑雪的话，从 Sunnegga 缆索铁路步行约 20 分钟。',
    },
    alphitta: {
      cuisine: '高山家常菜与现场音乐露台',
      signatureDish: '现做土豆饼、战斧牛排和手工奶酪火锅。',
      vibe: '现场原声音乐、羊皮躺椅，下午人气很旺。',
      tip: 'Chez Vrony 订满时的好选择。',
    },
    bontadini: {
      cuisine: '奥斯塔山谷与意大利手工面',
      signatureDish: '黑松露手工细面、鹿肉肉酱，以及丰提纳奶酪的奥斯塔玉米糊。',
      vibe: '高海拔的意大利暖意，手工意面大约是瑞士价格的一半。',
      tip: '在意大利一侧、特奥杜尔山口稍下方。注意时间，赶上返回采尔马特的缆车。',
    },
    'chalet-etoile': {
      cuisine: '瑞典与意大利海鲜及山地融合菜',
      signatureDish: '帝王蟹馄饨、龙虾意面和驯鹿排。',
      vibe: '自 1974 年起就是意大利阿尔卑斯最有名的滑雪餐厅之一。',
      tip: '冬季周末必须预订。从 Plan Maison 沿平缓蓝道即可到达。',
    },
    'iglu-dorf': {
      cuisine: '传统瑞士奶酪火锅与热红酒吧',
      signatureDish: '在手工雕刻的雪屋和冰屋里供应的全奶酪瓦莱火锅。',
      vibe: '冰吧、户外躺椅，就在 Riffelberg 雪道旁边，音乐轻松。',
      tip: '不滑雪可乘 Gornergrat Bahn 到 Rotenboden，再步行 10 分钟下山。',
    },
  },
  'zh-tw': {
    'chez-vrony': {
      cuisine: '有機瓦萊料理與現代高山美食',
      signatureDish: '風乾牛肉與瓦萊起司的 Vrony 漢堡、手工ravioli，以及香草醬蘋果卷。',
      vibe: '帶點雅致的山屋奢華，陽光露臺正對馬特洪峰東壁。',
      tip: '若想在 13:00 坐到第一排躺椅，請提早 3–6 週預訂。',
    },
    findlerhof: {
      cuisine: '精細的瓦萊菜、新鮮松露與豐富酒窖',
      signatureDish: '馬特洪峰鹹派、松露義大利麵，以及配瓦萊香草的新鮮羊排。',
      vibe: '私密的老木屋，有一處避風的花園露臺。',
      tip: '在 Findeln #6 雪道稍低處。不滑雪的話，從 Sunnegga 纜索鐵路步行約 20 分鐘。',
    },
    alphitta: {
      cuisine: '高山家常菜與現場音樂露臺',
      signatureDish: '現做薯餅、戰斧牛排與手工起司火鍋。',
      vibe: '現場木吉他、羊皮躺椅，午後特別熱鬧。',
      tip: 'Chez Vrony 訂滿時，這裡是很好的替代。',
    },
    bontadini: {
      cuisine: '奧斯塔山谷與義式手工麵',
      signatureDish: '黑松露手工細麵、鹿肉肉醬，以及豐提納起司的奧斯塔玉米糊。',
      vibe: '高海拔的義式暖意，手工義大利麵大約只有瑞士一半的價錢。',
      tip: '在義大利這一側、特奧杜爾山口稍下方。看準時間，才趕得上返回策馬特的纜車。',
    },
    'chalet-etoile': {
      cuisine: '瑞典與義式海鮮，以及山地融合菜',
      signatureDish: '帝王蟹ravioli、龍蝦義大利麵與馴鹿排。',
      vibe: '自 1974 年起就是義大利阿爾卑斯最有名的滑雪餐廳之一。',
      tip: '冬季週末一定要訂位。從 Plan Maison 沿著平緩的藍道就能到。',
    },
    'iglu-dorf': {
      cuisine: '傳統瑞士起司火鍋與熱紅酒吧',
      signatureDish: '在手工雕刻的雪屋與冰屋裡供應的全起司瓦萊火鍋。',
      vibe: '冰吧、戶外躺椅，就在 Riffelberg 雪道旁邊，音樂很輕鬆。',
      tip: '不滑雪可搭 Gornergrat Bahn 到 Rotenboden，再步行 10 分鐘下山。',
    },
  },
};

const APRES_TEXT: Record<NonEn, ApresText[]> = {
  de: [
    {
      location: 'Untere Abfahrt Furi–Zermatt (Piste #50)',
      vibe: 'Die unbestrittene Nummer 1 der Pistenpartys in der Schweiz',
      highlight: 'Wilde DJ-Sets, Tanzen auf den Tischen in Skischuhen, Jägermeister-Skishots und Live-Blaskapellen.',
      access: 'Piste #50 hinunter, oder 20 Min. bergauf vom Dorf Zermatt (oder mit dem E-Taxi).',
    },
    {
      location: 'Ende der Sunnegga-Piste #6 (bei Patrullarve)',
      vibe: 'Glamouröser Stopp auf sonnenüberfluteter Terrasse',
      highlight: 'Gekühlte Gläser Veuve Clicquot direkt am Pistenrand, mit Blick aufs Matterhorn.',
      access: 'Auf der letzten Abfahrt von Sunnegga die Piste #6 hinunter.',
    },
    {
      location: 'Dorf Zermatt (bei der Kirchenbrücke)',
      vibe: 'Energiegeladenes Dorfpub mit Live-Rock und internationalen Skilehrern',
      highlight: 'Glühwein auf der Terrasse, danach Livekonzerte drinnen und Walliser Bier.',
      access: 'Im Zentrum des Dorfs Zermatt.',
    },
  ],
  es: [
    {
      location: 'Bajada inferior Furi–Zermatt (pista #50)',
      vibe: 'La fiesta de pista número 1 indiscutible de Suiza',
      highlight: 'Sesiones de DJ, baile sobre las mesas con botas de esquí, chupitos de Jägermeister y bandas de metal en vivo.',
      access: 'Baje la pista #50, o camine 20 min cuesta arriba desde el pueblo de Zermatt (o tome un e-taxi).',
    },
    {
      location: 'Final de la pista #6 de Sunnegga (cerca de Patrullarve)',
      vibe: 'Parada glamurosa en una terraza bañada de sol',
      highlight: 'Copas de Veuve Clicquot frías servidas al borde de la pista, con vistas al Matterhorn.',
      access: 'Baje la pista #6 en el último descenso desde Sunnegga.',
    },
    {
      location: 'Pueblo de Zermatt (junto al puente de la iglesia)',
      vibe: 'Pub del pueblo de mucha energía, con rock en vivo e instructores internacionales',
      highlight: 'Vino caliente en la terraza y, después, conciertos dentro y cervezas del Valais.',
      access: 'En el centro del pueblo de Zermatt.',
    },
  ],
  fr: [
    {
      location: 'Descente basse Furi–Zermatt (piste #50)',
      vibe: 'La fête au bord de piste n° 1 incontestée de Suisse',
      highlight: 'Sets de DJ, danse sur les tables en chaussures de ski, shots Jägermeister et fanfares en live.',
      access: 'Descendez la piste #50, ou montez 20 min à pied depuis le village de Zermatt (ou prenez un e-taxi).',
    },
    {
      location: 'Fin de la piste #6 de Sunnegga (près de Patrullarve)',
      vibe: 'Halte glamour sur une terrasse inondée de soleil',
      highlight: 'Flûtes de Veuve Clicquot fraîches servies au bord de la piste, avec vue sur le Cervin.',
      access: 'Descendez la piste #6 lors de la dernière descente depuis Sunnegga.',
    },
    {
      location: 'Village de Zermatt (près du pont de l’église)',
      vibe: 'Pub du village très animé, rock live et moniteurs internationaux',
      highlight: 'Vin chaud en terrasse, puis concerts à l’intérieur et bières du Valais.',
      access: 'Au centre du village de Zermatt.',
    },
  ],
  it: [
    {
      location: 'Discesa bassa Furi–Zermatt (pista #50)',
      vibe: 'La festa in pista n° 1 indiscussa della Svizzera',
      highlight: 'DJ set, ballo sui tavoli con gli scarponi, shot di Jägermeister e bande di ottoni dal vivo.',
      access: 'Scendete la pista #50, oppure salite 20 min a piedi dal paese di Zermatt (o prendete un e-taxi).',
    },
    {
      location: 'Fine della pista #6 di Sunnegga (vicino a Patrullarve)',
      vibe: 'Sosta glamour su una terrazza in pieno sole',
      highlight: 'Flûte di Veuve Clicquot freddo servite a bordo pista, con vista sul Cervino.',
      access: 'Scendete la pista #6 nell’ultima discesa da Sunnegga.',
    },
    {
      location: 'Paese di Zermatt (vicino al ponte della chiesa)',
      vibe: 'Pub di paese ad alta energia, rock dal vivo e maestri internazionali',
      highlight: 'Vin brulé in terrazza, poi concerti al chiuso e birre del Vallese.',
      access: 'Nel centro del paese di Zermatt.',
    },
  ],
  pt: [
    {
      location: 'Descida baixa Furi–Zermatt (pista #50)',
      vibe: 'A festa de pista n.º 1 indiscutível da Suíça',
      highlight: 'Sets de DJ, dança em cima das mesas com botas de esqui, shots de Jägermeister e bandas de metais ao vivo.',
      access: 'Desça a pista #50, ou suba 20 min a pé desde a aldeia de Zermatt (ou apanhe um e-táxi).',
    },
    {
      location: 'Fim da pista #6 de Sunnegga (junto a Patrullarve)',
      vibe: 'Paragem glamorosa numa esplanada banhada de sol',
      highlight: 'Flutes de Veuve Clicquot frescas servidas à beira da pista, com vista para o Matterhorn.',
      access: 'Desça a pista #6 na última descida a partir de Sunnegga.',
    },
    {
      location: 'Aldeia de Zermatt (junto à ponte da igreja)',
      vibe: 'Pub da aldeia com muita energia, rock ao vivo e instrutores internacionais',
      highlight: 'Vinho quente na esplanada e, a seguir, concertos lá dentro e cervejas do Valais.',
      access: 'No centro da aldeia de Zermatt.',
    },
  ],
  ko: [
    {
      location: 'Furi–체르마트 하부 활강 (슬로프 #50)',
      vibe: '스위스 슬로프 파티에서 이견 없는 1위',
      highlight: '거친 DJ 셋, 스키 부츠를 신은 채 테이블 댄스, Jägermeister 스키 샷, 라이브 브라스 밴드.',
      access: '슬로프 #50을 내려오거나, 체르마트 마을에서 20분 오르막 (또는 전기 택시).',
    },
    {
      location: 'Sunnegga 슬로프 #6 끝 (Patrullarve 근처)',
      vibe: '햇살 가득한 글래머 테라스 스톱',
      highlight: '슬로프 가장자리에서 바로 내는 차가운 Veuve Clicquot, 마터호른 전망.',
      access: 'Sunnegga에서 마지막 활강으로 슬로프 #6을 내려옵니다.',
    },
    {
      location: '체르마트 마을 (교회 다리 근처)',
      vibe: '라이브 록과 국제 스키 강사가 모이는 에너지 넘치는 마을 펍',
      highlight: '테라스의 따뜻한 글뤼바인, 이어서 실내 라이브와 발레 맥주.',
      access: '체르마트 마을 중심.',
    },
  ],
  ja: [
    {
      location: 'Furi–ツェルマット下部滑降（コース #50）',
      vibe: 'スイスのゲレンデ横パーティーで文句なしの一番',
      highlight: '激しい DJ、スキーブーツのままテーブルダンス、Jägermeister のスキーショット、生のブラスバンド。',
      access: 'コース #50 を滑り下りるか、ツェルマットの村から 20 分上る（または電動タクシー）。',
    },
    {
      location: 'Sunnegga コース #6 の終わり（Patrullarve 付近）',
      vibe: '日差したっぷりの華やかなテラス立ち寄り',
      highlight: 'ゲレンデ脇でそのまま出す冷えた Veuve Clicquot と、マッターホルンの眺め。',
      access: 'Sunnegga からの最終滑降でコース #6 を下ります。',
    },
    {
      location: 'ツェルマットの村（教会の橋の近く）',
      vibe: 'ライブのロックと各国のスキー教師が集う、勢いのある村のパブ',
      highlight: 'テラスのグリューワインのあと、屋内ライブとヴァレーのビール。',
      access: 'ツェルマットの村の中心。',
    },
  ],
  zh: [
    {
      location: 'Furi 到采尔马特的下部雪道（雪道 #50）',
      vibe: '瑞士雪道旁派对里没有争议的第一名',
      highlight: '狂野 DJ、穿着滑雪靴在桌上跳舞、Jägermeister 滑雪小杯，以及现场铜管乐队。',
      access: '沿雪道 #50 滑下，或从采尔马特村往上走 20 分钟（也可坐电动出租车）。',
    },
    {
      location: 'Sunnegga 雪道 #6 尽头（Patrullarve 附近）',
      vibe: '洒满阳光的华丽露台小站',
      highlight: '就在雪道边上供应冰镇 Veuve Clicquot，正对马特洪峰。',
      access: '从 Sunnegga 最后一滑时走雪道 #6。',
    },
    {
      location: '采尔马特村（教堂桥附近）',
      vibe: '能量很高的村里酒吧，有现场摇滚和国际滑雪教练',
      highlight: '露台上的热红酒，接着是室内演唱会和瓦莱啤酒。',
      access: '在采尔马特村中心。',
    },
  ],
  'zh-tw': [
    {
      location: 'Furi 到策馬特的下部雪道（雪道 #50）',
      vibe: '瑞士雪道旁派對裡，沒有人會爭的第一名',
      highlight: '很兇的 DJ、穿著滑雪靴在桌上跳舞、Jägermeister 小杯，還有現場銅管樂隊。',
      access: '沿著雪道 #50 滑下來，或從策馬特村子往上走 20 分鐘（也可以坐電動計程車）。',
    },
    {
      location: 'Sunnegga 雪道 #6 的盡頭（Patrullarve 附近）',
      vibe: '灑滿陽光、很有氣氛的露臺歇腳處',
      highlight: '就在雪道邊上供應冰鎮 Veuve Clicquot，正對馬特洪峰。',
      access: '從 Sunnegga 最後一滑時走雪道 #6。',
    },
    {
      location: '策馬特村子（教堂橋附近）',
      vibe: '很有勁的村子酒吧，有現場搖滾，也有各國滑雪教練',
      highlight: '露臺上的熱紅酒，接著是室內演唱和瓦萊啤酒。',
      access: '在策馬特村子中心。',
    },
  ],
};

const FAQ_TEXT: Record<NonEn, FaqText[]> = {
  de: [
    {
      question: 'Kann ich von Zermatt (Schweiz) nach Cervinia (Italien) skifahren?',
      answer:
        'Ja. Zermatt und Breuil-Cervinia bilden das verbundene Matterhorn Ski Paradise mit 360 km Pisten. Die Grenze überquert man in grosser Höhe über den Theodulgletscher / Plateau Rosa (3,480 m) oder mit der 3S-Bahn Matterhorn Alpine Crossing (Testa Grigia, 3,458 m). Für beide Länder braucht es einen International-Skipass oder einen italienischen Tageszuschlag auf den Zermatt-Pass.',
    },
    {
      question: 'Wann fährt die letzte Bahn von Cervinia (Italien) zurück nach Zermatt (Schweiz)?',
      answer:
        'Die letzte Bahn von Italien hinauf nach Plateau Rosa / Testa Grigia fährt zwischen 15:30 (Dezember/Januar) und 16:30 (März/April). Wer sie verpasst, hat keine Strasse durch den Berg: Eine Notfall-Taxifahrt um die Alpen durch den Grossen-St.-Bernhard-Tunnel dauert 4 bis 5 Stunden und kostet grob €600 bis €800 CHF.',
    },
    {
      question: 'Warum ist die Skiverbindung von Zermatt nach Italien an manchen Tagen geschlossen?',
      answer:
        'Der Grenzübergang liegt zwischen 3,480 m und 3,883 m auf dem Gletschergrat. Häufigste Ursache sind starker Wind (Böen über 50–60 km/h) und Schneesturm mit schlechter Sicht. Dann schliessen die italienische Verbindung und die Bahnen zum Klein Matterhorn, während tiefere Sektoren (Waldabfahrten Sunnegga und Gornergrat) meist offen bleiben.',
    },
    {
      question: 'Wie funktioniert der Ikon Pass in Zermatt 2025/2026?',
      answer:
        'Der volle Ikon Pass enthält 7 Tage Direktzugang zu den Liften in Zermatt Matterhorn, der Ikon Base Pass 5 Tage (ohne Sperrtage). Er gilt für alle Schweizer Sektoren (Sunnegga, Gornergrat und Klein Matterhorn). Für Cervinia/Italien kauft man vor dem Grenzübertritt an jedem Zermatt-Schalter einen internationalen Tageszuschlag (ca. 50–60 CHF).',
    },
    {
      question: 'Wie funktionieren die dynamischen Skipass-Preise in Zermatt?',
      answer:
        'Zermatt setzt bei allen Liftpässen auf dynamische Preise. Sie hängen vom Buchungsdatum, von der Saison (Früh/Hoch/Frühling) und von der Nachfrage ab. Wer den Skipass früh online über das offizielle Matterhorn-Paradise-Portal bucht, spart oft 10% bis 25% gegenüber dem Schalter am Skitag selbst.',
    },
    {
      question: 'Fahren Kinder in Zermatt gratis Ski?',
      answer:
        'Ja. Kinder bis zum 9. Geburtstag (8.99 Jahre) fahren mit der kostenlosen Wolli Card im gesamten Skigebiet Zermatt gratis (am Schalter mit gültigem Ausweis). Kinder von 9 bis 15 erhalten 50% Rabatt, Jugendliche von 16 bis 19 erhalten 15% Rabatt.',
    },
    {
      question: 'Ist Zermatt die ganze Skisaison schneesicher?',
      answer:
        'Zermatt ist das schneesicherste Skigebiet der gesamten Alpen. Über 75% des Gebiets liegen über 2,000 Metern, bis auf 3,883 Meter am Theodulgletscher. Gletscherschnee ist an 365 Tagen im Jahr garantiert: Anfang Dezember und Ende Mai gibt es auf dem Gletscher oft noch durchgehende Abfahrten, wenn der untere Berg dünn ist.',
    },
    {
      question: 'Wie früh muss ich Chez Vrony reservieren?',
      answer:
        'In den starken Winterwochen (Weihnachten bis Neujahr, Februar-Schulferien und sonnige März-Wochenenden) öffnet Chez Vrony die Reservation Monate im Voraus und ist oft 3 bis 6 Wochen vorher ausgebucht. Wenn online nichts frei ist: morgens gegen 09:00 direkt anrufen, es gibt Absagen am selben Tag.',
    },
  ],
  es: [
    {
      question: '¿Puedo esquiar de Zermatt (Suiza) a Cervinia (Italia)?',
      answer:
        'Sí. Zermatt y Breuil-Cervinia forman el Matterhorn Ski Paradise, con 360 km de pistas conectadas. Se cruza la frontera en altura por el glaciar Theodul / Plateau Rosa (3,480 m) o por el teleférico 3S Matterhorn Alpine Crossing (Testa Grigia, 3,458 m). Para esquiar en los dos países hace falta un forfait internacional o un suplemento italiano de un día sobre el forfait de Zermatt.',
    },
    {
      question: '¿A qué hora sale el último remontador de Cervinia (Italia) de vuelta a Zermatt (Suiza)?',
      answer:
        'El último teleférico que sube de Italia a Plateau Rosa / Testa Grigia sale entre las 15:30 (diciembre/enero) y las 16:30 (marzo/abril). Si se pierde, no hay carretera a través de la montaña: un taxi de emergencia rodeando los Alpes por el túnel del Gran San Bernardo tarda de 4 a 5 horas y cuesta unos €600 a €800 CHF.',
    },
    {
      question: '¿Por qué se cierra algunos días la conexión de esquí de Zermatt a Italia?',
      answer:
        'El paso fronterizo está entre 3,480 m y 3,883 m en la cresta del glaciar. La causa principal son el viento fuerte (rachas de más de 50–60 km/h) y la visibilidad de ventisca. Entonces cierran la conexión italiana y los teleféricos del Klein Matterhorn, mientras los sectores bajos (pistas entre árboles de Sunnegga y Gornergrat) suelen seguir abiertos.',
    },
    {
      question: '¿Cómo funciona el Ikon Pass en Zermatt en 2025/2026?',
      answer:
        'El Ikon Pass completo incluye 7 días de acceso directo a los remontadores de Zermatt Matterhorn; el Ikon Base Pass da 5 días (sin fechas bloqueadas). Cubre todos los sectores suizos (Sunnegga, Gornergrat y Klein Matterhorn). Para esquiar hacia Cervinia/Italia se compra un suplemento internacional diario (unos 50–60 CHF) en cualquier taquilla de Zermatt antes de cruzar.',
    },
    {
      question: '¿Cómo funcionan los precios dinámicos del forfait en Zermatt?',
      answer:
        'Zermatt usa precios dinámicos en todos los forfaits. Varían según la fecha de reserva, la temporada (inicio, alta, primavera) y la demanda. Reservar online con antelación en el portal oficial de Matterhorn Paradise puede ahorrar entre un 10% y un 25% frente a la taquilla la misma mañana.',
    },
    {
      question: '¿Los niños esquían gratis en Zermatt?',
      answer:
        'Sí. Los niños hasta su 9.º cumpleaños (8.99 años) esquían GRATIS en toda la estación con una Wolli Card de cortesía (en taquilla, con documento válido). De 9 a 15 años hay un 50% de descuento, y de 16 a 19 años un 15%.',
    },
    {
      question: '¿Zermatt tiene nieve segura toda la temporada?',
      answer:
        'Zermatt es la estación más fiable en nieve de todos los Alpes. Más del 75% del dominio está por encima de 2,000 metros y llega a 3,883 metros en el glaciar Theodul. La nieve glaciar está garantizada 365 días al año: a principios de diciembre y a finales de mayo el glaciar suele tener descenso completo cuando la montaña baja está justa.',
    },
    {
      question: '¿Con cuánta antelación hay que reservar Chez Vrony?',
      answer:
        'En las semanas fuertes de invierno (Navidad a Año Nuevo, vacaciones escolares de febrero y fines de semana soleados de marzo) las reservas de Chez Vrony se abren con meses de antelación y a menudo se agotan de 3 a 6 semanas antes. Si online está lleno, llame hacia las 09:00 por cancelaciones del mismo día.',
    },
  ],
  fr: [
    {
      question: 'Puis-je skier de Zermatt (Suisse) à Cervinia (Italie) ?',
      answer:
        'Oui. Zermatt et Breuil-Cervinia forment le Matterhorn Ski Paradise relié, avec 360 km de pistes. On franchit la frontière en altitude par le glacier du Théodule / Plateau Rosa (3,480 m) ou par le téléphérique 3S Matterhorn Alpine Crossing (Testa Grigia, 3,458 m). Pour les deux pays, il faut un forfait international ou un supplément italien à la journée sur le forfait de Zermatt.',
    },
    {
      question: 'À quelle heure part la dernière remontée de Cervinia (Italie) vers Zermatt (Suisse) ?',
      answer:
        'Le dernier téléphérique qui remonte d’Italie vers Plateau Rosa / Testa Grigia part entre 15:30 (décembre/janvier) et 16:30 (mars/avril). Si vous le manquez, il n’y a pas de route à travers la montagne : un taxi d’urgence qui contourne les Alpes par le tunnel du Grand-Saint-Bernard prend 4 à 5 heures et coûte environ €600 à €800 CHF.',
    },
    {
      question: 'Pourquoi la liaison ski de Zermatt vers l’Italie ferme-t-elle certains jours ?',
      answer:
        'Le passage frontalier se situe entre 3,480 m et 3,883 m sur la crête du glacier. La cause n° 1 est le vent fort (rafales au-delà de 50–60 km/h) et le blizzard. La liaison italienne et les téléphériques du Klein Matterhorn ferment alors, tandis que les secteurs plus bas (pistes en forêt de Sunnegga et du Gornergrat) restent en général ouverts.',
    },
    {
      question: 'Comment fonctionne l’Ikon Pass à Zermatt en 2025/2026 ?',
      answer:
        'L’Ikon Pass complet comprend 7 jours d’accès direct aux remontées de Zermatt Matterhorn ; l’Ikon Base Pass en donne 5 (sans dates d’exclusion). Il couvre tous les secteurs suisses (Sunnegga, Gornergrat et Klein Matterhorn). Pour skier vers Cervinia/Italie, achetez un supplément international à la journée (environ 50–60 CHF) à n’importe quel guichet de Zermatt avant de franchir la frontière.',
    },
    {
      question: 'Comment fonctionnent les prix dynamiques des forfaits à Zermatt ?',
      answer:
        'Zermatt applique des prix dynamiques à tous les forfaits. Ils varient selon la date de réservation, la saison (début, haute, printemps) et la demande. Réserver en ligne à l’avance sur le portail officiel Matterhorn Paradise peut faire économiser 10 % à 25 % par rapport au guichet le matin même.',
    },
    {
      question: 'Les enfants skient-ils gratuitement à Zermatt ?',
      answer:
        'Oui. Les enfants jusqu’à leur 9e anniversaire (8.99 ans) skient GRATUITEMENT sur tout le domaine avec une Wolli Card offerte (au guichet, sur pièce d’identité). De 9 à 15 ans, la réduction est de 50 %, et de 16 à 19 ans de 15 %.',
    },
    {
      question: 'Zermatt est-elle enneigée de façon fiable toute la saison ?',
      answer:
        'Zermatt est la station la plus fiable en neige de toutes les Alpes. Plus de 75 % du domaine se situe au-dessus de 2,000 mètres, jusqu’à 3,883 mètres sur le glacier du Théodule. La neige glaciaire est garantie 365 jours par an : début décembre et fin mai, le glacier offre encore souvent un ski de haut en bas quand le bas de la montagne est maigre.',
    },
    {
      question: 'Combien de temps à l’avance faut-il réserver Chez Vrony ?',
      answer:
        'Pendant les semaines fortes (Noël au Nouvel An, vacances scolaires de février et week-ends ensoleillés de mars), les réservations de Chez Vrony ouvrent plusieurs mois à l’avance et partent souvent 3 à 6 semaines avant. Si le site est complet, appelez vers 09:00 pour les annulations du jour.',
    },
  ],
  it: [
    {
      question: 'Posso sciare da Zermatt (Svizzera) a Cervinia (Italia)?',
      answer:
        'Sì. Zermatt e Breuil-Cervinia formano il Matterhorn Ski Paradise collegato, con 360 km di piste. Si attraversa il confine in quota sul ghiacciaio del Teodulo / Plateau Rosa (3,480 m) o con la funivia 3S Matterhorn Alpine Crossing (Testa Grigia, 3,458 m). Per entrambi i paesi serve uno skipass internazionale oppure un supplemento italiano giornaliero sullo skipass di Zermatt.',
    },
    {
      question: 'A che ora parte l’ultimo impianto da Cervinia (Italia) verso Zermatt (Svizzera)?',
      answer:
        'L’ultima funivia che risale dall’Italia verso Plateau Rosa / Testa Grigia parte tra le 15:30 (dicembre/gennaio) e le 16:30 (marzo/aprile). Se la si perde, non c’è una strada attraverso la montagna: un taxi d’emergenza che aggira le Alpi dal tunnel del Gran San Bernardo impiega da 4 a 5 ore e costa circa €600–€800 CHF.',
    },
    {
      question: 'Perché il collegamento sciistico da Zermatt all’Italia chiude in alcuni giorni?',
      answer:
        'Il valico sta tra 3,480 m e 3,883 m sulla cresta del ghiacciaio. La causa principale è il vento forte (raffiche oltre 50–60 km/h) e la bufera. Allora chiudono il collegamento italiano e le funivie del Klein Matterhorn, mentre i settori più bassi (piste nel bosco di Sunnegga e Gornergrat) di solito restano aperti.',
    },
    {
      question: 'Come funziona l’Ikon Pass a Zermatt nel 2025/2026?',
      answer:
        'L’Ikon Pass completo include 7 giorni di accesso diretto agli impianti di Zermatt Matterhorn; l’Ikon Base Pass ne dà 5 (senza date di blackout). Copre tutti i settori svizzeri (Sunnegga, Gornergrat e Klein Matterhorn). Per sciare verso Cervinia/Italia si acquista un supplemento internazionale giornaliero (circa 50–60 CHF) in qualsiasi biglietteria di Zermatt prima di attraversare.',
    },
    {
      question: 'Come funzionano i prezzi dinamici dello skipass a Zermatt?',
      answer:
        'Zermatt usa prezzi dinamici per tutti gli skipass. Variano in base alla data di prenotazione, alla stagione (inizio, alta, primavera) e alla domanda. Prenotare online in anticipo sul portale ufficiale Matterhorn Paradise può far risparmiare dal 10% al 25% rispetto alla biglietteria la mattina stessa.',
    },
    {
      question: 'I bambini sciano gratis a Zermatt?',
      answer:
        'Sì. I bambini fino al 9° compleanno (8.99 anni) sciano GRATIS su tutto il comprensorio con una Wolli Card omaggio (in biglietteria, con documento valido). Dai 9 ai 15 anni lo sconto è del 50%, dai 16 ai 19 anni del 15%.',
    },
    {
      question: 'Zermatt è affidabile con la neve per tutta la stagione?',
      answer:
        'Zermatt è la località più affidabile per la neve di tutte le Alpi. Oltre il 75% del comprensorio sta sopra i 2,000 metri, fino a 3,883 metri sul ghiacciaio del Teodulo. La neve glaciale è garantita 365 giorni l’anno: a inizio dicembre e a fine maggio il ghiacciaio offre spesso ancora la discesa completa quando il basso è scarso.',
    },
    {
      question: 'Con quanto anticipo devo prenotare Chez Vrony?',
      answer:
        'Nelle settimane forti (Natale a Capodanno, vacanze scolastiche di febbraio e weekend soleggiati di marzo) le prenotazioni di Chez Vrony aprono con mesi di anticipo e spesso si esauriscono 3–6 settimane prima. Se online è pieno, chiami verso le 09:00 per le disdette del giorno.',
    },
  ],
  pt: [
    {
      question: 'Posso esquiar de Zermatt (Suíça) até Cervinia (Itália)?',
      answer:
        'Sim. Zermatt e Breuil-Cervinia formam o Matterhorn Ski Paradise ligado, com 360 km de pistas. A fronteira atravessa-se em altitude pelo glaciar Theodul / Plateau Rosa (3,480 m) ou pelo teleférico 3S Matterhorn Alpine Crossing (Testa Grigia, 3,458 m). Para os dois países é preciso um passe internacional ou um suplemento italiano de um dia no passe de Zermatt.',
    },
    {
      question: 'A que horas parte o último teleférico de Cervinia (Itália) de regresso a Zermatt (Suíça)?',
      answer:
        'O último teleférico que sobe de Itália para Plateau Rosa / Testa Grigia parte entre as 15:30 (dezembro/janeiro) e as 16:30 (março/abril). Se o perder, não há estrada através da montanha: um táxi de emergência a contornar os Alpes pelo túnel do Grande São Bernardo demora 4 a 5 horas e custa cerca de €600 a €800 CHF.',
    },
    {
      question: 'Porque é que a ligação de esqui de Zermatt a Itália fecha em alguns dias?',
      answer:
        'A passagem fica entre 3,480 m e 3,883 m na crista do glaciar. A causa principal é vento forte (rajadas acima de 50–60 km/h) e nevoeiro de neve. A ligação italiana e os teleféricos do Klein Matterhorn fecham, enquanto os sectores mais baixos (pistas na floresta de Sunnegga e Gornergrat) em regra continuam abertos.',
    },
    {
      question: 'Como funciona o Ikon Pass em Zermatt em 2025/2026?',
      answer:
        'O Ikon Pass completo inclui 7 dias de acesso direto aos teleféricos de Zermatt Matterhorn; o Ikon Base Pass dá 5 dias (sem datas bloqueadas). Cobre todos os sectores suíços (Sunnegga, Gornergrat e Klein Matterhorn). Para esquiar até Cervinia/Itália compra-se um suplemento internacional diário (cerca de 50–60 CHF) em qualquer bilheteira de Zermatt antes de atravessar.',
    },
    {
      question: 'Como funcionam os preços dinâmicos do passe de esqui em Zermatt?',
      answer:
        'Zermatt usa preços dinâmicos em todos os passes. Variam consoante a data de reserva, a época (início, alta, primavera) e a procura. Reservar online com antecedência no portal oficial Matterhorn Paradise pode poupar entre 10% e 25% face à bilheteira na manhã do esqui.',
    },
    {
      question: 'As crianças esquiam de graça em Zermatt?',
      answer:
        'Sim. As crianças até ao 9.º aniversário (8.99 anos) esquiam GRÁTIS em toda a estância com uma Wolli Card gratuita (na bilheteira, com documento válido). Dos 9 aos 15 anos há 50% de desconto, e dos 16 aos 19 anos 15%.',
    },
    {
      question: 'Zermatt tem neve garantida durante toda a época de esqui?',
      answer:
        'Zermatt é a estância mais fiável em neve de todos os Alpes. Mais de 75% do domínio fica acima de 2,000 metros, até 3,883 metros no glaciar Theodul. A neve glaciar está garantida 365 dias por ano: no início de dezembro e no fim de maio o glaciar ainda costuma ter descida completa quando a montanha baixa está fina.',
    },
    {
      question: 'Com que antecedência devo reservar o Chez Vrony?',
      answer:
        'Nas semanas fortes de inverno (Natal ao Ano Novo, férias escolares de fevereiro e fins de semana soalheiros de março) as reservas do Chez Vrony abrem com meses de antecedência e esgotam muitas vezes 3 a 6 semanas antes. Se online estiver cheio, telefone por volta das 09:00 por cancelamentos do próprio dia.',
    },
  ],
  ko: [
    {
      question: '체르마트(스위스)에서 체르비니아(이탈리아)로 스키를 탈 수 있나요?',
      answer:
        '가능합니다. 체르마트와 Breuil-Cervinia는 360 km가 이어진 Matterhorn Ski Paradise입니다. 국경은 고도에서 테오둘 빙하 / Plateau Rosa (3,480 m) 또는 Matterhorn Alpine Crossing 3S 케이블(Testa Grigia, 3,458 m)로 건넙니다. 두 나라를 모두 타려면 인터내셔널 스키 패스, 또는 체르마트 패스에 이탈리아 당일 추가권이 필요합니다.',
    },
    {
      question: '체르비니아(이탈리아)에서 체르마트(스위스)로 돌아오는 마지막 리프트는 몇 시인가요?',
      answer:
        '이탈리아에서 Plateau Rosa / Testa Grigia로 올라가는 마지막 케이블카는 15:30(12월/1월)에서 16:30(3월/4월) 사이에 출발합니다. 놓치면 산을 관통하는 도로는 없습니다. 그랑생베르나르 터널로 알프스를 우회하는 긴급 택시는 4–5시간이 걸리고 대략 €600–€800 CHF입니다.',
    },
    {
      question: '체르마트에서 이탈리아로 가는 스키 연결이 어떤 날 닫히나요?',
      answer:
        '국경은 빙하 능선 3,480 m에서 3,883 m 사이에 있습니다. 가장 큰 원인은 강풍(순간 풍속 50–60 km/h 초과)과 블리자드 시정입니다. 그러면 이탈리아 연결과 Klein Matterhorn 케이블이 닫히고, 아래 구역(Sunnegga와 Gornergrat 숲 슬로프)은 보통 열립니다.',
    },
    {
      question: '2025/2026 체르마트에서 Ikon Pass는 어떻게 쓰나요?',
      answer:
        '풀 Ikon Pass는 체르마트 마터호른 리프트 직행 7일, Ikon Base Pass는 5일(블랙아웃 없음)입니다. 스위스 구역(Sunnegga, Gornergrat, Klein Matterhorn)이 포함됩니다. Cervinia/이탈리아로 가려면 건너기 전에 체르마트 매표소에서 국제 당일 추가권(약 50–60 CHF)을 삽니다.',
    },
    {
      question: '체르마트의 동적 스키 패스 가격은 어떻게 되나요?',
      answer:
        '체르마트는 모든 리프트권에 동적 가격을 씁니다. 예약일, 시즌(초반/성수기/봄), 수요에 따라 달라집니다. 공식 Matterhorn Paradise 포털에서 미리 온라인 예약하면 당일 아침 창구보다 10%에서 25% 아낄 수 있습니다.',
    },
    {
      question: '체르마트에서 어린이는 무료로 스키를 타나요?',
      answer:
        '네. 9번째 생일까지(8.99세) 어린이는 무료 Wolli Card로 체르마트 전 구역이 완전 무료입니다(매표소에서 유효한 신분증). 9–15세는 50% 할인, 16–19세는 15% 할인입니다.',
    },
    {
      question: '체르마트는 시즌 내내 눈이 확실한가요?',
      answer:
        '체르마트는 알프스 전체에서 눈이 가장 안정적인 리조트입니다. 스키 구역의 75% 이상이 2,000 m 위에 있고, 테오둘 빙하는 3,883 m까지 갑니다. 빙하 눈은 365일 보장됩니다. 12월 초와 5월 말에도 아래가 얇을 때 빙하에서는 정상에서 아래까지 이어지는 경우가 많습니다.',
    },
    {
      question: 'Chez Vrony는 얼마나 미리 예약해야 하나요?',
      answer:
        '성수기(크리스마스부터 새해, 2월 학교 방학, 맑은 3월 주말)에는 몇 달 전에 예약이 열리고 3–6주 전에 매진되는 일이 많습니다. 온라인이 꽉 차면 오전 09:00쯤 직접 전화해 당일 취소를 확인하세요.',
    },
  ],
  ja: [
    {
      question: 'ツェルマット（スイス）からチェルヴィニア（イタリア）へスキーで行けますか？',
      answer:
        'はい。ツェルマットと Breuil-Cervinia は 360 km がつながる Matterhorn Ski Paradise です。国境は高所でテオドゥル氷河 / Plateau Rosa（3,480 m）、または Matterhorn Alpine Crossing の 3S（Testa Grigia、3,458 m）で越えます。両国を滑るには国際スキーパスか、ツェルマットのパスにイタリアの1日追加券が必要です。',
    },
    {
      question: 'チェルヴィニア（イタリア）からツェルマット（スイス）へ戻る最終リフトは何時ですか？',
      answer:
        'イタリアから Plateau Rosa / Testa Grigia へ上がる最終ロープウェイは 15:30（12月/1月）から 16:30（3月/4月）の間に出ます。乗り遅れると山を抜ける道路はありません。グラン・サン・ベルナール・トンネル経由でアルプスを回る緊急タクシーは 4〜5 時間、およそ €600〜€800 CHF です。',
    },
    {
      question: 'ツェルマットからイタリアへのスキー連絡が閉まる日があるのはなぜですか？',
      answer:
        '国境は氷河の稜線、3,480 m から 3,883 m にあります。主な原因は強風（瞬間 50–60 km/h 超）と吹雪の視界です。イタリア連絡と Klein Matterhorn の索道は閉まり、低いエリア（Sunnegga と Gornergrat の樹林コース）は通常開いたままです。',
    },
    {
      question: '2025/2026 のツェルマットで Ikon Pass はどう使いますか？',
      answer:
        'フルの Ikon Pass はツェルマット・マッターホルンのリフト直行が 7 日、Ikon Base Pass は 5 日（ブラックアウトなし）です。スイス側（Sunnegga、Gornergrat、Klein Matterhorn）が含まれます。Cervinia／イタリアへは、越える前にツェルマットの窓口で国際の1日追加（約 50–60 CHF）を買います。',
    },
    {
      question: 'ツェルマットの動的なスキーパス料金はどうなっていますか？',
      answer:
        'ツェルマットはすべてのリフト券が動的価格です。予約日、シーズン（序盤／ハイ／春）、需要で変わります。公式 Matterhorn Paradise で早めにオンライン予約すると、当日朝の窓口より 10% から 25% 安くなることがあります。',
    },
    {
      question: 'ツェルマットでは子どもは無料でスキーできますか？',
      answer:
        'はい。9歳の誕生日まで（8.99歳）は無料の Wolli Card でツェルマット全域が完全無料です（窓口で有効な身分証）。9〜15歳は 50% 引き、16〜19歳は 15% 引きです。',
    },
    {
      question: 'ツェルマットはシーズンを通して雪が安定していますか？',
      answer:
        'ツェルマットはアルプス全体で最も雪が安定したリゾートです。スキーエリアの 75% 超が 2,000 m より上で、テオドゥル氷河は 3,883 m まであります。氷河の雪は 365 日保証です。12月上旬と5月下旬も、低い山が薄いときに氷河では上から下まで滑れることが多いです。',
    },
    {
      question: 'Chez Vrony はどれくらい前に予約すべきですか？',
      answer:
        '繁忙期（クリスマスから正月、2月の学校休暇、晴れた3月の週末）は数か月前に予約が始まり、3〜6週間前に埋まることが多いです。オンラインが満席なら、午前 09:00 頃に電話して当日のキャンセルを確認してください。',
    },
  ],
  zh: [
    {
      question: '可以从采尔马特（瑞士）滑到切尔维尼亚（意大利）吗？',
      answer:
        '可以。采尔马特和 Breuil-Cervinia 连成 Matterhorn Ski Paradise，共 360 公里雪道。边境在高处经过特奥杜尔冰川 / Plateau Rosa（3,480 米），或 Matterhorn Alpine Crossing 的 3S 索道（Testa Grigia，3,458 米）。要滑两个国家，需要国际滑雪通票，或在采尔马特通票上加购意大利单日补充票。',
    },
    {
      question: '从切尔维尼亚（意大利）返回采尔马特（瑞士）的末班索道是几点？',
      answer:
        '从意大利上行到 Plateau Rosa / Testa Grigia 的末班缆车在 15:30（12月/1月）到 16:30（3月/4月）之间出发。错过就没有穿山公路：绕阿尔卑斯、经大圣伯纳德隧道的紧急出租车要 4 到 5 小时，大约 €600 到 €800 CHF。',
    },
    {
      question: '为什么采尔马特到意大利的滑雪连接有时会关闭？',
      answer:
        '边境位于冰川山脊，海拔 3,480 米到 3,883 米。最主要的原因是大风（阵风超过 50–60 km/h）和暴风雪能见度。这时意大利连接和 Klein Matterhorn 索道会关闭，较低的雪区（Sunnegga 和 Gornergrat 的林间雪道）通常仍然开放。',
    },
    {
      question: '2025/2026 年 Ikon Pass 在采尔马特怎么用？',
      answer:
        '完整 Ikon Pass 含采尔马特马特洪峰索道直达 7 天，Ikon Base Pass 为 5 天（无黑出日期）。覆盖全部瑞士雪区（Sunnegga、Gornergrat 和 Klein Matterhorn）。要滑到切尔维尼亚/意大利，过境前在任意采尔马特售票处购买国际单日补充（约 50–60 CHF）。',
    },
    {
      question: '采尔马特的动态滑雪票价是怎么运作的？',
      answer:
        '采尔马特所有索道票都是动态定价，随预订日期、季节（季初/旺季/春季）和需求变化。通过官方 Matterhorn Paradise 门户提前网上预订，可比当天早上窗口便宜 10% 到 25%。',
    },
    {
      question: '儿童在采尔马特滑雪免费吗？',
      answer:
        '免费。未满 9 岁生日（8.99 岁）的儿童凭免费 Wolli Card 可在整个采尔马特雪场完全免费（售票处出示有效证件）。9 至 15 岁享 50% 折扣，16 至 19 岁享 15% 折扣。',
    },
    {
      question: '采尔马特整个雪季都有雪保障吗？',
      answer:
        '采尔马特是整个阿尔卑斯积雪最稳定的雪场。超过 75% 的雪区在 2,000 米以上，特奥杜尔冰川高达 3,883 米。冰川雪全年 365 天有保障：12 月初和 5 月底，低海拔雪薄时，冰川上往往仍能从上滑到下。',
    },
    {
      question: 'Chez Vrony 需要提前多久预订？',
      answer:
        '旺季周（圣诞到新年、二月学校假期、晴朗的三月周末）Chez Vrony 提前数月开放预订，常常在 3 到 6 周前订满。如果网上已满，早上 09:00 左右直接致电，询问当天取消的位子。',
    },
  ],
  'zh-tw': [
    {
      question: '可以從策馬特（瑞士）滑到切爾維尼亞（義大利）嗎？',
      answer:
        '可以。策馬特和 Breuil-Cervinia 連成 Matterhorn Ski Paradise，一共 360 公里雪道。邊界在高處經過特奧杜爾冰川／Plateau Rosa（3,480 公尺），或 Matterhorn Alpine Crossing 的 3S 索道（Testa Grigia，3,458 公尺）。要滑兩個國家，需要國際滑雪通票，或在策馬特通票上加買義大利單日補充票。',
    },
    {
      question: '從切爾維尼亞（義大利）回策馬特（瑞士）的末班索道是幾點？',
      answer:
        '從義大利上行到 Plateau Rosa／Testa Grigia 的末班纜車，在 15:30（12月／1月）到 16:30（3月／4月）之間出發。錯過就沒有穿山的路：繞阿爾卑斯、經大聖伯納德隧道的緊急計程車要 4 到 5 小時，大約 €600 到 €800 CHF。',
    },
    {
      question: '為什麼策馬特到義大利的滑雪聯絡有時會關閉？',
      answer:
        '邊界在冰川地脊上，海拔 3,480 公尺到 3,883 公尺。最常見的原因是強風（陣風超過 50–60 km/h）和暴風雪能見度。這時義大利聯絡和 Klein Matterhorn 索道會停，較低的雪區（Sunnegga 和 Gornergrat 的林間雪道）通常還開著。',
    },
    {
      question: '2025/2026 年 Ikon Pass 在策馬特怎麼用？',
      answer:
        '完整 Ikon Pass 含策馬特馬特洪峰索道直達 7 天，Ikon Base Pass 是 5 天（沒有排除日）。涵蓋全部瑞士雪區（Sunnegga、Gornergrat 和 Klein Matterhorn）。要滑到切爾維尼亞／義大利，過境前在任何策馬特售票處加買國際單日補充（約 50–60 CHF）。',
    },
    {
      question: '策馬特的動態滑雪票價是怎麼算的？',
      answer:
        '策馬特所有索道票都是動態定價，會跟著預訂日期、季節（季初／旺季／春季）和需求變。透過官方 Matterhorn Paradise 提早線上預訂，往往比當天早上窗口便宜 10% 到 25%。',
    },
    {
      question: '孩童在策馬特滑雪免費嗎？',
      answer:
        '免費。未滿 9 歲生日（8.99 歲）的孩童，憑免費 Wolli Card 可以在整個策馬特雪場完全免費（售票處出示有效證件）。9 到 15 歲享 50% 折扣，16 到 19 歲享 15% 折扣。',
    },
    {
      question: '策馬特整個雪季都有雪保障嗎？',
      answer:
        '策馬特是整座阿爾卑斯積雪最穩的雪場。超過 75% 的雪區在 2,000 公尺以上，特奧杜爾冰川高到 3,883 公尺。冰川雪全年 365 天有保障：12 月初和 5 月下旬，低海拔雪薄的時候，冰川上往往還能從上滑到下。',
    },
    {
      question: 'Chez Vrony 要提早多久訂位？',
      answer:
        '旺季週（聖誕到新年、二月學校假期、晴朗的三月週末）Chez Vrony 會提早數月開放訂位，常常在 3 到 6 週前就滿了。若網路上已滿，早上 09:00 左右直接打電話，問當天取消的位子。',
    },
  ],
};

function lookup(map: PhraseMap | undefined, value: string): string {
  if (!map) return value;
  return map[value] ?? value;
}

function translateBorderReason(reason: string, templates: BorderReason | undefined): string {
  if (!templates) return reason;
  const wind = reason.match(/(\d+(?:\.\d+)?) km\/h/)?.[1];
  if (!wind) return reason;
  let template: string | undefined;
  if (reason.startsWith('High winds at the high-alpine crest')) template = templates.closed;
  else if (reason.startsWith('Moderate gusts')) template = templates.standby;
  else if (reason.startsWith('Favorable crest wind conditions')) template = templates.open;
  if (!template) return reason;
  return template.split('{wind}').join(wind);
}

const PASS_RUNTIME: Record<NonEn, { passName: PhraseMap; recommendation: PhraseMap; savingsTip: PhraseMap }> = {
  de: {
    passName: {
      'Wolli Card (Under 9 Years)': 'Wolli Card (unter 9 Jahren)',
      'Ikon Pass + Cervinia International Upgrade': 'Ikon Pass + International-Upgrade Cervinia',
      'Ikon Pass (Included)': 'Ikon Pass (inbegriffen)',
      'Matterhorn International Ski Pass': 'Matterhorn International-Skipass',
      'Zermatt Local Ski Pass': 'Zermatt Lokal-Skipass',
    },
    recommendation: {
      'Free pass! Pick up the Wolli Card at any Zermatt ticket desk with passport/ID.':
        'Gratis! Die Wolli Card gibt es an jedem Zermatt-Schalter mit Pass oder Ausweis.',
      'Your Swiss skiing is 100% covered by Ikon Pass. Add the Cervinia Italian day voucher at ticket counters for ~55 CHF/day.':
        'Das Skifahren in der Schweiz ist mit dem Ikon Pass zu 100% gedeckt. Den italienischen Cervinia-Tagesschein gibt es am Schalter für ca. 55 CHF/Tag.',
      'Your skiing is fully covered by your Ikon Pass (7 days Full / 5 days Base) direct to lift!':
        'Das Skifahren ist mit dem Ikon Pass vollständig gedeckt (7 Tage Full / 5 Tage Base), direkt an den Lift.',
      'Ideal for skiing all 360 km across both Switzerland and Italy (Cervinia/Valtournenche).':
        'Ideal für alle 360 km in der Schweiz und in Italien (Cervinia/Valtournenche).',
      'Ideal for skiing the 3 Swiss sectors (Sunnegga, Gornergrat, and Klein Matterhorn).':
        'Ideal für die 3 Schweizer Sektoren (Sunnegga, Gornergrat und Klein Matterhorn).',
    },
    savingsTip: {
      'Children under 9 ski 100% free with an adult across all lifts in Zermatt.':
        'Kinder unter 9 fahren mit einer Begleitperson auf allen Liften in Zermatt zu 100% gratis.',
      'No need to purchase Swiss ski passes. Simply ensure your physical Ikon RFID pass is active.':
        'Keine Schweizer Skipässe kaufen. Der physische Ikon-RFID-Pass muss nur aktiv sein.',
      'Booking online at least 3 weeks before arrival unlocks dynamic early-bird savings up to 20% compared to walk-up rates.':
        'Wer mindestens 3 Wochen vor der Anreise online bucht, spart mit dem Frühbucher-Tarif bis zu 20% gegenüber dem Schalterpreis.',
      'If skiing only in Switzerland, the local pass saves ~18 CHF per day compared to the international option.':
        'Wer nur in der Schweiz fährt, spart mit dem Lokalpass ca. 18 CHF pro Tag gegenüber der internationalen Variante.',
    },
  },
  es: {
    passName: {
      'Wolli Card (Under 9 Years)': 'Wolli Card (menores de 9 años)',
      'Ikon Pass + Cervinia International Upgrade': 'Ikon Pass + suplemento internacional Cervinia',
      'Ikon Pass (Included)': 'Ikon Pass (incluido)',
      'Matterhorn International Ski Pass': 'Forfait internacional Matterhorn',
      'Zermatt Local Ski Pass': 'Forfait local de Zermatt',
    },
    recommendation: {
      'Free pass! Pick up the Wolli Card at any Zermatt ticket desk with passport/ID.':
        '¡Forfait gratis! Recoja la Wolli Card en cualquier taquilla de Zermatt con pasaporte o documento.',
      'Your Swiss skiing is 100% covered by Ikon Pass. Add the Cervinia Italian day voucher at ticket counters for ~55 CHF/day.':
        'El esquí en Suiza está cubierto al 100% por el Ikon Pass. El vale diario italiano de Cervinia se compra en taquilla por unos 55 CHF/día.',
      'Your skiing is fully covered by your Ikon Pass (7 days Full / 5 days Base) direct to lift!':
        'El esquí está cubierto por completo con el Ikon Pass (7 días Full / 5 días Base), directo al remontador.',
      'Ideal for skiing all 360 km across both Switzerland and Italy (Cervinia/Valtournenche).':
        'Ideal para esquiar los 360 km de Suiza e Italia (Cervinia/Valtournenche).',
      'Ideal for skiing the 3 Swiss sectors (Sunnegga, Gornergrat, and Klein Matterhorn).':
        'Ideal para los 3 sectores suizos (Sunnegga, Gornergrat y Klein Matterhorn).',
    },
    savingsTip: {
      'Children under 9 ski 100% free with an adult across all lifts in Zermatt.':
        'Los menores de 9 esquían gratis al 100% con un adulto en todos los remontadores de Zermatt.',
      'No need to purchase Swiss ski passes. Simply ensure your physical Ikon RFID pass is active.':
        'No hace falta comprar forfaits suizos. Basta con que el pase físico RFID de Ikon esté activo.',
      'Booking online at least 3 weeks before arrival unlocks dynamic early-bird savings up to 20% compared to walk-up rates.':
        'Reservar online al menos 3 semanas antes desbloquea un ahorro anticipado de hasta el 20% frente a la taquilla.',
      'If skiing only in Switzerland, the local pass saves ~18 CHF per day compared to the international option.':
        'Si solo esquía en Suiza, el forfait local ahorra unos 18 CHF al día frente a la opción internacional.',
    },
  },
  fr: {
    passName: {
      'Wolli Card (Under 9 Years)': 'Wolli Card (moins de 9 ans)',
      'Ikon Pass + Cervinia International Upgrade': 'Ikon Pass + supplément international Cervinia',
      'Ikon Pass (Included)': 'Ikon Pass (inclus)',
      'Matterhorn International Ski Pass': 'Forfait international Matterhorn',
      'Zermatt Local Ski Pass': 'Forfait ski local de Zermatt',
    },
    recommendation: {
      'Free pass! Pick up the Wolli Card at any Zermatt ticket desk with passport/ID.':
        'Forfait gratuit ! Retirez la Wolli Card à n’importe quel guichet de Zermatt avec passeport ou pièce d’identité.',
      'Your Swiss skiing is 100% covered by Ikon Pass. Add the Cervinia Italian day voucher at ticket counters for ~55 CHF/day.':
        'Le ski en Suisse est couvert à 100 % par l’Ikon Pass. Le supplément italien Cervinia se prend au guichet pour environ 55 CHF/jour.',
      'Your skiing is fully covered by your Ikon Pass (7 days Full / 5 days Base) direct to lift!':
        'Le ski est entièrement couvert par l’Ikon Pass (7 jours Full / 5 jours Base), directement aux remontées.',
      'Ideal for skiing all 360 km across both Switzerland and Italy (Cervinia/Valtournenche).':
        'Idéal pour les 360 km en Suisse et en Italie (Cervinia/Valtournenche).',
      'Ideal for skiing the 3 Swiss sectors (Sunnegga, Gornergrat, and Klein Matterhorn).':
        'Idéal pour les 3 secteurs suisses (Sunnegga, Gornergrat et Klein Matterhorn).',
    },
    savingsTip: {
      'Children under 9 ski 100% free with an adult across all lifts in Zermatt.':
        'Les enfants de moins de 9 ans skient 100 % gratuitement avec un adulte sur toutes les remontées de Zermatt.',
      'No need to purchase Swiss ski passes. Simply ensure your physical Ikon RFID pass is active.':
        'Inutile d’acheter des forfaits suisses. Vérifiez seulement que le pass RFID physique Ikon est actif.',
      'Booking online at least 3 weeks before arrival unlocks dynamic early-bird savings up to 20% compared to walk-up rates.':
        'Réserver en ligne au moins 3 semaines avant l’arrivée débloque jusqu’à 20 % d’économie par rapport au guichet.',
      'If skiing only in Switzerland, the local pass saves ~18 CHF per day compared to the international option.':
        'Pour skier uniquement en Suisse, le forfait local économise environ 18 CHF par jour par rapport à l’option internationale.',
    },
  },
  it: {
    passName: {
      'Wolli Card (Under 9 Years)': 'Wolli Card (sotto i 9 anni)',
      'Ikon Pass + Cervinia International Upgrade': 'Ikon Pass + upgrade internazionale Cervinia',
      'Ikon Pass (Included)': 'Ikon Pass (incluso)',
      'Matterhorn International Ski Pass': 'Skipass internazionale Matterhorn',
      'Zermatt Local Ski Pass': 'Skipass locale di Zermatt',
    },
    recommendation: {
      'Free pass! Pick up the Wolli Card at any Zermatt ticket desk with passport/ID.':
        'Skipass gratis! Ritiri la Wolli Card in qualsiasi biglietteria di Zermatt con passaporto o documento.',
      'Your Swiss skiing is 100% covered by Ikon Pass. Add the Cervinia Italian day voucher at ticket counters for ~55 CHF/day.':
        'Lo sci in Svizzera è coperto al 100% dall’Ikon Pass. Il voucher giornaliero italiano di Cervinia si compra in biglietteria a circa 55 CHF/giorno.',
      'Your skiing is fully covered by your Ikon Pass (7 days Full / 5 days Base) direct to lift!':
        'Lo sci è coperto per intero dall’Ikon Pass (7 giorni Full / 5 giorni Base), diretto agli impianti.',
      'Ideal for skiing all 360 km across both Switzerland and Italy (Cervinia/Valtournenche).':
        'Ideale per tutti i 360 km in Svizzera e in Italia (Cervinia/Valtournenche).',
      'Ideal for skiing the 3 Swiss sectors (Sunnegga, Gornergrat, and Klein Matterhorn).':
        'Ideale per i 3 settori svizzeri (Sunnegga, Gornergrat e Klein Matterhorn).',
    },
    savingsTip: {
      'Children under 9 ski 100% free with an adult across all lifts in Zermatt.':
        'I bambini sotto i 9 anni sciano gratis al 100% con un adulto su tutti gli impianti di Zermatt.',
      'No need to purchase Swiss ski passes. Simply ensure your physical Ikon RFID pass is active.':
        'Non serve acquistare skipass svizzeri. Basta che il pass RFID fisico Ikon sia attivo.',
      'Booking online at least 3 weeks before arrival unlocks dynamic early-bird savings up to 20% compared to walk-up rates.':
        'Prenotare online almeno 3 settimane prima sblocca uno sconto anticipato fino al 20% rispetto alla biglietteria.',
      'If skiing only in Switzerland, the local pass saves ~18 CHF per day compared to the international option.':
        'Se si scia solo in Svizzera, lo skipass locale fa risparmiare circa 18 CHF al giorno rispetto all’opzione internazionale.',
    },
  },
  pt: {
    passName: {
      'Wolli Card (Under 9 Years)': 'Wolli Card (menos de 9 anos)',
      'Ikon Pass + Cervinia International Upgrade': 'Ikon Pass + suplemento internacional Cervinia',
      'Ikon Pass (Included)': 'Ikon Pass (incluído)',
      'Matterhorn International Ski Pass': 'Passe de esqui internacional Matterhorn',
      'Zermatt Local Ski Pass': 'Passe de esqui local de Zermatt',
    },
    recommendation: {
      'Free pass! Pick up the Wolli Card at any Zermatt ticket desk with passport/ID.':
        'Passe grátis! Levante a Wolli Card em qualquer bilheteira de Zermatt com passaporte ou documento.',
      'Your Swiss skiing is 100% covered by Ikon Pass. Add the Cervinia Italian day voucher at ticket counters for ~55 CHF/day.':
        'O esqui na Suíça está 100% coberto pelo Ikon Pass. O vale diário italiano de Cervinia compra-se na bilheteira por cerca de 55 CHF/dia.',
      'Your skiing is fully covered by your Ikon Pass (7 days Full / 5 days Base) direct to lift!':
        'O esqui está totalmente coberto pelo Ikon Pass (7 dias Full / 5 dias Base), direto para o teleférico.',
      'Ideal for skiing all 360 km across both Switzerland and Italy (Cervinia/Valtournenche).':
        'Ideal para esquiar os 360 km na Suíça e em Itália (Cervinia/Valtournenche).',
      'Ideal for skiing the 3 Swiss sectors (Sunnegga, Gornergrat, and Klein Matterhorn).':
        'Ideal para os 3 sectores suíços (Sunnegga, Gornergrat e Klein Matterhorn).',
    },
    savingsTip: {
      'Children under 9 ski 100% free with an adult across all lifts in Zermatt.':
        'Crianças com menos de 9 anos esquiam 100% grátis com um adulto em todos os teleféricos de Zermatt.',
      'No need to purchase Swiss ski passes. Simply ensure your physical Ikon RFID pass is active.':
        'Não é preciso comprar passes suíços. Basta o passe físico RFID Ikon estar ativo.',
      'Booking online at least 3 weeks before arrival unlocks dynamic early-bird savings up to 20% compared to walk-up rates.':
        'Reservar online pelo menos 3 semanas antes desbloqueia uma poupança antecipada até 20% face à bilheteira.',
      'If skiing only in Switzerland, the local pass saves ~18 CHF per day compared to the international option.':
        'Se esquiar só na Suíça, o passe local poupa cerca de 18 CHF por dia face à opção internacional.',
    },
  },
  ko: {
    passName: {
      'Wolli Card (Under 9 Years)': 'Wolli Card (9세 미만)',
      'Ikon Pass + Cervinia International Upgrade': 'Ikon Pass + 체르비니아 국제 업그레이드',
      'Ikon Pass (Included)': 'Ikon Pass (포함)',
      'Matterhorn International Ski Pass': '마터호른 인터내셔널 스키 패스',
      'Zermatt Local Ski Pass': '체르마트 로컬 스키 패스',
    },
    recommendation: {
      'Free pass! Pick up the Wolli Card at any Zermatt ticket desk with passport/ID.':
        '무료 패스입니다. 여권이나 신분증을 가지고 체르마트 매표소에서 Wolli Card를 받으세요.',
      'Your Swiss skiing is 100% covered by Ikon Pass. Add the Cervinia Italian day voucher at ticket counters for ~55 CHF/day.':
        '스위스 스키는 Ikon Pass로 100% 포함됩니다. 체르비니아 이탈리아 당일권은 매표소에서 약 55 CHF/일입니다.',
      'Your skiing is fully covered by your Ikon Pass (7 days Full / 5 days Base) direct to lift!':
        '스키는 Ikon Pass로 전부 포함됩니다 (Full 7일 / Base 5일), 리프트로 바로 갑니다.',
      'Ideal for skiing all 360 km across both Switzerland and Italy (Cervinia/Valtournenche).':
        '스위스와 이탈리아(Cervinia/Valtournenche)의 360 km 전체에 적합합니다.',
      'Ideal for skiing the 3 Swiss sectors (Sunnegga, Gornergrat, and Klein Matterhorn).':
        '스위스 3개 구역(Sunnegga, Gornergrat, Klein Matterhorn)에 적합합니다.',
    },
    savingsTip: {
      'Children under 9 ski 100% free with an adult across all lifts in Zermatt.':
        '9세 미만 어린이는 성인과 함께 체르마트 모든 리프트가 100% 무료입니다.',
      'No need to purchase Swiss ski passes. Simply ensure your physical Ikon RFID pass is active.':
        '스위스 스키 패스를 따로 살 필요가 없습니다. 실물 Ikon RFID 패스만 활성화되어 있으면 됩니다.',
      'Booking online at least 3 weeks before arrival unlocks dynamic early-bird savings up to 20% compared to walk-up rates.':
        '도착 최소 3주 전 온라인 예약 시, 현장 가격보다 최대 20% 얼리버드 할인이 적용됩니다.',
      'If skiing only in Switzerland, the local pass saves ~18 CHF per day compared to the international option.':
        '스위스에서만 탄다면 로컬 패스가 국제 옵션보다 하루 약 18 CHF 저렴합니다.',
    },
  },
  ja: {
    passName: {
      'Wolli Card (Under 9 Years)': 'Wolli Card（9歳未満）',
      'Ikon Pass + Cervinia International Upgrade': 'Ikon Pass＋チェルヴィニア国際アップグレード',
      'Ikon Pass (Included)': 'Ikon Pass（込み）',
      'Matterhorn International Ski Pass': 'マッターホルン国際スキーパス',
      'Zermatt Local Ski Pass': 'ツェルマット現地スキーパス',
    },
    recommendation: {
      'Free pass! Pick up the Wolli Card at any Zermatt ticket desk with passport/ID.':
        '無料パスです。パスポートか身分証を持って、ツェルマットの窓口で Wolli Card を受け取ってください。',
      'Your Swiss skiing is 100% covered by Ikon Pass. Add the Cervinia Italian day voucher at ticket counters for ~55 CHF/day.':
        'スイス側のスキーは Ikon Pass で 100% カバーされます。チェルヴィニアのイタリア1日券は窓口で約 55 CHF/日です。',
      'Your skiing is fully covered by your Ikon Pass (7 days Full / 5 days Base) direct to lift!':
        'スキーは Ikon Pass で全額カバーされます（Full 7日 / Base 5日）。リフトへ直行です。',
      'Ideal for skiing all 360 km across both Switzerland and Italy (Cervinia/Valtournenche).':
        'スイスとイタリア（Cervinia/Valtournenche）の 360 km すべてに向いています。',
      'Ideal for skiing the 3 Swiss sectors (Sunnegga, Gornergrat, and Klein Matterhorn).':
        'スイスの 3 エリア（Sunnegga、Gornergrat、Klein Matterhorn）に向いています。',
    },
    savingsTip: {
      'Children under 9 ski 100% free with an adult across all lifts in Zermatt.':
        '9歳未満の子どもは、大人と一緒ならツェルマットの全リフトが 100% 無料です。',
      'No need to purchase Swiss ski passes. Simply ensure your physical Ikon RFID pass is active.':
        'スイスのスキーパスを買う必要はありません。実物の Ikon RFID パスが有効であることだけ確認してください。',
      'Booking online at least 3 weeks before arrival unlocks dynamic early-bird savings up to 20% compared to walk-up rates.':
        '到着の少なくとも 3 週間前にオンライン予約すると、窓口料金より最大 20% の早割になります。',
      'If skiing only in Switzerland, the local pass saves ~18 CHF per day compared to the international option.':
        'スイスだけで滑るなら、現地パスは国際パスより 1 日あたり約 18 CHF 安くなります。',
    },
  },
  zh: {
    passName: {
      'Wolli Card (Under 9 Years)': 'Wolli Card（9岁以下）',
      'Ikon Pass + Cervinia International Upgrade': 'Ikon Pass + 切尔维尼亚国际升级',
      'Ikon Pass (Included)': 'Ikon Pass（已包含）',
      'Matterhorn International Ski Pass': '马特洪峰国际滑雪通票',
      'Zermatt Local Ski Pass': '采尔马特本地滑雪通票',
    },
    recommendation: {
      'Free pass! Pick up the Wolli Card at any Zermatt ticket desk with passport/ID.':
        '免费通票！凭护照或证件在任意采尔马特售票处领取 Wolli Card。',
      'Your Swiss skiing is 100% covered by Ikon Pass. Add the Cervinia Italian day voucher at ticket counters for ~55 CHF/day.':
        '瑞士一侧的滑雪已由 Ikon Pass 100% 覆盖。切尔维尼亚意大利单日券在售票处购买，约 55 CHF/天。',
      'Your skiing is fully covered by your Ikon Pass (7 days Full / 5 days Base) direct to lift!':
        '滑雪已由 Ikon Pass 全额覆盖（Full 7 天 / Base 5 天），可直接上索道。',
      'Ideal for skiing all 360 km across both Switzerland and Italy (Cervinia/Valtournenche).':
        '适合滑遍瑞士和意大利（Cervinia/Valtournenche）全部 360 公里。',
      'Ideal for skiing the 3 Swiss sectors (Sunnegga, Gornergrat, and Klein Matterhorn).':
        '适合瑞士的 3 个雪区（Sunnegga、Gornergrat 和 Klein Matterhorn）。',
    },
    savingsTip: {
      'Children under 9 ski 100% free with an adult across all lifts in Zermatt.':
        '9 岁以下儿童在成人陪同下，采尔马特所有索道 100% 免费。',
      'No need to purchase Swiss ski passes. Simply ensure your physical Ikon RFID pass is active.':
        '不必再买瑞士滑雪票。只要实体 Ikon RFID 卡处于有效状态即可。',
      'Booking online at least 3 weeks before arrival unlocks dynamic early-bird savings up to 20% compared to walk-up rates.':
        '至少提前 3 周网上预订，可比窗口现买最多节省 20%。',
      'If skiing only in Switzerland, the local pass saves ~18 CHF per day compared to the international option.':
        '如果只在瑞士滑，本地通票比国际通票每天大约省 18 CHF。',
    },
  },
  'zh-tw': {
    passName: {
      'Wolli Card (Under 9 Years)': 'Wolli Card（未滿9歲）',
      'Ikon Pass + Cervinia International Upgrade': 'Ikon Pass＋切爾維尼亞國際加購',
      'Ikon Pass (Included)': 'Ikon Pass（已含）',
      'Matterhorn International Ski Pass': '馬特洪峰國際滑雪通票',
      'Zermatt Local Ski Pass': '策馬特本地滑雪通票',
    },
    recommendation: {
      'Free pass! Pick up the Wolli Card at any Zermatt ticket desk with passport/ID.':
        '免費通票！憑護照或證件到任何策馬特售票處領取 Wolli Card。',
      'Your Swiss skiing is 100% covered by Ikon Pass. Add the Cervinia Italian day voucher at ticket counters for ~55 CHF/day.':
        '瑞士這一側的滑雪已由 Ikon Pass 全額包含。切爾維尼亞的義大利單日券在售票處購買，大約 55 CHF／天。',
      'Your skiing is fully covered by your Ikon Pass (7 days Full / 5 days Base) direct to lift!':
        '滑雪已由 Ikon Pass 全額包含（Full 7 天／Base 5 天），可以直接上索道。',
      'Ideal for skiing all 360 km across both Switzerland and Italy (Cervinia/Valtournenche).':
        '適合滑遍瑞士與義大利（Cervinia/Valtournenche）全部 360 公里。',
      'Ideal for skiing the 3 Swiss sectors (Sunnegga, Gornergrat, and Klein Matterhorn).':
        '適合瑞士的 3 個雪區（Sunnegga、Gornergrat 與 Klein Matterhorn）。',
    },
    savingsTip: {
      'Children under 9 ski 100% free with an adult across all lifts in Zermatt.':
        '未滿 9 歲的孩童由成人陪同，策馬特所有索道都 100% 免費。',
      'No need to purchase Swiss ski passes. Simply ensure your physical Ikon RFID pass is active.':
        '不必再買瑞士滑雪票。只要實體 Ikon RFID 卡是有效的就好。',
      'Booking online at least 3 weeks before arrival unlocks dynamic early-bird savings up to 20% compared to walk-up rates.':
        '至少提早 3 週線上預訂，可比現場窗口最多省下 20%。',
      'If skiing only in Switzerland, the local pass saves ~18 CHF per day compared to the international option.':
        '如果只在瑞士滑，本地通票比國際通票每天大約省 18 CHF。',
    },
  },
};

const BORDER_RUNTIME: Record<NonEn, { title: PhraseMap; reason: BorderReason; lastLift: PhraseMap }> = {
  de: {
    title: {
      'Italy Border Link Temporarily Closed': 'Italien-Verbindung vorübergehend geschlossen',
      'Italy Border Link Open (Wind Warning)': 'Italien-Verbindung offen (Windwarnung)',
      'Italy Border Link Fully Open & Connected': 'Italien-Verbindung vollständig offen',
    },
    reason: {
      closed:
        'Starker Wind am hochalpinen Grat ({wind} km/h) liegt über der Sicherheitsgrenze der Bahnen Plateau Rosa und Testa Grigia. Skifahren bleibt auf die Schweizer Sektoren beschränkt.',
      standby:
        'Mässige Böen ({wind} km/h) auf dem Plateau Rosa. Die Bahnen fahren, ein Nachmittagsschluss wegen Wind ist möglich. Vor der Abfahrt nach Cervinia die Morgenansage prüfen.',
      open:
        'Günstiger Wind am Grat ({wind} km/h). Plateau Rosa, Testa Grigia und Matterhorn Alpine Crossing laufen ruhig zwischen der Schweiz und Italien.',
    },
    lastLift: {
      'N/A — Link Inactive': 'N/A — Verbindung inaktiv',
      '15:45 CET (Plan return early)': '15:45 CET (Rückfahrt früh planen)',
      '16:15 CET': '16:15 CET',
    },
  },
  es: {
    title: {
      'Italy Border Link Temporarily Closed': 'Enlace fronterizo con Italia cerrado temporalmente',
      'Italy Border Link Open (Wind Warning)': 'Enlace fronterizo con Italia abierto (aviso de viento)',
      'Italy Border Link Fully Open & Connected': 'Enlace fronterizo con Italia totalmente abierto',
    },
    reason: {
      closed:
        'El viento fuerte en la cresta de alta montaña ({wind} km/h) supera el límite de seguridad de los remontadores de Plateau Rosa y Testa Grigia. El esquí queda limitado a los sectores suizos.',
      standby:
        'Rachas moderadas ({wind} km/h) en Plateau Rosa. Los remontadores funcionan, pero por la tarde puede haber cierre por viento. Compruebe el parte de la mañana antes de bajar a Cervinia.',
      open:
        'Viento favorable en la cresta ({wind} km/h). Plateau Rosa, Testa Grigia y Matterhorn Alpine Crossing operan con normalidad entre Suiza e Italia.',
    },
    lastLift: {
      'N/A — Link Inactive': 'N/A — enlace inactivo',
      '15:45 CET (Plan return early)': '15:45 CET (planifique el regreso pronto)',
      '16:15 CET': '16:15 CET',
    },
  },
  fr: {
    title: {
      'Italy Border Link Temporarily Closed': 'Liaison frontalière vers l’Italie temporairement fermée',
      'Italy Border Link Open (Wind Warning)': 'Liaison frontalière vers l’Italie ouverte (alerte vent)',
      'Italy Border Link Fully Open & Connected': 'Liaison frontalière vers l’Italie pleinement ouverte',
    },
    reason: {
      closed:
        'Vent fort sur la crête de haute altitude ({wind} km/h), au-delà du seuil de sécurité des remontées de Plateau Rosa et Testa Grigia. Le ski reste limité aux secteurs suisses.',
      standby:
        'Rafales modérées ({wind} km/h) sur Plateau Rosa. Les remontées tournent, mais une fermeture l’après-midi est possible. Vérifiez les annonces du matin avant de descendre à Cervinia.',
      open:
        'Vent favorable sur la crête ({wind} km/h). Plateau Rosa, Testa Grigia et Matterhorn Alpine Crossing fonctionnent normalement entre la Suisse et l’Italie.',
    },
    lastLift: {
      'N/A — Link Inactive': 'N/A — liaison inactive',
      '15:45 CET (Plan return early)': '15:45 CET (prévoyez le retour tôt)',
      '16:15 CET': '16:15 CET',
    },
  },
  it: {
    title: {
      'Italy Border Link Temporarily Closed': 'Collegamento di confine con l’Italia temporaneamente chiuso',
      'Italy Border Link Open (Wind Warning)': 'Collegamento di confine con l’Italia aperto (avviso vento)',
      'Italy Border Link Fully Open & Connected': 'Collegamento di confine con l’Italia completamente aperto',
    },
    reason: {
      closed:
        'Vento forte sulla cresta d’alta quota ({wind} km/h), oltre la soglia di sicurezza degli impianti di Plateau Rosa e Testa Grigia. Lo sci resta limitato ai settori svizzeri.',
      standby:
        'Raffiche moderate ({wind} km/h) su Plateau Rosa. Gli impianti funzionano, ma nel pomeriggio è possibile una chiusura per vento. Controlli gli annunci del mattino prima di scendere a Cervinia.',
      open:
        'Vento favorevole in cresta ({wind} km/h). Plateau Rosa, Testa Grigia e Matterhorn Alpine Crossing funzionano regolarmente tra Svizzera e Italia.',
    },
    lastLift: {
      'N/A — Link Inactive': 'N/A — collegamento non attivo',
      '15:45 CET (Plan return early)': '15:45 CET (preveda il rientro presto)',
      '16:15 CET': '16:15 CET',
    },
  },
  pt: {
    title: {
      'Italy Border Link Temporarily Closed': 'Ligação fronteiriça com Itália temporariamente fechada',
      'Italy Border Link Open (Wind Warning)': 'Ligação fronteiriça com Itália aberta (aviso de vento)',
      'Italy Border Link Fully Open & Connected': 'Ligação fronteiriça com Itália totalmente aberta',
    },
    reason: {
      closed:
        'Vento forte na crista de alta montanha ({wind} km/h) ultrapassa o limite de segurança dos teleféricos de Plateau Rosa e Testa Grigia. O esqui fica limitado aos sectores suíços.',
      standby:
        'Rajadas moderadas ({wind} km/h) em Plateau Rosa. Os teleféricos circulam, mas ao fim da tarde pode haver fecho por vento. Confira os avisos da manhã antes de descer a Cervinia.',
      open:
        'Vento favorável na crista ({wind} km/h). Plateau Rosa, Testa Grigia e Matterhorn Alpine Crossing funcionam com normalidade entre a Suíça e Itália.',
    },
    lastLift: {
      'N/A — Link Inactive': 'N/A — ligação inativa',
      '15:45 CET (Plan return early)': '15:45 CET (planeie o regresso cedo)',
      '16:15 CET': '16:15 CET',
    },
  },
  ko: {
    title: {
      'Italy Border Link Temporarily Closed': '이탈리아 국경 연결 일시 폐쇄',
      'Italy Border Link Open (Wind Warning)': '이탈리아 국경 연결 운행 (강풍 주의)',
      'Italy Border Link Fully Open & Connected': '이탈리아 국경 연결 완전 개방',
    },
    reason: {
      closed:
        '고산 능선의 강풍 ({wind} km/h)이 Plateau Rosa와 Testa Grigia 로프웨이의 안전 한계를 넘습니다. 스키는 스위스 구역으로 제한됩니다.',
      standby:
        'Plateau Rosa에 보통 돌풍 ({wind} km/h). 케이블은 운행 중이나 오후 강풍 중단이 가능합니다. Cervinia로 내려가기 전에 오전 안내를 확인하세요.',
      open:
        '능선 바람이 양호합니다 ({wind} km/h). Plateau Rosa, Testa Grigia, Matterhorn Alpine Crossing이 스위스와 이탈리아 사이에서 순조롭게 운행합니다.',
    },
    lastLift: {
      'N/A — Link Inactive': 'N/A — 연결 중단',
      '15:45 CET (Plan return early)': '15:45 CET (귀환을 일찍 계획)',
      '16:15 CET': '16:15 CET',
    },
  },
  ja: {
    title: {
      'Italy Border Link Temporarily Closed': 'イタリア国境連絡は一時閉鎖',
      'Italy Border Link Open (Wind Warning)': 'イタリア国境連絡は運行中（風の注意）',
      'Italy Border Link Fully Open & Connected': 'イタリア国境連絡は全面開通',
    },
    reason: {
      closed:
        '高山の稜線の強風（{wind} km/h）が Plateau Rosa と Testa Grigia の安全基準を超えています。スキーはスイス側に限られます。',
      standby:
        'Plateau Rosa で中程度の突風（{wind} km/h）。索道は動いていますが、午後に風で止まる可能性があります。チェルヴィニアへ下る前に朝の案内を確認してください。',
      open:
        '稜線の風は良好です（{wind} km/h）。Plateau Rosa、Testa Grigia、Matterhorn Alpine Crossing はスイスとイタリアの間で順調に運行しています。',
    },
    lastLift: {
      'N/A — Link Inactive': 'N/A — 連絡は停止',
      '15:45 CET (Plan return early)': '15:45 CET（戻りは早めに）',
      '16:15 CET': '16:15 CET',
    },
  },
  zh: {
    title: {
      'Italy Border Link Temporarily Closed': '意大利边境连接暂时关闭',
      'Italy Border Link Open (Wind Warning)': '意大利边境连接开放（大风警告）',
      'Italy Border Link Fully Open & Connected': '意大利边境连接完全开放',
    },
    reason: {
      closed:
        '高山地脊强风（{wind} km/h）超过 Plateau Rosa 与 Testa Grigia 索道的安全阈值。滑雪仅限瑞士雪区。',
      standby:
        'Plateau Rosa 有中等阵风（{wind} km/h）。索道仍在运行，但下午可能因风关闭。滑向切尔维尼亚之前请看早上的停运通知。',
      open:
        '山脊风力有利（{wind} km/h）。Plateau Rosa、Testa Grigia 和 Matterhorn Alpine Crossing 在瑞士与意大利之间运行平稳。',
    },
    lastLift: {
      'N/A — Link Inactive': 'N/A — 连接停用',
      '15:45 CET (Plan return early)': '15:45 CET（请提早安排返回）',
      '16:15 CET': '16:15 CET',
    },
  },
  'zh-tw': {
    title: {
      'Italy Border Link Temporarily Closed': '義大利邊境聯絡暫時關閉',
      'Italy Border Link Open (Wind Warning)': '義大利邊境聯絡開放（強風注意）',
      'Italy Border Link Fully Open & Connected': '義大利邊境聯絡全面開通',
    },
    reason: {
      closed:
        '高山地脊的強風（{wind} km/h）已超過 Plateau Rosa 與 Testa Grigia 索道的安全門檻。目前只能在瑞士雪區滑。',
      standby:
        'Plateau Rosa 有中等陣風（{wind} km/h）。索道還在跑，但下午可能因風停駛。滑向切爾維尼亞之前，先看早上的停駛公告。',
      open:
        '地脊風力合適（{wind} km/h）。Plateau Rosa、Testa Grigia 與 Matterhorn Alpine Crossing 在瑞士和義大利之間運轉順暢。',
    },
    lastLift: {
      'N/A — Link Inactive': 'N/A — 聯絡停用',
      '15:45 CET (Plan return early)': '15:45 CET（回程請提早安排）',
      '16:15 CET': '16:15 CET',
    },
  },
};

export interface SkiDashboardUi {
  breadcrumbAria: string;
  home: string;
  breadcrumbCurrent: string;
  heroBadge: string;
  heroLead: string;
  statusOpen: string;
  statusStandby: string;
  statusClosed: string;
  borderLinkSuffix: string;
  plateauRosa: string;
  crestWind: string;
  safetyLimit: string;
  lastReturn: string;
  doNotMiss: string;
  passNote: string;
  calculatePass: string;
  passIntro: string;
  duration: string;
  day: string;
  days: string;
  tick1: string;
  tick3: string;
  tick6: string;
  tick14: string;
  ageCategory: string;
  ageAdult: string;
  ageYouth: string;
  ageChild: string;
  ageUnder9: string;
  italyToggleTitle: string;
  italyToggleBody: string;
  ikonTitle: string;
  ikonBody: string;
  estimatedCost: string;
  dynamic2026: string;
  avgPerDay: (amount: number) => string;
  bookEarly: string;
  seasonBrand: string;
  seasonTitle: string;
  seasonBody: string;
  totalBase: string;
  fresh24h: string;
  condition: string;
  sectorsEyebrow: string;
  sectorsTitle: string;
  sectorsIntro: string;
  elevationRange: (min: number, max: number) => string;
  pisteBreakdown: (km: number) => string;
  blue: string;
  red: string;
  black: string;
  yellowItineraries: (km: number) => string;
  signatureDescent: string;
  bestFor: string;
  keyLifts: (count: number) => string;
  italyEyebrow: string;
  italyHeading: string;
  meteoTitle: string;
  meteoBody: (wind: number, status: string) => string;
  skipassTitle: string;
  skipassBody: string;
  webcamTitle: string;
  webcamBody: string;
  openWebcam: string;
  webcamsEyebrow: string;
  webcamsTitle: string;
  webcamsIntro: string;
  resortsEyebrow: string;
  resortsTitle: string;
  zcTitle: string;
  zcBody: string;
  chamonixTitle: string;
  chamonixBody: string;
  culinaryEyebrow: string;
  diningTitle: string;
  diningIntro: string;
  filterAll: string;
  filterFindeln: string;
  filterItaly: string;
  filterGornergrat: string;
  signatureDish: string;
  bookingRequired: string;
  walkIns: string;
  reserve: string;
  apresEyebrow: string;
  apresTitle: string;
  apresSubtitle: string;
  locationLabel: string;
  faqEyebrow: string;
  faqTitle: string;
  faqIntro: string;
  exploreTitle: string;
  allViewpoints: string;
  cardLive: string;
  cardGornergratTitle: string;
  cardGornergratBody: string;
  cardRail: string;
  cardTrainsTitle: string;
  cardTrainsBody: string;
  cardField: string;
  cardCompareTitle: string;
  cardCompareBody: string;
}

const SKI_UI: Record<Locale, SkiDashboardUi> = {
  en: {
    breadcrumbAria: 'Breadcrumb',
    home: 'Home',
    breadcrumbCurrent: 'Ski & Snow Intelligence (Zermatt & Cervinia)',
    heroBadge: 'Matterhorn Ski Paradise • 360 km International Domain',
    heroLead:
      'See whether the link to Cervinia is open, what the crest wind is doing, and whether snow is on the way. Depths are the Zermatt Bergbahnen report. The 10-day forecast and the monthly averages are below.',
    statusOpen: 'OPEN',
    statusStandby: 'STANDBY',
    statusClosed: 'CLOSED',
    borderLinkSuffix: ': Switzerland ↔ Italy Border Link',
    plateauRosa: 'Plateau Rosa & Testa Grigia (3,480 m)',
    crestWind: 'Crest Wind',
    safetyLimit: 'Safety limit: 55 km/h',
    lastReturn: 'Last Return',
    doNotMiss: 'Do not miss lift',
    passNote: 'International ski pass or 55 CHF Cervinia daily supplement required before boarding Italian lifts.',
    calculatePass: 'Calculate international pass price',
    passIntro: 'Estimate ticket costs based on duration, international border access, age group, and Ikon Pass validity.',
    duration: 'Duration:',
    day: 'Day',
    days: 'Days',
    tick1: '1 day',
    tick3: '3 days',
    tick6: '6 days (Typical)',
    tick14: '14 days',
    ageCategory: 'Age Category:',
    ageAdult: 'Adult (20+)',
    ageYouth: 'Youth (16–19)',
    ageChild: 'Child (9–15)',
    ageUnder9: 'Under 9 (Free)',
    italyToggleTitle: 'Include Cervinia (Italy) Border Crossing',
    italyToggleBody: 'Unlocks full 360 km International domain and ski descents into Italy.',
    ikonTitle: 'I have an Ikon Pass (Base or Full)',
    ikonBody: 'Ikon Pass covers 5 to 7 days direct-to-lift across all Swiss sectors.',
    estimatedCost: 'Estimated Pass Cost',
    dynamic2026: '2026 Dynamic',
    avgPerDay: (amount) => `Avg. ~${amount} CHF / day`,
    bookEarly: 'Book Early on Official Portal',
    seasonBrand: 'Zermatt Bergbahnen',
    seasonTitle: 'Zermatt ski season',
    seasonBody:
      'Zermatt Bergbahnen run the lifts. Glacier skiing on the Theodul, up to 3,883 m at Matterhorn Glacier Paradise, runs year-round. The village slopes are the winter season. Early December and late May still ski on the glacier when the lower mountain is thin.',
    totalBase: 'Total Base',
    fresh24h: '24h Fresh',
    condition: 'Condition:',
    sectorsEyebrow: 'Infrastructure & Terrain',
    sectorsTitle: 'The 4 Mountain Sectors of Matterhorn Ski Paradise',
    sectorsIntro: 'Select a sector to review elevation span, lift networks, sun aspect, and signature descents.',
    elevationRange: (min, max) => `Elevation: ${min} m – ${max} m`,
    pisteBreakdown: (km) => `Piste Breakdown (${km} km Total)`,
    blue: 'Blue',
    red: 'Red',
    black: 'Black',
    yellowItineraries: (km) => `+ ${km} km Ungroomed Yellow Itineraries`,
    signatureDescent: 'Signature Descent',
    bestFor: 'Best For:',
    keyLifts: (count) => `Key Lifts & Ropeways (${count} total)`,
    italyEyebrow: 'Italy side of the ski area',
    italyHeading: 'Ski Cervinia, Webcam & Meteo',
    meteoTitle: 'Meteo Cervinia',
    meteoBody: (wind, status) =>
      `The Italy side closes with the same crest wind as the Swiss border. Plateau Rosa is at ${wind} km/h right now, against a 55 km/h safety limit. The link above is ${status}.`,
    skipassTitle: 'Skipass Cervinia Zermatt',
    skipassBody:
      'Board Italian lifts with an international ski pass, or add the 55 CHF Cervinia day supplement to a Swiss pass. The calculator below prices the cross-border option.',
    webcamTitle: 'Cervinia webcam',
    webcamBody:
      'This page does not embed an Italian camera. The Trockener Steg webcam at 2,939 m is the Swiss view toward the glacier and the Italy link.',
    openWebcam: 'Open the Trockener Steg webcam',
    webcamsEyebrow: 'Live Visual Telemetry',
    webcamsTitle: 'Slope & Summit Webcams',
    webcamsIntro: 'Real-time 360° Roundshot panoramic feeds from Rothorn, Gornergrat, and Trockener Steg glacier approach.',
    resortsEyebrow: 'Two resorts',
    resortsTitle: 'Zermatt or Chamonix',
    zcTitle: 'Zermatt and Cervinia',
    zcBody:
      'This is one ski area. The link to Italy is the Plateau Rosa border above Trockener Steg. An international pass, or the 55 CHF Cervinia day supplement on a Swiss pass, is what lets you ski across.',
    chamonixTitle: 'Chamonix is a different resort',
    chamonixBody:
      'Chamonix sits under Mont Blanc, in France. Zermatt and Chamonix do not share a piste. Getting from one to the other is a travel day, not a lift ride. Cervinia remains the only ski link out of Zermatt.',
    culinaryEyebrow: 'Culinary Guide',
    diningTitle: 'Findeln Gourmet Chalets & Slope-Side Dining',
    diningIntro: 'Explore premier mountain huts across Switzerland and Italy with slope access requirements and booking recommendations.',
    filterAll: 'All Huts',
    filterFindeln: 'Findeln',
    filterItaly: 'Italy / Cervinia',
    filterGornergrat: 'Gornergrat',
    signatureDish: 'Signature Dish',
    bookingRequired: 'Booking Required',
    walkIns: 'Walk-ins OK',
    reserve: 'Reserve',
    apresEyebrow: '15:30 Onward',
    apresTitle: 'Legendary Après-Ski Progression',
    apresSubtitle: 'Slope-side huts to village taverns',
    locationLabel: 'Location:',
    faqEyebrow: 'Knowledge Base',
    faqTitle: 'Frequently Asked Questions About Skiing in Zermatt',
    faqIntro: 'Clear answers regarding cross-border link rules, Ikon Pass redemption, dynamic pricing, and dining.',
    exploreTitle: 'Continue Exploring Matterhorn & Zermatt',
    allViewpoints: 'All Vantage Points →',
    cardLive: 'Live Vantage Point',
    cardGornergratTitle: 'Gornergrat (3,089 m) Live Cams & Score →',
    cardGornergratBody: 'Real-time Roundshot webcams and 10-day AM/PM summit clarity projections.',
    cardRail: 'Scenic Rail Guide',
    cardTrainsTitle: 'Gornergrat Bahn & Glacier Express →',
    cardTrainsBody: 'Compare Swiss Travel Pass discounts, seat reservations, and cogwheel train timetables.',
    cardField: 'Field Comparison',
    cardCompareTitle: 'Gornergrat vs. Glacier Paradise →',
    cardCompareBody: 'Compare view angles, altitude differences (794 m), and high-wind weather resilience.',
  },
  de: {
    breadcrumbAria: 'Brotkrumen',
    home: 'Start',
    breadcrumbCurrent: 'Ski- und Schneelage (Zermatt & Cervinia)',
    heroBadge: 'Matterhorn Ski Paradise • 360 km internationales Gebiet',
    heroLead:
      'Sehen Sie, ob die Verbindung nach Cervinia offen ist, was der Wind am Grat macht und ob Schnee kommt. Die Höhen sind der Bericht der Zermatt Bergbahnen. Darunter liegen die 10-Tage-Prognose und die Monatsmittel.',
    statusOpen: 'OFFEN',
    statusStandby: 'BEREIT',
    statusClosed: 'GESCHLOSSEN',
    borderLinkSuffix: ': Grenzverbindung Schweiz ↔ Italien',
    plateauRosa: 'Plateau Rosa & Testa Grigia (3,480 m)',
    crestWind: 'Wind am Grat',
    safetyLimit: 'Sicherheitsgrenze: 55 km/h',
    lastReturn: 'Letzte Rückfahrt',
    doNotMiss: 'Bahn nicht verpassen',
    passNote: 'Vor den italienischen Liften braucht es einen International-Skipass oder den Cervinia-Tageszuschlag von 55 CHF.',
    calculatePass: 'Preis des internationalen Passes rechnen',
    passIntro: 'Ticketkosten nach Dauer, Grenzübertritt, Altersgruppe und Ikon Pass schätzen.',
    duration: 'Dauer:',
    day: 'Tag',
    days: 'Tage',
    tick1: '1 Tag',
    tick3: '3 Tage',
    tick6: '6 Tage (üblich)',
    tick14: '14 Tage',
    ageCategory: 'Alterskategorie:',
    ageAdult: 'Erwachsene (20+)',
    ageYouth: 'Jugend (16–19)',
    ageChild: 'Kinder (9–15)',
    ageUnder9: 'Unter 9 (gratis)',
    italyToggleTitle: 'Grenzübertritt Cervinia (Italien) einschliessen',
    italyToggleBody: 'Öffnet das volle internationale Gebiet von 360 km und Abfahrten nach Italien.',
    ikonTitle: 'Ich habe einen Ikon Pass (Base oder Full)',
    ikonBody: 'Der Ikon Pass deckt 5 bis 7 Tage direkt an den Lift in allen Schweizer Sektoren.',
    estimatedCost: 'Geschätzte Passkosten',
    dynamic2026: '2026 dynamisch',
    avgPerDay: (amount) => `Ø ~${amount} CHF / Tag`,
    bookEarly: 'Früh auf dem offiziellen Portal buchen',
    seasonBrand: 'Zermatt Bergbahnen',
    seasonTitle: 'Skisaison Zermatt',
    seasonBody:
      'Die Zermatt Bergbahnen betreiben die Lifte. Gletscherski auf dem Theodul, bis 3,883 m am Matterhorn Glacier Paradise, läuft das ganze Jahr. Die Dorfpisten sind die Wintersaison. Anfang Dezember und Ende Mai geht es auf dem Gletscher noch, wenn der untere Berg dünn ist.',
    totalBase: 'Gesamtschnee',
    fresh24h: '24h Neuschnee',
    condition: 'Zustand:',
    sectorsEyebrow: 'Infrastruktur & Gelände',
    sectorsTitle: 'Die 4 Bergsektoren von Matterhorn Ski Paradise',
    sectorsIntro: 'Sektor wählen und Höhenbereich, Lifte, Sonnenlage und Signature-Abfahrten ansehen.',
    elevationRange: (min, max) => `Höhe: ${min} m – ${max} m`,
    pisteBreakdown: (km) => `Pistenaufteilung (${km} km total)`,
    blue: 'Blau',
    red: 'Rot',
    black: 'Schwarz',
    yellowItineraries: (km) => `+ ${km} km unpräparierte gelbe Routen`,
    signatureDescent: 'Signature-Abfahrt',
    bestFor: 'Geeignet für:',
    keyLifts: (count) => `Wichtige Lifte & Seilbahnen (${count} total)`,
    italyEyebrow: 'Italienische Seite des Skigebiets',
    italyHeading: 'Ski Cervinia, Webcam & Meteo',
    meteoTitle: 'Meteo Cervinia',
    meteoBody: (wind, status) =>
      `Die italienische Seite schliesst mit demselben Gratwind wie die Schweizer Grenze. Plateau Rosa hat jetzt ${wind} km/h, Grenze 55 km/h. Die Verbindung oben ist ${status}.`,
    skipassTitle: 'Skipass Cervinia Zermatt',
    skipassBody:
      'Italienische Lifte mit International-Skipass, oder 55 CHF Cervinia-Tageszuschlag auf den Schweizer Pass. Der Rechner unten setzt den Grenzpreis an.',
    webcamTitle: 'Webcam Cervinia',
    webcamBody:
      'Diese Seite bettet keine italienische Kamera ein. Die Webcam Trockener Steg auf 2,939 m ist der Schweizer Blick zum Gletscher und zur Italien-Verbindung.',
    openWebcam: 'Webcam Trockener Steg öffnen',
    webcamsEyebrow: 'Live-Bild',
    webcamsTitle: 'Pisten- und Gipfelwebcams',
    webcamsIntro: 'Echtzeit-360°-Roundshot von Rothorn, Gornergrat und dem Gletscheranstieg Trockener Steg.',
    resortsEyebrow: 'Zwei Orte',
    resortsTitle: 'Zermatt oder Chamonix',
    zcTitle: 'Zermatt und Cervinia',
    zcBody:
      'Das ist ein Skigebiet. Die Verbindung nach Italien ist die Grenze am Plateau Rosa über Trockener Steg. Ein Internationalpass oder der Cervinia-Tageszuschlag von 55 CHF auf den Schweizer Pass macht die Überfahrt möglich.',
    chamonixTitle: 'Chamonix ist ein anderes Skigebiet',
    chamonixBody:
      'Chamonix liegt unter dem Mont Blanc, in Frankreich. Zermatt und Chamonix teilen keine Piste. Von einem zum anderen ist ein Reisetag, keine Liftfahrt. Cervinia bleibt die einzige Skiverbindung aus Zermatt.',
    culinaryEyebrow: 'Kulinarik',
    diningTitle: 'Gourmetchalets Findeln & Pistenrestaurants',
    diningIntro: 'Berghütten in der Schweiz und in Italien, mit Pistenzugang und Reservierungshinweisen.',
    filterAll: 'Alle Hütten',
    filterFindeln: 'Findeln',
    filterItaly: 'Italien / Cervinia',
    filterGornergrat: 'Gornergrat',
    signatureDish: 'Signature-Gericht',
    bookingRequired: 'Reservation nötig',
    walkIns: 'Ohne Reservation',
    reserve: 'Reservieren',
    apresEyebrow: 'Ab 15:30',
    apresTitle: 'Die Après-Ski-Runde',
    apresSubtitle: 'Von der Pistenhütte ins Dorf',
    locationLabel: 'Lage:',
    faqEyebrow: 'Wissensbasis',
    faqTitle: 'Häufige Fragen zum Skifahren in Zermatt',
    faqIntro: 'Klare Antworten zu Grenzregeln, Ikon Pass, dynamischen Preisen und Gastronomie.',
    exploreTitle: 'Weiter durch Matterhorn & Zermatt',
    allViewpoints: 'Alle Aussichtspunkte →',
    cardLive: 'Live-Aussicht',
    cardGornergratTitle: 'Gornergrat (3,089 m) Live-Cams & Score →',
    cardGornergratBody: 'Roundshot-Webcams in Echtzeit und 10-Tage-AM/PM-Klarheit am Gipfel.',
    cardRail: 'Panoramabahnen',
    cardTrainsTitle: 'Gornergrat Bahn & Glacier Express →',
    cardTrainsBody: 'Swiss Travel Pass, Sitzreservation und Zahnradbahn-Fahrplan vergleichen.',
    cardField: 'Vergleich',
    cardCompareTitle: 'Gornergrat vs. Glacier Paradise →',
    cardCompareBody: 'Blickwinkel, Höhendifferenz (794 m) und Verhalten bei starkem Wind.',
  },
  es: {
    breadcrumbAria: 'Miga de pan',
    home: 'Inicio',
    breadcrumbCurrent: 'Esquí y nieve (Zermatt y Cervinia)',
    heroBadge: 'Matterhorn Ski Paradise • dominio internacional de 360 km',
    heroLead:
      'Vea si el enlace con Cervinia está abierto, qué hace el viento de cresta y si llega nieve. Los espesores son el parte de Zermatt Bergbahnen. Abajo están la previsión de 10 días y las medias mensuales.',
    statusOpen: 'ABIERTO',
    statusStandby: 'EN ESPERA',
    statusClosed: 'CERRADO',
    borderLinkSuffix: ': enlace fronterizo Suiza ↔ Italia',
    plateauRosa: 'Plateau Rosa y Testa Grigia (3,480 m)',
    crestWind: 'Viento de cresta',
    safetyLimit: 'Límite de seguridad: 55 km/h',
    lastReturn: 'Último regreso',
    doNotMiss: 'No pierda el remontador',
    passNote: 'Antes de los remontadores italianos hace falta un forfait internacional o el suplemento diario de Cervinia de 55 CHF.',
    calculatePass: 'Calcular el precio del forfait internacional',
    passIntro: 'Estime el coste según duración, paso fronterizo, edad y validez del Ikon Pass.',
    duration: 'Duración:',
    day: 'día',
    days: 'días',
    tick1: '1 día',
    tick3: '3 días',
    tick6: '6 días (habitual)',
    tick14: '14 días',
    ageCategory: 'Edad:',
    ageAdult: 'Adulto (20+)',
    ageYouth: 'Joven (16–19)',
    ageChild: 'Niño (9–15)',
    ageUnder9: 'Menores de 9 (gratis)',
    italyToggleTitle: 'Incluir el paso a Cervinia (Italia)',
    italyToggleBody: 'Abre los 360 km internacionales y las bajadas hacia Italia.',
    ikonTitle: 'Tengo un Ikon Pass (Base o Full)',
    ikonBody: 'El Ikon Pass cubre de 5 a 7 días directos al remontador en todos los sectores suizos.',
    estimatedCost: 'Coste estimado del forfait',
    dynamic2026: '2026 dinámico',
    avgPerDay: (amount) => `Media ~${amount} CHF / día`,
    bookEarly: 'Reservar pronto en el portal oficial',
    seasonBrand: 'Zermatt Bergbahnen',
    seasonTitle: 'Temporada de esquí en Zermatt',
    seasonBody:
      'Zermatt Bergbahnen opera los remontadores. El esquí de glaciar en el Theodul, hasta 3,883 m en Matterhorn Glacier Paradise, funciona todo el año. Las pistas del pueblo son la temporada de invierno. A principios de diciembre y a finales de mayo el glaciar sigue esquiable cuando la parte baja está justa.',
    totalBase: 'Base total',
    fresh24h: 'Nieve 24 h',
    condition: 'Estado:',
    sectorsEyebrow: 'Infraestructura y terreno',
    sectorsTitle: 'Los 4 sectores de Matterhorn Ski Paradise',
    sectorsIntro: 'Elija un sector para ver desnivel, remontadores, sol y bajadas emblemáticas.',
    elevationRange: (min, max) => `Altitud: ${min} m – ${max} m`,
    pisteBreakdown: (km) => `Reparto de pistas (${km} km en total)`,
    blue: 'Azul',
    red: 'Roja',
    black: 'Negra',
    yellowItineraries: (km) => `+ ${km} km de itinerarios amarillos sin pisar`,
    signatureDescent: 'Bajada emblemática',
    bestFor: 'Ideal para:',
    keyLifts: (count) => `Remontadores principales (${count} en total)`,
    italyEyebrow: 'Lado italiano del dominio',
    italyHeading: 'Esquí en Cervinia, webcam y meteo',
    meteoTitle: 'Meteo Cervinia',
    meteoBody: (wind, status) =>
      `El lado italiano cierra con el mismo viento de cresta que la frontera suiza. Plateau Rosa está ahora a ${wind} km/h, con un límite de 55 km/h. El enlace de arriba está ${status}.`,
    skipassTitle: 'Forfait Cervinia Zermatt',
    skipassBody:
      'Suba a los remontadores italianos con un forfait internacional, o añada el suplemento diario de Cervinia de 55 CHF a un forfait suizo. La calculadora de abajo pone precio a la opción transfronteriza.',
    webcamTitle: 'Webcam de Cervinia',
    webcamBody:
      'Esta página no incrusta una cámara italiana. La webcam de Trockener Steg a 2,939 m es la vista suiza hacia el glaciar y el enlace con Italia.',
    openWebcam: 'Abrir la webcam de Trockener Steg',
    webcamsEyebrow: 'Imagen en directo',
    webcamsTitle: 'Webcams de pista y cumbre',
    webcamsIntro: 'Panorámicas Roundshot 360° en tiempo real desde Rothorn, Gornergrat y la aproximación al glaciar de Trockener Steg.',
    resortsEyebrow: 'Dos estaciones',
    resortsTitle: 'Zermatt o Chamonix',
    zcTitle: 'Zermatt y Cervinia',
    zcBody:
      'Es un solo dominio. El enlace con Italia es la frontera de Plateau Rosa, por encima de Trockener Steg. Un forfait internacional, o el suplemento diario de Cervinia de 55 CHF sobre un forfait suizo, es lo que permite cruzar esquiando.',
    chamonixTitle: 'Chamonix es otra estación',
    chamonixBody:
      'Chamonix está bajo el Mont Blanc, en Francia. Zermatt y Chamonix no comparten pista. Ir de una a otra es un día de viaje, no un trayecto en remontador. Cervinia sigue siendo el único enlace de esquí desde Zermatt.',
    culinaryEyebrow: 'Guía gastronómica',
    diningTitle: 'Chalés gourmet de Findeln y restaurantes de pista',
    diningIntro: 'Refugios de montaña en Suiza e Italia, con acceso desde la pista y consejos de reserva.',
    filterAll: 'Todos',
    filterFindeln: 'Findeln',
    filterItaly: 'Italia / Cervinia',
    filterGornergrat: 'Gornergrat',
    signatureDish: 'Plato estrella',
    bookingRequired: 'Reserva obligatoria',
    walkIns: 'Sin reserva',
    reserve: 'Reservar',
    apresEyebrow: 'Desde las 15:30',
    apresTitle: 'El recorrido de après-ski',
    apresSubtitle: 'De los refugios de pista a las tabernas del pueblo',
    locationLabel: 'Ubicación:',
    faqEyebrow: 'Base de conocimiento',
    faqTitle: 'Preguntas frecuentes sobre esquiar en Zermatt',
    faqIntro: 'Respuestas claras sobre el enlace fronterizo, el Ikon Pass, los precios dinámicos y la restauración.',
    exploreTitle: 'Seguir explorando el Matterhorn y Zermatt',
    allViewpoints: 'Todos los miradores →',
    cardLive: 'Mirador en directo',
    cardGornergratTitle: 'Gornergrat (3,089 m): cámaras y puntuación →',
    cardGornergratBody: 'Webcams Roundshot en tiempo real y claridad de cumbre AM/PM a 10 días.',
    cardRail: 'Trenes panorámicos',
    cardTrainsTitle: 'Gornergrat Bahn y Glacier Express →',
    cardTrainsBody: 'Compare descuentos del Swiss Travel Pass, reservas de asiento y horarios del cremallera.',
    cardField: 'Comparación',
    cardCompareTitle: 'Gornergrat frente a Glacier Paradise →',
    cardCompareBody: 'Ángulos de vista, diferencia de altitud (794 m) y resistencia al viento fuerte.',
  },
  fr: {
    breadcrumbAria: 'Fil d’Ariane',
    home: 'Accueil',
    breadcrumbCurrent: 'Ski et neige (Zermatt et Cervinia)',
    heroBadge: 'Matterhorn Ski Paradise • domaine international de 360 km',
    heroLead:
      'Voyez si la liaison vers Cervinia est ouverte, ce que fait le vent de crête, et si la neige arrive. Les hauteurs viennent du bulletin des Zermatt Bergbahnen. La prévision à 10 jours et les moyennes mensuelles sont plus bas.',
    statusOpen: 'OUVERT',
    statusStandby: 'VEILLE',
    statusClosed: 'FERMÉ',
    borderLinkSuffix: ' : liaison frontalière Suisse ↔ Italie',
    plateauRosa: 'Plateau Rosa et Testa Grigia (3,480 m)',
    crestWind: 'Vent de crête',
    safetyLimit: 'Seuil de sécurité : 55 km/h',
    lastReturn: 'Dernier retour',
    doNotMiss: 'Ne ratez pas la remontée',
    passNote: 'Avant les remontées italiennes, un forfait international ou le supplément Cervinia de 55 CHF est requis.',
    calculatePass: 'Calculer le prix du forfait international',
    passIntro: 'Estimez le coût selon la durée, le passage de la frontière, l’âge et l’Ikon Pass.',
    duration: 'Durée :',
    day: 'jour',
    days: 'jours',
    tick1: '1 jour',
    tick3: '3 jours',
    tick6: '6 jours (courant)',
    tick14: '14 jours',
    ageCategory: 'Âge :',
    ageAdult: 'Adulte (20+)',
    ageYouth: 'Jeune (16–19)',
    ageChild: 'Enfant (9–15)',
    ageUnder9: 'Moins de 9 ans (gratuit)',
    italyToggleTitle: 'Inclure le passage vers Cervinia (Italie)',
    italyToggleBody: 'Ouvre les 360 km internationaux et les descentes vers l’Italie.',
    ikonTitle: 'J’ai un Ikon Pass (Base ou Full)',
    ikonBody: 'L’Ikon Pass couvre 5 à 7 jours en accès direct aux remontées sur tous les secteurs suisses.',
    estimatedCost: 'Coût estimé du forfait',
    dynamic2026: '2026 dynamique',
    avgPerDay: (amount) => `Moy. ~${amount} CHF / jour`,
    bookEarly: 'Réserver tôt sur le portail officiel',
    seasonBrand: 'Zermatt Bergbahnen',
    seasonTitle: 'Saison de ski à Zermatt',
    seasonBody:
      'Zermatt Bergbahnen exploite les remontées. Le ski sur le glacier du Théodule, jusqu’à 3,883 m à Matterhorn Glacier Paradise, fonctionne toute l’année. Les pistes du village correspondent à la saison d’hiver. Début décembre et fin mai, le glacier se skie encore quand le bas de la montagne est maigre.',
    totalBase: 'Base totale',
    fresh24h: 'Fraîche 24 h',
    condition: 'État :',
    sectorsEyebrow: 'Infrastructures et terrain',
    sectorsTitle: 'Les 4 secteurs de Matterhorn Ski Paradise',
    sectorsIntro: 'Choisissez un secteur pour voir le dénivelé, les remontées, l’exposition et les descentes signature.',
    elevationRange: (min, max) => `Altitude : ${min} m – ${max} m`,
    pisteBreakdown: (km) => `Répartition des pistes (${km} km au total)`,
    blue: 'Bleue',
    red: 'Rouge',
    black: 'Noire',
    yellowItineraries: (km) => `+ ${km} km d’itinéraires jaunes non damés`,
    signatureDescent: 'Descente signature',
    bestFor: 'Idéal pour :',
    keyLifts: (count) => `Remontées principales (${count} au total)`,
    italyEyebrow: 'Versant italien du domaine',
    italyHeading: 'Ski à Cervinia, webcam et météo',
    meteoTitle: 'Météo Cervinia',
    meteoBody: (wind, status) =>
      `Le versant italien ferme avec le même vent de crête que la frontière suisse. Plateau Rosa est à ${wind} km/h en ce moment, pour une limite de 55 km/h. La liaison ci-dessus est ${status}.`,
    skipassTitle: 'Forfait Cervinia Zermatt',
    skipassBody:
      'Empruntez les remontées italiennes avec un forfait international, ou ajoutez le supplément Cervinia de 55 CHF à un forfait suisse. Le calculateur ci-dessous chiffre l’option transfrontalière.',
    webcamTitle: 'Webcam de Cervinia',
    webcamBody:
      'Cette page n’intègre pas de caméra italienne. La webcam de Trockener Steg à 2,939 m est la vue suisse vers le glacier et la liaison italienne.',
    openWebcam: 'Ouvrir la webcam de Trockener Steg',
    webcamsEyebrow: 'Image en direct',
    webcamsTitle: 'Webcams de piste et de sommet',
    webcamsIntro: 'Panoramas Roundshot 360° en temps réel depuis le Rothorn, le Gornergrat et l’approche du glacier à Trockener Steg.',
    resortsEyebrow: 'Deux stations',
    resortsTitle: 'Zermatt ou Chamonix',
    zcTitle: 'Zermatt et Cervinia',
    zcBody:
      'C’est un seul domaine. La liaison vers l’Italie est la frontière de Plateau Rosa, au-dessus de Trockener Steg. Un forfait international, ou le supplément Cervinia de 55 CHF sur un forfait suisse, permet de skier d’un côté à l’autre.',
    chamonixTitle: 'Chamonix est une autre station',
    chamonixBody:
      'Chamonix se trouve sous le mont Blanc, en France. Zermatt et Chamonix ne partagent aucune piste. Passer de l’une à l’autre est une journée de voyage, pas un trajet en remontée. Cervinia reste la seule liaison ski depuis Zermatt.',
    culinaryEyebrow: 'Guide des tables',
    diningTitle: 'Chalets gourmet de Findeln et restaurants de piste',
    diningIntro: 'Refuges en Suisse et en Italie, avec l’accès depuis les pistes et les conseils de réservation.',
    filterAll: 'Tous les refuges',
    filterFindeln: 'Findeln',
    filterItaly: 'Italie / Cervinia',
    filterGornergrat: 'Gornergrat',
    signatureDish: 'Plat signature',
    bookingRequired: 'Réservation requise',
    walkIns: 'Sans réservation',
    reserve: 'Réserver',
    apresEyebrow: 'Dès 15:30',
    apresTitle: 'Le parcours après-ski',
    apresSubtitle: 'Des refuges de piste aux tavernes du village',
    locationLabel: 'Lieu :',
    faqEyebrow: 'Base de connaissances',
    faqTitle: 'Questions fréquentes sur le ski à Zermatt',
    faqIntro: 'Réponses claires sur la liaison frontalière, l’Ikon Pass, les prix dynamiques et les restaurants.',
    exploreTitle: 'Continuer vers le Cervin et Zermatt',
    allViewpoints: 'Tous les belvédères →',
    cardLive: 'Belvédère en direct',
    cardGornergratTitle: 'Gornergrat (3,089 m) : webcams et score →',
    cardGornergratBody: 'Webcams Roundshot en temps réel et clarté du sommet matin/après-midi sur 10 jours.',
    cardRail: 'Trains panoramiques',
    cardTrainsTitle: 'Gornergrat Bahn et Glacier Express →',
    cardTrainsBody: 'Comparez les réductions Swiss Travel Pass, les réservations de place et les horaires à crémaillère.',
    cardField: 'Comparaison',
    cardCompareTitle: 'Gornergrat ou Glacier Paradise →',
    cardCompareBody: 'Angles de vue, écart d’altitude (794 m) et tenue par grand vent.',
  },
  it: {
    breadcrumbAria: 'Percorso',
    home: 'Home',
    breadcrumbCurrent: 'Sci e neve (Zermatt e Cervinia)',
    heroBadge: 'Matterhorn Ski Paradise • comprensorio internazionale di 360 km',
    heroLead:
      'Veda se il collegamento con Cervinia è aperto, cosa fa il vento di cresta e se arriva neve. Gli spessori sono il bollettino delle Zermatt Bergbahnen. Sotto ci sono la previsione a 10 giorni e le medie mensili.',
    statusOpen: 'APERTO',
    statusStandby: 'ALLERTA',
    statusClosed: 'CHIUSO',
    borderLinkSuffix: ': collegamento di confine Svizzera ↔ Italia',
    plateauRosa: 'Plateau Rosa e Testa Grigia (3,480 m)',
    crestWind: 'Vento di cresta',
    safetyLimit: 'Limite di sicurezza: 55 km/h',
    lastReturn: 'Ultimo rientro',
    doNotMiss: 'Non perda l’impianto',
    passNote: 'Prima degli impianti italiani serve uno skipass internazionale o il supplemento giornaliero Cervinia di 55 CHF.',
    calculatePass: 'Calcola il prezzo dello skipass internazionale',
    passIntro: 'Stimi il costo in base a durata, confine, età e validità dell’Ikon Pass.',
    duration: 'Durata:',
    day: 'giorno',
    days: 'giorni',
    tick1: '1 giorno',
    tick3: '3 giorni',
    tick6: '6 giorni (tipico)',
    tick14: '14 giorni',
    ageCategory: 'Età:',
    ageAdult: 'Adulto (20+)',
    ageYouth: 'Giovane (16–19)',
    ageChild: 'Bambino (9–15)',
    ageUnder9: 'Sotto i 9 (gratis)',
    italyToggleTitle: 'Includi il passaggio a Cervinia (Italia)',
    italyToggleBody: 'Apre i 360 km internazionali e le discese verso l’Italia.',
    ikonTitle: 'Ho un Ikon Pass (Base o Full)',
    ikonBody: 'L’Ikon Pass copre da 5 a 7 giorni in accesso diretto agli impianti su tutti i settori svizzeri.',
    estimatedCost: 'Costo stimato dello skipass',
    dynamic2026: '2026 dinamico',
    avgPerDay: (amount) => `Media ~${amount} CHF / giorno`,
    bookEarly: 'Prenota presto sul portale ufficiale',
    seasonBrand: 'Zermatt Bergbahnen',
    seasonTitle: 'Stagione sci a Zermatt',
    seasonBody:
      'Zermatt Bergbahnen gestisce gli impianti. Lo sci sul ghiacciaio del Teodulo, fino a 3,883 m a Matterhorn Glacier Paradise, funziona tutto l’anno. Le piste del paese sono la stagione invernale. A inizio dicembre e a fine maggio il ghiacciaio si scia ancora quando il basso è scarso.',
    totalBase: 'Base totale',
    fresh24h: 'Fresca 24 h',
    condition: 'Stato:',
    sectorsEyebrow: 'Impianti e terreno',
    sectorsTitle: 'I 4 settori di Matterhorn Ski Paradise',
    sectorsIntro: 'Scelga un settore per dislivello, impianti, esposizione e discese firma.',
    elevationRange: (min, max) => `Quota: ${min} m – ${max} m`,
    pisteBreakdown: (km) => `Ripartizione piste (${km} km totali)`,
    blue: 'Blu',
    red: 'Rossa',
    black: 'Nera',
    yellowItineraries: (km) => `+ ${km} km di itinerari gialli non battuti`,
    signatureDescent: 'Discesa firma',
    bestFor: 'Ideale per:',
    keyLifts: (count) => `Impianti principali (${count} in totale)`,
    italyEyebrow: 'Versante italiano del comprensorio',
    italyHeading: 'Sci a Cervinia, webcam e meteo',
    meteoTitle: 'Meteo Cervinia',
    meteoBody: (wind, status) =>
      `Il versante italiano chiude con lo stesso vento di cresta del confine svizzero. Plateau Rosa è ora a ${wind} km/h, limite 55 km/h. Il collegamento sopra è ${status}.`,
    skipassTitle: 'Skipass Cervinia Zermatt',
    skipassBody:
      'Salga sugli impianti italiani con uno skipass internazionale, oppure aggiunga il supplemento giornaliero Cervinia di 55 CHF a uno skipass svizzero. Il calcolo sotto prezza l’opzione transfrontaliera.',
    webcamTitle: 'Webcam di Cervinia',
    webcamBody:
      'Questa pagina non incorpora una camera italiana. La webcam di Trockener Steg a 2,939 m è la vista svizzera verso il ghiacciaio e il collegamento con l’Italia.',
    openWebcam: 'Apri la webcam di Trockener Steg',
    webcamsEyebrow: 'Immagine in diretta',
    webcamsTitle: 'Webcam di pista e di vetta',
    webcamsIntro: 'Panorami Roundshot a 360° in tempo reale da Rothorn, Gornergrat e dall’accesso al ghiacciaio di Trockener Steg.',
    resortsEyebrow: 'Due località',
    resortsTitle: 'Zermatt o Chamonix',
    zcTitle: 'Zermatt e Cervinia',
    zcBody:
      'È un solo comprensorio. Il collegamento con l’Italia è il confine di Plateau Rosa, sopra Trockener Steg. Uno skipass internazionale, o il supplemento Cervinia di 55 CHF su uno skipass svizzero, consente di attraversare sciando.',
    chamonixTitle: 'Chamonix è un’altra località',
    chamonixBody:
      'Chamonix sta sotto il Monte Bianco, in Francia. Zermatt e Chamonix non condividono una pista. Passare dall’una all’altra è un giorno di viaggio, non una corsa in impianto. Cervinia resta l’unico collegamento sci da Zermatt.',
    culinaryEyebrow: 'Guida alle tavole',
    diningTitle: 'Chalet gourmet di Findeln e ristoranti in pista',
    diningIntro: 'Rifugi in Svizzera e in Italia, con accesso dalle piste e consigli di prenotazione.',
    filterAll: 'Tutte le baite',
    filterFindeln: 'Findeln',
    filterItaly: 'Italia / Cervinia',
    filterGornergrat: 'Gornergrat',
    signatureDish: 'Piatto firma',
    bookingRequired: 'Prenotazione necessaria',
    walkIns: 'Senza prenotazione',
    reserve: 'Prenota',
    apresEyebrow: 'Dalle 15:30',
    apresTitle: 'Il giro dell’après-ski',
    apresSubtitle: 'Dalle baite in pista alle taverne del paese',
    locationLabel: 'Posizione:',
    faqEyebrow: 'Base di conoscenza',
    faqTitle: 'Domande frequenti sullo sci a Zermatt',
    faqIntro: 'Risposte chiare su collegamento di confine, Ikon Pass, prezzi dinamici e ristoranti.',
    exploreTitle: 'Continua tra Cervino e Zermatt',
    allViewpoints: 'Tutti i belvedere →',
    cardLive: 'Belvedere in diretta',
    cardGornergratTitle: 'Gornergrat (3,089 m): webcam e punteggio →',
    cardGornergratBody: 'Webcam Roundshot in tempo reale e chiarezza di vetta mattina/pomeriggio su 10 giorni.',
    cardRail: 'Treni panoramici',
    cardTrainsTitle: 'Gornergrat Bahn e Glacier Express →',
    cardTrainsBody: 'Confronti sconti Swiss Travel Pass, prenotazioni posto e orari della cremagliera.',
    cardField: 'Confronto',
    cardCompareTitle: 'Gornergrat o Glacier Paradise →',
    cardCompareBody: 'Angoli di vista, differenza di quota (794 m) e tenuta con vento forte.',
  },
  pt: {
    breadcrumbAria: 'Percurso',
    home: 'Início',
    breadcrumbCurrent: 'Esqui e neve (Zermatt e Cervinia)',
    heroBadge: 'Matterhorn Ski Paradise • domínio internacional de 360 km',
    heroLead:
      'Veja se a ligação a Cervinia está aberta, o que faz o vento da crista e se vem neve. As alturas são o boletim das Zermatt Bergbahnen. Abaixo estão a previsão de 10 dias e as médias mensais.',
    statusOpen: 'ABERTO',
    statusStandby: 'EM ESPERA',
    statusClosed: 'FECHADO',
    borderLinkSuffix: ': ligação fronteiriça Suíça ↔ Itália',
    plateauRosa: 'Plateau Rosa e Testa Grigia (3,480 m)',
    crestWind: 'Vento da crista',
    safetyLimit: 'Limite de segurança: 55 km/h',
    lastReturn: 'Último regresso',
    doNotMiss: 'Não perca o teleférico',
    passNote: 'Antes dos teleféricos italianos é preciso um passe internacional ou o suplemento diário de Cervinia de 55 CHF.',
    calculatePass: 'Calcular o preço do passe internacional',
    passIntro: 'Estime o custo segundo a duração, a fronteira, a idade e a validade do Ikon Pass.',
    duration: 'Duração:',
    day: 'dia',
    days: 'dias',
    tick1: '1 dia',
    tick3: '3 dias',
    tick6: '6 dias (habitual)',
    tick14: '14 dias',
    ageCategory: 'Idade:',
    ageAdult: 'Adulto (20+)',
    ageYouth: 'Jovem (16–19)',
    ageChild: 'Criança (9–15)',
    ageUnder9: 'Menos de 9 (grátis)',
    italyToggleTitle: 'Incluir a passagem para Cervinia (Itália)',
    italyToggleBody: 'Abre os 360 km internacionais e as descidas para Itália.',
    ikonTitle: 'Tenho um Ikon Pass (Base ou Full)',
    ikonBody: 'O Ikon Pass cobre 5 a 7 dias com acesso direto ao teleférico em todos os sectores suíços.',
    estimatedCost: 'Custo estimado do passe',
    dynamic2026: '2026 dinâmico',
    avgPerDay: (amount) => `Média ~${amount} CHF / dia`,
    bookEarly: 'Reservar cedo no portal oficial',
    seasonBrand: 'Zermatt Bergbahnen',
    seasonTitle: 'Época de esqui em Zermatt',
    seasonBody:
      'A Zermatt Bergbahnen explora os teleféricos. O esqui no glaciar Theodul, até 3,883 m no Matterhorn Glacier Paradise, funciona todo o ano. As pistas da aldeia são a época de inverno. No início de dezembro e no fim de maio o glaciar ainda se esquia quando a montanha baixa está fina.',
    totalBase: 'Base total',
    fresh24h: 'Neve 24 h',
    condition: 'Estado:',
    sectorsEyebrow: 'Infraestrutura e terreno',
    sectorsTitle: 'Os 4 sectores de Matterhorn Ski Paradise',
    sectorsIntro: 'Escolha um sector para ver o desnível, os teleféricos, a exposição solar e as descidas de referência.',
    elevationRange: (min, max) => `Altitude: ${min} m – ${max} m`,
    pisteBreakdown: (km) => `Repartição de pistas (${km} km no total)`,
    blue: 'Azul',
    red: 'Vermelha',
    black: 'Preta',
    yellowItineraries: (km) => `+ ${km} km de itinerários amarelos não batidos`,
    signatureDescent: 'Descida de referência',
    bestFor: 'Ideal para:',
    keyLifts: (count) => `Teleféricos principais (${count} no total)`,
    italyEyebrow: 'Lado italiano do domínio',
    italyHeading: 'Esqui em Cervinia, webcam e meteo',
    meteoTitle: 'Meteo Cervinia',
    meteoBody: (wind, status) =>
      `O lado italiano fecha com o mesmo vento da crista da fronteira suíça. Plateau Rosa está agora a ${wind} km/h, com um limite de 55 km/h. A ligação acima está ${status}.`,
    skipassTitle: 'Passe Cervinia Zermatt',
    skipassBody:
      'Entre nos teleféricos italianos com um passe internacional, ou acrescente o suplemento diário de Cervinia de 55 CHF a um passe suíço. A calculadora abaixo põe preço à opção transfronteiriça.',
    webcamTitle: 'Webcam de Cervinia',
    webcamBody:
      'Esta página não incorpora uma câmara italiana. A webcam de Trockener Steg a 2,939 m é a vista suíça para o glaciar e a ligação a Itália.',
    openWebcam: 'Abrir a webcam de Trockener Steg',
    webcamsEyebrow: 'Imagem em direto',
    webcamsTitle: 'Webcams de pista e de cume',
    webcamsIntro: 'Panorâmicas Roundshot a 360° em tempo real a partir de Rothorn, Gornergrat e da aproximação ao glaciar em Trockener Steg.',
    resortsEyebrow: 'Duas estâncias',
    resortsTitle: 'Zermatt ou Chamonix',
    zcTitle: 'Zermatt e Cervinia',
    zcBody:
      'É um só domínio de esqui. A ligação a Itália é a fronteira de Plateau Rosa, acima de Trockener Steg. Um passe internacional, ou o suplemento diário de Cervinia de 55 CHF num passe suíço, é o que permite atravessar em esqui.',
    chamonixTitle: 'Chamonix é outra estância',
    chamonixBody:
      'Chamonix fica sob o Mont Blanc, em França. Zermatt e Chamonix não partilham uma pista. Ir de uma à outra é um dia de viagem, não uma viagem de teleférico. Cervinia continua a ser a única ligação de esqui a partir de Zermatt.',
    culinaryEyebrow: 'Guia de mesa',
    diningTitle: 'Chalés gourmet de Findeln e restaurantes de pista',
    diningIntro: 'Refúgios na Suíça e em Itália, com acesso a partir da pista e recomendações de reserva.',
    filterAll: 'Todos os refúgios',
    filterFindeln: 'Findeln',
    filterItaly: 'Itália / Cervinia',
    filterGornergrat: 'Gornergrat',
    signatureDish: 'Prato de referência',
    bookingRequired: 'Reserva obrigatória',
    walkIns: 'Sem reserva',
    reserve: 'Reservar',
    apresEyebrow: 'A partir das 15:30',
    apresTitle: 'O percurso de après-ski',
    apresSubtitle: 'Dos refúgios de pista às tabernas da aldeia',
    locationLabel: 'Local:',
    faqEyebrow: 'Base de conhecimento',
    faqTitle: 'Perguntas frequentes sobre esqui em Zermatt',
    faqIntro: 'Respostas claras sobre a ligação fronteiriça, o Ikon Pass, preços dinâmicos e restaurantes.',
    exploreTitle: 'Continuar pelo Matterhorn e Zermatt',
    allViewpoints: 'Todos os miradouros →',
    cardLive: 'Miradouro em direto',
    cardGornergratTitle: 'Gornergrat (3,089 m): câmaras e pontuação →',
    cardGornergratBody: 'Webcams Roundshot em tempo real e nitidez do cume de manhã e à tarde durante 10 dias.',
    cardRail: 'Comboios panorâmicos',
    cardTrainsTitle: 'Gornergrat Bahn e Glacier Express →',
    cardTrainsBody: 'Compare descontos do Swiss Travel Pass, reservas de lugar e horários do comboio de cremalheira.',
    cardField: 'Comparação',
    cardCompareTitle: 'Gornergrat ou Glacier Paradise →',
    cardCompareBody: 'Ângulos de vista, diferença de altitude (794 m) e resistência a vento forte.',
  },
  ko: {
    breadcrumbAria: '탐색 경로',
    home: '홈',
    breadcrumbCurrent: '스키와 적설 (체르마트 & 체르비니아)',
    heroBadge: 'Matterhorn Ski Paradise • 국제 스키 구역 360 km',
    heroLead:
      '체르비니아 연결이 열렸는지, 능선 바람이 어떤지, 눈이 오는지 확인하세요. 적설은 체르마트 베르크바넨 리포트입니다. 아래에는 10일 예보와 월평균이 있습니다.',
    statusOpen: '운행',
    statusStandby: '대기',
    statusClosed: '폐쇄',
    borderLinkSuffix: ': 스위스 ↔ 이탈리아 국경 연결',
    plateauRosa: 'Plateau Rosa & Testa Grigia (3,480 m)',
    crestWind: '능선 바람',
    safetyLimit: '안전 한계: 55 km/h',
    lastReturn: '마지막 귀환',
    doNotMiss: '리프트를 놓치지 마세요',
    passNote: '이탈리아 리프트에 타기 전에 국제 스키 패스 또는 55 CHF 체르비니아 당일 추가권이 필요합니다.',
    calculatePass: '국제 패스 가격 계산',
    passIntro: '기간, 국경 이용, 연령, Ikon Pass 유효 여부로 요금을 추정합니다.',
    duration: '기간:',
    day: '일',
    days: '일',
    tick1: '1일',
    tick3: '3일',
    tick6: '6일 (일반)',
    tick14: '14일',
    ageCategory: '연령:',
    ageAdult: '성인 (20+)',
    ageYouth: '청소년 (16–19)',
    ageChild: '어린이 (9–15)',
    ageUnder9: '9세 미만 (무료)',
    italyToggleTitle: '체르비니아(이탈리아) 국경 횡단 포함',
    italyToggleBody: '360 km 국제 구역과 이탈리아 하산이 열립니다.',
    ikonTitle: 'Ikon Pass가 있습니다 (Base 또는 Full)',
    ikonBody: 'Ikon Pass는 스위스 전 구역 리프트 직행 5–7일을 포함합니다.',
    estimatedCost: '예상 패스 비용',
    dynamic2026: '2026 동적',
    avgPerDay: (amount) => `평균 ~${amount} CHF / 일`,
    bookEarly: '공식 포털에서 미리 예약',
    seasonBrand: 'Zermatt Bergbahnen',
    seasonTitle: '체르마트 스키 시즌',
    seasonBody:
      '리프트는 Zermatt Bergbahnen이 운행합니다. 테오둘 빙하 스키는 Matterhorn Glacier Paradise 3,883 m까지 연중 가능합니다. 마을 슬로프는 겨울 시즌입니다. 12월 초와 5월 말에도 아래가 얇을 때 빙하에서는 스키가 됩니다.',
    totalBase: '총 적설',
    fresh24h: '24시간 신설',
    condition: '상태:',
    sectorsEyebrow: '시설과 지형',
    sectorsTitle: 'Matterhorn Ski Paradise의 4개 산악 구역',
    sectorsIntro: '구역을 골라 고도, 리프트, 일조, 대표 활강을 확인하세요.',
    elevationRange: (min, max) => `고도: ${min} m – ${max} m`,
    pisteBreakdown: (km) => `슬로프 구성 (총 ${km} km)`,
    blue: '블루',
    red: '레드',
    black: '블랙',
    yellowItineraries: (km) => `+ 정설하지 않은 옐로 루트 ${km} km`,
    signatureDescent: '대표 활강',
    bestFor: '추천:',
    keyLifts: (count) => `주요 리프트 (총 ${count})`,
    italyEyebrow: '스키장의 이탈리아 쪽',
    italyHeading: '체르비니아 스키, 웹캠, 기상',
    meteoTitle: '체르비니아 기상',
    meteoBody: (wind, status) =>
      `이탈리아 쪽은 스위스 국경과 같은 능선 바람으로 닫힙니다. Plateau Rosa는 지금 ${wind} km/h, 안전 한계는 55 km/h입니다. 위 연결은 ${status}입니다.`,
    skipassTitle: '체르비니아·체르마트 스키 패스',
    skipassBody:
      '국제 스키 패스로 이탈리아 리프트에 타거나, 스위스 패스에 55 CHF 체르비니아 당일 추가권을 더하세요. 아래 계산기가 국경 옵션 가격을 냅니다.',
    webcamTitle: '체르비니아 웹캠',
    webcamBody:
      '이 페이지에는 이탈리아 카메라가 없습니다. 2,939 m Trockener Steg 웹캠이 빙하와 이탈리아 연결을 보는 스위스 쪽 화면입니다.',
    openWebcam: 'Trockener Steg 웹캠 열기',
    webcamsEyebrow: '실시간 영상',
    webcamsTitle: '슬로프와 정상 웹캠',
    webcamsIntro: 'Rothorn, Gornergrat, Trockener Steg 빙하 접근로의 실시간 360° Roundshot입니다.',
    resortsEyebrow: '두 리조트',
    resortsTitle: '체르마트 또는 샤모니',
    zcTitle: '체르마트와 체르비니아',
    zcBody:
      '하나의 스키장입니다. 이탈리아 연결은 Trockener Steg 위 Plateau Rosa 국경입니다. 국제 패스, 또는 스위스 패스의 55 CHF 체르비니아 당일 추가권이 건너는 조건입니다.',
    chamonixTitle: '샤모니는 다른 리조트입니다',
    chamonixBody:
      '샤모니는 프랑스 몽블랑 아래에 있습니다. 체르마트와 샤모니는 슬로프를 공유하지 않습니다. 이동은 리프트가 아니라 여행 하루입니다. 체르마트에서 나가는 스키 연결은 체르비니아뿐입니다.',
    culinaryEyebrow: '미식 안내',
    diningTitle: '핀델른 미식 샤레와 슬로프 식당',
    diningIntro: '스위스와 이탈리아의 산장을 슬로프 접근과 예약 안내와 함께 살펴보세요.',
    filterAll: '모든 산장',
    filterFindeln: '핀델른',
    filterItaly: '이탈리아 / 체르비니아',
    filterGornergrat: '고르너그라트',
    signatureDish: '대표 요리',
    bookingRequired: '예약 필요',
    walkIns: '예약 없이 가능',
    reserve: '예약',
    apresEyebrow: '15:30 이후',
    apresTitle: '전설의 아프레 스키 동선',
    apresSubtitle: '슬로프 산장에서 마을 선술집까지',
    locationLabel: '위치:',
    faqEyebrow: '지식 베이스',
    faqTitle: '체르마트 스키에 대해 자주 묻는 질문',
    faqIntro: '국경 연결, Ikon Pass, 동적 요금, 식사에 대한 분명한 답입니다.',
    exploreTitle: '마터호른과 체르마트 계속 보기',
    allViewpoints: '모든 전망 지점 →',
    cardLive: '실시간 전망',
    cardGornergratTitle: '고르너그라트 (3,089 m) 라이브 캠과 점수 →',
    cardGornergratBody: '실시간 Roundshot 웹캠과 10일 오전·오후 정상 시야.',
    cardRail: '관광 철도',
    cardTrainsTitle: 'Gornergrat Bahn & Glacier Express →',
    cardTrainsBody: 'Swiss Travel Pass 할인, 좌석 예약, 톱니바퀴 열차 시각표를 비교합니다.',
    cardField: '현장 비교',
    cardCompareTitle: '고르너그라트 vs. Glacier Paradise →',
    cardCompareBody: '시야 각도, 고도 차 (794 m), 강풍 대응을 비교합니다.',
  },
  ja: {
    breadcrumbAria: 'パンくず',
    home: 'ホーム',
    breadcrumbCurrent: 'スキーと雪（ツェルマットとチェルヴィニア）',
    heroBadge: 'Matterhorn Ski Paradise • 国際スキーエリア 360 km',
    heroLead:
      'チェルヴィニアへの連絡、稜線の風、雪が来るかを確認できます。積雪はツェルマット・ベルクバーネンの発表です。その下に10日間予報と月平均があります。',
    statusOpen: '開通',
    statusStandby: '注意',
    statusClosed: '閉鎖',
    borderLinkSuffix: '：スイス ↔ イタリア国境連絡',
    plateauRosa: 'Plateau Rosa と Testa Grigia（3,480 m）',
    crestWind: '稜線の風',
    safetyLimit: '安全限界：55 km/h',
    lastReturn: '最終戻り',
    doNotMiss: 'リフトに乗り遅れない',
    passNote: 'イタリア側のリフトに乗る前に、国際スキーパスか 55 CHF のチェルヴィニア1日追加が必要です。',
    calculatePass: '国際パスの料金を計算',
    passIntro: '日数、国境、年齢、Ikon Pass の有効性から料金を見積もります。',
    duration: '日数：',
    day: '日',
    days: '日',
    tick1: '1日',
    tick3: '3日',
    tick6: '6日（標準）',
    tick14: '14日',
    ageCategory: '年齢：',
    ageAdult: '大人（20+）',
    ageYouth: 'ユース（16–19）',
    ageChild: '子ども（9–15）',
    ageUnder9: '9歳未満（無料）',
    italyToggleTitle: 'チェルヴィニア（イタリア）国境を含める',
    italyToggleBody: '360 km の国際エリアとイタリアへの滑降が使えます。',
    ikonTitle: 'Ikon Pass を持っている（Base または Full）',
    ikonBody: 'Ikon Pass はスイス全エリアのリフト直行を 5〜7 日含みます。',
    estimatedCost: 'パス料金の目安',
    dynamic2026: '2026 変動',
    avgPerDay: (amount) => `平均 ~${amount} CHF / 日`,
    bookEarly: '公式サイトで早めに予約',
    seasonBrand: 'Zermatt Bergbahnen',
    seasonTitle: 'ツェルマットのスキーシーズン',
    seasonBody:
      'リフトは Zermatt Bergbahnen が運行します。テオドゥル氷河のスキーは Matterhorn Glacier Paradise の 3,883 m まで通年です。村のゲレンデは冬のシーズンです。12月上旬と5月下旬も、低い山が薄いときに氷河では滑れます。',
    totalBase: '総積雪',
    fresh24h: '24時間の新雪',
    condition: '状態：',
    sectorsEyebrow: '施設と地形',
    sectorsTitle: 'Matterhorn Ski Paradise の4つの山岳エリア',
    sectorsIntro: 'エリアを選ぶと、標高、リフト、日当たり、代表滑降がわかります。',
    elevationRange: (min, max) => `標高：${min} m – ${max} m`,
    pisteBreakdown: (km) => `コース内訳（合計 ${km} km）`,
    blue: 'ブルー',
    red: 'レッド',
    black: 'ブラック',
    yellowItineraries: (km) => `+ 未圧雪のイエロールート ${km} km`,
    signatureDescent: '代表滑降',
    bestFor: '向いている人：',
    keyLifts: (count) => `主なリフト（合計 ${count}）`,
    italyEyebrow: 'スキー場のイタリア側',
    italyHeading: 'チェルヴィニアのスキー、ウェブカメラ、気象',
    meteoTitle: 'チェルヴィニアの気象',
    meteoBody: (wind, status) =>
      `イタリア側はスイス国境と同じ稜線の風で閉まります。Plateau Rosa は現在 ${wind} km/h、安全限界は 55 km/h です。上の連絡は ${status} です。`,
    skipassTitle: 'チェルヴィニア・ツェルマットのスキーパス',
    skipassBody:
      '国際スキーパスでイタリアのリフトに乗るか、スイスのパスに 55 CHF のチェルヴィニア1日追加を足します。下の計算が越境オプションの料金です。',
    webcamTitle: 'チェルヴィニアのウェブカメラ',
    webcamBody:
      'このページにイタリアのカメラはありません。標高 2,939 m の Trockener Steg が、氷河とイタリア連絡を見るスイス側の映像です。',
    openWebcam: 'Trockener Steg のウェブカメラを開く',
    webcamsEyebrow: 'ライブ映像',
    webcamsTitle: 'ゲレンデと山頂のウェブカメラ',
    webcamsIntro: 'Rothorn、Gornergrat、Trockener Steg の氷河アプローチからのリアルタイム 360° Roundshot です。',
    resortsEyebrow: '2つのリゾート',
    resortsTitle: 'ツェルマットかシャモニーか',
    zcTitle: 'ツェルマットとチェルヴィニア',
    zcBody:
      'ひとつのスキーエリアです。イタリアへの連絡は Trockener Steg の上、Plateau Rosa の国境です。国際パス、またはスイスのパスに足す 55 CHF のチェルヴィニア1日追加で越境できます。',
    chamonixTitle: 'シャモニーは別のリゾートです',
    chamonixBody:
      'シャモニーはフランス、モンブランのふもとにあります。ツェルマットとシャモニーはゲレンデを共有しません。移動はリフトではなく旅の1日です。ツェルマットから出るスキー連絡はチェルヴィニアだけです。',
    culinaryEyebrow: '食事ガイド',
    diningTitle: 'Findeln のグルメシャレーとゲレンデ横の食事',
    diningIntro: 'スイスとイタリアの山小屋を、ゲレンデからの入り方と予約の目安とともに紹介します。',
    filterAll: 'すべての小屋',
    filterFindeln: 'Findeln',
    filterItaly: 'イタリア／チェルヴィニア',
    filterGornergrat: 'ゴルナーグラート',
    signatureDish: '看板料理',
    bookingRequired: '予約が必要',
    walkIns: '予約なし可',
    reserve: '予約',
    apresEyebrow: '15:30 以降',
    apresTitle: 'アフタースキーの定番ルート',
    apresSubtitle: 'ゲレンデ横の小屋から村の酒場へ',
    locationLabel: '場所：',
    faqEyebrow: 'ナレッジ',
    faqTitle: 'ツェルマットのスキーに関するよくある質問',
    faqIntro: '国境連絡、Ikon Pass、変動料金、食事についての答えです。',
    exploreTitle: 'マッターホルンとツェルマットを続ける',
    allViewpoints: 'すべての展望地 →',
    cardLive: 'ライブ展望',
    cardGornergratTitle: 'ゴルナーグラート（3,089 m）ライブカメラとスコア →',
    cardGornergratBody: 'リアルタイムの Roundshot と、10日間の午前・午後の山頂の見え方。',
    cardRail: '展望鉄道',
    cardTrainsTitle: 'Gornergrat Bahn と Glacier Express →',
    cardTrainsBody: 'Swiss Travel Pass の割引、座席予約、ラック式鉄道の時刻を比べます。',
    cardField: '比較',
    cardCompareTitle: 'ゴルナーグラートと Glacier Paradise →',
    cardCompareBody: '見る角度、標高差（794 m）、強風への強さを比べます。',
  },
  zh: {
    breadcrumbAria: '面包屑',
    home: '首页',
    breadcrumbCurrent: '滑雪与积雪（采尔马特与切尔维尼亚）',
    heroBadge: 'Matterhorn Ski Paradise • 360 公里国际雪区',
    heroLead: '查看通往切尔维尼亚的连接是否开放、山脊风速如何，以及会不会下雪。雪深来自采尔马特登山铁路的报告。下面是 10 天预报和各月平均。',
    statusOpen: '开放',
    statusStandby: '待命',
    statusClosed: '关闭',
    borderLinkSuffix: '：瑞士 ↔ 意大利边境连接',
    plateauRosa: 'Plateau Rosa 与 Testa Grigia（3,480 米）',
    crestWind: '山脊风',
    safetyLimit: '安全上限：55 km/h',
    lastReturn: '末班返回',
    doNotMiss: '不要错过索道',
    passNote: '乘坐意大利索道前，需要国际滑雪通票，或 55 CHF 的切尔维尼亚单日补充票。',
    calculatePass: '计算国际通票价格',
    passIntro: '按天数、跨境、年龄和 Ikon Pass 是否有效估算票价。',
    duration: '天数：',
    day: '天',
    days: '天',
    tick1: '1 天',
    tick3: '3 天',
    tick6: '6 天（常见）',
    tick14: '14 天',
    ageCategory: '年龄：',
    ageAdult: '成人（20+）',
    ageYouth: '青年（16–19）',
    ageChild: '儿童（9–15）',
    ageUnder9: '9 岁以下（免费）',
    italyToggleTitle: '包含切尔维尼亚（意大利）过境',
    italyToggleBody: '开放全部 360 公里国际雪区，以及滑入意大利的下降。',
    ikonTitle: '我有 Ikon Pass（Base 或 Full）',
    ikonBody: 'Ikon Pass 覆盖瑞士全部雪区索道直达 5 至 7 天。',
    estimatedCost: '通票估算费用',
    dynamic2026: '2026 动态',
    avgPerDay: (amount) => `日均约 ${amount} CHF`,
    bookEarly: '在官方门户提早预订',
    seasonBrand: 'Zermatt Bergbahnen',
    seasonTitle: '采尔马特滑雪季',
    seasonBody:
      '索道由 Zermatt Bergbahnen 运营。特奥杜尔冰川滑雪一直到 Matterhorn Glacier Paradise 的 3,883 米，全年开放。村子雪道是冬季雪季。12 月初和 5 月底，低海拔雪薄时，冰川上仍可滑。',
    totalBase: '总雪深',
    fresh24h: '24 小时新雪',
    condition: '状况：',
    sectorsEyebrow: '设施与地形',
    sectorsTitle: 'Matterhorn Ski Paradise 的 4 个山区',
    sectorsIntro: '选择一个雪区，查看高差、索道、日照和标志性下降。',
    elevationRange: (min, max) => `海拔：${min} 米 – ${max} 米`,
    pisteBreakdown: (km) => `雪道构成（共 ${km} 公里）`,
    blue: '蓝道',
    red: '红道',
    black: '黑道',
    yellowItineraries: (km) => `+ ${km} 公里未压雪的黄色线路`,
    signatureDescent: '标志性下降',
    bestFor: '适合：',
    keyLifts: (count) => `主要索道（共 ${count} 条）`,
    italyEyebrow: '雪区的意大利一侧',
    italyHeading: '切尔维尼亚滑雪、摄像头与天气',
    meteoTitle: '切尔维尼亚天气',
    meteoBody: (wind, status) =>
      `意大利一侧与瑞士边境使用同一山脊风速关闭。Plateau Rosa 目前 ${wind} km/h，安全上限 55 km/h。上方连接为 ${status}。`,
    skipassTitle: '切尔维尼亚–采尔马特滑雪通票',
    skipassBody: '持国际滑雪通票乘坐意大利索道，或在瑞士通票上加 55 CHF 切尔维尼亚单日补充。下面的计算器给出跨境选项的价格。',
    webcamTitle: '切尔维尼亚摄像头',
    webcamBody: '本页不嵌入意大利摄像头。海拔 2,939 米的 Trockener Steg 是朝向冰川和意大利连接的瑞士视角。',
    openWebcam: '打开 Trockener Steg 摄像头',
    webcamsEyebrow: '实时画面',
    webcamsTitle: '雪道与峰顶摄像头',
    webcamsIntro: '来自 Rothorn、Gornergrat 和 Trockener Steg 冰川接近段的实时 360° Roundshot。',
    resortsEyebrow: '两座雪场',
    resortsTitle: '采尔马特还是霞慕尼',
    zcTitle: '采尔马特与切尔维尼亚',
    zcBody:
      '这是同一片雪区。通往意大利的连接是 Trockener Steg 之上的 Plateau Rosa 边境。国际通票，或瑞士通票上的 55 CHF 切尔维尼亚单日补充，才能滑过去。',
    chamonixTitle: '霞慕尼是另一座雪场',
    chamonixBody:
      '霞慕尼在法国勃朗峰下。采尔马特和霞慕尼没有共用雪道。从一处到另一处是一整天的行程，不是坐索道。切尔维尼亚仍是离开采尔马特的唯一滑雪连接。',
    culinaryEyebrow: '美食指南',
    diningTitle: '芬德尔恩美食木屋与雪道餐厅',
    diningIntro: '查看瑞士和意大利的山屋、雪道到达方式以及预订建议。',
    filterAll: '全部山屋',
    filterFindeln: '芬德尔恩',
    filterItaly: '意大利 / 切尔维尼亚',
    filterGornergrat: '戈尔内格拉特',
    signatureDish: '招牌菜',
    bookingRequired: '需要预订',
    walkIns: '可直接前往',
    reserve: '预订',
    apresEyebrow: '15:30 起',
    apresTitle: '经典雪后酒廊路线',
    apresSubtitle: '从雪道旁的山屋到村里的酒馆',
    locationLabel: '位置：',
    faqEyebrow: '知识库',
    faqTitle: '关于在采尔马特滑雪的常见问题',
    faqIntro: '关于跨境连接、Ikon Pass、动态票价和餐饮的说明。',
    exploreTitle: '继续了解马特洪峰与采尔马特',
    allViewpoints: '全部观景点 →',
    cardLive: '实时观景',
    cardGornergratTitle: '戈尔内格拉特（3,089 米）实时摄像头与评分 →',
    cardGornergratBody: '实时 Roundshot 摄像头，以及 10 天上午/下午的峰顶能见度。',
    cardRail: '观光铁路',
    cardTrainsTitle: '戈尔内格拉特列车与冰河列车 →',
    cardTrainsBody: '比较 Swiss Travel Pass 折扣、座位预订和齿轨列车时刻。',
    cardField: '对照',
    cardCompareTitle: '戈尔内格拉特与冰川天堂 →',
    cardCompareBody: '比较视角、海拔差（794 米）以及大风时的稳定性。',
  },
  'zh-tw': {
    breadcrumbAria: '導覽路徑',
    home: '首頁',
    breadcrumbCurrent: '滑雪與積雪（策馬特與切爾維尼亞）',
    heroBadge: 'Matterhorn Ski Paradise • 360 公里國際雪區',
    heroLead: '看看通往切爾維尼亞的聯絡開了沒有、地脊的風怎麼樣，以及會不會下雪。雪深來自策馬特登山鐵路的報告。下面是 10 天預報和各月平均。',
    statusOpen: '開放',
    statusStandby: '待命',
    statusClosed: '關閉',
    borderLinkSuffix: '：瑞士 ↔ 義大利邊境聯絡',
    plateauRosa: 'Plateau Rosa 與 Testa Grigia（3,480 公尺）',
    crestWind: '地脊風',
    safetyLimit: '安全上限：55 km/h',
    lastReturn: '末班回程',
    doNotMiss: '別錯過索道',
    passNote: '搭義大利索道之前，需要國際滑雪通票，或 55 CHF 的切爾維尼亞單日加購。',
    calculatePass: '計算國際通票價格',
    passIntro: '依照天數、是否跨境、年齡，以及 Ikon Pass 是否有效來估算票價。',
    duration: '天數：',
    day: '天',
    days: '天',
    tick1: '1 天',
    tick3: '3 天',
    tick6: '6 天（常見）',
    tick14: '14 天',
    ageCategory: '年齡：',
    ageAdult: '成人（20+）',
    ageYouth: '青年（16–19）',
    ageChild: '孩童（9–15）',
    ageUnder9: '未滿 9 歲（免費）',
    italyToggleTitle: '包含切爾維尼亞（義大利）過境',
    italyToggleBody: '開放全部 360 公里國際雪區，以及滑進義大利的下降。',
    ikonTitle: '我有 Ikon Pass（Base 或 Full）',
    ikonBody: 'Ikon Pass 含瑞士全部雪區索道直達 5 到 7 天。',
    estimatedCost: '通票估算費用',
    dynamic2026: '2026 動態',
    avgPerDay: (amount) => `每天大約 ${amount} CHF`,
    bookEarly: '到官方網站提早預訂',
    seasonBrand: 'Zermatt Bergbahnen',
    seasonTitle: '策馬特滑雪季',
    seasonBody:
      '索道由 Zermatt Bergbahnen 營運。特奧杜爾冰川滑雪一路到 Matterhorn Glacier Paradise 的 3,883 公尺，全年都開。村子的雪道才是冬季雪季。12 月初和 5 月下旬，低海拔雪薄的時候，冰川上往往還能滑。',
    totalBase: '總雪深',
    fresh24h: '24 小時新雪',
    condition: '狀況：',
    sectorsEyebrow: '設施與地形',
    sectorsTitle: 'Matterhorn Ski Paradise 的 4 個山區',
    sectorsIntro: '選一個雪區，看落差、索道、日照，以及代表性的下降。',
    elevationRange: (min, max) => `海拔：${min} 公尺 – ${max} 公尺`,
    pisteBreakdown: (km) => `雪道組成（共 ${km} 公里）`,
    blue: '藍道',
    red: '紅道',
    black: '黑道',
    yellowItineraries: (km) => `+ ${km} 公里未壓雪的黃色路線`,
    signatureDescent: '代表性下降',
    bestFor: '適合：',
    keyLifts: (count) => `主要索道（共 ${count} 條）`,
    italyEyebrow: '雪區的義大利這一側',
    italyHeading: '切爾維尼亞滑雪、即時影像與天氣',
    meteoTitle: '切爾維尼亞天氣',
    meteoBody: (wind, status) =>
      `義大利這一側跟瑞士邊境用的是同一股地脊風。Plateau Rosa 目前 ${wind} km/h，安全上限是 55 km/h。上面的聯絡是 ${status}。`,
    skipassTitle: '切爾維尼亞–策馬特滑雪通票',
    skipassBody: '持國際滑雪通票搭義大利索道，或在瑞士通票上加 55 CHF 的切爾維尼亞單日加購。下面的計算機會算出跨境選項的價格。',
    webcamTitle: '切爾維尼亞即時影像',
    webcamBody: '這一頁沒有嵌入義大利的攝影機。海拔 2,939 公尺的 Trockener Steg，是朝向冰川和義大利聯絡的瑞士視角。',
    openWebcam: '打開 Trockener Steg 即時影像',
    webcamsEyebrow: '即時畫面',
    webcamsTitle: '雪道與峰頂即時影像',
    webcamsIntro: '來自 Rothorn、Gornergrat，以及 Trockener Steg 冰川接近段的即時 360° Roundshot。',
    resortsEyebrow: '兩座雪場',
    resortsTitle: '策馬特還是霞慕尼',
    zcTitle: '策馬特與切爾維尼亞',
    zcBody:
      '這是同一片雪區。通往義大利的聯絡，是 Trockener Steg 上方的 Plateau Rosa 邊境。國際通票，或瑞士通票上的 55 CHF 切爾維尼亞單日加購，才能滑過去。',
    chamonixTitle: '霞慕尼是另一座雪場',
    chamonixBody:
      '霞慕尼在法國白朗峰底下。策馬特和霞慕尼沒有共用雪道。從一處到另一處是一整天的行程，不是坐索道。切爾維尼亞仍是離開策馬特的唯一滑雪聯絡。',
    culinaryEyebrow: '美食指南',
    diningTitle: '芬德爾恩美食木屋與雪道餐廳',
    diningIntro: '看看瑞士和義大利的山屋、怎麼從雪道抵達，以及訂位建議。',
    filterAll: '全部山屋',
    filterFindeln: '芬德爾恩',
    filterItaly: '義大利／切爾維尼亞',
    filterGornergrat: '戈爾內格拉特',
    signatureDish: '招牌菜',
    bookingRequired: '需要訂位',
    walkIns: '可直接前往',
    reserve: '訂位',
    apresEyebrow: '15:30 起',
    apresTitle: '經典的雪後小酌路線',
    apresSubtitle: '從雪道旁的山屋走到村子裡的酒館',
    locationLabel: '位置：',
    faqEyebrow: '知識庫',
    faqTitle: '關於在策馬特滑雪的常見問題',
    faqIntro: '跨境聯絡、Ikon Pass、動態票價和用餐的說明。',
    exploreTitle: '繼續看馬特洪峰與策馬特',
    allViewpoints: '全部觀景點 →',
    cardLive: '即時觀景',
    cardGornergratTitle: '戈爾內格拉特（3,089 公尺）即時影像與評分 →',
    cardGornergratBody: '即時 Roundshot 影像，以及 10 天上午／下午的峰頂能見度。',
    cardRail: '觀光鐵路',
    cardTrainsTitle: '戈爾內格拉特列車與冰河列車 →',
    cardTrainsBody: '比較 Swiss Travel Pass 折扣、座位預訂，以及齒軌列車時刻。',
    cardField: '對照',
    cardCompareTitle: '戈爾內格拉特與冰川天堂 →',
    cardCompareBody: '比較視角、海拔落差（794 公尺），以及強風時的穩定程度。',
  },
};

export function getSkiSectors(locale: Locale): SkiSector[] {
  if (locale === 'en') return SKI_SECTORS;
  const pack = SECTOR_TEXT[locale];
  if (!pack) return SKI_SECTORS;
  return SKI_SECTORS.map((sector) => {
    const text = pack[sector.id];
    if (!text) return sector;
    return {
      ...sector,
      country: (COUNTRY[locale]?.[sector.country] ?? sector.country) as SkiSector['country'],
      sunExposure: text.sunExposure,
      bestFor: text.bestFor,
      description: text.description,
      topRun: {
        ...sector.topRun,
        name: text.topRunName,
        description: text.topRunDescription,
      },
      keyLifts: text.keyLifts,
    };
  });
}

export function getSkiPassOptions(locale: Locale): SkiPassOption[] {
  if (locale === 'en') return SKI_PASS_OPTIONS;
  const pack = PASS_TEXT[locale];
  if (!pack) return SKI_PASS_OPTIONS;
  return SKI_PASS_OPTIONS.map((pass) => {
    const text = pack[pass.id];
    if (!text) return pass;
    return {
      ...pass,
      name: text.name,
      scope: text.scope as SkiPassOption['scope'],
      keyFeature: text.keyFeature,
      bestSuitedFor: text.bestSuitedFor,
      ...(text.ikonNote ? { ikonNote: text.ikonNote } : {}),
    };
  });
}

export function getMountainDining(locale: Locale): MountainDiningSpot[] {
  if (locale === 'en') return MOUNTAIN_DINING;
  const pack = DINING_TEXT[locale];
  const access = ACCESS[locale];
  if (!pack) return MOUNTAIN_DINING;
  return MOUNTAIN_DINING.map((spot) => {
    const text = pack[spot.id];
    if (!text) return spot;
    return {
      ...spot,
      access: (access?.[spot.access] ?? spot.access) as MountainDiningSpot['access'],
      cuisine: text.cuisine,
      signatureDish: text.signatureDish,
      vibe: text.vibe,
      tip: text.tip,
    };
  });
}

export function getApresSkiSpots(locale: Locale): ApresSkiSpot[] {
  if (locale === 'en') return APRES_SKI_SPOTS;
  const pack = APRES_TEXT[locale];
  if (!pack) return APRES_SKI_SPOTS;
  return APRES_SKI_SPOTS.map((spot, index) => {
    const text = pack[index];
    if (!text) return spot;
    return {
      ...spot,
      location: text.location,
      vibe: text.vibe,
      highlight: text.highlight,
      access: text.access,
    };
  });
}

export function getSkiFaqs(locale: Locale): SkiFaq[] {
  if (locale === 'en') return SKI_FAQS;
  const pack = FAQ_TEXT[locale];
  const categories = FAQ_CATEGORY[locale];
  if (!pack) return SKI_FAQS;
  return SKI_FAQS.map((faq, index) => {
    const text = pack[index];
    if (!text) return faq;
    return {
      category: (categories?.[faq.category] ?? faq.category) as SkiFaq['category'],
      question: text.question,
      answer: text.answer,
    };
  });
}

export function getLocalizedSkiPassEstimate(
  params: Parameters<typeof calculateSkiPassEstimate>[0],
  locale: Locale,
): ReturnType<typeof calculateSkiPassEstimate> {
  const result = calculateSkiPassEstimate(params);
  if (locale === 'en') return result;
  const pack = PASS_RUNTIME[locale];
  if (!pack) return result;
  return {
    ...result,
    passName: lookup(pack.passName, result.passName),
    recommendation: lookup(pack.recommendation, result.recommendation),
    savingsTip: lookup(pack.savingsTip, result.savingsTip),
  };
}

export function getLocalizedCrossBorderLink(
  data: Parameters<typeof evaluateCrossBorderLink>[0],
  locale: Locale,
): ReturnType<typeof evaluateCrossBorderLink> {
  const result = evaluateCrossBorderLink(data);
  if (locale === 'en') return result;
  const pack = BORDER_RUNTIME[locale];
  if (!pack) return result;
  return {
    ...result,
    title: lookup(pack.title, result.title),
    reason: translateBorderReason(result.reason, pack.reason),
    lastLiftReturnTime: lookup(pack.lastLift, result.lastLiftReturnTime),
  };
}

export function getSkiDashboardUi(locale: Locale): SkiDashboardUi {
  return SKI_UI[locale] ?? SKI_UI.en;
}
