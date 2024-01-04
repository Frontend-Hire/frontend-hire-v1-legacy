import Heading from '@/components/Heading';
import SpecialText from '@/components/SpecialText';
import { Button } from '@/components/ui/button';
import Settings from './Settings';

type InstructionProps = {
  onStart: () => void;
};

export default function Instructions({ onStart }: InstructionProps) {
  return (
    <section className="flex flex-col gap-[15px] rounded bg-card p-[20px]">
      <Heading variant="h3">Instructions:</Heading>
      <ul className="ml-4 flex list-disc flex-col gap-[5px]">
        <li>
          Use <SpecialText>Chrome on desktop</SpecialText> for the best
          experience possible.
        </li>
        <li>
          This simulation uses certain Browser APIs that are experimental. So,
          the experience might be buggy at times.
        </li>
        <li>
          <SpecialText>
            This simulation happens entirely on your device, we do not take any
            data!
          </SpecialText>
        </li>
        <li>
          You can take the simulation as many times as you want, but we suggest
          taking it <SpecialText>as serious as</SpecialText> you would take an
          actual phone screening!
        </li>
        <li>
          Do give the{' '}
          <SpecialText>permission for microphone access</SpecialText>, otherwise
          this feature will not work.
        </li>
      </ul>
      <Settings />
      <div className="flex justify-center">
        <Button onClick={onStart}>Start Simulation</Button>
      </div>
    </section>
  );
}
