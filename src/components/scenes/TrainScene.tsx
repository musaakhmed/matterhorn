import Matterhorn from '@/components/scenes/Matterhorn';
import SceneBackdrop from '@/components/scenes/SceneBackdrop';

function Wheel({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g className="animate-wheel" style={{ transformOrigin: `${cx}px ${cy}px` }}>
      <circle cx={cx} cy={cy} r="6" fill="#0f172a" />
      <circle cx={cx} cy={cy} r="5" fill="#1e293b" />
      <circle cx={cx} cy={cy} r="5.5" fill="none" stroke="#64748b" strokeWidth="0.6" />
      <path d={`M${cx} ${cy + 3.6} v1.6`} stroke="#cbd5e1" strokeWidth="0.8" strokeLinecap="round" />
    </g>
  );
}

function CogTrain() {
  return (
    <svg width="228" height="64" viewBox="0 0 228 64" fill="none">
      <ellipse cx="114" cy="58" rx="92" ry="2" fill="#0f172a" opacity="0.16" />
      <Wheel cx={40} cy={56} />
      <Wheel cx={64} cy={56} />
      <Wheel cx={150} cy={56} />
      <Wheel cx={174} cy={56} />
      <path d="M86 18 L100 5 H132 L146 18" stroke="#64748b" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M82 5 H150" stroke="#94a3b8" strokeWidth="1.4" strokeLinecap="round" />
      <path
        d="M18 18 H176 C196 18 208 28 214 38 V46 H18 C12 46 8 42 8 36 V26 C8 21 12 18 18 18 Z"
        fill="#e11d48"
      />
      <path
        d="M18 18 H176 C188 18 198 22 204 28 H14 C15 22 16 18 18 18 Z"
        fill="#be123c"
      />
      <rect x="24" y="27" width="140" height="12" rx="2" fill="#e0f2fe" />
      <path d="M42 27 V39 M60 27 V39 M78 27 V39 M96 27 V39 M114 27 V39 M132 27 V39 M148 27 V39" stroke="#7dd3fc" strokeWidth="1.25" />
      <path d="M166 26 H198 C204 26 208 30 210 35 V40 H166 Z" fill="#f0f9ff" />
      <path d="M188 26 H198 C204 26 208 30 210 35 V40 H188 Z" fill="#7dd3fc" />
      <circle cx="212" cy="36" r="2" fill="#fef3c7" />
      <path d="M22 46 H200 C204 46 206 48 204 51 H24 C22 48 22 46 22 46 Z" fill="#881337" />
    </svg>
  );
}

export default function TrainScene() {
  return (
    <SceneBackdrop>
      <span className="absolute right-[18%] top-5 hidden size-0.5 rounded-full bg-white dark:block" />
      <span className="absolute right-[28%] top-10 hidden size-px rounded-full bg-white dark:block" />
      <span className="absolute right-[10%] top-12 hidden size-0.5 rounded-full bg-white/80 dark:block" />

      <div className="absolute right-0 bottom-0 hidden h-80 w-[min(22rem,max(0px,calc(100%-56rem)))] xl:block">
        <Matterhorn className="h-full w-full" />
      </div>

      <div
        className="absolute inset-x-0 bottom-[22px] h-2 text-slate-400/80 dark:text-slate-500/70"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent 0 16px, currentColor 16px 18px)',
        }}
      />
      <div className="absolute inset-x-0 bottom-[26px] h-px bg-slate-400/90 dark:bg-slate-500/80" />
      <div className="absolute inset-x-0 bottom-[23px] border-t border-dashed border-slate-400/70 dark:border-slate-500/60" />
      <div className="absolute inset-x-0 bottom-[18px] h-px bg-slate-500/80 dark:bg-slate-400/70" />

      <div className="animate-train absolute bottom-3 left-6">
        <CogTrain />
      </div>

      <svg
        viewBox="0 0 1200 36"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-8 w-full"
      >
        <path
          d="M0 6 C200 1 420 10 700 4 C960 0 1100 8 1200 3 L1200 36 L0 36 Z"
          className="fill-white dark:fill-slate-100"
        />
      </svg>
    </SceneBackdrop>
  );
}
