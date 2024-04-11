'use client';

import React from 'react';
import { Button } from '../ui/button';
import { CheckIcon, CopyIcon } from 'lucide-react';

export default function CopyToClipboard({
  getValue,
}: {
  getValue: () => string;
} & React.ComponentProps<'button'>) {
  const [isCopied, setCopied] = React.useState(false);

  React.useEffect(() => {
    if (!isCopied) return;
    const timerId = setTimeout(() => {
      setCopied(false);
    }, 1500);

    return () => {
      clearTimeout(timerId);
    };
  }, [isCopied]);

  const handleClick = React.useCallback<
    NonNullable<React.ComponentProps<'button'>['onClick']>
  >(async () => {
    setCopied(true);
    if (!navigator?.clipboard) {
      console.error('Access to clipboard rejected!');
    }
    try {
      await navigator.clipboard.writeText(getValue());
    } catch {
      console.error('Failed to copy!');
    }
  }, [getValue]);

  const IconToUse = isCopied ? CheckIcon : CopyIcon;

  return (
    <Button
      size="icon"
      variant="outline"
      onClick={handleClick}
      title="Copy code"
      tabIndex={0}
    >
      <IconToUse className="size-4" />
    </Button>
  );
}
