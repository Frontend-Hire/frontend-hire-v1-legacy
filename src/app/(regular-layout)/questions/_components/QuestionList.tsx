'use client';

import React from 'react';
import { useQueryState } from 'nuqs';
import QuestionItem from '@/components/QuestionItem';
import VisuallyHidden from '@/components/ui/visually-hidden';
import { DIFFICULTY_ORDER, QuestionOverview } from '@/types/Question';

type QuestionListProps = {
  questions: QuestionOverview[];
  solvedQuestions?: { question_id: string }[];
};

export default function QuestionList({
  questions,
  solvedQuestions = [],
}: QuestionListProps) {
  const [search] = useQueryState('search');
  const [sort] = useQueryState('sort');
  const trimmedSearch = search?.trim();

  const filteredAndSortedQuestions = React.useMemo(() => {
    let filtered = questions;
    if (trimmedSearch) {
      filtered = questions.filter((question) =>
        question.title.toLowerCase().includes(trimmedSearch.toLowerCase()),
      );
    }

    switch (sort) {
      case 'easy-to-hard':
        return filtered.sort(
          (a, b) =>
            DIFFICULTY_ORDER[a.difficulty] - DIFFICULTY_ORDER[b.difficulty],
        );
      case 'hard-to-easy':
        return filtered.sort(
          (a, b) =>
            DIFFICULTY_ORDER[b.difficulty] - DIFFICULTY_ORDER[a.difficulty],
        );
      case 'new-first':
        return filtered.sort((a, b) => b.questionNumber - a.questionNumber);
      case 'old-first':
        return filtered.sort((a, b) => a.questionNumber - b.questionNumber);
      default:
        return filtered.sort(
          (a, b) =>
            DIFFICULTY_ORDER[a.difficulty] - DIFFICULTY_ORDER[b.difficulty],
        );
    }
  }, [trimmedSearch, questions, sort]);

  const checkQuestionCompletion = (questionId: string) => {
    if (!solvedQuestions) return false;

    return solvedQuestions.map((item) => item.question_id).includes(questionId);
  };

  return (
    <>
      <VisuallyHidden>Questions List</VisuallyHidden>
      <span>
        {trimmedSearch ? 'Filtered' : 'Total'} questions count:{' '}
        {filteredAndSortedQuestions.length}
      </span>
      <ul className="flex flex-col gap-[20px]">
        {filteredAndSortedQuestions.length !== 0 &&
          filteredAndSortedQuestions.map((question) => (
            <li key={question.id}>
              <QuestionItem
                id={question.id}
                title={question.title}
                description={question.description}
                difficulty={question.difficulty}
                isCompleted={checkQuestionCompletion(question.id)}
                skills={question.skills}
                isNew={question.isNew}
              />
            </li>
          ))}
        {filteredAndSortedQuestions.length === 0 && (
          <div className="mt-[20px] flex items-center justify-center">
            <p className="text-center text-gray-300">
              No questions found. Try different filters.
            </p>
          </div>
        )}
      </ul>
    </>
  );
}
