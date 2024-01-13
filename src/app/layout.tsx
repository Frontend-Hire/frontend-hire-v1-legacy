import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import Banner from '@/components/Banner';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Frontend Hire',
  description:
    'A frontend coding platform for actual development skills and interviews',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
      <Analytics />
    </html>
  );
}
