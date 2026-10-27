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
import ScenicTrainsCard from './ScenicTrainsCard';
import FaqSection from './FaqSection';
import Footer from './Footer';
import VisibilityIcon, { VISIBILITY_SCALE_TIERS } from './VisibilityIcon';
import { ViewpointId, VisibilityApiResponse } from '@/lib/types';
import { getDashboardFaqs } from '@/lib/schema';
import { getViewpointScoreMap } from '@/lib/viewpoints';
import { Activity, Info, BookOpen, ArrowUpRight, Code2, Camera, MountainSnow, TrainFront } from 'lucide-react';
import { useTranslation } from '@/lib/i18n/context';
import { getLocalizedHref } from '@/lib/i18n/config';
import { evaluateCrossBorderLink } from '@/lib/ski';
import { getTrainsLiveStatus } from '@/lib/trains';

interface VisibilityClientShellProps {
  initialData: VisibilityApiResponse;
}

export default function VisibilityClientShell({
  initialData,
}: VisibilityClientShellProps) {
  const { dict, locale } = useTranslation();
  const [activeViewpointId, setActiveViewpointId] = useState<ViewpointId>(
    initialData.defaultViewpoint
  );

  const activeData = initialData.viewpoints[activeViewpointId];
  const dashboardFaqs = getDashboardFaqs(initialData);
  const borderStatus = evaluateCrossBorderLink(initialData);
  const trainsLive = getTrainsLiveStatus(initialData);

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
        telemetrySummary={{
          gornergratScore: initialData.viewpoints.gornergrat.currentScore,
          gornergratBadge: initialData.viewpoints.gornergrat.currentBadgeColor,
          gornergratStatus: initialData.viewpoints.gornergrat.currentStatus,
          glacierScore: initialData.viewpoints['glacier-paradise'].currentScore,
          glacierBadge: initialData.viewpoints['glacier-paradise'].currentBadgeColor,
          glacierStatus: initialData.viewpoints['glacier-paradise'].currentStatus,
          viewpointScores: getViewpointScoreMap(initialData),
        }}
      />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6 sm:space-y-8">
        <h1 className="sr-only">{dict.common.siteTagline}</h1>

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

        <section aria-label="Today in Zermatt" className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="#webcams"
            className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-5 shadow-2xs hover:border-sky-400 dark:hover:border-sky-600 transition-colors"
          >
            <div className="flex items-center gap-2 text-sky-700 dark:text-sky-400">
              <Camera className="w-4 h-4" aria-hidden="true" />
              <span className="text-xs font-mono uppercase tracking-wider font-bold">Webcam</span>
            </div>
            <h2 className="mt-2 text-lg font-extrabold text-slate-950 dark:text-white">Gornergrat is live</h2>
            <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              The Gornergrat webcam is on this page. Trockener Steg is the Klein Matterhorn view in the same block.
            </p>
          </a>
          <Link
            href={getLocalizedHref('/ski', locale)}
            className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-5 shadow-2xs hover:border-sky-400 dark:hover:border-sky-600 transition-colors"
          >
            <div className="flex items-center gap-2 text-sky-700 dark:text-sky-400">
              <MountainSnow className="w-4 h-4" aria-hidden="true" />
              <span className="text-xs font-mono uppercase tracking-wider font-bold">Ski report</span>
            </div>
            <h2 className="mt-2 text-lg font-extrabold text-slate-950 dark:text-white">
              Cervinia link {borderStatus.status.toLowerCase()}
            </h2>
            <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Plateau Rosa wind is {borderStatus.plateauRosaWindKmh} km/h. Open the Zermatt ski report for snow, season, and lifts.
            </p>
          </Link>
          <Link
            href={getLocalizedHref('/trains', locale)}
            className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-5 shadow-2xs hover:border-sky-400 dark:hover:border-sky-600 transition-colors"
          >
            <div className="flex items-center gap-2 text-sky-700 dark:text-sky-400">
              <TrainFront className="w-4 h-4" aria-hidden="true" />
              <span className="text-xs font-mono uppercase tracking-wider font-bold">Trains</span>
            </div>
            <h2 className="mt-2 text-lg font-extrabold text-slate-950 dark:text-white">
              {trainsLive.glacierExpress.isOperating ? 'Glacier Express is running' : 'Glacier Express is paused'}
            </h2>
            <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Gornergrat scores {trainsLive.gornergrat.score}/10 today. {trainsLive.glacierExpress.operatingStatusLabel}
            </p>
          </Link>
        </section>

        {/* 4. 10-Day Horizon Card Slider */}
        <HourlyTimeline
          days={activeData.days}
          viewpointLabel={activeData.viewpoint.shortLabel}
        />

        {/* 5. Expanded Multi-Cam Grid + User Validation Micro-Poll */}
        <LiveWebcam />

        {/* 6. Tactical Zermatt Sector Guide (Gornergrat vs Glacier Paradise vs Sunnegga) */}
        <ViewpointAdvice viewpoints={activeData.sectorRecommendations} />

        {/* 7. Iconic Mountain Trains: Gornergrat & Glacier Express (Live Conditions & Passes) */}
        <ScenicTrainsCard initialData={initialData} />

        {/* 8. Atmospheric Layer Diagnostics (4-Card Telemetry Grid) */}
        <MetricsGrid
          metrics={activeData.metrics}
          viewpointLabel={activeData.viewpoint.shortLabel}
        />

        {/* 9. Historical "Visibility by Month" Statistical Table */}
        <HistoricalTable />

        {/* 9. Meteorological Scoring Formula & Visual Scale Reference Card */}
        <section
          aria-label="Visibility Scoring Methodology"
          className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/85 dark:bg-slate-900/85 p-5 sm:p-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300 shadow-2xs space-y-5"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="space-y-1.5 max-w-3xl">
              <div className="flex items-center gap-2 text-slate-900 dark:text-white font-extrabold">
                <Info className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" aria-hidden="true" />
                <span>{dict.scoring.title}</span>
              </div>
              <p className="leading-relaxed">
                {dict.scoring.description}{' '}
                <Link
                  href={getLocalizedHref('/guides/matterhorn-banner-cloud-fohn-wind', locale)}
                  className="inline-flex items-center gap-1 font-bold text-sky-700 dark:text-sky-400 hover:text-sky-900 dark:hover:text-sky-300 underline underline-offset-4"
                >
                  <span>{dict.scoring.bannerCloudLink}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </p>
            </div>

            <div className="shrink-0 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 p-3.5 font-mono text-[11px] text-slate-800 dark:text-slate-200 space-y-1">
              <div className="text-sky-700 dark:text-sky-400 font-bold">
                Raw = 100 - (0.60·C_mid + 0.25·C_low + 0.15·C_high) - Penalties
              </div>
              <div className="text-slate-600 dark:text-slate-400">
                1–10 Index: 8–10 {dict.hero.statuses.visible} • 6–7 {dict.hero.statuses.partiallyVisible} • 3–5 {dict.hero.statuses.barelyVisible} • 1–2 {dict.hero.statuses.notVisible}
              </div>
            </div>
          </div>

          {/* 4-Tier Visual Icon Scale Reference */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-4 border-t border-slate-200/80 dark:border-slate-800">
            {VISIBILITY_SCALE_TIERS.map((tier) => {
              const tierKey =
                tier.badgeColor === 'emerald'
                  ? 'crisp'
                  : tier.badgeColor === 'amber'
                  ? 'partial'
                  : tier.badgeColor === 'orange'
                  ? 'barely'
                  : 'sockedIn';
              const localizedTier = dict.scoring.tiers[tierKey];

              return (
                <div
                  key={tier.status}
                  className="flex items-center gap-3 rounded-xl bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 p-3"
                >
                  <VisibilityIcon badgeColor={tier.badgeColor} size="lg" />
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-xs font-extrabold text-slate-900 dark:text-white">
                        {localizedTier.range}/10
                      </span>
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                        • {localizedTier.label}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 truncate mt-0.5">
                      {localizedTier.caption}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 10. Frequently Asked Questions (FAQPage Schema-Backed Accordion) */}
        <FaqSection
          faqs={dashboardFaqs}
          groupName="dashboard-faq"
          badgeLabel={dict.faq.badge}
        />

        {/* 11. Alpine Field Guides & Live Status Widget Quick-Access Strip */}
        <section
          aria-label="Zermatt Field Guides and Embeddable Live Status Widget"
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-gradient-to-r from-sky-50/80 via-white to-slate-50/90 dark:from-sky-950/40 dark:via-slate-900/90 dark:to-slate-900/90 p-5 sm:p-6 shadow-2xs flex flex-col justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-slate-900 dark:text-white font-extrabold text-sm sm:text-base">
                <BookOpen className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" aria-hidden="true" />
                <span>{dict.guidesPromo.title}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                {dict.guidesPromo.desc}
              </p>
            </div>

            <div>
              <Link
                href={getLocalizedHref('/guides', locale)}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-sky-700 dark:bg-sky-600 dark:hover:bg-sky-500 text-white text-xs font-bold shadow-xs transition-colors"
              >
                <span>{dict.guidesPromo.cta}</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-sky-200/90 dark:border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950 text-white p-5 sm:p-6 shadow-2xs flex flex-col justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 font-extrabold text-sm sm:text-base text-white">
                <Code2 className="w-4 h-4 text-sky-400 shrink-0" aria-hidden="true" />
                <span>{dict.widgetPromo.title}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                {dict.widgetPromo.desc}
              </p>
            </div>

            <div>
              <Link
                href={getLocalizedHref('/widget', locale)}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-extrabold shadow-xs transition-colors"
              >
                <span>{dict.widgetPromo.cta}</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
