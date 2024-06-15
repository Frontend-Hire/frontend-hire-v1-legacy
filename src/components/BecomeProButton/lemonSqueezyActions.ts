'use server';

import { configureLemonSqueezy } from '@/lib/payments/lemonSqueezy';
import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';
import { createCheckout } from '@lemonsqueezy/lemonsqueezy.js';
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

export async function getCheckoutURL(variantId: number) {
  const supabase = createSupabaseServerClient();
  configureLemonSqueezy();

  const { data, error } = await supabase.auth.getUser();

  if (!data?.user || error) {
    throw new Error('User is not authenticated.');
  }

  const checkout = await createCheckout(
    process.env.LEMONSQUEEZY_STORE_ID!,
    variantId,
    {
      checkoutOptions: {
        embed: true,
        logo: false,
        media: false,
      },
      checkoutData: {
        email: data.user.email ?? undefined,
        custom: {
          user_id: data.user.id,
        },
      },
      productOptions: {
        enabledVariants: [variantId],
        redirectUrl: `${process.env.NEXT_PUBLIC_APP_URL}/pro`,
        receiptButtonText: 'Checkout Pro Benefits',
        receiptThankYouNote: 'Thank you for being a Pro customer!',
      },
    },
  );

  return checkout.data?.data.attributes.url;
}

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
