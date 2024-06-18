import { GithubIcon, LinkIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import VisuallyHidden from '../ui/visually-hidden';

type TeamMemberProps = {
  name: string;
  headline: string;
  linkedIn?: string;
  twitter?: string;
  github?: string;
  website?: string;
  image: StaticImageData;
};

export default function TeamMember({
  name,
  linkedIn,
  twitter,
  github,
  website,
  image,
  headline,
}: TeamMemberProps) {
  const socials = [
    { name: 'LinkedIn', url: linkedIn, icon: <LinkedinIcon size={20} /> },
    { name: 'Twitter', url: twitter, icon: <TwitterIcon size={20} /> },
    { name: 'GitHub', url: github, icon: <GithubIcon size={20} /> },
    { name: 'Website', url: website, icon: <LinkIcon size={20} /> },
  ];

  const filteredSocials = socials.filter((social) => social.url);

  return (
    <section className="not-prose mt-2 flex flex-col justify-between gap-4 rounded bg-card p-2 xs:flex-row">
      <div className="flex items-center gap-2">
        <Image src={image} alt={name} className="aspect-square w-16" />
        <div className="flex flex-col gap-0.5">
          <h2 className="font-medium">{name}</h2>
          <p className="text-xs xs:text-sm">{headline}</p>
        </div>
      </div>
      {filteredSocials.length > 0 && (
        <ul className="flex items-center gap-3 sm:gap-4">
          {filteredSocials.map((info) => (
            <li key={info.name}>
              <Link
                className="transition-colors hover:text-primary"
                target="_blank"
                href={info.url!}
              >
                <VisuallyHidden>{info.name}</VisuallyHidden>
                {info.icon}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
