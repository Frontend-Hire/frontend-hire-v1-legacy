'use client';

import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { ComponentProps, ReactElement } from 'react';
import { useCallback, useEffect, useState } from 'react';

interface CodeBlockProps {
  children: ReactElement;
}

const CodeBlock = ({ children }: CodeBlockProps) => {
  const [isCopied, setCopied] = useState(false);

  useEffect(() => {
    if (!isCopied) return;
    const timerId = setTimeout(() => {
      setCopied(false);
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [isCopied]);

  const handleClick = useCallback<
    NonNullable<ComponentProps<'button'>['onClick']>
  >(async () => {
    setCopied(true);
    if (!navigator?.clipboard) {
      console.error('Access to clipboard rejected!');
    }
    try {
      // Implement the copy feature

      await navigator.clipboard.writeText('Ashish left this half done.');
    } catch {
      console.error('Failed to copy!');
    }
  }, []);

  const IconToUse = isCopied ? Check : Copy;

  return (
    <pre className="relative bg-secondary">
      <Button
        variant="outline"
        className="absolute right-0 top-0 m-1"
        onClick={handleClick}
      >
        <IconToUse className="size-4" />
      </Button>
      {children}
    </pre>
  );
};

export default CodeBlock;
