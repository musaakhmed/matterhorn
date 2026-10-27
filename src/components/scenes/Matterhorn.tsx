export default function Matterhorn({
  className = '',
  prominent = false,
}: {
  className?: string;
  prominent?: boolean;
}) {
  const ridge = prominent ? 'fill-slate-300 dark:fill-slate-500' : 'fill-slate-200/80 dark:fill-slate-800';
  const lit = prominent ? 'fill-slate-100 dark:fill-slate-200' : 'fill-slate-300 dark:fill-slate-500';
  const shade = prominent ? 'fill-slate-400 dark:fill-slate-400' : 'fill-slate-500 dark:fill-slate-700';

  return (
    <svg viewBox="0 0 400 360" className={className} fill="none">
      <path d="M0 360 L64 292 L118 314 L176 268 L236 300 L310 274 L400 360 Z" className={ridge} />
      <path d="M78 360 L132 248 L158 270 L192 186 L210 206 L232 118 L254 46 L278 122 L236 360 Z" className={lit} />
      <path d="M254 46 L278 122 L318 214 L356 360 L248 360 L230 210 L246 140 Z" className={shade} />
      <path d="M232 128 L254 46 L276 124 L262 108 L246 136 Z" className="fill-white" />
      <path
        d="M210 206 L192 186 L204 180 L218 202 Z"
        className={prominent ? 'fill-white' : 'fill-white/85 dark:fill-slate-200/80'}
      />
      <path
        d="M254 46 L278 122"
        className="stroke-white/80"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
