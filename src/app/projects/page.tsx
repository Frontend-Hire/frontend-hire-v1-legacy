import DifficultyLegend from '@/components/DifficultyLegend';
import Heading from '@/components/Heading';
import ProjectItem from '@/components/ProjectItem';
import { getProjectsFromLocal } from '@/lib/fetchLocalFiles';
import { fetchUserProjectSubmissions } from '@/lib/supabase/fetchUserSubmissions';
import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';

export const dynamic = 'force-dynamic';

interface SolvedProjectData {
  completedTasks: number[];
  isSubmitted: boolean;
}

export default async function Projects() {
  const supabaseServerClient = createSupabaseServerClient();

  const {
    data: { session },
  } = await supabaseServerClient.auth.getSession();

  const [localProjects, solvedProjects] = await Promise.all([
    getProjectsFromLocal(),
    session ? fetchUserProjectSubmissions() : [],
  ]);

  const solvedProjectsMap: Record<string, SolvedProjectData> =
    solvedProjects.reduce(
      (acc, project) => {
        acc[project.project_id] = {
          completedTasks: project.completed_tasks ?? [],
          isSubmitted: project.github_link !== '',
        };
        return acc;
      },
      {} as Record<string, SolvedProjectData>,
    );

  return (
    <main className="container">
      <Heading variant="h1" className="mb-8 text-center">
        Projects
      </Heading>
      <div className="mb-4">
        <DifficultyLegend />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-5 md:justify-start">
        {localProjects.map((project) => {
          const solvedProject = solvedProjectsMap[project.id] || {};
          const completedTasks = solvedProject.completedTasks || [];
          const isSubmitted = solvedProject.isSubmitted || false;

          return (
            <ProjectItem
              key={project.id}
              id={project.id}
              tasks={project.tasks}
              title={project.title}
              difficulty={project.difficulty}
              completedTasks={completedTasks}
              isSubmitted={isSubmitted}
            />
          );
        })}
      </div>
    </main>
  );
}
