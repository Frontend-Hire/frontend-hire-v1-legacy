import Header from '@/components/Header';
import SignInButton from '@/components/SignInButton';
import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabaseServerClient = createSupabaseServerClient();
  const {
    data: { session },
  } = await supabaseServerClient.auth.getSession();

  if (!session) {
    return (
      <>
        <Header />
        <div className="flex flex-col items-center justify-center gap-6 pt-4">
          <SignInButton />
          <p className="font-medium">
            Support For More Sign In Providers Coming Soon!
          </p>
        </div>
      </>
    );
  }

  return <>{children}</>;
}
