import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Compass,
  TrainFront,
  CableCar,
  Waves,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
  Activity,
  ChevronRight,
} from 'lucide-react';
import {
  evaluateLakeReflectionConditions,
  getLiveForecastForViewpointPage,
  VIEWPOINT_PAGES,
  ViewpointPageSlug,
} from '@/lib/viewpoints';
import { fetchMatterhornVisibility } from '@/lib/weather';
import { buildViewpointsIndexJsonLd, serializeJsonLd } from '@/lib/schema';
import { BadgeColor } from '@/lib/types';
import LiveVisibilityBanner from '@/components/LiveVisibilityBanner';
import VisibilityIcon from '@/components/VisibilityIcon';
import logoImg from '../../../public/logo.jpeg';

export const revalidate = 900; // Revalidate every 15 minutes

export const metadata: Metadata = {
  title: 'Matterhorn Viewpoints Live Visibility | Zermatt Cams',
  description:
    'Compare live Matterhorn visibility scores across Gornergrat (3,089m), Klein Matterhorn, and Riffelsee before buying mountain lift tickets.',
  alternates: {
    canonical: '/viewpoints',
  },
  openGraph: {
    title: 'Matterhorn Viewpoints Live Visibility | Zermatt Cams',
    description:
      'Compare live visibility across Gornergrat (3,089m), Klein Matterhorn, and Riffelsee before buying mountain lift tickets.',
    url: 'https://isthematterhornvisible.com/viewpoints',
    siteName: 'Is The Matterhorn Visible?',
    locale: 'en_CH',
    type: 'website',
  },
};

const BADGE_PILL_STYLE: Record<BadgeColor, string> = {
  emerald: 'bg-emerald-100 border-emerald-300 text-emerald-900',
  amber: 'bg-amber-100 border-amber-300 text-amber-900',
  orange: 'bg-orange-100 border-orange-300 text-orange-900',
  rose: 'bg-rose-100 border-rose-300 text-rose-900',
};

function ViewpointIcon({ slug }: { slug: ViewpointPageSlug }) {
  switch (slug) {
    case 'gornergrat':
      return <TrainFront className="w-5 h-5 text-sky-600" aria-hidden="true" />;
    case 'glacier-paradise':
      return <CableCar className="w-5 h-5 text-sky-600" aria-hidden="true" />;
    case 'sunnegga-riffelsee':
      return <Waves className="w-5 h-5 text-sky-600" aria-hidden="true" />;
  }
}

