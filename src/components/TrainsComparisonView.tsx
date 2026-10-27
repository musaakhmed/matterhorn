'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  TrainFront,
  Mountain,
  Ticket,
  ChevronRight,
  ChevronDown,
  Sparkles,
  Camera,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  ExternalLink,
} from 'lucide-react';
import { TRAINS, TRAINS_FAQS, getTrainsLiveStatus } from '@/lib/trains';
import { VisibilityApiResponse, BadgeColor } from '@/lib/types';
import { getViewpointScoreMap } from '@/lib/viewpoints';
import { getLocalizedHref, Locale } from '@/lib/i18n/config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface TrainsComparisonViewProps {
  initialData?: VisibilityApiResponse;
  locale?: Locale;
}

const BADGE_COLOR_MAP: Record<BadgeColor, { pill: string; dot: string; text: string }> = {
  emerald: {
    pill: 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-700/80 text-emerald-900 dark:text-emerald-300',
    dot: 'bg-emerald-500',
    text: 'text-emerald-700 dark:text-emerald-400',
  },
  amber: {
    pill: 'bg-amber-50 dark:bg-amber-950/60 border-amber-300 dark:border-amber-700/80 text-amber-900 dark:text-amber-300',
    dot: 'bg-amber-500',
    text: 'text-amber-700 dark:text-amber-400',
  },
  orange: {
    pill: 'bg-orange-50 dark:bg-orange-950/60 border-orange-300 dark:border-orange-700/80 text-orange-900 dark:text-orange-300',
    dot: 'bg-orange-500',
    text: 'text-orange-700 dark:text-orange-400',
  },
  rose: {
    pill: 'bg-rose-50 dark:bg-rose-950/60 border-rose-300 dark:border-rose-700/80 text-rose-900 dark:text-rose-300',
    dot: 'bg-rose-500',
    text: 'text-rose-700 dark:text-rose-400',
  },
};

