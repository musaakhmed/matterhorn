'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ExternalLink, Snowflake } from 'lucide-react';
import { getLocalizedHref, LOCALE_METAS, type Locale } from '@/lib/i18n/config';
import { getSnowCopy } from '@/lib/i18n/snow-copy';
import {
  RESORT_STATION_ORDER,
  SNOW_BANDS,
  formatCalendarDate,
  formatZurichWallTime,
  getSnowClimate,
  resortReportUrl,
  snowLineFor,
  zurichMonthIndex,
  type ResortSnowReport,
  type SnowBandId,
  type SnowForecast,
} from '@/lib/snow-data';

interface SnowConditionsProps {
  locale: Locale;
  report: ResortSnowReport | null;
  forecast: SnowForecast | null;
}

function formatMeters(value: number, htmlLang: string): string {
  return `${new Intl.NumberFormat(htmlLang).format(value)} m`;
}

function formatTemp(value: number, htmlLang: string): string {
  const formatted = new Intl.NumberFormat(htmlLang, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value);
  return `${formatted}°C`;
}

export default function SnowConditions({ locale, report, forecast }: SnowConditionsProps) {
  const copy = getSnowCopy(locale);
  const htmlLang = LOCALE_METAS[locale].htmlLang;
  const climate = getSnowClimate();
  const [selectedMonth, setSelectedMonth] = useState(() => zurichMonthIndex());

  const stationById = new Map(report?.stations.map((station) => [station.id, station]));
  const updatedLabel = report?.updatedAt ? formatZurichWallTime(report.updatedAt, htmlLang) : null;

  const firmDays = forecast?.days.filter((day) => day.confidence === 'firm') ?? [];
  const weekSum = (band: SnowBandId) => firmDays.reduce((total, day) => total + day.snowfallCm[band], 0);
  const weekVillage = weekSum('village');
  const weekMid = weekSum('mid');
  const weekGlacier = weekSum('glacier');
  const weekIsDry = weekVillage + weekMid + weekGlacier === 0;

  const month = climate.bands[0]?.months.find((item) => item.month === selectedMonth);
  const monthIndex = selectedMonth - 1;
  const bandMonth = (id: SnowBandId) =>
    climate.bands.find((band) => band.id === id)?.months.find((item) => item.month === selectedMonth);
  const maxSnow = Object.fromEntries(
    SNOW_BANDS.map((band) => {
      const values = climate.bands.find((item) => item.id === band.id)?.months.map((item) => item.meanSnowfallCm) ?? [1];
      return [band.id, Math.max(...values, 1)];
    }),
  ) as Record<SnowBandId, number>;

  return (
    <div className="space-y-8 sm:space-y-10">
      <section id="snow-report" aria-labelledby="snow-report-heading" className="scroll-mt-[var(--ski-anchor-offset,9.25rem)] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 block mb-1">
              {copy.reportEyebrow}
            </span>
            <h2 id="snow-report-heading" className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
              {copy.reportTitle}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">{copy.reportNote}</p>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-1 text-xs">
            {updatedLabel ? (
              <span className="font-mono text-slate-500 dark:text-slate-400">{copy.updated(updatedLabel)}</span>
            ) : null}
            <a
              href={resortReportUrl(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-sky-700 dark:text-sky-300 hover:text-sky-900 dark:hover:text-sky-100"
            >
              {copy.viewSource}
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {report ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {RESORT_STATION_ORDER.map((id) => {
              const station = stationById.get(id);
              const depth = station?.depthCm;
              return (
                <article
                  key={id}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-2xs"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700">
                      {copy.stationMeta[id]}
                    </span>
                    <Snowflake className="w-4 h-4 text-sky-600 dark:text-sky-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold text-slate-950 dark:text-white mt-3">{copy.stationName[id]}</h3>
                  <p className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold mt-4">
                    {copy.depth}
                  </p>
                  <p className="text-3xl font-mono font-extrabold text-slate-950 dark:text-white mt-1">
                    {depth == null ? (
                      <span className="text-lg font-sans font-semibold text-slate-500">{copy.notReported}</span>
                    ) : (
                      <>
                        {new Intl.NumberFormat(htmlLang).format(depth)}{' '}
                        <span className="text-xs font-sans font-normal text-slate-500">cm</span>
                      </>
                    )}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-3">
                    {station?.lastSnowfall
                      ? copy.lastSnowfall(
                          formatCalendarDate(station.lastSnowfall, htmlLang, {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          }),
                        )
                      : copy.lastSnowfallMissing}
                  </p>
                </article>
              );
            })}
          </div>
        ) : (
          <p className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-5 py-4 text-sm text-slate-600 dark:text-slate-300">
            {copy.reportUnavailable}
          </p>
        )}
      </section>

      <section id="snow-forecast" aria-labelledby="snow-forecast-heading" className="scroll-mt-[var(--ski-anchor-offset,9.25rem)] space-y-4">
        <div className="max-w-3xl border-b border-slate-200 dark:border-slate-800 pb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 block mb-1">
            {copy.forecastEyebrow}
          </span>
          <h2 id="snow-forecast-heading" className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
            {copy.forecastTitle}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">{copy.forecastNote}</p>
        </div>

        {forecast && forecast.days.length > 0 ? (
          <>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              {weekIsDry ? copy.weekDry : copy.weekTotal(weekVillage, weekMid, weekGlacier)}
            </p>
            <div className="overflow-x-auto rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900">
              <table className="w-full min-w-[36rem] text-left border-collapse">
                <caption className="sr-only">{copy.forecastTitle}</caption>
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 text-[11px] font-mono uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    <th scope="col" className="px-4 py-3 font-semibold">
                      {copy.firm}
                    </th>
                    {SNOW_BANDS.map((band) => (
                      <th key={band.id} scope="col" className="px-4 py-3 font-semibold">
                        {copy.band[band.id]}
                        <span className="block normal-case tracking-normal font-sans text-slate-400">
                          {copy.bandElev[band.id]}
                        </span>
                      </th>
                    ))}
                    <th scope="col" className="px-4 py-3 font-semibold">
                      {copy.freezingLevel}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {forecast.days.map((day) => {
                    const line = day.freezingLevelMinM == null ? null : snowLineFor(day.freezingLevelMinM);
                    const isTrend = day.confidence === 'trend';
                    return (
                      <tr
                        key={day.date}
                        className={`border-b border-slate-100 dark:border-slate-800 last:border-0 ${
                          isTrend ? 'bg-slate-50/80 dark:bg-slate-950/40' : ''
                        }`}
                      >
                        <th scope="row" className="px-4 py-2.5 whitespace-nowrap">
                          <span className="block text-sm font-semibold text-slate-950 dark:text-white capitalize">
                            {formatCalendarDate(day.date, htmlLang, { weekday: 'short', day: 'numeric', month: 'short' })}
                          </span>
                          {isTrend ? (
                            <span className="text-[10px] font-bold uppercase tracking-wide text-amber-700 dark:text-amber-300">
                              {copy.trend}
                            </span>
                          ) : null}
                        </th>
                        {SNOW_BANDS.map((band) => (
                          <td key={band.id} className="px-4 py-2.5 font-mono text-sm font-bold text-slate-950 dark:text-white">
                            {day.snowfallCm[band.id]}
                            <span className="font-sans font-normal text-slate-500"> cm</span>
                          </td>
                        ))}
                        <td className="px-4 py-2.5 text-sm text-slate-600 dark:text-slate-300">
                          {day.freezingLevelMinM == null ? (
                            '—'
                          ) : (
                            <>
                              <span className="font-mono font-semibold text-slate-950 dark:text-white">
                                {formatMeters(day.freezingLevelMinM, htmlLang)}
                              </span>
                              {line ? <span className="block text-xs mt-0.5">{copy.snowLine[line]}</span> : null}
                            </>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <p className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-5 py-4 text-sm text-slate-600 dark:text-slate-300">
            {copy.forecastUnavailable}
          </p>
        )}
      </section>

      <section id="snow-climate" aria-labelledby="snow-climate-heading" className="scroll-mt-[var(--ski-anchor-offset,9.25rem)] space-y-4">
        <div className="max-w-3xl border-b border-slate-200 dark:border-slate-800 pb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 block mb-1">
            {copy.climateEyebrow}
          </span>
          <h2 id="snow-climate-heading" className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
            {copy.climateTitle}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">{copy.climateNote}</p>
        </div>

        {month ? (
          <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
            {copy.monthSummary(
              copy.months[monthIndex] ?? '',
              bandMonth('village')?.meanSnowfallCm ?? 0,
              bandMonth('village')?.daysStayFrozenPct ?? 0,
              bandMonth('mid')?.meanSnowfallCm ?? 0,
              bandMonth('mid')?.daysStayFrozenPct ?? 0,
            )}
          </p>
        ) : null}

        <div className="overflow-x-auto rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900">
          <table className="w-full min-w-[40rem] text-left border-collapse">
            <caption className="sr-only">{copy.climateTitle}</caption>
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-[11px] font-mono uppercase tracking-wide text-slate-500 dark:text-slate-400">
                <th scope="col" className="px-4 py-3 font-semibold">
                  {copy.climateEyebrow}
                </th>
                {SNOW_BANDS.map((band) => (
                  <th key={band.id} scope="col" className="px-4 py-3 font-semibold">
                    {copy.band[band.id]}
                    <span className="block normal-case tracking-normal font-sans text-slate-400">
                      {copy.bandElev[band.id]}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {copy.months.map((label, index) => {
                const monthNumber = index + 1;
                const selected = monthNumber === selectedMonth;
                return (
                  <tr
                    key={label}
                    className={`border-b border-slate-100 dark:border-slate-800 last:border-0 ${
                      selected ? 'bg-sky-50 dark:bg-sky-950/40' : ''
                    }`}
                  >
                    <th scope="row" className="px-4 py-2.5 font-semibold text-sm text-slate-950 dark:text-white">
                      <button
                        type="button"
                        onClick={() => setSelectedMonth(monthNumber)}
                        aria-pressed={selected}
                        className="text-left hover:text-sky-700 dark:hover:text-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded"
                      >
                        {label}
                      </button>
                    </th>
                    {SNOW_BANDS.map((band) => {
                      const cell = climate.bands
                        .find((item) => item.id === band.id)
                        ?.months.find((item) => item.month === monthNumber);
                      const snowfall = cell?.meanSnowfallCm ?? 0;
                      const width = Math.round((snowfall / maxSnow[band.id]) * 100);
                      return (
                        <td key={band.id} className="px-4 py-2.5 align-top">
                          <div className="text-sm font-mono font-bold text-slate-950 dark:text-white">
                            {snowfall}
                            <span className="text-xs font-sans font-normal text-slate-500"> cm</span>
                          </div>
                          <div className="mt-1 h-1 w-full rounded-full bg-slate-100 dark:bg-slate-800" aria-hidden="true">
                            <div className="h-1 rounded-full bg-sky-500" style={{ width: `${width}%` }} />
                          </div>
                          <div className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                            {copy.staysFrozen} {cell?.daysStayFrozenPct ?? 0}%
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {SNOW_BANDS.map((band) => {
            const cell = bandMonth(band.id);
            return (
              <div
                key={band.id}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 px-4 py-3"
              >
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  {copy.band[band.id]} · {copy.bandElev[band.id]}
                </p>
                <p className="text-sm font-semibold text-slate-950 dark:text-white mt-1">
                  {copy.meanTemp} {cell ? formatTemp(cell.meanTempC, htmlLang) : '—'}
                </p>
              </div>
            );
          })}
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{copy.staysFrozenHelp}</p>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{copy.glacierNote}</p>
        <Link
          href={getLocalizedHref('/guides/best-time-to-see-matterhorn', locale)}
          className="inline-flex text-sm font-semibold text-sky-700 dark:text-sky-300 hover:text-sky-900 dark:hover:text-sky-100"
        >
          {copy.guideLink}
        </Link>
      </section>
    </div>
  );
}
