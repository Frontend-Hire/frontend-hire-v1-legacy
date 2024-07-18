import FakeTabHeader from './FakeTabHeader';

type QuestionLayoutSkeletonProps = {
  cols?: number;
};

export default function QuestionLayoutSkeleton({
  cols,
}: QuestionLayoutSkeletonProps) {
  if (cols === 4) {
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

  return (
    <div className="grid h-full grid-cols-1 gap-2">
      <div className="animate-fh-pulse bg-[#151515]">
        <FakeTabHeader />
      </div>
    </div>
  );
}
