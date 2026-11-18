import React from 'react';
import { RootShell, rootMetadata, rootViewport } from '@/app/_components/RootShell';

export const viewport = rootViewport;
export const metadata = rootMetadata;

export default function DefaultRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootShell locale="en">{children}</RootShell>;
}
