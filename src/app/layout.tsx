import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import { PHProvider } from '@/providers/PHProvider';

import dynamic from 'next/dynamic';
import CourseBanner from '@/components/CourseBanner';

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
          <CourseBanner isRootTop />
          <div className="flex h-full flex-col">{children}</div>
        </body>
      </PHProvider>
      <Analytics />
    </html>
  );
}
