import { getCoursePage } from '@/lib/fetchLocalFiles';
import TOC from '../_components/TOC.tsx';
import slugify from 'slugify';

type ChapterPageProps = {
  params: {
    chapter: string;
    courseId: string;
  };
};

interface HeadingItem {
  title: string;
  id: string;
  level: number;
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const page = await getCoursePage(params.courseId, params.chapter);

  const content = page();

  let headings: HeadingItem[] = content.props.children
    .filter((i) => typeof i.type === 'function' && i.type.name.startsWith('h'))
    .map((i) => {
      const type = i.type.name;
      const title = i.props.children;
      const id = slugify(title, { lower: true, strict: true });
      return {
        title,
        id,
        level: parseInt(type.substring(1)),
      };
    });

  return (
    <>
      <article className="prose prose-invert mx-auto py-[10px] prose-h2:mt-5">
        {content}
      </article>
      <TOC headings={headings} />
    </>
  );
}
