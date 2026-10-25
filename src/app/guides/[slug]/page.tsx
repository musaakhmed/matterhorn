import React from 'react';
import type { Metadata } from 'next';
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
  ShieldCheck,
  Activity,
  Sparkles,
} from 'lucide-react';
import { GUIDES, getGuideBySlug } from '@/lib/guides';
import LiveVisibilityBanner from '@/components/LiveVisibilityBanner';
import HistoricalTable from '@/components/HistoricalTable';
import ContingencyCard from '@/components/ContingencyCard';
import VisibilityIcon, { VISIBILITY_SCALE_TIERS } from '@/components/VisibilityIcon';

export const revalidate = 900; // Refresh live banner every 15 minutes

export function generateStaticParams() {
  return GUIDES.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {
      title: 'Guide Not Found | Is The Matterhorn Visible?',
    };
  }

  return {
    title: guide.seoTitle,
    description: guide.description,
    alternates: {
      canonical: `/guides/${guide.slug}`,
    },
    openGraph: {
      title: guide.seoTitle,
      description: guide.description,
      url: `https://isthematterhornvisible.com/guides/${guide.slug}`,
      siteName: 'Is The Matterhorn Visible?',
      locale: 'en_CH',
      type: 'article',
      publishedTime: guide.publishedAt,
      modifiedTime: guide.updatedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.seoTitle,
      description: guide.description,
    },
  };
}

