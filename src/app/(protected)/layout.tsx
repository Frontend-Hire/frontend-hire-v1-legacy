import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabaseServerClient = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabaseServerClient.auth.getSession();

  if (!session) {
    redirect('/auth');
  }

  return <>{children}</>;
}
