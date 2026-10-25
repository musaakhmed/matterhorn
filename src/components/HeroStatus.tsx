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

interface HeroStatusProps {
  data: ViewpointForecastData;
}

const LIGHT_THEME_STYLES: Record<
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
    ringStroke: '#059669',
    cardBorder: 'border-emerald-300/90',
    cardGradient: 'from-emerald-50/75 via-white to-sky-50/40',
    pillBg: 'bg-emerald-100/90',
    pillBorder: 'border-emerald-300',
    pillText: 'text-emerald-900',
    scoreText: 'text-emerald-700',
    blockBg: 'bg-emerald-50/80',
    blockBorder: 'border-emerald-200',
    answerWord: 'YES — CRISP VIEW (8–10)',
  },
  amber: {
    ringStroke: '#D97706',
    cardBorder: 'border-amber-300/90',
    cardGradient: 'from-amber-50/75 via-white to-sky-50/40',
    pillBg: 'bg-amber-100/90',
    pillBorder: 'border-amber-300',
    pillText: 'text-amber-900',
    scoreText: 'text-amber-700',
    blockBg: 'bg-amber-50/80',
    blockBorder: 'border-amber-200',
    answerWord: 'PARTIALLY VISIBLE (6–7)',
  },
  orange: {
    ringStroke: '#EA580C',
    cardBorder: 'border-orange-300/90',
    cardGradient: 'from-orange-50/75 via-white to-slate-50/60',
    pillBg: 'bg-orange-100/90',
    pillBorder: 'border-orange-300',
    pillText: 'text-orange-900',
    scoreText: 'text-orange-700',
    blockBg: 'bg-orange-50/80',
    blockBorder: 'border-orange-200',
    answerWord: 'BARELY VISIBLE (3–5)',
  },
  rose: {
    ringStroke: '#E11D48',
    cardBorder: 'border-rose-300/90',
    cardGradient: 'from-rose-50/75 via-white to-slate-50/60',
    pillBg: 'bg-rose-100/90',
    pillBorder: 'border-rose-300',
    pillText: 'text-rose-900',
    scoreText: 'text-rose-700',
    blockBg: 'bg-rose-50/80',
    blockBorder: 'border-rose-200',
    answerWord: 'NOT VISIBLE — SOCKED IN (1–2)',
  },
};

function StatusIcon({ badgeColor }: { badgeColor: BadgeColor }) {
  switch (badgeColor) {
    case 'emerald':
      return <Sparkles className="w-4 h-4 text-emerald-700" aria-hidden="true" />;
    case 'amber':
      return <CloudSun className="w-4 h-4 text-amber-700" aria-hidden="true" />;
    case 'orange':
      return <CloudFog className="w-4 h-4 text-orange-700" aria-hidden="true" />;
    case 'rose':
      return <CloudRainWind className="w-4 h-4 text-rose-700" aria-hidden="true" />;
  }
}

