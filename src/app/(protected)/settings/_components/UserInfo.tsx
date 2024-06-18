import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';

export default async function UserInfo() {
  const supabaseServerClient = createSupabaseServerClient();

  const { data } = await supabaseServerClient
    .from('users')
    .select('email')
    .limit(1)
    .single();

  const { data: proData } = await supabaseServerClient
    .from('pro_users')
    .select('*')
    .limit(1)
    .maybeSingle();

  return (
    <div className="space-y-2">
      <p className="text-gray-300">
        You are logged in as:{' '}
        <span className="bg-secondary p-1 font-bold text-foreground">
          {data?.email}
        </span>
      </p>

      <p className="text-gray-300">
        You have access to:{' '}
        <span className="bg-secondary p-1 font-bold text-foreground">
          {proData?.user_id ? 'Pro Content' : 'Free Content Only'}
        </span>
      </p>
    </div>
  );
}
