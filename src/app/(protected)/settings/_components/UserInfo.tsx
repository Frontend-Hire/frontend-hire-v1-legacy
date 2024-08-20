import { checkIsProUser } from '@/lib/isProUser';
import getSupabaseServerClient from '@/lib/supabase/supabaseServerClient';

export default async function UserInfo() {
  const supabaseServerClient = getSupabaseServerClient();

  const [userData, isProUser] = await Promise.all([
    supabaseServerClient.from('users').select('email').limit(1).maybeSingle(),
    checkIsProUser(),
  ]);
  const data = userData?.data;

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
          {isProUser ? 'Pro Content' : 'Free Content Only'}
        </span>
      </p>
    </div>
  );
}
