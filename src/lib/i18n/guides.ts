import {
  GuideArticle,
  GuideCategory,
  GuideComparisonTable,
  GuideFaq,
  GuideSection,
  GUIDES,
} from '../guides';
import { Locale } from './config';
import { deGuides } from './guides/de';
import { frGuides } from './guides/fr';
import { itGuides } from './guides/it';
import { esGuides } from './guides/es';
import { zhGuides } from './guides/zh';
import { zhTwGuides } from './guides/zh-tw';
import { jaGuides } from './guides/ja';
import { koGuides } from './guides/ko';

export interface GuideTranslation {
  title?: string;
  shortTitle?: string;
  description?: string;
  category?: string;
  heroStat?: { label: string; value: string; detail: string };
  keyTakeaways?: string[];
  comparisonTable?: GuideComparisonTable;
  sections?: GuideSection[];
  faqs?: GuideFaq[];
}

const GUIDE_TRANSLATIONS: Partial<Record<Locale, Record<string, GuideTranslation>>> = {
  de: deGuides,
  fr: frGuides,
  it: itGuides,
  es: esGuides,
  zh: zhGuides,
  'zh-tw': zhTwGuides,
  ja: jaGuides,
  ko: koGuides,
  pt: {
    'gornergrat-vs-glacier-paradise': {
      title: 'Gornergrat vs. Glacier Paradise: Qual o melhor mirante para ver o Matterhorn?',
      shortTitle: 'Gornergrat vs Glacier Paradise',
      description: 'Altitude, trem de cremalheira vs teleférico, ângulos de visão e tempo nos dois mirantes icônicos de Zermatt.',
      category: 'Mirantes',
    },
    'best-time-to-see-matterhorn': {
      title: 'Tempo em Zermatt por mês | Melhor hora para ver o Matterhorn',
      shortTitle: 'Melhor época e hora',
      description: 'Por que dezembro e janeiro têm 88%+ de céu limpo, enquanto as tardes de verão acumulam nuvens convectivas.',
      category: 'Climatologia',
    },
    'zermatt-cloudy-rainy-day-guide': {
      title: 'O que fazer em Zermatt quando o Matterhorn está nublado (Guia de mau tempo)',
      shortTitle: 'Guia para dias nublados',
      description: 'Economize seus 100+ CHF de teleférico na neblina e explore desfiladeiros, museus e spas alpinos em Zermatt.',
      category: 'Mau tempo',
    },
    'best-matterhorn-photo-viewpoints': {
      title: 'Melhores pontos para fotografar o Matterhorn e o nascer do sol em Zermatt',
      shortTitle: 'Melhores fotos e alvorada',
      description: 'Localizações exatas, caminhadas e luz ideal: Kirchbrücke, Stellisee, Riffelsee e Mürini.',
      category: 'Fotografia',
    },
    'matterhorn-banner-cloud-fohn-wind': {
      title: 'Por que o Matterhorn quase sempre tem uma nuvem no topo? Física do Föhn',
      shortTitle: 'Nuvem em bandeira e Föhn',
      description: 'A física por trás da famosa nuvem orográfica que surge mesmo sob céu azul límpido.',
      category: 'Meteorologia',
    },
    'zurich-geneva-to-zermatt-day-trip': {
      title: 'Trem Zurique–Zermatt | Horários, baldeação em Visp',
      shortTitle: 'Passeio de Zurique ou Genebra',
      description: 'Conexões em Visp, tempos de viagem e regra Go/No-Go para decidir antes de embarcar.',
      category: 'Passeios de 1 dia',
    },
  },
};

/**
 * Returns a localized guide article with fallback to English default.
 */
export function getLocalizedGuideArticle(
  slug: string,
  locale: Locale = 'en'
): GuideArticle {
  const base = GUIDES.find((g) => g.slug === slug) || GUIDES[0];
  if (locale === 'en') return base;

  const translation = GUIDE_TRANSLATIONS[locale]?.[slug];
  if (!translation) return base;

  return {
    ...base,
    title: translation.title || base.title,
    shortTitle: translation.shortTitle || base.shortTitle,
    description: translation.description || base.description,
    category: (translation.category as GuideCategory) || base.category,
    heroStat: translation.heroStat || base.heroStat,
    keyTakeaways: translation.keyTakeaways || base.keyTakeaways,
    comparisonTable: translation.comparisonTable || base.comparisonTable,
    sections: translation.sections || base.sections,
    faqs: translation.faqs || base.faqs,
  };
}
