import type { Metadata, Viewport } from 'next';
import { buildRootLayoutJsonLd, serializeJsonLd } from '@/lib/schema';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#f0f9ff',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://isthematterhornvisible.com'),
  title: 'Is The Matterhorn Visible Today? | Live 1–10 Visibility & Webcams',
  description:
    'Check real-time Matterhorn summit visibility (4,478m) in Zermatt. Powered by high-altitude atmospheric data, Gornergrat & Klein Matterhorn webcams, and 10-day forecasts.',
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
    title: 'Is The Matterhorn Visible Today? | Live 1–10 Visibility & Webcams',
    description:
      'Check real-time Matterhorn summit visibility (4,478m) in Zermatt. Powered by high-altitude atmospheric data, Gornergrat & Klein Matterhorn webcams, and 10-day forecasts.',
    url: 'https://isthematterhornvisible.com',
    siteName: 'Is The Matterhorn Visible?',
    locale: 'en_CH',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Is The Matterhorn Visible Today? Live Alpine Visibility Score',
      },
      {
        url: '/banner.jpeg',
        width: 1424,
        height: 752,
        alt: 'Is The Matterhorn Visible Today? Alpine Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Is The Matterhorn Visible Today? | Live 1–10 Visibility & Webcams',
    description:
      'Check real-time Matterhorn summit visibility (4,478m) in Zermatt. Powered by high-altitude atmospheric data, Gornergrat & Klein Matterhorn webcams, and 10-day forecasts.',
    images: ['/opengraph-image', '/banner.jpeg'],
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

const rootJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    ...buildRootLayoutJsonLd()['@graph'],
    {
      '@type': 'WeatherForecast',
      name: 'Matterhorn Summit Live 1–10 Visibility Forecast',
      description:
        'Check real-time Matterhorn summit visibility (4,478m) in Zermatt. Powered by high-altitude atmospheric data, Gornergrat & Klein Matterhorn webcams, and 10-day forecasts.',
      url: 'https://isthematterhornvisible.com',
      spatialCoverage: {
        '@type': 'Place',
        name: 'Matterhorn Summit',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Zermatt',
          addressRegion: 'Valais',
          addressCountry: 'CH',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 45.9765,
          longitude: 7.7491,
          elevation: '4478m',
        },
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can you see the Matterhorn from Zermatt today?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Check our live 1–10 Matterhorn Visibility Score updated every 15 minutes using high-altitude Open-Meteo cloud layer telemetry (2,000m–6,000m) and live Gornergrat & Klein Matterhorn webcams. A score of 8–10 indicates crystal-clear views of the 4,478m summit pyramid.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best time of day to see the Matterhorn?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Early morning (06:00–11:00 CET) is statistically the clearest viewing window 78% of the year. Afternoon solar heating of the Mattertal valley walls triggers rising thermal updrafts (anabatic winds) that frequently form cumulus banner clouds around the summit after noon.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which viewpoint is better: Gornergrat or Klein Matterhorn?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Gornergrat (3,089m) offers the iconic East/Northeast "Toblerone" pyramid profile and Riffelsee mirror lake reflections via cogwheel train. Klein Matterhorn / Matterhorn Glacier Paradise (3,883m) sits nearly 800m higher overlooking the Southern face, making it ideal for rising above low valley fog inversions.',
          },
        },
      ],
    },
  ],
};

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
