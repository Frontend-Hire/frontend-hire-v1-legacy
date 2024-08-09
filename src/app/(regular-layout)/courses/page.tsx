import CustomHeading from '@/components/CustomHeading';
import VisuallyHidden from '@/components/ui/visually-hidden';
import { getCoursesFromLocal } from '@/lib/fetchLocalFiles';
import { getMetadata } from '@/lib/getMetadata';
import Link from 'next/link';
import CourseCardItem from './_components/CourseCardItem';

export const metadata = getMetadata({
  title: 'Courses | Frontend Hire',
  description:
    'All courses in text, select ones in video. Free and paid options. All meant to make you a better developer.',
  canonical: '/courses',
});

export default async function CoursesPage() {
  const courses = await getCoursesFromLocal();

  return (
    <article className="flex flex-col gap-5">
      <CustomHeading
        title="Courses"
        subTitle="All courses in text, select ones in video. Free and paid options. All meant to make you a better developer."
      />

      <VisuallyHidden>Course List</VisuallyHidden>
      <ul className="grid justify-items-stretch gap-4 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 xl:grid-cols-4">
        {courses
          .filter((course) => course.isPublished)
          .map((course, index) => (
            <li key={index}>
              <Link prefetch={false} href={course.link}>
                <CourseCardItem {...course} />
              </Link>
            </li>
          ))}
      </ul>
    </article>
  );
}
