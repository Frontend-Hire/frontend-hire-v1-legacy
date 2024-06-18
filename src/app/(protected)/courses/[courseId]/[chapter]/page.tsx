import { getCoursePage, getCoursePages } from '@/lib/fetchLocalFiles';
import PremiumProtectedContentLayout from '@/components/PremiumProtectedContentLayout';
import ProtectedLayout from '@/components/ProtectedLayout';
import ContentArticleLayout from '@/components/ContentArticleLayout';

type ChapterPageProps = {
  params: {
    chapter: string;
    courseId: string;
  };
};

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
