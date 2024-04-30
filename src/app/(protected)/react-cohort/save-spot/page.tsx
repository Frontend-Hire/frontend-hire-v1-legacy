import Image from 'next/image';
import Banner from '@/assets/react-cohort-banner.webp';
import CohortForm from './_components/CohortForm';

export default function SaveSpot() {
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
