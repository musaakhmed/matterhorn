'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from './Header';
import ViewpointSwitcher, { ViewpointPlace } from './ViewpointSwitcher';
import HowThisScoreWorks from './HowThisScoreWorks';
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
import { getViewpointScoreMap, VIEWPOINT_PAGES } from '@/lib/viewpoints';
import { Info, BookOpen, ArrowUpRight, Camera, MountainSnow, TrainFront } from 'lucide-react';
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

  const scoreMap = getViewpointScoreMap(initialData);
  const placeCopy: Record<
    (typeof VIEWPOINT_PAGES)[number]['slug'],
    { name: string; face: string; transport: string }
  > = {
    gornergrat: {
      name: dict.navigation.gornergratTitle,
      face: dict.navigation.gornergratAspect,
      transport: dict.navigation.gornergratTransport,
    },
    'glacier-paradise': {
      name: dict.navigation.glacierTitle,
      face: dict.navigation.glacierAspect,
      transport: dict.navigation.glacierTransport,
    },
    sunnegga: {
      name: dict.navigation.sunneggaPlaceTitle,
      face: dict.navigation.sunneggaFace,
      transport: dict.navigation.sunneggaTransport,
    },
    riffelsee: {
      name: dict.navigation.riffelseeTitle,
      face: dict.navigation.riffelseeFace,
      transport: dict.navigation.riffelseeTransport,
    },
    'zermatt-village': {
      name: dict.navigation.zermattVillageTitle || 'Zermatt Village',
      face: dict.navigation.zermattVillageAspect || dict.navigation.villageTransport,
      transport: dict.navigation.villageTransport,
    },
  };
  const places: ViewpointPlace[] = VIEWPOINT_PAGES.map((page) => {
    const copy = placeCopy[page.slug];
    const score = scoreMap[page.slug];
    const modeled = page.slug === 'gornergrat' || page.slug === 'glacier-paradise';
    return {
      slug: page.slug,
      name: copy.name,
      face: copy.face,
      transport: copy.transport,
      score: score.score,
      color: score.color,
      borrowed: page.telemetryKey === 'gornergrat' && page.slug !== 'gornergrat',
      mode: modeled ? 'switch' : 'link',
      viewpointId: page.telemetryKey,
    };
  });
  const webcamId = activeViewpointId === 'glacier-paradise' ? 'trockener-steg' : 'gornergrat';

  return (
    <>
      <Header
        initialSwissTime={initialData.swissTimeFormatted}
        activeViewpoint={activeData.viewpoint}
        activeScore={activeData.currentScore}
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
        <HeroStatus data={activeData} />

        <ViewpointSwitcher
          places={places}
          activeId={activeViewpointId}
          onChange={setActiveViewpointId}
        />

        <LiveWebcam key={webcamId} defaultCamId={webcamId} />

        <ContingencyCard
          currentScore={activeData.currentScore}
          morningScore={activeData.today.morning.score}
          afternoonScore={activeData.today.afternoon.score}
          viewpointLabel={activeData.viewpoint.shortLabel}
        />

        <nav aria-label={dict.homeStatus.webcam} className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          <a
            href="#webcams"
            className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-sky-800 hover:text-sky-950 dark:text-sky-300 dark:hover:text-sky-100"
          >
            <Camera className="w-4 h-4" aria-hidden="true" />
            <span>{dict.homeStatus.webcam}</span>
          </a>
          <Link
            href={getLocalizedHref('/ski', locale)}
            className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-sky-800 hover:text-sky-950 dark:text-sky-300 dark:hover:text-sky-100"
          >
            <MountainSnow className="w-4 h-4" aria-hidden="true" />
            <span>
              {dict.homeStatus.cervinia}: {borderStatus.status.toLowerCase()}
            </span>
          </Link>
          <Link
            href={getLocalizedHref('/trains', locale)}
            className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-sky-800 hover:text-sky-950 dark:text-sky-300 dark:hover:text-sky-100"
          >
            <TrainFront className="w-4 h-4" aria-hidden="true" />
            <span>
              {trainsLive.glacierExpress.isOperating
                ? dict.homeStatus.trainsRunning
                : dict.homeStatus.trainsPaused}
            </span>
          </Link>
        </nav>

        <HourlyTimeline
          days={activeData.days}
          viewpointLabel={activeData.viewpoint.shortLabel}
        />

        {/* 6. Tactical Zermatt Sector Guide (Gornergrat vs Glacier Paradise vs Sunnegga) */}
        <ViewpointAdvice viewpoints={activeData.sectorRecommendations} />

        {/* 7. Iconic Mountain Trains: Gornergrat & Glacier Express (Live Conditions & Passes) */}
        <ScenicTrainsCard initialData={initialData} />

        {/* 8. Atmospheric Layer Diagnostics (4-Card Telemetry Grid) */}
        <MetricsGrid
          metrics={activeData.metrics}
          viewpointLabel={activeData.viewpoint.shortLabel}
        />

        <HowThisScoreWorks>
        <section
          aria-label="Visibility Scoring Methodology"
          className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-5"
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

            <div className="shrink-0 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 p-3.5 font-mono text-xs text-slate-800 dark:text-slate-200 space-y-1">
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
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                      {localizedTier.caption}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <HistoricalTable />
        </HowThisScoreWorks>

        <section aria-label={dict.guidesPromo.title}>
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
        </section>

        <FaqSection
          faqs={dashboardFaqs}
          groupName="dashboard-faq"
          badgeLabel={dict.faq.badge}
        />
      </main>

      <Footer />
    </>
  );
}
