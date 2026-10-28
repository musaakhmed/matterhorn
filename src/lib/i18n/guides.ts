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
import { ptGuides } from './guides/pt';

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
  pt: ptGuides,
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
