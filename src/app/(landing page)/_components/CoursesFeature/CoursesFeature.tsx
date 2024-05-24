import Image, { StaticImageData } from 'next/image';
import { Badge } from '@/components/ui/badge';
import VisuallyHidden from '@/components/ui/visually-hidden';
import Link from 'next/link';
import { getCoursesFromLocal } from '@/lib/fetchLocalFiles';

export default async function CoursesFeature() {
  const courses = await getCoursesFromLocal();

  return (
    <>
      <VisuallyHidden>List of Courses</VisuallyHidden>
      <ul className="grid grid-cols-2 gap-4">
        {courses.map((course) => (
          <li key={course.link}>
            <CourseCardItem {...course} />
          </li>
        ))}
      </ul>
    </>
  );
}

type CourseCardItemProps = {
  link: string;
  title: string;
  image: StaticImageData;
  description: string;
  isVideoAvailable?: boolean;
  isPro: boolean;
};

function CourseCardItem({
  link,
  title,
  image,
  description,
  isPro,
  isVideoAvailable,
}: CourseCardItemProps) {
  return (
    <div className="flex h-full flex-col gap-2 overflow-hidden rounded-md bg-card">
      <Image placeholder="blur" src={image} alt={title} className="w-full" />
      <div className="flex h-full flex-col gap-2 p-4">
        <Link className="w-fit underline" prefetch={false} href={link}>
          <h2 className="text-base font-bold">{title}</h2>
        </Link>

        <p className="line-clamp-1 text-sm">{description}</p>
        <div className="flex flex-wrap items-center gap-2">
          {!isPro ? <Badge>Free</Badge> : <Badge>Pro</Badge>}
          {isVideoAvailable && (
            <Badge className="text-center">Video Available</Badge>
          )}
        </div>
      </div>
    </div>
  );
}
