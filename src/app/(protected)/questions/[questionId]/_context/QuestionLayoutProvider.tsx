import { QuestionLayout } from '@/types/Question';
import React from 'react';

const QuestionLayoutContext = React.createContext<{
  layout: QuestionLayout;
  toggleLayout: () => void;
}>({
  layout: 'col-3',
  toggleLayout: () => {},
});

type QuestionLayoutProviderProps = {
  questionLayout?: QuestionLayout;
};

const QuestionLayoutProvider = ({
  children,
  questionLayout = 'col-3',
}: React.PropsWithChildren<QuestionLayoutProviderProps>) => {
  const [layout, setLayout] = React.useState(questionLayout);

  const toggleLayout = () => {
    setLayout((prevLayout) => (prevLayout === 'col-3' ? 'col-2' : 'col-3'));
  };

  return (
    <QuestionLayoutContext.Provider value={{ layout, toggleLayout }}>
      {children}
    </QuestionLayoutContext.Provider>
  );
};

const useQuestionLayout = () => {
  const context = React.useContext(QuestionLayoutContext);
  if (context === undefined) {
    throw new Error(
      'useQuestionLayout must be used within a QuestionLayoutProvider',
    );
  }
  return context;
};

export { QuestionLayoutProvider, useQuestionLayout };
