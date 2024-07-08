import FakeTabHeader from './FakeTabHeader';

export default function QuestionLayoutSkeleton() {
  return (
    <div className="grid h-full grid-cols-2 grid-rows-2 gap-2">
      <div className="animate-fh-pulse bg-[#151515]">
        <FakeTabHeader />
      </div>
      <div className="animate-fh-pulse bg-[#151515]">
        <FakeTabHeader />
      </div>
      <div className="animate-fh-pulse bg-[#151515]">
        <FakeTabHeader />
      </div>
      <div className="animate-fh-pulse bg-[#151515]">
        <FakeTabHeader />
      </div>
    </div>
  );
}
