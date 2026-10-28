'use client';

import React, { useEffect, useState } from 'react';
import { LOCALE_METAS, Locale, isValidLocale } from '@/lib/i18n/config';
import { useTranslation } from '@/lib/i18n/context';

const DISMISS_KEY = 'locale-suggestion-dismissed';

function readSavedLocale(): Locale | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(/(?:^|; )NEXT_LOCALE=([^;]+)/);
  const value = match?.[1] ? decodeURIComponent(match[1]) : '';
  if (!isValidLocale(value) || value === 'en') return null;
  return value;
}

/**
 * Offers a saved language on the English homepage without redirecting `/`.
 * The English URL stays the canonical for crawlers and for visitors who decline.
 */
export default function LocaleSuggestion() {
  const { locale, switchLanguage } = useTranslation();
  const [saved, setSaved] = useState<Locale | null>(null);

  useEffect(() => {
    if (locale !== 'en') return;
    try {
      if (sessionStorage.getItem(DISMISS_KEY) === '1') return;
    } catch {
      // sessionStorage can throw in private browsing; still offer the switch.
    }
    setSaved(readSavedLocale());
  }, [locale]);

  if (!saved) return null;

  const name = LOCALE_METAS[saved].name;

  function dismiss() {
    try {
      sessionStorage.setItem(DISMISS_KEY, '1');
    } catch {
      // Ignore storage failures; hiding the banner is enough for this view.
    }
    setSaved(null);
  }

  return (
    <div
      role="region"
      aria-label={`Continue in ${name}`}
      className="border-b border-sky-200 bg-sky-50 text-sky-950 dark:border-sky-900 dark:bg-sky-950/60 dark:text-sky-100"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2.5 sm:px-6 lg:px-8">
        <p className="text-sm">
          You previously chose {name}. This page stays in English.
        </p>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => switchLanguage(saved)}
            className="rounded-full bg-sky-700 px-3 py-1.5 text-xs font-bold text-white transition-colors hover:bg-sky-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          >
            Continue in {name}
          </button>
          <button
            type="button"
            onClick={dismiss}
            className="text-xs font-semibold text-sky-800 underline-offset-2 hover:underline dark:text-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded"
          >
            Stay in English
          </button>
        </div>
      </div>
    </div>
  );
}
