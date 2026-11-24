'use client';

import React from 'react';
import Link from 'next/link';
import { TrainFront, CableCar, Compass, Waves, MapPin, ArrowUpRight } from 'lucide-react';
import { BadgeColor, ViewpointId } from '@/lib/types';
import { useTranslation } from '@/lib/i18n/context';
import { getLocalizedHref } from '@/lib/i18n/config';

export interface ViewpointPlace {
  slug: string;
  name: string;
  face: string;
  transport: string;
  score: number;
  color: BadgeColor;
  borrowed: boolean;
  mode: 'switch' | 'link';
  viewpointId?: ViewpointId;
}

interface ViewpointSwitcherProps {
  places: ViewpointPlace[];
  activeId: ViewpointId;
  onChange: (id: ViewpointId) => void;
}

const SCORE_PILL: Record<BadgeColor, string> = {
  emerald:
    'bg-emerald-50 dark:bg-emerald-950/70 border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-200',
  amber:
    'bg-amber-50 dark:bg-amber-950/70 border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-200',
  orange:
    'bg-orange-50 dark:bg-orange-950/70 border-orange-300 dark:border-orange-700 text-orange-900 dark:text-orange-200',
  rose:
    'bg-rose-50 dark:bg-rose-950/70 border-rose-300 dark:border-rose-700 text-rose-900 dark:text-rose-200',
};

function PlaceIcon({ slug }: { slug: string }) {
  const className = 'w-4 h-4 shrink-0 text-sky-700 dark:text-sky-400';
  switch (slug) {
    case 'gornergrat':
      return <TrainFront className={className} aria-hidden="true" />;
    case 'glacier-paradise':
      return <CableCar className={className} aria-hidden="true" />;
    case 'riffelsee':
      return <Waves className={className} aria-hidden="true" />;
    case 'zermatt-village':
      return <MapPin className={className} aria-hidden="true" />;
    default:
      return <Compass className={className} aria-hidden="true" />;
  }
}

export default function ViewpointSwitcher({
  places,
  activeId,
  onChange,
}: ViewpointSwitcherProps) {
  const { dict, locale } = useTranslation();
  const primarySwitches = places.filter((p) => p.mode === 'switch' && p.viewpointId);
  const secondaryLinks = places.filter((p) => p.mode === 'link');

  return (
    <section
      id="viewpoint-toggle"
      aria-label={dict.viewpointSwitcher.title}
      className="scroll-mt-24 space-y-3"
    >
      <h2 className="text-sm font-bold text-slate-900 dark:text-white">
        {dict.viewpointSwitcher.title}
      </h2>
      {/* Primary 2-Way Live Telemetry Switcher (Gornergrat East vs Glacier Paradise South) */}
      <div className="grid grid-cols-2 gap-2.5">
        {primarySwitches.map((place) => {
          const selected = place.viewpointId === activeId;
          return (
            <button
              key={place.slug}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(place.viewpointId as ViewpointId)}
              className={`flex min-h-12 flex-col justify-between gap-1.5 rounded-xl border p-3 sm:p-3.5 text-left transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 ${
                selected
                  ? 'border-sky-500 bg-white dark:bg-slate-900 ring-2 ring-sky-500/25 shadow-xs'
                  : 'border-slate-200/90 bg-white/90 hover:border-sky-400 dark:border-slate-800 dark:bg-slate-900/90 dark:hover:border-sky-600'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-1.5 min-w-0">
                  <PlaceIcon slug={place.slug} />
                  <span className="text-xs sm:text-sm font-extrabold text-slate-950 dark:text-white truncate">
                    {place.name}
                  </span>
                </div>
                <span
                  className={`shrink-0 rounded-md border px-1.5 sm:px-2 py-0.5 font-mono text-xs font-bold ${SCORE_PILL[place.color]}`}
                >
                  {place.score}/10
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 leading-snug line-clamp-1">
                {place.face}
              </p>
            </button>
          );
        })}
      </div>

      {/* Secondary Viewpoint Guides (Explicit Page Links) */}
      {secondaryLinks.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {secondaryLinks.map((place) => (
            <Link
              key={place.slug}
              href={getLocalizedHref(`/viewpoints/${place.slug}`, locale)}
              className="group flex min-h-11 items-center justify-between gap-2 rounded-xl border border-slate-200/80 bg-slate-50/80 px-3 py-2 text-left transition-colors hover:border-sky-400 hover:bg-white dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600"
            >
              <div className="flex items-center gap-2 min-w-0">
                <PlaceIcon slug={place.slug} />
                <span className="text-xs font-bold text-slate-900 dark:text-white truncate">
                  {place.name}
                </span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <span className={`rounded-md border px-1.5 py-0.5 font-mono text-[11px] font-bold ${SCORE_PILL[place.color]}`}>
                  {place.score}/10
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600 dark:group-hover:text-sky-400" aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
