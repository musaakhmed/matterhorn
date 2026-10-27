'use client';

import React from 'react';
import Link from 'next/link';
import { Mountain, TrainFront, CableCar, Compass, ArrowUpRight, MapPin, Camera } from 'lucide-react';
import { BadgeColor, ViewpointRecommendation } from '@/lib/types';
import { useTranslation } from '@/lib/i18n/context';
import { getLocalizedHref } from '@/lib/i18n/config';

interface ViewpointAdviceProps {
  viewpoints: ViewpointRecommendation[];
}

const BADGE_MAP: Record<
  BadgeColor,
  {
    pill: string;
    border: string;
  }
> = {
  emerald: {
    pill: 'bg-emerald-100 dark:bg-emerald-950/80 border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-200',
    border: 'border-emerald-300/90 dark:border-emerald-700/60',
  },
  amber: {
    pill: 'bg-amber-100 dark:bg-amber-950/80 border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-200',
    border: 'border-slate-200/90 dark:border-slate-800',
  },
  orange: {
    pill: 'bg-orange-100 dark:bg-orange-950/80 border-orange-300 dark:border-orange-700 text-orange-900 dark:text-orange-200',
    border: 'border-slate-200/90 dark:border-slate-800',
  },
  rose: {
    pill: 'bg-rose-100 dark:bg-rose-950/80 border-rose-300 dark:border-rose-700 text-rose-900 dark:text-rose-200',
    border: 'border-slate-200/90 dark:border-slate-800',
  },
};

function ViewpointIcon({ id }: { id: ViewpointRecommendation['id'] }) {
  switch (id) {
    case 'gornergrat':
      return <TrainFront className="w-4 h-4 text-sky-600 dark:text-sky-400" aria-hidden="true" />;
    case 'sunnegga':
      return <Compass className="w-4 h-4 text-sky-600 dark:text-sky-400" aria-hidden="true" />;
    case 'glacier-paradise':
      return <CableCar className="w-4 h-4 text-sky-600 dark:text-sky-400" aria-hidden="true" />;
    case 'zermatt-village':
      return <MapPin className="w-4 h-4 text-sky-600 dark:text-sky-400" aria-hidden="true" />;
  }
}

const VIEWPOINT_ROUTE_MAP: Record<ViewpointRecommendation['id'], string> = {
  gornergrat: '/viewpoints/gornergrat',
  sunnegga: '/viewpoints/sunnegga-riffelsee',
  'glacier-paradise': '/viewpoints/glacier-paradise',
  'zermatt-village': '/viewpoints/zermatt-village',
};

export default function ViewpointAdvice({ viewpoints }: ViewpointAdviceProps) {
  const { dict, locale } = useTranslation();

  return (
    <section aria-label="Zermatt Viewpoint Strategy" className="space-y-3">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-1">
        <div>
          <div className="flex items-center gap-2">
            <Mountain className="w-4 h-4 text-sky-600 dark:text-sky-400" aria-hidden="true" />
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
              {dict.sectorGuide.title}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            {dict.sectorGuide.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Link
            href={getLocalizedHref('/guides/gornergrat-vs-glacier-paradise', locale)}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-sky-50 dark:bg-sky-950/60 hover:bg-sky-100 dark:hover:bg-sky-900/60 border border-sky-200 dark:border-sky-800 text-xs font-bold text-sky-800 dark:text-sky-300 transition-colors"
          >
            <span>{dict.common.guides}</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
          <Link
            href={getLocalizedHref('/viewpoints', locale)}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 transition-colors"
          >
            <span>{dict.common.allViewpoints}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {viewpoints.map((vp) => {
          const style = BADGE_MAP[vp.badgeColor];
          return (
            <div
              key={vp.id}
              className={`group rounded-2xl border ${style.border} bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-4 sm:p-4.5 flex flex-col justify-between transition-all duration-200 shadow-2xs hover:shadow-xs hover:-translate-y-0.5`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="inline-flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 transition-transform duration-200 group-hover:scale-105">
                      <ViewpointIcon id={vp.id} />
                    </span>
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">
                        {vp.name}
                      </h4>
                      <span className="text-[11px] font-mono font-semibold text-sky-700 dark:text-sky-400">
                        {vp.elevation}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`px-2 py-0.5 rounded-full border text-[11px] font-bold ${style.pill}`}
                  >
                    {vp.suitability}
                  </span>
                </div>

                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                  {vp.tagline}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {vp.advice}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-200/70 dark:border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <span>{dict.sectorGuide.transport}:</span>
                  <span className="text-slate-700 dark:text-slate-300 font-semibold truncate ml-2">
                    {vp.transportType}
                  </span>
                </div>

                <Link
                  href={getLocalizedHref(VIEWPOINT_ROUTE_MAP[vp.id], locale)}
                  className="group/btn inline-flex items-center justify-between w-full px-3 py-1.5 rounded-xl bg-sky-50/90 dark:bg-sky-950/60 hover:bg-sky-100 dark:hover:bg-sky-900/60 border border-sky-200/80 dark:border-sky-800 text-xs font-bold text-sky-800 dark:text-sky-300 transition-colors"
                >
                  <span>View Sector Telemetry</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Ticket-Free Zermatt Village Vantage Points Callout */}
      <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-gradient-to-r from-sky-50/60 via-white to-amber-50/40 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-800/60 p-4 sm:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-2xs">
        <div className="flex items-start gap-3">
          <span className="p-2 rounded-xl bg-amber-100 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-700/80 text-amber-800 dark:text-amber-300 shrink-0 mt-0.5">
            <Camera className="w-4 h-4" aria-hidden="true" />
          </span>
          <div className="space-y-0.5">
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">
                Free Ticketless Vantages in Zermatt Village (1,608m)
              </h4>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-700 text-[10px] font-mono font-bold text-emerald-800 dark:text-emerald-300">
                CHF 0 • No Lifts Required
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              No mountain railway pass? Walk 5 minutes to <strong>Kirchbrücke bridge</strong> for iconic sunrise alpenglow, or 12 minutes uphill to the <strong>Mürini / Riedweg</strong> overlook for unobstructed East & North face panoramas.
            </p>
          </div>
        </div>

        <Link
          href={getLocalizedHref('/guides/best-matterhorn-photo-viewpoints', locale)}
          className="shrink-0 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white text-xs font-bold shadow-xs transition-colors"
        >
          <span>View Zermatt Photo Spots</span>
          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
