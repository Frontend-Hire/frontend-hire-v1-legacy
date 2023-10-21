'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const supabaseClient = createClientComponentClient();
  const router = useRouter();

  const handleSignIn = async () => {
    const { data, error } = await supabaseClient.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
    router.refresh();
  };

  return <Button onClick={handleSignIn}>Sign In with Google</Button>;
}
