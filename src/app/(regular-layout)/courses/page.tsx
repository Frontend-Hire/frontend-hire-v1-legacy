import CustomHeading from '@/components/CustomHeading';
import VisuallyHidden from '@/components/ui/visually-hidden';
import CourseCardItem from './_components/CourseCardItem';
import CourseBanner from '@/components/CourseBanner';
import { Metadata } from 'next';
import { openGraphShared } from '@/app/shared-metadata';
import todoAppReactTDDImg from '@/assets/course-covers/todo-app-react-tdd-typescript.webp';
import stackpackImg from '@/assets/course-covers/stackpack.webp';
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
        <li>
          <Link prefetch={false} href="courses/todo-app-react/overview">
            <CourseCardItem
              image={todoAppReactTDDImg}
              title="Todo App"
              description="We teach more than just React, TypeScript and TDD with this course."
              isFree
              isVideoAvailable
            />
          </Link>
        </li>
        <li>
          <Link prefetch={false} href="courses/stackpack/overview">
            <CourseCardItem
              image={stackpackImg}
              title="Stackpack"
              description="Build a Sandpack clone with WebContainers in React and TypeScript."
              isFree
            />
          </Link>
        </li>
        <li>
          <Link href="courses/sign-up-flow-with-e2e-tests/overview">
            <CourseCardItem
              image={loginRegisterFlow}
              title="Login Register Flow"
              description="Learn how to build a login and register flow with E2E tests and Supabase."
            />
          </Link>
        </li>
      </ul>
    </article>
  );
}
