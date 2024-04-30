import Image from 'next/image';
import Banner from '@/assets/react-cohort-banner.webp';
import CohortForm from './_components/CohortForm';
import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';

const checkIfUserHasSavedSpot = async () => {
  const supabaseServerClient = createSupabaseServerClient();

  const {
    data: { user },
  } = await supabaseServerClient.auth.getUser();

  const { data, error } = await supabaseServerClient
    .from('react_cohort_v1')
    .select('user_id')
    .eq('user_id', user?.id);

  return { data, error };
};

export default async function SaveSpot() {
  const { data } = await checkIfUserHasSavedSpot();

  if (data && data.length > 0) {
    return (
      <main className="container mb-8 flex h-full flex-col items-center gap-8">
        <div className="overflow-hidden">
          <Image
            src={Banner}
            alt=""
            className="w-full scale-[2.5] animate-pulse object-cover p-8 transition-all sm:scale-150 md:scale-100"
          />
        </div>

        <p className="text-center text-lg font-bold">
          You have already saved your spot. See you soon!
        </p>
      </main>
    );
  }

  return (
    <main className="container mb-8 flex h-full flex-col items-center gap-8">
      <div className="overflow-hidden">
        <Image
          src={Banner}
          alt=""
          className="w-full scale-[2.5] animate-pulse object-cover p-8 transition-all sm:scale-150 md:scale-100"
        />
      </div>

      <CohortForm />
    </main>
  );
}
