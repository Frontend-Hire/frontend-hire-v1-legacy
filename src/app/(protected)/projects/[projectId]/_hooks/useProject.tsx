import * as React from 'react';
import { ProjectMeta } from '@/types/mdx';
import createSupabaseBrowserClient from '@/lib/supabase/supabaseBrowserClient';

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

export default function useProject(projectId: string) {
  const supabaseBrowserClient = createSupabaseBrowserClient();
  const [data, setData] = React.useState<Project>({
    status: 'idle',
  });

  React.useEffect(() => {
    const getProject = async () => {
      try {
        const { default: getContent, meta } = require(
          `@/data/projects/${projectId}/project.mdx`,
        );

        sessionStorage.setItem('project_id', projectId || '');

        return { getContent, meta };
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
  }, [projectId, supabaseBrowserClient]);

  return { data };
}
