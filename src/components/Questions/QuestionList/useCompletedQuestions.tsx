import useSWR from 'swr';

export default function useCompletedQuestions(
  completedQuestions: string[] = [],
) {
  const { data } = useSWR('completed-questions', () => completedQuestions, {
    fallbackData: completedQuestions,
  });

  return { completedQuestions: data };
}
