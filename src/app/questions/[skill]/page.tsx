import DifficultyLegend from '@/components/DifficultyLegend';
import Heading from '@/components/Heading';
import QuestionItem from '@/components/QuestionItem';
import SkillDescription from '@/components/SkillDescription';
import { getQuestionsFromLocal } from '@/lib/fetchLocalFiles';
import fetchUserSubmissions from '@/lib/supabase/fetchUserSubmissions';
import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';

export const dynamic = 'force-dynamic';

export default async function Skill({ params }: { params: { skill: string } }) {
  const { skill } = params;

  const supabaseServerClient = createSupabaseServerClient();

  const {
    data: { session },
  } = await supabaseServerClient.auth.getSession();

  const [localQuestions, solvedQuestions] = await Promise.all([
    getQuestionsFromLocal(),
    session ? fetchUserSubmissions() : null,
  ]);

  const currentSkillData = localQuestions[skill].sort((a, b) =>
    a.difficulty.localeCompare(b.difficulty),
  );

  const checkQuestionCompletion = (questionId: string) => {
    if (!solvedQuestions) return false;

    return solvedQuestions.map((item) => item.question_id).includes(questionId);
  };

  return (
    <main className="h-full p-2">
      <Heading variant="h1" className="mb-4 text-center">
        {skill} Questions
      </Heading>
      <div className="mb-4 rounded-md bg-white p-1">
        <SkillDescription skill={skill} />
        <DifficultyLegend />
      </div>
      <div className="grid grid-cols-1 justify-center justify-items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3">
        {currentSkillData.map((question) => (
          <QuestionItem
            key={question.id}
            id={question.id}
            skill={skill}
            title={question.title}
            difficulty={question.difficulty}
            isCompleted={checkQuestionCompletion(question.id)}
            isFavorite={false}
          />
        ))}
      </div>
    </main>
  );
}
