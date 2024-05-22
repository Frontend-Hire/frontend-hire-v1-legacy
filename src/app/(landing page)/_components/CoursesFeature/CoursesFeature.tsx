import Image, { StaticImageData } from 'next/image';
import { Badge } from '@/components/ui/badge';
import VisuallyHidden from '@/components/ui/visually-hidden';
import Link from 'next/link';
import todoAppReactTDDImg from '@/assets/course-covers/todo-app-react-tdd-typescript.webp';
import stackpackImg from '@/assets/course-covers/stackpack.webp';

export default function CoursesFeature() {
  return (
    <>
      <VisuallyHidden>List of Courses</VisuallyHidden>
      <ul className="flex gap-4">
        <li>
          <CourseCardItem
            link="courses/todo-app-react/overview"
            image={todoAppReactTDDImg}
            title="Todo App"
            description="We teach more than just React, TypeScript and TDD with this course."
            isFree
            isVideoAvailable
          />
        </li>
        <li>
          <CourseCardItem
            link="courses/stackpack/overview"
            image={stackpackImg}
            title="Stackpack"
            description="Build a Sandpack clone with WebContainers in React and TypeScript."
            isFree
          />
        </li>
      </ul>
    </>
  );
}

type CourseCardItemProps = {
  link: string;
  title: string;
  image: StaticImageData;
  description: string;
  isVideoAvailable?: boolean;
  isFree?: boolean;
};

function CourseCardItem({
  link,
  title,
  image,
  description,
  isFree,
  isVideoAvailable,
}: CourseCardItemProps) {
  return (
    <div className="flex h-full flex-col gap-2 overflow-hidden rounded-md bg-card">
      <Image placeholder="blur" src={image} alt={title} className="w-full" />
      <div className="flex h-full flex-col gap-2 p-4">
        <Link className="w-fit underline" prefetch={false} href={link}>
          <h2 className="text-lg font-bold">{title}</h2>
        </Link>

        <p className="line-clamp-2 text-sm">{description}</p>
        <div className="flex flex-wrap items-center gap-2">
          {isFree && <Badge>Free</Badge>}
          {isVideoAvailable && <Badge>Video Available</Badge>}
        </div>
      </div>
    </div>
  );
}
