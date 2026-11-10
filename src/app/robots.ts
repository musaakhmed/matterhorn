import type { MetadataRoute } from 'next';

const AI_CRAWLERS = [
  'OAI-SearchBot',
  'ChatGPT-User',
  'GPTBot',
  'PerplexityBot',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'Applebot-Extended',
  'Google-Extended',
  'Perplexity-User',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/api/visibility', '/llms.txt', '/llms-full.txt'],
        disallow: ['/api/'],
      },
      {
        userAgent: AI_CRAWLERS,
        allow: ['/', '/api/visibility', '/llms.txt', '/llms-full.txt'],
        disallow: ['/api/widget'],
      },
    ],
    sitemap: 'https://isthematterhornvisible.com/sitemap.xml',
    host: 'https://isthematterhornvisible.com',
  };
}
