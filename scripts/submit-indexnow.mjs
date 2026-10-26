/**
 * Script to notify Bing & other search engines of site URLs via IndexNow.
 * Run with: npm run indexnow
 */

const INDEXNOW_KEY = 'be719268580c7746e467071e23d9e2a6';
const HOST = 'isthematterhornvisible.com';
const BASE_URL = `https://${HOST}`;

const URLS = [
  `${BASE_URL}`,
  `${BASE_URL}/viewpoints`,
  `${BASE_URL}/viewpoints/gornergrat`,
  `${BASE_URL}/viewpoints/glacier-paradise`,
  `${BASE_URL}/viewpoints/sunnegga-riffelsee`,
  `${BASE_URL}/guides`,
  `${BASE_URL}/guides/gornergrat-vs-glacier-paradise`,
  `${BASE_URL}/guides/best-time-to-see-matterhorn`,
  `${BASE_URL}/guides/zermatt-cloudy-rainy-day-guide`,
  `${BASE_URL}/guides/best-matterhorn-photo-viewpoints`,
  `${BASE_URL}/guides/matterhorn-banner-cloud-fohn-wind`,
  `${BASE_URL}/guides/zurich-geneva-to-zermatt-day-trip`,
  `${BASE_URL}/widget`,
];

async function submitIndexNow() {
  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: URLS,
  };

  console.log(`Submitting ${URLS.length} URLs to IndexNow for ${HOST}...`);

  // IndexNow API endpoints (submitting to one shares across all participating search engines like Bing, Yandex, Seznam, Naver)
  const endpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow',
  ];

  for (const endpoint of endpoints) {
    try {
      console.log(`\nPosting to ${endpoint}...`);
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      console.log(`Response status: ${res.status} ${res.statusText}`);
      if (res.status === 200 || res.status === 202) {
        console.log(`✓ Successfully submitted to ${endpoint}`);
      } else {
        const body = await res.text();
        console.warn(`Note (${res.status}): ${body || 'Pending validation'}`);
      }
    } catch (err) {
      console.error(`Failed to submit to ${endpoint}:`, err.message);
    }
  }

  console.log('\nMake sure this deployment has been pushed to production so');
  console.log(`${BASE_URL}/${INDEXNOW_KEY}.txt is reachable when Bing verifies it!`);
}

submitIndexNow();
