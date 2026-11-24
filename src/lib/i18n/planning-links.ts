import type { Locale } from './config';

export type PlanningGuideSlug =
  | 'gornergrat-vs-glacier-paradise'
  | 'zurich-geneva-to-zermatt-day-trip'
  | 'zermatt-cloudy-rainy-day-guide';

export interface PlanningGuideCopy {
  shortTitle: string;
  detail: string;
}

const PLANNING_GUIDE_COPY: Record<
  Locale,
  Record<PlanningGuideSlug, PlanningGuideCopy>
> = {
  en: {
    'gornergrat-vs-glacier-paradise': {
      shortTitle: 'Gornergrat vs. Glacier Paradise',
      detail: 'Gornergrat (3,089m) vs. Klein Matterhorn (3,883m)',
    },
    'zurich-geneva-to-zermatt-day-trip': {
      shortTitle: 'Zurich to Zermatt Train',
      detail: '3h 14m each way from Zurich HB • 3h 45m from Geneva',
    },
    'zermatt-cloudy-rainy-day-guide': {
      shortTitle: 'Cloudy & Rainy Day Guide',
      detail: 'Per person saved by skipping a 1/10 whiteout summit ride',
    },
  },
  de: {
    'gornergrat-vs-glacier-paradise': {
      shortTitle: 'Gornergrat vs. Glacier Paradise',
      detail: 'Gornergrat (3.089 m) vs. Klein Matterhorn (3.883 m)',
    },
    'zurich-geneva-to-zermatt-day-trip': {
      shortTitle: 'Tagesausflug Zürich & Genf',
      detail: '3h 14m je Weg ab Zürich HB • 3h 45m ab Genf',
    },
    'zermatt-cloudy-rainy-day-guide': {
      shortTitle: 'Schlechtwetter-Plan',
      detail: 'Pro Person gespart durch Verzicht auf Nebelfahrten',
    },
  },
  es: {
    'gornergrat-vs-glacier-paradise': {
      shortTitle: 'Gornergrat vs. Glacier Paradise',
      detail: 'Gornergrat (3.089 m) vs. Klein Matterhorn (3.883 m)',
    },
    'zurich-geneva-to-zermatt-day-trip': {
      shortTitle: 'Excursión desde Zúrich & Ginebra',
      detail: '3h 14m por trayecto desde Zúrich HB • 3h 45m desde Ginebra',
    },
    'zermatt-cloudy-rainy-day-guide': {
      shortTitle: 'Guía de lluvia y niebla',
      detail: 'Por persona evitando subir a cumbres con niebla total',
    },
  },
  fr: {
    'gornergrat-vs-glacier-paradise': {
      shortTitle: 'Gornergrat vs Glacier Paradise',
      detail: 'Gornergrat (3 089 m) vs Petit Cervin (3 883 m)',
    },
    'zurich-geneva-to-zermatt-day-trip': {
      shortTitle: 'Excursion depuis Zurich & Genève',
      detail: '3h 14m l’aller depuis Zurich HB • 3h 45m depuis Genève',
    },
    'zermatt-cloudy-rainy-day-guide': {
      shortTitle: 'Guide jours de pluie et brouillard',
      detail: 'Par personne en évitant une montée blanche à 1/10',
    },
  },
  it: {
    'gornergrat-vs-glacier-paradise': {
      shortTitle: 'Gornergrat vs. Glacier Paradise',
      detail: 'Gornergrat (3.089 m) vs. Piccolo Cervino (3.883 m)',
    },
    'zurich-geneva-to-zermatt-day-trip': {
      shortTitle: 'Gita da Zurigo & Ginevra',
      detail: '3h 14m solo andata da Zurigo HB • 3h 45m da Ginevra',
    },
    'zermatt-cloudy-rainy-day-guide': {
      shortTitle: 'Guida per pioggia e nubi',
      detail: 'Per persona evitando una salita inutile nella nebbia',
    },
  },
  ja: {
    'gornergrat-vs-glacier-paradise': {
      shortTitle: 'ゴルナーグラート vs グレイシャー',
      detail: 'ゴルナーグラート (3,089m) vs. クライン・マッターホルン (3,883m)',
    },
    'zurich-geneva-to-zermatt-day-trip': {
      shortTitle: 'チューリッヒ＆ジュネーヴ日帰り',
      detail: 'チューリッヒ発片道3h 14m • ジュネーヴ発片道3h 45m',
    },
    'zermatt-cloudy-rainy-day-guide': {
      shortTitle: '雨天・曇天時の過ごし方',
      detail: '視界不良時の無駄な登頂チケットを見送ることで1人あたり節約',
    },
  },
  ko: {
    'gornergrat-vs-glacier-paradise': {
      shortTitle: '고르너그라트 vs 글래시어 파라다이스',
      detail: '고르너그라트 (3,089m) vs. 클라인 마터호른 (3,883m)',
    },
    'zurich-geneva-to-zermatt-day-trip': {
      shortTitle: '취리히 & 제네바 당일치기 가이드',
      detail: '취리히 중앙역 편도 3h 14m • 제네바 편도 3h 45m',
    },
    'zermatt-cloudy-rainy-day-guide': {
      shortTitle: '흐린 날 & 비 오는 날 가이드',
      detail: '시야 1/10점 곰탕 뷰 케이블카를 건너뛰어 1인당 아끼는 경비',
    },
  },
  pt: {
    'gornergrat-vs-glacier-paradise': {
      shortTitle: 'Gornergrat vs. Glacier Paradise',
      detail: 'Gornergrat (3.089 m) vs. Klein Matterhorn (3.883 m)',
    },
    'zurich-geneva-to-zermatt-day-trip': {
      shortTitle: 'Comboio de Zurique a Zermatt',
      detail: '3 h 14 min em cada sentido desde Zurique HB • 3 h 45 min desde Genebra',
    },
    'zermatt-cloudy-rainy-day-guide': {
      shortTitle: 'Guia de dias nublados e de chuva',
      detail: 'Por pessoa, ao saltar uma subida ao cume em branco total de 1/10',
    },
  },
  zh: {
    'gornergrat-vs-glacier-paradise': {
      shortTitle: '戈尔内格拉特 vs 冰川天堂',
      detail: '戈尔内格拉特 (3,089m) vs. 小马特洪峰 (3,883m)',
    },
    'zurich-geneva-to-zermatt-day-trip': {
      shortTitle: '苏黎世与日内瓦一日游指南',
      detail: '苏黎世出发单程3h 14m • 日内瓦出发单程3h 45m',
    },
    'zermatt-cloudy-rainy-day-guide': {
      shortTitle: '阴雨天气备选指南',
      detail: '放弃1/10白茫茫大雾登顶票可省下的预算',
    },
  },
  'zh-tw': {
    'gornergrat-vs-glacier-paradise': {
      shortTitle: '高納葛拉特 vs 冰川天堂',
      detail: '高納葛拉特 (3,089m) vs. 小馬特洪峰 (3,883m)',
    },
    'zurich-geneva-to-zermatt-day-trip': {
      shortTitle: '蘇黎世與日內瓦一日遊攻略',
      detail: '蘇黎世出發單程3h 14m • 日內瓦出發單程3h 45m',
    },
    'zermatt-cloudy-rainy-day-guide': {
      shortTitle: '雨天與濃霧備選方案',
      detail: '避開1/10大霧登頂車票所省下的開銷',
    },
  },
};

export function getPlanningGuideCopy(
  slug: PlanningGuideSlug,
  locale: Locale = 'en'
): PlanningGuideCopy {
  return PLANNING_GUIDE_COPY[locale]?.[slug] ?? PLANNING_GUIDE_COPY.en[slug];
}
