import { getQuestionsFromLocal } from '@/lib/fetchLocalFiles';
import { fetchUserQuestionSubmissions } from '@/lib/supabase/fetchUserSubmissions';
import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';
import { DIFFICULTY_ORDER } from '@/types/Question';
import QuestionFilters from './QuestionFilters';
import QuestionList from './QuestionList';

export default async function Container() {
  const supabaseServerClient = createSupabaseServerClient();

  const {
    data: { user },
  } = await supabaseServerClient.auth.getUser();

  const [localQuestions, solvedQuestions] = await Promise.all([
    getQuestionsFromLocal(),
    user ? fetchUserQuestionSubmissions() : undefined,
  ]);

  return (
    <>
      <QuestionFilters />
      <QuestionList
        questions={localQuestions}
        solvedQuestions={solvedQuestions}
      />
    </>
  );
}
