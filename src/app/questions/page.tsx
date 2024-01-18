import Heading from '@/components/Heading';
import { getQuestionsFromLocal } from '@/lib/fetchLocalFiles';
import { fetchUserQuestionSubmissions } from '@/lib/supabase/fetchUserSubmissions';
import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';
import { DIFFICULTY_ORDER } from '@/types/Question';
import { Metadata } from 'next';
import QuestionList from './_components/QuestionList';
import QuestionFilters from './_components/QuestionFilters';

export const metadata: Metadata = {
  title: 'Questions | Frontend Hire',
  description: 'Real World And Interview Based Questions',
};

export default async function Questions() {
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
    <main className="flex flex-col gap-[20px] p-[10px] md:px-[100px] md:py-[20px] lg:px-[200px] xl:px-[250px]">
      <div className="flex flex-col gap-[15px] py-[10px]">
        <Heading variant="h1">Questions</Heading>
        <p className="text-sm text-muted">Real World And Interview Based</p>
      </div>
      <QuestionFilters />
      <QuestionList
        questions={currentSkillData}
        solvedQuestions={solvedQuestions}
      />
    </main>
  );
}
