import React from 'react';
import { QuestionData } from '../_types/questionData';

const QuestionDataContext = React.createContext<QuestionData | undefined>(
  undefined,
);

type QuestionDataProviderProps = {
  questionData: QuestionData;
};

const QuestionDataProvider = ({
  children,
  questionData,
}: React.PropsWithChildren<QuestionDataProviderProps>) => {
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
