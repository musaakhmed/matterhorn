import React from 'react';
import { BarChart3, Sun, CloudLightning, Snowflake } from 'lucide-react';

interface MonthStat {
  monthShort: string;
  monthFull: string;
  probability: number;
  seasonTag: 'Peak Winter Clarity' | 'Shoulder Transition' | 'Convective Summer';
}

const MONTHLY_VISIBILITY_STATS: MonthStat[] = [
  { monthShort: 'Jan', monthFull: 'January', probability: 88, seasonTag: 'Peak Winter Clarity' },
  { monthShort: 'Feb', monthFull: 'February', probability: 84, seasonTag: 'Peak Winter Clarity' },
  { monthShort: 'Mar', monthFull: 'March', probability: 78, seasonTag: 'Shoulder Transition' },
  { monthShort: 'Apr', monthFull: 'April', probability: 65, seasonTag: 'Shoulder Transition' },
  { monthShort: 'May', monthFull: 'May', probability: 58, seasonTag: 'Shoulder Transition' },
  { monthShort: 'Jun', monthFull: 'June', probability: 48, seasonTag: 'Convective Summer' },
  { monthShort: 'Jul', monthFull: 'July', probability: 52, seasonTag: 'Convective Summer' },
  { monthShort: 'Aug', monthFull: 'August', probability: 55, seasonTag: 'Convective Summer' },
  { monthShort: 'Sep', monthFull: 'September', probability: 72, seasonTag: 'Shoulder Transition' },
  { monthShort: 'Oct', monthFull: 'October', probability: 79, seasonTag: 'Shoulder Transition' },
  { monthShort: 'Nov', monthFull: 'November', probability: 85, seasonTag: 'Peak Winter Clarity' },
  { monthShort: 'Dec', monthFull: 'December', probability: 89, seasonTag: 'Peak Winter Clarity' },
];

function getProbabilityStyle(pct: number) {
  if (pct >= 80) {
    return {
      bar: 'bg-emerald-500',
      badge: 'bg-emerald-50 border-emerald-200 text-emerald-900',
      text: 'text-emerald-700',
    };
  }
  if (pct >= 65) {
    return {
      bar: 'bg-sky-500',
      badge: 'bg-sky-50 border-sky-200 text-sky-900',
      text: 'text-sky-700',
    };
  }
  return {
    bar: 'bg-amber-500',
    badge: 'bg-amber-50 border-amber-200 text-amber-900',
    text: 'text-amber-700',
  };
}

export default function HistoricalTable() {
  return (
    <section
      aria-label="Historical Matterhorn Visibility by Month"
      className="rounded-2xl border border-slate-200/90 bg-white/90 backdrop-blur-md p-5 sm:p-6 shadow-xs space-y-6"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-sky-600" aria-hidden="true" />
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
              Historical &ldquo;Visibility by Month&rdquo; Climatology (Zermatt 30-Year Index)
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
            Probability of catching at least one clear summit viewing window (Score ≥ 7/10) per day by month
          </p>
        </div>

        <div className="inline-flex items-center gap-2 self-start sm:self-auto px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-900">
          <Snowflake className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
          <span>Best Months: Dec (89%) &amp; Jan (88%)</span>
        </div>
      </div>

      {/* Authoritative 12-Month Statistical Table / Grid */}
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-100/90 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-600">
              <th className="py-3 px-4">Month</th>
              <th className="py-3 px-4">Clear-Sky Probability</th>
              <th className="py-3 px-4 hidden sm:table-cell">Distribution Bar</th>
              <th className="py-3 px-4">Atmospheric Regime</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/70 text-xs sm:text-sm">
            {MONTHLY_VISIBILITY_STATS.map((item) => {
              const style = getProbabilityStyle(item.probability);
              return (
                <tr
                  key={item.monthShort}
                  className="hover:bg-slate-50/90 transition-colors"
                >
                  <td className="py-2.5 px-4 font-bold text-slate-900">
                    <span className="sm:hidden">{item.monthShort}</span>
                    <span className="hidden sm:inline">
                      {item.monthFull} ({item.monthShort})
                    </span>
                  </td>
                  <td className="py-2.5 px-4 font-mono font-extrabold">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-md border ${style.badge}`}
                    >
                      {item.probability}%
                    </span>
                  </td>
                  <td className="py-2.5 px-4 hidden sm:table-cell w-1/3">
                    <div className="w-full h-2.5 rounded-full bg-slate-100 border border-slate-200/80 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${style.bar}`}
                        style={{ width: `${item.probability}%` }}
                      />
                    </div>
                  </td>
                  <td className="py-2.5 px-4 text-xs font-medium text-slate-600">
                    {item.seasonTag}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* SEO-Rich Explanatory Guide Block */}
      <div className="rounded-2xl bg-slate-50 border border-slate-200/90 p-4 sm:p-5 space-y-2.5">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-slate-900">
          <CloudLightning
            className="w-4 h-4 text-amber-600 shrink-0"
            aria-hidden="true"
          />
          <h4>
            Why is the Matterhorn harder to see in June and July? (Thermal updrafts &amp; convective summer storms explained)
          </h4>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          While travelers instinctively book Alpine trips for mid-summer, <strong>June (48%) and July (52%)</strong> statistically record the lowest full-day visibility scores of the year. Strong solar radiation heats the dark rock faces of the Mattertal and Italian Val Tournenche, triggering vigorous <strong>anabatic thermal updrafts</strong> by 11:00 CET. As warm valley air rises and cools adiabatically past 3,000 meters, moisture condenses directly onto the Matterhorn’s Hörnli and Furgg ridges, forming afternoon convective cumulus towers and local banner clouds.
        </p>

        <div className="pt-1 flex flex-wrap items-center gap-3 text-xs text-slate-600">
          <span className="inline-flex items-center gap-1.5 font-semibold text-sky-800 bg-sky-50 border border-sky-200 px-2.5 py-1 rounded-lg">
            <Sun className="w-3.5 h-3.5 text-amber-500" aria-hidden="true" />
            <span>Summer Pro-Tip: Always target the 06:00–10:00 CET Morning (AM) block before thermal convection initiates.</span>
          </span>
        </div>
      </div>
    </section>
  );
}
