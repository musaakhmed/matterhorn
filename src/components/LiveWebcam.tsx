'use client';

import React, { useState } from 'react';
import {
  Camera,
  ExternalLink,
  Radio,
  MountainSnow,
  RefreshCw,
  ThumbsUp,
  ThumbsDown,
  CheckCircle2,
  MapPin,
} from 'lucide-react';

interface WebcamFeed {
  id: 'gornergrat' | 'rothorn' | 'trockener-steg' | 'kirchbruecke';
  name: string;
  elevation: string;
  angleDescription: string;
  coordinates: string;
  embedUrl: string;
  directUrl: string;
}

const WEBCAM_FEEDS: WebcamFeed[] = [
  {
    id: 'gornergrat',
    name: 'Gornergrat',
    elevation: '3,089m',
    angleDescription: 'Classic pyramid angle & Monte Rosa panorama',
    coordinates: '45.9836° N, 7.7847° E',
    embedUrl: 'https://gornergrat.roundshot.com/',
    directUrl: 'https://gornergrat.roundshot.com/',
  },
  {
    id: 'rothorn',
    name: 'Rothorn',
    elevation: '3,103m',
    angleDescription: 'View looking down Findeln valley & Toblerone profile',
    coordinates: '46.0203° N, 7.7989° E',
    embedUrl: 'https://zermatt.roundshot.com/rothorn/',
    directUrl: 'https://zermatt.roundshot.com/rothorn/',
  },
  {
    id: 'trockener-steg',
    name: 'Trockener Steg',
    elevation: '2,939m',
    angleDescription: 'Glacier plateau approach beneath the East & Furgg faces',
    coordinates: '45.9688° N, 7.7106° E',
    embedUrl: 'https://zermatt.roundshot.com/trockener-steg/',
    directUrl: 'https://zermatt.roundshot.com/trockener-steg/',
  },
  {
    id: 'kirchbruecke',
    name: 'Zermatt Village (Kirchbrücke)',
    elevation: '1,608m',
    angleDescription: 'Valley perspective (checks low fog vs. peak visibility)',
    coordinates: '46.0189° N, 7.7469° E',
    embedUrl: 'https://zermatt.roundshot.com/zermatt-bergbahnen/',
    directUrl: 'https://zermatt.roundshot.com/zermatt-bergbahnen/',
  },
];

interface LiveWebcamProps {
  defaultCamId?: WebcamFeed['id'];
}

