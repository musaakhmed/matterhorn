import React from 'react';
import type { Metadata } from 'next';
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
  getViewpointPageBySlug,
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
import HeroStatus from '@/components/HeroStatus';
import ContingencyCard from '@/components/ContingencyCard';
import HourlyTimeline from '@/components/HourlyTimeline';
import MetricsGrid from '@/components/MetricsGrid';
import LiveWebcam from '@/components/LiveWebcam';
import FaqSection from '@/components/FaqSection';
import logoImg from '../../../../public/logo.jpeg';

export const revalidate = 900; // Refresh live viewpoint telemetry every 15 minutes

export function generateStaticParams() {
  return VIEWPOINT_PAGES.map((vp) => ({
    slug: vp.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getViewpointPageBySlug(slug);

  if (!page) {
    return {
      title: 'Viewpoint Not Found | Is The Matterhorn Visible?',
    };
  }

  return {
    title: page.seoTitle,
    description: page.description,
    keywords: [
      page.targetKeyword,
      page.name,
      `${page.shortName} visibility`,
      `${page.shortName} webcam`,
      'is the matterhorn visible today',
      'zermatt viewpoint forecast',
    ],
    alternates: {
      canonical: `/viewpoints/${page.slug}`,
    },
    openGraph: {
      title: page.seoTitle,
      description: page.description,
      url: `https://isthematterhornvisible.com/viewpoints/${page.slug}`,
      siteName: 'Is The Matterhorn Visible?',
      locale: 'en_CH',
      type: 'website',
      images: [
        {
          url: '/opengraph-image',
          width: 1200,
          height: 630,
          alt: `${page.shortName} — Live Matterhorn Visibility & Forecast`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.seoTitle,
      description: page.description,
      images: ['/opengraph-image'],
    },
  };
}

const BADGE_PILL_STYLE: Record<BadgeColor, string> = {
  emerald: 'bg-emerald-100 border-emerald-300 text-emerald-900',
  amber: 'bg-amber-100 border-amber-300 text-amber-900',
  orange: 'bg-orange-100 border-orange-300 text-orange-900',
  rose: 'bg-rose-100 border-rose-300 text-rose-900',
};

function ViewpointRouteIcon({ slug }: { slug: ViewpointPageSlug }) {
  switch (slug) {
    case 'gornergrat':
      return <TrainFront className="w-4 h-4 text-sky-600" aria-hidden="true" />;
    case 'glacier-paradise':
      return <CableCar className="w-4 h-4 text-sky-600" aria-hidden="true" />;
    case 'sunnegga-riffelsee':
      return <Waves className="w-4 h-4 text-sky-600" aria-hidden="true" />;
  }
}

export default async function ViewpointDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getViewpointPageBySlug(slug);

  if (!page) {
    notFound();
  }

  const telemetry = await fetchMatterhornVisibility();
  const activeForecast = getLiveForecastForViewpointPage(page, telemetry);
  const reflectionStatus =
    page.slug === 'sunnegga-riffelsee'
      ? evaluateLakeReflectionConditions(activeForecast)
      : null;

  const enrichedFaqs = getViewpointPageFaqs(page, telemetry);
  const jsonLd = buildViewpointPageJsonLd(page, telemetry);

  const otherViewpoints = VIEWPOINT_PAGES.filter(
    (vp) => vp.slug !== page.slug
  );
  const relatedGuides = GUIDES.filter((g) =>
    page.relatedGuideSlugs.includes(g.slug)
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <LiveVisibilityBanner />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8">
        {/* Top Row: Breadcrumb + Direct Viewpoint Route Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-slate-500"
          >
            <Link
              href="/"
              className="hover:text-sky-700 transition-colors font-semibold"
            >
              Live Dashboard
            </Link>
            <ChevronRight
              className="w-3.5 h-3.5 text-slate-400"
              aria-hidden="true"
            />
            <Link
              href="/viewpoints"
              className="hover:text-sky-700 transition-colors font-semibold"
            >
              Matterhorn Viewpoints
            </Link>
            <ChevronRight
              className="w-3.5 h-3.5 text-slate-400"
              aria-hidden="true"
            />
            <span className="text-slate-900 font-bold truncate">
              {page.shortName}
            </span>
          </nav>

          {/* 3-Viewpoint Sub-Route Switcher */}
          <nav
            aria-label="Switch Matterhorn Viewpoint Page"
            className="flex flex-wrap items-center gap-1.5 bg-white/90 border border-slate-200/90 p-1.5 rounded-xl shadow-2xs"
          >
            {VIEWPOINT_PAGES.map((vp) => {
              const isCurrent = vp.slug === page.slug;
              const vpForecast = getLiveForecastForViewpointPage(vp, telemetry);
              return (
                <Link
                  key={vp.slug}
                  href={`/viewpoints/${vp.slug}`}
                  aria-current={isCurrent ? 'page' : undefined}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    isCurrent
                      ? 'bg-sky-600 text-white shadow-2xs'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <span>{vp.shortName}</span>
                  <span
                    className={`font-mono text-[11px] px-1.5 py-0.2 rounded ${
                      isCurrent
                        ? 'bg-sky-800/80 text-sky-100'
                        : 'bg-slate-200/80 text-slate-800'
                    }`}
                  >
                    {vpForecast.currentScore}/10
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Viewpoint Hero Header & Tactical Specs Card */}
        <header className="rounded-3xl border border-slate-200/90 bg-white/95 backdrop-blur-md p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold text-sky-800">
                <ViewpointRouteIcon slug={page.slug} />
                <span>VIEWPOINT TELEMETRY • {page.elevationLabel}</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-semibold text-slate-700">
                <MapPin
                  className="w-3.5 h-3.5 text-sky-600"
                  aria-hidden="true"
                />
                <span>{page.coordinatesLabel}</span>
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-900">
              <Clock
                className="w-3.5 h-3.5 text-emerald-600"
                aria-hidden="true"
              />
              <span>Live Zermatt Update: {telemetry.swissTimeFormatted}</span>
            </div>
          </div>

          <div className="space-y-3 max-w-4xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-balance leading-tight">
              {page.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {page.description}
            </p>
          </div>

          {/* 4 Quick-Fact Telemetry Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {page.quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl bg-slate-50/90 border border-slate-200/80 p-4 space-y-1"
              >
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 block">
                  {fact.label}
                </span>
                <span className="text-base sm:text-lg font-extrabold text-slate-900 block">
                  {fact.value}
                </span>
                <p className="text-xs text-slate-600 leading-snug">
                  {fact.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Access, First Train/Lift & Optimal Lighting Strip */}
          <div className="rounded-2xl bg-sky-50/70 border border-sky-200/90 p-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 text-xs sm:text-sm">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-slate-800">
              <span className="inline-flex items-center gap-1.5 font-bold text-sky-900">
                <Compass className="w-4 h-4 text-sky-600" aria-hidden="true" />
                <span>Aspect: {page.aspectLabel}</span>
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="font-medium">
                <strong className="text-slate-900">Access:</strong>{' '}
                {page.transportSummary} ({page.journeyTime})
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="px-2.5 py-1 rounded-lg bg-white border border-sky-200 text-sky-900 font-bold">
                Best Window: {page.bestTimeWindow}
              </span>
            </div>
          </div>
        </header>

        {/* Specialized Riffelsee & Stellisee Mirror Reflection Diagnostic Card (for /viewpoints/sunnegga-riffelsee) */}
        {reflectionStatus && (
          <section
            aria-label="Live Riffelsee and Stellisee Mirror Reflection Conditions"
            className="rounded-3xl border border-sky-300/90 bg-gradient-to-br from-sky-50/90 via-white to-emerald-50/50 p-6 sm:p-8 shadow-sm space-y-5"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-sky-800">
                  <Waves className="w-4 h-4 text-sky-600" aria-hidden="true" />
                  <span>
                    LIVE ALPINE LAKE MIRROR DIAGNOSTIC • RIFFELSEE (2,757m) &amp;
                    STELLISEE (2,537m)
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
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
              <div className="rounded-2xl bg-white/95 border border-slate-200/90 p-4 sm:p-5 space-y-2 shadow-2xs">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    1. Surface Wind &amp; Ripple
                  </span>
                  <Wind className="w-4 h-4 text-sky-600" aria-hidden="true" />
                </div>
                <div className="text-base sm:text-lg font-extrabold font-mono text-slate-900">
                  {reflectionStatus.windStatusLabel}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {reflectionStatus.waterSurfaceDetail}
                </p>
              </div>

              {/* Factor 2: East-Face Pyramid Sightline */}
              <div className="rounded-2xl bg-white/95 border border-slate-200/90 p-4 sm:p-5 space-y-2 shadow-2xs">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    2. East-Face Cloud Sightline
                  </span>
                  <Eye className="w-4 h-4 text-sky-600" aria-hidden="true" />
                </div>
                <div className="text-base sm:text-lg font-extrabold font-mono text-slate-900">
                  Score {activeForecast.currentScore}/10 • Mid-Cloud{' '}
                  {activeForecast.metrics.cloudCoverMid}%
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Morning (AM): {activeForecast.today.morning.score}/10 (
                  {activeForecast.today.morning.status}) • Afternoon (PM):{' '}
                  {activeForecast.today.afternoon.score}/10 (
                  {activeForecast.today.afternoon.status}).
                </p>
              </div>

              {/* Factor 3: Seasonal Lake Thaw Window */}
              <div className="rounded-2xl bg-white/95 border border-slate-200/90 p-4 sm:p-5 space-y-2 shadow-2xs">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    3. Lake Ice &amp; Thaw Status
                  </span>
                  <Snowflake
                    className="w-4 h-4 text-sky-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="text-sm sm:text-base font-extrabold text-slate-900">
                  {reflectionStatus.isOpenWaterSeason
                    ? 'Open Liquid Water Window'
                    : 'Winter Ice / Snow Window'}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {reflectionStatus.thawSeasonStatus}
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-900 text-white p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="space-y-1">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-sky-300 block">
                  Photographer Action Dispatch
                </span>
                <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
                  {reflectionStatus.photographerAction}
                </p>
              </div>
              <Link
                href="/guides/best-matterhorn-photo-viewpoints"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-extrabold shrink-0 transition-colors"
              >
                <span>Sunrise &amp; Lake Photo Guide</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </section>
        )}

        {/* Live 1–10 AM/PM Hero Verdict Card for this Viewpoint */}
        <HeroStatus data={activeForecast} />

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

        {/* 4-Card Atmospheric Layer Diagnostics */}
        <MetricsGrid
          metrics={activeForecast.metrics}
          viewpointLabel={page.shortName}
        />

        {/* Live Multi-Cam Grid Pre-Selected to this Viewpoint's Roundshot Feed */}
        <LiveWebcam defaultCamId={page.defaultWebcamId} />

        {/* Key Takeaways (TL;DR Box) */}
        <section
          aria-label={`Key Takeaways for ${page.shortName}`}
          className="rounded-2xl border border-emerald-200/90 bg-gradient-to-br from-emerald-50/70 via-white to-sky-50/40 p-6 sm:p-7 shadow-2xs space-y-4"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-sm sm:text-base font-extrabold text-slate-900">
              <CheckCircle2
                className="w-5 h-5 text-emerald-600 shrink-0"
                aria-hidden="true"
              />
              <h2>{page.shortName} Visibility Takeaways (TL;DR)</h2>
            </div>

            <div className="inline-flex items-center gap-2 text-xs font-mono">
              <span className="text-slate-600 font-semibold">
                {page.heroStat.label}:
              </span>
              <span className="px-2.5 py-0.5 rounded-lg bg-emerald-100 border border-emerald-300 text-emerald-950 font-extrabold">
                {page.heroStat.value}
              </span>
            </div>
          </div>

          <ul className="space-y-2.5">
            {page.keyTakeaways.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed"
              >
                <span className="font-mono font-bold text-emerald-700 mt-0.5 shrink-0">
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
          className="rounded-2xl border border-slate-200/90 bg-white/95 p-5 sm:p-6 shadow-xs space-y-4"
        >
          <h2 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
            {page.comparisonTable.caption}
          </h2>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100/90 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-600">
                  {page.comparisonTable.headers.map((header) => (
                    <th key={header} className="py-3 px-4">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/70 text-xs sm:text-sm">
                {page.comparisonTable.rows.map((row, rowIdx) => (
                  <tr
                    key={rowIdx}
                    className="hover:bg-slate-50/90 transition-colors"
                  >
                    {row.map((cell, cellIdx) => (
                      <td
                        key={cellIdx}
                        className={`py-3 px-4 leading-relaxed ${
                          cellIdx === 0
                            ? 'font-bold text-slate-900 whitespace-nowrap'
                            : 'text-slate-700'
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
              className="rounded-2xl border border-slate-200/90 bg-white/95 p-6 sm:p-8 shadow-xs space-y-4"
            >
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight text-balance">
                {section.heading}
              </h2>

              <div className="space-y-3.5">
                {section.paragraphs.map((paragraph, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-sm sm:text-base text-slate-700 leading-relaxed"
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
                      className="rounded-xl bg-slate-50 border border-slate-200/80 p-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed"
                    >
                      <strong className="text-slate-900 font-bold">
                        {bp.bold}
                      </strong>{' '}
                      {bp.text}
                    </li>
                  ))}
                </ul>
              )}

              {section.proTip && (
                <div className="rounded-xl bg-sky-50/90 border border-sky-200 p-4 flex items-start gap-3">
                  <Lightbulb
                    className="w-5 h-5 text-sky-600 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div className="text-xs sm:text-sm text-sky-950 leading-relaxed">
                    <strong className="font-extrabold uppercase tracking-wider text-sky-800 mr-1.5">
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
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
              Compare Other Zermatt Matterhorn Viewpoints Right Now
            </h2>
            <Link
              href="/viewpoints"
              className="inline-flex items-center gap-1 text-xs font-bold text-sky-700 hover:text-sky-900"
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
                  href={`/viewpoints/${other.slug}`}
                  className="group rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-sky-700">
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

                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-sky-700 transition-colors">
                      {other.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                      {other.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-700">
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
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
              Related Zermatt &amp; Matterhorn Field Guides
            </h2>
            <Link
              href="/guides"
              className="inline-flex items-center gap-1 text-xs font-bold text-sky-700 hover:text-sky-900"
            >
              <span>All 6 Guides</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group rounded-2xl border border-slate-200/90 bg-white/90 p-5 shadow-2xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-sky-700">
                    {guide.category}
                  </span>
                  <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
                    {guide.shortTitle}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {guide.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-700">
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
              <Activity
                className="w-3.5 h-3.5 text-sky-600"
                aria-hidden="true"
              />
              <span>ISR Cache: 15m</span>
            </span>
            <span>•</span>
            <Link
              href="/"
              className="text-sky-700 hover:text-sky-900 font-semibold transition-colors underline underline-offset-4"
            >
              Live Dashboard
            </Link>
            <span>•</span>
            <Link
              href="/viewpoints"
              className="text-sky-700 hover:text-sky-900 font-semibold transition-colors underline underline-offset-4"
            >
              Viewpoints
            </Link>
            <span>•</span>
            <Link
              href="/guides"
              className="text-sky-700 hover:text-sky-900 font-semibold transition-colors underline underline-offset-4"
            >
              Field Guides
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
