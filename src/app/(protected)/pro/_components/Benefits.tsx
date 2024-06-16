import Heading from '@/components/Heading';
import InclusionsExclusions from '@/components/InclusionsExclusions';

export default function Benefits() {
  return (
    <div className="mx-auto w-fit space-y-4 rounded bg-card p-10">
      <Heading variant="h2">Here are your benefits</Heading>
      <InclusionsExclusions />
    </div>
  );
}
