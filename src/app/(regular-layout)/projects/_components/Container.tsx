import ProjectItem from '@/components/ProjectItem';
import { getProjectsFromLocal } from '@/lib/fetchLocalFiles';
import { fetchUserProjectSubmissions } from '@/lib/supabase/fetchUserSubmissions';
import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';
import { PROJECT_DIFFICULTY_ORDER } from '@/types/Project';

type SolvedProject = {
  completedTasks: number[];
  isSubmitted: boolean;
};

export default async function Container() {
  const supabaseServerClient = createSupabaseServerClient();

  const {
    data: { user },
  } = await supabaseServerClient.auth.getUser();

  const [localProjects, solvedProjects] = await Promise.all([
    getProjectsFromLocal(),
    user ? fetchUserProjectSubmissions() : [],
  ]);

  const sortedLocalProjects = localProjects.sort((a, b) => {
    return (
      PROJECT_DIFFICULTY_ORDER[a.difficulty] -
      PROJECT_DIFFICULTY_ORDER[b.difficulty]
    );
  });

  const solvedProjectsMap: Record<string, SolvedProject> =
    solvedProjects.reduce(
      (acc, project) => {
        acc[project.project_id] = {
          completedTasks: project.completed_tasks ?? [],
          isSubmitted: project.github_link !== '',
        };
        return acc;
      },
      {} as Record<string, SolvedProject>,
    );

  return (
    <ul className="flex flex-wrap gap-[20px]">
      {sortedLocalProjects.map((project) => {
        const solvedProject = solvedProjectsMap[project.id] || {};
        const completedTasks = solvedProject.completedTasks || [];
        const isSubmitted = solvedProject.isSubmitted || false;

        return (
          <li key={project.id}>
            <ProjectItem
              id={project.id}
              tasks={project.tasks}
              description={project.description}
              title={project.title}
              difficulty={project.difficulty}
              skills={project.skills}
              completedTasks={completedTasks}
              isSubmitted={isSubmitted}
              isRecommended={project.isRecommended}
            />
          </li>
        );
      })}
    </ul>
  );
}
