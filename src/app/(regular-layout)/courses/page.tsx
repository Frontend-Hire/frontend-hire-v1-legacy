import CustomHeading from '@/components/CustomHeading';
import VisuallyHidden from '@/components/ui/visually-hidden';
import CourseCardItem from './_components/CourseCardItem';
import hruthikImage from '@/assets/team/hruthikReddyInterviewer.jpeg';
import CourseBanner from '@/components/CourseBanner';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Courses | Frontend Hire',
  description: 'Live and recorded practical courses',
  openGraph: {
    title: 'Courses | Frontend Hire',
    description: 'Live and recorded practical courses',
  },
};

export default function CoursesPage() {
  return (
    <article className="flex flex-col gap-[20px]">
      <CustomHeading
        title="Courses"
        subTitle="Live and recorded practical courses"
      />

      <CourseBanner />

      <VisuallyHidden>Course List</VisuallyHidden>
      <ul className="flex flex-col gap-[20px]">
        <li>
          <CourseCardItem
            title="Todo App with React, TypeScript and TDD"
            author={{
              image: hruthikImage,
              name: 'Hruthik Reddy',
              headline: 'Frontend Hire',
            }}
            description="Todo apps are a great way to learn a new language or framework. We teach this course with more than just React. You would learn about a good React project setup, hooks, component composition and testing."
            freeCourseMaterial="https://courses.frontendhire.com/todo-app/react"
            preRecordedLink="https://youtube.com/playlist?list=PLGQzf3dS9UqM7dLaYF6OMyGGqPG9lWDXy&feature=shared"
            liveLink="https://topmate.io/iamyhr/730371"
          />
        </li>
      </ul>
    </article>
  );
}
