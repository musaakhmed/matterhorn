import React from 'react';
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
  ChevronRight,
  Snowflake,
} from 'lucide-react';
import { publicGuides, GuideCategory } from '@/lib/guides';
import { PLANNING_GUIDE_BADGE, PLANNING_GUIDES } from '@/lib/planning-guides';
import { fetchMatterhornVisibility } from '@/lib/weather';
import {
  buildGuidesIndexJsonLd,
  getGuidesIndexFaqItems,
  serializeJsonLd,
} from '@/lib/schema';
import LiveVisibilityBanner from '@/components/LiveVisibilityBanner';
import FaqSection from '@/components/FaqSection';
import { getLocalizedHref, Locale } from '@/lib/i18n/config';
import { getLocalizedGuideArticle } from '@/lib/i18n/guides';
import Footer from '@/components/Footer';

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
  'Winter & Seasons': {
    badge: 'bg-teal-50 dark:bg-teal-950/60 border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300',
    icon: Snowflake,
  },
};

export default async function GuidesIndexView({
  locale = 'en',
}: {
  locale?: Locale;
} = {}) {
  const telemetry = await fetchMatterhornVisibility();
  const jsonLd = buildGuidesIndexJsonLd(telemetry, locale);
  const guidesIndexFaqs = getGuidesIndexFaqItems(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <LiveVisibilityBanner />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8 sm:space-y-10">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 mb-2"
        >
          <Link
            href={getLocalizedHref('/', locale)}
            className="hover:text-sky-700 dark:hover:text-sky-400 transition-colors font-semibold"
          >
            Live Dashboard
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" aria-hidden="true" />
          <span className="text-slate-900 dark:text-white font-bold">
            Field Guides
          </span>
        </nav>

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
        <section aria-label="All Matterhorn Field Guides" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publicGuides().map((rawGuide, idx) => {
            const guide = getLocalizedGuideArticle(rawGuide.slug, locale);
            const catConfig = CATEGORY_STYLE[guide.category] || CATEGORY_STYLE['Viewpoints'];
            const IconComponent = catConfig.icon;
            const isFeatured = idx === 0;

            const fieldGuideCard = (
              <article
                key={guide.slug}
                className={`group relative rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-5 sm:p-7 shadow-xs hover:shadow-md hover:border-sky-300 dark:hover:border-sky-700 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between ${
                  isFeatured ? 'md:col-span-2 lg:col-span-3 bg-gradient-to-br from-white via-white to-sky-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-sky-950/30' : ''
                }`}
              >
                {isFeatured ? (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                    <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-[340px] w-full rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-950 shrink-0">
                      <Image
                        src={guide.coverImage.src}
                        alt={guide.coverImage.alt}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
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
                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight group-hover:text-sky-700 dark:group-hover:text-sky-400 transition-colors text-balance">
                          <Link href={getLocalizedHref(`/guides/${guide.slug}`, locale)} className="focus:outline-none">
                            <span className="absolute inset-0" aria-hidden="true" />
                            {guide.title}
                          </Link>
                        </h2>

                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {guide.description}
                        </p>
                      </div>

                      {/* Key Data Highlight Pill */}
                      <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 p-3.5 space-y-2">
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <div className="flex items-center gap-2 min-w-0">
                            <Sparkles className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" aria-hidden="true" />
                            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                              {guide.heroStat.label}:
                            </span>
                          </div>
                          <span className="text-xs font-mono font-extrabold text-sky-800 dark:text-sky-300 bg-sky-100/80 dark:bg-sky-950/80 px-2 py-0.5 rounded-md whitespace-nowrap shrink-0">
                            {guide.heroStat.value}
                          </span>
                        </div>
                        <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 leading-relaxed">
                          {guide.heroStat.detail}
                        </p>
                      </div>

                      {/* Card Footer */}
                      <div className="pt-2 flex items-center justify-between text-xs font-bold text-sky-700 dark:text-sky-400 group-hover:text-sky-900 dark:group-hover:text-sky-300">
                        <span>Read Featured Field Guide</span>
                        <ArrowRight
                          className="w-4 h-4 transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4">
                      {/* Photo Thumbnail */}
                      <div className="relative h-44 sm:h-48 w-full rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-950">
                        <Image
                          src={guide.coverImage.src}
                          alt={guide.coverImage.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

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
                        <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight group-hover:text-sky-700 dark:group-hover:text-sky-400 transition-colors text-balance">
                          <Link href={getLocalizedHref(`/guides/${guide.slug}`, locale)} className="focus:outline-none">
                            <span className="absolute inset-0" aria-hidden="true" />
                            {guide.title}
                          </Link>
                        </h2>

                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                          {guide.description}
                        </p>
                      </div>

                      {/* Key Data Highlight Pill */}
                      <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 p-3.5 space-y-2">
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <div className="flex items-center gap-2 min-w-0">
                            <Sparkles className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" aria-hidden="true" />
                            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                              {guide.heroStat.label}:
                            </span>
                          </div>
                          <span className="text-xs font-mono font-extrabold text-sky-800 dark:text-sky-300 bg-sky-100/80 dark:bg-sky-950/80 px-2 py-0.5 rounded-md whitespace-nowrap shrink-0">
                            {guide.heroStat.value}
                          </span>
                        </div>
                        <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 leading-relaxed">
                          {guide.heroStat.detail}
                        </p>
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
                  </>
                )}
              </article>
            );

            if (idx !== 0) {
              return fieldGuideCard;
            }

            return (
              <React.Fragment key={guide.slug}>
                {fieldGuideCard}
                {PLANNING_GUIDES.map((planningGuide) => {
                  const planningCategory =
                    CATEGORY_STYLE[planningGuide.category] || CATEGORY_STYLE.Viewpoints;
                  const PlanningIcon = planningCategory.icon;

                  return (
                    <article
                      key={planningGuide.path}
                      className="group relative rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-5 sm:p-7 shadow-xs hover:shadow-md hover:border-sky-300 dark:hover:border-sky-700 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        <div className="relative h-44 sm:h-48 w-full rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-950">
                          <Image
                            src={planningGuide.coverImage.src}
                            alt={planningGuide.coverImage.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <span
                              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-bold ${planningCategory.badge}`}
                            >
                              <PlanningIcon className="w-3.5 h-3.5" aria-hidden="true" />
                              <span>{planningGuide.category}</span>
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-100 px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-900 dark:border-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-200">
                              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                              </span>
                              {PLANNING_GUIDE_BADGE}
                            </span>
                          </div>
                          <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-500 dark:text-slate-400">
                            <Clock className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                            <span>{planningGuide.readingTimeMinutes} min read</span>
                          </span>
                        </div>

                        <div className="space-y-2">
                          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight group-hover:text-sky-700 dark:group-hover:text-sky-400 transition-colors text-balance">
                            <Link href={planningGuide.path} className="focus:outline-none">
                              <span className="absolute inset-0" aria-hidden="true" />
                              {planningGuide.linkTitle}
                            </Link>
                          </h2>
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                            {planningGuide.description}
                          </p>
                        </div>

                        <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 p-3.5 space-y-2">
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <div className="flex items-center gap-2 min-w-0">
                              <Sparkles className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" aria-hidden="true" />
                              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                                {planningGuide.heroStat.label}:
                              </span>
                            </div>
                            <span className="text-xs font-mono font-extrabold text-sky-800 dark:text-sky-300 bg-sky-100/80 dark:bg-sky-950/80 px-2 py-0.5 rounded-md whitespace-nowrap shrink-0">
                              {planningGuide.heroStat.value}
                            </span>
                          </div>
                          <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 leading-relaxed">
                            {planningGuide.heroStat.detail}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-sky-700 dark:text-sky-400 group-hover:text-sky-900 dark:group-hover:text-sky-300">
                        <span>Read Planning Guide</span>
                        <ArrowRight
                          className="w-4 h-4 transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </div>
                    </article>
                  );
                })}
              </React.Fragment>
            );
          })}
        </section>

        {/* Schema-Backed Field Guides FAQ Section */}
        <FaqSection
          title="Zermatt & Matterhorn Planning FAQs"
          subtitle="Essential answers before booking Gornergrat or Matterhorn Glacier Paradise excursions"
          faqs={guidesIndexFaqs}
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
              href={getLocalizedHref('/', locale)}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-sm transition-colors shrink-0"
            >
              <span>Open Live 10-Day Dashboard</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </>
  );
}
