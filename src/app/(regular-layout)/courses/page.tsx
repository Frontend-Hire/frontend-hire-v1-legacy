import CustomHeading from '@/components/CustomHeading';
import VisuallyHidden from '@/components/ui/visually-hidden';
import CourseCardItem from './_components/CourseCardItem';
import CourseBanner from '@/components/CourseBanner';
import { Metadata } from 'next';
import { openGraphShared } from '@/app/shared-metadata';
import todoAppReactTDDImg from './_assets/todo-app-react-tdd-typescript.png';
import layoutShifts101Img from './_assets/layout-shifts-101-banner.png';
import tddTodoImg from './_assets/tdd-todo-banner.png';
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
      <ul className="grid justify-items-stretch gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        <li>
          <Link href="courses/todo-app-react/overview">
            <CourseCardItem
              image={tddTodoImg}
              title="Todo App with React, TypeScript and TDD"
              description="Todo apps are a great way to learn a new language or framework. We teach this course with more than just React. You would learn about a good React project setup, hooks, component composition and testing."
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
              isFree
              isVideoAvailable
            />
          </Link>
        </li>
      </ul>
    </article>
  );
}
