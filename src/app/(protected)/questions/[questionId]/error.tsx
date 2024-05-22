'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-full flex-col items-center justify-center p-4">
      <h2>{error.message}</h2>
      <Button asChild>
        <Link prefetch={false} href={'/questions'}>
          Back To All Questions
        </Link>
      </Button>
      <p>Or</p>
      <Button variant="destructive" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
