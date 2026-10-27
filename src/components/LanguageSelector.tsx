'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { LOCALES, LOCALE_METAS } from '@/lib/i18n/config';
import { useTranslation } from '@/lib/i18n/context';

interface LanguageSelectorProps {
  className?: string;
  variant?: 'header' | 'mobile';
}

export default function LanguageSelector({
  className = '',
  variant = 'header',
}: LanguageSelectorProps) {
  const { locale, switchLanguage, dict } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentMeta = LOCALE_METAS[locale] || LOCALE_METAS.en;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (variant === 'mobile') {
    return (
      <div className={`space-y-2 ${className}`}>
        <div className="flex items-center gap-2 px-3 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          <Globe className="w-3.5 h-3.5" aria-hidden="true" />
          <span>{dict.common.selectLanguage}</span>
        </div>
        <div className="grid grid-cols-2 gap-1.5 px-1 max-h-72 overflow-y-auto">
          {LOCALES.map((code) => {
            const meta = LOCALE_METAS[code];
            const isSelected = code === locale;
            return (
              <button
                key={code}
                type="button"
                onClick={() => switchLanguage(code)}
                className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-sky-50 dark:bg-sky-950/70 border border-sky-300 dark:border-sky-700 text-sky-900 dark:text-sky-200 font-bold shadow-2xs'
                    : 'bg-white/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
                aria-label={`Switch to ${meta.englishName}`}
              >
                <span className="flex items-center gap-1.5 truncate">
                  <span className="text-sm" aria-hidden="true">
                    {meta.flag}
                  </span>
                  <span className="truncate">{meta.name}</span>
                </span>
                {isSelected && (
                  <Check
                    className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0 ml-1"
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div ref={dropdownRef} className={`relative inline-block text-left ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-all active:scale-[0.97] shadow-2xs focus:outline-hidden focus:ring-2 focus:ring-sky-500/30 cursor-pointer"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={dict.common.selectLanguage}
      >
        <span className="text-sm leading-none" aria-hidden="true">
          {currentMeta.flag}
        </span>
        <span className="font-semibold text-slate-800 dark:text-slate-200 tracking-wide uppercase font-mono text-[11px]">
          {currentMeta.code}
        </span>
        <ChevronDown
          className={`w-3 h-3 text-slate-400 dark:text-slate-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-orientation="vertical"
          className="absolute right-0 mt-1.5 w-60 max-h-[75vh] overflow-y-auto rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-xl z-50 p-1.5 space-y-0.5 animate-dropdown"
        >
          <div className="sticky top-0 bg-white/95 dark:bg-slate-900/95 px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800/80 mb-1 z-10 backdrop-blur-md">
            {dict.common.selectLanguage}
          </div>
          {LOCALES.map((code) => {
            const meta = LOCALE_METAS[code];
            const isSelected = code === locale;
            return (
              <button
                key={code}
                type="button"
                role="menuitem"
                onClick={() => {
                  switchLanguage(code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs transition-colors ${
                  isSelected
                    ? 'bg-sky-50 dark:bg-sky-950/60 text-sky-900 dark:text-sky-200 font-bold'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100/80 dark:hover:bg-slate-800/60 font-medium'
                }`}
              >
                <span className="flex items-center gap-2 truncate">
                  <span className="text-base" aria-hidden="true">
                    {meta.flag}
                  </span>
                  <span className="truncate">{meta.name}</span>
                  {meta.name !== meta.englishName && (
                    <span className="text-[10px] text-slate-400 dark:text-slate-500">
                      ({meta.englishName})
                    </span>
                  )}
                </span>
                {isSelected && (
                  <Check
                    className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0"
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
