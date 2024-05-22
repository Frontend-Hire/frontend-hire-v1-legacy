import Image, { StaticImageData } from 'next/image';
import { Badge } from '@/components/ui/badge';

type CourseCardItemProps = {
  title: string;
  image: StaticImageData;
  description: string;
  isVideoAvailable?: boolean;
  isFree?: boolean;
};

export default function CourseCardItem({
  title,
  image,
  description,
  isFree,
  isVideoAvailable,
}: CourseCardItemProps) {
  return (
    <div className="flex h-full flex-col gap-2 overflow-hidden rounded-md bg-card">
      <Image
        priority
        placeholder="blur"
        src={image}
        alt={title}
        className="w-full"
      />
      <div className="flex h-full flex-col gap-2 p-4">
        <h2 className="text-lg font-bold md:text-xl lg:text-2xl">{title}</h2>

        <p className="line-clamp-3 grow text-sm">{description}</p>
        <div className="flex flex-wrap items-center gap-2">
          {isFree ? <Badge>Free</Badge> : <Badge>Pro</Badge>}
          {isVideoAvailable && <Badge>Video Available</Badge>}
        </div>
      </div>
    </div>
  );
}
