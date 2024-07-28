import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import VisuallyHidden from '@/components/ui/visually-hidden';
import Link from 'next/link';
import { getCoursesFromLocal } from '@/lib/fetchLocalFiles';
import CourseCategoryBadge from '@/components/CourseCategoryBadge';
import { Course } from '@/types/Course';
import { isNew } from '@/utils/date';

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

function CourseCardItem({
  link,
  title,
  image,
  description,
  isPro,
  category,
  publishedOn,
}: Course) {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-md bg-card">
      {isNew(publishedOn) && (
        <div className="absolute right-0 top-0 bg-primary px-1 py-0.5 text-xs font-medium motion-safe:animate-fh-pulse">
          New Course
        </div>
      )}
      <Image placeholder="blur" src={image} alt={title} className="w-full" />
      <div className="flex h-full flex-col gap-2 p-4">
        <Link className="w-fit underline" prefetch={false} href={link}>
          <h2 className="text-base font-bold">{title}</h2>
        </Link>

        <p className="line-clamp-1 text-sm">{description}</p>
        <div className="flex flex-wrap items-center gap-1 sm:gap-2">
          {!isPro ? <Badge>Free</Badge> : <Badge>Pro</Badge>}
          <CourseCategoryBadge category={category} />
        </div>
      </div>
    </div>
  );
}
