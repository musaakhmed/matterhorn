/**
 * Script to notify Bing & other search engines of site URLs via IndexNow.
 * Run with: npm run indexnow
 */

const INDEXNOW_KEY = 'be719268580c7746e467071e23d9e2a6';

const PATHS = [
  '',
  '/viewpoints',
  '/viewpoints/gornergrat',
  '/viewpoints/glacier-paradise',
  '/viewpoints/sunnegga-riffelsee',
  '/guides',
  '/guides/gornergrat-vs-glacier-paradise',
  '/guides/best-time-to-see-matterhorn',
  '/guides/zermatt-cloudy-rainy-day-guide',
  '/guides/best-matterhorn-photo-viewpoints',
  '/guides/matterhorn-banner-cloud-fohn-wind',
  '/guides/zurich-geneva-to-zermatt-day-trip',
  '/widget',
];

async function submitForHost(host) {
  const baseUrl = `https://${host}`;
  const urlList = PATHS.map((p) => `${baseUrl}${p}`);
  const payload = {
    host,
    key: INDEXNOW_KEY,
    keyLocation: `${baseUrl}/${INDEXNOW_KEY}.txt`,
    urlList,
  };

  console.log(`\n--- Submitting ${urlList.length} URLs for ${host} ---`);

  const endpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow',
  ];

  for (const endpoint of endpoints) {
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(payload),
      });
      console.log(`${endpoint} -> ${res.status} ${res.statusText}`);
    } catch (err) {
      console.error(`Failed ${endpoint}:`, err.message);
    }
  }
}

async function main() {
  await submitForHost('www.isthematterhornvisible.com');
  await submitForHost('isthematterhornvisible.com');
  console.log('\n✓ IndexNow submission completed.');
}

main();
