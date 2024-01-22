import { getQuestionsFromLocal } from '@/lib/fetchLocalFiles';
import { fetchUserQuestionSubmissions } from '@/lib/supabase/fetchUserSubmissions';
import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';
import { DIFFICULTY_ORDER } from '@/types/Question';
import QuestionFilters from './QuestionFilters';
import QuestionList from './QuestionList';

export default async function Container() {
  const supabaseServerClient = createSupabaseServerClient();

  const {
    data: { session },
  } = await supabaseServerClient.auth.getSession();

  const [localQuestions, solvedQuestions] = await Promise.all([
    getQuestionsFromLocal(),
    session ? fetchUserQuestionSubmissions() : undefined,
  ]);

  const currentSkillData = localQuestions.sort((a, b) => {
    return DIFFICULTY_ORDER[a.difficulty] - DIFFICULTY_ORDER[b.difficulty];
  });

  return (
    <>
      <QuestionFilters />
      <QuestionList
        questions={currentSkillData}
        solvedQuestions={solvedQuestions}
      />
    </>
  );
}
