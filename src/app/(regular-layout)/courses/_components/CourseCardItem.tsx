import Image, { StaticImageData } from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ExternalLinkIcon } from 'lucide-react';

type CourseCardItemProps = {
  id: string;
  title: string;
  author: { image: StaticImageData; name: string; headline: string };
  description: string;
  liveLink?: string;
  preRecordedLink?: string;
  freeCourseMaterial?: string;
};

export default function CourseCardItem({
  id,
  title,
  author,
  description,
  liveLink,
  preRecordedLink,
  freeCourseMaterial,
}: CourseCardItemProps) {
  return (
    <div className="flex flex-col gap-2 rounded rounded-md border border-primary bg-card bg-muted p-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="mb-4 flex items-center gap-2">
        <Image
          className="size-10 rounded-full"
          src={author.image}
          alt={author.name}
        />
        <div className="flex flex-col">
          <span className="font-bold">{author.name}</span>
          <span className="text-sm text-zinc-400">{author.headline}</span>
        </div>
      </div>
      <p className="text-sm">{description}</p>
      <div className="flex flex-wrap items-center justify-between gap-[10px]">
        {freeCourseMaterial && (
          <Button variant="secondary" asChild>
            <Link href={'/courses/' + id}>Free Course Material</Link>
          </Button>
        )}
        <div className="flex items-center justify-around gap-2">
          {liveLink && (
            <Button
              variant={preRecordedLink ? 'secondary' : 'default'}
              asChild
              className="flex items-center gap-x-2"
            >
              <Link href={liveLink}>
                Book Live <ExternalLinkIcon className="size-4" />
              </Link>
            </Button>
          )}
          {preRecordedLink && (
            <Button asChild>
              <Link href={preRecordedLink}>Watch Pre-recorded</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
