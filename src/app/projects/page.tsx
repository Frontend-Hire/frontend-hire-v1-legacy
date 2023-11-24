import DifficultyLegend from '@/components/DifficultyLegend';
import Heading from '@/components/Heading';
import ProjectItem from '@/components/ProjectItem';
import { getProjectsFromLocal } from '@/lib/fetchLocalFiles';

export default async function Projects() {
  const data = await getProjectsFromLocal();

  return (
    <main>
      <Heading variant="h1" className="mb-8 text-center">
        Projects
      </Heading>
      <div className="mb-4">
        <DifficultyLegend />
      </div>

      <div className="grid grid-cols-1 justify-center justify-items-stretch gap-4 px-4 md:grid-cols-2 lg:grid-cols-3">
        {data.map((project) => (
          <ProjectItem
            key={project.id}
            tasks={project.tasks}
            title={project.title}
            difficulty={project.difficulty}
          />
        ))}
      </div>
    </main>
  );
}
