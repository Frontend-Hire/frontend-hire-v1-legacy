import { getCoursePages } from '@/lib/fetchLocalFiles';
import ContentLayout from '@/components/ContentLayout';
import { getMetadata } from '@/lib/getMetadata';

type CourseMainLayoutProps = {
  params: {
    courseId: string;
  };
};

export async function generateMetadata({
  params,
}: {
  params: { courseId: string };
}) {
  const meta = await getCoursePages(params.courseId);

  return getMetadata({
    title: `${meta?.title || 'Course'} | Frontend Hire`,
    description: meta?.description,
    image: meta.image,
  });
}

export default async function CourseMainLayout({
  params,
  children,
}: React.PropsWithChildren<CourseMainLayoutProps>) {
  const { chapters } = await getCoursePages(params.courseId);

  return <ContentLayout chapters={chapters}>{children}</ContentLayout>;
}
