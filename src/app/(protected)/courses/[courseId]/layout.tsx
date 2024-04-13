import ProtectedLayout from '@/components/ProtectedLayout';
import Sidebar from './_components/Sidebar';
import { getCoursePages } from '@/lib/fetchLocalFiles';

type CourseMainLayoutProps = {
  params: {
    courseId: string;
  };
};

export default async function CourseMainLayout({
  params,
  children,
}: React.PropsWithChildren<CourseMainLayoutProps>) {
  const pages = await getCoursePages(params.courseId);

  return (
    <ProtectedLayout>
      <main className="container flex h-full flex-col gap-4 py-2 md:flex-row md:gap-[30px] md:py-4">
        <Sidebar pages={pages} />
        {children}
      </main>
    </ProtectedLayout>
  );
}
