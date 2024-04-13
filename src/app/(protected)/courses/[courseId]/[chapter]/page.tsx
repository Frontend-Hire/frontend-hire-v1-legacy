import { getCoursePage } from '@/lib/fetchLocalFiles';
import TOC from '../_components/TOC';
import { getHeadings } from '../util/getHeadings';

type ChapterPageProps = {
  params: {
    chapter: string;
    courseId: string;
  };
};

export default async function ChapterPage({ params }: ChapterPageProps) {
  const page = await getCoursePage(params.courseId, params.chapter);

  const content = page();
  const headings = getHeadings((content as any).props.children);

  return (
    <div className="flex gap-[30px]">
      <article className="prose prose-invert w-full max-w-none py-[10px] prose-h2:mt-5">
        {content}
      </article>
      <TOC headings={headings} />
    </div>
  );
}