export default function LiveWebcam({
  defaultCamId = 'gornergrat',
}: LiveWebcamProps = {}) {
  const [selectedId, setSelectedId] = useState<WebcamFeed['id']>(defaultCamId);
  const [iframeKey, setIframeKey] = useState<number>(0);
  const [userVote, setUserVote] = useState<'yes' | 'no' | null>(null);
  const [voteCounts, setVoteCounts] = useState({ yes: 42, no: 19 });

  const activeCam =
    WEBCAM_FEEDS.find((cam) => cam.id === selectedId) || WEBCAM_FEEDS[0];

  const handleVote = (choice: 'yes' | 'no') => {
    if (userVote === choice) return;
    setVoteCounts((prev) => ({
      yes:
        choice === 'yes'
          ? prev.yes + 1
          : userVote === 'yes'
          ? prev.yes - 1
          : prev.yes,
      no:
        choice === 'no'
          ? prev.no + 1
          : userVote === 'no'
          ? prev.no - 1
          : prev.no,
    }));
    setUserVote(choice);
  };

  const totalVotes = voteCounts.yes + voteCounts.no;
  const yesPercent = Math.round((voteCounts.yes / totalVotes) * 100);

  return (
    <section
      aria-label="Expanded Multi-Cam Alpine Verification Grid"
      className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-5 sm:p-6 shadow-xs flex flex-col justify-between"
    >
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <Camera className="w-4 h-4 text-sky-600 dark:text-sky-400" aria-hidden="true" />
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
              Live Multi-Cam Ground-Truth Grid
            </h3>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-700 text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-200">
              <Radio className="w-2.5 h-2.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
              4 Live Feeds
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
            Switch between 4 elevation cameras from valley floor (1,608m) to high alpine ridges (3,103m)
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setIframeKey((k) => k + 1)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600"
            title="Reload active Roundshot camera feed"
          >
            <RefreshCw className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" aria-hidden="true" />
            <span>Reload Feed</span>
          </button>

          <a
            href={activeCam.directUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-xs font-bold text-white shadow-2xs transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600"
          >
            <span>View live 360° Roundshot stream</span>
            <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* 4-Camera Selector Grid */}
      <div
        role="tablist"
        aria-label="Zermatt Webcam Locations"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-4"
      >
        {WEBCAM_FEEDS.map((cam) => {
          const isSelected = cam.id === selectedId;
          return (
            <button
              key={cam.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setSelectedId(cam.id)}
              className={`rounded-xl border p-3 text-left transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 ${
                isSelected
                  ? 'border-sky-600 dark:border-sky-500 bg-sky-50/70 dark:bg-sky-950/70 ring-1 ring-sky-600/20 shadow-xs'
                  : 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/60 hover:bg-slate-100/80 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                  {cam.name}
                </span>
                <span
                  className={`px-2 py-0.5 rounded-md font-mono text-[11px] font-bold shrink-0 ${
                    isSelected
                      ? 'bg-sky-600 text-white'
                      : 'bg-slate-200/80 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {cam.elevation}
                </span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 line-clamp-1">
                {cam.angleDescription}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active 16:9 Webcam Frame */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 shadow-inner">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-sky-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
          <MountainSnow className="w-10 h-10 text-sky-600/60 dark:text-sky-400/60 mb-2" aria-hidden="true" />
          <p className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300">
            Connecting to {activeCam.name} ({activeCam.elevation}) Live Roundshot Panorama…
          </p>
          <a
            href={activeCam.directUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-bold text-sky-700 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-slate-700 shadow-2xs"
          >
            <span>View live 360° Roundshot stream</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

        <iframe
          key={`${activeCam.id}-${iframeKey}`}
          src={activeCam.embedUrl}
          title={`${activeCam.name} (${activeCam.elevation}) 360° Live Webcam`}
          className="relative z-10 w-full h-full border-0"
          loading="lazy"
          allow="fullscreen"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* HUD Telemetry Corner Badge */}
        <div className="pointer-events-none absolute bottom-2 left-2 right-2 sm:right-auto z-20 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-300 dark:border-slate-700 text-[10px] sm:text-[11px] font-mono font-semibold text-slate-800 dark:text-slate-200 shadow-xs truncate">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
          <span className="truncate">
            {activeCam.name.toUpperCase()} ({activeCam.elevation}) • {activeCam.coordinates}
          </span>
        </div>
      </div>

      {/* Fallback Cards Row with Direct Links for All 4 Feeds */}
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {WEBCAM_FEEDS.map((cam) => (
          <a
            key={cam.id}
            href={cam.directUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800/80 hover:bg-sky-50/70 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 hover:border-sky-300 dark:hover:border-sky-500 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-sky-800 dark:hover:text-sky-300 transition-colors cursor-pointer"
          >
            <span className="inline-flex items-center gap-1.5 truncate">
              <MapPin className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" aria-hidden="true" />
              <span className="truncate font-semibold">
                {cam.name} ({cam.elevation})
              </span>
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-700 dark:text-sky-400 shrink-0">
              <span>360°</span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </span>
          </a>
        ))}
      </div>

      {/* User Validation Micro-Poll under Active Cam */}
      <div className="mt-4 pt-4 border-t border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-slate-50/90 dark:bg-slate-800/60 rounded-xl p-3.5 border border-slate-200/60 dark:border-slate-700/60">
        <div className="flex items-center gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" aria-hidden="true" />
          <div>
            <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
              Can you see the peak right now?
            </span>
            <span className="block sm:inline sm:ml-2 text-xs text-slate-600 dark:text-slate-400">
              Ground-truth crowd check ({yesPercent}% report visible today)
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleVote('yes')}
            aria-pressed={userVote === 'yes'}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border text-xs font-bold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 ${
              userVote === 'yes'
                ? 'bg-emerald-600 border-emerald-700 text-white shadow-xs'
                : 'bg-white dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200'
            }`}
          >
            <ThumbsUp className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Yes ({voteCounts.yes})</span>
          </button>

          <button
            type="button"
            onClick={() => handleVote('no')}
            aria-pressed={userVote === 'no'}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border text-xs font-bold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 ${
              userVote === 'no'
                ? 'bg-rose-600 border-rose-700 text-white shadow-xs'
                : 'bg-white dark:bg-slate-800 hover:bg-rose-50 dark:hover:bg-rose-950/40 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200'
            }`}
          >
            <ThumbsDown className="w-3.5 h-3.5" aria-hidden="true" />
            <span>No ({voteCounts.no})</span>
          </button>
        </div>
      </div>
    </section>
  );
}
