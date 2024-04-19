import Image from 'next/image';
import HTMLLogo from '@/assets/toollogos/html.webp';
import CSSLogo from '@/assets/toollogos/css.webp';
import JSLogo from '@/assets/toollogos/js.webp';
import TSLogo from '@/assets/toollogos/ts.webp';
import ReactLogo from '@/assets/toollogos/react.webp';
import TailwindLogo from '@/assets/toollogos/tailwindcss.webp';
import ViteLogo from '@/assets/toollogos/vite.webp';
import ParcelLogo from '@/assets/toollogos/parcel.webp';
import JestLogo from '@/assets/toollogos/jest.webp';
import PrettierLogo from '@/assets/toollogos/prettier.webp';
import StoryBookLogo from '@/assets/toollogos/storybook.webp';
import ESLintLogo from '@/assets/toollogos/eslint.webp';
import HuskyLogo from '@/assets/toollogos/husky.webp';
import NextLogo from '@/assets/toollogos/next-js.webp';
import FigmaLogo from '@/assets/toollogos/figma.webp';

const images = [
  HTMLLogo,
  CSSLogo,
  JSLogo,
  TSLogo,
  ReactLogo,
  TailwindLogo,
  ViteLogo,
  ParcelLogo,
  JestLogo,
  PrettierLogo,
  StoryBookLogo,
  ESLintLogo,
  HuskyLogo,
  NextLogo,
  FigmaLogo,
];

export default function GrowingLibrary() {
  return (
    <div className="flex grow flex-col gap-4">
      <p className="max-w-fit self-center rounded bg-destructive px-1 py-0.5 text-xs font-medium md:text-sm">
        * Currently in Beta! Hiring Profiles available late 2024!
      </p>
      <p className="text-sm text-gray-300 md:text-base">
        A Growing Library of <strong>20+ Questions</strong> and{' '}
        <strong>5+ Projects</strong>
      </p>
      <div className="flex flex-wrap items-center justify-center gap-5 md:gap-6">
        {images.map((image, index) => (
          <Image
            key={index}
            priority
            className="h-6 w-max md:h-10"
            src={image}
            alt="Tool Logo"
          />
        ))}
      </div>
    </div>
  );
}
