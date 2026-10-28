'use client';

import Link from 'next/link';
import { PLANNING_GUIDES } from '@/lib/planning-guides';
import { getLocalizedGuideArticle } from '@/lib/i18n/guides';
import { getLocalizedHref } from '@/lib/i18n/config';
import { useTranslation } from '@/lib/i18n/context';

export default function AlpinePlanningLinks({
  variant = 'home',
}: {
  variant?: 'home' | 'footer';
}) {
  const { locale } = useTranslation();
  const comparison = getLocalizedGuideArticle('gornergrat-vs-glacier-paradise', locale);
  const dayTrip = getLocalizedGuideArticle('zurich-geneva-to-zermatt-day-trip', locale);
  const riffelsee = PLANNING_GUIDES[0];

  const links = [
    {
      href: getLocalizedHref(`/guides/${comparison.slug}`, locale),
      title: comparison.shortTitle,
      linkTitle: comparison.shortTitle,
      blurb: comparison.heroStat.detail,
    },
    {
      href: riffelsee.path,
      title: riffelsee.title,
      linkTitle: riffelsee.linkTitle,
      blurb: riffelsee.blurb,
    },
    {
      href: getLocalizedHref(`/guides/${dayTrip.slug}`, locale),
      title: dayTrip.shortTitle,
      linkTitle: dayTrip.shortTitle,
      blurb: dayTrip.heroStat.detail,
    },
  ];

  if (variant === 'footer') {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Alpine Guides & Planning
        </p>
        <ul className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
          {links.map((guide) => (
            <li key={guide.href}>
              <Link
                href={guide.href}
                className="text-xs font-medium text-slate-700 transition-colors hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400"
              >
                {guide.linkTitle}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <section
      aria-label="Alpine Guides and Planning"
      className="rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-2xs dark:border-slate-800 dark:bg-slate-900/90 sm:p-6"
    >
      <h2 className="text-sm font-extrabold text-slate-900 dark:text-white sm:text-base">
        Alpine Guides & Planning
      </h2>
      <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400 sm:text-sm">
        Pre-trip answers for viewpoint choice, the Riffelsee reflection, and a Zurich or Geneva day trip.
      </p>
      <ul className="mt-4 grid gap-3 lg:grid-cols-3">
        {links.map((guide) => (
          <li key={guide.href}>
            <Link
              href={guide.href}
              className="flex h-full flex-col rounded-xl border border-slate-200 px-3 py-3 transition-colors hover:border-sky-300 dark:border-slate-800 dark:hover:border-sky-700"
            >
              <span className="text-sm font-semibold text-slate-900 dark:text-white">
                {guide.title}
              </span>
              <span className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                {guide.blurb}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
