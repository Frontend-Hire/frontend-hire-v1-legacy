import Heading from '@/components/Heading';
import ProjectItem from '@/components/ProjectItem';
import VisuallyHidden from '@/components/ui/visually-hidden';
import { getProjectsFromLocal } from '@/lib/fetchLocalFiles';
import { fetchUserProjectSubmissions } from '@/lib/supabase/fetchUserSubmissions';
import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';
import { PROJECT_DIFFICULTY_ORDER } from '@/types/Project';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Frontend Hire',
  description: 'Not some stupid clones but highly feature focused projects',
};

type SolvedProject = {
  completedTasks: number[];
  isSubmitted: boolean;
};

export default async function Projects() {
  const supabaseServerClient = createSupabaseServerClient();

  const {
    data: { session },
  } = await supabaseServerClient.auth.getSession();

  const [localProjects, solvedProjects] = await Promise.all([
    getProjectsFromLocal(),
    session ? fetchUserProjectSubmissions() : [],
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
    <main className="flex flex-col gap-[20px] p-[10px] md:px-[100px] md:py-[20px] lg:px-[200px] xl:px-[250px]">
      <div className="flex flex-col gap-[15px] py-[10px]">
        <Heading variant="h1">Projects</Heading>
        <p className="text-sm text-muted">
          Not some stupid clones but highly feature focused projects
        </p>
      </div>
      <VisuallyHidden>Projects List</VisuallyHidden>
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
    </main>
  );
}
