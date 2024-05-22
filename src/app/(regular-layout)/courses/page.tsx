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
  },
  {
    title: 'Stackpack',
    description:
      'Build a Sandpack clone with WebContainers in React and TypeScript.',
    image: stackpackImg,
    isFree: true,
    link: 'courses/stackpack/overview',
  },
  {
    title: 'SEO for Frontend Developers',
    description: 'SEO is not just for marketers.',
    image: seoForFrontendDevelopers,
    link: 'courses/seo-for-frontend-developers/overview',
  },
  {
    title: 'Login Register Flow',
    description:
      'Learn how to build a login and register flow with E2E tests and Supabase.',
    image: loginRegisterFlow,
    link: 'courses/register-flow-with-e2e-tests/overview',
  },
  {
    title: 'Layout Shifts 101',
    description: 'These can be quite annoying.',
    image: layoutShifts101,
    link: 'courses/layout-shifts-101/overview',
  },
];

export default function CoursesPage() {
  return (
    <article className="flex flex-col gap-5">
      <CustomHeading
        title="Courses"
        subTitle="All courses in text, select ones in video. Free and paid options. All meant to make you a better developer."
      />

      <CourseBanner />

      <VisuallyHidden>Course List</VisuallyHidden>
      <ul className="grid justify-items-stretch gap-4 sm:grid-cols-2 sm:gap-8 md:grid-cols-3">
        {COURSES.map((course, index) => (
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
