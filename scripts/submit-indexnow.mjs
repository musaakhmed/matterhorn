/**
 * Script to notify Bing, Naver, Yandex, Seznam & other search engines of site URLs via IndexNow.
 * Run with: npm run indexnow
 */

const INDEXNOW_KEY = 'be719268580c7746e467071e23d9e2a6';

const LOCALES = [
  'en',
  'de',
  'es',
  'fr',
  'it',
  'pt',
  'ko',
  'ja',
  'zh',
  'zh-tw',
];

const VIEWPOINT_SLUGS = [
  'gornergrat',
  'glacier-paradise',
  'sunnegga-riffelsee',
  'zermatt-village',
];

const GUIDE_SLUGS = [
  'gornergrat-vs-glacier-paradise',
  'best-time-to-see-matterhorn',
  'zermatt-cloudy-rainy-day-guide',
  'best-matterhorn-photo-viewpoints',
  'matterhorn-banner-cloud-fohn-wind',
  'zurich-geneva-to-zermatt-day-trip',
  'christmas-in-zermatt-matterhorn',
  'gornergrat-railway-vs-glacier-express',
];

function generateAllPaths() {
  const paths = new Set();

  // Root / English default paths
  paths.add('');
  paths.add('/viewpoints');
  paths.add('/trains');
  paths.add('/ski');
  paths.add('/guides');
  paths.add('/widget');

  for (const slug of VIEWPOINT_SLUGS) {
    paths.add(`/viewpoints/${slug}`);
  }

  for (const slug of GUIDE_SLUGS) {
    paths.add(`/guides/${slug}`);
  }

  // Localized routes for every non-English locale
  for (const locale of LOCALES) {
    if (locale === 'en') continue;

    paths.add(`/${locale}`);
    paths.add(`/${locale}/viewpoints`);
    paths.add(`/${locale}/trains`);
    paths.add(`/${locale}/ski`);
    paths.add(`/${locale}/guides`);
    paths.add(`/${locale}/widget`);

    for (const slug of VIEWPOINT_SLUGS) {
      paths.add(`/${locale}/viewpoints/${slug}`);
    }

    for (const slug of GUIDE_SLUGS) {
      paths.add(`/${locale}/guides/${slug}`);
    }
  }

  return Array.from(paths);
}

const ALL_PATHS = generateAllPaths();

async function submitForHost(host) {
  const baseUrl = `https://${host}`;
  const urlList = ALL_PATHS.map((p) => `${baseUrl}${p}`);
  const payload = {
    host,
    key: INDEXNOW_KEY,
    keyLocation: `${baseUrl}/${INDEXNOW_KEY}.txt`,
    urlList,
  };

  console.log(`\n==================================================`);
  console.log(`Submitting ${urlList.length} multilingual URLs for ${host}`);
  console.log(`==================================================`);

  const endpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow',
    'https://yandex.com/indexnow',
    'https://searchadvisor.naver.com/indexnow',
  ];

  for (const endpoint of endpoints) {
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(payload),
      });
      console.log(`✓ ${endpoint} -> ${res.status} ${res.statusText}`);
    } catch (err) {
      console.error(`✗ Failed ${endpoint}:`, err.message);
    }
  }
}

async function main() {
  const hosts = [
    'isthematterhornvisible.com',
    'www.isthematterhornvisible.com',
  ];

  for (const host of hosts) {
    await submitForHost(host);
  }

  console.log('\nAll IndexNow dispatches completed.');
}

main();
