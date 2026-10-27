'use client';

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
import FramedPhoto from './FramedPhoto';
import { useTranslation } from '@/lib/i18n/context';
import type { PlacePhoto } from '@/lib/place-photos';
import {
  getLocalizedVerdictSummary,
  getLocalizedGuideAdvice,
  getLocalizedViewpointLabel,
} from '@/lib/i18n/dispatch';

interface HeroStatusProps {
  data: ViewpointForecastData;
  photo: PlacePhoto;
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
  const { dict } = useTranslation();
  const blockStyle = THEME_STYLES[block.badgeColor];
  const statusLabel =
    dict.hero.statuses[
      block.badgeColor === 'emerald'
        ? 'visible'
        : block.badgeColor === 'amber'
        ? 'partiallyVisible'
        : block.badgeColor === 'orange'
        ? 'barelyVisible'
        : 'notVisible'
    ] || block.status;

  return (
    <div
      className={`rounded-2xl border p-3.5 sm:p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs flex flex-col justify-between ${
        isActive
          ? `${blockStyle.blockBorder} ${blockStyle.blockBg} ring-2 ring-sky-500/25 dark:ring-sky-400/30 shadow-xs`
          : 'border-slate-200/90 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60'
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
            {block.period === 'AM' ? (
              <Sunrise className="w-4 h-4 text-amber-600 dark:text-amber-400" aria-hidden="true" />
            ) : (
              <Sunset className="w-4 h-4 text-sky-600 dark:text-sky-400" aria-hidden="true" />
            )}
            <span>
              {block.period === 'AM' ? dict.hero.morningLabel : dict.hero.afternoonLabel}
            </span>
          </div>

          {isActive ? (
            <span className="px-2 py-0.5 rounded-full bg-sky-600 text-white text-xs font-bold uppercase tracking-wider">
              {dict.hero.activeNow}
            </span>
          ) : (
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              {block.timeRangeLabel}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between gap-2 my-1">
          <div className="flex items-baseline gap-1">
            <span
              className={`text-2xl sm:text-3xl font-extrabold font-mono ${blockStyle.scoreText}`}
            >
              {block.score}
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-400 dark:text-slate-500">/10</span>
          </div>

          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-bold ${blockStyle.pillBg} ${blockStyle.pillBorder} ${blockStyle.pillText}`}
          >
            <StatusGlyph badgeColor={block.badgeColor} />
            <span>{statusLabel}</span>
          </span>
        </div>
      </div>

      <div className="mt-2.5 pt-2 border-t border-slate-200/70 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
        <span>{block.timeRangeLabel}</span>
        <span>{dict.hero.midCloudLabel}: {block.metrics.cloudCoverMid}%</span>
      </div>
    </div>
  );
}

