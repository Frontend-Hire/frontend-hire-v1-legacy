import { getTotalQuestionsFromLocal } from '@/lib/fetchLocalFiles';
import SubmittedQuestions from './SubmittedQuestions';

export default async function Overview() {
  const totalQuestions = await getTotalQuestionsFromLocal();

  return (
    <div className="grid h-[300px] grid-cols-1 rounded-md bg-white p-2 sm:grid-cols-2 md:grid-cols-3">
      <SubmittedQuestions submitted={3} total={totalQuestions} />
    </div>
  );
}
