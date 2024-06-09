'use client';

import { Button } from '../ui/button';
import { oAuthSignIn } from '@/actions/signInAction';
import createSupabaseBrowserClient from '@/lib/supabase/supabaseBrowserClient';

export default function BecomeProButton() {
  const supabase = createSupabaseBrowserClient();

  const handleProButton = async () => {
    try {
      const { data } = await supabase.auth.getUser();

      if (data.user) {
        return;
      }

      const redirectTo =
        location.pathname === '/' ? '/pricing' : location.pathname;
      await oAuthSignIn('google', redirectTo);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button
      onClick={handleProButton}
      className="h-fit w-full p-2 text-xl font-bold md:p-3 md:text-2xl"
    >
      Become PRO
    </Button>
  );
}
