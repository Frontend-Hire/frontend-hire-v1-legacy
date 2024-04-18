'use client';

import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

type SignInButtonProps = {
  label?: string;
};

export default function SignInButton({
  label = 'Sign In With Google',
}: SignInButtonProps) {
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      const response = await fetch('/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          redirectTo:
            location.pathname === '/' ? '/questions' : location.pathname,
        }),
      });
      const { data } = await response.json();
      if (!data?.url) throw new Error('No url returned');
      router.push(data.url);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Button className="rounded-2 p-2" onClick={handleSignIn}>
      {label}
    </Button>
  );
}
