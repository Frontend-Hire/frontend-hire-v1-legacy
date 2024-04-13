'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { HeadingItem } from '../util/getHeadings';
import Link from 'next/link';

type TOCProps = {
  headings: HeadingItem[];
};

export default function TOC({ headings }: TOCProps) {
  const [currentHeading, setCurrentHeading] = React.useState(headings[0].title);

  return (
    <aside className="hidden max-h-screen w-[250px] lg:block">
      <div className="fixed">
        <p className="mb-2 text-sm font-medium">On This Page</p>
        <nav>
          <ul className="space-y-1">
            {headings.map((item, index) => (
              <li
                key={index}
                className={cn(
                  'text-sm text-muted transition-colors',
                  item.id === currentHeading && 'text-ring',
                  item.level === 2 && 'ml-2',
                  item.level === 3 && 'ml-4',
                )}
              >
                <Link
                  href={`#${item.id}`}
                  className="hover:underline"
                  onClick={() => setCurrentHeading(item.id)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
