import Link from 'next/link';
import { LinkedinIcon, TwitterIcon } from 'lucide-react';
import VisuallyHidden from '../ui/visually-hidden';

type ShareLinksProps = {
  link: string;
};

export default function ShareLinks({ link }: ShareLinksProps) {
  const twitterLink = `https://twitter.com/intent/tweet?text=${link}`;
  const linkedinLink = `https://www.linkedin.com/shareArticle?mini=true&url=${link}`;

  return (
    <ul className="not-prose flex flex-wrap gap-4">
      <li>
        <Link
          prefetch={false}
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
          prefetch={false}
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
