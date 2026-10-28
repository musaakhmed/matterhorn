import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ChevronRight,
  Compass,
  MapPin,
  TrainFront,
  CableCar,
  Clock,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Waves,
  Wind,
  Eye,
  Snowflake,
  ArrowRight,
  ArrowUpRight,
  Activity,
} from 'lucide-react';
import {
  evaluateLakeReflectionConditions,
  getLiveForecastForViewpointPage,
  VIEWPOINT_PAGES,
  ViewpointPageSlug,
} from '@/lib/viewpoints';
import { GUIDES } from '@/lib/guides';
import { fetchMatterhornVisibility } from '@/lib/weather';
import {
  buildViewpointPageJsonLd,
  getViewpointPageFaqs,
  serializeJsonLd,
} from '@/lib/schema';
import { BadgeColor } from '@/lib/types';
import LiveVisibilityBanner from '@/components/LiveVisibilityBanner';
import HowThisScoreWorks from '@/components/HowThisScoreWorks';
import { getDictionary } from '@/lib/i18n/dictionaries';
import HeroStatus from '@/components/HeroStatus';
import ContingencyCard from '@/components/ContingencyCard';
import HourlyTimeline from '@/components/HourlyTimeline';
import MetricsGrid from '@/components/MetricsGrid';
import LiveWebcam from '@/components/LiveWebcam';
import FaqSection from '@/components/FaqSection';
import { getLocalizedHref, Locale } from '@/lib/i18n/config';
import { getLocalizedViewpointPage } from '@/lib/i18n/viewpoints';
import { getLocalizedGuideArticle } from '@/lib/i18n/guides';
import Footer from '@/components/Footer';
import { VIEWPOINT_PHOTOS } from '@/lib/place-photos';

const BADGE_PILL_STYLE: Record<BadgeColor, string> = {
  emerald: 'bg-emerald-100 dark:bg-emerald-950/80 border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-200',
  amber: 'bg-amber-100 dark:bg-amber-950/80 border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-200',
  orange: 'bg-orange-100 dark:bg-orange-950/80 border-orange-300 dark:border-orange-700 text-orange-900 dark:text-orange-200',
  rose: 'bg-rose-100 dark:bg-rose-950/80 border-rose-300 dark:border-rose-700 text-rose-900 dark:text-rose-200',
};

const SCORE_TEXT: Record<BadgeColor, string> = {
  emerald: 'text-emerald-700 dark:text-emerald-300',
  amber: 'text-amber-700 dark:text-amber-300',
  orange: 'text-orange-700 dark:text-orange-300',
  rose: 'text-rose-700 dark:text-rose-300',
};

function switcherLabel(shortName: string): string {
  return shortName.replace(/\s*\([^)]*\)\s*$/, '');
}

function ViewpointRouteIcon({ slug }: { slug: ViewpointPageSlug }) {
  switch (slug) {
    case 'gornergrat':
      return <TrainFront className="w-4 h-4 text-sky-600" aria-hidden="true" />;
    case 'glacier-paradise':
      return <CableCar className="w-4 h-4 text-sky-600" aria-hidden="true" />;
    case 'sunnegga':
      return <Compass className="w-4 h-4 text-sky-600" aria-hidden="true" />;
    case 'riffelsee':
      return <Waves className="w-4 h-4 text-sky-600" aria-hidden="true" />;
    case 'zermatt-village':
      return <MapPin className="w-4 h-4 text-sky-600" aria-hidden="true" />;
  }
}

