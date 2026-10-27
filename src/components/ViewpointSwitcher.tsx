'use client';

import React from 'react';
import Link from 'next/link';
import { TrainFront, CableCar, Compass, Waves, MapPin } from 'lucide-react';
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

  return (
    <section aria-label={dict.viewpointSwitcher.title} className="space-y-3">
      <h2 className="text-sm font-bold text-slate-900 dark:text-white">
        {dict.viewpointSwitcher.title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
        {places.map((place) => {
          const selected = place.mode === 'switch' && place.viewpointId === activeId;
          const className = `flex min-h-11 flex-col justify-between gap-2 rounded-xl border p-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 ${
            selected
              ? 'border-sky-500 bg-white dark:bg-slate-900 ring-1 ring-sky-500/30'
              : 'border-slate-200/90 bg-white/90 hover:border-sky-400 dark:border-slate-800 dark:bg-slate-900/90 dark:hover:border-sky-600'
          }`;
          const body = (
            <>
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <PlaceIcon slug={place.slug} />
                  <span className="text-sm font-bold text-slate-950 dark:text-white truncate">
                    {place.name}
                  </span>
                </div>
                <span
                  className={`shrink-0 rounded-md border px-2 py-0.5 font-mono text-xs font-bold ${SCORE_PILL[place.color]}`}
                >
                  {place.score}/10
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-snug">{place.face}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug">{place.transport}</p>
              {place.borrowed && (
                <p className="text-xs font-medium text-sky-800 dark:text-sky-300">
                  {dict.navigation.sameForecast}
                </p>
              )}
            </>
          );

          if (place.mode === 'switch' && place.viewpointId) {
            return (
              <button
                key={place.slug}
                type="button"
                aria-pressed={selected}
                onClick={() => onChange(place.viewpointId as ViewpointId)}
                className={`${className} cursor-pointer`}
              >
                {body}
              </button>
            );
          }

          return (
            <Link
              key={place.slug}
              href={getLocalizedHref(`/viewpoints/${place.slug}`, locale)}
              className={className}
            >
              {body}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
