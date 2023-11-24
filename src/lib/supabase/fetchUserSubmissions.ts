import { cache } from 'react';
import createSupabaseServerClient from './supabaseServerClient';

export const revalidate = 0;

export const fetchUserQuestionSubmissions = cache(async () => {
  const supabaseServerClient = createSupabaseServerClient();

  const { data } = await supabaseServerClient
    .from('code_submissions')
    .select('question_id');

  return data || [];
});

export const fetchUserProjectSubmissions = cache(async () => {
  const supabaseServerClient = createSupabaseServerClient();

  const { data } = await supabaseServerClient
    .from('project_submissions')
    .select('project_id, completed_tasks, github_link');

  return data || [];
});
