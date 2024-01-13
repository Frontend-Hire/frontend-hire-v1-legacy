import { ProjectMeta } from '@/types/mdx';
import { cache } from 'react';

const getProjectMetaData = cache(async (projectId: string) => {
  try {
    const { meta } = require(`@/data/projects/${projectId}/project.mdx`);

    return { meta } as {
      meta: ProjectMeta;
    };
  } catch (e) {
    console.log(e);
  }
});

export default getProjectMetaData;
