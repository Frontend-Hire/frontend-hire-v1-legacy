import createSupabaseBrowserClient from '@/lib/supabase/supabaseBrowserClient';
import { useParams } from 'next/navigation';
import * as React from 'react';

interface ProjectTasksContextState {
  completedTasks: number[];
  markTaskAsComplete: (id: number) => Promise<void>;
  markTaskAsIncomplete: (id: number) => Promise<void>;
}

const ProjectTasksContext = React.createContext<
  ProjectTasksContextState | undefined
>(undefined);

interface Props {
  children: React.ReactNode;
}

export default function ProjectTasksProvider({ children }: Props) {
  const supabaseBrowserClient = createSupabaseBrowserClient();
  const { projectId } = useParams<{ projectId: string }>();
  const [completedTasks, setCompletedTasks] = React.useState<number[]>([]);

  React.useEffect(() => {
    // To avoid conflicts with another project
    sessionStorage.clear();
  }, []);

  React.useEffect(() => {
    const getCompletedTasks = async () => {
      const { data, error } = await supabaseBrowserClient
        .from('project_submissions')
        .select('id, completed_tasks')
        .eq('project_id', projectId)
        .limit(1)
        .maybeSingle();

      if (data) {
        sessionStorage.setItem('projectSubmissionId', `${data.id}`);
        return data.completed_tasks || [];
      }

      return [];
    };

    getCompletedTasks().then((data) => setCompletedTasks(data));
  }, [supabaseBrowserClient, projectId]);

  const markTaskAsComplete = async (id: number) => {
    const newTasks = [...completedTasks, id];
    const payload: {
      id?: number;
      project_id: string;
      completed_tasks: number[];
    } = {
      project_id: projectId,
      completed_tasks: newTasks,
      id: +(sessionStorage.getItem('projectSubmissionId') || ''),
    };
    const { data } = await supabaseBrowserClient
      .from('project_submissions')
      .upsert(payload)
      .select('id')
      .limit(1)
      .maybeSingle();

    if (data) {
      sessionStorage.setItem('projectSubmissionId', `${data.id}`);
      setCompletedTasks(newTasks);
    }
  };

  const markTaskAsIncomplete = async (id: number) => {
    const newTasks = [...completedTasks.filter((taskId) => taskId !== id)];
    const payload: {
      id?: number;
      project_id: string;
      completed_tasks: number[];
    } = {
      project_id: projectId,
      completed_tasks: newTasks,
      id: +(sessionStorage.getItem('projectSubmissionId') || ''),
    };
    const { data } = await supabaseBrowserClient
      .from('project_submissions')
      .upsert(payload)
      .select('id')
      .limit(1)
      .maybeSingle();

    if (data) {
      sessionStorage.setItem('projectSubmissionId', `${data.id}`);
      setCompletedTasks(newTasks);
    }
  };

  const value: ProjectTasksContextState = {
    completedTasks,
    markTaskAsComplete,
    markTaskAsIncomplete,
  };

  return (
    <ProjectTasksContext.Provider value={value}>
      {children}
    </ProjectTasksContext.Provider>
  );
}

export const useProjectTasks = (): ProjectTasksContextState => {
  const context = React.useContext(ProjectTasksContext);
  if (context === undefined) {
    throw new Error('useTasks must be used within a TasksProvider');
  }
  return context;
};
