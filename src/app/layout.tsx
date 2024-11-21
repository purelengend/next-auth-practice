import type { Metadata } from 'next';

// Providers
import Providers from '@/app/providers';

// Fonts
import { poppins, quella } from '../themes/font';

import './globals.css';

export const metadata: Metadata = {
  title: 'Next.JS Example',
  description: 'Next.JS 15+ example',
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link as="image" href="/images/hero-image.webp" rel="preload" />
      </head>
      <body
        className={`${poppins.className} ${poppins.variable} ${quella.variable}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
