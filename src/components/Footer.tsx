'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Mountain,
  TrainFront,
  BookOpen,
  Code2,
  ChevronUp,
  MapPin,
  Compass,
} from 'lucide-react';
import { useTranslation } from '@/lib/i18n/context';
import { getLocalizedHref, Locale } from '@/lib/i18n/config';
import logoImg from '../../public/logo.jpeg';
import AlpinePlanningLinks from '@/components/AlpinePlanningLinks';

export interface FooterProps {
  locale?: Locale;
  className?: string;
}

export default function Footer({ locale: propLocale, className = '' }: FooterProps) {
  const { locale: contextLocale, dict } = useTranslation();
  const locale = propLocale || contextLocale || 'en';

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      aria-label="Site Footer"
      className={`relative border-t border-slate-200/80 dark:border-slate-800/80 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md text-slate-600 dark:text-slate-400 text-xs mt-auto ${className}`}
    >
      {/* Decorative Alpine Gradient Top Highlight */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 dark:via-sky-400/30 to-transparent"
        aria-hidden="true"
      />

      {/* Brand & Telemetry Mission Header */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-3.5">
            <Link
              href={getLocalizedHref('/', locale)}
              className="relative inline-flex items-center justify-center overflow-hidden shrink-0 w-11 h-11 rounded-2xl bg-slate-900 ring-1 ring-slate-900/10 dark:ring-white/10 shadow-sm transition-transform hover:scale-105"
              aria-label="Go to homepage"
            >
              <Image
                src={logoImg}
                alt="Is The Matterhorn Visible? logo"
                width={44}
                height={44}
                unoptimized
                className="w-full h-full object-cover pointer-events-none"
              />
            </Link>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Link
                  href={getLocalizedHref('/', locale)}
                  className="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  Is The Matterhorn Visible?
                </Link>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950/80 border border-sky-200 dark:border-sky-800 text-xs font-semibold text-sky-700 dark:text-sky-300">
                  <MapPin className="w-3 h-3 shrink-0" aria-hidden="true" />
                  <span>4,478m • Zermatt, Switzerland</span>
                </span>
              </div>
              <p className="mt-1 text-slate-500 dark:text-slate-400 max-w-2xl text-xs sm:text-xs leading-relaxed">
                {dict?.footer?.tagline ||
                  'Real-time atmospheric summit telemetry, 10-day high-altitude visibility forecasting, and comprehensive vantage guides for the iconic Swiss alpine pyramid.'}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 self-stretch lg:self-auto justify-between lg:justify-end">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-slate-700 dark:text-slate-300 font-medium">{dict.footer.updatedEvery}</span>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-300 dark:hover:border-sky-700 shadow-2xs text-xs font-medium transition-all cursor-pointer"
              aria-label="Back to top of page"
            >
              <span>{dict.common.backToTop}</span>
              <ChevronUp className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* 4-Column SEO Navigation Grid */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav
          aria-label="Footer Navigation"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
        >
          {/* Column 1: Viewpoints & Vantage Points */}
          <div>
            <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100 font-semibold text-xs tracking-wider uppercase mb-3.5">
              <Mountain className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" aria-hidden="true" />
              <span>{dict.footer.viewpointsColumn}</span>
            </div>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href={getLocalizedHref('/viewpoints', locale)}
                  className="group flex flex-col hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-sky-600 dark:group-hover:text-sky-400">
                    {dict.footer.allViewpointsHub}
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    Comprehensive sector & elevation comparison
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref('/viewpoints/gornergrat', locale)}
                  className="group flex flex-col hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-sky-600 dark:group-hover:text-sky-400 flex items-center justify-between">
                    <span>Gornergrat Ridge</span>
                    <span className="text-xs font-mono text-slate-600 dark:text-slate-400">3,089m</span>
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    Cogwheel railway & iconic East face pyramid
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref('/viewpoints/glacier-paradise', locale)}
                  className="group flex flex-col hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-sky-600 dark:group-hover:text-sky-400 flex items-center justify-between">
                    <span>Matterhorn Glacier Paradise</span>
                    <span className="text-xs font-mono text-slate-600 dark:text-slate-400">3,883m</span>
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    Highest cable car station in Europe
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref('/viewpoints/sunnegga', locale)}
                  className="group flex flex-col hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-sky-600 dark:group-hover:text-sky-400 flex items-center justify-between">
                    <span>Sunnegga</span>
                    <span className="text-xs font-mono text-slate-600 dark:text-slate-400">2,288m</span>
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    Funicular terrace and the east face
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref('/viewpoints/riffelsee', locale)}
                  className="group flex flex-col hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-sky-600 dark:group-hover:text-sky-400 flex items-center justify-between">
                    <span>Riffelsee</span>
                    <span className="text-xs font-mono text-slate-600 dark:text-slate-400">2,757m</span>
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    Which mountain is reflected in the lake
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref('/viewpoints/zermatt-village', locale)}
                  className="group flex flex-col hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-sky-600 dark:group-hover:text-sky-400 flex items-center justify-between">
                    <span>Zermatt Village & Kirchbrücke</span>
                    <span className="text-xs font-mono text-slate-600 dark:text-slate-400">1,620m</span>
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    Iconic golden hour photography bridge
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Travel & Mountain Experience */}
          <div>
            <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100 font-semibold text-xs tracking-wider uppercase mb-3.5">
              <TrainFront className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" aria-hidden="true" />
              <span>{dict.footer.travelColumn}</span>
            </div>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href={getLocalizedHref('/trains', locale)}
                  className="group flex flex-col hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-sky-600 dark:group-hover:text-sky-400">
                    Scenic Trains Comparison
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    Gornergrat Railway vs. Glacier Express
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref('/ski', locale)}
                  className="group flex flex-col hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-sky-600 dark:group-hover:text-sky-400">
                    Zermatt Ski Paradise & Slopes
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    Klein Matterhorn & Cervinia international pistes
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref('/#webcams', locale)}
                  className="group flex flex-col hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-sky-600 dark:group-hover:text-sky-400">
                    Live Optical Webcams
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    Gornergrat, Rothorn & Trockener Steg 4K
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref('/#forecast', locale)}
                  className="group flex flex-col hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-sky-600 dark:group-hover:text-sky-400">
                    10-Day Alpine Visibility Forecast
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    Hour-by-hour summit cloud & solar telemetry
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref('/guides/zermatt-cloudy-rainy-day-guide', locale)}
                  className="group flex flex-col hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-sky-600 dark:group-hover:text-sky-400">
                    Zermatt on a Cloudy or Rainy Day
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    Matterhorn Museum, Gorner Gorge & spas
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Editorial Guides & Photography */}
          <div>
            <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100 font-semibold text-xs tracking-wider uppercase mb-3.5">
              <BookOpen className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" aria-hidden="true" />
              <span>{dict.footer.guidesColumn}</span>
            </div>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href={getLocalizedHref('/guides', locale)}
                  className="group flex flex-col hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-sky-600 dark:group-hover:text-sky-400">
                    All Alpine Field Guides
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    Essential reading for visiting Zermatt
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref('/guides/best-time-to-see-matterhorn', locale)}
                  className="group flex flex-col hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-sky-600 dark:group-hover:text-sky-400">
                    Best Time of Day to See Matterhorn
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    Thermal updrafts & morning clarity analysis
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref('/guides/best-matterhorn-photo-viewpoints', locale)}
                  className="group flex flex-col hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-sky-600 dark:group-hover:text-sky-400">
                    Best Matterhorn Photo Viewpoints
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    Golden hour lighting & lens recommendations
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref('/guides/gornergrat-vs-glacier-paradise', locale)}
                  className="group flex flex-col hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-sky-600 dark:group-hover:text-sky-400">
                    Gornergrat vs. Glacier Paradise
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    Head-to-head ticket, route & view breakdown
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref('/guides/zurich-geneva-to-zermatt-day-trip', locale)}
                  className="group flex flex-col hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-sky-600 dark:group-hover:text-sky-400">
                    Zurich & Geneva to Zermatt Day Trip
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    SBB train timetables, passes & feasibility
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Developer Tools & Open Telemetry */}
          <div>
            <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100 font-semibold text-xs tracking-wider uppercase mb-3.5">
              <Code2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" aria-hidden="true" />
              <span>{dict.footer.developersColumn}</span>
            </div>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href={getLocalizedHref('/widget', locale)}
                  className="group flex flex-col hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-sky-600 dark:group-hover:text-sky-400 flex items-center justify-between">
                    <span>Embeddable Alpine Widget</span>
                    <span className="text-xs font-semibold uppercase px-1.5 py-0.5 rounded-sm bg-sky-100 dark:bg-sky-900/60 text-sky-700 dark:text-sky-300">
                      Free
                    </span>
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    Live score badge for hotels & travel blogs
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref('/guides/matterhorn-banner-cloud-fohn-wind', locale)}
                  className="group flex flex-col hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-sky-600 dark:group-hover:text-sky-400">
                    Atmospheric Physics & Föhn Wind
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    Open-Meteo multi-altitude cloud layer modelling
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <AlpinePlanningLinks variant="footer" />

      {/* Bottom Legal, Sourcing & Geo Strip */}
      <div className="border-t border-slate-200/60 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-900/40">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-3 text-center sm:text-left">
            <span className="whitespace-nowrap">
              {dict?.footer?.copyright?.replace('{year}', currentYear.toString()) ||
                `© ${currentYear} IsTheMatterhornVisible.com. All rights reserved.`}
            </span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700" aria-hidden="true">•</span>
            <span>
              {dict?.footer?.dataSource ||
                'Atmospheric telemetry courtesy of Open-Meteo High-Resolution Alpine Model & Roundshot optical webcams.'}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 shrink-0">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 text-slate-600 dark:text-slate-300 font-mono text-xs whitespace-nowrap">
              <Compass className="w-3 h-3 text-sky-600 dark:text-sky-400 shrink-0" aria-hidden="true" />
              <span>45.9765° N, 7.7491° E</span>
            </div>

            <div className="inline-flex items-center gap-2 font-mono text-xs whitespace-nowrap text-slate-500 dark:text-slate-400">
              <Link
                href={getLocalizedHref('/widget', locale)}
                className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors underline underline-offset-2"
              >
                Widget
              </Link>
              <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">•</span>
              <Link
                href="/api/visibility"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors underline underline-offset-2"
              >
                API
              </Link>
              <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">•</span>
              <Link
                href="/sitemap.xml"
                target="_blank"
                className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors underline underline-offset-2"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
