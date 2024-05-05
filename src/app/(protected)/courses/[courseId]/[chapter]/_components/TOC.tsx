'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { HeadingItem } from '../../util/getHeadings';
import Link from 'next/link';

type TOCProps = {
  headings: HeadingItem[];
};

export default function TOC({ headings }: TOCProps) {
  const [currentHeading, setCurrentHeading] = React.useState(
    headings.length !== 0 ? headings[0].id : '',
  );

  React.useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      const scrollPosition = window.scrollY + window.innerHeight * 0.2; // Adjust this value to target when the heading should change

      // Find the heading that's currently in view by comparing their positions to the scroll position
      const currentHeadingInView = headings
        .map((heading) => {
          const element = document.getElementById(heading.id);
          return {
            id: heading.id,
            position: element ? element.offsetTop : 0,
          };
        })
        .reduce(
          (prev, curr) => {
            if (curr.position < scrollPosition) {
              return curr;
            } else {
              return prev;
            }
          },
          { id: '', position: 0 } as { id: string; position: number },
        );

      setCurrentHeading(currentHeadingInView.id);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Call handleScroll once to set the initial state correctly
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headings]);

  return (
    <div>
      <aside className="sticky top-20 hidden max-h-screen min-w-[180px] max-w-[180px] lg:block">
        <p className="mb-2 text-sm font-medium">On This Page</p>
        <nav>
          <ul className="space-y-1">
            {headings.map((item, index) => (
              <li
                key={index}
                className={cn(
                  'text-sm text-muted transition-colors',
                  item.id === currentHeading && 'text-[#FF5CF2]',
                  item.depth === 1 && 'ml-2',
                  item.depth === 2 && 'ml-4',
                )}
              >
                <Link
                  prefetch={false}
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
    </div>
  );
}
