import React from 'react';
import Image, { StaticImageData } from 'next/image';
import {
  BadgeColor,
  VisibilityIconPath,
  VisibilityStatus,
} from '@/lib/types';

import crystalClearImg from '../../public/icons/crystal-clear.jpeg';
import partiallyVisibleImg from '../../public/icons/partially-visible.jpeg';
import barelyVisibleImg from '../../public/icons/barely-visible.jpeg';
import notVisibleImg from '../../public/icons/not-visible.jpeg';

export interface VisibilityIconMeta {
  status: VisibilityStatus;
  badgeColor: BadgeColor;
  scoreRange: string;
  iconPath: VisibilityIconPath;
  staticImage: StaticImageData;
  alt: string;
  shortCaption: string;
  ringClass: string;
}

export const VISIBILITY_ICON_BY_COLOR: Record<BadgeColor, VisibilityIconMeta> = {
  emerald: {
    status: 'Visible',
    badgeColor: 'emerald',
    scoreRange: '8–10',
    iconPath: '/icons/crystal-clear.jpeg',
    staticImage: crystalClearImg,
    alt: 'Crystal clear unobstructed Matterhorn summit under sunny skies',
    shortCaption: 'Crystal clear pyramid & valley',
    ringClass: 'ring-emerald-500/35',
  },
  amber: {
    status: 'Partially Visible',
    badgeColor: 'amber',
    scoreRange: '6–7',
    iconPath: '/icons/partially-visible.jpeg',
    staticImage: partiallyVisibleImg,
    alt: 'Partially visible Matterhorn with a light mid-mountain cloud band',
    shortCaption: 'Passing mid-ridge cloud band',
    ringClass: 'ring-amber-500/35',
  },
  orange: {
    status: 'Barely Visible',
    badgeColor: 'orange',
    scoreRange: '3–5',
    iconPath: '/icons/barely-visible.jpeg',
    staticImage: barelyVisibleImg,
    alt: 'Barely visible Matterhorn with only the summit tip above thick clouds',
    shortCaption: 'Summit tip above cloud deck',
    ringClass: 'ring-orange-500/35',
  },
  rose: {
    status: 'Not Visible',
    badgeColor: 'rose',
    scoreRange: '1–2',
    iconPath: '/icons/not-visible.jpeg',
    staticImage: notVisibleImg,
    alt: 'Matterhorn not visible and completely socked in by storm clouds',
    shortCaption: 'Socked in by storm clouds',
    ringClass: 'ring-rose-500/35',
  },
};

export const VISIBILITY_SCALE_TIERS: VisibilityIconMeta[] = [
  VISIBILITY_ICON_BY_COLOR.emerald,
  VISIBILITY_ICON_BY_COLOR.amber,
  VISIBILITY_ICON_BY_COLOR.orange,
  VISIBILITY_ICON_BY_COLOR.rose,
];

export function resolveVisibilityIconMeta(options: {
  badgeColor?: BadgeColor;
  status?: VisibilityStatus;
  score?: number;
}): VisibilityIconMeta {
  if (options.badgeColor) {
    return VISIBILITY_ICON_BY_COLOR[options.badgeColor];
  }
  if (options.status) {
    switch (options.status) {
      case 'Visible':
        return VISIBILITY_ICON_BY_COLOR.emerald;
      case 'Partially Visible':
        return VISIBILITY_ICON_BY_COLOR.amber;
      case 'Barely Visible':
        return VISIBILITY_ICON_BY_COLOR.orange;
      case 'Not Visible':
        return VISIBILITY_ICON_BY_COLOR.rose;
    }
  }
  const s = options.score ?? 8;
  if (s >= 8) return VISIBILITY_ICON_BY_COLOR.emerald;
  if (s >= 6) return VISIBILITY_ICON_BY_COLOR.amber;
  if (s >= 3) return VISIBILITY_ICON_BY_COLOR.orange;
  return VISIBILITY_ICON_BY_COLOR.rose;
}

export type VisibilityIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const SIZE_CONFIG: Record<
  VisibilityIconSize,
  {
    containerClass: string;
    pixelSize: number;
  }
> = {
  xs: {
    containerClass: 'w-7 h-7 rounded-[20%]',
    pixelSize: 112,
  },
  sm: {
    containerClass: 'w-9 h-9 rounded-[20%]',
    pixelSize: 144,
  },
  md: {
    containerClass: 'w-11 h-11 rounded-[20%]',
    pixelSize: 176,
  },
  lg: {
    containerClass: 'w-14 h-14 rounded-[20%]',
    pixelSize: 224,
  },
  xl: {
    containerClass: 'w-20 h-20 sm:w-24 sm:h-24 rounded-[20%]',
    pixelSize: 384,
  },
  '2xl': {
    containerClass: 'w-24 h-24 sm:w-28 sm:h-28 rounded-[20%]',
    pixelSize: 448,
  },
};

interface VisibilityIconProps {
  badgeColor?: BadgeColor;
  status?: VisibilityStatus;
  score?: number;
  size?: VisibilityIconSize;
  /**
   * When true (default), renders with alt="" and aria-hidden="true" because
   * adjacent visible text already conveys the visibility status.
   * Set to false when the icon stands alone without equivalent text.
   */
  decorative?: boolean;
  /**
   * Set to true only for the primary above-the-fold Hero icon (Next.js 16 preload).
   */
  preload?: boolean;
  className?: string;
}

export default function VisibilityIcon({
  badgeColor,
  status,
  score,
  size = 'md',
  decorative = true,
  preload = false,
  className = '',
}: VisibilityIconProps) {
  const meta = resolveVisibilityIconMeta({ badgeColor, status, score });
  const sizeSpec = SIZE_CONFIG[size];

  return (
    <span
      aria-hidden={decorative ? 'true' : undefined}
      className={`relative inline-flex items-center justify-center overflow-hidden shrink-0 bg-slate-800 ring-1 ${meta.ringClass} shadow-xs select-none ${sizeSpec.containerClass} ${className}`}
    >
      <Image
        src={meta.staticImage}
        alt={decorative ? '' : meta.alt}
        width={sizeSpec.pixelSize}
        height={sizeSpec.pixelSize}
        unoptimized
        preload={preload}
        className="w-full h-full object-cover pointer-events-none"
      />
    </span>
  );
}