export default async function ViewpointDetailView({
  slug,
  locale = 'en',
}: {
  slug: string;
  locale?: Locale;
}) {
  const page = getLocalizedViewpointPage(slug as ViewpointPageSlug, locale);

  if (!page) {
    notFound();
  }

  const telemetry = await fetchMatterhornVisibility();
  const activeForecast = getLiveForecastForViewpointPage(page, telemetry);
  const reflectionStatus =
    page.slug === 'riffelsee'
      ? evaluateLakeReflectionConditions(activeForecast)
      : null;

  const enrichedFaqs = getViewpointPageFaqs(page, telemetry, locale);
  const jsonLd = buildViewpointPageJsonLd(page, telemetry, locale);

  const otherViewpoints = VIEWPOINT_PAGES.filter(
    (vp) => vp.slug !== page.slug
  ).map((vp) => getLocalizedViewpointPage(vp.slug, locale));

  const relatedGuides = GUIDES.filter((g) =>
    page.relatedGuideSlugs.includes(g.slug)
  ).map((g) => getLocalizedGuideArticle(g.slug, locale));
  const dict = getDictionary(locale);
  const sourcePage = VIEWPOINT_PAGES.find((vp) => vp.slug === page.slug);
  const borrowedForecast =
    sourcePage?.telemetryKey === 'gornergrat' && page.slug !== 'gornergrat';

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <LiveVisibilityBanner />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6 sm:space-y-8">
        {/* Breadcrumb, then one even row of viewpoint scores */}
        <div className="space-y-3">
          <nav
            aria-label="Breadcrumb"
            className="flex min-w-0 items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400"
          >
            <Link
              href={getLocalizedHref('/', locale)}
              className="shrink-0 font-semibold transition-colors duration-200 ease-out hover:text-sky-700 dark:hover:text-sky-400"
            >
              Live Dashboard
            </Link>
            <ChevronRight
              className="h-3.5 w-3.5 shrink-0 text-slate-400 dark:text-slate-500"
              aria-hidden="true"
            />
            <Link
              href={getLocalizedHref('/viewpoints', locale)}
              className="shrink-0 font-semibold transition-colors duration-200 ease-out hover:text-sky-700 dark:hover:text-sky-400"
            >
              Matterhorn Viewpoints
            </Link>
            <ChevronRight
              className="h-3.5 w-3.5 shrink-0 text-slate-400 dark:text-slate-500"
              aria-hidden="true"
            />
            <span className="truncate font-bold text-slate-900 dark:text-white">
              {page.shortName}
            </span>
          </nav>

          <nav
            aria-label="Switch Matterhorn Viewpoint Page"
            className="flex gap-1 overflow-x-auto rounded-xl border border-slate-200/90 bg-white/90 p-1 shadow-2xs md:grid md:grid-cols-5 md:overflow-visible dark:border-slate-800 dark:bg-slate-900/90"
          >
            {VIEWPOINT_PAGES.map((vp) => {
              const localizedVp = getLocalizedViewpointPage(vp.slug, locale);
              const isCurrent = vp.slug === page.slug;
              const vpForecast = getLiveForecastForViewpointPage(vp, telemetry);
              return (
                <Link
                  key={vp.slug}
                  href={getLocalizedHref(`/viewpoints/${vp.slug}`, locale)}
                  aria-current={isCurrent ? 'page' : undefined}
                  className={`flex shrink-0 items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-xs font-bold transition-[background-color,transform] duration-200 ease-out active:scale-[0.98] md:min-w-0 md:shrink ${
                    isCurrent
                      ? 'bg-slate-100 text-slate-950 ring-1 ring-sky-500/70 dark:bg-slate-800 dark:text-white'
                      : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                  }`}
                >
                  <span className="truncate">{switcherLabel(localizedVp.shortName)}</span>
                  <span
                    className={`shrink-0 font-mono text-[11px] tabular-nums ${SCORE_TEXT[vpForecast.currentBadgeColor]}`}
                  >
                    {vpForecast.currentScore}/10
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>

        <HeroStatus data={activeForecast} photo={VIEWPOINT_PHOTOS[page.slug]} />

        <div className="rounded-2xl bg-sky-50/70 dark:bg-sky-950/40 border border-sky-200/90 dark:border-sky-800/80 p-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 text-sm">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-slate-800 dark:text-slate-200">
            <span className="inline-flex items-center gap-1.5 font-bold text-sky-900 dark:text-sky-300">
              <Compass className="w-4 h-4 text-sky-600 dark:text-sky-400" aria-hidden="true" />
              <span>{page.aspectLabel}</span>
            </span>
            <span className="font-medium">
              <strong className="text-slate-900 dark:text-white">{page.transportSummary}</strong>
              {' '}({page.journeyTime})
            </span>
          </div>
          {borrowedForecast && (
            <p className="text-xs font-medium text-sky-800 dark:text-sky-300">
              {dict.navigation.sameForecast}
            </p>
          )}
        </div>

        {/* Viewpoint Hero Header & Tactical Specs Card */}
        <header className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-xs font-mono font-bold text-sky-800 dark:text-sky-300">
                <ViewpointRouteIcon slug={page.slug} />
                <span>VIEWPOINT TELEMETRY • {page.elevationLabel}</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono font-semibold text-slate-700 dark:text-slate-300">
                <MapPin
                  className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400"
                  aria-hidden="true"
                />
                <span>{page.coordinatesLabel}</span>
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-xs font-mono font-bold text-emerald-900 dark:text-emerald-300">
              <Clock
                className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400"
                aria-hidden="true"
              />
              <span>Live Zermatt Update: {telemetry.swissTimeFormatted}</span>
            </div>
          </div>

          <div className="space-y-3 max-w-4xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight text-balance leading-tight">
              {page.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              {page.description}
            </p>
          </div>

          {/* 4 Quick-Fact Telemetry Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {page.quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl bg-slate-50/90 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-800 p-4 space-y-1"
              >
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                  {fact.label}
                </span>
                <span className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white block">
                  {fact.value}
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-snug">
                  {fact.detail}
                </p>
              </div>
            ))}
          </div>

        </header>

        {/* Specialized Riffelsee & Stellisee Mirror Reflection Diagnostic Card */}
        {reflectionStatus && (
          <section
            aria-label="Live Riffelsee and Stellisee Mirror Reflection Conditions"
            className="rounded-3xl border border-sky-300/90 dark:border-sky-800 bg-gradient-to-br from-sky-50/90 via-white to-emerald-50/50 dark:from-slate-900/90 dark:via-slate-900/80 dark:to-emerald-950/30 p-6 sm:p-8 shadow-sm space-y-5"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-sky-800 dark:text-sky-300">
                  <Waves className="w-4 h-4 text-sky-600 dark:text-sky-400" aria-hidden="true" />
                  <span>
                    LIVE ALPINE LAKE MIRROR DIAGNOSTIC • RIFFELSEE (2,757m) &amp;
                    STELLISEE (2,537m)
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Riffelsee Matterhorn Reflection Verdict Today
                </h2>
              </div>

              <span
                className={`self-start md:self-auto inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs sm:text-sm font-extrabold uppercase tracking-wide shadow-2xs ${
                  BADGE_PILL_STYLE[reflectionStatus.badgeColor]
                }`}
              >
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                <span>{reflectionStatus.overallVerdict}</span>
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Factor 1: Surface Wind & Ripple Physics */}
              <div className="rounded-2xl bg-white/95 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 p-4 sm:p-5 space-y-2 shadow-2xs">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    1. Surface Wind &amp; Ripple
                  </span>
                  <Wind className="w-4 h-4 text-sky-600 dark:text-sky-400" aria-hidden="true" />
                </div>
                <div className="text-base sm:text-lg font-extrabold font-mono text-slate-900 dark:text-white">
                  {reflectionStatus.windStatusLabel}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {reflectionStatus.waterSurfaceDetail}
                </p>
              </div>

              {/* Factor 2: East-Face Pyramid Sightline */}
              <div className="rounded-2xl bg-white/95 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 p-4 sm:p-5 space-y-2 shadow-2xs">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    2. East-Face Cloud Sightline
                  </span>
                  <Eye className="w-4 h-4 text-sky-600 dark:text-sky-400" aria-hidden="true" />
                </div>
                <div className="text-base sm:text-lg font-extrabold font-mono text-slate-900 dark:text-white">
                  Score {activeForecast.currentScore}/10 • Mid-Cloud{' '}
                  {activeForecast.metrics.cloudCoverMid}%
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Morning (AM): {activeForecast.today.morning.score}/10 (
                  {activeForecast.today.morning.status}) • Afternoon (PM):{' '}
                  {activeForecast.today.afternoon.score}/10 (
                  {activeForecast.today.afternoon.status}).
                </p>
              </div>

              {/* Factor 3: Seasonal Lake Thaw Window */}
              <div className="rounded-2xl bg-white/95 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 p-4 sm:p-5 space-y-2 shadow-2xs">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    3. Lake Ice &amp; Thaw Status
                  </span>
                  <Snowflake
                    className="w-4 h-4 text-sky-600 dark:text-sky-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                  {reflectionStatus.isOpenWaterSeason
                    ? 'Open Liquid Water Window'
                    : 'Winter Ice / Snow Window'}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {reflectionStatus.thawSeasonStatus}
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-900 dark:bg-slate-950 dark:border dark:border-slate-800 text-white p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="space-y-1">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-sky-300 block">
                  Photographer Action Dispatch
                </span>
                <p className="text-xs sm:text-sm text-slate-100 dark:text-slate-200 leading-relaxed">
                  {reflectionStatus.photographerAction}
                </p>
              </div>
              <Link
                href={getLocalizedHref('/guides/best-matterhorn-photo-viewpoints', locale)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-extrabold shrink-0 transition-colors"
              >
                <span>Sunrise &amp; Lake Photo Guide</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </section>
        )}

        {/* Low-Visibility Contingency Card (Auto-renders when score <= 4) */}
        <ContingencyCard
          currentScore={activeForecast.currentScore}
          morningScore={activeForecast.today.morning.score}
          afternoonScore={activeForecast.today.afternoon.score}
          viewpointLabel={page.shortName}
        />

        {/* 10-Day Horizon Card Slider */}
        <HourlyTimeline
          days={activeForecast.days}
          viewpointLabel={page.shortName}
        />

        <HowThisScoreWorks>
          <MetricsGrid
            metrics={activeForecast.metrics}
            banner={activeForecast.banner}
            viewpointLabel={page.shortName}
          />
        </HowThisScoreWorks>

        {/* Live Multi-Cam Grid Pre-Selected to this Viewpoint's Roundshot Feed */}
        <LiveWebcam defaultCamId={page.defaultWebcamId} />

        {/* Key Takeaways (TL;DR Box) */}
        <section
          aria-label={`Key Takeaways for ${page.shortName}`}
          className="rounded-2xl border border-emerald-200/90 dark:border-emerald-800/80 bg-gradient-to-br from-emerald-50/70 via-white to-sky-50/40 dark:from-emerald-950/40 dark:via-slate-900/80 dark:to-slate-900/50 p-6 sm:p-7 shadow-2xs space-y-4"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
              <CheckCircle2
                className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0"
                aria-hidden="true"
              />
              <h2>{page.shortName} Visibility Takeaways (TL;DR)</h2>
            </div>

            <div className="inline-flex items-center gap-2 text-xs font-mono">
              <span className="text-slate-600 dark:text-slate-400 font-semibold">
                {page.heroStat.label}:
              </span>
              <span className="px-2.5 py-0.5 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-300 font-extrabold whitespace-nowrap shrink-0">
                {page.heroStat.value}
              </span>
            </div>
          </div>

          <ul className="space-y-2.5">
            {page.keyTakeaways.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
              >
                <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400 mt-0.5 shrink-0">
                  0{idx + 1}.
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Viewpoint Comparison / Route Table */}
        <section
          aria-label={page.comparisonTable.caption}
          className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-5 sm:p-6 shadow-xs space-y-4"
        >
          <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
            {page.comparisonTable.caption}
          </h2>

          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100/90 dark:bg-slate-800/90 border-b border-slate-200 dark:border-slate-800 text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                  {page.comparisonTable.headers.map((header) => (
                    <th key={header} className="py-3 px-4">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/70 dark:divide-slate-800 text-xs sm:text-sm">
                {page.comparisonTable.rows.map((row, rowIdx) => (
                  <tr
                    key={rowIdx}
                    className="hover:bg-slate-50/90 dark:hover:bg-slate-800/60 transition-colors"
                  >
                    {row.map((cell, cellIdx) => (
                      <td
                        key={cellIdx}
                        className={`py-3 px-4 leading-relaxed ${
                          cellIdx === 0
                            ? 'font-bold text-slate-900 dark:text-white whitespace-nowrap'
                            : 'text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Deep-Dive Tactical Sections */}
        <div className="space-y-6">
          {page.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-6 sm:p-8 shadow-xs space-y-4"
            >
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight text-balance">
                {section.heading}
              </h2>

              <div className="space-y-3.5">
                {section.paragraphs.map((paragraph, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {section.bulletPoints && section.bulletPoints.length > 0 && (
                <ul className="space-y-2.5 pt-2">
                  {section.bulletPoints.map((bp, bIdx) => (
                    <li
                      key={bIdx}
                      className="rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 p-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                    >
                      <strong className="text-slate-900 dark:text-white font-bold">
                        {bp.bold}
                      </strong>{' '}
                      {bp.text}
                    </li>
                  ))}
                </ul>
              )}

              {section.proTip && (
                <div className="rounded-xl bg-sky-50/90 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 p-4 flex items-start gap-3">
                  <Lightbulb
                    className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div className="text-xs sm:text-sm text-sky-950 dark:text-sky-200 leading-relaxed">
                    <strong className="font-extrabold uppercase tracking-wider text-sky-800 dark:text-sky-300 mr-1.5">
                      {section.proTip.label}:
                    </strong>
                    <span>{section.proTip.text}</span>
                  </div>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Schema-Backed Viewpoint FAQs */}
        <FaqSection
          title={`Frequently Asked Questions — ${page.shortName}`}
          subtitle={`Live answers and alpine guidance for ${page.name}`}
          faqs={enrichedFaqs}
          groupName={`viewpoint-faq-${page.slug}`}
          badgeLabel="FAQPage Schema • Live Viewpoint Telemetry"
        />

        {/* Compare Other Matterhorn Viewpoints Strip */}
        <section
          aria-label="Compare Other Zermatt Viewpoints"
          className="space-y-4"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
              Compare Other Zermatt Matterhorn Viewpoints Right Now
            </h2>
            <Link
              href={getLocalizedHref('/viewpoints', locale)}
              className="inline-flex items-center gap-1 text-xs font-bold text-sky-700 dark:text-sky-400 hover:text-sky-900 dark:hover:text-sky-300"
            >
              <span>All Viewpoints</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherViewpoints.map((other) => {
              const otherForecast = getLiveForecastForViewpointPage(
                other,
                telemetry
              );
              return (
                <Link
                  key={other.slug}
                  href={getLocalizedHref(`/viewpoints/${other.slug}`, locale)}
                  className="group rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-5 shadow-xs hover:shadow-md hover:border-sky-300 dark:hover:border-sky-700 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-sky-700 dark:text-sky-400">
                        <ViewpointRouteIcon slug={other.slug} />
                        <span>{other.elevationLabel}</span>
                      </span>

                      <span
                        className={`px-2.5 py-0.5 rounded-full border text-xs font-mono font-extrabold ${
                          BADGE_PILL_STYLE[otherForecast.currentBadgeColor]
                        }`}
                      >
                        Live: {otherForecast.currentScore}/10 (
                        {otherForecast.currentStatus})
                      </span>
                    </div>

                    <h3 className="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-sky-700 dark:group-hover:text-sky-400 transition-colors">
                      {other.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                      {other.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-sky-700 dark:text-sky-400">
                    <span>
                      AM {otherForecast.today.morning.score}/10 • PM{' '}
                      {otherForecast.today.afternoon.score}/10
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span>Open Viewpoint Telemetry</span>
                      <ArrowRight
                        className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Related Field Guides */}
        <section aria-label="Related Alpine Field Guides" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
              Related Zermatt &amp; Matterhorn Field Guides
            </h2>
            <Link
              href={getLocalizedHref('/guides', locale)}
              className="inline-flex items-center gap-1 text-xs font-bold text-sky-700 dark:text-sky-400 hover:text-sky-900 dark:hover:text-sky-300"
            >
              <span>All guides</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={getLocalizedHref(`/guides/${guide.slug}`, locale)}
                className="group rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-4 shadow-2xs hover:shadow-md hover:border-sky-300 dark:hover:border-sky-700 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between overflow-hidden"
              >
                <div className="space-y-3">
                  {guide.coverImage && (
                    <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-slate-200/70 dark:border-slate-800/80 bg-slate-100 dark:bg-slate-800">
                      <Image
                        src={guide.coverImage.src}
                        alt={guide.coverImage.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">
                      {guide.category}
                    </span>
                    <h3 className="text-sm font-extrabold text-slate-900 dark:text-white group-hover:text-sky-700 dark:group-hover:text-sky-400 transition-colors leading-snug">
                      {guide.shortTitle}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                      {guide.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-sky-700 dark:text-sky-400">
                  <span>{guide.readingTimeMinutes} min read</span>
                  <ArrowRight
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </>
  );
}
