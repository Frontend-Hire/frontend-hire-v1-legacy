import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import { PHProvider } from '@/providers/PHProvider';

import dynamic from 'next/dynamic';
import CourseBanner from '@/components/CourseBanner';
import { cn } from '@/lib/utils';
import { openGraphShared } from './shared-metadata';

const PostHogPageView = dynamic(() => import('./PostHogPageView'), {
  ssr: false,
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Frontend Hire',
  description:
    'A frontend coding platform for actual development skills and interviews',
  metadataBase: new URL('https://frontendhire.com'),
  openGraph: {
    ...openGraphShared,
    title: 'Frontend Hire',
    description:
      'A frontend coding platform for actual development skills and interviews',
  },
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en scroll-smooth">
      <PHProvider>
        <body
          className={cn(
            'flex h-screen flex-col bg-background font-sans text-foreground antialiased',
            inter.variable,
          )}
        >
          <PostHogPageView />
          <div className="flex flex-1 flex-col">
            <CourseBanner isRootTop />
            {children}
          </div>
        </body>
      </PHProvider>
      <Analytics />
    </html>
  );
}
