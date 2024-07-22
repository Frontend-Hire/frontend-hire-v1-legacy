import { getCohortPage, getCohortPages } from '@/lib/fetchLocalFiles';
import PremiumProtectedContentLayout from '@/components/PremiumProtectedContentLayout';
import ProtectedLayout from '@/components/ProtectedLayout';
import ContentArticleLayout from '@/components/ContentArticleLayout';

type ChapterPageProps = {
  params: {
    chapter: string;
    cohortId: string;
  };
};

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { chapters, isPro } = await getCohortPages(params.cohortId);
  const { getContent, meta } = await getCohortPage(
    params.cohortId,
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
