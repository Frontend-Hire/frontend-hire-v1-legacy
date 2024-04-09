import Sidebar from './_components/Sidebar.tsx';
import Article from './_components/Article.tsx';
import TOC from './_components/TOC.tsx';

export default function () {
  return (
    <div className="items-top relative flex justify-around gap-4">
      <Sidebar />
      <Article />
      <TOC />
    </div>
  );
}
