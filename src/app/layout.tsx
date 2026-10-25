import type { Metadata, Viewport } from 'next';
import { buildRootLayoutJsonLd, serializeJsonLd } from '@/lib/schema';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#f0f9ff',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Is The Matterhorn Visible Today? | 10-Day AM/PM Visibility Index & Live Webcams',
  description:
    'Check real-time 1–10 AM/PM visibility scores for the Matterhorn in Zermatt across Gornergrat (East) and Glacier Paradise (South), with 10-day horizon forecasts and 4 live Roundshot webcams.',
  metadataBase: new URL('https://isthematterhornvisible.com'),
  category: 'weather',
  keywords: [
    'is the matterhorn visible',
    'matterhorn visibility forecast',
    'zermatt weather webcam',
    'gornergrat visibility',
    'matterhorn glacier paradise weather',
    'best time to see the matterhorn',
    'matterhorn cloud cover',
    'zermatt live webcams',
  ],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Is The Matterhorn Visible Today? | Real-Time Live Visibility & Webcams',
    description:
      'Check real-time visibility for the Matterhorn summit (4,478m) in Zermatt. Powered by high-altitude atmospheric data and live Gornergrat webcams.',
    url: 'https://isthematterhornvisible.com',
    siteName: 'Is The Matterhorn Visible?',
    locale: 'en_CH',
    type: 'website',
    images: [
      {
        url: '/logo.jpeg',
        width: 1024,
        height: 1024,
        alt: 'Is The Matterhorn Visible? logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Is The Matterhorn Visible Today?',
    description:
      'Instant Matterhorn 1–10 AM/PM visibility index, 10-day forecast horizon, and live Zermatt webcams.',
    images: ['/logo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/**
 * Root site-level JSON-LD (`Organization`, `WebSite`, `WebApplication`).
 * Route-specific `WeatherForecast` and `FAQPage` schemas are dynamically emitted
 * in `src/app/page.tsx`, `src/app/guides/page.tsx`, and `src/app/guides/[slug]/page.tsx`
 * via `src/lib/schema.ts`.
 */
const rootJsonLd = buildRootLayoutJsonLd();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(rootJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 alpine-backdrop selection:bg-sky-500/20 selection:text-sky-900">
        {children}
      </body>
    </html>
  );
}
