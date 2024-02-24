import FakeTabHeader from './FakeTabHeader';

export default function QuestionLayoutSkeleton() {
  return (
    <div className="grid h-full grid-cols-2 grid-rows-2 gap-[10px] px-[10px]">
      <div className="animate-pulse bg-[#151515]">
        <FakeTabHeader />
      </div>
      <div className="animate-pulse bg-[#151515]">
        <FakeTabHeader />
      </div>
      <div className="animate-pulse bg-[#151515]">
        <FakeTabHeader />
      </div>
      <div className="animate-pulse bg-[#151515]">
        <FakeTabHeader />
      </div>
    </div>
  );
}
