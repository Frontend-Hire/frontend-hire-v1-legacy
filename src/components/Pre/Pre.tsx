'use client';

import React from 'react';
import CopyToClipboard from '../CopyToClipboard';
import { cn } from '@/lib/utils';

export default function Pre({
  children,
  className,
  ...props
}: React.ComponentProps<'pre'>) {
  const preRef = React.useRef<HTMLPreElement | null>(null);

  return (
    <div className="not-prose relative grid">
      <pre
        className={cn('overflow-x-auto subpixel-antialiased')}
        ref={preRef}
        {...props}
        tabIndex={-1}
      >
        {children}
      </pre>
      <div className="absolute right-0 top-0 opacity-0 transition focus-within:opacity-100 [div:hover>&]:opacity-100">
        <CopyToClipboard
          getValue={() =>
            preRef.current?.querySelector('code')?.textContent || ''
          }
        />
      </div>
    </div>
  );
}
