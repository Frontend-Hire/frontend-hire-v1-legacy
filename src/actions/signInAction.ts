'use server';

import getSupabaseServerClient from '@/lib/supabase/supabaseServerClient';
import { Provider } from '@supabase/supabase-js';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export async function oAuthSignIn(provider: Provider, redirectTo: string) {
  if (!provider) {
    return redirect('/auth/error');
  }

  // iOS Embbedded App doesn't support OAuth
  if (headers().get('user-agent')?.includes('LinkedInApp')) {
    return redirect('/google-error');
  }

  const supabase = getSupabaseServerClient();
  const origin = headers().get('origin');
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${origin}/auth/callback?redirectTo=${redirectTo}`,
      queryParams: {
        prompt: 'select_account',
      },
    },
  });

  if (error) {
    return redirect('/auth/error');
  }

  return redirect(data.url);
}
