'use client';

import React from 'react';
import Link from 'next/link';
import {
  TrainFront,
  ArrowRight,
  CheckCircle2,
  Ticket,
  Clock,
  Sparkles,
  Mountain,
  Eye,
  Camera,
} from 'lucide-react';
import { VisibilityApiResponse, BadgeColor } from '@/lib/types';
import { getTrainsLiveStatus, TRAINS } from '@/lib/trains';
import { useTranslation } from '@/lib/i18n/context';
import { getLocalizedHref } from '@/lib/i18n/config';

interface ScenicTrainsCardProps {
  initialData?: VisibilityApiResponse;
}

const BADGE_PILL_STYLES: Record<BadgeColor, { bg: string; dot: string; text: string; border: string }> = {
  emerald: {
    bg: 'bg-emerald-50 dark:bg-emerald-950/60',
    dot: 'bg-emerald-500',
    text: 'text-emerald-800 dark:text-emerald-300',
    border: 'border-emerald-200 dark:border-emerald-800',
  },
  amber: {
    bg: 'bg-amber-50 dark:bg-amber-950/60',
    dot: 'bg-amber-500',
    text: 'text-amber-800 dark:text-amber-300',
    border: 'border-amber-200 dark:border-amber-800',
  },
  orange: {
    bg: 'bg-orange-50 dark:bg-orange-950/60',
    dot: 'bg-orange-500',
    text: 'text-orange-800 dark:text-orange-300',
    border: 'border-orange-200 dark:border-orange-800',
  },
  rose: {
    bg: 'bg-rose-50 dark:bg-rose-950/60',
    dot: 'bg-rose-500',
    text: 'text-rose-800 dark:text-rose-300',
    border: 'border-rose-200 dark:border-rose-800',
  },
};

