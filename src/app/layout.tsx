import './globals.css';
import { Inter } from 'next/font/google';
import { PHProvider } from '@/providers/PHProvider';

import dynamic from 'next/dynamic';
import CourseBanner from '@/components/CourseBanner';
import { cn } from '@/lib/utils';
import { getMetadata } from '@/lib/getMetadata';
import Script from 'next/script';

const PostHogPageView = dynamic(() => import('./PostHogPageView'), {
  ssr: false,
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  metadataBase: new URL('https://frontendhire.com'),
  ...getMetadata(),
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" className="scroll-pt-20 scroll-smooth">
      <Script
        defer
        data-domain="frontendhire.com"
        src="https://plausible.io/js/script.js"
      />

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
    </html>
  );
}
