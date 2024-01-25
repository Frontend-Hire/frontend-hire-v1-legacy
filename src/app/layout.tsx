import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import Banner from '@/components/Banner';
import Link from 'next/link';
import { PHProvider } from '@/providers/PHProvider';

import dynamic from 'next/dynamic';

const PostHogPageView = dynamic(() => import('./PostHogPageView'), {
  ssr: false,
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Frontend Hire',
  description:
    'A frontend coding platform for actual development skills and interviews',
  openGraph: {
    title: 'Frontend Hire',
    description:
      'A frontend coding platform for actual development skills and interviews',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <PHProvider>
        <body className={inter.className}>
          <PostHogPageView />
          <Banner>
            Support this project by{' '}
            <Link
              className="underline"
              target="_blank"
              href="https://www.buymeacoffee.com/iamyhr"
            >
              sponsoring a coffee here.
            </Link>
          </Banner>
          <div className="flex h-full flex-col">{children}</div>
        </body>
      </PHProvider>
      <Analytics />
    </html>
  );
}
