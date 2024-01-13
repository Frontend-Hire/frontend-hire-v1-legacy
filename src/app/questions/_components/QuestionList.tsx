'use client';

import QuestionItem from '@/components/QuestionItem';
import VisuallyHidden from '@/components/ui/visually-hidden';
import { QuestionOverview } from '@/types/Question';
import QuestionFilters from './QuestionFilters';

type QuestionListProps = {
  questions: QuestionOverview[];
  solvedQuestions?: { question_id: string }[];
};

export default function QuestionList({
  questions,
  solvedQuestions = [],
}: QuestionListProps) {
  const checkQuestionCompletion = (questionId: string) => {
    if (!solvedQuestions) return false;

    return solvedQuestions.map((item) => item.question_id).includes(questionId);
  };

  return (
    <>
      <QuestionFilters />
      <VisuallyHidden>Questions List</VisuallyHidden>
      <ul className="flex flex-col gap-[20px]">
        {questions.map((question) => (
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
    </>
  );
}
