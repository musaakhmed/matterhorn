import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  BookOpen,
  Clock,
  ArrowRight,
  Compass,
  BarChart3,
  CloudRain,
  Camera,
  Wind,
  TrainFront,
  Activity,
  Sparkles,
} from 'lucide-react';
import { GUIDES, GuideCategory } from '@/lib/guides';
import { fetchMatterhornVisibility } from '@/lib/weather';
import {
  buildGuidesIndexJsonLd,
  GUIDES_INDEX_FAQS,
  serializeJsonLd,
} from '@/lib/schema';
import LiveVisibilityBanner from '@/components/LiveVisibilityBanner';
import FaqSection from '@/components/FaqSection';
import logoImg from '../../../public/logo.jpeg';

export const revalidate = 900; // Revalidate live banner every 15 minutes

export const metadata: Metadata = {
  title: 'Matterhorn Field Guides | Viewpoints & Weather in Zermatt',
  description:
    'Field guides for seeing the Matterhorn: Gornergrat vs Glacier Paradise, 30-year weather stats, sunrise photo spots, and rainy-day plans.',
  alternates: {
    canonical: '/guides',
  },
  openGraph: {
    title: 'Matterhorn Field Guides | Viewpoints & Weather in Zermatt',
    description:
      'Field guides for seeing the Matterhorn: Gornergrat vs Glacier Paradise, 30-year weather stats, sunrise spots & rainy-day plans.',
    url: 'https://isthematterhornvisible.com/guides',
    type: 'website',
  },
};

const CATEGORY_STYLE: Record<
  GuideCategory,
  {
    badge: string;
    icon: React.ComponentType<{ className?: string }>;
  }
> = {
  Viewpoints: {
    badge: 'bg-sky-50 dark:bg-sky-950/60 border-sky-200 dark:border-sky-800 text-sky-800 dark:text-sky-300',
    icon: Compass,
  },
  Climatology: {
    badge: 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300',
    icon: BarChart3,
  },
  'Bad Weather': {
    badge: 'bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-300',
    icon: CloudRain,
  },
  Photography: {
    badge: 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800 text-indigo-800 dark:text-indigo-300',
    icon: Camera,
  },
  Meteorology: {
    badge: 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-300',
    icon: Wind,
  },
  'Day Trips': {
    badge: 'bg-rose-50 dark:bg-rose-950/60 border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300',
    icon: TrainFront,
  },
};

export default async function GuidesIndexPage() {
  const telemetry = await fetchMatterhornVisibility();
  const jsonLd = buildGuidesIndexJsonLd(telemetry);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <LiveVisibilityBanner />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-8 sm:space-y-10">
        {/* Hero Header */}
        <section className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-6 sm:p-8 md:p-10 shadow-xs">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-xs font-mono font-bold text-sky-800 dark:text-sky-300">
              <BookOpen className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" aria-hidden="true" />
              <span>ALPINE TELEMETRY FIELD GUIDES • ZERMATT (4,478m)</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight text-balance">
              Tactical Field Guides for Seeing the Matterhorn Clearly
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Mountain lift passes in Zermatt cost over CHF 100 per person, and valley weather apps regularly misread summit cloud layers by 2,800 vertical meters. Use these data-backed guides to pick the right viewpoint, time of day, and weather window.
            </p>
          </div>
        </section>

        {/* Guides Grid */}
        <section aria-label="All Matterhorn Field Guides" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GUIDES.map((guide, idx) => {
            const catConfig = CATEGORY_STYLE[guide.category];
            const IconComponent = catConfig.icon;
            const isFeatured = idx === 0;

            return (
              <article
                key={guide.slug}
                className={`group rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-sky-300 dark:hover:border-sky-700 transition-all flex flex-col justify-between ${
                  isFeatured ? 'md:col-span-2 bg-gradient-to-br from-white via-white to-sky-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-sky-950/30' : ''
                }`}
              >
                <div className="space-y-4">
                  {/* Top Meta Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-bold ${catConfig.badge}`}
                    >
                      <IconComponent className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{guide.category}</span>
                    </span>

                    <div className="flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                        <span>{guide.readingTimeMinutes} min read</span>
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h2
                      className={`font-extrabold text-slate-900 dark:text-white tracking-tight group-hover:text-sky-700 dark:group-hover:text-sky-400 transition-colors text-balance ${
                        isFeatured ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
                      }`}
                    >
                      <Link href={`/guides/${guide.slug}`} className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        {guide.title}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {guide.description}
                    </p>
                  </div>

                  {/* Key Data Highlight Pill */}
                  <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 p-3.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" aria-hidden="true" />
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        {guide.heroStat.label}:
                      </span>
                      <span className="text-xs font-mono font-extrabold text-sky-800 dark:text-sky-300 bg-sky-100/80 dark:bg-sky-950/80 px-2 py-0.5 rounded-md">
                        {guide.heroStat.value}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      {guide.heroStat.detail}
                    </span>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-sky-700 dark:text-sky-400 group-hover:text-sky-900 dark:group-hover:text-sky-300">
                  <span>Read Full Field Guide</span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </article>
            );
          })}
        </section>

        {/* Schema-Backed Field Guides FAQ Section */}
        <FaqSection
          title="Zermatt & Matterhorn Planning FAQs"
          subtitle="Essential answers before booking Gornergrat or Matterhorn Glacier Paradise excursions"
          faqs={GUIDES_INDEX_FAQS}
          groupName="guides-index-faq"
          badgeLabel="FAQPage Schema • Field Guide Verified"
        />

        {/* Bottom Funnel CTA Card */}
        <section className="rounded-2xl border border-sky-200 dark:border-sky-800 bg-gradient-to-r from-sky-900 via-slate-900 to-slate-900 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 text-white p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-sky-300">
                <Activity className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                <span>Real-Time High-Altitude Telemetry</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-balance">
                Ready to Check If the Matterhorn Is Visible Right Now?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Compare live 1–10 AM/PM scores for Gornergrat (3,089m) and Matterhorn Glacier Paradise (3,883m), inspect 3-layer cloud ceilings, and view 4 live Roundshot webcams.
              </p>
            </div>

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-sm transition-colors shrink-0"
            >
              <span>Open Live 10-Day Dashboard</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 py-6 px-4 sm:px-6 text-xs text-slate-600 dark:text-slate-400">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 font-medium text-slate-700 dark:text-slate-300">
            <span className="relative inline-flex items-center justify-center overflow-hidden shrink-0 w-6 h-6 rounded-[20%] bg-slate-800 ring-1 ring-slate-900/15 shadow-2xs select-none">
              <Image
                src={logoImg}
                alt="Is The Matterhorn Visible? logo"
                width={48}
                height={48}
                unoptimized
                className="w-full h-full object-cover pointer-events-none"
              />
            </span>
            <span>
              isthematterhornvisible.com • Swiss Alpine Telemetry Utility
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 font-mono">
            <Link
              href="/"
              className="text-sky-700 dark:text-sky-400 hover:text-sky-900 dark:hover:text-sky-300 font-semibold transition-colors underline underline-offset-4"
            >
              Live Dashboard
            </Link>
            <span>•</span>
            <Link
              href="/api/visibility"
              className="text-sky-700 dark:text-sky-400 hover:text-sky-900 dark:hover:text-sky-300 font-semibold transition-colors underline underline-offset-4"
            >
              JSON API (/api/visibility)
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
