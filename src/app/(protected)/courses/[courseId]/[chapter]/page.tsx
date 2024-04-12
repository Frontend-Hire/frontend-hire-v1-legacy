import { getCoursePage } from '@/lib/fetchLocalFiles';
import TOC from '../_components/TOC.tsx';
import { useHeadings } from '../util/useHeadings.ts';

type ChapterPageProps = {
  params: {
    chapter: string;
    courseId: string;
  };
};

export default async function ChapterPage({ params }: ChapterPageProps) {
  const page = await getCoursePage(params.courseId, params.chapter);

  const content = page();
  const headings = useHeadings(content.props.children);

  return (
    <>
      <article className="prose prose-invert mx-auto py-[10px] prose-h2:mt-5">
        {content}
      </article>
      <TOC headings={headings} />
    </>
  );
}
