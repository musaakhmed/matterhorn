import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Clock,
  CheckCircle2,
  Lightbulb,
  HelpCircle,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  Info,
  Activity,
  Sparkles,
  Camera,
  TrainFront,
} from 'lucide-react';
import { GUIDES } from '@/lib/guides';
import { fetchMatterhornVisibility } from '@/lib/weather';
import { buildGuideArticleJsonLd, serializeJsonLd } from '@/lib/schema';
import LiveVisibilityBanner from '@/components/LiveVisibilityBanner';
import HistoricalTable from '@/components/HistoricalTable';
import ContingencyCard from '@/components/ContingencyCard';
import ScenicTrainsCard from '@/components/ScenicTrainsCard';
import { getLocalizedHref, Locale } from '@/lib/i18n/config';
import { getLocalizedGuideArticle } from '@/lib/i18n/guides';
import Footer from '@/components/Footer';
import VisibilityIcon, { VISIBILITY_SCALE_TIERS } from '@/components/VisibilityIcon';

function renderInlineContent(text: string, locale?: Locale): React.ReactNode {
  if (!text || !text.includes('[') || !text.includes('](')) {
    return text;
  }
  const parts: React.ReactNode[] = [];
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const label = match[1];
    const href = match[2];
    const isInternal = href.startsWith('/');
    if (isInternal) {
      parts.push(
        <Link
          key={`${match.index}-${href}`}
          href={getLocalizedHref(href, locale || 'en')}
          className="font-semibold text-sky-600 dark:text-sky-400 underline decoration-sky-300 dark:decoration-sky-700 underline-offset-2 hover:text-sky-800 dark:hover:text-sky-300 transition-colors"
        >
          {label}
        </Link>
      );
    } else {
      parts.push(
        <a
          key={`${match.index}-${href}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-sky-600 dark:text-sky-400 underline decoration-sky-300 dark:decoration-sky-700 underline-offset-2 hover:text-sky-800 dark:hover:text-sky-300 transition-colors"
        >
          {label}
        </a>
      );
    }
    lastIndex = linkRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

export default async function GuideArticleView({
  slug,
  locale = 'en',
}: {
  slug: string;
  locale?: Locale;
}) {
  const guide = getLocalizedGuideArticle(slug, locale);

  if (!guide) {
    notFound();
  }

  const relatedGuides = GUIDES.filter((g) => g.slug !== guide.slug)
    .slice(0, 3)
    .map((g) => getLocalizedGuideArticle(g.slug, locale));

  const telemetry = await fetchMatterhornVisibility();
  const jsonLd = buildGuideArticleJsonLd(guide, telemetry);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <LiveVisibilityBanner />

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400"
        >
          <Link
            href={getLocalizedHref('/', locale)}
            className="hover:text-sky-700 dark:hover:text-sky-400 transition-colors font-semibold"
          >
            Live Dashboard
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" aria-hidden="true" />
          <Link
            href={getLocalizedHref('/guides', locale)}
            className="hover:text-sky-700 dark:hover:text-sky-400 transition-colors font-semibold"
          >
            Field Guides
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" aria-hidden="true" />
          <span className="text-slate-800 dark:text-slate-200 font-bold truncate">
            {guide.shortTitle}
          </span>
        </nav>

        {/* Article Header Card */}
        <header className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-6 sm:p-8 shadow-xs space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-xs font-mono font-bold text-sky-800 dark:text-sky-300">
              <span>{guide.category} Field Guide</span>
            </span>

            <div className="flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" aria-hidden="true" />
                <span>{guide.readingTimeMinutes} min read</span>
              </span>
              <span>•</span>
              <span>Updated {guide.updatedAt}</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight text-balance leading-tight">
            {guide.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {guide.description}
          </p>

          {/* Key Metric Highlight Bar */}
          <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2.5">
            <div className="flex items-center gap-2 shrink-0">
              <Sparkles className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                {guide.heroStat.label}:
              </span>
              <span className="text-xs sm:text-sm font-mono font-extrabold text-sky-900 dark:text-sky-200 bg-sky-100 dark:bg-sky-950/80 border border-sky-200 dark:border-sky-800 px-2.5 py-0.5 rounded-lg whitespace-nowrap shrink-0">
                {guide.heroStat.value}
              </span>
            </div>
            <span className="text-xs sm:text-sm font-mono text-slate-600 dark:text-slate-400">
              {guide.heroStat.detail}
            </span>
          </div>
        </header>

        {/* Featured Field Guide Photograph */}
        {guide.coverImage && (
          <figure className="overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-slate-950 shadow-sm">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full max-h-[500px]">
              <Image
                src={guide.coverImage.src}
                alt={guide.coverImage.alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 95vw, 1400px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
            </div>
            {guide.coverImage.caption && (
              <figcaption className="px-5 py-3 text-xs font-mono text-slate-500 dark:text-slate-400 bg-white/95 dark:bg-slate-900/90 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-3">
                <span className="flex items-center gap-1.5 min-w-0">
                  <Camera className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" aria-hidden="true" />
                  <span className="truncate">{guide.coverImage.caption}</span>
                </span>
                <span className="shrink-0 text-[11px] text-slate-400 dark:text-slate-500 hidden sm:inline">
                  Zermatt Telemetry
                </span>
              </figcaption>
            )}
          </figure>
        )}

        {/* Key Takeaways Box (TL;DR for Readers & AI Search) */}
        <section
          aria-label="Key Takeaways"
          className="rounded-2xl border border-emerald-200/90 dark:border-emerald-800/80 bg-gradient-to-br from-emerald-50/70 via-white to-sky-50/40 dark:from-emerald-950/40 dark:via-slate-900/80 dark:to-slate-900/50 p-6 sm:p-7 shadow-2xs space-y-4"
        >
          <div className="flex items-center gap-2 text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" aria-hidden="true" />
            <h2>Key Alpine Takeaways (TL;DR)</h2>
          </div>

          <ul className="space-y-2.5">
            {guide.keyTakeaways.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
              >
                <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400 mt-0.5 shrink-0">
                  0{idx + 1}.
                </span>
                <span>{renderInlineContent(item, locale)}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Optional Comparison Table */}
        {guide.comparisonTable && (
          <section
            aria-label={guide.comparisonTable.caption}
            className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-5 sm:p-6 shadow-xs space-y-4"
          >
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
              {guide.comparisonTable.caption}
            </h2>

            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100/90 dark:bg-slate-800/90 border-b border-slate-200 dark:border-slate-800 text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                    {guide.comparisonTable.headers.map((header) => (
                      <th key={header} className="py-3 px-4">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/70 dark:divide-slate-800 text-xs sm:text-sm">
                  {guide.comparisonTable.rows.map((row, rowIdx) => (
                    <tr
                      key={rowIdx}
                      className="hover:bg-slate-50/90 dark:hover:bg-slate-800/60 transition-colors"
                    >
                      {row.map((cell, cellIdx) => (
                        <td
                          key={cellIdx}
                          className={`py-3 px-4 leading-relaxed ${
                            cellIdx === 0
                              ? 'font-bold text-slate-900 dark:text-white whitespace-nowrap'
                              : 'text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Optional Embedded Interactive Dashboard Widgets */}
        {guide.embeddedWidget === 'historical-table' && <HistoricalTable />}

        {guide.embeddedWidget === 'contingency-plans' && (
          <ContingencyCard
            currentScore={3}
            morningScore={3}
            afternoonScore={4}
            viewpointLabel="Gornergrat & Glacier Paradise"
          />
        )}

        {guide.embeddedWidget === 'trains-comparison' && (
          <div className="my-2">
            <ScenicTrainsCard initialData={telemetry} />
          </div>
        )}

        {guide.embeddedWidget === 'scoring-formula' && (
          <section
            aria-label="Visibility Scoring Methodology"
            className="rounded-2xl border border-sky-200 dark:border-sky-800 bg-sky-50/60 dark:bg-slate-900/90 p-5 sm:p-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300 shadow-2xs space-y-4"
          >
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-extrabold">
              <Info className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" aria-hidden="true" />
              <span>How Our High-Altitude 1–10 Scoring Engine Works</span>
            </div>
            <p className="leading-relaxed">
              Every 15 minutes, our telemetry engine queries Open-Meteo high-altitude grid cells at{' '}
              <strong>3,089m (Gornergrat)</strong> and{' '}
              <strong>3,883m (Glacier Paradise)</strong> and computes a weighted hourly score:
            </p>
            <div className="rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-3.5 font-mono text-xs text-slate-800 dark:text-slate-200 space-y-1">
              <div className="text-sky-700 dark:text-sky-400 font-bold">
                Raw = 100 - (0.60·C_mid + 0.25·C_low + 0.15·C_high) - Penalties
              </div>
              <div className="text-slate-600 dark:text-slate-400">
                Penalties: Visibility &lt; 10km (-25) • Precip &gt; 50% (-15) • Föhn Wind 180°–270° ≥ 35km/h (-10)
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {VISIBILITY_SCALE_TIERS.map((tier) => (
                <div
                  key={tier.status}
                  className="flex items-center gap-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200/90 dark:border-slate-800 p-2.5"
                >
                  <VisibilityIcon badgeColor={tier.badgeColor} size="md" />
                  <div className="min-w-0">
                    <div className="text-xs font-extrabold text-slate-900 dark:text-white">
                      {tier.scoreRange}/10 — {tier.status}
                    </div>
                    <div className="text-[11px] text-slate-600 dark:text-slate-400 truncate">
                      {tier.shortCaption}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Main Editorial Sections */}
        <div className="space-y-6">
          {guide.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-6 sm:p-8 shadow-xs space-y-4"
            >
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight text-balance">
                {section.heading}
              </h2>

              {section.image && (
                <figure className="overflow-hidden rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-950 shadow-xs my-4">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={section.image.src}
                      alt={section.image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                      className="object-cover"
                    />
                  </div>
                  {section.image.caption && (
                    <figcaption className="px-4 py-2.5 text-xs font-mono text-slate-500 dark:text-slate-400 bg-white/95 dark:bg-slate-900/90 border-t border-slate-200/80 dark:border-slate-800 flex items-center gap-2">
                      <Camera className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" aria-hidden="true" />
                      <span>{section.image.caption}</span>
                    </figcaption>
                  )}
                </figure>
              )}

              <div className="space-y-3.5">
                {section.paragraphs.map((paragraph, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl"
                  >
                    {renderInlineContent(paragraph, locale)}
                  </p>
                ))}
              </div>

              {section.bulletPoints && section.bulletPoints.length > 0 && (
                <ul className="space-y-2.5 pt-2">
                  {section.bulletPoints.map((bp, bIdx) => (
                    <li
                      key={bIdx}
                      className="rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 p-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                    >
                      <strong className="text-slate-900 dark:text-white font-bold">
                        {bp.bold}
                      </strong>{' '}
                      {renderInlineContent(bp.text, locale)}
                    </li>
                  ))}
                </ul>
              )}

              {section.proTip && (
                <div className="rounded-xl bg-sky-50/90 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 p-4 flex items-start gap-3">
                  <Lightbulb
                    className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div className="text-xs sm:text-sm text-sky-950 dark:text-sky-200 leading-relaxed">
                    <strong className="font-extrabold uppercase tracking-wider text-sky-800 dark:text-sky-300 mr-1.5">
                      {section.proTip.label}:
                    </strong>
                    <span>{renderInlineContent(section.proTip.text, locale)}</span>
                  </div>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Frequently Asked Questions (Schema-Backed Native Accordion) */}
        <section
          aria-label="Frequently Asked Questions"
          className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-6 sm:p-8 shadow-xs space-y-5"
        >
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0" aria-hidden="true" />
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-slate-200/80 dark:divide-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
            {guide.faqs.map((faq, idx) => (
              <details
                key={idx}
                name="guide-faq"
                open={idx === 0}
                className="group bg-white dark:bg-slate-900/90 open:bg-slate-50/70 dark:open:bg-slate-800/50 transition-colors"
              >
                <summary className="cursor-pointer list-none px-4 sm:px-5 py-4 font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center justify-between gap-3 hover:text-sky-700 dark:hover:text-sky-400">
                  <span>{faq.question}</span>
                  <ChevronRight
                    className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0 transition-transform group-open:rotate-90"
                    aria-hidden="true"
                  />
                </summary>
                <div className="px-4 sm:px-5 pb-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {renderInlineContent(faq.answer, locale)}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Live Telemetry / Trains Conversion Banner */}
        {guide.slug === 'gornergrat-railway-vs-glacier-express' ? (
          <section className="rounded-2xl border border-sky-200 dark:border-sky-800 bg-gradient-to-r from-sky-900 via-slate-900 to-slate-900 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 text-white p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
              <div className="space-y-1.5 max-w-xl">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-sky-300">
                  <TrainFront className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                  <span>Interactive Swiss Trains Hub</span>
                </div>
                <h2 className="text-lg sm:text-xl font-extrabold tracking-tight text-balance">
                  Live Gornergrat Summit Visibility &amp; Glacier Express Passes
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Compare 2026 fares, Swiss Travel Pass savings, real-time 3,089m summit webcams, and seat reservation requirements.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  href={getLocalizedHref('/trains', locale)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-sm transition-colors"
                >
                  <TrainFront className="w-4 h-4" aria-hidden="true" />
                  <span>Open Trains Hub</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  href={getLocalizedHref('/', locale)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm transition-colors border border-white/20"
                >
                  <Activity className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                  <span>Live Weather</span>
                </Link>
              </div>
            </div>
          </section>
        ) : (
          <section className="rounded-2xl border border-sky-200 dark:border-sky-800 bg-gradient-to-r from-sky-900 via-slate-900 to-slate-900 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 text-white p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
              <div className="space-y-1.5 max-w-xl">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-sky-300">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                  <span>Check Before You Buy Tickets</span>
                </div>
                <h2 className="text-lg sm:text-xl font-extrabold tracking-tight text-balance">
                  Compare Gornergrat &amp; Glacier Paradise Live Visibility Now
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  View our real-time 1–10 AM/PM visibility index, 10-day forecast horizon, and 4 live Zermatt Roundshot webcams.
                </p>
              </div>

              <Link
                href={getLocalizedHref('/', locale)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-sm transition-colors shrink-0"
              >
                <span>Open Live Dashboard</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </section>
        )}

        {/* Related Field Guides */}
        <section aria-label="More Matterhorn Field Guides" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
              More Zermatt &amp; Matterhorn Field Guides
            </h2>
            <Link
              href={getLocalizedHref('/guides', locale)}
              className="inline-flex items-center gap-1 text-xs font-bold text-sky-700 dark:text-sky-400 hover:text-sky-900 dark:hover:text-sky-300"
            >
              <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
              <span>All Guides</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedGuides.map((item) => (
              <Link
                key={item.slug}
                href={getLocalizedHref(`/guides/${item.slug}`, locale)}
                className="group rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-4 shadow-2xs hover:shadow-md hover:border-sky-300 dark:hover:border-sky-700 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between overflow-hidden"
              >
                <div className="space-y-3">
                  {item.coverImage && (
                    <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-slate-200/70 dark:border-slate-800/80 bg-slate-100 dark:bg-slate-800">
                      <Image
                        src={item.coverImage.src}
                        alt={item.coverImage.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">
                      {item.category}
                    </span>
                    <h3 className="text-sm font-extrabold text-slate-900 dark:text-white group-hover:text-sky-700 dark:group-hover:text-sky-400 transition-colors leading-snug">
                      {item.shortTitle}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-sky-700 dark:text-sky-400">
                  <span>{item.readingTimeMinutes} min read</span>
                  <ArrowRight
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </>
  );
}
