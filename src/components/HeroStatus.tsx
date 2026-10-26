import React from 'react';
import {
  Sparkles,
  CloudSun,
  CloudFog,
  CloudRainWind,
  Navigation,
  Eye,
  CalendarClock,
  Sunrise,
  Sunset,
} from 'lucide-react';
import { BadgeColor, ScoreBlock, ViewpointForecastData } from '@/lib/types';
import VisibilityIcon from './VisibilityIcon';

interface HeroStatusProps {
  data: ViewpointForecastData;
}

const THEME_STYLES: Record<
  BadgeColor,
  {
    ringStroke: string;
    cardBorder: string;
    cardGradient: string;
    pillBg: string;
    pillBorder: string;
    pillText: string;
    scoreText: string;
    blockBg: string;
    blockBorder: string;
    answerWord: string;
  }
> = {
  emerald: {
    ringStroke: '#10b981',
    cardBorder: 'border-emerald-300/90 dark:border-emerald-700/60',
    cardGradient: 'from-emerald-50/75 via-white to-sky-50/40 dark:from-emerald-950/40 dark:via-slate-900/90 dark:to-sky-950/30',
    pillBg: 'bg-emerald-100/90 dark:bg-emerald-950/70',
    pillBorder: 'border-emerald-300 dark:border-emerald-700/80',
    pillText: 'text-emerald-900 dark:text-emerald-200',
    scoreText: 'text-emerald-700 dark:text-emerald-400',
    blockBg: 'bg-emerald-50/80 dark:bg-emerald-950/40',
    blockBorder: 'border-emerald-200 dark:border-emerald-800/80',
    answerWord: 'YES — CRISP VIEW (8–10)',
  },
  amber: {
    ringStroke: '#f59e0b',
    cardBorder: 'border-amber-300/90 dark:border-amber-700/60',
    cardGradient: 'from-amber-50/75 via-white to-sky-50/40 dark:from-amber-950/40 dark:via-slate-900/90 dark:to-sky-950/30',
    pillBg: 'bg-amber-100/90 dark:bg-amber-950/70',
    pillBorder: 'border-amber-300 dark:border-amber-700/80',
    pillText: 'text-amber-900 dark:text-amber-200',
    scoreText: 'text-amber-700 dark:text-amber-400',
    blockBg: 'bg-amber-50/80 dark:bg-amber-950/40',
    blockBorder: 'border-amber-200 dark:border-amber-800/80',
    answerWord: 'PARTIALLY VISIBLE (6–7)',
  },
  orange: {
    ringStroke: '#f97316',
    cardBorder: 'border-orange-300/90 dark:border-orange-700/60',
    cardGradient: 'from-orange-50/75 via-white to-slate-50/60 dark:from-orange-950/40 dark:via-slate-900/90 dark:to-slate-900/60',
    pillBg: 'bg-orange-100/90 dark:bg-orange-950/70',
    pillBorder: 'border-orange-300 dark:border-orange-700/80',
    pillText: 'text-orange-900 dark:text-orange-200',
    scoreText: 'text-orange-700 dark:text-orange-400',
    blockBg: 'bg-orange-50/80 dark:bg-orange-950/40',
    blockBorder: 'border-orange-200 dark:border-orange-800/80',
    answerWord: 'BARELY VISIBLE (3–5)',
  },
  rose: {
    ringStroke: '#f43f5e',
    cardBorder: 'border-rose-300/90 dark:border-rose-700/60',
    cardGradient: 'from-rose-50/75 via-white to-slate-50/60 dark:from-rose-950/40 dark:via-slate-900/90 dark:to-slate-900/60',
    pillBg: 'bg-rose-100/90 dark:bg-rose-950/70',
    pillBorder: 'border-rose-300 dark:border-rose-700/80',
    pillText: 'text-rose-900 dark:text-rose-200',
    scoreText: 'text-rose-700 dark:text-rose-400',
    blockBg: 'bg-rose-50/80 dark:bg-rose-950/40',
    blockBorder: 'border-rose-200 dark:border-rose-800/80',
    answerWord: 'NOT VISIBLE — SOCKED IN (1–2)',
  },
};

