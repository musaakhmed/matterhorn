import { Locale, LOCALE_METAS } from './config';
import { LocalizedFaq, visibilityStatusLabel } from './faqs';

export function schemaLanguage(locale: Locale = 'en'): string {
  return LOCALE_METAS[locale]?.htmlLang || 'en';
}

export function openGraphLocale(locale: Locale): string {
  const map: Record<Locale, string> = {
    en: 'en_CH',
    de: 'de_CH',
    fr: 'fr_CH',
    it: 'it_CH',
    es: 'es_ES',
    pt: 'pt_PT',
    ja: 'ja_JP',
    ko: 'ko_KR',
    zh: 'zh_CN',
    'zh-tw': 'zh_TW',
  };
  return map[locale];
}

export interface SeoPage {
  title: string;
  description: string;
  /** Name used in JSON-LD when it should differ from the HTML title. */
  jsonName: string;
  jsonDescription: string;
}

export interface SeoChrome {
  dashboard: string;
  guides: string;
  viewpoints: string;
  guidesPage: SeoPage;
  viewpointsPage: SeoPage;
  trains: SeoPage;
  ski: SeoPage;
  widget: SeoPage;
}

const SEO: Record<Locale, SeoChrome> = {
  en: {
    dashboard: 'Live Dashboard',
    guides: 'Field Guides',
    viewpoints: 'Viewpoints',
    guidesPage: {
      title: 'Matterhorn Field Guides | Viewpoints & Weather in Zermatt',
      description:
        'Field guides for seeing the Matterhorn: Gornergrat vs Glacier Paradise, 30-year weather stats, sunrise photo spots, and rainy-day plans.',
      jsonName: 'Matterhorn Field Guides & Zermatt Weather',
      jsonDescription:
        'Guides for Zermatt: viewpoint comparisons, monthly visibility, sunrise photography, trains, and cloudy-day plans.',
    },
    viewpointsPage: {
      title: 'Matterhorn Viewpoints Live Visibility | Zermatt Cams',
      description:
        'Compare live Matterhorn visibility scores across Gornergrat (3,089m), Klein Matterhorn, and Riffelsee before buying mountain lift tickets.',
      jsonName: 'Matterhorn Viewpoints: Live Visibility in Zermatt',
      jsonDescription:
        'Live 1–10 scores, webcams, and forecasts for Gornergrat, Glacier Paradise, Sunnegga, Riffelsee, and Zermatt village.',
    },
    trains: {
      title: 'Gornergrat Timetable & Tickets | Glacier Express Price',
      description:
        'Gornergrat timetable and tickets, plus Glacier Express price, seat reservation, and the Zermatt route.',
      jsonName: 'Gornergrat Railway & Glacier Express: Tickets and Live Conditions',
      jsonDescription:
        'Gornergrat Bahn and Glacier Express: Swiss Travel Pass rules, seat reservations, timetables, and the live Gornergrat visibility score.',
    },
    ski: {
      title: 'Zermatt Ski Report & Conditions | Lifts, Season & Cervinia',
      description:
        'Zermatt ski report and conditions: snow by elevation, lift status, ski season, and whether you can ski to Cervinia today.',
      jsonName: 'Zermatt Ski Report & Matterhorn Ski Paradise',
      jsonDescription:
        'Zermatt and Cervinia ski conditions: snow by elevation, the Italy border link, lift status, and pass prices.',
    },
    widget: {
      title: 'Matterhorn Live Widget | Free Embed for Websites',
      description:
        'Embed a live 1–10 Matterhorn summit visibility widget on your Zermatt website. It updates every 15 minutes for every live language.',
      jsonName: 'Matterhorn Live Visibility Widget for Hotels and Websites',
      jsonDescription:
        'Free embeddable 1–10 Matterhorn visibility widget for Zermatt hotels, chalets, and travel sites. Gornergrat and Glacier Paradise scores update every 15 minutes.',
    },
  },
  de: {
    dashboard: 'Live-Dashboard',
    guides: 'Ratgeber',
    viewpoints: 'Aussichtspunkte',
    guidesPage: {
      title: 'Ratgeber - Zermatt & Matterhorn',
      description:
        'Ratgeber zum Matterhorn: Aussichtspunkte, Wetter nach Monat, Fotografie, Züge und was tun, wenn der Gipfel in Wolken steckt.',
      jsonName: 'Matterhorn-Ratgeber und Zermatt-Wetter',
      jsonDescription:
        'Ratgeber für Zermatt: Aussichtspunkte, monatliche Sicht, Fotospots, Züge und Schlechtwetter-Pläne.',
    },
    viewpointsPage: {
      title: 'Aussichtspunkte - Matterhorn Live-Sicht | Zermatt Webcams',
      description:
        'Vergleichen Sie die Live-Sicht auf das Matterhorn: Gornergrat (3.089 m), Klein Matterhorn, Sunnegga, Riffelsee und das Dorf, bevor Sie ein Ticket kaufen.',
      jsonName: 'Matterhorn-Aussichtspunkte: Live-Sicht in Zermatt',
      jsonDescription:
        'Live-Werte 1–10, Webcams und Prognose für Gornergrat, Glacier Paradise, Sunnegga, Riffelsee und das Dorf Zermatt.',
    },
    trains: {
      title: 'Gornergrat Fahrplan & Tickets | Glacier Express Preis',
      description:
        'Gornergrat-Fahrplan und Tickets, dazu Preis, Sitzplatzreservierung und Route des Glacier Express ab Zermatt.',
      jsonName: 'Gornergrat Bahn & Glacier Express: Tickets und Live-Bedingungen',
      jsonDescription:
        'Gornergrat Bahn und Glacier Express: Swiss Travel Pass, Sitzplatzreservierung, Fahrplan und der Live-Sichtwert am Gornergrat.',
    },
    ski: {
      title: 'Zermatt Ski-Report & Wetter | Lifte, Saison & Cervinia',
      description:
        'Zermatt Ski-Report: Schnee nach Höhe, Lifte, Saison und ob die Piste nach Cervinia heute offen ist.',
      jsonName: 'Zermatt Ski-Report & Matterhorn Ski Paradise',
      jsonDescription:
        'Skibedingungen Zermatt und Cervinia: Schnee nach Höhe, Grenze nach Italien, Lifte und Skipässe.',
    },
    widget: {
      title: 'Matterhorn Live-Widget | Kostenlos einbetten',
      description:
        'Betten Sie ein Live-Widget mit dem Matterhorn-Sichtwert 1–10 auf Ihrer Zermatt-Website ein. Aktualisierung alle 15 Minuten, in allen Sprachen.',
      jsonName: 'Matterhorn Live-Sicht-Widget für Hotels und Websites',
      jsonDescription:
        'Kostenloses Widget mit dem Matterhorn-Sichtwert 1–10 für Hotels, Chalets und Reiseportale. Gornergrat und Glacier Paradise, alle 15 Minuten.',
    },
  },
  fr: {
    dashboard: 'Tableau de bord',
    guides: 'Guides',
    viewpoints: 'Points de vue',
    guidesPage: {
      title: 'Guides - Zermatt et le Cervin',
      description:
        'Guides pour voir le Cervin : belvédères, météo par mois, photo, trains, et que faire quand le sommet est dans les nuages.',
      jsonName: 'Guides du Cervin et météo de Zermatt',
      jsonDescription:
        'Guides de Zermatt : belvédères, visibilité par mois, photo au lever du soleil, trains et plans par temps couvert.',
    },
    viewpointsPage: {
      title: 'Points de vue - Visibilité du Cervin en direct | Webcams de Zermatt',
      description:
        'Comparez la visibilité du Cervin en direct : Gornergrat (3 089 m), Klein Matterhorn, Sunnegga, Riffelsee et le village, avant d’acheter un billet.',
      jsonName: 'Points de vue sur le Cervin : visibilité en direct à Zermatt',
      jsonDescription:
        'Scores 1–10, webcams et prévisions pour le Gornergrat, Glacier Paradise, Sunnegga, le Riffelsee et le village de Zermatt.',
    },
    trains: {
      title: 'Horaire et billets Gornergrat | Prix du Glacier Express',
      description:
        'Horaire et billets du Gornergrat, plus le prix, la réservation de siège et l’itinéraire du Glacier Express depuis Zermatt.',
      jsonName: 'Gornergrat Bahn et Glacier Express : billets et conditions en direct',
      jsonDescription:
        'Gornergrat Bahn et Glacier Express : Swiss Travel Pass, réservation de siège, horaires et score de visibilité en direct.',
    },
    ski: {
      title: 'Conditions ski Zermatt | Remontées, saison et météo',
      description:
        'Bulletin ski de Zermatt : neige, remontées, saison et météo pour skier jusqu’à Cervinia.',
      jsonName: 'Bulletin ski de Zermatt et Matterhorn Ski Paradise',
      jsonDescription:
        'Conditions à Zermatt et Cervinia : neige par altitude, liaison vers l’Italie, remontées et forfaits.',
    },
    widget: {
      title: 'Widget Cervin en direct | Intégration gratuite',
      description:
        'Intégrez un widget 1–10 de visibilité du Cervin sur votre site de Zermatt. Mise à jour toutes les 15 minutes, dans toutes les langues.',
      jsonName: 'Widget de visibilité du Cervin pour hôtels et sites web',
      jsonDescription:
        'Widget gratuit 1–10 pour hôtels, chalets et sites de voyage à Zermatt. Scores Gornergrat et Glacier Paradise, toutes les 15 minutes.',
    },
  },
  it: {
    dashboard: 'Cruscotto live',
    guides: 'Guide',
    viewpoints: 'Punti panoramici',
    guidesPage: {
      title: 'Guide - Zermatt e il Cervino',
      description:
        'Guide per vedere il Cervino: belvedere, meteo per mese, fotografia, treni e cosa fare quando la cima è nelle nuvole.',
      jsonName: 'Guide del Cervino e meteo di Zermatt',
      jsonDescription:
        'Guide di Zermatt: belvedere, visibilità per mese, foto all’alba, treni e piani per il maltempo.',
    },
    viewpointsPage: {
      title: 'Punti panoramici - Visibilità del Cervino in diretta | Webcam di Zermatt',
      description:
        'Confronta la visibilità del Cervino in diretta: Gornergrat (3.089 m), Klein Matterhorn, Sunnegga, Riffelsee e il paese, prima di comprare il biglietto.',
      jsonName: 'Punti panoramici sul Cervino: visibilità in diretta a Zermatt',
      jsonDescription:
        'Punteggi 1–10, webcam e previsioni per Gornergrat, Glacier Paradise, Sunnegga, Riffelsee e il paese di Zermatt.',
    },
    trains: {
      title: 'Orari e biglietti Gornergrat | Prezzo del Glacier Express',
      description:
        'Orari e biglietti del Gornergrat, più prezzo, prenotazione del posto e percorso del Glacier Express da Zermatt.',
      jsonName: 'Gornergrat Bahn e Glacier Express: biglietti e condizioni in diretta',
      jsonDescription:
        'Gornergrat Bahn e Glacier Express: Swiss Travel Pass, prenotazione del posto, orari e punteggio di visibilità in diretta.',
    },
    ski: {
      title: 'Report sci Zermatt | Impianti, stagione e meteo',
      description:
        'Report sci di Zermatt: neve, impianti, stagione e meteo per sciare fino a Cervinia.',
      jsonName: 'Report sci di Zermatt e Matterhorn Ski Paradise',
      jsonDescription:
        'Condizioni a Zermatt e Cervinia: neve per quota, collegamento con l’Italia, impianti e skipass.',
    },
    widget: {
      title: 'Widget Cervino in diretta | Incorporazione gratuita',
      description:
        'Incorpora un widget 1–10 sulla visibilità del Cervino nel sito di Zermatt. Si aggiorna ogni 15 minuti, in tutte le lingue.',
      jsonName: 'Widget di visibilità del Cervino per hotel e siti web',
      jsonDescription:
        'Widget gratuito 1–10 per hotel, chalet e portali di viaggio a Zermatt. Punteggi di Gornergrat e Glacier Paradise, ogni 15 minuti.',
    },
  },
  es: {
    dashboard: 'Panel en directo',
    guides: 'Guías',
    viewpoints: 'Miradores',
    guidesPage: {
      title: 'Guías - Zermatt y el Cervino',
      description:
        'Guías para ver el Cervino: miradores, tiempo por mes, fotografía, trenes y qué hacer cuando la cumbre está entre nubes.',
      jsonName: 'Guías del Cervino y tiempo en Zermatt',
      jsonDescription:
        'Guías de Zermatt: miradores, visibilidad por mes, fotos al amanecer, trenes y planes para días nublados.',
    },
    viewpointsPage: {
      title: 'Miradores - Visibilidad del Cervino en directo | Cámaras de Zermatt',
      description:
        'Compare la visibilidad del Cervino en directo: Gornergrat (3.089 m), Klein Matterhorn, Sunnegga, Riffelsee y el pueblo, antes de comprar el billete.',
      jsonName: 'Miradores del Cervino: visibilidad en directo en Zermatt',
      jsonDescription:
        'Puntuaciones 1–10, cámaras y previsión para Gornergrat, Glacier Paradise, Sunnegga, Riffelsee y el pueblo de Zermatt.',
    },
    trains: {
      title: 'Horario y billetes del Gornergrat | Precio del Glacier Express',
      description:
        'Horario y billetes del Gornergrat, más el precio, la reserva de asiento y la ruta del Glacier Express desde Zermatt.',
      jsonName: 'Gornergrat Bahn y Glacier Express: billetes y condiciones en directo',
      jsonDescription:
        'Gornergrat Bahn y Glacier Express: Swiss Travel Pass, reserva de asiento, horarios y puntuación de visibilidad en directo.',
    },
    ski: {
      title: 'Parte de nieve de Zermatt | Remontes, temporada y Cervinia',
      description:
        'Parte de nieve de Zermatt: nieve por altitud, remontes, temporada y si hoy se puede esquiar hasta Cervinia.',
      jsonName: 'Parte de nieve de Zermatt y Matterhorn Ski Paradise',
      jsonDescription:
        'Condiciones en Zermatt y Cervinia: nieve por altitud, enlace con Italia, remontes y forfaits.',
    },
    widget: {
      title: 'Widget del Cervino en directo | Inserción gratuita',
      description:
        'Inserte un widget 1–10 de visibilidad del Cervino en su web de Zermatt. Se actualiza cada 15 minutos, en todos los idiomas.',
      jsonName: 'Widget de visibilidad del Cervino para hoteles y webs',
      jsonDescription:
        'Widget gratuito 1–10 para hoteles, chalets y portales de viaje en Zermatt. Puntuaciones de Gornergrat y Glacier Paradise, cada 15 minutos.',
    },
  },
  pt: {
    dashboard: 'Painel ao vivo',
    guides: 'Guias',
    viewpoints: 'Miradouros',
    guidesPage: {
      title: 'Guias - Zermatt e o Matterhorn',
      description:
        'Guias para ver o Matterhorn: miradouros, tempo por mês, fotografia, comboios e o que fazer quando o cume está nas nuvens.',
      jsonName: 'Guias do Matterhorn e tempo em Zermatt',
      jsonDescription:
        'Guias de Zermatt: miradouros, visibilidade por mês, fotos ao nascer do sol, comboios e planos para dias nublados.',
    },
    viewpointsPage: {
      title: 'Miradouros - Visibilidade do Matterhorn ao vivo | Câmaras de Zermatt',
      description:
        'Compare a visibilidade do Matterhorn ao vivo: Gornergrat (3.089 m), Klein Matterhorn, Sunnegga, Riffelsee e a aldeia, antes de comprar o bilhete.',
      jsonName: 'Miradouros do Matterhorn: visibilidade ao vivo em Zermatt',
      jsonDescription:
        'Pontuações 1–10, câmaras e previsão para Gornergrat, Glacier Paradise, Sunnegga, Riffelsee e a aldeia de Zermatt.',
    },
    trains: {
      title: 'Horário e bilhetes do Gornergrat | Preço do Glacier Express',
      description:
        'Horário e bilhetes do Gornergrat, mais o preço, a reserva de lugar e o percurso do Glacier Express a partir de Zermatt.',
      jsonName: 'Gornergrat Bahn e Glacier Express: bilhetes e condições ao vivo',
      jsonDescription:
        'Gornergrat Bahn e Glacier Express: Swiss Travel Pass, reserva de lugar, horários e pontuação de visibilidade ao vivo.',
    },
    ski: {
      title: 'Relatório de esqui em Zermatt | Teleféricos, época e Cervinia',
      description:
        'Relatório de esqui em Zermatt: neve por altitude, teleféricos, época e se hoje dá para esquiar até Cervinia.',
      jsonName: 'Relatório de esqui em Zermatt e Matterhorn Ski Paradise',
      jsonDescription:
        'Condições em Zermatt e Cervinia: neve por altitude, ligação a Itália, teleféricos e passes.',
    },
    widget: {
      title: 'Widget do Matterhorn ao vivo | Incorporação gratuita',
      description:
        'Incorpore um widget 1–10 da visibilidade do Matterhorn no site de Zermatt. Atualiza a cada 15 minutos, em todos os idiomas.',
      jsonName: 'Widget de visibilidade do Matterhorn para hotéis e sites',
      jsonDescription:
        'Widget gratuito 1–10 para hotéis, chalets e portais de viagem em Zermatt. Pontuações do Gornergrat e do Glacier Paradise, a cada 15 minutos.',
    },
  },
  zh: {
    dashboard: '实时首页',
    guides: '指南',
    viewpoints: '观景点',
    guidesPage: {
      title: '指南 - 策马特与马特洪峰',
      description: '看马特洪峰的指南：观景点、逐月天气、摄影、火车，以及峰顶被云挡住时可以做什么。',
      jsonName: '马特洪峰指南与策马特天气',
      jsonDescription: '策马特指南：观景点比较、逐月能见度、日出摄影、火车和阴天安排。',
    },
    viewpointsPage: {
      title: '观景点 - 马特洪峰实时能见度 | 策马特摄像头',
      description:
        '买票前比较马特洪峰的实时能见度：戈尔内格拉特（3,089米）、小马特洪峰、苏内加、利菲尔湖和村里。',
      jsonName: '马特洪峰观景点：策马特实时能见度',
      jsonDescription: '戈尔内格拉特、冰川天堂、苏内加、利菲尔湖和策马特村里的 1–10 分、摄像头和预报。',
    },
    trains: {
      title: '戈尔内格拉特时刻与车票 | 冰川快车票价',
      description: '戈尔内格拉特时刻表和车票，以及冰川快车的票价、座位预订和从策马特出发的路线。',
      jsonName: '戈尔内格拉特铁路与冰川快车：车票和实时状况',
      jsonDescription: '戈尔内格拉特铁路和冰川快车：瑞士旅行通票、订座、时刻，以及戈尔内格拉特的实时能见度。',
    },
    ski: {
      title: '策马特滑雪报告 | 缆车、雪季与切尔维尼亚',
      description: '策马特滑雪报告：各海拔雪况、缆车、雪季，以及今天能否滑到切尔维尼亚。',
      jsonName: '策马特滑雪报告与马特洪峰滑雪天堂',
      jsonDescription: '策马特和切尔维尼亚的雪况：各海拔积雪、通往意大利的连接、缆车和雪票。',
    },
    widget: {
      title: '马特洪峰实时小组件 | 免费嵌入网站',
      description: '把 1–10 分的马特洪峰能见度小组件嵌到策马特网站上。每 15 分钟更新，支持全部语言。',
      jsonName: '面向酒店和网站的马特洪峰实时能见度小组件',
      jsonDescription: '免费的 1–10 分马特洪峰能见度小组件，适合策马特酒店、木屋和旅行网站。每 15 分钟更新。',
    },
  },
  'zh-tw': {
    dashboard: '即時首頁',
    guides: '指南',
    viewpoints: '觀景點',
    guidesPage: {
      title: '指南 - 策馬特與馬特洪峰',
      description: '看馬特洪峰的指南：觀景點、逐月天氣、攝影、火車，以及峰頂被雲擋住時可以做什麼。',
      jsonName: '馬特洪峰指南與策馬特天氣',
      jsonDescription: '策馬特指南：觀景點比較、逐月能見度、日出攝影、火車和陰天安排。',
    },
    viewpointsPage: {
      title: '觀景點 - 馬特洪峰即時能見度 | 策馬特攝影機',
      description:
        '買票前比較馬特洪峰的即時能見度：高納葛拉特（3,089公尺）、小馬特洪峰、蘇內加、利菲爾湖和村裡。',
      jsonName: '馬特洪峰觀景點：策馬特即時能見度',
      jsonDescription: '高納葛拉特、冰川天堂、蘇內加、利菲爾湖和策馬特村裡的 1–10 分、攝影機和預報。',
    },
    trains: {
      title: '高納葛拉特時刻與車票 | 冰川快車票價',
      description: '高納葛拉特時刻表和車票，以及冰川快車的票價、座位預訂和從策馬特出發的路線。',
      jsonName: '高納葛拉特鐵路與冰川快車：車票和即時狀況',
      jsonDescription: '高納葛拉特鐵路和冰川快車：瑞士旅行通票、訂位、時刻，以及高納葛拉特的即時能見度。',
    },
    ski: {
      title: '策馬特滑雪報告 | 纜車、雪季與切爾維尼亞',
      description: '策馬特滑雪報告：各海拔雪況、纜車、雪季，以及今天能否滑到切爾維尼亞。',
      jsonName: '策馬特滑雪報告與馬特洪峰滑雪天堂',
      jsonDescription: '策馬特和切爾維尼亞的雪況：各海拔積雪、通往義大利的連接、纜車和雪票。',
    },
    widget: {
      title: '馬特洪峰即時小工具 | 免費嵌入網站',
      description: '把 1–10 分的馬特洪峰能見度小工具嵌到策馬特網站上。每 15 分鐘更新，支援全部語言。',
      jsonName: '面向飯店和網站的馬特洪峰即時能見度小工具',
      jsonDescription: '免費的 1–10 分馬特洪峰能見度小工具，適合策馬特飯店、木屋和旅行網站。每 15 分鐘更新。',
    },
  },
  ja: {
    dashboard: 'ライブ',
    guides: 'ガイド',
    viewpoints: '展望台',
    guidesPage: {
      title: 'ガイド - ツェルマットとマッターホルン',
      description:
        'マッターホルンの見方：展望台、月ごとの天気、写真、列車、そして山頂が雲のときの過ごし方。',
      jsonName: 'マッターホルンのガイドとツェルマットの天気',
      jsonDescription: 'ツェルマットのガイド：展望台、月ごとの視界、日の出の写真、列車、曇りの日の予定。',
    },
    viewpointsPage: {
      title: '展望台 - マッターホルンのライブ視界 | ツェルマットのカメラ',
      description:
        '切符を買う前にマッターホルンのライブ視界を比べる：ゴルナーグラート（3,089m）、クライン・マッターホルン、スネガ、リッフェル湖、村。',
      jsonName: 'マッターホルン展望台：ツェルマットのライブ視界',
      jsonDescription:
        'ゴルナーグラート、グレイシャー・パラダイス、スネガ、リッフェル湖、ツェルマットの村の1–10点、カメラ、予報。',
    },
    trains: {
      title: 'ゴルナーグラート時刻表と切符 | 氷河特急の料金',
      description:
        'ゴルナーグラートの時刻表と切符、それに氷河特急の料金、座席指定、ツェルマットからのルート。',
      jsonName: 'ゴルナーグラート鉄道と氷河特急：切符とライブ状況',
      jsonDescription:
        'ゴルナーグラート鉄道と氷河特急：スイス・トラベル・パス、座席指定、時刻表、ライブの視界スコア。',
    },
    ski: {
      title: 'ツェルマットスキー情報 | リフト、シーズン、チェルヴィニア',
      description:
        'ツェルマットのスキー情報：標高ごとの雪、リフト、シーズン、今日チェルヴィニアまで滑れるか。',
      jsonName: 'ツェルマットスキー情報とマッターホルンスキーパラダイス',
      jsonDescription: 'ツェルマットとチェルヴィニアの雪況：標高ごとの雪、イタリア側への連絡、リフト、リフト券。',
    },
    widget: {
      title: 'マッターホルンのライブウィジェット | 無料埋め込み',
      description:
        '1–10点のマッターホルン視界ウィジェットをツェルマットのサイトに埋め込めます。15分ごとに更新、全言語対応。',
      jsonName: 'ホテルとウェブサイト向けマッターホルン視界ウィジェット',
      jsonDescription:
        'ツェルマットのホテル、シャレー、旅行サイト向けの無料1–10点ウィジェット。15分ごとに更新。',
    },
  },
  ko: {
    dashboard: '실시간',
    guides: '가이드',
    viewpoints: '전망대',
    guidesPage: {
      title: '가이드 - 체르마트와 마터호른',
      description:
        '마터호른을 보는 가이드: 전망대, 달별 날씨, 사진, 열차, 그리고 정상이 구름에 가렸을 때 할 일.',
      jsonName: '마터호른 가이드와 체르마트 날씨',
      jsonDescription: '체르마트 가이드: 전망대 비교, 월별 시야, 일출 사진, 열차, 흐린 날 일정.',
    },
    viewpointsPage: {
      title: '전망대 - 마터호른 실시간 시야 | 체르마트 웹캠',
      description:
        '표를 사기 전에 마터호른 실시간 시야를 비교하세요. 고르너그라트(3,089m), 클라인 마터호른, 수네가, 리펠제, 마을.',
      jsonName: '마터호른 전망대: 체르마트 실시간 시야',
      jsonDescription: '고르너그라트, 글래시어 파라다이스, 수네가, 리펠제, 체르마트 마을의 1–10점, 웹캠, 예보.',
    },
    trains: {
      title: '고르너그라트 시간표와 표 | 빙하특급 요금',
      description: '고르너그라트 시간표와 표, 그리고 빙하특급 요금, 좌석 예약, 체르마트 출발 노선.',
      jsonName: '고르너그라트 철도와 빙하특급: 표와 실시간 상황',
      jsonDescription: '고르너그라트 철도와 빙하특급: 스위스 트래블 패스, 좌석 예약, 시간표, 실시간 시야 점수.',
    },
    ski: {
      title: '체르마트 스키 리포트 | 리프트, 시즌, 체르비니아',
      description: '체르마트 스키 리포트: 고도별 눈, 리프트, 시즌, 오늘 체르비니아까지 스키를 탈 수 있는지.',
      jsonName: '체르마트 스키 리포트와 마터호른 스키 파라다이스',
      jsonDescription: '체르마트와 체르비니아 설질: 고도별 눈, 이탈리아 연결, 리프트, 리프트권.',
    },
    widget: {
      title: '마터호른 실시간 위젯 | 무료 삽입',
      description: '1–10점 마터호른 시야 위젯을 체르마트 웹사이트에 넣으세요. 15분마다 갱신, 모든 언어.',
      jsonName: '호텔과 웹사이트용 마터호른 실시간 시야 위젯',
      jsonDescription: '체르마트 호텔, 샬레, 여행 사이트용 무료 1–10점 위젯. 15분마다 갱신.',
    },
  },
};

