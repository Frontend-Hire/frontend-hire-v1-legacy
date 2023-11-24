import * as React from 'react';
import { ProjectMeta } from '@/types/mdx';
import { useParams } from 'next/navigation';

export interface IProjectLoading {
  status: 'loading';
}

export interface IProjectError {
  status: 'error';
  message: string;
}

export interface IProjectSuccess {
  status: 'success';
  project: {
    getContent: () => React.ReactNode;
    meta: ProjectMeta;
  };
}

export interface IProjectIdle {
  status: 'idle';
}

export type Project =
  | IProjectLoading
  | IProjectError
  | IProjectSuccess
  | IProjectIdle;

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
          project: data as IProjectSuccess['project'],
        });
      }, 2000);

      return () => {
        clearTimeout(timeout);
      };
    });
  }, [projectId]);

  return { data };
}
