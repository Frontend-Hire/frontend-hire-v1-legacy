import { getCoursePages } from '@/lib/fetchLocalFiles';
import { Metadata } from 'next';
import ContentLayout from '@/components/ContentLayout';

type CourseMainLayoutProps = {
  params: {
    courseId: string;
  };
};

export async function generateMetadata({
  params,
}: {
  params: { courseId: string };
}): Promise<Metadata> {
  const meta = await getCoursePages(params.courseId);
  return {
    title: `${meta?.title || 'Course'} | Frontend Hire`,
    description: meta?.description,
    twitter: {
      title: `${meta?.title || 'Course'} | Frontend Hire`,
      description: meta?.description,
      images: {
        url: meta.image.src,
        width: meta.image.width,
        height: meta.image.height,
      },
    },
    openGraph: {
      title: `${meta?.title || 'Course'} | Frontend Hire`,
      description: meta?.description,
      images: {
        url: meta.image.src,
        width: meta.image.width,
        height: meta.image.height,
      },
    },
  };
}

export default async function CourseMainLayout({
  params,
  children,
}: React.PropsWithChildren<CourseMainLayoutProps>) {
  const { chapters } = await getCoursePages(params.courseId);

  return <ContentLayout chapters={chapters}>{children}</ContentLayout>;
}
