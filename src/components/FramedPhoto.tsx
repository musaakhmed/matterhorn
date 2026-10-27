import Image from 'next/image';
import type { PlacePhoto } from '@/lib/place-photos';

export default function FramedPhoto({
  photo,
  preload = false,
  sizes,
  aspectClass = 'aspect-[16/10]',
  embedded = false,
  stretch = true,
  interactive = false,
  children,
}: {
  photo: PlacePhoto;
  preload?: boolean;
  sizes: string;
  aspectClass?: string;
  embedded?: boolean;
  stretch?: boolean;
  interactive?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <figure
      className={
        embedded
          ? `${stretch ? 'h-full' : 'h-auto'} bg-slate-200 dark:bg-slate-800`
          : 'overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-200 shadow-2xs dark:border-slate-800 dark:bg-slate-800'
      }
    >
      <div className={`relative w-full overflow-hidden ${aspectClass}`}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          preload={preload}
          sizes={sizes}
          className={`object-cover ${interactive ? 'place-photo' : ''}`}
          style={{ objectPosition: photo.objectPosition }}
        />
        {children}
      </div>
      <figcaption className="relative z-10 border-t border-slate-200/80 bg-white/95 px-3 py-2 text-xs leading-relaxed text-slate-600 dark:border-slate-800 dark:bg-slate-900/95 dark:text-slate-300">
        <a
          href={photo.creditHref}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm underline decoration-slate-300 underline-offset-2 hover:text-sky-800 hover:decoration-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:decoration-slate-600 dark:hover:text-sky-200 dark:hover:decoration-sky-300"
        >
          {photo.credit}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </figcaption>
    </figure>
  );
}
