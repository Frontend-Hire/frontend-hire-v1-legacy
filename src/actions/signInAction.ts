'use server';

import { getURL } from '@/lib/getURL';
import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';
import { Provider } from '@supabase/supabase-js';
import { redirect } from 'next/navigation';

export async function oAuthSignIn(provider: Provider, redirectTo: string) {
  if (!provider) {
    return redirect('/auth/error');
  }

  const supabase = createSupabaseServerClient();
  const redirectUrl = getURL('/auth/callback');
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${redirectUrl}?redirectTo=${redirectTo}`,
      queryParams: {
        prompt: 'select_account',
      },
    },
  });

  if (error) {
    redirect('/auth/error');
  }

  return redirect(data.url);
}
