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
  quickFacts?: { label: string; value?: string; detail: string }[];
  keyTakeaways?: string[];
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
    },
    sunnegga: {
      name: 'Sunnegga',
      shortName: 'Sunnegga',
      title: 'Sunnegga Standseilbahn & Matterhorn-Ostwand',
      description: 'Die Standseilbahn nach Sunnegga (2.288 m), die Ostwand, der Stellisee und wann der Weg besser ist als der Riffelsee.',
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
    },
    sunnegga: {
      name: 'Sunnegga',
      shortName: 'Sunnegga',
      title: 'Funiculaire de Sunnegga et face est du Cervin',
      description: 'Le funiculaire de Sunnegga (2 288 m), la face est, le Stellisee, et quand cette terrasse vaut mieux que le Riffelsee.',
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
    },
    sunnegga: {
      name: 'Sunnegga',
      shortName: 'Sunnegga',
      title: 'Funicolare Sunnegga e parete est del Cervino',
      description: 'La funicolare di Sunnegga (2.288 m), la parete est, lo Stellisee, e quando conviene rispetto al Riffelsee.',
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
    quickFacts: translation.quickFacts
      ? base.quickFacts.map((qf, i) => ({
          ...qf,
          label: translation.quickFacts![i]?.label || qf.label,
          detail: translation.quickFacts![i]?.detail || qf.detail,
        }))
      : base.quickFacts,
    faqs: translation.faqs || [
      ...base.faqs,
      ...(translation.extraFaqs ?? []),
    ],
  };
}
