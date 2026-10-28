'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  TrainFront,
  Mountain,
  Ticket,
  ChevronRight,
  ChevronDown,
  Sparkles,
  Camera,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  ExternalLink,
} from 'lucide-react';
import { VisibilityApiResponse, BadgeColor } from '@/lib/types';
import { getViewpointScoreMap } from '@/lib/viewpoints';
import { getLocalizedHref, Locale } from '@/lib/i18n/config';
import {
  getLocalizedTrainsLiveStatus,
  getTrains,
  getTrainsComparisonUi,
  getTrainsFaqs,
} from '@/lib/i18n/trains-copy';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FramedPhoto from '@/components/FramedPhoto';
import { PLACE_PHOTOS } from '@/lib/place-photos';
import TrainScene from '@/components/scenes/TrainScene';

interface TrainsComparisonViewProps {
  initialData?: VisibilityApiResponse;
  locale?: Locale;
}

const BADGE_COLOR_MAP: Record<BadgeColor, { pill: string; dot: string; text: string }> = {
  emerald: {
    pill: 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-700/80 text-emerald-900 dark:text-emerald-300',
    dot: 'bg-emerald-500',
    text: 'text-emerald-700 dark:text-emerald-400',
  },
  amber: {
    pill: 'bg-amber-50 dark:bg-amber-950/60 border-amber-300 dark:border-amber-700/80 text-amber-900 dark:text-amber-300',
    dot: 'bg-amber-500',
    text: 'text-amber-700 dark:text-amber-400',
  },
  orange: {
    pill: 'bg-orange-50 dark:bg-orange-950/60 border-orange-300 dark:border-orange-700/80 text-orange-900 dark:text-orange-300',
    dot: 'bg-orange-500',
    text: 'text-orange-700 dark:text-orange-400',
  },
  rose: {
    pill: 'bg-rose-50 dark:bg-rose-950/60 border-rose-300 dark:border-rose-700/80 text-rose-900 dark:text-rose-300',
    dot: 'bg-rose-500',
    text: 'text-rose-700 dark:text-rose-400',
  },
};

function RichText({ text }: { text: string }) {
  const chunks = text.split(/(\[\[(?:b|em|amber)\|[\s\S]*?\]\])/g);
  return chunks.map((chunk, index) => {
    if (!chunk) return null;
    if (chunk.startsWith('[[b|') && chunk.endsWith(']]')) {
      return <strong key={index}>{chunk.slice(4, -2)}</strong>;
    }
    if (chunk.startsWith('[[em|') && chunk.endsWith(']]')) {
      return <em key={index}>{chunk.slice(5, -2)}</em>;
    }
    if (chunk.startsWith('[[amber|') && chunk.endsWith(']]')) {
      return (
        <strong key={index} className="text-amber-700 dark:text-amber-400">
          {chunk.slice(8, -2)}
        </strong>
      );
    }
    return <span key={index}>{chunk}</span>;
  });
}

function ConditionStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex h-full flex-col justify-center rounded-xl bg-slate-50 px-3 py-2.5 dark:bg-slate-900/70">
      <dt className="text-xs font-medium text-slate-500 dark:text-slate-400">{label}</dt>
      <dd className="mt-0.5 text-sm font-semibold leading-5 text-slate-900 dark:text-white">{value}</dd>
    </div>
  );
}

