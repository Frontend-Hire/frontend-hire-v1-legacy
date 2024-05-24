import CustomHeading from '@/components/CustomHeading';
import VisuallyHidden from '@/components/ui/visually-hidden';
import CourseCardItem from './_components/CourseCardItem';
import CourseBanner from '@/components/CourseBanner';
import { Metadata } from 'next';
import { openGraphShared } from '@/app/shared-metadata';
import Link from 'next/link';
import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';
import { getCoursesFromLocal } from '@/lib/fetchLocalFiles';

export const metadata: Metadata = {
  title: 'Courses | Frontend Hire',
  description: 'Live and recorded practical courses',
  openGraph: {
    ...openGraphShared,
    title: 'Courses | Frontend Hire',
    description: 'Live and recorded practical courses',
  },
};

export default async function CoursesPage() {
  const supabaseServerClient = createSupabaseServerClient();

  const courses = await getCoursesFromLocal();

  const { data } = await supabaseServerClient
    .from('users')
    .select('has_pro_access')
    .limit(1)
    .single();

  return (
    <article className="flex flex-col gap-5">
      <CustomHeading
        title="Courses"
        subTitle="All courses in text, select ones in video. Free and paid options. All meant to make you a better developer."
      />

      <CourseBanner />

      <VisuallyHidden>Course List</VisuallyHidden>
      <ul className="grid justify-items-stretch gap-4 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 xl:grid-cols-4">
        {courses
          .filter((course) => course.isPublished)
          .filter(
            (course) => course.isPro === data?.has_pro_access || !course.isPro,
          )
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
