import Heading from '@/components/Heading';
import ProjectItem from '@/components/ProjectItem';
import VisuallyHidden from '@/components/ui/visually-hidden';
import { getProjectsFromLocal } from '@/lib/fetchLocalFiles';
import { fetchUserProjectSubmissions } from '@/lib/supabase/fetchUserSubmissions';
import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interviews | Frontend Hire',
  description: 'Simulated and Real Interviews for Frontend Developers',
};

export default async function Projects() {
  return (
    <main className="flex flex-col gap-[20px] p-[10px] md:px-[100px] md:py-[20px] lg:px-[200px] xl:px-[250px]">
      <div className="flex flex-col gap-[15px] py-[10px]">
        <Heading variant="h1">Interviews</Heading>
        <p className="text-sm text-muted">
          Simulated and Real Interviews for anytime practice
        </p>
      </div>
      <VisuallyHidden>Interview Types</VisuallyHidden>
      <ul className="flex flex-wrap gap-[20px]"></ul>
    </main>
  );
}
