import Image from 'next/image';
import Logo from '@/assets/Logo.png';
import ShortLogo from '@/assets/ShortLogo.png';

export default function HeaderLogo() {
  return (
    <>
      <Image
        priority
        src={Logo}
        className="hidden h-[40px] w-full xs:block"
        alt="Frontend Hire"
      />
      <Image
        priority
        src={ShortLogo}
        className="h-[40px] w-full xs:hidden"
        alt="Frontend Hire"
      />
    </>
  );
}
