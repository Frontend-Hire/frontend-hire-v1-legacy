import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Course } from '@/types/Course';
import CourseCategoryBadge from '@/components/CourseCategoryBadge';

export default function CourseCardItem({
  title,
  image,
  description,
  isPro,
  isVideoAvailable,
  category,
}: Course) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-md bg-card">
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
          {!isPro ? <Badge>Free</Badge> : <Badge>Pro</Badge>}
          {isVideoAvailable && <Badge>Video Available</Badge>}
          <CourseCategoryBadge category={category} />
        </div>
      </div>
    </div>
  );
}
