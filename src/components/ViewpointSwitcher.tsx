'use client';

import React from 'react';
import Link from 'next/link';
import { TrainFront, CableCar, Compass, ArrowUpRight } from 'lucide-react';
import { Viewpoint, ViewpointId } from '@/lib/types';
import { useTranslation } from '@/lib/i18n/context';
import { getLocalizedHref } from '@/lib/i18n/config';

interface ViewpointSwitcherProps {
  viewpoints: Record<ViewpointId, Viewpoint>;
  activeId: ViewpointId;
  onChange: (id: ViewpointId) => void;
  scores: Record<ViewpointId, { am: number; pm: number; active: number }>;
}

export default function ViewpointSwitcher({
  viewpoints,
  activeId,
  onChange,
  scores,
}: ViewpointSwitcherProps) {
  const { dict, locale } = useTranslation();
  const items: ViewpointId[] = ['gornergrat', 'glacier-paradise'];

  return (
    <section
      aria-label="Multi-Aspect Viewpoint Switcher"
      className="rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 p-2 sm:p-2.5 shadow-2xs"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2.5">
        <div className="flex items-center justify-between md:justify-start gap-2.5 px-1">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300">
              <Compass className="w-3.5 h-3.5" aria-hidden="true" />
            </span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
              {dict.viewpointSwitcher.title}
            </span>
          </div>

          <Link
            href={getLocalizedHref('/viewpoints', locale)}
            className="md:hidden inline-flex items-center gap-1 text-[11px] font-semibold text-sky-700 dark:text-sky-400 hover:underline"
          >
            <span>{dict.common.allViewpoints}</span>
            <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
          </Link>
        </div>

        {/* Dual Segmented Toggle */}
        <div className="flex items-center gap-2">
          <div
            role="tablist"
            aria-label="Matterhorn Viewpoints"
            className="grid grid-cols-2 gap-1.5 bg-slate-100/90 dark:bg-slate-800/80 p-1 rounded-xl border border-slate-200/80 dark:border-slate-700/80 flex-1 md:flex-none"
          >
            {items.map((id) => {
              const vp = viewpoints[id];
              const isSelected = activeId === id;
              const sc = scores[id];

              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => onChange(id)}
                  className={`group flex items-center justify-between gap-2.5 px-3 py-2 rounded-lg text-left transition-all duration-150 active:scale-[0.98] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 ${
                    isSelected
                      ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-2xs border border-sky-500/40 ring-1 ring-sky-500/20'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-700/60 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    {id === 'gornergrat' ? (
                      <TrainFront
                        className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover:scale-105 ${
                          isSelected ? 'text-sky-600 dark:text-sky-400' : 'text-slate-400'
                        }`}
                        aria-hidden="true"
                      />
                    ) : (
                      <CableCar
                        className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover:scale-105 ${
                          isSelected ? 'text-sky-600 dark:text-sky-400' : 'text-slate-400'
                        }`}
                        aria-hidden="true"
                      />
                    )}
                    <div className="min-w-0">
                      <div className="text-xs font-bold truncate">
                        {vp.shortLabel}
                      </div>
                      <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 truncate hidden sm:block">
                        {vp.elevation.toLocaleString()}m • {vp.aspect}
                      </div>
                    </div>
                  </div>

                  <span
                    className={`shrink-0 px-2 py-0.5 rounded font-mono text-[11px] font-extrabold border ${
                      isSelected
                        ? 'bg-sky-50 dark:bg-sky-950/80 border-sky-200 dark:border-sky-800 text-sky-800 dark:text-sky-300'
                        : 'bg-slate-200/70 dark:bg-slate-800 border-slate-300/80 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {sc.active}/10
                  </span>
                </button>
              );
            })}
          </div>

          <Link
            href={getLocalizedHref('/viewpoints', locale)}
            className="hidden md:inline-flex items-center gap-1 px-2.5 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors shrink-0"
          >
            <span>{dict.common.allViewpoints}</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
