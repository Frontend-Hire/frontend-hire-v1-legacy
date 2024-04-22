import Grad from '/public/gradient-background.svg';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <div className="relative isolate z-0 flex w-full items-center overflow-hidden">
        <Image
          alt="Background gradient."
          src={Grad}
          className="absolute -left-1/2 -top-1/2 -z-10"
        />
        <div className="absolute bottom-0 right-0 -z-10 aspect-square w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-[#CF00A3] opacity-95 blur-[128px]" />
        <div className="mx-auto w-full max-w-7xl px-6 pb-24 sm:pb-32 lg:flex lg:px-8">
          <div className="mx-auto max-w-2xl flex-shrink-0 items-center text-center lg:max-w-4xl lg:pt-8">
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <div className="inline-flex space-x-6">
                <span className="rounded-full bg-brand/60 px-3 py-1 text-sm font-semibold leading-6 text-foreground ring-1 ring-inset ring-brand">
                  New in
                </span>
                <a
                  href="/courses"
                  className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300"
                >
                  <span>Courses</span>
                  <ChevronRight
                    className="h-5 w-5 text-gray-500"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Core Frontend Skills for Interviews and Real World
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-foreground">
              Elevate your frontend development skills with 100% free access to
              questions, projects, and comprehensive guides. Practice key skills
              for job interviews.
            </p>
            <div className="mx-auto mt-10 flex w-fit items-center gap-x-6">
              <a
                href="/questions"
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Get started
              </a>
              <a
                href="#pricing"
                className="text-sm font-semibold leading-6 text-white"
              >
                View pricing <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
