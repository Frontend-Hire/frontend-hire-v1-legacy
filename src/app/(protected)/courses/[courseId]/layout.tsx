import ProtectedLayout from '@/components/ProtectedLayout';
import Sidebar from './_components/Sidebar';

type CourseMainLayoutProps = {
  params: {
    course: string[];
  };
};

export default function CourseMainLayout({
  params,
  children,
}: React.PropsWithChildren<CourseMainLayoutProps>) {
  return (
    <ProtectedLayout>
      <main className="container flex h-full gap-[30px] py-2 md:py-4">
        <Sidebar params={params} />
        {children}
      </main>
    </ProtectedLayout>
  );
}
