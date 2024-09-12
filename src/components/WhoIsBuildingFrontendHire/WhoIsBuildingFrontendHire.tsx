import Image, { StaticImageData } from 'next/image';
import WHO_IS_BUILDING_FRONTEND_HIRE from './data';
import { GithubIcon, LinkIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import Link from 'next/link';
import VisuallyHidden from '../ui/visually-hidden';

export default function WhoIsBuildingFrontendHire() {
  return (
    <section className="container flex flex-col gap-10 pb-20">
      <h2 className="text-center text-3xl font-black">
        Who Is Building Frontend Hire?
      </h2>
      <div className="space-y-3">
        {WHO_IS_BUILDING_FRONTEND_HIRE?.map((person) => (
          <AuthorCard
            key={person.name}
            image={person.image}
            name={person.name}
            content={person.content}
            socials={<Socials {...person.socials} />}
          />
        ))}
      </div>
    </section>
  );
}

function AuthorCard({
  image,
  name,
  content,
  socials,
}: {
  image: StaticImageData;
  name: string;
  content: React.ReactNode;
  socials: React.ReactNode;
}) {
  return (
    <div className="space-y-4 text-pretty rounded bg-card p-4 leading-relaxed">
      <div className="float-right flex flex-col items-center gap-2 rounded-xl border pb-2">
        <Image
          className=" h-40 w-40 overflow-hidden rounded-xl"
          src={image}
          alt={`Portrait of ${name}`}
        />
        <span>{socials}</span>
      </div>
      <h3 className="text-2xl font-bold">{`Hi, I'm ${name}!`}</h3>
      {content}
    </div>
  );
}

function Socials({
  linkedIn,
  twitter,
  github,
  website,
}: {
  linkedIn?: string;
  twitter?: string;
  github?: string;
  website?: string;
}) {
  const socials = [
    { name: 'LinkedIn', url: linkedIn, icon: <LinkedinIcon size={20} /> },
    { name: 'Twitter', url: twitter, icon: <TwitterIcon size={20} /> },
    { name: 'GitHub', url: github, icon: <GithubIcon size={20} /> },
    { name: 'Website', url: website, icon: <LinkIcon size={20} /> },
  ];

  const filteredSocials = socials.filter((social) => social.url);

  return (
    filteredSocials.length > 0 && (
      <ul className="flex items-center gap-3 sm:gap-4">
        {filteredSocials.map((info) => (
          <li key={info.name}>
            <Link
              className="transition-colors hover:text-primary"
              target="_blank"
              prefetch={false}
              href={info.url!}
            >
              <VisuallyHidden>{info.name}</VisuallyHidden>
              {info.icon}
            </Link>
          </li>
        ))}
      </ul>
    )
  );
}
