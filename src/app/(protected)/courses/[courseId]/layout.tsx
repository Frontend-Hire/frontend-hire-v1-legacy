import Sidebar from './_components/Sidebar';
import { getCoursePages } from '@/lib/fetchLocalFiles';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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

  return (
    <>
      <Header />
      <main className="md:gap8 container flex h-full flex-col gap-4 py-2 md:flex-row md:py-4">
        <Sidebar pages={Object.entries(chapters)} />

        {children}
      </main>
      <Footer isCompact />
    </>
  );
}
