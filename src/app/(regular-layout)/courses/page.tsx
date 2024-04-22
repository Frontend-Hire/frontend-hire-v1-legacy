import CustomHeading from '@/components/CustomHeading';
import VisuallyHidden from '@/components/ui/visually-hidden';
import CourseCardItem from './_components/CourseCardItem';
import CourseBanner from '@/components/CourseBanner';
import { Metadata } from 'next';
import { openGraphShared } from '@/app/shared-metadata';
import layoutShifts101Img from './_assets/layout-shifts-101-banner.png';
import todoAppReactTDDImg from './_assets/todo-app-react-tdd-typescript.webp';
import stackpackImg from './_assets/stackpack.webp';
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
          <Link href="courses/todo-app-react/overview">
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
          <Link href="courses/layout-shifts-101/overview">
            <CourseCardItem
              image={layoutShifts101Img}
              title="Layout Shifts 101"
              description="Master the art of optimistic UI changes and maintaining the visual confortability of the user."
            />
          </Link>
        </li>
        <li>
          <Link href="courses/stackpack/overview">
            <CourseCardItem
              image={stackpackImg}
              title="Stackpack"
              description="Build a Sandpack clone with WebContainers in React and TypeScript."
              isFree
            />
          </Link>
        </li>
      </ul>
    </article>
  );
}