export default async function GuideArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const relatedGuides = GUIDES.filter((g) => g.slug !== guide.slug).slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: guide.title,
        description: guide.description,
        datePublished: guide.publishedAt,
        dateModified: guide.updatedAt,
        author: {
          '@type': 'Organization',
          name: 'Is The Matterhorn Visible? Alpine Telemetry',
          url: 'https://isthematterhornvisible.com',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Is The Matterhorn Visible?',
          url: 'https://isthematterhornvisible.com',
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://isthematterhornvisible.com/guides/${guide.slug}`,
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: guide.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Live Dashboard',
            item: 'https://isthematterhornvisible.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Alpine Field Guides',
            item: 'https://isthematterhornvisible.com/guides',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: guide.shortTitle,
            item: `https://isthematterhornvisible.com/guides/${guide.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <LiveVisibilityBanner />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-8">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-slate-500"
        >
          <Link
            href="/"
            className="hover:text-sky-700 transition-colors font-semibold"
          >
            Live Dashboard
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
          <Link
            href="/guides"
            className="hover:text-sky-700 transition-colors font-semibold"
          >
            Field Guides
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
          <span className="text-slate-800 font-bold truncate">
            {guide.shortTitle}
          </span>
        </nav>

        {/* Article Header Card */}
        <header className="rounded-3xl border border-slate-200/90 bg-white/95 p-6 sm:p-8 shadow-xs space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold text-sky-800">
              <span>{guide.category} Field Guide</span>
            </span>

            <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-sky-600" aria-hidden="true" />
                <span>{guide.readingTimeMinutes} min read</span>
              </span>
              <span>•</span>
              <span>Updated {guide.updatedAt}</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-balance leading-tight">
            {guide.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {guide.description}
          </p>

          {/* Key Metric Highlight Bar */}
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-600 shrink-0" aria-hidden="true" />
              <span className="text-xs font-bold text-slate-700">
                {guide.heroStat.label}:
              </span>
              <span className="text-xs sm:text-sm font-mono font-extrabold text-sky-900 bg-sky-100 border border-sky-200 px-2.5 py-0.5 rounded-lg">
                {guide.heroStat.value}
              </span>
            </div>
            <span className="text-xs font-mono text-slate-600">
              {guide.heroStat.detail}
            </span>
          </div>
        </header>

        {/* Key Takeaways Box (TL;DR for Readers & AI Search) */}
        <section
          aria-label="Key Takeaways"
          className="rounded-2xl border border-emerald-200/90 bg-gradient-to-br from-emerald-50/70 via-white to-sky-50/40 p-6 sm:p-7 shadow-2xs space-y-4"
        >
          <div className="flex items-center gap-2 text-sm sm:text-base font-extrabold text-slate-900">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" aria-hidden="true" />
            <h2>Key Alpine Takeaways (TL;DR)</h2>
          </div>

          <ul className="space-y-2.5">
            {guide.keyTakeaways.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed"
              >
                <span className="font-mono font-bold text-emerald-700 mt-0.5 shrink-0">
                  0{idx + 1}.
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Optional Comparison Table */}
        {guide.comparisonTable && (
          <section
            aria-label={guide.comparisonTable.caption}
            className="rounded-2xl border border-slate-200/90 bg-white/95 p-5 sm:p-6 shadow-xs space-y-4"
          >
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
              {guide.comparisonTable.caption}
            </h2>

            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100/90 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    {guide.comparisonTable.headers.map((header) => (
                      <th key={header} className="py-3 px-4">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/70 text-xs sm:text-sm">
                  {guide.comparisonTable.rows.map((row, rowIdx) => (
                    <tr
                      key={rowIdx}
                      className="hover:bg-slate-50/90 transition-colors"
                    >
                      {row.map((cell, cellIdx) => (
                        <td
                          key={cellIdx}
                          className={`py-3 px-4 leading-relaxed ${
                            cellIdx === 0
                              ? 'font-bold text-slate-900 whitespace-nowrap'
                              : 'text-slate-700'
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

        {guide.embeddedWidget === 'scoring-formula' && (
          <section
            aria-label="Visibility Scoring Methodology"
            className="rounded-2xl border border-sky-200 bg-sky-50/60 p-5 sm:p-6 text-xs sm:text-sm text-slate-700 shadow-2xs space-y-4"
          >
            <div className="flex items-center gap-2 text-slate-900 font-extrabold">
              <Info className="w-4 h-4 text-sky-600 shrink-0" aria-hidden="true" />
              <span>How Our High-Altitude 1–10 Scoring Engine Works</span>
            </div>
            <p className="leading-relaxed">
              Every 15 minutes, our telemetry engine queries Open-Meteo high-altitude grid cells at{' '}
              <strong>3,089m (Gornergrat)</strong> and{' '}
              <strong>3,883m (Glacier Paradise)</strong> and computes a weighted hourly score:
            </p>
            <div className="rounded-xl bg-white border border-slate-200 p-3.5 font-mono text-xs text-slate-800 space-y-1">
              <div className="text-sky-700 font-bold">
                Raw = 100 - (0.60·C_mid + 0.25·C_low + 0.15·C_high) - Penalties
              </div>
              <div className="text-slate-600">
                Penalties: Visibility &lt; 10km (-25) • Precip &gt; 50% (-15) • Föhn Wind 180°–270° ≥ 35km/h (-10)
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {VISIBILITY_SCALE_TIERS.map((tier) => (
                <div
                  key={tier.status}
                  className="flex items-center gap-3 rounded-xl bg-white border border-slate-200/90 p-2.5"
                >
                  <VisibilityIcon badgeColor={tier.badgeColor} size="md" />
                  <div className="min-w-0">
                    <div className="text-xs font-extrabold text-slate-900">
                      {tier.scoreRange}/10 — {tier.status}
                    </div>
                    <div className="text-[11px] text-slate-600 truncate">
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
              className="rounded-2xl border border-slate-200/90 bg-white/95 p-6 sm:p-8 shadow-xs space-y-4"
            >
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight text-balance">
                {section.heading}
              </h2>

              <div className="space-y-3.5">
                {section.paragraphs.map((paragraph, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-sm sm:text-base text-slate-700 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {section.bulletPoints && section.bulletPoints.length > 0 && (
                <ul className="space-y-2.5 pt-2">
                  {section.bulletPoints.map((bp, bIdx) => (
                    <li
                      key={bIdx}
                      className="rounded-xl bg-slate-50 border border-slate-200/80 p-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed"
                    >
                      <strong className="text-slate-900 font-bold">
                        {bp.bold}
                      </strong>{' '}
                      {bp.text}
                    </li>
                  ))}
                </ul>
              )}

              {section.proTip && (
                <div className="rounded-xl bg-sky-50/90 border border-sky-200 p-4 flex items-start gap-3">
                  <Lightbulb
                    className="w-5 h-5 text-sky-600 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div className="text-xs sm:text-sm text-sky-950 leading-relaxed">
                    <strong className="font-extrabold uppercase tracking-wider text-sky-800 mr-1.5">
                      {section.proTip.label}:
                    </strong>
                    <span>{section.proTip.text}</span>
                  </div>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Frequently Asked Questions (Schema-Backed Native Accordion) */}
        <section
          aria-label="Frequently Asked Questions"
          className="rounded-2xl border border-slate-200/90 bg-white/95 p-6 sm:p-8 shadow-xs space-y-5"
        >
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-sky-600 shrink-0" aria-hidden="true" />
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-slate-200/80 border border-slate-200 rounded-xl overflow-hidden">
            {guide.faqs.map((faq, idx) => (
              <details
                key={idx}
                name="guide-faq"
                open={idx === 0}
                className="group bg-white open:bg-slate-50/70 transition-colors"
              >
                <summary className="cursor-pointer list-none px-4 sm:px-5 py-4 font-bold text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-3 hover:text-sky-700">
                  <span>{faq.question}</span>
                  <ChevronRight
                    className="w-4 h-4 text-slate-400 shrink-0 transition-transform group-open:rotate-90"
                    aria-hidden="true"
                  />
                </summary>
                <div className="px-4 sm:px-5 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Live Telemetry Conversion Banner */}
        <section className="rounded-2xl border border-sky-200 bg-gradient-to-r from-sky-900 via-slate-900 to-slate-900 text-white p-6 sm:p-8 shadow-sm">
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
              href="/"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-sm transition-colors shrink-0"
            >
              <span>Open Live Dashboard</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* Related Field Guides */}
        <section aria-label="More Matterhorn Field Guides" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
              More Zermatt &amp; Matterhorn Field Guides
            </h2>
            <Link
              href="/guides"
              className="inline-flex items-center gap-1 text-xs font-bold text-sky-700 hover:text-sky-900"
            >
              <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
              <span>All Guides</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedGuides.map((item) => (
              <Link
                key={item.slug}
                href={`/guides/${item.slug}`}
                className="group rounded-2xl border border-slate-200/90 bg-white/90 p-5 shadow-2xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-sky-700">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
                    {item.shortTitle}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-700">
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

      <footer className="border-t border-slate-200 bg-white/90 py-6 px-4 sm:px-6 text-xs text-slate-600">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-medium text-slate-700">
            <ShieldCheck className="w-4 h-4 text-emerald-600" aria-hidden="true" />
            <span>
              isthematterhornvisible.com • Swiss Alpine Telemetry Utility
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 font-mono">
            <Link
              href="/"
              className="text-sky-700 hover:text-sky-900 font-semibold transition-colors underline underline-offset-4"
            >
              Live Dashboard
            </Link>
            <span>•</span>
            <Link
              href="/guides"
              className="text-sky-700 hover:text-sky-900 font-semibold transition-colors underline underline-offset-4"
            >
              All Field Guides
            </Link>
            <span>•</span>
            <Link
              href="/api/visibility"
              className="text-sky-700 hover:text-sky-900 font-semibold transition-colors underline underline-offset-4"
            >
              JSON API (/api/visibility)
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
