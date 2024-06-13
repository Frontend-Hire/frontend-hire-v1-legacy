import CustomHeading from '@/components/CustomHeading';
import PremiumProtectedContentLayout from '@/components/PremiumProtectedContentLayout';
import ProtectedLayout from '@/components/ProtectedLayout';
import Benefits from './_components/Benefits';

export default function ProPage() {
  return (
    <article className="space-y-4">
      <CustomHeading
        title="Pro Plan Active"
        subTitle="Thanks for being a Pro member!"
      />

      <Benefits />
    </article>
  );
}
