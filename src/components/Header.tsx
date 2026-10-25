'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Clock, MapPin, Compass, BookOpen } from 'lucide-react';
import { BadgeColor, Viewpoint } from '@/lib/types';
import VisibilityIcon from './VisibilityIcon';

interface HeaderProps {
  initialSwissTime: string;
  activeViewpoint: Viewpoint;
  activeBadgeColor: BadgeColor;
}

export default function Header({
  initialSwissTime,
  activeViewpoint,
  activeBadgeColor,
}: HeaderProps) {
  const [swissTime, setSwissTime] = useState<string>(initialSwissTime);

  useEffect(() => {
    const updateClock = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Europe/Zurich',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        });
        const tzFormatter = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Europe/Zurich',
          timeZoneName: 'short',
        });
        const tzParts = tzFormatter.formatToParts(now);
        const tzRaw =
          tzParts.find((p) => p.type === 'timeZoneName')?.value || 'CET';
        const tzLabel =
          tzRaw === 'GMT+1' ? 'CET' : tzRaw === 'GMT+2' ? 'CEST' : tzRaw;
        setSwissTime(`${formatter.format(now)} ${tzLabel}`);
      } catch {
        // Keep initial time on error
      }
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full border-b border-slate-200/90 bg-white/85 backdrop-blur-xl sticky top-0 z-40 shadow-[0_1px_3px_rgba(15,23,42,0.04)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        {/* Brand Identity */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative shrink-0">
            <VisibilityIcon
              badgeColor={activeBadgeColor}
              size="md"
              className="shadow-sm"
            />
            <span
              className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white"
              title="Live Atmospheric Telemetry"
            />
          </div>
          <div className="min-w-0">
            <h1 className="text-sm sm:text-base font-extrabold tracking-tight text-slate-900 uppercase truncate">
              IS THE MATTERHORN VISIBLE?
            </h1>
            <p className="text-[11px] sm:text-xs text-slate-600 flex flex-wrap items-center gap-x-1.5 gap-y-0.5 font-mono">
              <span className="inline-flex items-center gap-1">
                <Compass
                  className="w-3 h-3 text-sky-600 shrink-0"
                  aria-hidden="true"
                />
                <span>
                  {activeViewpoint.latitude.toFixed(4)}° N,{' '}
                  {activeViewpoint.longitude.toFixed(4)}° E
                </span>
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-sky-700 font-semibold">
                {activeViewpoint.aspect}
              </span>
            </p>
          </div>
        </div>

        {/* Badges: Summit Elevation & Live Swiss CET Clock */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-100/90 border border-slate-200 text-[11px] sm:text-xs font-medium text-slate-700">
            <MapPin
              className="w-3.5 h-3.5 text-sky-600 shrink-0"
              aria-hidden="true"
            />
            <span>
              Vantage: {activeViewpoint.elevation.toLocaleString()} m • Summit: 4,478 m
            </span>
          </div>

          <div
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-sky-50 border border-sky-200 text-[11px] sm:text-xs font-mono font-bold text-sky-900 shadow-xs"
            aria-label="Current time in Zermatt, Switzerland"
          >
            <Clock
              className="w-3.5 h-3.5 text-sky-600 shrink-0"
              aria-hidden="true"
            />
            <span>{swissTime}</span>
          </div>

          <Link
            href="/guides"
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-sky-700 text-white text-[11px] sm:text-xs font-bold shadow-xs transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5 text-sky-300 shrink-0" aria-hidden="true" />
            <span>Field Guides</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
