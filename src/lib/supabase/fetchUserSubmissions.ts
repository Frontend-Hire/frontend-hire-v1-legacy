import { Database } from '@/types/supabase';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { cache } from 'react';

export const revalidate = 0;

const fetchUserSubmissions = cache(async () => {
  const cookieStore = cookies();
  const supabaseServerClient = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });

  const { data } = await supabaseServerClient
    .from('code_submissions')
    .select('question_id');

  return data || [];
});

export default fetchUserSubmissions;
