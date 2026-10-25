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

interface MetricsGridProps {
  metrics: AtmosphericMetrics;
  viewpointLabel: string;
}

export default function MetricsGrid({
  metrics,
  viewpointLabel,
}: MetricsGridProps) {
  const isMidCloudWarning = metrics.cloudCoverMid > 30;
  const isLowFogWarning = metrics.cloudCoverLow > 50;
  const isVisibilityReduced = metrics.visibilityMeters < 20000;

  return (
    <section aria-label="Atmospheric Diagnostics" className="space-y-3">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-1">
        <div>
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
            Atmospheric Layer Diagnostics — {viewpointLabel}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Microclimate inputs weighted by altitude impact on the Matterhorn pyramid
          </p>
        </div>
        <span className="self-start sm:self-auto inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-[11px] font-mono font-semibold text-slate-700">
          Weighting: 60% Mid • 25% Low • 15% High
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Mid-Level Clouds (2,000–6,000m) */}
        <div
          className={`rounded-2xl border p-5 backdrop-blur-md transition-all flex flex-col justify-between shadow-xs ${
            isMidCloudWarning
              ? 'border-amber-300 bg-amber-50/50'
              : 'border-slate-200/90 bg-white/90'
          }`}
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="p-2 rounded-xl bg-sky-50 border border-sky-200 text-sky-600">
                <Cloud className="w-4 h-4" aria-hidden="true" />
              </span>
              {isMidCloudWarning ? (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-100 border border-amber-300 text-[11px] font-bold text-amber-900">
                  <AlertTriangle className="w-3 h-3" aria-hidden="true" />
                  Summit Blocker (&gt;30%)
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 border border-emerald-300 text-[11px] font-bold text-emerald-900">
                  <CheckCircle2 className="w-3 h-3" aria-hidden="true" />
                  Clear Ridge Zone
                </span>
              )}
            </div>

            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Mid-Level Clouds (2,000–6,000m)
            </p>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold font-mono text-slate-900">
                {metrics.cloudCoverMid}%
              </span>
              <span className="text-xs font-medium text-slate-500">
                60% score weight
              </span>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200/80">
            <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden mb-2">
              <div
                className={`h-full rounded-full ${
                  isMidCloudWarning ? 'bg-amber-500' : 'bg-emerald-500'
                }`}
                style={{ width: `${metrics.cloudCoverMid}%` }}
              />
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {isMidCloudWarning
                ? 'Active cloud band at summit elevation. Expect intermittent ridge obstruction.'
                : 'Minimal cloud build-up across the 4,478m summit pyramid.'}
            </p>
          </div>
        </div>

        {/* Card 2: Low-Level Valley Fog */}
        <div className="rounded-2xl border border-slate-200/90 bg-white/90 p-5 backdrop-blur-md flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="p-2 rounded-xl bg-sky-50 border border-sky-200 text-sky-600">
                <CloudFog className="w-4 h-4" aria-hidden="true" />
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono font-semibold text-slate-700">
                High Cirrus: {metrics.cloudCoverHigh}%
              </span>
            </div>

            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Low-Level Valley Fog (&lt;2,000m)
            </p>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold font-mono text-slate-900">
                {metrics.cloudCoverLow}%
              </span>
              <span className="text-xs font-medium text-slate-500">
                Zermatt floor
              </span>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200/80">
            <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden mb-2">
              <div
                className={`h-full rounded-full ${
                  isLowFogWarning ? 'bg-amber-500' : 'bg-sky-500'
                }`}
                style={{ width: `${metrics.cloudCoverLow}%` }}
              />
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {isLowFogWarning
                ? 'Valley fog over Zermatt village (1,608m). Take lifts above 2,500m to clear it.'
                : 'Clear sightlines looking up from Kirchbrücke in Zermatt town.'}
            </p>
          </div>
        </div>

        {/* Card 3: Summit Horizontal Visibility */}
        <div className="rounded-2xl border border-slate-200/90 bg-white/90 p-5 backdrop-blur-md flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="p-2 rounded-xl bg-sky-50 border border-sky-200 text-sky-600">
                <Eye className="w-4 h-4" aria-hidden="true" />
              </span>
              <span
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${
                  isVisibilityReduced
                    ? 'bg-amber-100 border-amber-300 text-amber-900'
                    : 'bg-emerald-100 border-emerald-300 text-emerald-900'
                }`}
              >
                {metrics.visibilityMeters >= 20000
                  ? 'Optical Clarity'
                  : metrics.visibilityMeters >= 10000
                  ? '-10 pt Haze Penalty'
                  : '-25 pt Mist Penalty'}
              </span>
            </div>

            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Summit Horizontal Visibility
            </p>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="text-3xl font-extrabold font-mono text-slate-900">
                {metrics.visibilityKm}
              </span>
              <span className="text-sm font-bold text-slate-700">km</span>
              <span className="text-xs text-slate-500 font-mono ml-1">
                ({metrics.visibilityMeters.toLocaleString()} m)
              </span>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200/80">
            <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
              <span>Precip Probability:</span>
              <span className="font-mono font-bold text-slate-900">
                {metrics.precipitationProbability}% ({metrics.precipitationMm} mm)
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {metrics.visibilityKm >= 20
                ? 'Crisp air transparency across the Mattertal and Monte Rosa massif.'
                : 'Reduced optical range due to suspended moisture or ice crystals.'}
            </p>
          </div>
        </div>

        {/* Card 4: Wind & Föhn Risk */}
        <div
          className={`rounded-2xl border p-5 backdrop-blur-md flex flex-col justify-between shadow-xs ${
            metrics.isFohnRisk
              ? 'border-rose-300 bg-rose-50/50'
              : 'border-slate-200/90 bg-white/90'
          }`}
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="p-2 rounded-xl bg-sky-50 border border-sky-200 text-sky-600">
                <Wind className="w-4 h-4" aria-hidden="true" />
              </span>
              {metrics.isFohnRisk ? (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-rose-100 border border-rose-300 text-[11px] font-bold text-rose-900">
                  <AlertTriangle className="w-3 h-3" aria-hidden="true" />
                  Föhn Banner Active
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-semibold text-slate-700">
                  No Banner Penalty
                </span>
              )}
            </div>

            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Wind &amp; Föhn Risk
            </p>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold font-mono text-slate-900">
                {metrics.windSpeedKmh}
              </span>
              <span className="text-sm font-bold text-slate-700">km/h</span>
              <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-sky-800 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded-md ml-auto">
                <Compass className="w-3 h-3 text-sky-600" aria-hidden="true" />
                {metrics.windCardinal} ({metrics.windDirectionDeg}°)
              </span>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200/80">
            <p className="text-xs text-slate-600 leading-relaxed">
              {metrics.isFohnRisk
                ? 'Southerly Föhn wind (150°–210° > 30 km/h) forces moist Italian air up the ridge, creating a leeward banner cloud (-15 pts).'
                : 'Wind vector outside the southerly Föhn banner cloud zone (150°–210° at >30 km/h).'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
