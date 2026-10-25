'use client';

import React from 'react';
import { TrainFront, CableCar, Compass } from 'lucide-react';
import { Viewpoint, ViewpointId } from '@/lib/types';
import VisibilityIcon from './VisibilityIcon';

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
      className="rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 p-3 sm:p-4 shadow-xs"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="p-2 rounded-xl bg-sky-50 border border-sky-200 text-sky-700">
            <Compass className="w-4 h-4" aria-hidden="true" />
          </span>
          <div>
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900">
              Select Matterhorn Aspect &amp; Elevation
            </h2>
            <p className="text-xs text-slate-600">
              Switch between East Face (Gornergrat 3,089m) and South Crest (Glacier Paradise 3,883m)
            </p>
          </div>
        </div>

        {/* Dual Segmented Toggle */}
        <div
          role="tablist"
          aria-label="Matterhorn Viewpoints"
          className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-slate-100/90 p-1.5 rounded-xl border border-slate-200/80"
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
                    ? 'bg-white text-slate-900 shadow-sm border border-sky-500/40 ring-1 ring-sky-500/20'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  {id === 'gornergrat' ? (
                    <TrainFront
                      className={`w-4 h-4 shrink-0 ${
                        isSelected ? 'text-sky-600' : 'text-slate-500'
                      }`}
                      aria-hidden="true"
                    />
                  ) : (
                    <CableCar
                      className={`w-4 h-4 shrink-0 ${
                        isSelected ? 'text-sky-600' : 'text-slate-500'
                      }`}
                      aria-hidden="true"
                    />
                  )}
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm font-bold truncate">
                      {vp.shortLabel}
                    </div>
                    <div className="text-[11px] font-mono text-slate-500 truncate">
                      {vp.elevation.toLocaleString()}m • {vp.aspect}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <VisibilityIcon score={sc.active} size="sm" />
                  <span
                    className={`px-2 py-0.5 rounded-md font-mono text-xs font-extrabold border ${
                      isSelected
                        ? 'bg-sky-50 border-sky-200 text-sky-800'
                        : 'bg-slate-200/70 border-slate-300/80 text-slate-700'
                    }`}
                  >
                    {sc.active}/10
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
