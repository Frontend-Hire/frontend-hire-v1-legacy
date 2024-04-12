'use client';

import React from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

type CodeBlockProps = {
  preProps: React.HTMLAttributes<HTMLPreElement>;
};

const CodeBlock = ({
  children,
  preProps,
}: React.PropsWithChildren<CodeBlockProps>) => {
  const [isCopied, setCopied] = React.useState(false);

  React.useEffect(() => {
    if (!isCopied) return;

    const timerId = setTimeout(() => {
      setCopied(false);
    }, 600);

    return () => {
      clearTimeout(timerId);
    };
  }, [isCopied]);

  const handleClick = React.useCallback<
    NonNullable<React.ComponentPropsWithoutRef<'button'>['onClick']>
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
    <pre {...preProps} className="relative">
      <Button
        variant="outline"
        className="absolute right-0 top-0 m-1"
        size="icon"
        onClick={handleClick}
      >
        <IconToUse className="size-4" />
      </Button>
      {children}
    </pre>
  );
};

export default CodeBlock;