export default function ScenicTrainsCard({ initialData }: ScenicTrainsCardProps) {
  const { locale } = useTranslation();
  const liveStatus = getTrainsLiveStatus(initialData);
  const gornergrat = TRAINS.gornergrat;
  const glacier = TRAINS['glacier-express'];

  const gBadge = BADGE_PILL_STYLES[liveStatus.gornergrat.badge];
  const gexBadge = BADGE_PILL_STYLES[liveStatus.glacierExpress.statusBadgeColor as BadgeColor] || BADGE_PILL_STYLES.emerald;

  return (
    <section
      aria-label="Scenic Swiss Mountain Trains: Gornergrat Bahn & Glacier Express"
      className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 shadow-sm overflow-hidden"
    >
      {/* Top Banner Header */}
      <div className="p-5 sm:p-6 pb-4 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 ring-1 ring-sky-200/80 dark:ring-sky-800/80">
              <TrainFront className="w-5 h-5" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
                Zermatt Scenic Mountain Trains: Live Conditions & Passes
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Gornergrat Railway (3,089 m cogwheel) & Glacier Express (panoramic trans-alpine rail)
              </p>
            </div>
          </div>
        </div>

        <Link
          href={getLocalizedHref('/trains', locale)}
          className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-sky-100 dark:bg-slate-800 dark:hover:bg-sky-950/80 text-sky-700 dark:text-sky-300 hover:text-sky-900 dark:hover:text-sky-200 text-xs font-bold transition-all group"
        >
          <span>Detailed Guide & Tickets</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>

      {/* Two Trains Cards Grid */}
      <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {/* Train 1: Gornergrat Railway (Gornergrat Bahn) */}
        <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 p-4 sm:p-5 flex flex-col justify-between gap-4 transition-all hover:border-sky-300 dark:hover:border-sky-700">
          <div className="space-y-3.5">
            {/* Top row: Name & Live Status Pill */}
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-sky-600 dark:text-sky-400">
                  {gornergrat.germanName}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {gornergrat.name}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {gornergrat.route}
                </p>
              </div>

              {/* Gornergrat Live Telemetry Pill */}
              <div
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-extrabold shadow-2xs shrink-0 ${gBadge.bg} ${gBadge.border} ${gBadge.text}`}
                title="Current live Matterhorn summit visibility score at Gornergrat (3,089m)"
              >
                <span className={`w-2 h-2 rounded-full animate-pulse ${gBadge.dot}`} />
                <span>{liveStatus.gornergrat.score}/10 {liveStatus.gornergrat.status}</span>
              </div>
            </div>

            {/* Live Weather & Telemetry Snapshot */}
            <div className="rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/80 p-3 text-xs space-y-1.5">
              <div className="flex items-center justify-between text-slate-700 dark:text-slate-300">
                <span className="flex items-center gap-1 font-semibold text-slate-900 dark:text-white">
                  <Eye className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" aria-hidden="true" />
                  Live Summit Clarity:
                </span>
                <span className="font-mono font-bold text-slate-800 dark:text-slate-200">
                  AM: {liveStatus.gornergrat.todayAmScore}/10 • PM: {liveStatus.gornergrat.todayPmScore}/10
                </span>
              </div>
              <div className="flex items-center justify-between text-slate-600 dark:text-slate-400 text-[11px]">
                <span>Cloud: {liveStatus.gornergrat.cloudMid}% mid-layer</span>
                <span>Wind: {liveStatus.gornergrat.windKmh} km/h</span>
                <span>Summit: {liveStatus.gornergrat.tempEstimated}</span>
              </div>
              <p className="text-[11px] font-medium text-slate-600 dark:text-slate-300 pt-1 border-t border-slate-100 dark:border-slate-700/70">
                {liveStatus.gornergrat.verdictText}
              </p>
            </div>

            {/* Key Specs List */}
            <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
                <span><strong>Duration:</strong> 33 mins from Zermatt • +1,485 m climb • Runs 365 days</span>
              </div>
              <div className="flex items-start gap-2">
                <Ticket className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="inline-block px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 text-[11px] font-bold mr-1.5">
                    Swiss Travel Pass: 50% Off
                  </span>
                  <span>(Pay CHF 66 summer / CHF 51 winter return)</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <Camera className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" aria-hidden="true" />
                <span><strong>Photo Tip:</strong> Sit on the <strong>Right Side</strong> ascending for Matterhorn views</span>
              </div>
            </div>
          </div>

          {/* Action Link */}
          <div className="pt-2 border-t border-slate-200/70 dark:border-slate-800 flex items-center justify-between">
            <Link
              href={getLocalizedHref('/viewpoints/gornergrat', locale)}
              className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-sky-700 dark:hover:text-sky-300 underline underline-offset-4"
            >
              Gornergrat Live Cam & Scores
            </Link>
            <Link
              href={getLocalizedHref('/trains#gornergrat', locale)}
              className="inline-flex items-center gap-1 text-xs font-bold text-sky-700 dark:text-sky-400 hover:text-sky-900 dark:hover:text-sky-300 group"
            >
              <span>Tickets & Station Stops</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Train 2: Glacier Express */}
        <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 p-4 sm:p-5 flex flex-col justify-between gap-4 transition-all hover:border-sky-300 dark:hover:border-sky-700">
          <div className="space-y-3.5">
            {/* Top row: Name & Operational Status Pill */}
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-indigo-600 dark:text-indigo-400">
                  {glacier.germanName}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {glacier.name}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {glacier.route}
                </p>
              </div>

              {/* Glacier Express Status Pill */}
              <div
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-extrabold shadow-2xs shrink-0 ${gexBadge.bg} ${gexBadge.border} ${gexBadge.text}`}
                title="Current operational status of the Glacier Express"
              >
                <span className={`w-2 h-2 rounded-full animate-pulse ${gexBadge.dot}`} />
                <span>{liveStatus.glacierExpress.operatingStatusLabel}</span>
              </div>
            </div>

            {/* Alpine Route Corridor Status */}
            <div className="rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/80 p-3 text-xs space-y-1.5">
              <div className="flex items-center justify-between text-slate-700 dark:text-slate-300">
                <span className="flex items-center gap-1 font-semibold text-slate-900 dark:text-white">
                  <Mountain className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                  Route Pass Conditions:
                </span>
                <span className="font-mono font-bold text-slate-800 dark:text-slate-200">
                  2,033 m Peak Pass
                </span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400">
                {liveStatus.glacierExpress.oberalpPassStatus}
              </p>
              <p className="text-[11px] font-medium text-slate-600 dark:text-slate-300 pt-1 border-t border-slate-100 dark:border-slate-700/70">
                {liveStatus.glacierExpress.regionalAlternative}
              </p>
            </div>

            {/* Key Specs List */}
            <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
                <span><strong>Duration:</strong> 7h 45m Zermatt ↔ St. Moritz • 291 bridges & 91 tunnels</span>
              </div>
              <div className="flex items-start gap-2">
                <Ticket className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="inline-block px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 text-[11px] font-bold mr-1.5">
                    Swiss Travel Pass: 100% Free Ticket
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">(Seat Reservation Mandatory: CHF 39–49)</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" aria-hidden="true" />
                <span><strong>Excellence Class:</strong> Guaranteed window, 5-course gourmet meal & concierge</span>
              </div>
            </div>
          </div>

          {/* Action Link */}
          <div className="pt-2 border-t border-slate-200/70 dark:border-slate-800 flex items-center justify-between">
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              Booking window: 93 days in advance
            </span>
            <Link
              href={getLocalizedHref('/trains#glacier-express', locale)}
              className="inline-flex items-center gap-1 text-xs font-bold text-sky-700 dark:text-sky-400 hover:text-sky-900 dark:hover:text-sky-300 group"
            >
              <span>Route & Booking Rules</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Connecting Journey Footer Strip */}
      <div className="px-5 sm:px-6 py-3.5 bg-slate-100/70 dark:bg-slate-800/60 border-t border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" aria-hidden="true" />
          <span>
            <strong>Smart Alpine Itinerary:</strong> Arrive on the Glacier Express in Zermatt, then catch the first Gornergrat cogwheel train at sunrise for peak Matterhorn clarity.
          </span>
        </div>
        <Link
          href={getLocalizedHref('/trains', locale)}
          className="shrink-0 font-bold text-sky-700 dark:text-sky-400 hover:text-sky-900 dark:hover:text-sky-300 inline-flex items-center gap-1"
        >
          <span>Compare Both Trains Side-by-Side</span>
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
