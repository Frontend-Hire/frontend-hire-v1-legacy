import Image from 'next/image';
import HTMLLogo from '@/assets/toollogos/html.png';
import CSSLogo from '@/assets/toollogos/css.png';
import JSLogo from '@/assets/toollogos/js.png';
import TSLogo from '@/assets/toollogos/ts.png';
import ReactLogo from '@/assets/toollogos/react.png';
import TailwindLogo from '@/assets/toollogos/tailwindCSS.png';
import ViteLogo from '@/assets/toollogos/vite.png';
import ParcelLogo from '@/assets/toollogos/parcel.png';
import JestLogo from '@/assets/toollogos/jest.png';
import PrettierLogo from '@/assets/toollogos/prettier.png';
import StoryBookLogo from '@/assets/toollogos/storybook.png';
import ESLintLogo from '@/assets/toollogos/eslint.png';
import HuskyLogo from '@/assets/toollogos/husky.png';
import NextLogo from '@/assets/toollogos/next-js.png';
import FigmaLogo from '@/assets/toollogos/figma.png';

export default function GrowingLibrary() {
  return (
    <div className="flex flex-col gap-[20px]">
      <p className="max-w-fit self-center rounded-[5px] bg-destructive px-[5px] py-[2.5px] text-xs md:text-sm">
        * Currently in Beta! Hiring Profiles available mid 2024!
      </p>
      <p className="text-sm text-gray-300 md:text-base">
        A Growing Library of <strong>20+ Questions</strong> and{' '}
        <strong>5+ Projects</strong>
      </p>
      <div className="flex flex-wrap items-center justify-center gap-[20px] md:gap-[25px]">
        <Image
          className="h-[24px] w-max md:h-[40px]"
          src={HTMLLogo}
          alt="HTML Logo"
        />
        <Image
          className="h-[24px] w-max md:h-[40px]"
          src={CSSLogo}
          alt="CSS Logo"
        />
        <Image
          className="h-[24px] w-max md:h-[40px]"
          src={JSLogo}
          alt="JavaScript Logo"
        />
        <Image
          className="h-[24px] w-max md:h-[40px]"
          src={TSLogo}
          alt="TypeScript Logo"
        />
        <Image
          className="h-[24px] w-max md:h-[40px]"
          src={ReactLogo}
          alt="React Logo"
        />
        <Image
          className="h-[24px] w-max md:h-[40px]"
          src={NextLogo}
          alt="Next Logo"
        />
        <Image
          className="h-[24px] w-max md:h-[40px]"
          src={TailwindLogo}
          alt="TailwindCSS Logo"
        />
        <Image
          className="h-[24px] w-max md:h-[40px]"
          src={ViteLogo}
          alt="Vite Logo"
        />
        <Image
          className="h-[24px] w-max md:h-[40px]"
          src={ParcelLogo}
          alt="Parcel Logo"
        />
        <Image
          className="h-[24px] w-max md:h-[40px]"
          src={JestLogo}
          alt="Jest Logo"
        />
        <Image
          className="h-[24px] w-max md:h-[40px]"
          src={PrettierLogo}
          alt="Prettier Logo"
        />
        <Image
          className="h-[24px] w-max md:h-[40px]"
          src={StoryBookLogo}
          alt="StoryBook Logo"
        />
        <Image
          className="h-[24px] w-max md:h-[40px]"
          src={ESLintLogo}
          alt="ESLint Logo"
        />
        <Image
          className="h-[24px] w-max md:h-[40px]"
          src={HuskyLogo}
          alt="Husky Logo"
        />
        <Image
          className="h-[24px] w-max md:h-[40px]"
          src={FigmaLogo}
          alt="Figma Logo"
        />
      </div>
    </div>
  );
}
