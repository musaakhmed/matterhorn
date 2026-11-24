import React from 'react';
import { RootShell, rootMetadata, rootViewport } from '@/app/_components/RootShell';
import { getDictionary } from '@/lib/i18n/dictionaries';

export const viewport = rootViewport;
export const metadata = rootMetadata;

export default function DefaultRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootShell locale="en" dict={getDictionary('en')}>
      {children}
    </RootShell>
  );
}
