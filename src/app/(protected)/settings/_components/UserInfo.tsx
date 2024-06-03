import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';

export default async function UserInfo() {
  const supabaseServerClient = createSupabaseServerClient();

  const { data } = await supabaseServerClient
    .from('users')
    .select('email, has_pro_access')
    .limit(1)
    .single();

  return (
    <div className="space-y-4">
      <p>
        You are logged in as:{' '}
        <span className="rounded bg-secondary px-2 py-1 font-bold text-foreground">
          {data?.email}
        </span>
      </p>
      {data?.has_pro_access && (
        <p>
          You are a{' '}
          <span className="rounded bg-secondary px-2 py-1 font-bold uppercase text-foreground">
            Pro
          </span>{' '}
          user!
        </p>
      )}
    </div>
  );
}
