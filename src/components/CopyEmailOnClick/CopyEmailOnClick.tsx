'use client';

import { ClipboardCopyIcon, ClipboardIcon } from 'lucide-react';
import React from 'react';
import { useCopyToClipboard } from 'usehooks-ts';

type CopyEmailOnClickProps = {
  email: string;
};

export default function CopyEmailOnClick({ email }: CopyEmailOnClickProps) {
  const [copiedText, copy] = useCopyToClipboard();
  const [showCopiedIcon, setShowCopiedIcon] = React.useState(false);

  const handleCopy = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    copy(email);
    setShowCopiedIcon(true);
    setTimeout(() => {
      setShowCopiedIcon(false);
    }, 2000);
  };

  return (
    <span title="Copy Email" className="group relative inline-flex text-ring">
      <span className="absolute -top-2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 rounded bg-card p-0.5 text-center text-xs font-medium group-hover:inline">
        {showCopiedIcon ? 'Copied!' : 'Click to copy'}
      </span>
      <a
        onClick={handleCopy}
        href={`mailto:${email}`}
        className="inline-flex items-center text-ring underline underline-offset-2"
      >
        {email}
        {showCopiedIcon ? (
          <ClipboardCopyIcon size={16} />
        ) : (
          <ClipboardIcon size={16} />
        )}
      </a>
    </span>
  );
}
