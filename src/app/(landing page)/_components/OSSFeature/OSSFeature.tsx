import VisuallyHidden from '@/components/ui/visually-hidden';
import { getOSSProjectsFromLocal } from '@/lib/fetchLocalFiles';
import { OSS } from '@/types/OSS';
import { isNew } from '@/utils/date';
import { format } from 'date-fns';
import Link from 'next/link';

export default async function OSSFeature() {
  const OSSProjects = await getOSSProjectsFromLocal();

  return (
    <>
      <VisuallyHidden>All OSS Projects</VisuallyHidden>
      <ul className="grid grid-cols-1 gap-2">
        {OSSProjects.map((project) => (
          <li key={project.id}>
            <Link prefetch={false} href={`oss/${project.id}`}>
              <OSSCard oss={project} />
            </Link>
          </li>
        ))}
      </ul>
    </>
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
          <h2 className="font-bold md:text-lg lg:text-xl">{oss.title}</h2>
          <p className="text-sm font-medium">
            Started: {format(oss.publishedOn, 'do MMM yyyy')}
          </p>
        </div>

        <p className="line-clamp-3 grow text-sm">{oss.description}</p>
      </div>
    </article>
  );
}