export default function TrainsComparisonView({
  initialData,
  locale = 'en',
}: TrainsComparisonViewProps) {
  const liveStatus = getTrainsLiveStatus(initialData);
  const gornergrat = TRAINS.gornergrat;
  const glacier = TRAINS['glacier-express'];

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const gBadge = BADGE_COLOR_MAP[liveStatus.gornergrat.badge];
  const gexBadge = BADGE_COLOR_MAP[liveStatus.glacierExpress.statusBadgeColor as BadgeColor] || BADGE_COLOR_MAP.emerald;

  const gornergratView = initialData?.viewpoints?.gornergrat;
  const glacierView = initialData?.viewpoints?.['glacier-paradise'];

  return (
    <>
      <Header
        initialSwissTime={initialData?.swissTimeFormatted}
        activeBadgeColor={gornergratView?.currentBadgeColor}
        telemetrySummary={
          gornergratView && glacierView
            ? {
                gornergratScore: gornergratView.currentScore,
                gornergratBadge: gornergratView.currentBadgeColor,
                gornergratStatus: gornergratView.currentStatus,
                glacierScore: glacierView.currentScore,
                glacierBadge: glacierView.currentBadgeColor,
                glacierStatus: glacierView.currentStatus,
                viewpointScores: getViewpointScoreMap(initialData),
              }
            : undefined
        }
      />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8 sm:space-y-12">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
          <Link href={getLocalizedHref('/', locale)} className="hover:text-slate-900 dark:hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
          <span className="text-slate-900 dark:text-white font-semibold" aria-current="page">
            Scenic Swiss Trains (Gornergrat & Glacier Express)
          </span>
        </nav>

        {/* Hero Section */}
        <header className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 dark:bg-sky-950/80 border border-sky-200/90 dark:border-sky-800 text-sky-800 dark:text-sky-300 text-xs font-bold shadow-2xs">
            <TrainFront className="w-4 h-4 text-sky-600 dark:text-sky-400" aria-hidden="true" />
            <span>2026 Swiss Scenic Railway Field Guide & Live Telemetry</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Gornergrat Timetable & Tickets | Glacier Express Price
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Everything you need to know about Switzerland’s two most famous train experiences terminating in Zermatt: Europe’s highest open-air cogwheel railway to <strong>Gornergrat (3,089 m)</strong> and the legendary 8-hour trans-alpine <strong>Glacier Express</strong> to St. Moritz. Compare live summit visibility, Swiss Travel Pass coverage, ticket pricing, and insider seating strategies.
          </p>

          {/* Key Stat Strips */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-3.5 shadow-2xs">
              <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400">Gornergrat Altitude</span>
              <p className="text-xl font-black text-slate-900 dark:text-white mt-0.5">3,089 m</p>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">+1,485 m climb • 33 mins</span>
            </div>
            <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-3.5 shadow-2xs">
              <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400">Glacier Express Route</span>
              <p className="text-xl font-black text-slate-900 dark:text-white mt-0.5">291 km</p>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">291 bridges • 91 tunnels</span>
            </div>
            <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-3.5 shadow-2xs">
              <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400">Swiss Pass Gornergrat</span>
              <p className="text-xl font-black text-emerald-600 dark:text-emerald-400 mt-0.5">50% Off</p>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">CHF 66 return (Summer)</span>
            </div>
            <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-3.5 shadow-2xs">
              <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400">Swiss Pass Glacier Exp.</span>
              <p className="text-xl font-black text-emerald-600 dark:text-emerald-400 mt-0.5">100% Free</p>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">Seat reservation req.</span>
            </div>
          </div>
        </header>

        {/* Live Conditions Dashboard Bar */}
        <section
          aria-label="Live Telemetry for Gornergrat and Glacier Express"
          className="rounded-3xl border border-sky-200/80 dark:border-sky-900/60 bg-gradient-to-r from-sky-50/80 via-white to-sky-50/60 dark:from-slate-900 dark:via-sky-950/30 dark:to-slate-900 p-5 sm:p-6 shadow-sm space-y-4"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                Live Mountain Conditions & Rail Status Today
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Updated every 15 mins via Swiss High-Altitude Telemetry
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Gornergrat Live */}
            <div className="rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrainFront className="w-4 h-4 text-sky-600 dark:text-sky-400" aria-hidden="true" />
                  <span className="font-bold text-sm text-slate-900 dark:text-white">Gornergrat Bahn (3,089 m)</span>
                </div>
                <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-bold ${gBadge.pill}`}>
                  <span className={`w-2 h-2 rounded-full ${gBadge.dot}`} />
                  <span>{liveStatus.gornergrat.score}/10 {liveStatus.gornergrat.status}</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                {liveStatus.gornergrat.verdictText}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-slate-500 dark:text-slate-400 font-mono pt-2 border-t border-slate-100 dark:border-slate-700/80">
                <span>AM Score: {liveStatus.gornergrat.todayAmScore}/10</span>
                <span>•</span>
                <span>PM Score: {liveStatus.gornergrat.todayPmScore}/10</span>
                <span>•</span>
                <span>Mid-Cloud: {liveStatus.gornergrat.cloudMid}%</span>
                <span>•</span>
                <span>Wind: {liveStatus.gornergrat.windKmh} km/h</span>
              </div>
            </div>

            {/* Glacier Express Live */}
            <div className="rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Mountain className="w-4 h-4 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                  <span className="font-bold text-sm text-slate-900 dark:text-white">Glacier Express Corridor</span>
                </div>
                <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-bold ${gexBadge.pill}`}>
                  <span className={`w-2 h-2 rounded-full ${gexBadge.dot}`} />
                  <span>{liveStatus.glacierExpress.operatingStatusLabel}</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                {liveStatus.glacierExpress.oberalpPassStatus}. {liveStatus.glacierExpress.regionalAlternative}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-slate-500 dark:text-slate-400 font-mono pt-2 border-t border-slate-100 dark:border-slate-700/80">
                <span>Peak Elevation: 2,033 m</span>
                <span>•</span>
                <span>Terminus: Zermatt (1,604 m)</span>
                <span>•</span>
                <span>Booking Horizon: 93 Days</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Navigation Jump Anchors */}
        <nav aria-label="Page Sections" className="flex flex-wrap gap-2 pt-2">
          <a
            href="#comparison"
            className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-950 text-slate-700 dark:text-slate-300 hover:text-sky-700 dark:hover:text-sky-300 text-xs font-semibold transition-colors border border-slate-200/80 dark:border-slate-700/80"
          >
            Side-by-Side Comparison Matrix
          </a>
          <a
            href="#gornergrat"
            className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-950 text-slate-700 dark:text-slate-300 hover:text-sky-700 dark:hover:text-sky-300 text-xs font-semibold transition-colors border border-slate-200/80 dark:border-slate-700/80"
          >
            Gornergrat Railway Guide
          </a>
          <a
            href="#glacier-express"
            className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-950 text-slate-700 dark:text-slate-300 hover:text-sky-700 dark:hover:text-sky-300 text-xs font-semibold transition-colors border border-slate-200/80 dark:border-slate-700/80"
          >
            Glacier Express & Excellence Class
          </a>
          <a
            href="#tickets-passes"
            className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-950 text-slate-700 dark:text-slate-300 hover:text-sky-700 dark:hover:text-sky-300 text-xs font-semibold transition-colors border border-slate-200/80 dark:border-slate-700/80"
          >
            Swiss Travel Pass & Ticket Rules
          </a>
          <a
            href="#faqs"
            className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-950 text-slate-700 dark:text-slate-300 hover:text-sky-700 dark:hover:text-sky-300 text-xs font-semibold transition-colors border border-slate-200/80 dark:border-slate-700/80"
          >
            Frequently Asked Questions
          </a>
        </nav>

        {/* Side-by-Side Comparison Table Section */}
        <section id="comparison" className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Side-by-Side Comparison Matrix
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Direct telemetry, logistical differences, pass coverage, and seating guidance for both rail journeys.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/60 text-slate-800 dark:text-slate-200">
                    <th scope="col" className="p-4 font-bold w-1/4">Feature</th>
                    <th scope="col" className="p-4 font-bold w-3/8 text-sky-800 dark:text-sky-300">
                      Gornergrat Railway (Gornergrat Bahn)
                    </th>
                    <th scope="col" className="p-4 font-bold w-3/8 text-indigo-800 dark:text-indigo-300">
                      Glacier Express
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80 text-slate-600 dark:text-slate-300">
                  <tr>
                    <td className="p-4 font-bold text-slate-900 dark:text-white">Primary Purpose</td>
                    <td className="p-4">Mountain summit excursion to 3,089 m facing the Matterhorn East Face</td>
                    <td className="p-4">All-day trans-alpine scenic transit connecting Valais and Engadin (St. Moritz)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900 dark:text-white">Route & Termini</td>
                    <td className="p-4">{gornergrat.route}</td>
                    <td className="p-4">{glacier.route}</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900 dark:text-white">Travel Time</td>
                    <td className="p-4 font-semibold text-slate-900 dark:text-white">{gornergrat.duration}</td>
                    <td className="p-4 font-semibold text-slate-900 dark:text-white">{glacier.duration}</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900 dark:text-white">Peak Elevation</td>
                    <td className="p-4">
                      <span className="font-bold text-sky-700 dark:text-sky-400">3,089 m</span> (Gornergrat Summit)
                    </td>
                    <td className="p-4">
                      <span className="font-bold text-indigo-700 dark:text-indigo-400">2,033 m</span> (Oberalp Pass)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900 dark:text-white">Swiss Travel Pass</td>
                    <td className="p-4">
                      <span className="inline-block px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 font-bold text-xs">
                        50% Discount
                      </span>
                      <p className="text-xs text-slate-500 mt-1">CHF 66 return summer / CHF 51 winter</p>
                    </td>
                    <td className="p-4">
                      <span className="inline-block px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 font-bold text-xs">
                        100% Free Ticket
                      </span>
                      <p className="text-xs text-slate-500 mt-1">Seat reservation mandatory (CHF 39–49)</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900 dark:text-white">Eurail / Interrail</td>
                    <td className="p-4 text-rose-700 dark:text-rose-400 font-medium">No discount (Full fare applies)</td>
                    <td className="p-4 text-emerald-700 dark:text-emerald-400 font-medium">100% Ticket covered + seat reservation</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900 dark:text-white">Seat Reservations</td>
                    <td className="p-4">
                      <strong>Not required</strong> (Free seating; optional CHF 7 priority boarding)
                    </td>
                    <td className="p-4">
                      <strong className="text-amber-700 dark:text-amber-400">MANDATORY</strong> for all passengers (Opens 93 days in advance)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900 dark:text-white">Operating Season</td>
                    <td className="p-4">365 days a year (Year-round operation)</td>
                    <td className="p-4">Runs mid-Dec to mid-Oct (Annual pause mid-Oct to early Dec)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900 dark:text-white">Best Side to Sit</td>
                    <td className="p-4">
                      <strong>Right side</strong> ascending from Zermatt for direct Matterhorn views
                    </td>
                    <td className="p-4">
                      <strong>Left side</strong> for Rhine Gorge; panoramic glass covers whole carriage
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900 dark:text-white">Dogs & Pets Policy</td>
                    <td className="p-4 text-emerald-700 dark:text-emerald-400">
                      ✓ <strong>Dogs allowed</strong> (Small free in carrier; large 50% fare)
                    </td>
                    <td className="p-4 text-rose-700 dark:text-rose-400">
                      ✕ <strong>Dogs NOT allowed</strong> in panoramic coaches
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900 dark:text-white">Dining on Board</td>
                    <td className="p-4">3100 Kulmhotel restaurant & self-service summit buffet</td>
                    <td className="p-4">Fresh hot multi-course meals served at seat; 5-course in Excellence Class</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Deep Dive 1: Gornergrat Railway (Gornergrat Bahn) */}
        <section id="gornergrat" className="space-y-6 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 font-bold">
                Summit Mountain Excursion
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                Gornergrat Railway (Gornergrat Bahn)
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Europe’s highest open-air cogwheel electric railway, operating continuously since 1898.
              </p>
            </div>
            <Link
              href={getLocalizedHref('/viewpoints/gornergrat', locale)}
              className="self-start md:self-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-50 hover:bg-sky-100 dark:bg-sky-950/80 dark:hover:bg-sky-900/90 text-sky-700 dark:text-sky-300 font-bold text-xs shadow-2xs transition-colors"
            >
              <span>View Gornergrat Live Cam & Score</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* 2-column description */}
            <div className="lg:col-span-2 space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                The <strong>Gornergrat Bahn (GGB)</strong> departs directly from Zermatt Bahnhofplatz (across the square from the Swiss Federal Railways SBB station) and climbs <strong>1,485 vertical meters in just 33 minutes</strong> to the Gornergrat observation ridge at 3,089 meters.
              </p>
              <p>
                As the train ascends, it offers unbroken views of the Matterhorn’s classic triangular East Face (the famous silhouette depicted on Swiss chocolate boxes). At the summit, passengers step out onto a 360-degree observation deck surrounded by <strong>29 four-thousand-meter peaks</strong>—including Monte Rosa (4,634m, Switzerland’s highest summit) and the dramatic ice tongues of the Gorner Glacier.
              </p>

              {/* Station Stops Timeline */}
              <div className="pt-2">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3">
                  Gornergrat Station Stops & Elevations:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {gornergrat.topStations.map((station, i) => (
                    <div
                      key={station.name}
                      className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-3 text-xs"
                    >
                      <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white">
                        <span>{i + 1}. {station.name}</span>
                        <span className="font-mono text-sky-600 dark:text-sky-400">{station.elevation}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                        {station.highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pro Tip Callout */}
              <div className="rounded-2xl border border-amber-200/90 dark:border-amber-900/60 bg-amber-50/70 dark:bg-amber-950/30 p-4 text-xs text-amber-900 dark:text-amber-200 space-y-1.5">
                <div className="flex items-center gap-2 font-bold">
                  <Camera className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" aria-hidden="true" />
                  <span>The Riffelsee Reflection Hack: Hop off at Rotenboden</span>
                </div>
                <p className="leading-relaxed">
                  Your return ticket allows unlimited intermediate hop-offs. When traveling down from the summit, disembark at <strong>Rotenboden (2,815 m)</strong> and walk 10 minutes downhill to the <strong>Riffelsee</strong> alpine lake. On wind-still mornings before 11:00 AM, the Matterhorn reflects perfectly in the crystal water. You can then re-board the next train down to Zermatt at no extra charge.
                </p>
              </div>
            </div>

            {/* Quick Facts Sidebar */}
            <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-5 space-y-4 text-xs">
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">
                Gornergrat Quick Telemetry
              </h3>

              <div className="space-y-3 divide-y divide-slate-200/70 dark:divide-slate-800">
                <div className="pt-2">
                  <span className="text-slate-500 dark:text-slate-400 block font-mono text-[11px]">2026 RETURN TICKET PRICE</span>
                  <span className="font-bold text-slate-900 dark:text-white text-sm">
                    {gornergrat.ticketPricing2026.standardAdultReturn}
                  </span>
                </div>
                <div className="pt-2">
                  <span className="text-slate-500 dark:text-slate-400 block font-mono text-[11px]">WITH SWISS TRAVEL PASS</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">
                    {gornergrat.ticketPricing2026.swissPassPrice}
                  </span>
                </div>
                <div className="pt-2">
                  <span className="text-slate-500 dark:text-slate-400 block font-mono text-[11px]">FREQUENCY</span>
                  <span className="font-bold text-slate-900 dark:text-white">Every 24 minutes (Peak) / 48 mins</span>
                </div>
                <div className="pt-2">
                  <span className="text-slate-500 dark:text-slate-400 block font-mono text-[11px]">SEATING STRATEGY</span>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {gornergrat.bestSideToSit.side}
                  </span>
                  <p className="text-[11px] text-slate-500 mt-0.5">{gornergrat.bestSideToSit.reason}</p>
                </div>
                <div className="pt-2">
                  <span className="text-slate-500 dark:text-slate-400 block font-mono text-[11px]">PETS</span>
                  <span className="font-bold text-slate-900 dark:text-white">Dogs welcome on all trains</span>
                </div>
                <div className="pt-3">
                  <a
                    href="https://www.gornergrat.ch/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-xs transition-colors"
                  >
                    <span>Gornergrat Official Tickets</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 text-center mt-1.5">
                    Select Half-Fare option for 50% Swiss Travel Pass rate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Dive 2: Glacier Express */}
        <section id="glacier-express" className="space-y-6 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold">
                World’s Slowest Express Train
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                Glacier Express (Zermatt ↔ St. Moritz)
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                A 7.5 to 8-hour panoramic odyssey through the heart of the Swiss Alps across 291 bridges.
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200/90 dark:border-indigo-800 text-indigo-800 dark:text-indigo-300 text-xs font-bold shadow-2xs">
              <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
              <span>Panoramic Roof Windows</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* 2-column description */}
            <div className="lg:col-span-2 space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                Known affectionally as the <em>“slowest express train in the world”</em>, the <strong>Glacier Express</strong> connects two of Switzerland’s most prestigious alpine resorts: <strong>Zermatt</strong> (at the base of the Matterhorn in Valais) and <strong>St. Moritz</strong> (in the high Engadin valley of Graubünden).
              </p>
              <p>
                During the nearly 8-hour journey, the train negotiates three cantons, scales the <strong>Oberalp Pass (2,033 m / 6,670 ft)</strong>, plunges through the sheer limestone chasm of the <strong>Rhine Gorge (Ruinaulta)</strong>, and traverses the breathtaking 65-meter-high stone arches of the <strong>Landwasser Viaduct</strong> near Filisur.
              </p>

              {/* Class Comparison Grid */}
              <div className="pt-2 space-y-3">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Travel Classes on the Glacier Express:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-3.5 text-xs space-y-1.5">
                    <span className="font-bold text-slate-900 dark:text-white block">2nd Class</span>
                    <span className="text-[11px] text-slate-500 block">4 seats per row (2+2)</span>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                      Panoramic roof glass, fold-out tables, trolley snack cart & seat-delivered hot lunch options.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-3.5 text-xs space-y-1.5">
                    <span className="font-bold text-slate-900 dark:text-white block">1st Class</span>
                    <span className="text-[11px] text-slate-500 block">3 seats per row (2+1)</span>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                      Extra legroom, wider seats, quieter carriage ambiance, individual power sockets and audio guide.
                    </p>
                  </div>
                  <div className="rounded-xl border border-amber-300 dark:border-amber-700/80 bg-amber-50/60 dark:bg-amber-950/40 p-3.5 text-xs space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-amber-900 dark:text-amber-200">Excellence Class</span>
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" aria-hidden="true" />
                    </div>
                    <span className="text-[11px] text-amber-700 dark:text-amber-300 block">1+1 layout (Window Guaranteed)</span>
                    <p className="text-[11px] text-amber-800 dark:text-amber-300 leading-relaxed">
                      Dedicated concierge, champagne bar, 5-course regional feast with paired Swiss wines, iPad guide & high tea.
                    </p>
                  </div>
                </div>
              </div>

              {/* Critical Booking Alert */}
              <div className="rounded-2xl border border-rose-200/90 dark:border-rose-900/60 bg-rose-50/70 dark:bg-rose-950/30 p-4 text-xs text-rose-900 dark:text-rose-200 space-y-1.5">
                <div className="flex items-center gap-2 font-bold">
                  <AlertCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" aria-hidden="true" />
                  <span>Mandatory Seat Reservation Rule (93-Day Booking Window)</span>
                </div>
                <p className="leading-relaxed">
                  Even if you hold an unlimited <strong>Swiss Travel Pass</strong> or <strong>Eurail Pass</strong>, you <strong>CANNOT</strong> board the Glacier Express without a reserved seat. Seat reservations cost CHF 39 (low season) to CHF 49 (summer) and open <strong>exactly 93 days in advance</strong>. Excellence Class (only 20 seats per train) frequently sells out within minutes of the 93-day window opening.
                </p>
              </div>
            </div>

            {/* Quick Facts Sidebar */}
            <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-5 space-y-4 text-xs">
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">
                Glacier Express Telemetry
              </h3>

              <div className="space-y-3 divide-y divide-slate-200/70 dark:divide-slate-800">
                <div className="pt-2">
                  <span className="text-slate-500 dark:text-slate-400 block font-mono text-[11px]">JOURNEY DURATION</span>
                  <span className="font-bold text-slate-900 dark:text-white text-sm">7 hours 45 minutes</span>
                </div>
                <div className="pt-2">
                  <span className="text-slate-500 dark:text-slate-400 block font-mono text-[11px]">SWISS TRAVEL PASS TICKET</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">
                    100% Free Rail Ticket
                  </span>
                  <p className="text-[11px] text-slate-500 mt-0.5">+ mandatory CHF 39–49 reservation</p>
                </div>
                <div className="pt-2">
                  <span className="text-slate-500 dark:text-slate-400 block font-mono text-[11px]">PEAK ELEVATION PASS</span>
                  <span className="font-bold text-slate-900 dark:text-white">Oberalp Pass (2,033 m / 6,670 ft)</span>
                </div>
                <div className="pt-2">
                  <span className="text-slate-500 dark:text-slate-400 block font-mono text-[11px]">BEST SIDE TO SIT</span>
                  <span className="font-bold text-slate-900 dark:text-white">Left side heading East (Rhine Gorge)</span>
                </div>
                <div className="pt-2">
                  <span className="text-slate-500 dark:text-slate-400 block font-mono text-[11px]">DOGS / PETS</span>
                  <span className="font-bold text-rose-600 dark:text-rose-400">Strictly not allowed in coaches</span>
                </div>
                <div className="pt-2">
                  <span className="text-slate-500 dark:text-slate-400 block font-mono text-[11px]">ANNUAL MAINTENANCE PAUSE</span>
                  <span className="font-bold text-amber-600 dark:text-amber-400">Mid-October to Mid-December</span>
                </div>
                <div className="pt-3">
                  <a
                    href="https://www.glacierexpress.ch/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs transition-colors"
                  >
                    <span>Glacier Express Reservations</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 text-center mt-1.5">
                    Mandatory seat bookings open 93 days in advance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tickets & Swiss Travel Pass Strategy Section */}
        <section id="tickets-passes" className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Swiss Travel Pass & Ticket Booking Strategy (2026)
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              How to avoid overpaying or double-booking across both Swiss train systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-5 space-y-3">
              <div className="flex items-center gap-2 text-sky-700 dark:text-sky-400 font-extrabold text-sm">
                <Ticket className="w-4 h-4" aria-hidden="true" />
                <span>Gornergrat Bahn Ticket Strategy</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>Swiss Travel Pass / Half Fare Card:</strong> Always select the &quot;50% Half-Fare&quot; option when buying online to pay CHF 66 instead of CHF 132.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>Flexible Timing:</strong> Tickets are valid for any train all day; don’t stress about specific departure hours.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>Swiss Family Card:</strong> Children under 16 travel 100% free with their parents. Request the Family Card for free when buying your Swiss Travel Pass.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>Check Live Clarity First:</strong> Never buy non-refundable Gornergrat tickets weeks in advance. Check our live 1–10 AM/PM index on the morning of your ride.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-5 space-y-3">
              <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-extrabold text-sm">
                <Ticket className="w-4 h-4" aria-hidden="true" />
                <span>Glacier Express Reservation Strategy</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>Reserve First, Buy Pass Later:</strong> You do NOT need your Swiss Travel Pass number to book your seat reservation 93 days ahead. Simply select &quot;Seat Only / Swiss Pass&quot; at checkout.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>Budget Alternative (Regional Trains):</strong> If the Glacier Express is fully booked or on maintenance pause, regional Matterhorn Gotthard Bahn & RhB trains run the identical tracks with free travel on the Swiss Travel Pass and zero seat reservations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>Pre-order Dining:</strong> Standard class hot meals are cooked fresh in the galley. Pre-ordering online ensures your meal choice isn’t sold out on busy runs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>Luggage Forwarding:</strong> If doing the 8-hour trip, use SBB Station-to-Station luggage dispatch so you don’t manage multiple suitcases in the train aisle.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQs Accordion Section */}
        <section id="faqs" className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 font-bold">
              Traveller Knowledgebase
            </span>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Frequently Asked Questions (Gornergrat & Glacier Express)
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              The most commonly searched questions regarding passes, pricing, seating, and live weather conditions.
            </p>
          </div>

          <div className="space-y-2.5">
            {TRAINS_FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 transition-colors overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-3 text-left font-bold text-slate-900 dark:text-white text-sm hover:text-sky-700 dark:hover:text-sky-400 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`text-[11px] font-mono uppercase px-2 py-0.5 rounded font-bold ${
                        faq.train === 'gornergrat'
                          ? 'bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300'
                          : faq.train === 'glacier-express'
                          ? 'bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300'
                          : 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                      }`}>
                        {faq.train === 'gornergrat' ? 'Gornergrat' : faq.train === 'glacier-express' ? 'Glacier Exp.' : 'Combined'}
                      </span>
                      <span>{faq.question}</span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-sky-600 dark:text-sky-400' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Related Guides & Viewpoints Strip */}
        <section aria-label="Related Guides" className="pt-6 border-t border-slate-200 dark:border-slate-800">
          <h2 className="text-base font-extrabold text-slate-900 dark:text-white mb-4">
            Related Zermatt Alpine Telemetry & Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href={getLocalizedHref('/viewpoints/gornergrat', locale)}
              className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-4 hover:border-sky-300 dark:hover:border-sky-700 transition-colors group"
            >
              <span className="text-[11px] font-mono uppercase text-sky-600 dark:text-sky-400 font-bold block mb-1">
                Live Vantage Point
              </span>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-sky-600 transition-colors">
                Gornergrat (3,089 m) Live Cams & Score →
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Real-time Roundshot webcams and 10-day AM/PM summit clarity projections.
              </p>
            </Link>

            <Link
              href={getLocalizedHref('/guides/gornergrat-vs-glacier-paradise', locale)}
              className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-4 hover:border-sky-300 dark:hover:border-sky-700 transition-colors group"
            >
              <span className="text-[11px] font-mono uppercase text-sky-600 dark:text-sky-400 font-bold block mb-1">
                Comparison Guide
              </span>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-sky-600 transition-colors">
                Gornergrat vs. Glacier Paradise →
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Compare Matterhorn view angles, altitude differences (794 m), and wind resilience.
              </p>
            </Link>

            <Link
              href={getLocalizedHref('/guides/best-time-to-see-matterhorn', locale)}
              className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-4 hover:border-sky-300 dark:hover:border-sky-700 transition-colors group"
            >
              <span className="text-[11px] font-mono uppercase text-sky-600 dark:text-sky-400 font-bold block mb-1">
                Climatology Data
              </span>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-sky-600 transition-colors">
                Best Month & Time of Day to Visit →
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                30-year historical visibility statistics: Why mornings beat afternoons 78% of the year.
              </p>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer locale={locale} />
    </>
  );
}
