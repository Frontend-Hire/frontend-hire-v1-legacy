import { cache } from 'react';
import createSupabaseServerClient from './supabaseServerClient';

export const revalidate = 0;

const fetchUserSubmissions = cache(async () => {
  const supabaseServerClient = createSupabaseServerClient();

  const { data } = await supabaseServerClient
    .from('code_submissions')
    .select('question_id');

  return data || [];
});

export default fetchUserSubmissions;
