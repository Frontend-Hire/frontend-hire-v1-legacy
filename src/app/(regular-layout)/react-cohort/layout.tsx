import Image from 'next/image';
import Banner from './_assets/react-cohort-banner.webp';
import { Button } from '@/components/ui/button';

export default function ReactCohort({ children }: React.PropsWithChildren) {
  return (
    <article className="flex w-full flex-col items-center gap-8">
      <div className="w-full overflow-hidden">
        <Image
          src={Banner}
          alt=""
          className="w-full scale-[2.5] animate-pulse object-cover p-8 transition-all sm:scale-150 md:scale-100"
        />
      </div>

      <div className="prose prose-invert mx-auto px-4 py-2 marker:text-[#FF5CF2] prose-h2:mt-5 prose-strong:text-[#FF5CF2] sm:px-6 lg:px-8 lg:pe-8">
        {children}
      </div>

      <div className="mb-8 rounded-xl border-2 bg-zinc-950 px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Learn Core React and some of its ecosystem in 7 days.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-400">
            We will cover 80% of React in 7 days. This 80% is what you will use
            most of the time in your projects. We will also cover some of the
            most popular libraries in the React Ecosystem.
          </p>
          <Button className="rounded-2 mt-8 p-2 px-4">Save your spot</Button>
        </div>
      </div>
    </article>
  );
}
