import { getCoursePage } from '@/lib/fetchLocalFiles';

type ChapterPageProps = {
  params: {
    chapter: string;
    courseId: string;
  };
};

export default async function ChapterPage({ params }: ChapterPageProps) {
  const page = await getCoursePage(params.courseId, params.chapter);

  return (
    <article className="prose prose-invert mx-auto py-[10px] prose-h2:mt-5">
      {page()}
    </article>
  );
}
