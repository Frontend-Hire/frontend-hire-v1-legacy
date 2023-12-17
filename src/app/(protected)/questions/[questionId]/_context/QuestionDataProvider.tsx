import { Meta } from '@/types/mdx';
import React from 'react';
import { QuestionData } from '../_types/questionData';

const QuestionDataContext = React.createContext<QuestionData | undefined>(
  undefined,
);

interface Props {
  children: React.ReactNode;
  questionData: QuestionData;
}

const QuestionDataProvider = ({ children, questionData }: Props) => {
  return (
    <QuestionDataContext.Provider value={questionData}>
      {children}
    </QuestionDataContext.Provider>
  );
};

const useQuestionData = () => {
  const context = React.useContext(QuestionDataContext);
  if (context === undefined) {
    throw new Error(
      'useQuestionData must be used within a QuestionDataProvider',
    );
  }
  return context;
};

export { QuestionDataProvider, useQuestionData };