export function getSeo(locale: Locale = 'en'): SeoChrome {
  return SEO[locale] ?? SEO.en;
}

export function viewpointLivePrefix(
  locale: Locale,
  time: string,
  place: string,
  score: number,
  status: string,
  am: number,
  pm: number
): string {
  const label = visibilityStatusLabel(locale, status);
  switch (locale) {
    case 'de':
      return `Gerade jetzt (${time}) liegt ${place} bei ${score}/10 (${label} — Vormittag: ${am}/10, Nachmittag: ${pm}/10). `;
    case 'fr':
      return `En ce moment (${time}), ${place} est à ${score}/10 (${label} — matin : ${am}/10, après-midi : ${pm}/10). `;
    case 'it':
      return `Adesso (${time}) ${place} è a ${score}/10 (${label} — mattina: ${am}/10, pomeriggio: ${pm}/10). `;
    case 'es':
      return `Ahora mismo (${time}), ${place} marca ${score}/10 (${label} — mañana: ${am}/10, tarde: ${pm}/10). `;
    case 'pt':
      return `Neste momento (${time}), ${place} está em ${score}/10 (${label} — manhã: ${am}/10, tarde: ${pm}/10). `;
    case 'zh':
      return `此刻（${time}），${place} 为 ${score}/10（${label} — 上午 ${am}/10，下午 ${pm}/10）。`;
    case 'zh-tw':
      return `此刻（${time}），${place} 為 ${score}/10（${label} — 上午 ${am}/10，下午 ${pm}/10）。`;
    case 'ja':
      return `ただ今（${time}）、${place} は ${score}/10（${label} — 午前 ${am}/10、午後 ${pm}/10）です。`;
    case 'ko':
      return `지금 (${time}) ${place}는 ${score}/10 (${label} — 오전 ${am}/10, 오후 ${pm}/10)입니다. `;
    default:
      return `Right now (${time}), ${place} scores ${score}/10 (${label} — Morning AM: ${am}/10, Afternoon PM: ${pm}/10). `;
  }
}

