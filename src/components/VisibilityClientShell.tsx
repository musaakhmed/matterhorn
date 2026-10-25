'use client';

import React, { useState } from 'react';
import Header from './Header';
import ViewpointSwitcher from './ViewpointSwitcher';
import HeroStatus from './HeroStatus';
import ContingencyCard from './ContingencyCard';
import HourlyTimeline from './HourlyTimeline';
import MetricsGrid from './MetricsGrid';
import LiveWebcam from './LiveWebcam';
import HistoricalTable from './HistoricalTable';
import ViewpointAdvice from './ViewpointAdvice';
import { ViewpointId, VisibilityApiResponse } from '@/lib/types';
import { Activity, Info, ShieldCheck } from 'lucide-react';

interface VisibilityClientShellProps {
  initialData: VisibilityApiResponse;
}

export default function VisibilityClientShell({
  initialData,
}: VisibilityClientShellProps) {
  const [activeViewpointId, setActiveViewpointId] = useState<ViewpointId>(
    initialData.defaultViewpoint
  );

  const activeData = initialData.viewpoints[activeViewpointId];

  const viewpointsMap = {
    gornergrat: initialData.viewpoints.gornergrat.viewpoint,
    'glacier-paradise': initialData.viewpoints['glacier-paradise'].viewpoint,
  };

  const scoresMap = {
    gornergrat: {
      am: initialData.viewpoints.gornergrat.today.morning.score,
      pm: initialData.viewpoints.gornergrat.today.afternoon.score,
      active: initialData.viewpoints.gornergrat.currentScore,
    },
    'glacier-paradise': {
      am: initialData.viewpoints['glacier-paradise'].today.morning.score,
      pm: initialData.viewpoints['glacier-paradise'].today.afternoon.score,
      active: initialData.viewpoints['glacier-paradise'].currentScore,
    },
  };

  return (
    <>
      <Header
        initialSwissTime={initialData.swissTimeFormatted}
        activeViewpoint={activeData.viewpoint}
      />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8">
        {/* 1. Prominent Multi-Aspect Viewpoint Switcher */}
        <ViewpointSwitcher
          viewpoints={viewpointsMap}
          activeId={activeViewpointId}
          onChange={setActiveViewpointId}
          scores={scoresMap}
        />

        {/* 2. Hero Status Verdict Card (1–10 AM/PM Dual Index) */}
        <HeroStatus data={activeData} />

        {/* 3. Adaptive Low-Visibility Contingency Card (Triggers when score <= 4) */}
        <ContingencyCard
          currentScore={activeData.currentScore}
          morningScore={activeData.today.morning.score}
          afternoonScore={activeData.today.afternoon.score}
          viewpointLabel={activeData.viewpoint.shortLabel}
        />

        {/* 4. 10-Day Horizon Card Slider */}
        <HourlyTimeline
          days={activeData.days}
          viewpointLabel={activeData.viewpoint.shortLabel}
        />

        {/* 5. Atmospheric Layer Diagnostics (4-Card Grid) */}
        <MetricsGrid
          metrics={activeData.metrics}
          viewpointLabel={activeData.viewpoint.shortLabel}
        />

        {/* 6. Expanded Multi-Cam Grid + User Validation Micro-Poll */}
        <LiveWebcam />

        {/* 7. Historical "Visibility by Month" Statistical Table */}
        <HistoricalTable />

        {/* 8. Tactical Zermatt Sector Guide */}
        <ViewpointAdvice viewpoints={activeData.sectorRecommendations} />

        {/* 9. Meteorological Scoring Formula Reference Card */}
        <section
          aria-label="Visibility Scoring Methodology"
          className="rounded-2xl border border-slate-200/90 bg-white/85 p-5 sm:p-6 text-xs sm:text-sm text-slate-600 shadow-2xs"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="space-y-1.5 max-w-3xl">
              <div className="flex items-center gap-2 text-slate-900 font-extrabold">
                <Info className="w-4 h-4 text-sky-600 shrink-0" aria-hidden="true" />
                <span>High-Altitude 1–10 AM/PM Dual Scoring Engine</span>
              </div>
              <p className="leading-relaxed">
                Standard valley weather apps fail in Zermatt because they read conditions at 1,608m. Our engine queries atmospheric layers across both{' '}
                <strong className="text-slate-900">
                  Gornergrat (3,089m East)
                </strong>{' '}
                and{' '}
                <strong className="text-slate-900">
                  Glacier Paradise (3,883m South)
                </strong>
                , averaging 6-hour Morning (06:00–12:00) and Afternoon (12:00–18:00) blocks mapped to a 1–10 index.
              </p>
            </div>

            <div className="shrink-0 rounded-xl bg-slate-100 border border-slate-200 p-3.5 font-mono text-[11px] text-slate-800 space-y-1">
              <div className="text-sky-700 font-bold">
                Raw = 100 - (0.60·C_mid + 0.25·C_low + 0.15·C_high) - Penalties
              </div>
              <div className="text-slate-600">
                1–10 Index: 8–10 Visible • 6–7 Partially • 3–5 Barely • 1–2 Not Visible
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/90 py-6 px-4 sm:px-6 text-xs text-slate-600">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-medium text-slate-700">
            <ShieldCheck className="w-4 h-4 text-emerald-600" aria-hidden="true" />
            <span>
              isthematterhornvisible.com • Swiss Alpine Telemetry Utility
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 font-mono">
            <span className="inline-flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-sky-600" aria-hidden="true" />
              <span>ISR Cache: 15m • 10-Day Dual Aspect</span>
            </span>
            <span>•</span>
            <a
              href="/api/visibility"
              className="text-sky-700 hover:text-sky-900 font-semibold transition-colors underline underline-offset-4 cursor-pointer"
            >
              JSON API (/api/visibility)
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
