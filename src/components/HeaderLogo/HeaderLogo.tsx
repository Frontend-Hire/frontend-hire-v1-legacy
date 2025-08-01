import Image from 'next/image';
import WhiteLogo from '@/assets/WhiteLogo.svg';
import GrayLogo from '@/assets/GrayLogo.svg';

type HeaderLogoProps = {
  fill?: 'GRAY' | 'WHITE';
};

export default function HeaderLogo({ fill = 'WHITE' }: HeaderLogoProps) {
  return (
    <Image
      src={fill == 'WHITE' ? WhiteLogo : GrayLogo}
      priority
      className="h-9"
      alt="Frontend Hire"
    />
  );
}
