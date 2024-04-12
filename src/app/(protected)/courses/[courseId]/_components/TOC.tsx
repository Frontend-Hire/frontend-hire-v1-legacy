'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { HeadingItem } from '../util/useHeadings.ts';

interface TOCProps {
  headings: HeadingItem[];
}

// to be reimplemented using cva ~ashish
export default function TOC({ headings }: TOCProps) {
  const [currentHeading, setCurrentHeading] = useState<string>(
    headings[0].title,
  );

  return (
    <aside className="fixed right-[30px] hidden max-h-screen md:w-[150px] lg:w-[250px] xl:block">
      <p className="mb-2 text-sm font-medium">On This Page</p>
      <nav>
        <ul className="space-y-1">
          {headings.map((item, index) => (
            <li
              key={index}
              className={twMerge(
                'text-sm text-muted transition-colors',
                item.id === currentHeading && 'text-ring',
                item.level === 2 && 'ml-2',
                item.level === 3 && 'ml-4',
              )}
            >
              <a
                href={'#' + item.id}
                className="hover:underline"
                onClick={() => setCurrentHeading(item.id)}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
