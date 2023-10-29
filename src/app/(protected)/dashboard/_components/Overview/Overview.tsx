import { getTotalQuestionsFromLocal } from '@/lib/fetchLocalFiles';
import SubmittedQuestions from './SubmittedQuestions';
import fetchUserSubmissions from '@/lib/supabase/fetchUserSubmissions';

export default async function Overview() {
  const [totalQuestions, submittedQuestions] = await Promise.all([
    getTotalQuestionsFromLocal(),
    fetchUserSubmissions(),
  ]);

  return (
    <div className="grid h-[300px] grid-cols-1 rounded-md bg-white p-2 sm:grid-cols-2 md:grid-cols-3">
      <SubmittedQuestions
        submitted={submittedQuestions.length}
        total={totalQuestions}
      />
    </div>
  );
}
