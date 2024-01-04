import * as React from 'react';
import { ProjectMeta } from '@/types/mdx';
import { useParams } from 'next/navigation';

export type ProjectLoading = {
  status: 'loading';
};

export type ProjectError = {
  status: 'error';
  message: string;
};

export type ProjectSuccess = {
  status: 'success';
  project: {
    getContent: () => React.ReactNode;
    meta: ProjectMeta;
  };
};

export type ProjectIdle = {
  status: 'idle';
};

export type Project =
  | ProjectLoading
  | ProjectError
  | ProjectSuccess
  | ProjectIdle;

export default function useProject() {
  const { projectId } = useParams<{
    projectId: string;
  }>();
  const [data, setData] = React.useState<Project>({
    status: 'idle',
  });

  React.useEffect(() => {
    const getProject = async () => {
      try {
        const { default: getContent, meta } = require(
          `@/data/projects/${projectId}/project.mdx`,
        );

        const metaDeepCopy = structuredClone(meta);

        return { getContent, meta: metaDeepCopy };
      } catch (e) {
        console.log(e);
        setData({ status: 'error', message: e as string });
      }
    };

    setData({ status: 'loading' });
    getProject().then((data) => {
      const timeout = setTimeout(() => {
        setData({
          status: 'success',
          project: data as ProjectSuccess['project'],
        });
      }, 2000);

      return () => {
        clearTimeout(timeout);
      };
    });
  }, [projectId]);

  return { data };
}
