import cn from 'clsx';
import type { ComponentProps, ReactElement } from 'react';

export function Steps({
  children,
  className,
  ...props
}: ComponentProps<'div'>): ReactElement {
  return (
    <div
      className={cn(
        'fh-steps mb-12 ml-4 border-l border-gray-200 pl-6',
        'border-neutral-800 [counter-reset:step]',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
