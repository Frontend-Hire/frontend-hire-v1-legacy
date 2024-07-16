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
          getValue={() => {
            const codeElement = preRef.current?.querySelector('code');
            if (codeElement) {
              let content = '';
              let lastNodeWasElement = false;

              codeElement.childNodes.forEach((node) => {
                if (node.nodeType === Node.TEXT_NODE) {
                  const text = node.textContent?.trim() || '';
                  if (text) {
                    content += (lastNodeWasElement ? '\n' : '') + text;
                    lastNodeWasElement = false;
                  }
                } else if (node.nodeType === Node.ELEMENT_NODE) {
                  const element = node as Element;
                  if (
                    !(
                      element.classList.contains('diff') &&
                      element.classList.contains('remove')
                    )
                  ) {
                    const text = element.textContent;
                    if (text) {
                      content += (content ? '\n' : '') + text;
                      lastNodeWasElement = true;
                    }
                  }
                }
              });
              return content.trim();
            }
            return '';
          }}
        />
      </div>
    </div>
  );
}
