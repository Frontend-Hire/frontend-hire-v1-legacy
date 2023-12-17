import { Meta } from '@/types/mdx';
import { cache } from 'react';

const getQuestion = cache(async (questionId: string) => {
  try {
    const { default: getContent, meta } = require(
      `@/data/questions/${questionId}/prompt.mdx`,
    );

    const metaDeepCopy = structuredClone(meta);

    const content = getContent();

    return { content, meta: metaDeepCopy } as {
      content: string;
      meta: Meta;
    };
  } catch (e) {
    console.log(e);
  }
});

export default getQuestion;
