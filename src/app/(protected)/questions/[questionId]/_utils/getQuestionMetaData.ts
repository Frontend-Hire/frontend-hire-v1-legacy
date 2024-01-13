import { Meta } from '@/types/mdx';
import { cache } from 'react';

const getQuestionMetaData = cache(async (questionId: string) => {
  try {
    const { meta } = require(`@/data/questions/${questionId}/prompt.mdx`);

    return { meta } as {
      meta: Meta;
    };
  } catch (e) {
    console.log(e);
  }
});

export default getQuestionMetaData;
