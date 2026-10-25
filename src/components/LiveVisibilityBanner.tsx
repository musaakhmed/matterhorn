import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Radio, BookOpen } from 'lucide-react';
import { fetchMatterhornVisibility } from '@/lib/weather';
import { BadgeColor } from '@/lib/types';
import VisibilityIcon from './VisibilityIcon';

const SCORE_PILL_STYLES: Record<BadgeColor, string> = {
  emerald: 'bg-emerald-50 border-emerald-300 text-emerald-900',
  amber: 'bg-amber-50 border-amber-300 text-amber-900',
  orange: 'bg-orange-50 border-orange-300 text-orange-900',
  rose: 'bg-rose-50 border-rose-300 text-rose-900',
};

export default async function LiveVisibilityBanner() {
  const telemetry = await fetchMatterhornVisibility();
  const gornergrat = telemetry.viewpoints.gornergrat;
  const glacier = telemetry.viewpoints['glacier-paradise'];

  return (
    <header className="w-full border-b border-slate-200/90 bg-white/90 backdrop-blur-xl sticky top-0 z-40 shadow-[0_1px_3px_rgba(15,23,42,0.04)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
        {/* Left: Brand Identity + Section Nav */}
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            className="flex items-center gap-3 min-w-0 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 rounded-xl"
          >
            <div className="relative shrink-0">
              <VisibilityIcon
                badgeColor={gornergrat.currentBadgeColor}
                size="md"
                className="shadow-sm"
              />
              <span
                className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white"
                title="Live Atmospheric Telemetry"
              />
            </div>
            <div className="min-w-0">
              <span className="block text-xs sm:text-sm font-extrabold tracking-tight text-slate-900 uppercase truncate group-hover:text-sky-700 transition-colors">
                IS THE MATTERHORN VISIBLE?
              </span>
              <span className="block text-[11px] font-mono text-slate-500">
                Zermatt 4,478m • Live Telemetry &amp; Field Guides
              </span>
            </div>
          </Link>

          <Link
            href="/guides"
            className="inline-flex lg:hidden items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-xs font-bold text-slate-800 transition-colors shrink-0"
          >
            <BookOpen className="w-3.5 h-3.5 text-sky-600" aria-hidden="true" />
            <span>All Guides</span>
          </Link>
        </div>

        {/* Right: Live Viewpoint Score Pills + Funnel CTA to Dashboard */}
        <div className="flex flex-wrap items-center justify-between sm:justify-end gap-2">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 mr-0.5">
              <Radio className="w-3.5 h-3.5 text-emerald-600 animate-pulse" aria-hidden="true" />
              <span>Live Now:</span>
            </span>

            {/* Gornergrat Live Pill */}
            <Link
              href="/"
              className={`inline-flex items-center gap-1.5 pl-1.5 pr-2.5 py-1 rounded-lg border text-xs font-mono font-bold transition-transform hover:-translate-y-0.5 ${SCORE_PILL_STYLES[gornergrat.currentBadgeColor]}`}
              title={`Gornergrat (3,089m): ${gornergrat.currentScore}/10 ${gornergrat.currentStatus}`}
            >
              <VisibilityIcon
                badgeColor={gornergrat.currentBadgeColor}
                size="xs"
              />
              <span>Gornergrat: {gornergrat.currentScore}/10</span>
            </Link>

            {/* Glacier Paradise Live Pill */}
            <Link
              href="/"
              className={`inline-flex items-center gap-1.5 pl-1.5 pr-2.5 py-1 rounded-lg border text-xs font-mono font-bold transition-transform hover:-translate-y-0.5 ${SCORE_PILL_STYLES[glacier.currentBadgeColor]}`}
              title={`Glacier Paradise (3,883m): ${glacier.currentScore}/10 ${glacier.currentStatus}`}
            >
              <VisibilityIcon
                badgeColor={glacier.currentBadgeColor}
                size="xs"
              />
              <span>Glacier Paradise: {glacier.currentScore}/10</span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/guides"
              className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-xs font-bold text-slate-800 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5 text-sky-600" aria-hidden="true" />
              <span>All Guides</span>
            </Link>

            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold shadow-xs transition-colors"
            >
              <span>Live 10-Day Forecast</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
