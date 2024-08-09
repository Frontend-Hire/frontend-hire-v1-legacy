import { getCoursePage, getCoursePages } from '@/lib/fetchLocalFiles';
import PremiumProtectedContentLayout from '@/components/PremiumProtectedContentLayout';
import ProtectedLayout from '@/components/ProtectedLayout';
import ContentArticleLayout from '@/components/ContentArticleLayout';
import { getMetadata } from '@/lib/getMetadata';

type ChapterPageProps = {
  params: {
    chapter: string;
    courseId: string;
  };
};

export async function generateMetadata({ params }: ChapterPageProps) {
  const meta = await getCoursePages(params.courseId);

  return getMetadata({
    title: `${meta?.title || 'Course'} | Frontend Hire`,
    description: meta?.description,
    image: meta.image,
    canonical: `/courses/${params.courseId}/${params.chapter}`,
  });
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { chapters, isPro } = await getCoursePages(params.courseId);
  const { getContent, meta } = await getCoursePage(
    params.courseId,
    params.chapter,
  );

  const content = getContent() as React.ReactElement;

  return (
    <ProtectedLayout>
      {isPro ? (
        <PremiumProtectedContentLayout>
          <ContentArticleLayout
            content={content}
            chapters={chapters}
            lastUpdated={meta?.lastUpdated}
            currentChapter={params.chapter}
          />
        </PremiumProtectedContentLayout>
      ) : (
        <ContentArticleLayout
          content={content}
          chapters={chapters}
          lastUpdated={meta?.lastUpdated}
          currentChapter={params.chapter}
        />
      )}
    </ProtectedLayout>
  );
}
