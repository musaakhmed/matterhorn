'use client';

import React from 'react';
import Link from 'next/link';
import { BarChart3, Sun, CloudLightning, Snowflake, ArrowUpRight } from 'lucide-react';
import { useTranslation } from '@/lib/i18n/context';
import { getLocalizedHref } from '@/lib/i18n/config';

interface MonthStat {
  monthIndex: number;
  monthShort: string;
  monthFull: string;
  probability: number;
  seasonKey: 'winter' | 'shoulder' | 'summer';
}

const MONTHLY_VISIBILITY_STATS: MonthStat[] = [
  { monthIndex: 0, monthShort: 'Jan', monthFull: 'January', probability: 88, seasonKey: 'winter' },
  { monthIndex: 1, monthShort: 'Feb', monthFull: 'February', probability: 84, seasonKey: 'winter' },
  { monthIndex: 2, monthShort: 'Mar', monthFull: 'March', probability: 78, seasonKey: 'shoulder' },
  { monthIndex: 3, monthShort: 'Apr', monthFull: 'April', probability: 65, seasonKey: 'shoulder' },
  { monthIndex: 4, monthShort: 'May', monthFull: 'May', probability: 58, seasonKey: 'shoulder' },
  { monthIndex: 5, monthShort: 'Jun', monthFull: 'June', probability: 48, seasonKey: 'summer' },
  { monthIndex: 6, monthShort: 'Jul', monthFull: 'July', probability: 52, seasonKey: 'summer' },
  { monthIndex: 7, monthShort: 'Aug', monthFull: 'August', probability: 55, seasonKey: 'summer' },
  { monthIndex: 8, monthShort: 'Sep', monthFull: 'September', probability: 72, seasonKey: 'shoulder' },
  { monthIndex: 9, monthShort: 'Oct', monthFull: 'October', probability: 79, seasonKey: 'shoulder' },
  { monthIndex: 10, monthShort: 'Nov', monthFull: 'November', probability: 85, seasonKey: 'winter' },
  { monthIndex: 11, monthShort: 'Dec', monthFull: 'December', probability: 89, seasonKey: 'winter' },
];

function getProbabilityStyle(pct: number) {
  if (pct >= 80) {
    return {
      bar: 'bg-emerald-500',
      badge: 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300',
      text: 'text-emerald-700 dark:text-emerald-400',
    };
  }
  if (pct >= 65) {
    return {
      bar: 'bg-sky-500',
      badge: 'bg-sky-50 dark:bg-sky-950/60 border-sky-200 dark:border-sky-800 text-sky-900 dark:text-sky-300',
      text: 'text-sky-700 dark:text-sky-400',
    };
  }
  return {
    bar: 'bg-amber-500',
    badge: 'bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-300',
    text: 'text-amber-700 dark:text-amber-400',
  };
}

