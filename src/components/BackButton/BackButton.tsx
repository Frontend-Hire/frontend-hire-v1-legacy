'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';
import { getBackPath } from './getBackPath';

export default function BackButton() {
  const pathname = usePathname();

  return (
    <div className="mt-2">
      <Button size="sm" variant="link">
        <Link className="flex items-center" href={getBackPath(pathname)}>
          <ArrowLeftIcon /> Go Back
        </Link>
      </Button>
    </div>
  );
}
