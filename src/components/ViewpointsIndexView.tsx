import React from 'react';
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
import { getLocalizedHref, Locale } from '@/lib/i18n/config';
import { getLocalizedViewpointPage } from '@/lib/i18n/viewpoints';
import Footer from '@/components/Footer';

const BADGE_PILL_STYLE: Record<BadgeColor, string> = {
  emerald: 'bg-emerald-100 dark:bg-emerald-950/80 border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-200',
  amber: 'bg-amber-100 dark:bg-amber-950/80 border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-200',
  orange: 'bg-orange-100 dark:bg-orange-950/80 border-orange-300 dark:border-orange-700 text-orange-900 dark:text-orange-200',
  rose: 'bg-rose-100 dark:bg-rose-950/80 border-rose-300 dark:border-rose-700 text-rose-900 dark:text-rose-200',
};

function ViewpointIcon({ slug }: { slug: ViewpointPageSlug }) {
  switch (slug) {
    case 'gornergrat':
      return <TrainFront className="w-5 h-5 text-sky-600 dark:text-sky-400" aria-hidden="true" />;
    case 'glacier-paradise':
      return <CableCar className="w-5 h-5 text-sky-600 dark:text-sky-400" aria-hidden="true" />;
    case 'sunnegga-riffelsee':
      return <Waves className="w-5 h-5 text-sky-600 dark:text-sky-400" aria-hidden="true" />;
    case 'zermatt-village':
      return <MapPin className="w-5 h-5 text-sky-600 dark:text-sky-400" aria-hidden="true" />;
  }
}

export default async function ViewpointsIndexView({
  locale = 'en',
}: {
  locale?: Locale;
} = {}) {
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

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8 sm:space-y-10">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400"
        >
          <Link
            href={getLocalizedHref('/', locale)}
            className="hover:text-sky-700 dark:hover:text-sky-400 transition-colors font-semibold"
          >
            Live Dashboard
          </Link>
          <ChevronRight
            className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500"
            aria-hidden="true"
          />
          <span className="text-slate-900 dark:text-white font-bold">
            Matterhorn Viewpoints
          </span>
        </nav>

        {/* Hero Section */}
        <section className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-6 sm:p-8 md:p-10 shadow-xs">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-xs font-mono font-bold text-sky-800 dark:text-sky-300">
              <Compass
                className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400"
                aria-hidden="true"
              />
              <span>
                LIVE VIEWPOINT TELEMETRY • UPDATED {telemetry.swissTimeFormatted}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight text-balance">
              Zermatt Matterhorn Viewpoints: Live Visibility &amp; Lake Reflection Conditions
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Because the Matterhorn (4,478m) sits on the Swiss-Italian meteorological divide, visibility, wind holds, and lake mirror reflections vary dramatically by viewpoint altitude and aspect. Select your target sector below to inspect live 10-day AM/PM telemetry before purchasing mountain passes.
            </p>
          </div>
        </section>

        {/* Viewpoint Cards Grid */}
        <section
          aria-label="Matterhorn Viewpoints"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {VIEWPOINT_PAGES.map((rawVp) => {
            const vp = getLocalizedViewpointPage(rawVp.slug, locale);
            const forecast = getLiveForecastForViewpointPage(rawVp, telemetry);
            const isLakePage = vp.slug === 'sunnegga-riffelsee';

            return (
              <article
                key={vp.slug}
                className="group relative rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-sky-300 dark:hover:border-sky-700 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {/* Top Badge Row */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="p-2.5 rounded-2xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 transition-transform duration-200 group-hover:scale-105">
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
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                      <span className="inline-flex items-center gap-1 text-sky-700 dark:text-sky-400 font-bold">
                        <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{vp.elevationLabel}</span>
                      </span>
                      <span>•</span>
                      <span>{vp.coordinatesLabel}</span>
                    </div>

                    <h2 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight group-hover:text-sky-700 dark:group-hover:text-sky-400 transition-colors text-balance">
                      <Link
                        href={getLocalizedHref(`/viewpoints/${vp.slug}`, locale)}
                        className="focus:outline-none"
                      >
                        <span className="absolute inset-0" aria-hidden="true" />
                        {vp.name}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {vp.description}
                    </p>
                  </div>

                  {/* Live Today AM/PM Telemetry Box */}
                  <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <VisibilityIcon
                          badgeColor={forecast.currentBadgeColor}
                          size="sm"
                        />
                        <div>
                          <div className="text-xs font-extrabold text-slate-900 dark:text-white">
                            Today AM: {forecast.today.morning.score}/10 • PM:{' '}
                            {forecast.today.afternoon.score}/10
                          </div>
                          <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                            Mid-Cloud: {forecast.metrics.cloudCoverMid}% • Wind:{' '}
                            {forecast.metrics.windSpeedKmh} km/h
                          </div>
                        </div>
                      </div>
                    </div>

                    {isLakePage ? (
                      <div className="pt-2 border-t border-slate-200/70 dark:border-slate-800 flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-700 dark:text-slate-300">
                          Mirror Status:
                        </span>
                        <span className="font-mono font-bold text-sky-800 dark:text-sky-300">
                          {reflectionStatus.overallVerdict}
                        </span>
                      </div>
                    ) : (
                      <div className="pt-2 border-t border-slate-200/70 dark:border-slate-800 flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-700 dark:text-slate-300">
                          {vp.heroStat.label}:
                        </span>
                        <span className="font-mono font-bold text-sky-800 dark:text-sky-300 whitespace-nowrap shrink-0">
                          {vp.heroStat.value}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Tactical Specs */}
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                      <span>Facing Aspect</span>
                      <span className="font-mono font-semibold text-slate-800 dark:text-slate-200">
                        {vp.aspectLabel}
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                      <span>Transit from Zermatt</span>
                      <span className="font-mono font-semibold text-slate-800 dark:text-slate-200">
                        {vp.journeyTime}
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-1 text-slate-600 dark:text-slate-400">
                      <span>Prime Lighting Window</span>
                      <span className="font-mono font-semibold text-slate-800 dark:text-slate-200">
                        {vp.bestTimeWindow}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-5 mt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-sky-700 dark:text-sky-400">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>View Telemetry &amp; Cams</span>
                  </span>
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
        <section className="rounded-2xl border border-sky-200 dark:border-slate-800 bg-gradient-to-r from-sky-900 via-slate-900 to-slate-900 text-white p-6 sm:p-8 shadow-sm">
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
                href={getLocalizedHref('/', locale)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-sm transition-colors"
              >
                <span>Open Live Dashboard</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href={getLocalizedHref('/guides', locale)}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-xs sm:text-sm transition-colors"
              >
                <span>Browse Field Guides</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </>
  );
}
