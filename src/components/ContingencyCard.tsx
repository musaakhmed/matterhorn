'use client';

import React from 'react';
import Link from 'next/link';
import {
  Landmark,
  Waves,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import VisibilityIcon from './VisibilityIcon';
import { useTranslation } from '@/lib/i18n/context';
import { getLocalizedHref } from '@/lib/i18n/config';

interface ContingencyCardProps {
  currentScore: number;
  morningScore: number;
  afternoonScore: number;
  viewpointLabel: string;
}

export default function ContingencyCard({
  currentScore,
  morningScore,
  afternoonScore,
  viewpointLabel,
}: ContingencyCardProps) {
  const { dict, locale } = useTranslation();
  const isLowVisibilityTriggered =
    currentScore <= 4 || Math.min(morningScore, afternoonScore) <= 4;

  if (!isLowVisibilityTriggered) {
    return null;
  }

  const alternativePlans = [
    {
      id: 'zermatlantis',
      title: dict.contingency.museumTitle,
      badge: dict.contingency.museumBadge,
      description: dict.contingency.museumDesc,
      icon: Landmark,
      accentClass: 'bg-sky-50 dark:bg-sky-950/60 border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300',
    },
    {
      id: 'gorner-gorge',
      title: dict.contingency.gorgeTitle,
      badge: dict.contingency.gorgeBadge,
      description: dict.contingency.gorgeDesc,
      icon: Waves,
      accentClass: 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300',
    },
    {
      id: 'thermal-wellness',
      title: dict.contingency.spaTitle,
      badge: dict.contingency.spaBadge,
      description: dict.contingency.spaDesc,
      icon: Sparkles,
      accentClass: 'bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300',
    },
  ];

  return (
    <section
      aria-label="Low-Visibility Contingency Plans in Zermatt"
      className="rounded-2xl border border-amber-300/90 dark:border-amber-700/60 bg-gradient-to-br from-amber-50/90 via-white to-orange-50/50 dark:from-amber-950/40 dark:via-slate-900/90 dark:to-orange-950/30 p-5 sm:p-6 shadow-sm"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
        <div className="flex items-start sm:items-center gap-3">
          <VisibilityIcon
            score={currentScore}
            size="lg"
            className="shadow-xs"
          />
          <div>
            <div className="inline-flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full bg-amber-200/80 dark:bg-amber-900/80 text-amber-950 dark:text-amber-200 text-[10px] font-mono font-bold uppercase tracking-wider">
                {dict.contingency.badge} ({currentScore}/10)
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white tracking-tight mt-0.5">
              {dict.contingency.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              {dict.contingency.subtitle} — {viewpointLabel}
            </p>
          </div>
        </div>

        <Link
          href={getLocalizedHref('/guides/zermatt-cloudy-rainy-day-guide', locale)}
          className="inline-flex items-center gap-1 self-start sm:self-auto px-3 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200/80 dark:bg-amber-950/60 dark:hover:bg-amber-900/80 border border-amber-300 dark:border-amber-700 text-xs font-bold text-amber-950 dark:text-amber-200 transition-colors shrink-0"
        >
          <span>{dict.common.guides}</span>
          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {alternativePlans.map((plan) => {
          const IconComponent = plan.icon;
          return (
            <div
              key={plan.id}
              className="group rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-4 sm:p-5 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`p-2 rounded-lg border ${plan.accentClass} transition-transform duration-200 group-hover:scale-105`}
                  >
                    <IconComponent className="w-4 h-4" aria-hidden="true" />
                  </span>
                </div>

                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1">
                  {plan.title}
                </h4>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-2">
                  {plan.badge}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
                <span>{plan.badge.split('•')[0]}</span>
                <ArrowUpRight
                  className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