function DualPeriodCard({
  block,
  isActive,
}: {
  block: ScoreBlock;
  isActive: boolean;
}) {
  const blockStyle = LIGHT_THEME_STYLES[block.badgeColor];

  return (
    <div
      className={`rounded-2xl border p-4 transition-all ${
        isActive
          ? `${blockStyle.blockBorder} ${blockStyle.blockBg} ring-2 ring-sky-500/25 shadow-xs`
          : 'border-slate-200 bg-slate-50/80'
      }`}
    >
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700">
          {block.period === 'AM' ? (
            <Sunrise className="w-4 h-4 text-amber-600" aria-hidden="true" />
          ) : (
            <Sunset className="w-4 h-4 text-sky-600" aria-hidden="true" />
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
          <span className="text-[11px] font-mono text-slate-500">
            {block.timeRangeLabel}
          </span>
        )}
      </div>

      <div className="flex items-baseline justify-between gap-2 mt-1">
        <div className="flex items-baseline gap-1">
          <span
            className={`text-3xl font-extrabold font-mono ${blockStyle.scoreText}`}
          >
            {block.score}
          </span>
          <span className="text-sm font-bold text-slate-500">/10</span>
        </div>

        <span
          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border text-xs font-bold ${blockStyle.pillBg} ${blockStyle.pillBorder} ${blockStyle.pillText}`}
        >
          <StatusIcon badgeColor={block.badgeColor} />
          <span>{block.status}</span>
        </span>
      </div>

      <div className="mt-2.5 pt-2 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono text-slate-600">
        <span>{block.timeRangeLabel}</span>
        <span>Mid-Cloud: {block.metrics.cloudCoverMid}%</span>
      </div>
    </div>
  );
}

export default function HeroStatus({ data }: HeroStatusProps) {
  const style = LIGHT_THEME_STYLES[data.currentBadgeColor];
  const radius = 68;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (data.currentScore / 10) * circumference;

  return (
    <section
      aria-label="Current Matterhorn Visibility Verdict"
      className={`relative overflow-hidden rounded-3xl border ${style.cardBorder} bg-gradient-to-br ${style.cardGradient} shadow-[0_10px_30px_-10px_rgba(15,23,42,0.08)] p-6 sm:p-8 lg:p-10 transition-all`}
    >
      {/* Subtle Swiss Grid Pattern Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, rgba(148,163,184,0.35) 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
        {/* Left: 1–10 Circular Index Ring */}
        <div className="lg:col-span-4 min-w-0 flex flex-col items-center justify-center">
          <div className="relative w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center bg-white/80 rounded-full shadow-inner border border-slate-200/70">
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
                stroke="#E2E8F0"
                strokeWidth="12"
              />
              <circle
                cx="84"
                cy="84"
                r={radius}
                fill="transparent"
                stroke={style.ringStroke}
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-700 ease-out"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-500">
                {data.activePeriod} Index
              </span>
              <div className="flex items-baseline gap-0.5 mt-0.5">
                <span
                  className={`text-5xl sm:text-6xl font-extrabold tracking-tight font-mono ${style.scoreText}`}
                >
                  {data.currentScore}
                </span>
                <span className="text-xl font-bold text-slate-400">/10</span>
              </div>
              <span className="mt-1 text-[11px] font-semibold text-slate-600">
                {data.viewpoint.shortLabel}
              </span>
            </div>
          </div>

          {/* High-Contrast Status Pill */}
          <div
            className={`mt-3.5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border ${style.pillBg} ${style.pillBorder} ${style.pillText} text-xs sm:text-sm font-bold tracking-wide uppercase shadow-2xs`}
          >
            <StatusIcon badgeColor={data.currentBadgeColor} />
            <span>{data.currentStatus}</span>
          </div>
        </div>

        {/* Right: Verdict, Today's AM/PM Dual Index & Guide Dispatch */}
        <div className="lg:col-span-8 min-w-0 flex flex-col justify-between space-y-5 text-center lg:text-left">
          <div className="space-y-1.5">
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-1.5 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-sky-700">
              <Eye className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>
                {data.viewpoint.name} ({data.viewpoint.elevation.toLocaleString()}m) • {style.answerWord}
              </span>
            </div>

            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight break-words">
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
          <div className="rounded-2xl bg-white/95 border border-slate-200/90 p-4 sm:p-5 text-left shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
              <Navigation
                className="w-3.5 h-3.5 text-sky-600"
                aria-hidden="true"
              />
              <span>Zermatt Mountain Guide Dispatch</span>
            </div>
            <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
              &ldquo;{data.guideAdvice}&rdquo;
            </p>
          </div>

          {/* Bottom Summary Strip */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-0.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-700 shadow-2xs">
              <CalendarClock
                className="w-4 h-4 text-emerald-600 shrink-0"
                aria-hidden="true"
              />
              <span>
                Best Upcoming Block:{' '}
                <strong className="font-mono text-slate-900">
                  {data.bestBlockNext48h.dayLabel} {data.bestBlockNext48h.period}
                </strong>{' '}
                <span className="text-emerald-700 font-bold">
                  ({data.bestBlockNext48h.score}/10 — {data.bestBlockNext48h.status})
                </span>
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-700 shadow-2xs">
              <span>
                3,000–5,000m Mid-Cloud:{' '}
                <strong className="font-mono text-slate-900">
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