export default function HeroStatus({ data, photo }: HeroStatusProps) {
  const { dict, locale } = useTranslation();
  const style = THEME_STYLES[data.currentBadgeColor];
  const radius = 68;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (data.currentScore / 10) * circumference;

  const verdictSummary = getLocalizedVerdictSummary(data.currentBadgeColor, locale);
  const guideAdvice = getLocalizedGuideAdvice(data, locale, dict);
  const vpLabel = getLocalizedViewpointLabel(data.viewpoint.id, locale);

  const answerWord = dict.hero.answerWords[data.currentBadgeColor] || style.answerWord;
  const currentStatusLabel =
    dict.hero.statuses[
      data.currentBadgeColor === 'emerald'
        ? 'visible'
        : data.currentBadgeColor === 'amber'
        ? 'partiallyVisible'
        : data.currentBadgeColor === 'orange'
        ? 'barelyVisible'
        : 'notVisible'
    ] || data.currentStatus;

  const bestDayLabel = data.bestBlockNext48h.dayLabel.toLowerCase().includes('today')
    ? dict.timeline.today
    : data.bestBlockNext48h.dayLabel.toLowerCase().includes('tomorrow')
    ? dict.timeline.tomorrow
    : data.bestBlockNext48h.dayLabel;

  const bestPeriodLabel =
    data.bestBlockNext48h.period === 'AM'
      ? dict.hero.morningLabel
      : dict.hero.afternoonLabel;

  const bestStatusKey =
    data.bestBlockNext48h.badgeColor === 'emerald'
      ? 'visible'
      : data.bestBlockNext48h.badgeColor === 'amber'
      ? 'partiallyVisible'
      : data.bestBlockNext48h.badgeColor === 'orange'
      ? 'barelyVisible'
      : 'notVisible';
  const bestStatusLabel = dict.hero.statuses[bestStatusKey] || data.bestBlockNext48h.status;

  return (
    <section
      aria-label={dict.hero.verdictAria}
      className={`relative overflow-hidden rounded-3xl border ${style.cardBorder} bg-gradient-to-br ${style.cardGradient} shadow-sm p-5 sm:p-7 lg:p-8 transition-colors duration-200 ease-out`}
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

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Gauge is supporting. On small screens the sentence comes first. */}
        <div className="order-2 lg:order-1 lg:col-span-5 xl:col-span-4 min-w-0">
          <FramedPhoto
            photo={photo}
            preload
            sizes="(max-width: 1024px) 100vw, 380px"
            aspectClass="aspect-[4/3] lg:aspect-[5/4]"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-5">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.42),transparent_62%)]" />
              <div className="relative w-40 h-40 sm:w-44 sm:h-44 flex items-center justify-center bg-white/95 dark:bg-slate-900/95 rounded-full shadow-inner border border-slate-200/80 dark:border-slate-800">
            <svg
              className="w-full h-full -rotate-90 transform"
              viewBox="0 0 160 160"
              role="img"
              aria-label={`Visibility Index ${data.currentScore} out of 10`}
            >
              <circle
                cx="80"
                cy="80"
                r={radius}
                fill="transparent"
                stroke="currentColor"
                className="text-slate-200/80 dark:text-slate-800"
                strokeWidth="9"
              />
              <circle
                cx="80"
                cy="80"
                r={radius}
                fill="transparent"
                stroke={style.ringStroke}
                strokeWidth="9"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className="transition-[stroke-dashoffset] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
              <div className="mb-1">
                <VisibilityIcon
                  badgeColor={data.currentBadgeColor}
                  size="md"
                  decorative={true}
                  preload={true}
                  className="shadow-2xs ring-2 ring-white dark:ring-slate-800"
                />
              </div>
              <div className="flex items-baseline justify-center gap-0.5 leading-none">
                <span
                  className={`text-4xl sm:text-[46px] font-extrabold tracking-tight font-mono leading-none ${style.scoreText}`}
                >
                  {data.currentScore}
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-400 dark:text-slate-500 leading-none">
                  /10
                </span>
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1 font-semibold">
                {data.activePeriod} {dict.hero.visibilityIndex}
              </span>
            </div>
          </div>

              <div
                className={`relative mt-3 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border ${style.pillBg} ${style.pillBorder} ${style.pillText} text-xs font-bold tracking-wide uppercase shadow-2xs`}
              >
                <StatusGlyph badgeColor={data.currentBadgeColor} />
                <span>{currentStatusLabel}</span>
              </div>

              <span className="relative mt-2 inline-flex max-w-[16rem] items-center rounded-full bg-white/95 px-2.5 py-1 text-center text-xs font-semibold text-slate-800 shadow-2xs dark:bg-slate-950/90 dark:text-slate-100">
                {vpLabel.name}
              </span>
            </div>
          </FramedPhoto>
        </div>

        {/* Right: Verdict, Today's AM/PM Dual Index & Guide Dispatch */}
        <div className="order-1 lg:order-2 lg:col-span-7 xl:col-span-8 min-w-0 flex flex-col justify-between space-y-4 text-center lg:text-left">
          <div className="space-y-2">
            <p className="text-sm text-slate-600 dark:text-slate-400">{dict.common.siteTagline}</p>
            <p className="text-sm font-bold text-sky-800 dark:text-sky-300 leading-snug">
              <Eye
                className="inline-block w-4 h-4 mr-1 -mt-0.5 align-middle shrink-0"
                aria-hidden="true"
              />
              <span>{answerWord}</span>
            </p>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight break-words text-balance">
              {verdictSummary}
            </h1>
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
          <div className="rounded-2xl bg-white/95 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 p-3.5 sm:p-4 text-left shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
              <Navigation
                className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400"
                aria-hidden="true"
              />
              <span>{dict.hero.guideDispatchTitle}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
              &ldquo;{guideAdvice}&rdquo;
            </p>
          </div>

          {/* Bottom Summary Strip */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-0.5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 shadow-2xs">
              <CalendarClock
                className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0"
                aria-hidden="true"
              />
              <span>
                {dict.hero.bestUpcomingBlock}:{' '}
                <strong className="font-mono text-slate-900 dark:text-white">
                  {bestDayLabel} {bestPeriodLabel}
                </strong>{' '}
                <span className={`${THEME_STYLES[data.bestBlockNext48h.badgeColor].scoreText} font-bold`}>
                  ({data.bestBlockNext48h.score}/10 — {bestStatusLabel})
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
