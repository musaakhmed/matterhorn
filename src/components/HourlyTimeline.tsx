'use client';

import React, { useRef } from 'react';
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Sunrise,
  Sunset,
  Cloud,
} from 'lucide-react';
import { BadgeColor, DayForecast, ScoreBlock } from '@/lib/types';
import VisibilityIcon from './VisibilityIcon';

interface HourlyTimelineProps {
  days: DayForecast[];
  viewpointLabel: string;
}

const PILL_STYLES: Record<
  BadgeColor,
  {
    bg: string;
    border: string;
    text: string;
    scoreBadge: string;
    dot: string;
  }
> = {
  emerald: {
    bg: 'bg-emerald-50/90 dark:bg-emerald-950/40',
    border: 'border-emerald-200 dark:border-emerald-800/80',
    text: 'text-emerald-900 dark:text-emerald-200',
    scoreBadge: 'bg-emerald-600 text-white',
    dot: 'bg-emerald-500',
  },
  amber: {
    bg: 'bg-amber-50/90 dark:bg-amber-950/40',
    border: 'border-amber-200 dark:border-amber-800/80',
    text: 'text-amber-900 dark:text-amber-200',
    scoreBadge: 'bg-amber-500 text-slate-950',
    dot: 'bg-amber-500',
  },
  orange: {
    bg: 'bg-orange-50/90 dark:bg-orange-950/40',
    border: 'border-orange-200 dark:border-orange-800/80',
    text: 'text-orange-900 dark:text-orange-200',
    scoreBadge: 'bg-orange-600 text-white',
    dot: 'bg-orange-500',
  },
  rose: {
    bg: 'bg-rose-50/90 dark:bg-rose-950/40',
    border: 'border-rose-200 dark:border-rose-800/80',
    text: 'text-rose-900 dark:text-rose-200',
    scoreBadge: 'bg-rose-600 text-white',
    dot: 'bg-rose-500',
  },
};

function PeriodPill({ block }: { block: ScoreBlock }) {
  const style = PILL_STYLES[block.badgeColor];

  return (
    <div
      className={`rounded-xl border ${style.border} ${style.bg} p-2.5 flex flex-col gap-2 transition-colors`}
    >
      <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
        <span className="inline-flex items-center gap-1">
          {block.period === 'AM' ? (
            <Sunrise className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" aria-hidden="true" />
          ) : (
            <Sunset className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" aria-hidden="true" />
          )}
          <span>{block.period === 'AM' ? 'Morning' : 'Afternoon'}</span>
        </span>
        <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400">
          {block.period === 'AM' ? '06–12' : '12–18'}
        </span>
      </div>

      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2.5 min-w-0">
          <VisibilityIcon badgeColor={block.badgeColor} size="md" />
          <span className={`text-xs font-bold truncate ${style.text}`}>
            {block.shortLabel}
          </span>
        </div>

        <span
          className={`inline-flex items-center justify-center px-2 py-0.5 rounded-md font-mono text-xs font-extrabold shrink-0 ${style.scoreBadge}`}
        >
          {block.score}/10
        </span>
      </div>

      <div className="flex items-center justify-between text-[10px] font-mono text-slate-600 dark:text-slate-400 pt-1 border-t border-slate-200/60 dark:border-slate-800">
        <span className="inline-flex items-center gap-1">
          <Cloud className="w-3 h-3 text-slate-400 dark:text-slate-500" aria-hidden="true" />
          <span>Mid {block.metrics.cloudCoverMid}%</span>
        </span>
        <span>Vis {block.metrics.visibilityKm}km</span>
      </div>
    </div>
  );
}

export default function HourlyTimeline({
  days,
  viewpointLabel,
}: HourlyTimelineProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const scrollAmount = direction === 'left' ? -360 : 360;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section
      aria-label="10-Day Matterhorn Visibility Horizon"
      className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-5 sm:p-6 shadow-xs w-full overflow-hidden"
    >
      {/* Header Row with Keyboard/Button Scroll Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4 text-sky-600 dark:text-sky-400" aria-hidden="true" />
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
              10-Day Horizon Forecast — {viewpointLabel}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
            Dual 1–10 visibility index split into Morning (06:00–12:00 CET) and Afternoon (12:00–18:00 CET)
          </p>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            type="button"
            onClick={() => handleScroll('left')}
            aria-label="Scroll 10-day forecast left"
            className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600"
          >
            <ChevronLeft className="w-4 h-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => handleScroll('right')}
            aria-label="Scroll 10-day forecast right"
            className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600"
          >
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Horizontal 10-Day Card Slider */}
      <div
        ref={sliderRef}
        className="flex items-stretch gap-3.5 overflow-x-auto no-scrollbar pb-2 pt-0.5 snap-x snap-mandatory"
      >
        {days.map((day) => {
          return (
            <div
              key={day.dateIso}
              className={`snap-start shrink-0 w-[210px] sm:w-[220px] rounded-2xl border p-3.5 flex flex-col justify-between transition-all ${
                day.isToday
                  ? 'border-sky-500 dark:border-sky-500 bg-sky-50/40 dark:bg-sky-950/40 ring-2 ring-sky-500/20 shadow-sm'
                  : 'border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xs'
              }`}
            >
              {/* Card Top Header: Day of Week + Date + TODAY Highlight */}
              <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
                      {day.dayOfWeek}
                    </span>
                    {day.isToday && (
                      <span className="px-2 py-0.5 rounded-full bg-sky-600 text-white text-[10px] font-extrabold uppercase tracking-wider">
                        TODAY
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                    {day.dateFormatted}
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400 block">
                    Peak
                  </span>
                  <span className="text-sm font-mono font-extrabold text-slate-900 dark:text-white">
                    {day.dailyPeakScore}/10
                  </span>
                </div>
              </div>

              {/* Morning & Afternoon Score Pills */}
              <div className="space-y-2.5">
                <PeriodPill block={day.morning} />
                <PeriodPill block={day.afternoon} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Scale Legend Footer */}
      <div className="mt-4 pt-3.5 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600 dark:text-slate-400">
        <div className="flex flex-wrap items-center gap-4">
          <span className="inline-flex items-center gap-1.5 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span>8–10 Visible</span>
          </span>
          <span className="inline-flex items-center gap-1.5 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span>6–7 Partially Visible</span>
          </span>
          <span className="inline-flex items-center gap-1.5 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
            <span>3–5 Barely Visible</span>
          </span>
          <span className="inline-flex items-center gap-1.5 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <span>1–2 Not Visible</span>
          </span>
        </div>
        <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
          Swipe or use arrows to view all 10 days
        </span>
      </div>
    </section>
  );
}
