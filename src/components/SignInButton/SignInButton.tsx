'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

interface Props {
  label?: string;
}

export default function SignInButton({ label = 'Sign In With Google' }: Props) {
  const supabaseClient = createClientComponentClient();
  const router = useRouter();

  const handleSignIn = async () => {
    const { data, error } = await supabaseClient.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/auth/callback?redirectTo=${location.pathname}`,
      },
    });
    router.refresh();
  };

  return <Button onClick={handleSignIn}>{label}</Button>;
}
