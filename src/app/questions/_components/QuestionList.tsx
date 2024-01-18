'use client';

import React from 'react';
import { useQueryState } from 'nuqs';
import QuestionItem from '@/components/QuestionItem';
import VisuallyHidden from '@/components/ui/visually-hidden';
import { QuestionOverview } from '@/types/Question';

type QuestionListProps = {
  questions: QuestionOverview[];
  solvedQuestions?: { question_id: string }[];
};

export default function QuestionList({
  questions,
  solvedQuestions = [],
}: QuestionListProps) {
  const [search, _] = useQueryState('search');

  const filteredQuestions = React.useMemo(() => {
    if (!search) return questions;

    return questions.filter((question) =>
      question.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, questions]);

  const checkQuestionCompletion = (questionId: string) => {
    if (!solvedQuestions) return false;

    return solvedQuestions.map((item) => item.question_id).includes(questionId);
  };

  return (
    <>
      <VisuallyHidden>Questions List</VisuallyHidden>
      <ul className="flex flex-col gap-[20px]">
        {filteredQuestions.length !== 0 &&
          filteredQuestions.map((question) => (
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
        {filteredQuestions.length === 0 && (
          <div className="mt-[20px] flex items-center justify-center">
            <p className="text-center text-muted">
              No questions found. Try different filters.
            </p>
          </div>
        )}
      </ul>
    </>
  );
}
