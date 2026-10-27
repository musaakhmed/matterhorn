import type { CSSProperties } from 'react';
import Matterhorn from '@/components/scenes/Matterhorn';
import SceneBackdrop from '@/components/scenes/SceneBackdrop';

const FLAKES = [
  { left: '62%', top: '8%', size: 6, duration: '11s', delay: '-2s' },
  { left: '70%', top: '22%', size: 4, duration: '13s', delay: '-6s' },
  { left: '78%', top: '6%', size: 8, duration: '10s', delay: '-4s' },
  { left: '86%', top: '18%', size: 5, duration: '12s', delay: '-8s' },
  { left: '94%', top: '10%', size: 4, duration: '9s', delay: '-1s' },
  { left: '66%', top: '36%', size: 7, duration: '14s', delay: '-9s' },
  { left: '74%', top: '48%', size: 4, duration: '11s', delay: '-3s' },
  { left: '84%', top: '42%', size: 6, duration: '15s', delay: '-7s' },
  { left: '92%', top: '32%', size: 5, duration: '10s', delay: '-5s' },
  { left: '8%', top: '72%', size: 5, duration: '12s', delay: '-4s' },
  { left: '22%', top: '78%', size: 4, duration: '9s', delay: '-6s' },
  { left: '38%', top: '70%', size: 7, duration: '13s', delay: '-2s' },
  { left: '50%', top: '80%', size: 4, duration: '11s', delay: '-8s' },
];

function Skier() {
  return (
    <svg width="168" height="96" viewBox="0 0 168 96" fill="none">
      <path d="M0 86 C28 80 62 92 104 84 C136 78 154 88 168 86 L168 96 L0 96 Z" fill="#f8fafc" />
      <path d="M18 88 C40 84 58 92 78 88" stroke="#e2e8f0" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M4 80 C36 77 96 75 142 74" stroke="#7dd3fc" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M142 74 C150 73 158 69 155 64" stroke="#7dd3fc" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M8 88 C40 85 104 83 150 82" stroke="#0284c7" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M150 82 C158 81 166 77 163 72" stroke="#0284c7" strokeWidth="2.6" strokeLinecap="round" />

      <path d="M22 76 L44 40" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="24" cy="72" r="2.3" fill="none" stroke="#64748b" strokeWidth="1.15" />
      <path d="M128 78 L104 42" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="124" cy="74" r="2.3" fill="none" stroke="#64748b" strokeWidth="1.15" />

      <path d="M62 52 C55 60 50 68 56 76" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
      <circle cx="54" cy="64" r="2.2" fill="#334155" />
      <path d="M76 54 C86 60 94 68 92 76" stroke="#0f172a" strokeWidth="4.2" strokeLinecap="round" />
      <circle cx="90" cy="66" r="2.3" fill="#1e293b" />

      <path d="M48 74 H62 C66 74 67 77 65 79.5 H50 C46 79.5 45 77 48 74 Z" fill="#0f172a" />
      <path d="M51 74.4 H59" stroke="#e11d48" strokeWidth="1" strokeLinecap="round" />
      <path d="M84 75 H100 C104 75 105 78 103 80.5 H86 C82 80.5 81 78 84 75 Z" fill="#020617" />
      <path d="M88 75.4 H97" stroke="#e11d48" strokeWidth="1" strokeLinecap="round" />

      <path
        d="M60 32 C56 40 58 48 66 52 L78 54 C86 48 88 38 82 32 C76 26 66 26 60 32 Z"
        fill="#e11d48"
      />
      <path d="M66 34 C65 42 68 48 74 52" stroke="#fb7185" strokeWidth="1" strokeLinecap="round" />

      <path d="M64 36 C52 38 44 44 38 50" stroke="#e11d48" strokeWidth="3.4" strokeLinecap="round" />
      <circle cx="36" cy="51" r="2.1" fill="#1e293b" />
      <path d="M76 34 C88 36 98 40 106 46" stroke="#be123c" strokeWidth="3.4" strokeLinecap="round" />
      <circle cx="108" cy="47" r="2.1" fill="#1e293b" />

      <path d="M64 28 H74 L72 34 H62 Z" fill="#f0c7aa" />
      <circle cx="70" cy="20" r="7.2" fill="#f0c7aa" />
      <path d="M68 24 Q70.2 26 72.6 24.2" stroke="#d4a48c" strokeWidth="0.6" fill="none" strokeLinecap="round" />
      <path
        d="M62 20 C62 13 66 9 72 9 C80 9 84 14 83 19 C79 16 74 15 69 15.6 C65 16.2 63 17.6 62 20 Z"
        fill="#be123c"
      />
      <path d="M65 13 C69 11 76 11 80 14" stroke="#fecdd3" strokeWidth="0.9" strokeLinecap="round" />
      <rect x="61" y="17.2" width="17" height="5.2" rx="2.6" fill="#0c4a6e" />
      <rect x="62.2" y="18.1" width="14.4" height="3.4" rx="1.7" fill="#38bdf8" />
      <path d="M64.5 19 H69" stroke="white" strokeWidth="0.7" strokeLinecap="round" opacity="0.85" />
    </svg>
  );
}

export default function SkiScene() {
  return (
    <SceneBackdrop>
      <div className="absolute right-0 bottom-0 h-28 w-36 sm:h-32 sm:w-40 lg:h-52 lg:w-44 xl:h-64 xl:w-72">
        <Matterhorn prominent className="h-full w-full" />
      </div>

      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-20 w-full"
      >
        <path
          d="M0 46 C160 34 340 58 560 42 C820 24 1020 52 1200 36 L1200 120 L0 120 Z"
          className="fill-white dark:fill-slate-100"
        />
        <path
          d="M0 68 C220 56 460 80 740 64 C980 50 1100 72 1200 60 L1200 120 L0 120 Z"
          className="fill-sky-50 dark:fill-white/75"
        />
        <path
          d="M0 46 C160 34 340 58 560 42 C820 24 1020 52 1200 36"
          className="stroke-sky-200 dark:stroke-white"
          strokeWidth="4"
          fill="none"
        />
      </svg>

      <div className="animate-skier absolute bottom-5 left-8">
        <Skier />
      </div>

      {FLAKES.map((flake) => (
        <span
          key={`${flake.left}-${flake.delay}`}
          className="animate-snow absolute rounded-full bg-white shadow-[0_0_0_1px_rgba(148,163,184,0.35)] dark:bg-white/90 dark:shadow-none"
          style={
            {
              left: flake.left,
              top: flake.top,
              width: flake.size,
              height: flake.size,
              '--snow-duration': flake.duration,
              '--snow-delay': flake.delay,
            } as CSSProperties
          }
        />
      ))}
    </SceneBackdrop>
  );
}
