'use client';

import { useParams } from 'next/navigation';
import { SidebarProps } from './Sidebar';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function DesktopSidebar({ pages }: SidebarProps) {
  const { chapter } = useParams<{ chapter: string; courseId: string }>();

  return (
    <nav className="hidden min-w-[250px] max-w-[250px] flex-col md:flex">
      <ul className="fixed h-full space-y-1 overflow-y-auto py-2">
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
