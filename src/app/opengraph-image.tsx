import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';

export const runtime = 'nodejs';
export const revalidate = 900;
export const alt =
  'Is The Matterhorn Visible Today? Live Alpine Visibility Score';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const OPEN_METEO_SUMMIT_URL =
  'https://api.open-meteo.com/v1/forecast?latitude=45.9765&longitude=7.7491&elevation=4478&hourly=cloud_cover,cloud_cover_low,cloud_cover_mid,cloud_cover_high,visibility,precipitation_probability&timezone=Europe%2FZurich&forecast_days=1';

interface OpenMeteoOgHourly {
  time?: string[];
  cloud_cover?: number[];
  cloud_cover_low?: number[];
  cloud_cover_mid?: number[];
  cloud_cover_high?: number[];
  visibility?: number[];
  precipitation_probability?: number[];
}

function computeHourlyRaw(
  cLow: number,
  cMid: number,
  cHigh: number,
  visMeters: number,
  precipProb: number
): number {
  let penalties = 0;
  if (visMeters < 10000) {
    penalties += 25;
  } else if (visMeters < 20000) {
    penalties += 10;
  }
  if (precipProb > 30) {
    penalties += 20;
  }

  const raw = 100 - (0.6 * cMid + 0.25 * cLow + 0.15 * cHigh) - penalties;
  return Math.max(0, Math.min(100, raw));
}

function rawToTenScore(raw: number): number {
  return Math.max(1, Math.min(10, Math.round(raw / 10)));
}

function getStatusMeta(score: number): {
  label: string;
  color: string;
  bgTint: string;
  borderTint: string;
  description: string;
} {
  if (score >= 8) {
    return {
      label: 'Crystal Clear',
      color: '#10B981',
      bgTint: 'rgba(6, 78, 59, 0.78)',
      borderTint: '#10B981',
      description:
        'Crisp, unobstructed alpine views across the 4,478m Hörnli & Southern ridges. Prime window for Gornergrat & Riffelsee.',
    };
  }
  if (score >= 6) {
    return {
      label: 'Partially Visible',
      color: '#F59E0B',
      bgTint: 'rgba(120, 53, 15, 0.78)',
      borderTint: '#F59E0B',
      description:
        'Good summit visibility with passing mid-level clouds or light leeward banner formations along the upper pyramid.',
    };
  }
  if (score >= 3) {
    return {
      label: 'Mostly Obscured',
      color: '#F97316',
      bgTint: 'rgba(124, 45, 18, 0.78)',
      borderTint: '#F97316',
      description:
        'Dense mid-altitude cloud decks (3,000m–4,200m) frequently obscuring the Matterhorn summit sightline.',
    };
  }
  return {
    label: 'Socked In',
    color: '#F43F5E',
    bgTint: 'rgba(136, 19, 55, 0.78)',
    borderTint: '#F43F5E',
    description:
      'Thick alpine cloud cover and overcast conditions blanketing the summit. Save your mountain lift ticket for a clearer window.',
  };
}

function getCurrentSwissHour(): number {
  try {
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Zurich',
      hour: '2-digit',
      hour12: false,
    }).formatToParts(new Date());
    const hourPart = parts.find((p) => p.type === 'hour')?.value ?? '9';
    const parsed = parseInt(hourPart, 10);
    return Number.isNaN(parsed) ? 9 : parsed % 24;
  } catch {
    return 9;
  }
}

function arrayBufferToBase64DataUrl(
  buffer: ArrayBuffer,
  mimeType: string
): string {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }
  return `data:${mimeType};base64,${btoa(binary)}`;
}

