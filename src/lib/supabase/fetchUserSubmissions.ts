import { Database } from '@/types/supabase';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export default async function fetchUserSubmissions() {
  const supabaseServerClient = createServerComponentClient<Database>({
    cookies,
  });

  const { data } = await supabaseServerClient
    .from('code_submissions')
    .select('question_id');

  return data || [];
}
