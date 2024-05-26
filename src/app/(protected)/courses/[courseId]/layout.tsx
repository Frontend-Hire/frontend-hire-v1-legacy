import ProtectedLayout from '@/components/ProtectedLayout';
import Sidebar from './_components/Sidebar';
import { getCoursePages } from '@/lib/fetchLocalFiles';
import PremiumProtectedContentLayout from '@/components/PremiumProtectedContentLayout';
import { Metadata } from 'next';

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
  const { chapters, isPro } = await getCoursePages(params.courseId);

  return (
    <ProtectedLayout>
      <main className="container flex h-full flex-col gap-4 py-2 md:flex-row md:gap-[30px] md:py-4">
        <Sidebar pages={Object.entries(chapters)} />

        {isPro ? (
          <PremiumProtectedContentLayout>
            {children}
          </PremiumProtectedContentLayout>
        ) : (
          children
        )}
      </main>
    </ProtectedLayout>
  );
}
