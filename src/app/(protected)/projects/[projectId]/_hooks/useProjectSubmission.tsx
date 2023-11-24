import * as React from 'react';
import createSupabaseBrowserClient from '@/lib/supabase/supabaseBrowserClient';
import { useParams } from 'next/navigation';

export interface IProjectSubmissionLoading {
  status: 'loading';
}

export interface IProjectSubmissionError {
  status: 'error';
  message: string;
}

export interface IProjectSubmissionSuccess {
  status: 'success';
  projectSubmission: {
    id: number;
    github_link: string;
    live_link: string;
  } | null;
}

export interface IProjectSubmissionIdle {
  status: 'idle';
}

export type ProjectSubmission =
  | IProjectSubmissionLoading
  | IProjectSubmissionError
  | IProjectSubmissionSuccess
  | IProjectSubmissionIdle;

export default function useProjectSubmission() {
  const { projectId } = useParams<{
    projectId: string;
  }>();
  const supabaseBrowserClient = createSupabaseBrowserClient();
  const [data, setData] = React.useState<ProjectSubmission>({
    status: 'idle',
  });

  React.useEffect(() => {
    const getData = async () => {
      setData({ status: 'loading' });
      try {
        const { data, error } = await supabaseBrowserClient
          .from('project_submissions')
          .select('id, github_link, live_link')
          .eq('project_id', projectId)
          .limit(1)
          .maybeSingle();

        if (error) throw error;

        setData({
          status: 'success',
          projectSubmission: data,
        });
      } catch (e) {
        setData({
          status: 'error',
          message: 'Failed to fetch project submission',
        });
      }
    };

    getData();
  }, [supabaseBrowserClient, projectId]);

  return { data };
}
