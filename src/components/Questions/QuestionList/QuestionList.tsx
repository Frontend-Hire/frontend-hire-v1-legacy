'use client';

import React from 'react';
import { useQueryState } from 'nuqs';
import QuestionItem from '@/components/Questions/QuestionItem';
import VisuallyHidden from '@/components/ui/visually-hidden';
import {
  DIFFICULTY_ORDER,
  QuestionSkill,
  QuestionType,
  Question,
} from '@/types/Question';
import Link from 'next/link';
import useCompletedQuestions from './useCompletedQuestions';

type QuestionListProps = {
  questions: Question[];
  completedQuestionsServer?: string[];
  skill: QuestionSkill;
  type: QuestionType;
};

export default function QuestionList({
  questions,
  completedQuestionsServer = [],
  skill,
  type,
}: QuestionListProps) {
  const { completedQuestions } = useCompletedQuestions(
    completedQuestionsServer,
  );

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
        return filtered.sort((a, b) => {
          if (a.publishedOn && b.publishedOn) {
            return b.publishedOn.getTime() - a.publishedOn.getTime();
          } else if (a.publishedOn) {
            return -1;
          } else if (b.publishedOn) {
            return 1;
          } else {
            return 0;
          }
        });
      case 'old-first':
        return filtered.sort((a, b) => {
          if (a.publishedOn && b.publishedOn) {
            return a.publishedOn.getTime() - b.publishedOn.getTime();
          } else if (b.publishedOn) {
            return -1;
          } else if (a.publishedOn) {
            return 1;
          } else {
            return 0;
          }
        });
      default:
        return filtered.sort(
          (a, b) =>
            DIFFICULTY_ORDER[a.difficulty] - DIFFICULTY_ORDER[b.difficulty],
        );
    }
  }, [trimmedSearch, questions, sort]);

  return (
    <div className="space-y-2">
      <VisuallyHidden>Questions List</VisuallyHidden>
      <span>
        {trimmedSearch ? 'Filtered' : 'Total'} questions count:{' '}
        {filteredAndSortedQuestions.length}
      </span>
      <ul className="flex flex-col gap-4">
        {filteredAndSortedQuestions.length !== 0 &&
          filteredAndSortedQuestions.map((question) => (
            <li key={question.id}>
              <Link href={`/questions/${skill}/${type}/${question.id}`}>
                <QuestionItem
                  question={question}
                  isCompleted={completedQuestions.includes(
                    `${skill}-${type}-${question.id}`,
                  )}
                />
              </Link>
            </li>
          ))}
        {filteredAndSortedQuestions.length === 0 && (
          <div className="mt-4 flex items-center justify-center">
            <p className="text-center text-gray-300">
              No questions found. Try different filters.
            </p>
          </div>
        )}
      </ul>
    </div>
  );
}
