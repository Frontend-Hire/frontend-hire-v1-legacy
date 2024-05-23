import CustomHeading from '@/components/CustomHeading';
import VisuallyHidden from '@/components/ui/visually-hidden';
import CourseCardItem from './_components/CourseCardItem';
import CourseBanner from '@/components/CourseBanner';
import { Metadata } from 'next';
import { openGraphShared } from '@/app/shared-metadata';
import todoAppReactTDDImg from '@/assets/course-covers/todo-app-react-tdd-typescript.webp';
import seoForFrontendDevelopers from '@/assets/course-covers/seo-for-frontend-developers.webp';
import stackpackImg from '@/assets/course-covers/stackpack.webp';
import layoutShifts101 from '@/assets/course-covers/layout-shifts-101.webp';
import loginRegisterFlow from '@/assets/course-covers/login-register-flow-e2e.webp';
import Link from 'next/link';
import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';

export const metadata: Metadata = {
  title: 'Courses | Frontend Hire',
  description: 'Live and recorded practical courses',
  openGraph: {
    ...openGraphShared,
    title: 'Courses | Frontend Hire',
    description: 'Live and recorded practical courses',
  },
};

const COURSES = [
  {
    title: 'Todo App',
    description:
      'We teach more than just React, TypeScript and TDD with this course.',
    image: todoAppReactTDDImg,
    isFree: true,
    isVideoAvailable: true,
    link: 'courses/todo-app-react/overview',
    isPublished: true,
    isPro: false,
  },
  {
    title: 'Stackpack',
    description:
      'Build a Sandpack clone with WebContainers in React and TypeScript.',
    image: stackpackImg,
    isFree: true,
    link: 'courses/stackpack/overview',
    isPublished: true,
    isPro: false,
  },
  {
    title: 'SEO for Frontend Developers',
    description: 'SEO is not just for marketers.',
    image: seoForFrontendDevelopers,
    link: 'courses/seo-for-frontend-developers/overview',
    isPublished: false,
    isPro: true,
  },
  {
    title: 'Login Register Flow',
    description:
      'Learn how to build a login and register flow with E2E tests and Supabase.',
    image: loginRegisterFlow,
    link: 'courses/register-flow-with-e2e-tests/overview',
    isPublished: true,
    isPro: true,
  },
  {
    title: 'Layout Shifts 101',
    description: 'These can be quite annoying.',
    image: layoutShifts101,
    link: 'courses/layout-shifts-101/overview',
    isPublished: false,
    isPro: true,
  },
];

export default async function CoursesPage() {
  const supabaseServerClient = createSupabaseServerClient();

  const { data } = await supabaseServerClient
    .from('users')
    .select('has_pro_access')
    .limit(1)
    .single();

  console.log(data?.has_pro_access);

  return (
    <article className="flex flex-col gap-5">
      <CustomHeading
        title="Courses"
        subTitle="All courses in text, select ones in video. Free and paid options. All meant to make you a better developer."
      />

      <CourseBanner />

      <VisuallyHidden>Course List</VisuallyHidden>
      <ul className="grid justify-items-stretch gap-4 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 xl:grid-cols-4">
        {COURSES.filter((course) => course.isPublished)
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
