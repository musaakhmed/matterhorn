import React from 'react';
import Link from 'next/link';
import { Mountain, TrainFront, CableCar, Compass, ArrowUpRight } from 'lucide-react';
import { BadgeColor, ViewpointRecommendation } from '@/lib/types';

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
  }
}

const VIEWPOINT_ROUTE_MAP: Record<ViewpointRecommendation['id'], string> = {
  gornergrat: '/viewpoints/gornergrat',
  sunnegga: '/viewpoints/sunnegga-riffelsee',
  'glacier-paradise': '/viewpoints/glacier-paradise',
};

export default function ViewpointAdvice({ viewpoints }: ViewpointAdviceProps) {
  return (
    <section aria-label="Zermatt Viewpoint Strategy" className="space-y-3">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-1">
        <div>
          <div className="flex items-center gap-2">
            <Mountain className="w-4 h-4 text-sky-600 dark:text-sky-400" aria-hidden="true" />
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
              Where to View Right Now: Zermatt Sector Guide
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Tactical viewpoint selection comparing Gornergrat, Sunnegga, and Matterhorn Glacier Paradise
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Link
            href="/guides/gornergrat-vs-glacier-paradise"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-sky-50 dark:bg-sky-950/60 hover:bg-sky-100 dark:hover:bg-sky-900/60 border border-sky-200 dark:border-sky-800 text-xs font-bold text-sky-800 dark:text-sky-300 transition-colors"
          >
            <span>Gornergrat vs. Glacier Paradise Guide</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
          <Link
            href="/guides/best-matterhorn-photo-viewpoints"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 transition-colors"
          >
            <span>Photo &amp; Sunrise Spots</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {viewpoints.map((vp) => {
          const style = BADGE_MAP[vp.badgeColor];
          return (
            <div
              key={vp.id}
              className={`rounded-2xl border ${style.border} bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-5 flex flex-col justify-between transition-all shadow-xs hover:shadow-md`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="inline-flex items-center gap-2.5">
                    <span className="p-2 rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800">
                      <ViewpointIcon id={vp.id} />
                    </span>
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">
                        {vp.name}
                      </h4>
                      <span className="text-xs font-mono font-semibold text-sky-700 dark:text-sky-400">
                        {vp.elevation}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`px-2.5 py-0.5 rounded-full border text-xs font-bold ${style.pill}`}
                  >
                    {vp.suitability}
                  </span>
                </div>

                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                  {vp.tagline}
                </p>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {vp.advice}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <span>Access:</span>
                  <span className="text-slate-700 dark:text-slate-300 font-semibold">
                    {vp.transportType}
                  </span>
                </div>

                <Link
                  href={VIEWPOINT_ROUTE_MAP[vp.id]}
                  className="inline-flex items-center justify-between w-full px-3 py-1.5 rounded-xl bg-sky-50/90 dark:bg-sky-950/60 hover:bg-sky-100 dark:hover:bg-sky-900/60 border border-sky-200/80 dark:border-sky-800 text-xs font-bold text-sky-800 dark:text-sky-300 transition-colors"
                >
                  <span>Open {vp.name} Live Page</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
