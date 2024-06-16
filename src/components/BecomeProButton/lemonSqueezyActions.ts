'use server';

import { giveProAccess } from './proAction';
import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/supabase';

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

export const processProPlan = async (data: any) => {
  const orderId = data.id;
  const currency = data.currency;
  const total = data.total;
  const userId = data.meta.custom_data.user_id;

  await supabaseAdminClient.from('lemonsqueezy_orders').insert({
    order_id: orderId,
    currency,
    amount: total,
    user_id: userId,
  });

  await giveProAccess(userId);
};
