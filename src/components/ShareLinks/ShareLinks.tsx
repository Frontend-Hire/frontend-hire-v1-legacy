'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LinkedinIcon, TwitterIcon } from 'lucide-react';
import VisuallyHidden from '../ui/visually-hidden';

export default function ShareLinks() {
  const pathname = usePathname();

  const link = `https://frontendhire.com${pathname}`;

  const twitterLink = `https://twitter.com/intent/tweet?text=${link}`;
  const linkedinLink = `https://www.linkedin.com/shareArticle?mini=true&url=${link}`;

  return (
    <ul className="not-prose flex flex-wrap gap-4">
      <li>
        <Link
          target="_blank"
          className="flex items-center gap-2 rounded-sm bg-primary p-1 transition-colors hover:opacity-90"
          href={twitterLink}
        >
          <VisuallyHidden>Twitter</VisuallyHidden>
          Share on <TwitterIcon />
        </Link>
      </li>
      <li>
        <Link
          target="_blank"
          className="flex items-center gap-2 rounded-sm bg-primary p-1 transition-colors hover:opacity-90"
          href={linkedinLink}
        >
          <VisuallyHidden>LinkedIn</VisuallyHidden>
          Share on <LinkedinIcon />
        </Link>
      </li>
    </ul>
  );
}
