import Heading from '@/components/Heading';
import QuestionItem from '@/components/QuestionItem';
import VisuallyHidden from '@/components/ui/visually-hidden';
import { getQuestionsFromLocal } from '@/lib/fetchLocalFiles';
import { fetchUserQuestionSubmissions } from '@/lib/supabase/fetchUserSubmissions';
import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';
import { DIFFICULTY_ORDER } from '@/types/Question';

export default async function Questions() {
  const supabaseServerClient = createSupabaseServerClient();

  const {
    data: { session },
  } = await supabaseServerClient.auth.getSession();

  const [localQuestions, solvedQuestions] = await Promise.all([
    getQuestionsFromLocal(),
    session ? fetchUserQuestionSubmissions() : null,
  ]);

  const currentSkillData = localQuestions.sort((a, b) => {
    return DIFFICULTY_ORDER[a.difficulty] - DIFFICULTY_ORDER[b.difficulty];
  });

  const checkQuestionCompletion = (questionId: string) => {
    if (!solvedQuestions) return false;

    return solvedQuestions.map((item) => item.question_id).includes(questionId);
  };

  return (
    <main className="flex flex-col gap-[20px] p-[10px] md:px-[100px] md:py-[20px] lg:px-[200px] xl:px-[250px]">
      <div className="flex flex-col gap-[15px] py-[10px]">
        <Heading variant="h1">Questions</Heading>
        <p className="text-sm text-muted">Real World And Interview Based</p>
      </div>
      <VisuallyHidden>Questions List</VisuallyHidden>
      <ul className="flex flex-col gap-[20px]">
        {currentSkillData.map((question) => (
          <li key={question.id}>
            <QuestionItem
              id={question.id}
              title={question.title}
              description={question.description}
              difficulty={question.difficulty}
              isCompleted={checkQuestionCompletion(question.id)}
              skills={question.skills}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
