import Header from '@/components/Header';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const supabaseServerClient = createServerComponentClient({
    cookies: () => cookieStore,
  });
  const {
    data: { session },
  } = await supabaseServerClient.auth.getSession();

  if (!session) {
    return (
      <>
        <Header />
        <div className="flex flex-col items-center justify-center">
          Sign In To Access This Page!
        </div>
      </>
    );
  }

  return <>{children}</>;
}
