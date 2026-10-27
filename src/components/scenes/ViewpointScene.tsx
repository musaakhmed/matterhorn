import Matterhorn from '@/components/scenes/Matterhorn';
import SceneBackdrop from '@/components/scenes/SceneBackdrop';

function Cloud({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 52" className={className} fill="none">
      <path
        d="M28 42 C12 42 6 32 14 24 C10 12 26 6 38 14 C46 4 68 4 76 16 C90 8 114 14 116 28 C130 30 128 44 110 44 Z"
        className="fill-sky-100/95 dark:fill-slate-700/90"
      />
    </svg>
  );
}

export default function ViewpointScene() {
  return (
    <SceneBackdrop>
      <span className="absolute right-[12%] top-5 hidden size-0.5 rounded-full bg-white dark:block" />
      <span className="absolute right-[22%] top-9 hidden size-px rounded-full bg-white dark:block" />
      <span className="absolute right-[8%] top-12 hidden size-0.5 rounded-full bg-white/70 dark:block" />

      <div className="animate-cloud absolute right-[6%] top-3 opacity-80">
        <Cloud className="h-10 w-28 sm:h-12 sm:w-36" />
      </div>
      <div className="animate-cloud-slow absolute right-[30%] top-6 hidden opacity-70 sm:block">
        <Cloud className="h-8 w-24" />
      </div>

      <div className="absolute right-0 bottom-0 hidden h-full max-h-72 w-[min(22rem,max(0px,calc(100%-44rem)))] lg:block">
        <Matterhorn className="h-full w-full" />
      </div>
    </SceneBackdrop>
  );
}
