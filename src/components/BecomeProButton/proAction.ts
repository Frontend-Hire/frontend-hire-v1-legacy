'use server';

import { Database } from '@/types/supabase';
import { createClient } from '@supabase/supabase-js';

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

export const giveProAccess = async (userId: string) => {
  return await supabaseAdminClient
    .from('pro_users')
    .upsert({ user_id: userId }, { onConflict: 'user_id' })
    .eq('id', userId);
};

export const giveProAccessBasedOnOrderId = async (orderId: string) => {
  const { data, error } = await supabaseAdminClient
    .from('razorpay_orders')
    .select('user_id')
    .eq('order_id', orderId)
    .limit(1)
    .maybeSingle();

  if (error) {
    return;
  }

  if (!data) {
    return;
  }

  const { user_id } = data;

  return await giveProAccess(user_id);
};
