'use client';

import React from 'react';
import Link from 'next/link';
import { TrainFront, CableCar, Compass, Waves, ArrowUpRight } from 'lucide-react';
import { Viewpoint, ViewpointId } from '@/lib/types';

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
  const items: ViewpointId[] = ['gornergrat', 'glacier-paradise'];

  return (
    <section
      aria-label="Multi-Aspect Viewpoint Switcher"
      className="rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 p-3 sm:p-4 shadow-xs"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="p-2 rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300">
            <Compass className="w-4 h-4" aria-hidden="true" />
          </span>
          <div>
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Select Matterhorn Aspect &amp; Elevation
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Switch between East Face (Gornergrat 3,089m) and South Crest (Glacier Paradise 3,883m)
            </p>
          </div>
        </div>

        {/* Dual Segmented Toggle */}
        <div
          role="tablist"
          aria-label="Matterhorn Viewpoints"
          className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-slate-100/90 dark:bg-slate-800/80 p-1.5 rounded-xl border border-slate-200/80 dark:border-slate-700/80"
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
                className={`flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-lg text-left transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 ${
                  isSelected
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm border border-sky-500/40 ring-1 ring-sky-500/20'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-700/60 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  {id === 'gornergrat' ? (
                    <TrainFront
                      className={`w-4 h-4 shrink-0 ${
                        isSelected ? 'text-sky-600 dark:text-sky-400' : 'text-slate-500 dark:text-slate-400'
                      }`}
                      aria-hidden="true"
                    />
                  ) : (
                    <CableCar
                      className={`w-4 h-4 shrink-0 ${
                        isSelected ? 'text-sky-600 dark:text-sky-400' : 'text-slate-500 dark:text-slate-400'
                      }`}
                      aria-hidden="true"
                    />
                  )}
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm font-bold truncate">
                      {vp.shortLabel}
                    </div>
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 truncate">
                      {vp.elevation.toLocaleString()}m • {vp.aspect}
                    </div>
                  </div>
                </div>

                <span
                  className={`shrink-0 px-2.5 py-1 rounded-md font-mono text-xs font-extrabold border ${
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
      </div>

      {/* Direct Viewpoint Sub-Route Links Strip */}
      <div className="mt-3 pt-2.5 border-t border-slate-200/70 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
        <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
          Dedicated Viewpoint Pages:
        </span>
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href="/viewpoints/gornergrat"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 hover:border-sky-200 dark:hover:border-sky-600 text-slate-700 dark:text-slate-300 hover:text-sky-800 dark:hover:text-sky-300 font-semibold transition-colors"
          >
            <TrainFront className="w-3 h-3 text-sky-600 dark:text-sky-400" aria-hidden="true" />
            <span>Gornergrat (3,089m)</span>
            <ArrowUpRight className="w-3 h-3 text-slate-400 dark:text-slate-500" aria-hidden="true" />
          </Link>
          <Link
            href="/viewpoints/glacier-paradise"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 hover:border-sky-200 dark:hover:border-sky-600 text-slate-700 dark:text-slate-300 hover:text-sky-800 dark:hover:text-sky-300 font-semibold transition-colors"
          >
            <CableCar className="w-3 h-3 text-sky-600 dark:text-sky-400" aria-hidden="true" />
            <span>Glacier Paradise (3,883m)</span>
            <ArrowUpRight className="w-3 h-3 text-slate-400 dark:text-slate-500" aria-hidden="true" />
          </Link>
          <Link
            href="/viewpoints/sunnegga-riffelsee"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 hover:border-sky-200 dark:hover:border-sky-600 text-slate-700 dark:text-slate-300 hover:text-sky-800 dark:hover:text-sky-300 font-semibold transition-colors"
          >
            <Waves className="w-3 h-3 text-sky-600 dark:text-sky-400" aria-hidden="true" />
            <span>Riffelsee &amp; Sunnegga Reflection</span>
            <ArrowUpRight className="w-3 h-3 text-slate-400 dark:text-slate-500" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
