'use client';

import { oAuthSignIn } from '../../actions/signInAction';
import { Button } from '../ui/button';

type SignInButtonProps = {
  label?: string;
  redirectTo?: string;
};

export default function SignInButton({
  label = 'Sign In With Google',
  redirectTo = '/questions',
}: SignInButtonProps) {
  const handleSignIn = async () => {
    const newRedirect =
      location.pathname === '/' ? '/questions' : location.pathname;

    await oAuthSignIn('google', redirectTo || newRedirect);
  };
  return (
    <Button className="rounded-2 p-2" onClick={handleSignIn}>
      {label}
    </Button>
  );
}
