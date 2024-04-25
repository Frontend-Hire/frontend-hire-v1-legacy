import { ArrowRightIcon } from 'lucide-react';
import CTA from './CTA';
import { cn } from '@/lib/utils';
import QuestionsFeature from './QuestionsFeature';

export default function FeaturesSection() {
  return (
    <section className="container mx-auto flex flex-col gap-10 py-20">
      <h2 className="text-center text-4xl font-black">
        Single Platform For Everything
      </h2>
      <FeatureLayout
        title="Questions"
        richComponent={{
          component: <QuestionsFeature />,
          position: 'right',
        }}
        actionButton={<CTA label="Practice Questions" href="/questions" />}
        features={[
          'Interview and Real World Based.',
          'Free access to questions.',
          'Pro plan gives you access to official solutions (coming soon).',
        ]}
      />
      <FeatureLayout
        title="Projects"
        richComponent={{
          component: <div>Hello Projects</div>,
          position: 'left',
        }}
        actionButton={<CTA label="Practice Projects" href="/projects" />}
        features={[
          'High-level guides for resume-worthy projects.',
          'These are meant to get you out of the tutorial hell.',
          'Free access to projects.',
        ]}
      />
    </section>
  );
}

type FeatureLayoutProps = {
  title: string;
  features: string[];
  richComponent: {
    component: React.ReactNode;
    position: 'left' | 'right';
  };
  actionButton?: React.ReactNode;
};

function FeatureLayout({
  title,
  richComponent,
  actionButton,
  features,
}: FeatureLayoutProps) {
  return (
    <div className="grid grid-cols-1 items-center justify-center justify-items-center gap-10 md:grid-cols-2">
      <div
        className={cn(
          'w-full md:hidden',
          richComponent.position === 'left' && 'md:block',
        )}
      >
        {richComponent.component}
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <h3 className="text-[32px] font-medium">{title}</h3>
        <ul className="space-y-1.5 text-muted">
          {features.map((feature, index) => (
            <FeatureDescriptionItem key={index}>
              {feature}
            </FeatureDescriptionItem>
          ))}
        </ul>
        {actionButton}
      </div>
      <div
        className={cn(
          'hidden w-full',
          richComponent.position === 'right' && 'md:block',
        )}
      >
        {richComponent.component}
      </div>
    </div>
  );
}

function FeatureDescriptionItem({ children }: React.PropsWithChildren) {
  return (
    <li className="flex gap-1">
      <ArrowRightIcon className="flex-shrink-0 text-link" /> {children}
    </li>
  );
}
