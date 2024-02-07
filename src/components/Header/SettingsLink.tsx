'use client';

import Link from 'next/link';
import { DropdownMenuItem } from '../ui/dropdown-menu';

export default function SettingsLink() {
  return (
    <DropdownMenuItem asChild>
      <Link href="/settings">Settings</Link>
    </DropdownMenuItem>
  );
}
