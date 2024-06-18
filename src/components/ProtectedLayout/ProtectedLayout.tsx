import Heading from '@/components/Heading';
import SignInButton from '@/components/SignInButton';
import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';

// NOT TO BE USED IN A LAYOUT FILE
export default async function ProtectedLayout({
  children,
}: React.PropsWithChildren) {
  const supabaseServerClient = createSupabaseServerClient();

  const { data, error } = await supabaseServerClient.auth.getUser();
  if (error || !data?.user) {
    return (
      <>
        <div className="container space-y-4 py-10">
          <div className="flex flex-col gap-4 py-2">
            <Heading variant="h1">
              You need to sign in to access this content!
            </Heading>
            <p className="text-sm text-gray-300">
              We support Google sign in only.
            </p>
          </div>
          <div className="space-y-2">
            <SignInButton />
            <p className="text-sm text-gray-300">
              We will never share your data with anyone without your permission!
              Also, you can delete your account anytime you want through
              settings (once signed in, click on your avatar to open a menu with
              settings).
            </p>
          </div>
        </div>
      </>
    );
  }

  return <>{children}</>;
}
