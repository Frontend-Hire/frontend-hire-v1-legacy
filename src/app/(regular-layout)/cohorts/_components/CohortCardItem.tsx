import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Course } from '@/types/Course';
import { isNew } from '@/utils/date';

export default function CohortCardItem({
  title,
  image,
  description,
  isPro,
  publishedOn,
}: Course) {
  return (
    <div className="relative flex h-full max-w-md scale-95 flex-col overflow-hidden rounded-md bg-card transition-all hover:scale-100">
      {isNew(publishedOn) && (
        <div className="absolute right-0 top-0 bg-primary px-2 py-1 text-sm font-medium motion-safe:animate-fh-pulse">
          New Cohort
        </div>
      )}
      <Image
        priority
        placeholder="blur"
        src={image}
        alt={title}
        className="w-full"
      />
      <div className="flex h-full flex-col gap-2 p-4">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-lg font-bold md:text-xl lg:text-2xl">{title}</h2>
        </div>

        <p className="line-clamp-3 grow text-sm">{description}</p>
        <div className="flex flex-wrap items-center gap-2">
          {!isPro ? <Badge>Free</Badge> : <Badge>Pro</Badge>}
        </div>
      </div>
    </div>
  );
}
