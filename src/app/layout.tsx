import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
export const dynamic = 'force-dynamic';

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
