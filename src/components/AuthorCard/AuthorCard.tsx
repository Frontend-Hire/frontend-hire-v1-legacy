import { GithubIcon, LinkIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import VisuallyHidden from '../ui/visually-hidden';

type AuthorCardProps = {
  name: string;
  linkedIn?: string;
  twitter?: string;
  github?: string;
  website?: string;
  image: StaticImageData;
  lastUpdated: string;
};

export default function AuthorCard({
  name,
  linkedIn,
  twitter,
  github,
  website,
  image,
  lastUpdated,
}: AuthorCardProps) {
  const socials = [
    { name: 'LinkedIn', url: linkedIn, icon: <LinkedinIcon size={20} /> },
    { name: 'Twitter', url: twitter, icon: <TwitterIcon size={20} /> },
    { name: 'GitHub', url: github, icon: <GithubIcon size={20} /> },
    { name: 'Website', url: website, icon: <LinkIcon size={20} /> },
  ];

  const filteredSocials = socials.filter((social) => social.url);

  return (
    <section className="not-prose mt-2 flex justify-between border-b border-t">
      <div className="flex items-center gap-[8px]">
        <Image
          src={image}
          alt={name}
          className="h-[40px] w-[40px] rounded-full"
        />
        <div className="flex flex-col gap-[2px]">
          <h2 className="font-medium">{name}</h2>
          <p className="text-sm">{lastUpdated}</p>
        </div>
      </div>
      {filteredSocials.length > 0 && (
        <ul className="flex flex-wrap items-center gap-[12px] sm:gap-[16px]">
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
