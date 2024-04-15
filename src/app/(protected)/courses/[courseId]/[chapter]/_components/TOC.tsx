'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { HeadingItem } from '../../util/getHeadings';
import Link from 'next/link';

type TOCProps = {
  headings: HeadingItem[];
};

export default function TOC({ headings }: TOCProps) {
  const [currentHeading, setCurrentHeading] = React.useState<string>(
    headings[0].id,
  );

  const getSections = React.useCallback(() => {
    const sections: HTMLElement[] = [];

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);

      if (Boolean(element) && element) {
        sections.push(element);
      }
    });

    return sections;
  }, [headings]);

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = getSections();
      let closestSectionId = null;
      let closestSectionTop = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < closestSectionTop) {
          closestSectionId = section.id;
          closestSectionTop = rect.top;
        }
      });

      setCurrentHeading(closestSectionId ?? '');
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [getSections]);

  return (
    <aside className="sticky top-20 hidden max-h-screen min-w-[150px] lg:block">
      <p className="mb-2 text-sm font-medium">On This Page</p>
      <nav>
        <ul className="space-y-1">
          {headings.map((item, index) => (
            <li
              key={index}
              className={cn(
                'text-sm text-muted transition-colors',
                item.id === currentHeading && 'text-ring',
                item.depth === 1 && 'ml-2',
                item.depth === 2 && 'ml-4',
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
    </aside>
  );
}
