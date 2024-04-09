'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useParams } from 'next/navigation';

type SidebarProps = {
  pages: [string, string][];
};

export default function Sidebar({ pages }: SidebarProps) {
  const { chapter } = useParams<{ chapter: string; courseId: string }>();

  return (
    <nav className="flex w-[250px] flex-col">
      <ul className="space-y-1">
        {pages.map((item) => (
          <li
            key={item[0]}
            className={cn(
              'rounded px-2 py-1 text-muted transition-colors hover:bg-[#140012]',
              chapter === item[0] && 'bg-[#290025] text-[#FF5CF2]',
            )}
          >
            <Link className="block" href={item[0]}>
              {item[1]}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
