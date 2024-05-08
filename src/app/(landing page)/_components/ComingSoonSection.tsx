import FeatureDescriptionItem from './FeatureDescriptionItem';

export default function ComingSoonSection() {
  return (
    <section className="container flex flex-col gap-10 pb-20">
      <h2 className="text-center text-3xl font-black">More Features</h2>

      <ul className="flex flex-col items-center justify-center gap-20">
        <ComingSoonItem
          title="Pro Plan"
          features={['Content to truly make you pro.', 'Pricing TBD.']}
        />
        <ComingSoonItem
          title="Frontend System Design"
          features={['New Feature.', 'Will be included in the Pro plan.']}
        />
        <ComingSoonItem
          title="ONLINE ASSESSMENT"
          features={[
            'Part of Interviews feature.',
            'Will be included in the Pro plan.',
          ]}
        />
        <ComingSoonItem
          title="HIRING PROFILES"
          features={[
            'Still in ideation phase.',
            'We want to solve hiring from both ends.',
            'Might or might not be part of Pro plan.',
          ]}
        />
      </ul>
    </section>
  );
}

type ComingSoonItemProps = {
  title: string;
  features: string[];
};

function ComingSoonItem({ title, features }: ComingSoonItemProps) {
  return (
    <li className="flex flex-col items-center justify-center gap-5">
      <h3 className="text-stroke text-center text-3xl font-black uppercase tracking-widest text-black motion-safe:animate-pulse md:text-[40px]">
        {title}
      </h3>
      <ul className="space-y-1.5 text-muted">
        {features.map((feature) => (
          <FeatureDescriptionItem key={feature}>
            {feature}
          </FeatureDescriptionItem>
        ))}
      </ul>
    </li>
  );
}
