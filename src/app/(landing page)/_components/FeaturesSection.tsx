import CTA from './CTA';
import { cn } from '@/lib/utils';
import FeatureDescriptionItem from './FeatureDescriptionItem';
import dynamic from 'next/dynamic';
import React from 'react';
import CoursesFeature from './CoursesFeature';

const QuestionsFeature = dynamic(() => import('./QuestionsFeature'));
const InterviewsFeature = dynamic(() => import('./InterviewsFeature'));

export default function FeaturesSection() {
  return (
    <section className="container flex flex-col gap-5 py-20 md:gap-10">
      <h2 className="text-center text-4xl font-black">
        Single Platform For Everything
      </h2>
      <FeatureLayout
        title="Courses"
        richComponent={{
          component: <CoursesFeature />,
          position: 'left',
        }}
        actionButton={
          <CTA label="Learn to build great stuff" href="/courses" />
        }
        features={[
          'All courses come with written walkthroughs.',
          'Select ones come in video.',
          'Optimized to teach you 20% of stuff for 80% of the results.',
        ]}
      />
      <FeatureLayout
        title="Questions"
        richComponent={{
          component: (
            <React.Suspense>
              <QuestionsFeature />
            </React.Suspense>
          ),
          position: 'right',
        }}
        actionButton={<CTA label="Practice Questions" href="/questions" />}
        features={[
          'Interview and Real World Based.',
          'With a ton of high quality resources.',
        ]}
      />
      <FeatureLayout
        title="Interviews"
        richComponent={{
          component: (
            <React.Suspense>
              <InterviewsFeature />
            </React.Suspense>
          ),
          position: 'left',
        }}
        actionButton={<CTA label="Practice Interviews" href="/interviews" />}
        features={[
          'Simulated and Real Interviews.',
          'Folks from the community provide discounted mock-interviews.',
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
    <div className="grid grid-cols-1 items-center justify-center justify-items-center gap-10 py-20 md:grid-cols-2">
      <div
        className={cn(
          'hidden w-full',
          richComponent.position === 'left' && 'md:block',
        )}
      >
        {richComponent.component}
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <h3 className="text-[32px] font-medium">{title}</h3>
        <div className="w-full md:hidden">{richComponent.component}</div>
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