export default async function ViewpointsIndexPage() {
  const telemetry = await fetchMatterhornVisibility();
  const jsonLd = buildViewpointsIndexJsonLd(telemetry);
  const reflectionStatus = evaluateLakeReflectionConditions(
    telemetry.viewpoints.gornergrat
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <LiveVisibilityBanner />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-8 sm:space-y-10">
        {/* Breadcrumb */}
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
          <span className="text-slate-900 font-bold">
            Matterhorn Viewpoints
          </span>
        </nav>

        {/* Hero Section */}
        <section className="rounded-3xl border border-slate-200/90 bg-white/95 backdrop-blur-md p-6 sm:p-8 md:p-10 shadow-xs">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold text-sky-800">
              <Compass
                className="w-3.5 h-3.5 text-sky-600"
                aria-hidden="true"
              />
              <span>
                LIVE VIEWPOINT TELEMETRY • UPDATED {telemetry.swissTimeFormatted}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              Zermatt Matterhorn Viewpoints: Live Visibility &amp; Lake Reflection Conditions
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Because the Matterhorn (4,478m) sits on the Swiss-Italian meteorological divide, visibility, wind holds, and lake mirror reflections vary dramatically by viewpoint altitude and aspect. Select your target sector below to inspect live 10-day AM/PM telemetry before purchasing mountain passes.
            </p>
          </div>
        </section>

        {/* 3 Viewpoint Cards Grid */}
        <section
          aria-label="Matterhorn Viewpoints"
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {VIEWPOINT_PAGES.map((vp) => {
            const forecast = getLiveForecastForViewpointPage(vp, telemetry);
            const isLakePage = vp.slug === 'sunnegga-riffelsee';

            return (
              <article
                key={vp.slug}
                className="group relative rounded-3xl border border-slate-200/90 bg-white/95 p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {/* Top Badge Row */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="p-2.5 rounded-2xl bg-sky-50 border border-sky-200">
                      <ViewpointIcon slug={vp.slug} />
                    </span>

                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono font-extrabold ${
                        BADGE_PILL_STYLE[forecast.currentBadgeColor]
                      }`}
                    >
                      <span>
                        {forecast.currentScore}/10 • {forecast.currentStatus}
                      </span>
                    </span>
                  </div>

                  {/* Title & Coordinates */}
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500">
                      <span className="inline-flex items-center gap-1 text-sky-700 font-bold">
                        <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{vp.elevationLabel}</span>
                      </span>
                      <span>•</span>
                      <span>{vp.coordinatesLabel}</span>
                    </div>

                    <h2 className="text-xl font-extrabold text-slate-900 tracking-tight group-hover:text-sky-700 transition-colors text-balance">
                      <Link
                        href={`/viewpoints/${vp.slug}`}
                        className="focus:outline-none"
                      >
                        <span className="absolute inset-0" aria-hidden="true" />
                        {vp.name}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {vp.description}
                    </p>
                  </div>

                  {/* Live Today AM/PM Telemetry Box */}
                  <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <VisibilityIcon
                          badgeColor={forecast.currentBadgeColor}
                          size="sm"
                        />
                        <div>
                          <div className="text-xs font-extrabold text-slate-900">
                            Today AM: {forecast.today.morning.score}/10 • PM:{' '}
                            {forecast.today.afternoon.score}/10
                          </div>
                          <div className="text-[11px] font-mono text-slate-500">
                            Mid-Cloud: {forecast.metrics.cloudCoverMid}% • Wind:{' '}
                            {forecast.metrics.windSpeedKmh} km/h
                          </div>
                        </div>
                      </div>
                    </div>

                    {isLakePage ? (
                      <div className="pt-2 border-t border-slate-200/70 flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-700">
                          Mirror Status:
                        </span>
                        <span className="font-mono font-bold text-sky-800">
                          {reflectionStatus.overallVerdict}
                        </span>
                      </div>
                    ) : (
                      <div className="pt-2 border-t border-slate-200/70 flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-700">
                          {vp.heroStat.label}:
                        </span>
                        <span className="font-mono font-bold text-sky-800">
                          {vp.heroStat.value}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Transport & Best Window */}
                  <div className="space-y-1.5 text-xs text-slate-600 font-mono">
                    <div className="flex items-center gap-1.5">
                      <Clock
                        className="w-3.5 h-3.5 text-sky-600 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="truncate">{vp.transportSummary}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Sparkles
                        className="w-3.5 h-3.5 text-amber-500 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="truncate">{vp.bestTimeWindow}</span>
                    </div>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-700 group-hover:text-sky-900">
                  <span>Open Live Viewpoint Forecast</span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </article>
            );
          })}
        </section>

        {/* Bottom CTA to Main Dual-Viewpoint Dashboard */}
        <section className="rounded-2xl border border-sky-200 bg-gradient-to-r from-sky-900 via-slate-900 to-slate-900 text-white p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-sky-300">
                <Activity
                  className="w-4 h-4 text-emerald-400"
                  aria-hidden="true"
                />
                <span>Dual-Aspect Master Dashboard</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-balance">
                Want to Compare East Face &amp; South Face Side by Side?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Open our main interactive telemetry dashboard to toggle instantaneously between Gornergrat (3,089m) and Glacier Paradise (3,883m) or explore our 30-year monthly climatology table.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-sm transition-colors"
              >
                <span>Open Live Dashboard</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href="/guides"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-xs sm:text-sm transition-colors"
              >
                <span>Browse Field Guides</span>
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
            <Link
              href="/"
              className="text-sky-700 hover:text-sky-900 font-semibold transition-colors underline underline-offset-4"
            >
              Live Dashboard
            </Link>
            <span>•</span>
            <Link
              href="/guides"
              className="text-sky-700 hover:text-sky-900 font-semibold transition-colors underline underline-offset-4"
            >
              Field Guides
            </Link>
            <span>•</span>
            <Link
              href="/api/visibility"
              className="text-sky-700 hover:text-sky-900 font-semibold transition-colors underline underline-offset-4"
            >
              JSON API (/api/visibility)
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
