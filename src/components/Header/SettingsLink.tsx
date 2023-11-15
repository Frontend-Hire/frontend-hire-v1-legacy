'use client';

import Link from 'next/link';
import { DropdownMenuItem } from '../ui/dropdown-menu';
import { usePathname } from 'next/navigation';

export default function SettingsLink() {
  const pathname = usePathname();

  return (
    <DropdownMenuItem
      className={`${
        pathname == '/settings'
          ? 'bg-primary text-primary-foreground focus:bg-primary focus:text-primary-foreground'
          : 'cursor-pointer'
      }`}
      asChild
    >
      <Link href="/settings">Settings</Link>
    </DropdownMenuItem>
  );
}
