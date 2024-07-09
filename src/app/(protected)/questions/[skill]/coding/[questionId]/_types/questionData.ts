import { Meta } from '@/types/mdx';

export type QuestionData = {
  getContent: () => React.ReactNode;
  userMeta: Meta;
  originalMeta: Meta;
  getSolutionContent?: () => React.ReactNode;
};