function StatusGlyph({ badgeColor }: { badgeColor: BadgeColor }) {
  switch (badgeColor) {
    case 'emerald':
      return <Sparkles className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" aria-hidden="true" />;
    case 'amber':
      return <CloudSun className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" aria-hidden="true" />;
    case 'orange':
      return <CloudFog className="w-3.5 h-3.5 text-orange-700 dark:text-orange-400" aria-hidden="true" />;
    case 'rose':
      return <CloudRainWind className="w-3.5 h-3.5 text-rose-700 dark:text-rose-400" aria-hidden="true" />;
  }
}

function DualPeriodCard({
  block,
  isActive,
}: {
  block: ScoreBlock;
  isActive: boolean;
}) {
  const blockStyle = THEME_STYLES[block.badgeColor];

  return (
    <div
      className={`rounded-2xl border p-4 transition-all ${
        isActive
          ? `${blockStyle.blockBorder} ${blockStyle.blockBg} ring-2 ring-sky-500/25 dark:ring-sky-400/30 shadow-xs`
          : 'border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/60'
      }`}
    >
      <div className="flex items-center justify-between gap-2 mb-2.5">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
          {block.period === 'AM' ? (
            <Sunrise className="w-4 h-4 text-amber-600 dark:text-amber-400" aria-hidden="true" />
          ) : (
            <Sunset className="w-4 h-4 text-sky-600 dark:text-sky-400" aria-hidden="true" />
          )}
          <span>
            {block.period === 'AM' ? 'Morning (AM)' : 'Afternoon (PM)'}
          </span>
        </div>

        {isActive ? (
          <span className="px-2 py-0.5 rounded-full bg-sky-600 text-white text-[10px] font-bold uppercase tracking-wider">
            Active Now
          </span>
        ) : (
          <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
            {block.timeRangeLabel}
          </span>
        )}
      </div>

      <div className="flex items-center justify-between gap-3 mt-1">
        <div className="flex items-center gap-3">
          <VisibilityIcon
            badgeColor={block.badgeColor}
            size="lg"
            className="shadow-sm"
          />
          <div className="flex items-baseline gap-1">
            <span
              className={`text-3xl font-extrabold font-mono ${blockStyle.scoreText}`}
            >
              {block.score}
            </span>
            <span className="text-sm font-bold text-slate-500 dark:text-slate-400">/10</span>
          </div>
        </div>

        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-bold ${blockStyle.pillBg} ${blockStyle.pillBorder} ${blockStyle.pillText}`}
        >
          <StatusGlyph badgeColor={block.badgeColor} />
          <span>{block.status}</span>
        </span>
      </div>

      <div className="mt-3 pt-2 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-600 dark:text-slate-400">
        <span>{block.timeRangeLabel}</span>
        <span>Mid-Cloud: {block.metrics.cloudCoverMid}%</span>
      </div>
    </div>
  );
}

export default function HeroStatus({ data }: HeroStatusProps) {
  const style = THEME_STYLES[data.currentBadgeColor];
  const radius = 72;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (data.currentScore / 10) * circumference;

  return (
    <section
      aria-label="Current Matterhorn Visibility Verdict"
      className={`relative overflow-hidden rounded-3xl border ${style.cardBorder} bg-gradient-to-br ${style.cardGradient} shadow-[0_10px_30px_-10px_rgba(15,23,42,0.08)] dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] p-6 sm:p-8 lg:p-10 transition-all`}
    >
      {/* Subtle Swiss Grid Pattern Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.15]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, rgba(148,163,184,0.35) 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
        {/* Left: Hero Visibility Illustration + 1–10 Circular Index Ring */}
        <div className="lg:col-span-4 min-w-0 flex flex-col items-center justify-center">
          {/* Primary Hero Illustration Badge */}
          <div className="mb-4 flex flex-col items-center">
            <VisibilityIcon
              badgeColor={data.currentBadgeColor}
              size="xl"
              decorative={false}
              preload={true}
              className="shadow-md ring-4 ring-white dark:ring-slate-800"
            />
          </div>

          <div className="relative w-48 h-48 sm:w-52 sm:h-52 flex items-center justify-center bg-white/80 dark:bg-slate-900/90 rounded-full shadow-inner border border-slate-200/70 dark:border-slate-800">
            <svg
              className="w-full h-full -rotate-90 transform"
              viewBox="0 0 168 168"
              role="img"
              aria-label={`Visibility Index ${data.currentScore} out of 10`}
            >
              <circle
                cx="84"
                cy="84"
                r={radius}
                fill="transparent"
                stroke="currentColor"
                className="text-slate-200 dark:text-slate-800"
                strokeWidth="10"
              />
              <circle
                cx="84"
                cy="84"
                r={radius}
                fill="transparent"
                stroke={style.ringStroke}
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-700 ease-out"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
              <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 leading-none">
                {data.activePeriod} Index
              </span>
              <div className="flex items-baseline justify-center gap-0.5 my-1 leading-none">
                <span
                  className={`text-5xl sm:text-[54px] font-extrabold tracking-tight font-mono leading-none ${style.scoreText}`}
                >
                  {data.currentScore}
                </span>
                <span className="text-base sm:text-lg font-bold text-slate-400 dark:text-slate-500 leading-none">
                  /10
                </span>
              </div>
              <span className="text-[10px] sm:text-[10.5px] font-semibold tracking-tight text-slate-600 dark:text-slate-300 leading-tight whitespace-nowrap">
                {data.viewpoint.shortLabel}
              </span>
            </div>
          </div>

          {/* High-Contrast Status Pill */}
          <div
            className={`mt-3.5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border ${style.pillBg} ${style.pillBorder} ${style.pillText} text-xs sm:text-sm font-bold tracking-wide uppercase shadow-2xs`}
          >
            <StatusGlyph badgeColor={data.currentBadgeColor} />
            <span>{data.currentStatus}</span>
          </div>
        </div>

        {/* Right: Verdict, Today's AM/PM Dual Index & Guide Dispatch */}
        <div className="lg:col-span-8 min-w-0 flex flex-col justify-between space-y-5 text-center lg:text-left">
          <div className="space-y-1.5">
            <p className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wide text-sky-700 dark:text-sky-400 leading-relaxed">
              <Eye
                className="inline-block w-3.5 h-3.5 mr-1.5 -mt-0.5 align-middle shrink-0"
                aria-hidden="true"
              />
              <span>
                {data.viewpoint.name} ({data.viewpoint.elevation.toLocaleString()}m)
              </span>
              <span className="mx-1.5" aria-hidden="true">
                •
              </span>
              <span className="whitespace-nowrap">{style.answerWord}</span>
            </p>

            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight break-words">
              {data.verdictSummary}
            </h2>
          </div>

          {/* Today's Morning (AM) & Afternoon (PM) Dual Index Split */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            <DualPeriodCard
              block={data.today.morning}
              isActive={data.activePeriod === 'AM'}
            />
            <DualPeriodCard
              block={data.today.afternoon}
              isActive={data.activePeriod === 'PM'}
            />
          </div>

          {/* Zermatt Mountain Guide Box */}
          <div className="rounded-2xl bg-white/95 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 p-4 sm:p-5 text-left shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
              <Navigation
                className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400"
                aria-hidden="true"
              />
              <span>Zermatt Mountain Guide Dispatch</span>
            </div>
            <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
              &ldquo;{data.guideAdvice}&rdquo;
            </p>
          </div>

          {/* Bottom Summary Strip */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-0.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 shadow-2xs">
              <CalendarClock
                className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0"
                aria-hidden="true"
              />
              <span>
                Best Upcoming Block:{' '}
                <strong className="font-mono text-slate-900 dark:text-white">
                  {data.bestBlockNext48h.dayLabel} {data.bestBlockNext48h.period}
                </strong>{' '}
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">
                  ({data.bestBlockNext48h.score}/10 — {data.bestBlockNext48h.status})
                </span>
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 shadow-2xs">
              <span>
                3,000–5,000m Mid-Cloud:{' '}
                <strong className="font-mono text-slate-900 dark:text-white">
                  {data.metrics.cloudCoverMid}%
                </strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
