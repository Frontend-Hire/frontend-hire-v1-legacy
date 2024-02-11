import CTA from './CTA';
import GrowingLibrary from './GrowingLibrary';

export default function HeroSection() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-[25px] p-[10px] text-center md:px-[40px] md:py-[10px]">
      <div className="flex w-full grow flex-col items-center justify-center gap-[25px]">
        <p className="rounded-[5px] bg-[#18005F] px-[10px] py-[5px] text-sm md:text-base">
          100% Free Access to Questions, Projects, and Guides.
        </p>
        <h1 className="max-w-[25ch] text-3xl font-black md:text-4xl">
          Practice Core Frontend Skills For Interviews And Real World
        </h1>
        <div className="flex w-full items-center gap-[10px]">
          <Line />
          <h2 className="text-lg font-bold xs:whitespace-nowrap md:text-xl">
            Make A Hiring Profile And Get Hired *
          </h2>
          <Line />
        </div>
        <CTA label="Practice Now For Free" />
      </div>

      <GrowingLibrary />
    </section>
  );
}

function Line() {
  return <div className="h-1 w-full rounded-full bg-white" />;
}
