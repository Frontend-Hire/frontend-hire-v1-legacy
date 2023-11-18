'use client';

import createSupabaseBrowserClient from '@/lib/supabase/supabaseBrowserClient';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

interface Props {
  label?: string;
}

export default function SignInButton({ label = 'Sign In With Google' }: Props) {
  const supabaseBrowserClient = createSupabaseBrowserClient();
  const router = useRouter();

  const handleSignIn = async () => {
    const { error } = await supabaseBrowserClient.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/auth/callback?redirectTo=${location.pathname}`,
      },
    });

    if (error) {
      console.log(error);
    } else {
      router.refresh();
    }
  };

  return <Button onClick={handleSignIn}>{label}</Button>;
}
