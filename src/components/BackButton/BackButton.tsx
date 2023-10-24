'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { ArrowLeftIcon } from 'lucide-react';

export default function BackButton() {
  const router = useRouter();

  return (
    <div className="mt-2">
      <Button size="sm" variant="link" onClick={router.back}>
        <ArrowLeftIcon /> Go Back
      </Button>
    </div>
  );
}