export default function HistoricalTable() {
  const { dict, locale } = useTranslation();

  return (
    <section
      aria-label="Historical Matterhorn Visibility by Month"
      className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-5 sm:p-6 shadow-xs space-y-6"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-sky-600 dark:text-sky-400" aria-hidden="true" />
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
              {dict.historical.title}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
            {dict.historical.subtitle}
          </p>
        </div>

        <div className="inline-flex items-center gap-2 self-start sm:self-auto px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-xs font-bold text-emerald-900 dark:text-emerald-300">
          <Snowflake className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
          <span>Dec (89%) &amp; Jan (88%)</span>
        </div>
      </div>

      {/* 3-Season Seasonal Overview Triad */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="rounded-xl border border-emerald-200 dark:border-emerald-800/80 bg-emerald-50/70 dark:bg-emerald-950/40 p-3 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-200 inline-flex items-center gap-1.5">
              <Snowflake className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
              Winter (Dec–Feb)
            </span>
            <span className="px-1.5 py-0.5 rounded font-mono text-[11px] font-extrabold bg-emerald-600 text-white">
              87% Avg
            </span>
          </div>
          <p className="text-[11px] text-slate-600 dark:text-slate-300">
            Peak clarity. Cold, dry high-pressure air delivers crisp mountain sightlines.
          </p>
        </div>

        <div className="rounded-xl border border-sky-200 dark:border-sky-800/80 bg-sky-50/70 dark:bg-sky-950/40 p-3 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-900 dark:text-sky-200 inline-flex items-center gap-1.5">
              <Sun className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" aria-hidden="true" />
              Shoulder (Autumn/Spring)
            </span>
            <span className="px-1.5 py-0.5 rounded font-mono text-[11px] font-extrabold bg-sky-600 text-white">
              74% Avg
            </span>
          </div>
          <p className="text-[11px] text-slate-600 dark:text-slate-300">
            Sep &amp; Oct offer exceptional visibility with autumn larch reflections at Riffelsee.
          </p>
        </div>

        <div className="rounded-xl border border-amber-200 dark:border-amber-800/80 bg-amber-50/70 dark:bg-amber-950/40 p-3 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-200 inline-flex items-center gap-1.5">
              <CloudLightning className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" aria-hidden="true" />
              Summer (Jun–Aug)
            </span>
            <span className="px-1.5 py-0.5 rounded font-mono text-[11px] font-extrabold bg-amber-600 text-white">
              52% Avg
            </span>
          </div>
          <p className="text-[11px] text-slate-600 dark:text-slate-300">
            Clear mornings (06:00–10:00). Convective cumulus often clouds the peak by 13:00.
          </p>
        </div>
      </div>

      {/* Authoritative 12-Month Statistical Table / Grid */}
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-100/90 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
              <th className="py-3 px-4">{dict.historical.monthCol}</th>
              <th className="py-3 px-4">{dict.historical.clarityCol}</th>
              <th className="py-3 px-4 hidden sm:table-cell">Distribution</th>
              <th className="py-3 px-4">{dict.historical.seasonCol}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/70 dark:divide-slate-800 text-xs sm:text-sm">
            {MONTHLY_VISIBILITY_STATS.map((item) => {
              const style = getProbabilityStyle(item.probability);
              const monthName = dict.historical.months[item.monthIndex] || item.monthFull;
              const seasonTag = dict.historical.seasonTags[item.seasonKey];
              return (
                <tr
                  key={item.monthShort}
                  className="hover:bg-slate-50/90 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <td className="py-2.5 px-4 font-bold text-slate-900 dark:text-white">
                    {monthName}
                  </td>
                  <td className="py-2.5 px-4 font-mono font-extrabold">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-md border ${style.badge}`}
                    >
                      {item.probability}%
                    </span>
                  </td>
                  <td className="py-2.5 px-4 hidden sm:table-cell w-1/3">
                    <div className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ease-out ${style.bar}`}
                        style={{ width: `${item.probability}%` }}
                      />
                    </div>
                  </td>
                  <td className="py-2.5 px-4 text-xs font-medium text-slate-600 dark:text-slate-400">
                    {seasonTag}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Explanatory Guide Block */}
      <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/80 p-4 sm:p-5 space-y-2.5">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
          <CloudLightning
            className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0"
            aria-hidden="true"
          />
          <h4>
            {dict.historical.insightTitle}
          </h4>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {dict.historical.insightDesc}
        </p>

        <div className="pt-1 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-400">
          <span className="inline-flex items-center gap-1.5 font-semibold text-sky-800 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 px-2.5 py-1 rounded-lg">
            <Sun className="w-3.5 h-3.5 text-amber-500" aria-hidden="true" />
            <span>Summer Pro-Tip: Target the 06:00–10:00 CET Morning block before thermal clouds rise.</span>
          </span>

          <Link
            href={getLocalizedHref('/guides/best-time-to-see-matterhorn', locale)}
            className="inline-flex items-center gap-1 font-bold text-sky-700 dark:text-sky-400 hover:text-sky-900 dark:hover:text-sky-300 underline underline-offset-4"
          >
            <span>{dict.common.guides}</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
