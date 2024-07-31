import CTA from './CTA';
import GrowingLibrary from './GrowingLibrary';

export default function HeroSection() {
  return (
    <section className="flex min-h-[calc(100svh-56px)] flex-col items-center justify-between gap-6 p-2 text-center md:py-10">
      <div className="flex w-full grow flex-col items-center justify-center gap-10">
        <div className="flex w-full flex-col gap-4">
          <span className="font-bold text-link">
            1000+ Developers Practice With Us!
          </span>
          <h1 className="mx-auto max-w-[25ch] text-3xl font-black md:text-4xl lg:text-5xl">
            Practice Core Frontend Skills For Interviews And Real World
          </h1>
          <div className="flex w-full items-center gap-2">
            <Line />
            <h2 className="font-bold xs:whitespace-nowrap sm:text-lg md:text-xl lg:text-2xl">
              Work on Practical Stuff And Get Hired
            </h2>
            <Line />
          </div>
        </div>
        <CTA label="Practice Now" />
      </div>

      <GrowingLibrary />
    </section>
  );
}

function Line() {
  return <div className="h-1 w-full rounded-full bg-white" />;
}
