import Image from 'next/image';
import Placeholder from '/public/placeholder.png';
import { ChevronRight } from 'lucide-react';

export default function Features() {
  return (
    <div className="bg-dark py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Features
          </p>
          <p className="mt-6 text-lg leading-8 text-light">
            Practice skills across a variety of available options and ace your
            interviews!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-3 lg:grid-rows-2">
            {/* first element of the grid */}
            <div className="flex flex-col items-center overflow-hidden rounded-sm border-2 lg:row-span-2">
              <div className="items-left flex h-full w-full flex-col gap-4 p-4">
                <p className="text-sm text-lightest">Tagline</p>
                <h2 className="text-xl">The feature is good</h2>
                <p className="text-sm">
                  Range-rover euro-pop engine convenience store camera dead
                  computer.
                </p>
                <a
                  href="#"
                  className="my-auto flex items-center gap-2 text-sm font-semibold leading-6 text-white"
                >
                  Get started <ChevronRight size={16} className="text-white" />
                </a>
              </div>
              <div className="aspect-sqaure w-full lg:h-full">
                <Image
                  src={Placeholder}
                  alt="PLaceholder image."
                  className="w-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col items-center overflow-hidden rounded-sm border-2 lg:col-span-2 lg:flex-row">
              <div className="items-left flex h-full w-full flex-col gap-4 p-4">
                <p className="text-sm text-lightest">Tagline</p>
                <h2 className="text-xl">The feature is good</h2>
                <p className="text-sm">
                  Range-rover euro-pop engine convenience store camera dead
                  computer.
                </p>
                <a
                  href="#"
                  className="my-auto flex items-center gap-2 text-sm font-semibold leading-6 text-white"
                >
                  Get started <ChevronRight size={16} className="text-white" />
                </a>
              </div>
              <div className="aspect-sqaure w-full lg:h-full">
                <Image
                  src={Placeholder}
                  alt="PLaceholder image."
                  className="w-full object-cover"
                />
              </div>
            </div>

            <div className="flex items-center overflow-hidden rounded-sm border-2 lg:flex-col">
              <div className="items-left flex h-full w-full flex-col gap-4 p-4">
                <span className="w-fit rounded-full bg-brand/60 px-3 py-1 text-xs font-semibold leading-6 text-foreground ring-1 ring-inset ring-brand">
                  Coming soon
                </span>
                <h2 className="text-xl">The feature is good</h2>
                <p className="text-sm">
                  Range-rover euro-pop engine convenience store camera dead
                  computer.
                </p>
                <a
                  href="#"
                  className="my-auto flex items-center gap-2 text-sm font-semibold leading-6 text-white"
                >
                  Get started <ChevronRight size={16} className="text-white" />
                </a>
              </div>
            </div>

            <div className="flex items-center overflow-hidden rounded-sm border-2 lg:flex-col">
              <div className="items-left flex h-full w-full flex-col gap-4 p-4">
                <span className="w-fit rounded-full bg-brand/60 px-3 py-1 text-xs font-semibold leading-6 text-foreground ring-1 ring-inset ring-brand">
                  Coming soon
                </span>
                <h2 className="text-xl">The feature is good</h2>
                <p className="text-sm">
                  Range-rover euro-pop engine convenience store camera dead
                  computer.
                </p>
                <a
                  href="#"
                  className="my-auto flex items-center gap-2 text-sm font-semibold leading-6 text-white"
                >
                  Get started <ChevronRight size={16} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
