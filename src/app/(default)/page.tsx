import Page, { generateMetadata as localizedMetadata } from '@/app/[locale]/page';

export const revalidate = 900;

export async function generateMetadata() {
  return localizedMetadata({ params: Promise.resolve({ locale: 'en' }) });
}

export default async function RootHomePage() {
  return <Page params={Promise.resolve({ locale: 'en' })} />;
}
