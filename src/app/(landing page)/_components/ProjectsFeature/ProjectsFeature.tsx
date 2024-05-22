import { getProjectsFromLocal } from '@/lib/fetchLocalFiles';

import VisuallyHidden from '@/components/ui/visually-hidden';
import ProjectsCarousel from './ProjectsCarousel';

export default async function ProjectsFeature() {
  const projects = await getProjectsFromLocal();

  return (
    <>
      <VisuallyHidden>List of Projects</VisuallyHidden>
      <ProjectsCarousel projects={projects} />
    </>
  );
}