export default async function Image() {
  let currentScore = 9;
  let amScore = 9;
  let pmScore = 8;
  let midCloudPct = 10;
  let visibilityKm = 24;
  let bannerSrc: string | null = null;

  try {
    const bannerBuffer = await readFile(
      new URL('../../public/banner.jpeg', import.meta.url)
    );
    bannerSrc = `data:image/jpeg;base64,${bannerBuffer.toString('base64')}`;
  } catch {
    try {
      const bannerBuffer = await fetch(
        new URL('../../public/banner.jpeg', import.meta.url)
      ).then((res) => res.arrayBuffer());
      bannerSrc = arrayBufferToBase64DataUrl(bannerBuffer, 'image/jpeg');
    } catch {
      bannerSrc = null;
    }
  }

  try {
    const response = await fetch(OPEN_METEO_SUMMIT_URL, {
      next: { revalidate: 900 },
    });

    if (response.ok) {
      const json = (await response.json()) as { hourly?: OpenMeteoOgHourly };
      const hourly = json.hourly;

      if (hourly && Array.isArray(hourly.cloud_cover_mid)) {
        const hourCount = Math.min(24, hourly.cloud_cover_mid.length);
        const hourlyRaws: number[] = [];

        for (let h = 0; h < hourCount; h++) {
          const cLow = hourly.cloud_cover_low?.[h] ?? 15;
          const cMid = hourly.cloud_cover_mid?.[h] ?? 10;
          const cHigh = hourly.cloud_cover_high?.[h] ?? 15;
          const vis = hourly.visibility?.[h] ?? 24000;
          const precipProb = hourly.precipitation_probability?.[h] ?? 5;
          hourlyRaws.push(computeHourlyRaw(cLow, cMid, cHigh, vis, precipProb));
        }

        const swissHour = Math.min(
          Math.max(0, getCurrentSwissHour()),
          Math.max(0, hourlyRaws.length - 1)
        );

        currentScore = rawToTenScore(hourlyRaws[swissHour] ?? 90);
        midCloudPct = Math.round(hourly.cloud_cover_mid?.[swissHour] ?? 10);
        visibilityKm = Math.max(
          1,
          Math.round(((hourly.visibility?.[swissHour] ?? 24000) / 1000) * 10) /
            10
        );

        // AM window: 06:00 - 12:00 (hours 6..11)
        const amSlice = hourlyRaws.slice(6, 12);
        if (amSlice.length > 0) {
          const amAvgRaw =
            amSlice.reduce((acc, val) => acc + val, 0) / amSlice.length;
          amScore = rawToTenScore(amAvgRaw);
        }

        // PM window: 12:00 - 18:00 (hours 12..17)
        const pmSlice = hourlyRaws.slice(12, 18);
        if (pmSlice.length > 0) {
          const pmAvgRaw =
            pmSlice.reduce((acc, val) => acc + val, 0) / pmSlice.length;
          pmScore = rawToTenScore(pmAvgRaw);
        }
      }
    }
  } catch {
    // Fallback to default clear alpine telemetry if upstream fetch fails
  }

  const statusMeta = getStatusMeta(currentScore);
  const amMeta = getStatusMeta(amScore);
  const pmMeta = getStatusMeta(pmScore);

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          position: 'relative',
          backgroundColor: '#09090b',
          backgroundImage:
            'radial-gradient(circle at 82% 20%, rgba(56, 189, 248, 0.20) 0%, rgba(15, 23, 42, 0.65) 45%, #09090b 100%), linear-gradient(135deg, #09090b 0%, #0f172a 100%)',
          color: '#f8fafc',
          fontFamily: 'sans-serif',
          overflow: 'hidden',
        }}
      >
        {/* Background Banner Image from /public/banner.jpeg */}
        {bannerSrc ? (
          <img
            src={bannerSrc}
            alt=""
            width={1200}
            height={630}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '1200px',
              height: '630px',
              objectFit: 'cover',
            }}
          />
        ) : null}

        {/* Alpine Scrim Overlay: keeps Matterhorn & sun vibrant on the left & subtly shades right for telemetry card */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '1200px',
            height: '630px',
            display: 'flex',
            backgroundImage:
              'linear-gradient(90deg, rgba(9, 9, 11, 0.04) 0%, rgba(9, 9, 11, 0.14) 44%, rgba(9, 9, 11, 0.72) 66%, rgba(15, 23, 42, 0.90) 100%)',
          }}
        />

        {/* Foreground Content Container */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '44px 56px',
          }}
        >
          {/* Top Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '10px 20px',
                borderRadius: '18px',
                backgroundColor: 'rgba(9, 9, 11, 0.72)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background:
                    'linear-gradient(135deg, rgba(56, 189, 248, 0.35), rgba(16, 185, 129, 0.30))',
                  border: '1px solid rgba(148, 163, 184, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  fontWeight: 800,
                  color: '#38bdf8',
                }}
              >
                ▲
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    fontSize: '22px',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    color: '#ffffff',
                  }}
                >
                  IsTheMatterhornVisible.com
                </div>
                <div
                  style={{
                    display: 'flex',
                    fontSize: '12px',
                    fontWeight: 700,
                    color: '#bae6fd',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  Live High-Altitude Alpine Telemetry
                </div>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px 22px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(9, 9, 11, 0.78)',
                border: '1px solid rgba(255, 255, 255, 0.22)',
                fontSize: '18px',
                fontWeight: 700,
                color: '#f8fafc',
              }}
            >
              Summit: 4,478 m • Zermatt, CH
            </div>
          </div>

          {/* Right-Aligned Hero Telemetry Panel (leaves the Matterhorn peak on the left unobstructed) */}
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
                width: '615px',
                padding: '26px 32px',
                borderRadius: '28px',
                backgroundColor: 'rgba(9, 9, 11, 0.82)',
                border: '1px solid rgba(255, 255, 255, 0.20)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  fontSize: '17px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#38bdf8',
                }}
              >
                Is The Matterhorn Visible Today?
              </div>

              {/* Hero Status Pill */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px 28px',
                  borderRadius: '20px',
                  backgroundColor: statusMeta.bgTint,
                  border: `2px solid ${statusMeta.borderTint}`,
                  alignSelf: 'flex-start',
                }}
              >
                <div
                  style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '9999px',
                    backgroundColor: statusMeta.color,
                    display: 'flex',
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    fontSize: '44px',
                    fontWeight: 900,
                    letterSpacing: '-0.03em',
                    color: '#ffffff',
                  }}
                >
                  {`${currentScore}/10 — ${statusMeta.label}`}
                </div>
              </div>

              {/* Sub-pills: Split AM | PM Viewing Windows */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 20px',
                    borderRadius: '14px',
                    backgroundColor: 'rgba(15, 23, 42, 0.92)',
                    border: '1px solid rgba(148, 163, 184, 0.32)',
                    fontSize: '21px',
                    fontWeight: 800,
                    color: '#f8fafc',
                  }}
                >
                  <div
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '9999px',
                      backgroundColor: amMeta.color,
                      display: 'flex',
                    }}
                  />
                  <div style={{ display: 'flex' }}>{`AM: ${amScore}/10`}</div>
                  <div
                    style={{
                      display: 'flex',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#94a3b8',
                    }}
                  >
                    (06:00–12:00)
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 20px',
                    borderRadius: '14px',
                    backgroundColor: 'rgba(15, 23, 42, 0.92)',
                    border: '1px solid rgba(148, 163, 184, 0.32)',
                    fontSize: '21px',
                    fontWeight: 800,
                    color: '#f8fafc',
                  }}
                >
                  <div
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '9999px',
                      backgroundColor: pmMeta.color,
                      display: 'flex',
                    }}
                  />
                  <div style={{ display: 'flex' }}>{`PM: ${pmScore}/10`}</div>
                  <div
                    style={{
                      display: 'flex',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#94a3b8',
                    }}
                  >
                    (12:00–18:00)
                  </div>
                </div>
              </div>

              {/* Contextual Plain-English Condition Descriptor */}
              <div
                style={{
                  display: 'flex',
                  fontSize: '19px',
                  lineHeight: 1.4,
                  fontWeight: 500,
                  color: '#e2e8f0',
                }}
              >
                {statusMeta.description}
              </div>
            </div>
          </div>

          {/* Footer: Viewpoints & Telemetry Pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 24px',
              borderRadius: '16px',
              backgroundColor: 'rgba(9, 9, 11, 0.80)',
              border: '1px solid rgba(255, 255, 255, 0.16)',
              width: '100%',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '18px',
                fontWeight: 700,
                color: '#f8fafc',
              }}
            >
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '9999px',
                  backgroundColor: '#38bdf8',
                  display: 'flex',
                }}
              />
              <div style={{ display: 'flex' }}>
                Gornergrat • Klein Matterhorn • Rothorn
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                fontSize: '16px',
                fontWeight: 600,
                color: '#cbd5e1',
              }}
            >
              <div style={{ display: 'flex' }}>
                {`Mid-Cloud: ${midCloudPct}%`}
              </div>
              <div style={{ display: 'flex', color: '#64748b' }}>•</div>
              <div style={{ display: 'flex' }}>
                {`Visibility: ${visibilityKm} km`}
              </div>
              <div style={{ display: 'flex', color: '#64748b' }}>•</div>
              <div style={{ display: 'flex', color: '#38bdf8' }}>
                Live Webcams & 10-Day Forecast
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
