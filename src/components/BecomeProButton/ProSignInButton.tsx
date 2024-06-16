'use client';

import { oAuthSignIn } from '@/actions/signInAction';
import { Button } from '../ui/button';

export default function ProSignInButton() {
  const handleProButton = async () => {
    const redirectTo =
      location.pathname === '/' ? '/pricing' : location.pathname;
    await oAuthSignIn('google', redirectTo);
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
