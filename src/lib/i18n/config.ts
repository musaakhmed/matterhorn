export const LOCALES = [
  'en',
  'de',
  'es',
  'fr',
  'it',
  'ko',
  'ja',
  'zh',
  'zh-tw',
] as const;

/** Former locale prefixes that only translated the UI. Redirected to English. */
export const RETIRED_LOCALES = [
  'az',
  'id',
  'pt',
  'tr',
  'ru',
  'ar',
  'hi',
  'th',
] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

export interface LocaleMeta {
  code: Locale;
  name: string;
  englishName: string;
  flag: string;
  htmlLang: string;
  dir: 'ltr' | 'rtl';
}

export const LOCALE_METAS: Record<Locale, LocaleMeta> = {
  en: {
    code: 'en',
    name: 'English',
    englishName: 'English',
    flag: '🇬🇧',
    htmlLang: 'en',
    dir: 'ltr',
  },
  de: {
    code: 'de',
    name: 'Deutsch',
    englishName: 'German',
    flag: '🇩🇪',
    htmlLang: 'de',
    dir: 'ltr',
  },
  es: {
    code: 'es',
    name: 'Español',
    englishName: 'Spanish',
    flag: '🇪🇸',
    htmlLang: 'es',
    dir: 'ltr',
  },
  fr: {
    code: 'fr',
    name: 'Français',
    englishName: 'French',
    flag: '🇫🇷',
    htmlLang: 'fr',
    dir: 'ltr',
  },
  it: {
    code: 'it',
    name: 'Italiano',
    englishName: 'Italian',
    flag: '🇮🇹',
    htmlLang: 'it',
    dir: 'ltr',
  },
  ko: {
    code: 'ko',
    name: '한국어',
    englishName: 'Korean',
    flag: '🇰🇷',
    htmlLang: 'ko',
    dir: 'ltr',
  },
  ja: {
    code: 'ja',
    name: '日本語',
    englishName: 'Japanese',
    flag: '🇯🇵',
    htmlLang: 'ja',
    dir: 'ltr',
  },
  zh: {
    code: 'zh',
    name: '简体中文',
    englishName: 'Simplified Chinese',
    flag: '🇨🇳',
    htmlLang: 'zh-CN',
    dir: 'ltr',
  },
  'zh-tw': {
    code: 'zh-tw',
    name: '繁體中文',
    englishName: 'Traditional Chinese',
    flag: '🇹🇼',
    htmlLang: 'zh-TW',
    dir: 'ltr',
  },
};

export function isValidLocale(locale: string): locale is Locale {
  return (LOCALES as readonly string[]).includes(locale);
}

/**
 * Strips any supported locale prefix from a pathname.
 * Returns the detected locale (or default 'en') and the cleaned path.
 */
export function stripLocaleFromPath(pathname: string): {
  locale: Locale;
  pathWithoutLocale: string;
} {
  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const segments = normalized.split('/');
  const maybeLocale = segments[1];

  if (isValidLocale(maybeLocale)) {
    const rest = '/' + segments.slice(2).join('/');
    return {
      locale: maybeLocale,
      pathWithoutLocale: rest.replace(/\/+$/, '') || '/',
    };
  }

  return {
    locale: DEFAULT_LOCALE,
    pathWithoutLocale: normalized.replace(/\/+$/, '') || '/',
  };
}

/**
 * Generates the localized href according to the clean default rule:
 * - Default 'en' uses clean paths without prefix: e.g. '/', '/viewpoints'
 * - Non-default locales prefix the path: e.g. '/fr', '/de/viewpoints', '/ja'
 */
export function getLocalizedHref(path: string, locale: Locale): string {
  const { pathWithoutLocale } = stripLocaleFromPath(path);
  const cleanPath = pathWithoutLocale === '/' ? '' : pathWithoutLocale;

  if (locale === DEFAULT_LOCALE) {
    return cleanPath || '/';
  }

  return `/${locale}${cleanPath}`;
}

/**
 * Computes the target URL when switching languages from the current pathname.
 */
export function switchLocalePath(currentPathname: string, targetLocale: Locale): string {
  const { pathWithoutLocale } = stripLocaleFromPath(currentPathname);
  return getLocalizedHref(pathWithoutLocale, targetLocale);
}

const BASE_URL = 'https://isthematterhornvisible.com';

/**
 * Generates SEO alternate link tags (hreflang) and canonical URL for all supported locales.
 */
export function getAlternateUrls(
  path: string,
  currentLocale?: Locale
): {
  canonical: string;
  languages: Record<string, string>;
} {
  const { locale: detectedLocale, pathWithoutLocale } = stripLocaleFromPath(path);
  const activeLocale = currentLocale ?? detectedLocale;
  const cleanPath = pathWithoutLocale === '/' ? '' : pathWithoutLocale;

  const languages: Record<string, string> = {
    'x-default': `${BASE_URL}${cleanPath || '/'}`,
  };

  for (const loc of LOCALES) {
    const hreflangCode = LOCALE_METAS[loc]?.htmlLang || loc;
    languages[hreflangCode] =
      loc === DEFAULT_LOCALE
        ? `${BASE_URL}${cleanPath || '/'}`
        : `${BASE_URL}/${loc}${cleanPath}`;
  }

  const canonical =
    activeLocale === DEFAULT_LOCALE
      ? `${BASE_URL}${cleanPath || '/'}`
      : `${BASE_URL}/${activeLocale}${cleanPath}`;

  return {
    canonical,
    languages,
  };
}
