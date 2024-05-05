import { ArrowRightIcon } from 'lucide-react';

export default function FeatureDescriptionItem({
  children,
}: React.PropsWithChildren) {
  return (
    <li className="flex gap-1 text-lg font-medium md:text-xl lg:text-2xl">
      <ArrowRightIcon className="mt-0.5 flex-shrink-0 text-link" /> {children}
    </li>
  );
}
