import { getCoursePages } from '@/lib/fetchLocalFiles';
import ContentLayout from '@/components/ContentLayout';

type CourseMainLayoutProps = {
  params: {
    courseId: string;
  };
};

export default async function CourseMainLayout({
  params,
  children,
}: React.PropsWithChildren<CourseMainLayoutProps>) {
  const { chapters } = await getCoursePages(params.courseId);

  return <ContentLayout chapters={chapters}>{children}</ContentLayout>;
}
