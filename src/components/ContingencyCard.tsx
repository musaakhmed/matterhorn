import React from 'react';
import {
  Landmark,
  Waves,
  Sparkles,
  CloudRain,
  ArrowUpRight,
} from 'lucide-react';

interface ContingencyCardProps {
  currentScore: number;
  morningScore: number;
  afternoonScore: number;
  viewpointLabel: string;
}

const ALTERNATIVE_PLANS = [
  {
    id: 'zermatlantis',
    title: 'Zermatlantis (Matterhorn Museum)',
    badge: 'Subterranean History • Village Center',
    description:
      'Explore alpine history inside the glass-domed underground museum next to Kirchplatz, featuring the original broken rope from Edward Whymper’s 1865 first ascent.',
    icon: Landmark,
    accentClass: 'bg-sky-50 border-sky-200 text-sky-700',
  },
  {
    id: 'gorner-gorge',
    title: 'Gorner Gorge (Gornerschlucht)',
    badge: '20 min Walk from Zermatt • Dramatic in Rain',
    description:
      'Walk suspended wooden catwalks through 220-million-year-old greenish serpentinite rock walls carved by glacial meltwater waterfalls—spectacular in overcast weather.',
    icon: Waves,
    accentClass: 'bg-emerald-50 border-emerald-200 text-emerald-700',
  },
  {
    id: 'thermal-wellness',
    title: 'Indoor Thermal Wellness & Alpine Spas',
    badge: 'Day Spa Passes • Zermatt Village',
    description:
      'Trade a whiteout cable car ride for 36°C indoor vitality pools, Finnish pine saunas, and Valais herbal steam baths at Zermatt’s village resort spas.',
    icon: Sparkles,
    accentClass: 'bg-amber-50 border-amber-200 text-amber-800',
  },
];

export default function ContingencyCard({
  currentScore,
  morningScore,
  afternoonScore,
  viewpointLabel,
}: ContingencyCardProps) {
  const isLowVisibilityTriggered =
    currentScore <= 4 || Math.min(morningScore, afternoonScore) <= 4;

  if (!isLowVisibilityTriggered) {
    return null;
  }

  return (
    <section
      aria-label="Low-Visibility Contingency Plans in Zermatt"
      className="rounded-2xl border border-amber-300/90 bg-gradient-to-br from-amber-50/90 via-white to-orange-50/50 p-5 sm:p-6 shadow-sm"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
        <div className="flex items-start sm:items-center gap-3">
          <span className="p-2.5 rounded-xl bg-amber-100 border border-amber-300 text-amber-800 shrink-0">
            <CloudRain className="w-5 h-5" aria-hidden="true" />
          </span>
          <div>
            <div className="inline-flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full bg-amber-200/80 text-amber-950 text-[10px] font-mono font-bold uppercase tracking-wider">
                Low Visibility Alert (Score {currentScore}/10 ≤ 4)
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight mt-0.5">
              Can&apos;t see the Matterhorn today? Alternative plans in Zermatt
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Skip the CHF 100+ summit lift pass while {viewpointLabel} is obscured—here are 3 rainy-day favorites in the valley
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {ALTERNATIVE_PLANS.map((plan) => {
          const IconComponent = plan.icon;
          return (
            <div
              key={plan.id}
              className="rounded-xl bg-white border border-slate-200/90 p-4 sm:p-5 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`p-2 rounded-lg border ${plan.accentClass}`}
                  >
                    <IconComponent className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <span className="text-[11px] font-mono font-medium text-slate-500">
                    No Mountain Pass Needed
                  </span>
                </div>

                <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                  {plan.title}
                </h4>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-sky-700 mb-2">
                  {plan.badge}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700">
                <span>Weatherproof Pick</span>
                <ArrowUpRight
                  className="w-3.5 h-3.5 text-sky-600"
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
