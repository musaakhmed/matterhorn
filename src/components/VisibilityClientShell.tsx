'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from './Header';
import ViewpointSwitcher from './ViewpointSwitcher';
import HeroStatus from './HeroStatus';
import ContingencyCard from './ContingencyCard';
import HourlyTimeline from './HourlyTimeline';
import MetricsGrid from './MetricsGrid';
import LiveWebcam from './LiveWebcam';
import HistoricalTable from './HistoricalTable';
import ViewpointAdvice from './ViewpointAdvice';
import FaqSection from './FaqSection';
import VisibilityIcon, { VISIBILITY_SCALE_TIERS } from './VisibilityIcon';
import { ViewpointId, VisibilityApiResponse } from '@/lib/types';
import { getDashboardFaqs } from '@/lib/schema';
import { Activity, Info, BookOpen, ArrowUpRight, Code2 } from 'lucide-react';
import logoImg from '../../public/logo.jpeg';

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
  const dashboardFaqs = getDashboardFaqs(initialData);

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
        activeBadgeColor={activeData.currentBadgeColor}
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

        {/* 9. Meteorological Scoring Formula & Visual Scale Reference Card */}
        <section
          aria-label="Visibility Scoring Methodology"
          className="rounded-2xl border border-slate-200/90 bg-white/85 p-5 sm:p-6 text-xs sm:text-sm text-slate-600 shadow-2xs space-y-5"
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
                , averaging 6-hour Morning (06:00–12:00) and Afternoon (12:00–18:00) blocks mapped to a 1–10 index.{' '}
                <Link
                  href="/guides/matterhorn-banner-cloud-fohn-wind"
                  className="inline-flex items-center gap-1 font-bold text-sky-700 hover:text-sky-900 underline underline-offset-4"
                >
                  <span>Why the Matterhorn gets a banner cloud</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
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

          {/* 4-Tier Visual Icon Scale Reference */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-4 border-t border-slate-200/80">
            {VISIBILITY_SCALE_TIERS.map((tier) => (
              <div
                key={tier.status}
                className="flex items-center gap-3 rounded-xl bg-slate-50/90 border border-slate-200/80 p-3"
              >
                <VisibilityIcon badgeColor={tier.badgeColor} size="lg" />
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-xs font-extrabold text-slate-900">
                      {tier.scoreRange}/10
                    </span>
                    <span className="text-xs font-bold text-slate-800 truncate">
                      • {tier.status}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 truncate mt-0.5">
                    {tier.shortCaption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 10. Frequently Asked Questions (FAQPage Schema-Backed Accordion) */}
        <FaqSection
          faqs={dashboardFaqs}
          groupName="dashboard-faq"
          badgeLabel="FAQPage Schema • Live Telemetry Indexed"
        />

        {/* 11. Alpine Field Guides & Live Status Widget Quick-Access Strip */}
        <section
          aria-label="Zermatt Field Guides and Embeddable Live Status Widget"
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="rounded-2xl border border-slate-200/90 bg-gradient-to-r from-sky-50/80 via-white to-slate-50/90 p-5 sm:p-6 shadow-2xs flex flex-col justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-slate-900 font-extrabold text-sm sm:text-base">
                <BookOpen className="w-4 h-4 text-sky-600 shrink-0" aria-hidden="true" />
                <span>Planning a Zermatt Excursion? Read Our Field Guides</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Deep-dive guides on Gornergrat vs. Glacier Paradise tickets, sunrise reflection lakes, 30-year monthly clarity, and rainy-day backup plans.
              </p>
            </div>

            <div>
              <Link
                href="/guides"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-sky-700 text-white text-xs font-bold shadow-xs transition-colors"
              >
                <span>Browse All 6 Field Guides</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-sky-200/90 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950 text-white p-5 sm:p-6 shadow-2xs flex flex-col justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 font-extrabold text-sm sm:text-base text-white">
                <Code2 className="w-4 h-4 text-sky-400 shrink-0" aria-hidden="true" />
                <span>Publish Live Matterhorn Status on Your Website</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                Embed our free, auto-updating 1–10 Matterhorn Visibility Widget on any blog, travel guide, community portal, or website in EN, DE, or FR.
              </p>
            </div>

            <div>
              <Link
                href="/widget"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-extrabold shadow-xs transition-colors"
              >
                <span>Customize &amp; Embed Live Widget</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/90 py-6 px-4 sm:px-6 text-xs text-slate-600">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 font-medium text-slate-700">
            <span className="relative inline-flex items-center justify-center overflow-hidden shrink-0 w-6 h-6 rounded-[20%] bg-slate-800 ring-1 ring-slate-900/15 shadow-2xs select-none">
              <Image
                src={logoImg}
                alt="Is The Matterhorn Visible? logo"
                width={48}
                height={48}
                unoptimized
                className="w-full h-full object-cover pointer-events-none"
              />
            </span>
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
            <Link
              href="/widget"
              className="text-sky-700 hover:text-sky-900 font-semibold transition-colors underline underline-offset-4"
            >
              Embed Widget (/widget)
            </Link>
            <span>•</span>
            <Link
              href="/guides"
              className="text-sky-700 hover:text-sky-900 font-semibold transition-colors underline underline-offset-4"
            >
              Field Guides (/guides)
            </Link>
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
