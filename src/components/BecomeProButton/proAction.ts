'use server';

import { Database } from '@/types/supabase';
import { createClient } from '@supabase/supabase-js';

export const giveProAccess = async (userId: string) => {
  const supabaseAdminClient = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    },
  );

  return await supabaseAdminClient
    .from('users')
    .update({ has_pro_access: true })
    .eq('id', userId);
};
