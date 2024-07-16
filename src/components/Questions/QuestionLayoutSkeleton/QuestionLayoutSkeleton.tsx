import { QUESTION_TYPE } from '@/types/Question';
import FakeTabHeader from './FakeTabHeader';

type QuestionLayoutSkeletonProps = {
  questionType?: QUESTION_TYPE;
};

export default function QuestionLayoutSkeleton({
  questionType = QUESTION_TYPE.CODING,
}: QuestionLayoutSkeletonProps) {
  if (questionType === QUESTION_TYPE.CODING) {
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
