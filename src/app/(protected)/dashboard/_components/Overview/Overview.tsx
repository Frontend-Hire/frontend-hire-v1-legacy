import { getQuestionsFromLocal } from '@/lib/fetchLocalFiles';
import SubmittedQuestions from './SubmittedQuestions';
import { fetchUserQuestionSubmissions } from '@/lib/supabase/fetchUserSubmissions';
import { getTotalQuestions } from '../../_utils/getTotalQuestions';
import SkillLevelStats from './SkillLevelStats';
import { getSubmittedSkillQuestions } from '../../_utils/getSubmittedSkillQuestions';

export const dynamic = 'force-dynamic';

export default async function Overview() {
  const [allQuestions, submittedQuestions] = await Promise.all([
    getQuestionsFromLocal(),
    fetchUserQuestionSubmissions(),
  ]);

  return (
    <div className="grid min-h-[300px] grid-cols-1 gap-4 rounded-md bg-white p-2 sm:grid-cols-2 md:grid-cols-3">
      <SubmittedQuestions
        submitted={submittedQuestions.length}
        total={getTotalQuestions(allQuestions)}
      />
      <SkillLevelStats
        skillStats={getSubmittedSkillQuestions(
          allQuestions,
          submittedQuestions,
        )}
      />
    </div>
  );
}
