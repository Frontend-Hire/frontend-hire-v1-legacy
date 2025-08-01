import CustomHeading from '@/components/CustomHeading';
import { Button } from '@/components/ui/button';
import VisuallyHidden from '@/components/ui/visually-hidden';
import { getOSSProjectsFromLocal } from '@/lib/fetchLocalFiles';
import { getMetadata } from '@/lib/getMetadata';
import { OSS } from '@/types/OSS';
import { isNew } from '@/utils/date';
import { format } from 'date-fns';
import Link from 'next/link';

export const metadata = getMetadata({
  title: 'OSS | Frontend Hire',
  description:
    'Our attempt at giving folks real work experience with real projects.',
  canonical: '/oss',
});

export default async function OSS() {
  const OSSProjects = await getOSSProjectsFromLocal();

  return (
    <article className="flex flex-col gap-4">
      <CustomHeading
        title="OSS"
        subTitle="Our attempt at giving folks real work experience with real projects."
      />

      <div className="mb-4 space-y-4 rounded bg-card p-4 leading-relaxed">
        <p>
          The new module replaces the deprecated Projects module and is now
          called <strong>OSS (Open-Source Software)</strong>.
        </p>
        <p>
          This module supports real-world development by launching projects with
          initial issues for contributors. As users identify bugs and request
          features, the issues list grows, fostering ongoing improvements.
        </p>
        <p>
          Collaboration happens via{' '}
          <Link
            href="https://github.com/Frontend-Hire"
            className="underline transition-all hover:text-link"
            prefetch={false}
            target="_blank"
          >
            GitHub
          </Link>{' '}
          and{' '}
          <Link
            href="https://discord.gg/DWAVqksVtx"
            className="underline transition-all hover:text-link"
            prefetch={false}
            target="_blank"
          >
            Discord
          </Link>
          , offering an authentic OSS development experience.
        </p>
      </div>

      <VisuallyHidden>All OSS Projects</VisuallyHidden>
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {OSSProjects.map((project) => (
          <li key={project.id}>
            <Link prefetch={false} href={`oss/${project.id}`}>
              <OSSCard oss={project} />
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}

function OSSCard({ oss }: { oss: OSS }) {
  return (
    <article className="relative flex h-full scale-95 flex-col overflow-hidden rounded-md bg-card transition-all hover:scale-100">
      {isNew(oss.publishedOn) && (
        <div className="absolute right-0 top-0 bg-primary px-2 py-1 text-sm font-medium motion-safe:animate-fh-pulse">
          New Project
        </div>
      )}
      <div className="flex h-full flex-col gap-2 p-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-bold md:text-xl lg:text-2xl">
            {oss.title}
          </h2>
          <p className="text-sm font-medium">
            Started: {format(oss.publishedOn, 'do MMM yyyy')}
          </p>
        </div>

        <p className="line-clamp-3 grow text-sm">{oss.description}</p>
      </div>
    </article>
  );
}
