import React from 'react';
import VisibilityClientShell from '@/components/VisibilityClientShell';
import { fetchMatterhornVisibility } from '@/lib/weather';
import { buildHomePageJsonLd, serializeJsonLd } from '@/lib/schema';

export const revalidate = 900; // Revalidate every 15 minutes

export default async function HomePage() {
  const data = await fetchMatterhornVisibility();
  const jsonLd = buildHomePageJsonLd(data);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <VisibilityClientShell initialData={data} />
    </>
  );
}
