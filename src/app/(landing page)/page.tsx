import SignInButton from '@/components/SignInButton';
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

export default function Home() {
  return (
    <main className="h-full">
      <section className="flex h-full flex-col items-center justify-center gap-[25px] p-[10px] text-center md:px-[40px] md:py-[10px]">
        <div className="flex h-full grow flex-col items-center justify-center gap-[25px]">
          <p className="rounded-[5px] bg-[#18005F] px-[10px] py-[5px] text-sm md:text-base">
            100% Free Access to Questions and Projects
          </p>
          <h1 className="max-w-[25ch] text-3xl font-black md:text-4xl">
            Practice Core Frontend Skills For Interviews And Real World
          </h1>
          <div className="flex items-center gap-[10px]">
            <Line />
            <h2 className="whitespace-nowrap text-lg font-bold md:text-xl">
              Make A Hiring Profile And Get Hired *
            </h2>
            <Line />
          </div>
          <SignInButton label="Just Need A Google Account To Get Started " />
        </div>

        <div className="flex flex-col gap-[20px]">
          <p className="max-w-fit self-center rounded-[5px] bg-destructive px-[5px] py-[2.5px] text-xs md:text-sm">
            * Currently in Beta! Hiring Profiles available early 2024!
          </p>
          <p className="text-sm font-bold md:text-base">
            A Growing Library of{' '}
            <span className="text-primary">10+ Questions</span> and{' '}
            <span className="text-primary">2+ Projects</span>
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
          </div>
        </div>
      </section>
    </main>
  );
}

function Line() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="5"
      viewBox="0 0 466 5"
      fill="none"
    >
      <path
        d="M2 2.5H464"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