const WIDGET_FAQS: Record<Locale, LocalizedFaq[]> = {
  en: [
    {
      question: 'Is the Matterhorn live visibility widget free for hotels and travel sites?',
      answer:
        'Yes. The 1–10 widget, the script embed, the iframe, and the SVG badge are free for Zermatt hotels, chalets, guides, ski schools, and travel sites that keep the attribution.',
    },
    {
      question: 'How often does the embedded widget update?',
      answer:
        'Every 15 minutes, using high-altitude cloud layers, summit visibility, and Föhn wind for Gornergrat (3,089m) and Matterhorn Glacier Paradise (3,883m).',
    },
    {
      question: 'Which languages can the widget display?',
      answer:
        'English, German, French, Italian, Spanish, Portuguese, Japanese, Korean, Simplified Chinese, and Traditional Chinese. Set the lang attribute to the locale code.',
    },
    {
      question: 'Does the widget use cookies or slow the page?',
      answer:
        'No cookies and no personal data. It is cached for 15 minutes, so it does not add a slow request to your Core Web Vitals.',
    },
  ],
  de: [
    {
      question: 'Ist das Matterhorn-Live-Widget für Hotels und Reisewebsites kostenlos?',
      answer:
        'Ja. Das 1–10-Widget, das Skript, der iframe und das SVG-Badge sind kostenlos für Hotels, Chalets, Bergführer, Skischulen und Reisewebsites in Zermatt, wenn die Quellenangabe bleibt.',
    },
    {
      question: 'Wie oft aktualisiert sich das eingebettete Widget?',
      answer:
        'Alle 15 Minuten, mit hohen Wolkenschichten, Gipfelsicht und Föhn für den Gornergrat (3.089 m) und das Matterhorn Glacier Paradise (3.883 m).',
    },
    {
      question: 'Welche Sprachen kann das Widget anzeigen?',
      answer:
        'Englisch, Deutsch, Französisch, Italienisch, Spanisch, Portugiesisch, Japanisch, Koreanisch, vereinfachtes und traditionelles Chinesisch. Setzen Sie das lang-Attribut auf den Sprachcode.',
    },
    {
      question: 'Setzt das Widget Cookies oder bremst die Seite?',
      answer:
        'Keine Cookies und keine Personendaten. Es ist 15 Minuten gecacht und belastet die Core Web Vitals nicht mit einer langsamen Anfrage.',
    },
  ],
  fr: [
    {
      question: 'Le widget de visibilité du Cervin est-il gratuit pour les hôtels et les sites de voyage ?',
      answer:
        'Oui. Le widget 1–10, le script, l’iframe et le badge SVG sont gratuits pour les hôtels, chalets, guides, écoles de ski et sites de voyage à Zermatt, avec la mention de la source.',
    },
    {
      question: 'À quelle fréquence le widget intégré se met-il à jour ?',
      answer:
        'Toutes les 15 minutes, avec les couches de nuages d’altitude, la visibilité au sommet et le Foehn pour le Gornergrat (3 089 m) et Matterhorn Glacier Paradise (3 883 m).',
    },
    {
      question: 'Quelles langues le widget peut-il afficher ?',
      answer:
        'Anglais, allemand, français, italien, espagnol, portugais, japonais, coréen, chinois simplifié et chinois traditionnel. Réglez l’attribut lang sur le code de langue.',
    },
    {
      question: 'Le widget dépose-t-il des cookies ou ralentit-il la page ?',
      answer:
        'Aucun cookie et aucune donnée personnelle. Il est mis en cache 15 minutes et n’ajoute pas une requête lente à vos Core Web Vitals.',
    },
  ],
  it: [
    {
      question: 'Il widget di visibilità del Cervino è gratuito per hotel e siti di viaggio?',
      answer:
        'Sì. Il widget 1–10, lo script, l’iframe e il badge SVG sono gratuiti per hotel, chalet, guide, scuole di sci e siti di viaggio a Zermatt, con l’attribuzione.',
    },
    {
      question: 'Ogni quanto si aggiorna il widget incorporato?',
      answer:
        'Ogni 15 minuti, con nubi d’alta quota, visibilità in vetta e Föhn per il Gornergrat (3.089 m) e il Matterhorn Glacier Paradise (3.883 m).',
    },
    {
      question: 'Quali lingue può mostrare il widget?',
      answer:
        'Inglese, tedesco, francese, italiano, spagnolo, portoghese, giapponese, coreano, cinese semplificato e cinese tradizionale. Imposta l’attributo lang sul codice della lingua.',
    },
    {
      question: 'Il widget usa cookie o rallenta la pagina?',
      answer:
        'Nessun cookie e nessun dato personale. È in cache per 15 minuti e non aggiunge una richiesta lenta ai Core Web Vitals.',
    },
  ],
  es: [
    {
      question: '¿El widget de visibilidad del Cervino es gratis para hoteles y webs de viaje?',
      answer:
        'Sí. El widget 1–10, el script, el iframe y la insignia SVG son gratis para hoteles, chalets, guías, escuelas de esquí y webs de viaje en Zermatt, si se mantiene la atribución.',
    },
    {
      question: '¿Cada cuánto se actualiza el widget insertado?',
      answer:
        'Cada 15 minutos, con capas de nubes de altura, visibilidad en la cumbre y Föhn para Gornergrat (3.089 m) y Matterhorn Glacier Paradise (3.883 m).',
    },
    {
      question: '¿Qué idiomas puede mostrar el widget?',
      answer:
        'Inglés, alemán, francés, italiano, español, portugués, japonés, coreano, chino simplificado y chino tradicional. Ponga el atributo lang en el código del idioma.',
    },
    {
      question: '¿El widget usa cookies o ralentiza la página?',
      answer:
        'Ni cookies ni datos personales. Está en caché 15 minutos y no añade una petición lenta a sus Core Web Vitals.',
    },
  ],
  pt: [
    {
      question: 'O widget de visibilidade do Matterhorn é gratuito para hotéis e sites de viagem?',
      answer:
        'Sim. O widget 1–10, o script, o iframe e o emblema SVG são gratuitos para hotéis, chalets, guias, escolas de esqui e sites de viagem em Zermatt, com a atribuição.',
    },
    {
      question: 'De quanto em quanto tempo o widget incorporado atualiza?',
      answer:
        'A cada 15 minutos, com camadas de nuvens de altitude, visibilidade no cume e Föhn para o Gornergrat (3.089 m) e o Matterhorn Glacier Paradise (3.883 m).',
    },
    {
      question: 'Que idiomas pode o widget mostrar?',
      answer:
        'Inglês, alemão, francês, italiano, espanhol, português, japonês, coreano, chinês simplificado e chinês tradicional. Defina o atributo lang com o código do idioma.',
    },
    {
      question: 'O widget usa cookies ou torna a página mais lenta?',
      answer:
        'Nem cookies nem dados pessoais. Fica em cache 15 minutos e não acrescenta um pedido lento aos Core Web Vitals.',
    },
  ],
  zh: [
    {
      question: '马特洪峰实时能见度小组件对酒店和旅行网站免费吗？',
      answer: '免费。1–10 分小组件、脚本、iframe 和 SVG 徽章都免费，适合策马特的酒店、木屋、向导、滑雪学校和旅行网站，需保留来源标注。',
    },
    {
      question: '嵌入的小组件多久更新一次？',
      answer: '每 15 分钟，依据高空云层、峰顶能见度和焚风，覆盖戈尔内格拉特（3,089米）和马特洪峰冰川天堂（3,883米）。',
    },
    {
      question: '小组件可以显示哪些语言？',
      answer: '英语、德语、法语、意大利语、西班牙语、葡萄牙语、日语、韩语、简体中文和繁体中文。把 lang 设成对应语言代码即可。',
    },
    {
      question: '小组件会使用 Cookie 或拖慢网页吗？',
      answer: '没有 Cookie，也不收集个人信息。缓存 15 分钟，不会给核心网页指标增加一次慢请求。',
    },
  ],
  'zh-tw': [
    {
      question: '馬特洪峰即時能見度小工具對飯店和旅行網站免費嗎？',
      answer: '免費。1–10 分小工具、腳本、iframe 和 SVG 徽章都免費，適合策馬特的飯店、木屋、嚮導、滑雪學校和旅行網站，需保留來源標註。',
    },
    {
      question: '嵌入的小工具多久更新一次？',
      answer: '每 15 分鐘，依據高空雲層、峰頂能見度和焚風，涵蓋高納葛拉特（3,089公尺）和馬特洪峰冰川天堂（3,883公尺）。',
    },
    {
      question: '小工具可以顯示哪些語言？',
      answer: '英語、德語、法語、義大利語、西班牙語、葡萄牙語、日語、韓語、簡體中文和繁體中文。把 lang 設成對應語言代碼即可。',
    },
    {
      question: '小工具會使用 Cookie 或拖慢網頁嗎？',
      answer: '沒有 Cookie，也不蒐集個人資訊。快取 15 分鐘，不會給核心網頁指標增加一次慢請求。',
    },
  ],
  ja: [
    {
      question: 'マッターホルンのライブ視界ウィジェットは、ホテルや旅行サイトに無料ですか？',
      answer:
        '無料です。1–10点のウィジェット、スクリプト、iframe、SVGバッジは、ツェルマットのホテル、シャレー、ガイド、スキースクール、旅行サイトが出典を残せば無料です。',
    },
    {
      question: '埋め込んだウィジェットはどのくらいの頻度で更新されますか？',
      answer:
        '15分ごとです。高所の雲、山頂の視界、フェーンを使い、ゴルナーグラート（3,089m）とマッターホルン・グレイシャー・パラダイス（3,883m）を見ます。',
    },
    {
      question: 'ウィジェットはどの言語を表示できますか？',
      answer:
        '英語、ドイツ語、フランス語、イタリア語、スペイン語、ポルトガル語、日本語、韓国語、簡体字中国語、繁体字中国語です。lang属性に言語コードを指定します。',
    },
    {
      question: 'ウィジェットはCookieを使いますか。ページは遅くなりますか？',
      answer: 'Cookieも個人データもありません。15分キャッシュなので、Core Web Vitalsに遅いリクエストを足しません。',
    },
  ],
  ko: [
    {
      question: '마터호른 실시간 시야 위젯은 호텔과 여행 사이트에 무료인가요?',
      answer:
        '무료입니다. 1–10점 위젯, 스크립트, iframe, SVG 배지는 출처를 남기면 체르마트 호텔, 샬레, 가이드, 스키 학교, 여행 사이트에서 무료입니다.',
    },
    {
      question: '삽입한 위젯은 얼마나 자주 갱신되나요?',
      answer:
        '15분마다입니다. 고도 구름, 정상 시야, 푄을 사용해 고르너그라트(3,089m)와 마터호른 글래시어 파라다이스(3,883m)를 봅니다.',
    },
    {
      question: '위젯은 어떤 언어를 표시할 수 있나요?',
      answer:
        '영어, 독일어, 프랑스어, 이탈리아어, 스페인어, 포르투갈어, 일본어, 한국어, 간체 중국어, 번체 중국어입니다. lang 속성에 언어 코드를 넣으세요.',
    },
    {
      question: '위젯이 쿠키를 쓰거나 페이지를 느리게 하나요?',
      answer: '쿠키도 개인정보도 없습니다. 15분 캐시라 Core Web Vitals에 느린 요청을 더하지 않습니다.',
    },
  ],
};

export function getWidgetFaqs(locale: Locale = 'en'): LocalizedFaq[] {
  return WIDGET_FAQS[locale] ?? WIDGET_FAQS.en;
}
