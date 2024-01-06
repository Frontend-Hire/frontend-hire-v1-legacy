import { Button } from '@/components/ui/button';
import Link from 'next/link';

type CTAButtonProps = {
  label?: string;
};

export default function CTA({ label = 'Practice Now' }: CTAButtonProps) {
  return (
    <Button asChild className="rounded-[10px] p-[10px]">
      <Link href={'/questions'}>{label}</Link>
    </Button>
  );
}
