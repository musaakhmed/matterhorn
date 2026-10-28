import Link from 'next/link';
import { Activity, ArrowRight, ChevronRight, Clock, HelpCircle } from 'lucide-react';
import { serializeJsonLd } from '@/lib/schema';
import { loadGuideTelemetry } from '@/lib/guide-telemetry';
import {
  PLANNING_GUIDE_BADGE,
  PLANNING_GUIDE_UPDATED,
  PLANNING_GUIDES,
} from '@/lib/planning-guides';
import Footer from '@/components/Footer';
import LiveVisibilityBanner from '@/components/LiveVisibilityBanner';

const card =
  'rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 shadow-xs';

export default async function GuideLayout({
  path,
  breadcrumb,
  title,
  description,
  jsonLd,
  children,
}: {
  path: string;
  breadcrumb: string;
  title: string;
  description: string;
  jsonLd: unknown;
  children: React.ReactNode;
}) {
  const snap = await loadGuideTelemetry();
  const scoreLabel = snap
    ? `East ${snap.east}/10 · South ${snap.south}/10`
    : 'Score updating';
  const others = PLANNING_GUIDES.filter((guide) => guide.path !== path);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <LiveVisibilityBanner />

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400"
        >
          <Link
            href="/"
            className="font-semibold transition-colors hover:text-sky-700 dark:hover:text-sky-400"
          >
            Live Dashboard
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" aria-hidden="true" />
          <Link
            href="/guides"
            className="font-semibold transition-colors hover:text-sky-700 dark:hover:text-sky-400"
          >
            Field Guides
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" aria-hidden="true" />
          <span className="truncate font-bold text-slate-800 dark:text-slate-200" aria-current="page">
            {breadcrumb}
          </span>
        </nav>

        <header className={`${card} space-y-5 p-6 sm:p-8`}>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-mono font-bold text-sky-800 dark:border-sky-800 dark:bg-sky-950/60 dark:text-sky-300">
                Planning Guide
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-100 px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-900 dark:border-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-200">
                <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                {PLANNING_GUIDE_BADGE}
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" aria-hidden="true" />
                <span>Updated {PLANNING_GUIDE_UPDATED}</span>
              </span>
            </div>
          </div>

          <h1 className="text-balance text-2xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-3xl md:text-4xl">
            {title}
          </h1>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
            {description}
          </p>

          <div className="flex min-h-16 flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/60 md:flex-row md:items-center md:justify-between">
            <div className="flex min-w-0 flex-wrap items-center gap-2">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 sm:text-sm">
                Today
              </span>
              <span className="rounded-lg border border-sky-200 bg-sky-100 px-2.5 py-0.5 font-mono text-xs font-extrabold tabular-nums text-sky-900 dark:border-sky-800 dark:bg-sky-950/80 dark:text-sky-200 sm:text-sm">
                {scoreLabel}
              </span>
              {snap ? (
                <span className="hidden font-mono text-xs tabular-nums text-slate-500 dark:text-slate-400 sm:inline">
                  {snap.updatedLabel}
                </span>
              ) : null}
            </div>
            <Link
              href="/#webcams"
              className="inline-flex h-10 w-full shrink-0 items-center justify-center rounded-xl bg-slate-900 px-4 text-xs font-bold text-white transition-colors hover:bg-sky-700 dark:bg-sky-600 dark:hover:bg-sky-500 sm:text-sm md:w-auto"
            >
              Check Live Webcams & Hourly Forecast
            </Link>
          </div>
        </header>

        <div className="space-y-6 text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base [&_a]:font-semibold [&_a]:text-sky-600 [&_a]:underline [&_a]:decoration-sky-300 [&_a]:underline-offset-2 [&_a]:transition-colors hover:[&_a]:text-sky-800 dark:[&_a]:text-sky-400 dark:[&_a]:decoration-sky-700 dark:hover:[&_a]:text-sky-300 [&_h2]:text-balance [&_h2]:text-lg [&_h2]:font-extrabold [&_h2]:tracking-tight [&_h2]:text-slate-900 sm:[&_h2]:text-xl dark:[&_h2]:text-white [&_li]:leading-relaxed [&_ol]:list-decimal [&_ol]:space-y-3 [&_ol]:pl-5 [&_strong]:font-bold [&_strong]:text-slate-900 dark:[&_strong]:text-white [&_ul]:list-disc [&_ul]:space-y-2.5 [&_ul]:pl-5">
          {children}
        </div>

        <section aria-label="More alpine guides" className="space-y-4">
          <h2 className="text-base font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-lg">
            Alpine Guides & Planning
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {others.map((guide) => (
              <Link
                key={guide.path}
                href={guide.path}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/90 dark:hover:border-sky-700"
              >
                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">
                    Planning Guide
                  </span>
                  <h3 className="text-sm font-extrabold leading-snug text-slate-900 transition-colors group-hover:text-sky-700 dark:text-white dark:group-hover:text-sky-400">
                    {guide.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                    {guide.blurb}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-end border-t border-slate-100 pt-3 text-xs font-bold text-sky-700 dark:border-slate-800 dark:text-sky-400">
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="plan-your-view"
          className="rounded-2xl border border-sky-200 bg-gradient-to-r from-sky-900 via-slate-900 to-slate-900 p-6 text-white shadow-sm dark:border-sky-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 sm:p-8"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl space-y-1.5">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-sky-300">
                <Activity className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                <span>Plan your view</span>
              </div>
              <h2 id="plan-your-view" className="text-balance text-lg font-extrabold tracking-tight sm:text-xl">
                Check the mountain before you buy a ticket
              </h2>
              <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
                The live tracker compares the Gornergrat east face and the Klein Matterhorn south
                crest, with webcams and an hourly forecast.
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-xs font-extrabold text-slate-950 shadow-sm transition-colors hover:bg-sky-400 sm:text-sm"
            >
              <span>Open Live Dashboard</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export function GuideVerdictGrid({
  columns = 2,
  children,
}: {
  columns?: 2 | 3;
  children: React.ReactNode;
}) {
  const cols = columns === 3 ? 'md:grid-cols-3' : 'sm:grid-cols-2';
  return <div className={`grid gap-4 ${cols}`}>{children}</div>;
}

export function GuideVerdict({
  tone,
  label,
  children,
}: {
  tone: 'emerald' | 'amber';
  label: string;
  children: React.ReactNode;
}) {
  const frame =
    tone === 'emerald'
      ? 'border-emerald-200/90 bg-emerald-50/80 dark:border-emerald-800/80 dark:bg-emerald-950/40'
      : 'border-amber-200/90 bg-amber-50/80 dark:border-amber-800/80 dark:bg-amber-950/30';
  const kicker = tone === 'emerald' ? 'text-emerald-800 dark:text-emerald-300' : 'text-amber-800 dark:text-amber-300';
  return (
    <div className={`rounded-2xl border p-4 sm:p-5 ${frame}`}>
      <p className={`text-[11px] font-mono font-bold uppercase tracking-wider ${kicker}`}>{label}</p>
      <div className="mt-2 text-xs leading-relaxed text-slate-800 dark:text-slate-100 sm:text-sm">
        {children}
      </div>
    </div>
  );
}

export function GuideTable({
  caption,
  headers,
  rows,
}: {
  caption: string;
  headers: string[];
  rows: string[][];
}) {
  return (
    <section aria-label={caption} className={`${card} space-y-4 p-5 sm:p-6`}>
      <h3 className="text-base font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-lg">
        {caption}
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
        <table className="w-full min-w-[40rem] border-collapse text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-100/90 text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:border-slate-800 dark:bg-slate-800/90 dark:text-slate-300">
              {headers.map((header) => (
                <th key={header || 'feature'} scope="col" className="px-4 py-3">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/70 text-xs dark:divide-slate-800 sm:text-sm">
            {rows.map((row) => (
              <tr key={row[0]} className="transition-colors hover:bg-slate-50/90 dark:hover:bg-slate-800/60">
                {row.map((cell, index) => (
                  <td
                    key={`${row[0]}-${index}`}
                    className={`px-4 py-3 align-top leading-relaxed ${
                      index === 0
                        ? 'font-bold text-slate-900 dark:text-white'
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
  );
}

export function GuideFaq({
  id,
  items,
}: {
  id: string;
  items: { question: string; answer: string }[];
}) {
  return (
    <section aria-labelledby={`${id}-heading`} className={`${card} space-y-5 p-6 sm:p-8`}>
      <div className="flex items-center gap-2">
        <HelpCircle className="h-5 w-5 shrink-0 text-sky-600 dark:text-sky-400" aria-hidden="true" />
        <h2 id={`${id}-heading`} className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-xl">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="divide-y divide-slate-200/80 overflow-hidden rounded-xl border border-slate-200 dark:divide-slate-800 dark:border-slate-800">
        {items.map((item, index) => (
          <details
            key={item.question}
            name={id}
            open={index === 0}
            className="group bg-white transition-colors open:bg-slate-50/70 dark:bg-slate-900/90 dark:open:bg-slate-800/50"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-4 text-xs font-bold text-slate-900 hover:text-sky-700 sm:px-5 sm:text-sm dark:text-white dark:hover:text-sky-400 [&::-webkit-details-marker]:hidden">
              <span>{item.question}</span>
              <ChevronRight
                className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-open:rotate-90 dark:text-slate-500"
                aria-hidden="true"
              />
            </summary>
            <p className="px-4 pb-4 text-xs leading-relaxed text-slate-600 sm:px-5 sm:text-sm dark:text-slate-300">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function GuideChecklist({
  legend,
  items,
}: {
  legend: string;
  items: { id: string; label: string; detail: string }[];
}) {
  return (
    <fieldset className={`${card} space-y-3 p-5 sm:p-6`}>
      <legend className="px-1 text-sm font-extrabold text-slate-900 dark:text-white">{legend}</legend>
      {items.map((item) => (
        <label
          key={item.id}
          className="flex cursor-pointer gap-3 rounded-xl border border-slate-200/80 bg-slate-50 p-3.5 dark:border-slate-800 dark:bg-slate-800/60"
        >
          <input
            id={item.id}
            type="checkbox"
            className="mt-0.5 h-4 w-4 shrink-0 accent-sky-600"
          />
          <span>
            <span className="block text-xs font-bold text-slate-900 dark:text-white sm:text-sm">
              {item.label}
            </span>
            <span className="mt-1 block text-xs leading-relaxed text-slate-600 dark:text-slate-300 sm:text-sm">
              {item.detail}
            </span>
          </span>
        </label>
      ))}
    </fieldset>
  );
}

export async function LiveConditionCallout({
  mode,
}: {
  mode: 'viewpoints' | 'reflection' | 'day-trip';
}) {
  const snap = await loadGuideTelemetry();
  const metrics = snap
    ? `East ${snap.east}/10 · South ${snap.south}/10 · Wind ${Math.round(snap.windKmh)} km/h ${snap.windCardinal}`
    : 'Live score updating';

  let heading = 'Live conditions';
  let detail = 'Open the tracker before you buy a ticket.';
  let href = '/#viewpoint-toggle';
  let cta = "Check today's East vs. South visibility score before buying tickets";

  if (mode === 'viewpoints') {
    heading = 'Live east vs. south';
    detail = !snap
      ? 'Scores are refreshing. Compare both viewpoints on the tracker before you buy.'
      : snap.fohn
        ? 'Southerly Föhn risk is active. Klein Matterhorn usually socks in first, while Gornergrat can stay clear.'
        : 'No southerly Föhn penalty is active on the east ridge right now. Still compare both scores before you buy.';
  } else if (mode === 'reflection') {
    heading = 'Reflection window';
    href = '/';
    cta = 'Check the live score before you ride to Rotenboden';
    if (!snap) {
      detail =
        'Wind and the summit score are refreshing. Confirm both on the tracker before you board.';
    } else {
      const windOk = snap.windKmh < 10;
      const summitOk = snap.east >= 8;
      detail = `${windOk ? 'Wind is under 10 km/h.' : 'Wind is at or above 10 km/h, so the surface is likely to ripple.'} ${
        summitOk
          ? 'The east-face score is 8/10 or higher, so the summit is exposed.'
          : 'The east-face score is under 8/10, so the pyramid is not fully exposed.'
      }`;
    }
  } else {
    heading = 'Day-trip decision';
    cta = 'Open the live tracker before you board';
    if (!snap) {
      detail =
        'The morning score is refreshing. If Gornergrat is under 5/10 when you check, postpone the trip.';
    } else if (snap.eastMorning < 5) {
      detail = `Gornergrat morning score is ${snap.eastMorning}/10. Postpone. You would spend about seven hours on trains without seeing the mountain.`;
    } else {
      detail = `Gornergrat morning score is ${snap.eastMorning}/10. That meets the 5/10 rule. Ride Gornergrat before lunch, and keep a valley backup.`;
    }
  }

  return (
    <aside className="rounded-xl border border-sky-200 bg-sky-50/90 p-4 dark:border-sky-800 dark:bg-sky-950/40" aria-label={heading}>
      <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-sky-800 dark:text-sky-300">
        {heading}
      </p>
      <p className="mt-2 min-h-12 text-xs leading-relaxed text-sky-950 dark:text-sky-100 sm:text-sm">
        {detail}
      </p>
      <p className="mt-3 min-h-5 font-mono text-xs tabular-nums text-slate-700 dark:text-slate-300 sm:text-sm">
        {metrics}
      </p>
      <Link
        href={href}
        className="mt-4 inline-flex min-h-10 items-center text-xs font-bold !text-sky-700 !no-underline hover:!text-sky-900 dark:!text-sky-300 dark:hover:!text-sky-100 sm:text-sm"
      >
        {cta}
        <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
      </Link>
    </aside>
  );
}
