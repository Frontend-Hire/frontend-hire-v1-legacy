import { getQuestionsFromLocal } from '@/lib/fetchLocalFiles';
import SubmittedQuestions from './SubmittedQuestions';
import fetchUserSubmissions from '@/lib/supabase/fetchUserSubmissions';
import { getTotalQuestions } from '../../_utils/getTotalQuestions';

export const dynamic = 'force-dynamic';

export default async function Overview() {
  const [allQuestions, submittedQuestions] = await Promise.all([
    getQuestionsFromLocal(),
    fetchUserSubmissions(),
  ]);

  return (
    <div className="grid min-h-[300px] grid-cols-1 gap-4 rounded-md bg-white p-2 sm:grid-cols-2 md:grid-cols-3">
      <SubmittedQuestions
        submitted={submittedQuestions.length}
        total={getTotalQuestions(allQuestions)}
      />
      <div className="flex h-full flex-col items-center justify-center rounded-sm bg-gray-300 text-center">
        <p className="text-lg font-medium">Skill Level Stats</p>
      </div>
    </div>
  );
}
