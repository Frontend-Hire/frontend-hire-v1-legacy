import CustomHeading from '@/components/CustomHeading';
import VisuallyHidden from '@/components/ui/visually-hidden';
import CourseCardItem from './_components/CourseCardItem';
import hruthikImage from '@/assets/team/hruthikReddyInterviewer.jpeg';

export default function CoursesPage() {
  return (
    <main className="flex flex-col gap-[20px] p-[10px] md:px-[100px] md:py-[20px] lg:px-[200px] xl:px-[250px]">
      <CustomHeading
        title="Courses"
        subTitle="Live and pre-recorded practical focused courses"
      />

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
            isFreeCourseMaterialAvailable
            liveLink="https://topmate.io/iamyhr/730371"
          />
        </li>
      </ul>
    </main>
  );
}
