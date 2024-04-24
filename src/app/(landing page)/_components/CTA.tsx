import { Button } from '@/components/ui/button';
import Link from 'next/link';

type CTAButtonProps = {
  label?: string;
  href?: string;
};

export default function CTA({
  label = 'Practice Now',
  href = '/questions',
}: CTAButtonProps) {
  return (
    <Button asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
}
