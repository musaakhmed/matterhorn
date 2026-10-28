import type { Metadata, Viewport } from 'next';
import { headers } from 'next/headers';
import { buildRootLayoutJsonLd, serializeJsonLd } from '@/lib/schema';
import { ThemeProvider } from '@/components/ThemeProvider';
import { I18nProvider } from '@/lib/i18n/context';
import { getAlternateUrls, isValidLocale, LOCALE_METAS } from '@/lib/i18n/config';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#f0f9ff',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://isthematterhornvisible.com'),
  title: 'Is the Matterhorn Visible? | Zermatt Webcam & Weather',
  description:
    'Live Matterhorn visibility in Zermatt (4,478m). Gornergrat webcam, Klein Matterhorn webcam, and a 10-day summit forecast.',
  category: 'weather',
  keywords: [
    'is the matterhorn visible',
    'matterhorn visibility forecast',
    'zermatt weather webcam',
    'zermatt webcam',
    'zermatt webcam live',
    'zermatt live webcams',
    'zermatt weather forecast',
    'zermatt weather',
    'zermatt live camera',
    'zermatt mountain weather',
    'gornergrat visibility',
    'gornergrat webcam',
    'klein matterhorn webcam',
    'matterhorn glacier paradise weather',
    'best time to see the matterhorn',
    'matterhorn cloud cover',
    'is the matterhorn visible from zermatt',
    'zermatt viewpoints',
    'wetter zermatt',
  ],
  alternates: getAlternateUrls('/'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Is the Matterhorn Visible? | Zermatt Webcam & Weather',
    description:
      'Gornergrat webcam, Klein Matterhorn webcam, and a 10-day Matterhorn forecast for Zermatt.',
    url: 'https://isthematterhornvisible.com',
    siteName: 'Is The Matterhorn Visible?',
    locale: 'en_CH',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Is The Matterhorn Visible Today? Live Zermatt Alpine Visibility Score',
      },
      {
        url: '/banner.jpeg',
        width: 1424,
        height: 752,
        alt: 'Is The Matterhorn Visible Today? Zermatt Alpine Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Is the Matterhorn Visible? | Zermatt Webcam & Weather',
    description:
      'Gornergrat webcam, Klein Matterhorn webcam, and a 10-day Matterhorn forecast for Zermatt.',
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
  verification: {
    yandex: '4cc9659169b5ec8a',
  },
};

const rootJsonLd = buildRootLayoutJsonLd();

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerStore = await headers();
  const requested = headerStore.get('x-locale');
  const htmlLang =
    requested && isValidLocale(requested) ? LOCALE_METAS[requested].htmlLang : 'en';

  return (
    <html lang={htmlLang} className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('matterhorn-theme')||'system';var d=t==='dark'||(t==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d){document.documentElement.classList.add('dark');document.documentElement.setAttribute('data-theme','dark');document.documentElement.style.colorScheme='dark';}else{document.documentElement.classList.remove('dark');document.documentElement.setAttribute('data-theme','light');document.documentElement.style.colorScheme='light';}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(rootJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 dark:bg-[#0b1120] dark:text-slate-100 alpine-backdrop selection:bg-sky-500/20 selection:text-sky-900 dark:selection:text-sky-100 transition-colors duration-200">
        <ThemeProvider>
          <I18nProvider locale="en">{children}</I18nProvider>
        </ThemeProvider>
        <script
          type="module"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "d3456b94d4da4b72a9616a39ab473d40"}'
        />
      </body>
    </html>
  );
}
