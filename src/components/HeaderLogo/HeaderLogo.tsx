import Image from 'next/image';
import WhiteLogo from '@/assets/WhiteLogo.svg';
import GrayLogo from '@/assets/GrayLogo.svg';

interface Props {
  fill?: 'GRAY' | 'WHITE';
}

export default function HeaderLogo({ fill = 'WHITE' }: Props) {
  return (
    <Image
      src={fill == 'WHITE' ? WhiteLogo : GrayLogo}
      priority={true}
      className="h-[40px] w-full"
      alt="Frontend Hire"
    />
  );
}
