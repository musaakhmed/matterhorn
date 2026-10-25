import type { Metadata, Viewport } from 'next';
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
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Is The Matterhorn Visible Today? | Real-Time Live Visibility & Webcams',
    description:
      'Check real-time visibility for the Matterhorn summit (4,478m) in Zermatt. Powered by high-altitude atmospheric data and live Gornergrat webcams.',
    url: 'https://isthematterhornvisible.com',
    siteName: 'Is The Matterhorn Visible?',
    locale: 'en_CH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Is The Matterhorn Visible Today?',
    description:
      'Instant Matterhorn 1–10 AM/PM visibility index, 10-day forecast horizon, and live Zermatt webcams.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Is The Matterhorn Visible?',
      url: 'https://isthematterhornvisible.com',
      applicationCategory: 'WeatherApplication',
      operatingSystem: 'All',
      description:
        'Check real-time visibility for the Matterhorn summit (4,478m) in Zermatt. Powered by high-altitude atmospheric data and live Gornergrat webcams.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'CHF',
      },
      contentLocation: {
        '@type': 'Place',
        name: 'Matterhorn Summit, Zermatt, Switzerland',
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 45.9765,
          longitude: 7.7491,
          elevation: '4478 m',
        },
      },
    },
    {
      '@type': 'WeatherForecast',
      name: 'Matterhorn 10-Day AM/PM Visibility Forecast (Gornergrat & Glacier Paradise)',
      description:
        '10-day Morning (AM) and Afternoon (PM) 1–10 visibility index, cloud layer diagnostics, Föhn wind banner risk, and historical monthly clear-sky probabilities for Zermatt, Switzerland.',
      spatialCoverage: {
        '@type': 'Place',
        name: 'Matterhorn, Zermatt, Valais, Switzerland',
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 45.9765,
          longitude: 7.7491,
        },
      },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 alpine-backdrop selection:bg-sky-500/20 selection:text-sky-900">
        {children}
      </body>
    </html>
  );
}
