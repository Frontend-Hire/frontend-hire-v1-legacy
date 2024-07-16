'use server';

import createSupabaseServerClient from './supabase/supabaseServerClient';
import { cache } from 'react';

export const getCompletedQuestions = cache(async () => {
  const supabaseClient = createSupabaseServerClient();
  const { data } = await supabaseClient
    .from('code_history')
    .select('question_id')
    .eq('is_solved', true);

  return data?.map((question) => question.question_id) || [];
});
