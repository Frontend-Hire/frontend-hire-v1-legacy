'use server';

import { cache } from 'react';

import createSupabaseServerClient from './supabase/supabaseServerClient';

export const checkIsProUser = cache(async () => {
  const supabaseServerClient = createSupabaseServerClient();
  const { data } = await supabaseServerClient
    .from('pro_users')
    .select('*')
    .limit(1)
    .maybeSingle();

  return !!data?.user_id;
});
