import Image, { StaticImageData } from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ExternalLinkIcon } from 'lucide-react';

type CourseCardItemProps = {
  title: string;
  author: { image: StaticImageData; name: string; headline: string };
  description: string;
  liveLink?: string;
  preRecordedLink?: string;
  freeCourseMaterial?: string;
};

export default function CourseCardItem({
  title,
  author,
  description,
  liveLink,
  preRecordedLink,
  freeCourseMaterial,
}: CourseCardItemProps) {
  return (
    <div className="flex flex-col gap-[10px] rounded bg-card p-[10px]">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="flex items-center gap-[10px]">
        <Image
          className="h-[60px] w-[60px] rounded-full"
          src={author.image}
          alt={author.name}
        />
        <div className="flex flex-col">
          <span className="font-bold">{author.name}</span>
          <span className="text-sm">{author.headline}</span>
        </div>
      </div>
      <p className="font-medium">{description}</p>
      <div className="flex flex-wrap items-center justify-between gap-[10px]">
        {freeCourseMaterial && (
          <Badge className="bg-secondary">
            <Link target="_blank" href={freeCourseMaterial}>
              Free Course Material
            </Link>
          </Badge>
        )}
        <div className="flex flex-wrap gap-[10px]">
          {liveLink && (
            <Button variant={preRecordedLink ? 'secondary' : 'default'} asChild>
              <Link href={liveLink}>
                Book Live <ExternalLinkIcon className="ml-2" />
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
