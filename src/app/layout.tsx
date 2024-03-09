import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import { PHProvider } from '@/providers/PHProvider';
import { opengraphShared } from './shared-metadata';

import dynamic from 'next/dynamic';
import CourseBanner from '@/components/CourseBanner';
import { cn } from '@/lib/utils';

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
  openGraph: {
    ...opengraphShared,
    title: 'Frontend Hire',
    description:
      'A frontend coding platform for actual development skills and interviews',
  },
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
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
