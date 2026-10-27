'use client';

import React from 'react';
import {
  Cloud,
  CloudFog,
  Eye,
  Wind,
  AlertTriangle,
  CheckCircle2,
  Compass,
} from 'lucide-react';
import { AtmosphericMetrics } from '@/lib/types';
import { useTranslation } from '@/lib/i18n/context';

interface MetricsGridProps {
  metrics: AtmosphericMetrics;
  viewpointLabel: string;
}

export default function MetricsGrid({
  metrics,
  viewpointLabel,
}: MetricsGridProps) {
  const { dict } = useTranslation();
  const isMidCloudWarning = metrics.cloudCoverMid > 30;
  const isLowFogWarning = metrics.cloudCoverLow > 50;
  const isVisibilityReduced = metrics.visibilityMeters < 20000;

  return (
    <section aria-label="Atmospheric Diagnostics" className="space-y-3">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-1">
        <div>
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
            {dict.metrics.title} — {viewpointLabel}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            {dict.metrics.subtitle}
          </p>
        </div>
        <span className="self-start sm:self-auto inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[11px] font-mono font-semibold text-slate-700 dark:text-slate-300">
          {dict.metrics.weighting}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {/* Card 1: Mid-Level Clouds (2,000–6,000m) */}
        <div
          className={`group rounded-2xl border p-4 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs flex flex-col justify-between ${
            isMidCloudWarning
              ? 'border-amber-300 dark:border-amber-700/80 bg-amber-50/50 dark:bg-amber-950/30'
              : 'border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90'
          }`}
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-2.5">
              <span className="p-1.5 rounded-lg bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-sky-600 dark:text-sky-400">
                <Cloud className="w-4 h-4" aria-hidden="true" />
              </span>
              <span
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  isMidCloudWarning
                    ? 'bg-amber-100 dark:bg-amber-950/80 border border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-200'
                    : 'bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-200'
                }`}
              >
                {isMidCloudWarning ? (
                  <>
                    <AlertTriangle className="w-3 h-3" aria-hidden="true" />
                    <span>Summit Blocker (&gt;30%)</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-3 h-3" aria-hidden="true" />
                    <span>Clear Ridge Zone</span>
                  </>
                )}
              </span>
            </div>

            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Mid-Level Clouds (2k–6km)
            </p>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 dark:text-white">
                {metrics.cloudCoverMid}%
              </span>
              <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                60% weight
              </span>
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-200/70 dark:border-slate-800">
            <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden mb-1.5">
              <div
                className={`h-full rounded-full transition-all duration-500 ease-out ${
                  isMidCloudWarning ? 'bg-amber-500' : 'bg-emerald-500'
                }`}
                style={{ width: `${metrics.cloudCoverMid}%` }}
              />
            </div>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 line-clamp-2">
              {isMidCloudWarning
                ? 'Cloud band at summit elevation. Intermittent ridge obstruction.'
                : 'Minimal cloud build-up across the 4,478m summit pyramid.'}
            </p>
          </div>
        </div>

        {/* Card 2: Low-Level Valley Fog */}
        <div className="group rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-4 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-2.5">
              <span className="p-1.5 rounded-lg bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-sky-600 dark:text-sky-400">
                <CloudFog className="w-4 h-4" aria-hidden="true" />
              </span>
              <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] font-mono font-semibold text-slate-700 dark:text-slate-300">
                High Cirrus: {metrics.cloudCoverHigh}%
              </span>
            </div>

            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Low-Level Valley Fog (&lt;2km)
            </p>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 dark:text-white">
                {metrics.cloudCoverLow}%
              </span>
              <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                25% weight
              </span>
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-200/70 dark:border-slate-800">
            <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden mb-1.5">
              <div
                className={`h-full rounded-full transition-all duration-500 ease-out ${
                  isLowFogWarning ? 'bg-amber-500' : 'bg-sky-500'
                }`}
                style={{ width: `${metrics.cloudCoverLow}%` }}
              />
            </div>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 line-clamp-2">
              {isLowFogWarning
                ? 'Valley fog over Zermatt village. Take lifts above 2,500m to clear it.'
                : 'Clear sightlines looking up from Kirchbrücke in Zermatt village.'}
            </p>
          </div>
        </div>

        {/* Card 3: Summit Horizontal Visibility */}
        <div className="group rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-4 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-2.5">
              <span className="p-1.5 rounded-lg bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-sky-600 dark:text-sky-400">
                <Eye className="w-4 h-4" aria-hidden="true" />
              </span>
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                  isVisibilityReduced
                    ? 'bg-amber-100 dark:bg-amber-950/80 border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-200'
                    : 'bg-emerald-100 dark:bg-emerald-950/80 border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-200'
                }`}
              >
                {metrics.visibilityMeters >= 20000
                  ? 'Optical Clarity'
                  : metrics.visibilityMeters >= 10000
                  ? 'Haze Penalty'
                  : 'Mist Penalty'}
              </span>
            </div>

            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Horizontal Visibility
            </p>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 dark:text-white">
                {metrics.visibilityKm}
              </span>
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">km</span>
              <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 ml-auto">
                Precip {metrics.precipitationProbability}%
              </span>
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-200/70 dark:border-slate-800">
            <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden mb-1.5">
              <div
                className="h-full rounded-full bg-emerald-500 transition-all duration-500 ease-out"
                style={{ width: `${Math.min(100, (metrics.visibilityKm / 80) * 100)}%` }}
              />
            </div>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 line-clamp-2">
              {metrics.visibilityKm >= 20
                ? 'Crisp air transparency across the Mattertal and Monte Rosa massif.'
                : 'Reduced optical range due to suspended moisture or ice crystals.'}
            </p>
          </div>
        </div>

        {/* Card 4: Wind & Föhn Risk */}
        <div
          className={`group rounded-2xl border p-4 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs flex flex-col justify-between ${
            metrics.isFohnRisk
              ? 'border-rose-300 dark:border-rose-700/80 bg-rose-50/50 dark:bg-rose-950/30'
              : 'border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90'
          }`}
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-2.5">
              <span className="p-1.5 rounded-lg bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-sky-600 dark:text-sky-400">
                <Wind className="w-4 h-4" aria-hidden="true" />
              </span>
              {metrics.isFohnRisk ? (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950/80 border border-rose-300 dark:border-rose-700 text-[10px] font-bold text-rose-900 dark:text-rose-200">
                  <AlertTriangle className="w-3 h-3" aria-hidden="true" />
                  <span>Föhn Banner Active</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] font-semibold text-slate-700 dark:text-slate-300">
                  No Banner Penalty
                </span>
              )}
            </div>

            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Summit Wind &amp; Föhn Drift
            </p>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 dark:text-white">
                {metrics.windSpeedKmh}
              </span>
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">km/h</span>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-sky-800 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 px-1.5 py-0.5 rounded ml-auto">
                <Compass className="w-3 h-3 text-sky-600 dark:text-sky-400" aria-hidden="true" />
                {metrics.windCardinal}
              </span>
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-200/70 dark:border-slate-800">
            <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden mb-1.5">
              <div
                className={`h-full rounded-full transition-all duration-500 ease-out ${
                  metrics.isFohnRisk ? 'bg-rose-500' : 'bg-sky-500'
                }`}
                style={{ width: `${Math.min(100, (metrics.windSpeedKmh / 60) * 100)}%` }}
              />
            </div>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 line-clamp-2">
              {metrics.isFohnRisk
                ? 'Southerly Föhn wind creating leeward banner cloud (-15 pts).'
                : 'Wind vector outside southerly Föhn banner zone.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
