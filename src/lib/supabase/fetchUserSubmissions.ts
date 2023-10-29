import { Database } from '@/types/supabase';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

const supabaseServerClient = createServerComponentClient<Database>({ cookies });

export default async function fetchUserSubmissions() {
  const { data } = await supabaseServerClient
    .from('code_submissions')
    .select('question_id');

  return data || [];
}
