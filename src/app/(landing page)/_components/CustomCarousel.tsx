'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import AutoScroll from 'embla-carousel-auto-scroll';

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

export default function CustomCarousel() {
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[
        AutoScroll({
          speed: 0.8,
        }),
      ]}
    >
      <CarouselContent>
        {[...images, ...images.slice(0, 5)].map((image, index) => (
          <CarouselItem
            key={index}
            className="basis-[18%] opacity-80 sm:basis-[15%] md:basis-[10%] lg:basis-[8%] xl:basis-[6%]"
          >
            <Image priority className="h-6 w-max sm:h-10" src={image} alt="" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