export default function TrainsComparisonView({
  initialData,
  locale = 'en',
}: TrainsComparisonViewProps) {
  const ui = getTrainsComparisonUi(locale);
  const liveStatus = getLocalizedTrainsLiveStatus(initialData, locale);
  const trains = getTrains(locale);
  const trainFaqs = getTrainsFaqs(locale);
  const gornergrat = trains.gornergrat;
  const glacier = trains['glacier-express'];

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const gBadge = BADGE_COLOR_MAP[liveStatus.gornergrat.badge];
  const gexBadge = BADGE_COLOR_MAP[liveStatus.glacierExpress.statusBadgeColor as BadgeColor] || BADGE_COLOR_MAP.emerald;

  const gornergratView = initialData?.viewpoints?.gornergrat;
  const glacierView = initialData?.viewpoints?.['glacier-paradise'];

  return (
    <>
      <Header
        initialSwissTime={initialData?.swissTimeFormatted}
        activeBadgeColor={gornergratView?.currentBadgeColor}
        telemetrySummary={
          gornergratView && glacierView
            ? {
                gornergratScore: gornergratView.currentScore,
                gornergratBadge: gornergratView.currentBadgeColor,
                gornergratStatus: gornergratView.currentStatus,
                glacierScore: glacierView.currentScore,
                glacierBadge: glacierView.currentBadgeColor,
                glacierStatus: glacierView.currentStatus,
                viewpointScores: getViewpointScoreMap(initialData),
              }
            : undefined
        }
      />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8 sm:space-y-12">
        {/* Breadcrumb Navigation */}
        <nav aria-label={ui.breadcrumbAria} className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
          <Link href={getLocalizedHref('/', locale)} className="hover:text-slate-900 dark:hover:text-white transition-colors">
            {ui.home}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
          <span className="text-slate-900 dark:text-white font-semibold" aria-current="page">
            {ui.breadcrumbCurrent}
          </span>
        </nav>

        <div className="relative">
        <TrainScene />
        {/* Hero Section */}
        <header className="relative z-10 space-y-4 max-w-4xl pb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 dark:bg-sky-950/80 border border-sky-200/90 dark:border-sky-800 text-sky-800 dark:text-sky-300 text-xs font-bold shadow-2xs">
            <TrainFront className="w-4 h-4 text-sky-600 dark:text-sky-400" aria-hidden="true" />
            <span>{ui.heroBadge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            {ui.h1}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            <RichText text={ui.heroLead} />
          </p>

          {/* Key Stat Strips */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-3.5 shadow-2xs">
              <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400">{ui.statGornerAlt}</span>
              <p className="text-xl font-black text-slate-900 dark:text-white mt-0.5">3,089 m</p>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">{ui.statGornerDetail}</span>
            </div>
            <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-3.5 shadow-2xs">
              <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400">{ui.statGexRoute}</span>
              <p className="text-xl font-black text-slate-900 dark:text-white mt-0.5">291 km</p>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">{ui.statGexDetail}</span>
            </div>
            <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-3.5 shadow-2xs">
              <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400">{ui.statSwissGorner}</span>
              <p className="text-xl font-black text-emerald-600 dark:text-emerald-400 mt-0.5">{ui.statSwissGornerValue}</p>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">{ui.statSwissGornerDetail}</span>
            </div>
            <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-3.5 shadow-2xs">
              <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400">{ui.statSwissGex}</span>
              <p className="text-xl font-black text-emerald-600 dark:text-emerald-400 mt-0.5">{ui.statSwissGexValue}</p>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">{ui.statSwissGexDetail}</span>
            </div>
          </div>
        </header>
        </div>

        {/* Live Conditions Dashboard Bar */}
        <section
          aria-label={ui.liveAria}
          className="rounded-3xl border border-sky-200/80 dark:border-sky-900/60 bg-gradient-to-r from-sky-50/80 via-white to-sky-50/60 dark:from-slate-900 dark:via-sky-950/30 dark:to-slate-900 p-5 sm:p-6 shadow-sm space-y-4"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                {ui.liveTitle}
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              {ui.liveUpdated}
            </span>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2">
            <article className="flex flex-col gap-3 overflow-hidden rounded-2xl border border-slate-200/80 bg-white dark:border-slate-700/80 dark:bg-slate-800/90 md:row-span-5 md:grid md:grid-rows-subgrid md:gap-3">
              <div className="flex items-center justify-between gap-3 px-4 pt-4 sm:px-5 sm:pt-5">
                <div className="flex min-w-0 items-center gap-2">
                  <TrainFront className="h-4 w-4 shrink-0 text-sky-600 dark:text-sky-400" aria-hidden="true" />
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">{ui.gornerCardTitle}</h3>
                </div>
                <div className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-bold ${gBadge.pill}`}>
                  <span className={`h-2 w-2 rounded-full ${gBadge.dot}`} />
                  <span>{liveStatus.gornergrat.score}/10 {liveStatus.gornergrat.status}</span>
                </div>
              </div>
              <p className="px-4 text-sm leading-6 text-slate-700 sm:px-5 dark:text-slate-200">
                {liveStatus.gornergrat.verdictText}
              </p>
              <dl className="grid h-full grid-cols-3 grid-rows-2 gap-2 px-4 sm:px-5">
                <ConditionStat label={ui.morning} value={`${liveStatus.gornergrat.todayAmScore}/10`} />
                <ConditionStat label={ui.afternoon} value={`${liveStatus.gornergrat.todayPmScore}/10`} />
                <ConditionStat label={ui.summit} value={liveStatus.gornergrat.tempEstimated} />
                <ConditionStat label={ui.midCloud} value={`${liveStatus.gornergrat.cloudMid}%`} />
                <ConditionStat label={ui.wind} value={`${liveStatus.gornergrat.windKmh} km/h`} />
                <ConditionStat label={ui.ride} value={ui.rideGorner} />
              </dl>
              <p className="px-4 text-sm leading-6 text-slate-600 sm:px-5 dark:text-slate-300">
                {gornergrat.seasonality.schedule}. {gornergrat.swissPassCoverage.shortBadge}. {ui.sitRight}
              </p>
              <FramedPhoto
                photo={PLACE_PHOTOS.gornergratBahn}
                preload
                embedded
                stretch={false}
                sizes="(max-width: 768px) 100vw, 50vw"
                aspectClass="aspect-[3/1]"
              />
            </article>

            <article className="flex flex-col gap-3 overflow-hidden rounded-2xl border border-slate-200/80 bg-white dark:border-slate-700/80 dark:bg-slate-800/90 md:row-span-5 md:grid md:grid-rows-subgrid md:gap-3">
              <div className="flex items-center justify-between gap-3 px-4 pt-4 sm:px-5 sm:pt-5">
                <div className="flex min-w-0 items-center gap-2">
                  <Mountain className="h-4 w-4 shrink-0 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">{ui.gexCardTitle}</h3>
                </div>
                <div className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-bold ${gexBadge.pill}`}>
                  <span className={`h-2 w-2 rounded-full ${gexBadge.dot}`} />
                  <span>{liveStatus.glacierExpress.isOperating ? ui.running : ui.paused}</span>
                </div>
              </div>
              <p className="px-4 text-sm leading-6 text-slate-700 sm:px-5 dark:text-slate-200">
                {liveStatus.glacierExpress.oberalpPassStatus}. {liveStatus.glacierExpress.regionalAlternative}
              </p>
              <dl className="grid h-full grid-cols-3 grid-rows-2 gap-2 px-4 sm:px-5">
                <ConditionStat label={ui.service} value={liveStatus.glacierExpress.isOperating ? ui.inSeason : ui.maintenance} />
                <ConditionStat label={ui.peakPass} value="2,033 m" />
                <ConditionStat label={ui.rideGexShort} value={ui.rideGex} />
                <ConditionStat label={ui.swissPass} value={ui.included} />
                <ConditionStat label={ui.seat} value={ui.required} />
                <ConditionStat label={ui.booking} value={ui.days93} />
              </dl>
              <p className="px-4 text-sm leading-6 text-slate-600 sm:px-5 dark:text-slate-300">
                {liveStatus.glacierExpress.operatingStatusLabel}. {liveStatus.glacierExpress.seatAvailabilityNotice}
              </p>
              <FramedPhoto
                photo={PLACE_PHOTOS.glacierExpress}
                embedded
                stretch={false}
                sizes="(max-width: 768px) 100vw, 50vw"
                aspectClass="aspect-[3/1]"
              />
            </article>
          </div>
        </section>

        {/* Quick Navigation Jump Anchors */}
        <nav aria-label={ui.navAria} className="flex flex-wrap gap-2 pt-2">
          <a
            href="#comparison"
            className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-950 text-slate-700 dark:text-slate-300 hover:text-sky-700 dark:hover:text-sky-300 text-xs font-semibold transition-colors border border-slate-200/80 dark:border-slate-700/80"
          >
            {ui.navCompare}
          </a>
          <a
            href="#gornergrat"
            className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-950 text-slate-700 dark:text-slate-300 hover:text-sky-700 dark:hover:text-sky-300 text-xs font-semibold transition-colors border border-slate-200/80 dark:border-slate-700/80"
          >
            {ui.navGorner}
          </a>
          <a
            href="#glacier-express"
            className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-950 text-slate-700 dark:text-slate-300 hover:text-sky-700 dark:hover:text-sky-300 text-xs font-semibold transition-colors border border-slate-200/80 dark:border-slate-700/80"
          >
            {ui.navGex}
          </a>
          <a
            href="#tickets-passes"
            className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-950 text-slate-700 dark:text-slate-300 hover:text-sky-700 dark:hover:text-sky-300 text-xs font-semibold transition-colors border border-slate-200/80 dark:border-slate-700/80"
          >
            {ui.navTickets}
          </a>
          <a
            href="#faqs"
            className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-950 text-slate-700 dark:text-slate-300 hover:text-sky-700 dark:hover:text-sky-300 text-xs font-semibold transition-colors border border-slate-200/80 dark:border-slate-700/80"
          >
            {ui.navFaq}
          </a>
        </nav>

        {/* Side-by-Side Comparison Table Section */}
        <section id="comparison" className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              {ui.compareTitle}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {ui.compareIntro}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/60 text-slate-800 dark:text-slate-200">
                    <th scope="col" className="p-4 font-bold w-1/4">{ui.colFeature}</th>
                    <th scope="col" className="p-4 font-bold w-3/8 text-sky-800 dark:text-sky-300">
                      {ui.colGorner}
                    </th>
                    <th scope="col" className="p-4 font-bold w-3/8 text-indigo-800 dark:text-indigo-300">
                      {ui.colGex}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80 text-slate-600 dark:text-slate-300">
                  <tr>
                    <td className="p-4 font-bold text-slate-900 dark:text-white">{ui.rowPurpose}</td>
                    <td className="p-4">{ui.purposeGorner}</td>
                    <td className="p-4">{ui.purposeGex}</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900 dark:text-white">{ui.rowRoute}</td>
                    <td className="p-4">{gornergrat.route}</td>
                    <td className="p-4">{glacier.route}</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900 dark:text-white">{ui.rowTime}</td>
                    <td className="p-4 font-semibold text-slate-900 dark:text-white">{gornergrat.duration}</td>
                    <td className="p-4 font-semibold text-slate-900 dark:text-white">{glacier.duration}</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900 dark:text-white">{ui.rowPeak}</td>
                    <td className="p-4">
                      <span className="font-bold text-sky-700 dark:text-sky-400">3,089 m</span> {ui.peakGorner}
                    </td>
                    <td className="p-4">
                      <span className="font-bold text-indigo-700 dark:text-indigo-400">2,033 m</span> {ui.peakGex}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900 dark:text-white">{ui.rowSwiss}</td>
                    <td className="p-4">
                      <span className="inline-block px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 font-bold text-xs">
                        {ui.discount50}
                      </span>
                      <p className="text-xs text-slate-500 mt-1">{ui.swissPrices}</p>
                    </td>
                    <td className="p-4">
                      <span className="inline-block px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 font-bold text-xs">
                        {ui.freeTicket}
                      </span>
                      <p className="text-xs text-slate-500 mt-1">{ui.seatFee}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900 dark:text-white">{ui.rowEurail}</td>
                    <td className="p-4 text-rose-700 dark:text-rose-400 font-medium">{ui.eurailNone}</td>
                    <td className="p-4 text-emerald-700 dark:text-emerald-400 font-medium">{ui.eurailFull}</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900 dark:text-white">{ui.rowSeats}</td>
                    <td className="p-4">
                      <RichText text={ui.notRequired} />
                    </td>
                    <td className="p-4">
                      <RichText text={ui.mandatory} />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900 dark:text-white">{ui.rowSeason}</td>
                    <td className="p-4">{ui.seasonGorner}</td>
                    <td className="p-4">{ui.seasonGex}</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900 dark:text-white">{ui.rowSide}</td>
                    <td className="p-4">
                      <RichText text={ui.sideGorner} />
                    </td>
                    <td className="p-4">
                      <RichText text={ui.sideGex} />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900 dark:text-white">{ui.rowDogs}</td>
                    <td className="p-4 text-emerald-700 dark:text-emerald-400">
                      ✓ <RichText text={ui.dogsYes} />
                    </td>
                    <td className="p-4 text-rose-700 dark:text-rose-400">
                      ✕ <RichText text={ui.dogsNo} />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900 dark:text-white">{ui.rowDining}</td>
                    <td className="p-4">{ui.diningGorner}</td>
                    <td className="p-4">{ui.diningGex}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Deep Dive 1: Gornergrat Railway (Gornergrat Bahn) */}
        <section id="gornergrat" className="space-y-6 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 font-bold">
                {ui.gornerEyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                {ui.gornerHeading}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {ui.gornerLead}
              </p>
            </div>
            <Link
              href={getLocalizedHref('/viewpoints/gornergrat', locale)}
              className="self-start md:self-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-50 hover:bg-sky-100 dark:bg-sky-950/80 dark:hover:bg-sky-900/90 text-sky-700 dark:text-sky-300 font-bold text-xs shadow-2xs transition-colors"
            >
              <span>{ui.viewCam}</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* 2-column description */}
            <div className="lg:col-span-2 space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                <RichText text={ui.gornerP1} />
              </p>
              <p>
                <RichText text={ui.gornerP2} />
              </p>

              {/* Station Stops Timeline */}
              <div className="pt-2">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3">
                  {ui.stationStops}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {gornergrat.topStations.map((station, i) => (
                    <div
                      key={station.name}
                      className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-3 text-xs"
                    >
                      <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white">
                        <span>{i + 1}. {station.name}</span>
                        <span className="font-mono text-sky-600 dark:text-sky-400">{station.elevation}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                        {station.highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pro Tip Callout */}
              <div className="rounded-2xl border border-amber-200/90 dark:border-amber-900/60 bg-amber-50/70 dark:bg-amber-950/30 p-4 text-xs text-amber-900 dark:text-amber-200 space-y-1.5">
                <div className="flex items-center gap-2 font-bold">
                  <Camera className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" aria-hidden="true" />
                  <span>{ui.riffelTitle}</span>
                </div>
                <p className="leading-relaxed">
                  <RichText text={ui.riffelBody} />
                </p>
              </div>
            </div>

            {/* Quick Facts Sidebar */}
            <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-5 space-y-4 text-xs">
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">
                {ui.telemetryTitle}
              </h3>

              <div className="space-y-3 divide-y divide-slate-200/70 dark:divide-slate-800">
                <div className="pt-2">
                  <span className="text-slate-500 dark:text-slate-400 block font-mono text-[11px]">{ui.returnPrice}</span>
                  <span className="font-bold text-slate-900 dark:text-white text-sm">
                    {gornergrat.ticketPricing2026.standardAdultReturn}
                  </span>
                </div>
                <div className="pt-2">
                  <span className="text-slate-500 dark:text-slate-400 block font-mono text-[11px]">{ui.withPass}</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">
                    {gornergrat.ticketPricing2026.swissPassPrice}
                  </span>
                </div>
                <div className="pt-2">
                  <span className="text-slate-500 dark:text-slate-400 block font-mono text-[11px]">{ui.frequency}</span>
                  <span className="font-bold text-slate-900 dark:text-white">{ui.frequencyValue}</span>
                </div>
                <div className="pt-2">
                  <span className="text-slate-500 dark:text-slate-400 block font-mono text-[11px]">{ui.seating}</span>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {gornergrat.bestSideToSit.side}
                  </span>
                  <p className="text-[11px] text-slate-500 mt-0.5">{gornergrat.bestSideToSit.reason}</p>
                </div>
                <div className="pt-2">
                  <span className="text-slate-500 dark:text-slate-400 block font-mono text-[11px]">{ui.pets}</span>
                  <span className="font-bold text-slate-900 dark:text-white">{ui.petsWelcome}</span>
                </div>
                <div className="pt-3">
                  <a
                    href="https://www.gornergrat.ch/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-xs transition-colors"
                  >
                    <span>{ui.officialTickets}</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 text-center mt-1.5">
                    {ui.halfFareHint}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Dive 2: Glacier Express */}
        <section id="glacier-express" className="space-y-6 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold">
                {ui.gexEyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                {ui.gexHeading}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {ui.gexLead}
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200/90 dark:border-indigo-800 text-indigo-800 dark:text-indigo-300 text-xs font-bold shadow-2xs">
              <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
              <span>{ui.roofWindows}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* 2-column description */}
            <div className="lg:col-span-2 space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                <RichText text={ui.gexP1} />
              </p>
              <p>
                <RichText text={ui.gexP2} />
              </p>

              {/* Class Comparison Grid */}
              <div className="pt-2 space-y-3">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {ui.classTitle}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-3.5 text-xs space-y-1.5">
                    <span className="font-bold text-slate-900 dark:text-white block">{ui.class2}</span>
                    <span className="text-[11px] text-slate-500 block">{ui.class2Seats}</span>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                      {ui.class2Body}
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-3.5 text-xs space-y-1.5">
                    <span className="font-bold text-slate-900 dark:text-white block">{ui.class1}</span>
                    <span className="text-[11px] text-slate-500 block">{ui.class1Seats}</span>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                      {ui.class1Body}
                    </p>
                  </div>
                  <div className="rounded-xl border border-amber-300 dark:border-amber-700/80 bg-amber-50/60 dark:bg-amber-950/40 p-3.5 text-xs space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-amber-900 dark:text-amber-200">{ui.classEx}</span>
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" aria-hidden="true" />
                    </div>
                    <span className="text-[11px] text-amber-700 dark:text-amber-300 block">{ui.classExSeats}</span>
                    <p className="text-[11px] text-amber-800 dark:text-amber-300 leading-relaxed">
                      {ui.classExBody}
                    </p>
                  </div>
                </div>
              </div>

              {/* Critical Booking Alert */}
              <div className="rounded-2xl border border-rose-200/90 dark:border-rose-900/60 bg-rose-50/70 dark:bg-rose-950/30 p-4 text-xs text-rose-900 dark:text-rose-200 space-y-1.5">
                <div className="flex items-center gap-2 font-bold">
                  <AlertCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" aria-hidden="true" />
                  <span>{ui.alertTitle}</span>
                </div>
                <p className="leading-relaxed">
                  <RichText text={ui.alertBody} />
                </p>
              </div>
            </div>

            {/* Quick Facts Sidebar */}
            <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-5 space-y-4 text-xs">
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">
                {ui.gexTelemetry}
              </h3>

              <div className="space-y-3 divide-y divide-slate-200/70 dark:divide-slate-800">
                <div className="pt-2">
                  <span className="text-slate-500 dark:text-slate-400 block font-mono text-[11px]">{ui.journeyDuration}</span>
                  <span className="font-bold text-slate-900 dark:text-white text-sm">{ui.durationValue}</span>
                </div>
                <div className="pt-2">
                  <span className="text-slate-500 dark:text-slate-400 block font-mono text-[11px]">{ui.swissTicket}</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">
                    {ui.swissTicketValue}
                  </span>
                  <p className="text-[11px] text-slate-500 mt-0.5">{ui.swissTicketNote}</p>
                </div>
                <div className="pt-2">
                  <span className="text-slate-500 dark:text-slate-400 block font-mono text-[11px]">{ui.peakElevation}</span>
                  <span className="font-bold text-slate-900 dark:text-white">{ui.peakElevationValue}</span>
                </div>
                <div className="pt-2">
                  <span className="text-slate-500 dark:text-slate-400 block font-mono text-[11px]">{ui.bestSideLabel}</span>
                  <span className="font-bold text-slate-900 dark:text-white">{ui.bestSideValue}</span>
                </div>
                <div className="pt-2">
                  <span className="text-slate-500 dark:text-slate-400 block font-mono text-[11px]">{ui.dogsLabel}</span>
                  <span className="font-bold text-rose-600 dark:text-rose-400">{ui.dogsStrict}</span>
                </div>
                <div className="pt-2">
                  <span className="text-slate-500 dark:text-slate-400 block font-mono text-[11px]">{ui.pauseLabel}</span>
                  <span className="font-bold text-amber-600 dark:text-amber-400">{ui.pauseValue}</span>
                </div>
                <div className="pt-3">
                  <a
                    href="https://www.glacierexpress.ch/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs transition-colors"
                  >
                    <span>{ui.gexReserve}</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 text-center mt-1.5">
                    {ui.gexReserveHint}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tickets & Swiss Travel Pass Strategy Section */}
        <section id="tickets-passes" className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              {ui.ticketsTitle}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {ui.ticketsIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-5 space-y-3">
              <div className="flex items-center gap-2 text-sky-700 dark:text-sky-400 font-extrabold text-sm">
                <Ticket className="w-4 h-4" aria-hidden="true" />
                <span>{ui.strategyGorner}</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                {ui.gornerTips.map((tip) => (
                  <li key={tip.title} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span><strong>{tip.title}</strong> {tip.body}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-5 space-y-3">
              <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-extrabold text-sm">
                <Ticket className="w-4 h-4" aria-hidden="true" />
                <span>{ui.strategyGex}</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                {ui.gexTips.map((tip) => (
                  <li key={tip.title} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span><strong>{tip.title}</strong> {tip.body}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQs Accordion Section */}
        <section id="faqs" className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 font-bold">
              {ui.faqEyebrow}
            </span>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              {ui.faqTitle}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {ui.faqIntro}
            </p>
          </div>

          <div className="space-y-2.5">
            {trainFaqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 transition-colors overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-3 text-left font-bold text-slate-900 dark:text-white text-sm hover:text-sky-700 dark:hover:text-sky-400 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`text-[11px] font-mono uppercase px-2 py-0.5 rounded font-bold ${
                        faq.train === 'gornergrat'
                          ? 'bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300'
                          : faq.train === 'glacier-express'
                          ? 'bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300'
                          : 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                      }`}>
                        {faq.train === 'gornergrat' ? ui.badgeGorner : faq.train === 'glacier-express' ? ui.badgeGex : ui.badgeBoth}
                      </span>
                      <span>{faq.question}</span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-sky-600 dark:text-sky-400' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Related Guides & Viewpoints Strip */}
        <section aria-label={ui.relatedAria} className="pt-6 border-t border-slate-200 dark:border-slate-800">
          <h2 className="text-base font-extrabold text-slate-900 dark:text-white mb-4">
            {ui.relatedTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href={getLocalizedHref('/viewpoints/gornergrat', locale)}
              className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-4 hover:border-sky-300 dark:hover:border-sky-700 transition-colors group"
            >
              <span className="text-[11px] font-mono uppercase text-sky-600 dark:text-sky-400 font-bold block mb-1">
                {ui.cardLive}
              </span>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-sky-600 transition-colors">
                {ui.cardGornerTitle}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {ui.cardGornerBody}
              </p>
            </Link>

            <Link
              href={getLocalizedHref('/guides/gornergrat-vs-glacier-paradise', locale)}
              className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-4 hover:border-sky-300 dark:hover:border-sky-700 transition-colors group"
            >
              <span className="text-[11px] font-mono uppercase text-sky-600 dark:text-sky-400 font-bold block mb-1">
                {ui.cardCompare}
              </span>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-sky-600 transition-colors">
                {ui.cardCompareTitle}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {ui.cardCompareBody}
              </p>
            </Link>

            <Link
              href={getLocalizedHref('/guides/best-time-to-see-matterhorn', locale)}
              className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-4 hover:border-sky-300 dark:hover:border-sky-700 transition-colors group"
            >
              <span className="text-[11px] font-mono uppercase text-sky-600 dark:text-sky-400 font-bold block mb-1">
                {ui.cardClimate}
              </span>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-sky-600 transition-colors">
                {ui.cardClimateTitle}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {ui.cardClimateBody}
              </p>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer locale={locale} />
    </>
  );
}
