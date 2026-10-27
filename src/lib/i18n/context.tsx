'use client';

import React, { createContext, useContext, useMemo, useEffect, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Locale, DEFAULT_LOCALE, LOCALE_METAS, switchLocalePath } from './config';
import { Dictionary } from './types';
import { dictionaries, getDictionary } from './dictionaries';

interface I18nContextValue {
  locale: Locale;
  dict: Dictionary;
  switchLanguage: (targetLocale: Locale) => void;
}

const I18nContext = createContext<I18nContextValue>({
  locale: DEFAULT_LOCALE,
  dict: dictionaries[DEFAULT_LOCALE],
  switchLanguage: () => {},
});

export interface I18nProviderProps {
  locale: Locale;
  dict?: Dictionary;
  children: React.ReactNode;
}

export function I18nProvider({ locale, dict, children }: I18nProviderProps) {
  const router = useRouter();
  const pathname = usePathname() || '/';

  const activeDict = useMemo(() => {
    return dict || getDictionary(locale);
  }, [dict, locale]);

  useEffect(() => {
    const meta = LOCALE_METAS[locale];
    if (meta?.htmlLang && typeof document !== 'undefined') {
      document.documentElement.lang = meta.htmlLang;
      document.documentElement.dir = meta.dir;
    }
  }, [locale]);

  const switchLanguage = useCallback((targetLocale: Locale) => {
    if (targetLocale === locale) return;
    if (typeof document !== 'undefined') {
      document.cookie = `NEXT_LOCALE=${targetLocale};path=/;max-age=31536000;SameSite=Lax`;
    }
    const targetPath = switchLocalePath(pathname, targetLocale);
    router.push(targetPath);
  }, [locale, pathname, router]);

  const value = useMemo(
    () => ({
      locale,
      dict: activeDict,
      switchLanguage,
    }),
    [locale, activeDict, switchLanguage]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) {
    return {
      locale: DEFAULT_LOCALE,
      dict: dictionaries[DEFAULT_LOCALE],
      switchLanguage: () => {},
    };
  }
  return context;
}
