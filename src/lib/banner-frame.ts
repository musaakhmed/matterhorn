import type { BannerCameraReading } from './types';

/**
 * Pixel classes for the fixed Hotel Schönegg view of the Matterhorn.
 * Blue sky stays "sky" even when it is bright. Snow and cloud are "bright".
 */
function pixelKind(r: number, g: number, b: number): 'sky' | 'bright' | 'dark' | 'other' {
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  const chroma = Math.max(r, g, b) - Math.min(r, g, b);
  if (b > r + 8 && b >= g - 5 && b > 90) return 'sky';
  if (luminance > 170 && chroma < 45) return 'bright';
  if (luminance < 115) return 'dark';
  return 'other';
}

interface RegionStats {
  sky: number;
  bright: number;
  dark: number;
}

function regionStats(
  data: Uint8Array,
  width: number,
  height: number,
  x0: number,
  x1: number,
  y0: number,
  y1: number
): RegionStats {
  let n = 0;
  let sky = 0;
  let bright = 0;
  let dark = 0;
  const xa = Math.max(0, Math.floor(x0));
  const xb = Math.min(width, Math.ceil(x1));
  const ya = Math.max(0, Math.floor(y0));
  const yb = Math.min(height, Math.ceil(y1));

  for (let y = ya; y < yb; y++) {
    for (let x = xa; x < xb; x++) {
      const i = (y * width + x) * 4;
      const kind = pixelKind(data[i], data[i + 1], data[i + 2]);
      n++;
      if (kind === 'sky') sky++;
      else if (kind === 'bright') bright++;
      else if (kind === 'dark') dark++;
    }
  }

  if (n === 0) return { sky: 0, bright: 0, dark: 0 };
  return { sky: sky / n, bright: bright / n, dark: dark / n };
}

function meanLuminance(
  data: Uint8Array,
  width: number,
  height: number,
  y1: number
): number {
  let sum = 0;
  let n = 0;
  const limit = Math.min(height, y1);
  for (let y = 0; y < limit; y += 2) {
    for (let x = 0; x < width; x += 2) {
      const i = (y * width + x) * 4;
      sum += 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
      n++;
    }
  }
  return n === 0 ? 0 : sum / n;
}

/**
 * Fixed windows on the Hotel Schönegg frame, which looks south at the pyramid.
 * Fractions stay put when a plume appears, so the cloud does not move the sample.
 * Left of the tip is open sky. Right of the tip meets the near ridge, so that window is narrower.
 */
const LEFT_FLANK = { x0: 0.34, x1: 0.52, y0: 0.05, y1: 0.16 };
const RIGHT_FLANK = { x0: 0.73, x1: 0.84, y0: 0.02, y1: 0.12 };
const CAP = { x0: 0.56, x1: 0.7, y0: 0, y1: 0.07 };

function boxStats(
  data: Uint8Array,
  width: number,
  height: number,
  box: { x0: number; x1: number; y0: number; y1: number }
): RegionStats {
  return regionStats(
    data,
    width,
    height,
    box.x0 * width,
    box.x1 * width,
    box.y0 * height,
    box.y1 * height
  );
}

/**
 * Classify one Hotel Schönegg still.
 * A banner is a bright plume on one side of the tip while the other side, and the sky above it, stay blue.
 * Ambiguous frames stay `unavailable` so a dry ridge is not called a cloud.
 */
export function classifySummitFrame(
  data: Uint8Array,
  width: number,
  height: number
): BannerCameraReading {
  if (width < 80 || height < 60) return 'unavailable';
  if (meanLuminance(data, width, height, Math.floor(height * 0.4)) < 48) {
    return 'unavailable';
  }

  const left = boxStats(data, width, height, LEFT_FLANK);
  const right = boxStats(data, width, height, RIGHT_FLANK);
  const cap = boxStats(data, width, height, CAP);
  const cornerLeft = regionStats(data, width, height, 0, width * 0.18, 0, height * 0.16);
  const cornerRight = regionStats(
    data,
    width,
    height,
    width * 0.82,
    width,
    0,
    height * 0.16
  );
  const cornerSky = (cornerLeft.sky + cornerRight.sky) / 2;

  if (cornerSky < 0.2 && (cornerLeft.bright + cornerRight.bright) / 2 > 0.4) {
    return 'socked';
  }

  const leftPlume = left.bright >= 0.45 && left.sky <= 0.4;
  const rightPlume = right.bright >= 0.45 && right.sky <= 0.4;
  const leftClear = left.sky >= 0.7 && left.bright <= 0.2;
  const rightClear = right.sky >= 0.7 && right.bright <= 0.2;

  if ((leftPlume && rightClear) || (rightPlume && leftClear)) {
    if (cap.sky >= 0.45 && cornerSky >= 0.5) return 'plume';
  }

  if (
    left.sky >= 0.65 &&
    right.sky >= 0.65 &&
    left.bright <= 0.25 &&
    right.bright <= 0.25 &&
    cap.sky >= 0.7
  ) {
    return 'clear';
  }

  return 'unavailable';
}
