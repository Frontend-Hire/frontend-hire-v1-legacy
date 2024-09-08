import CTA from './CTA';
import { cn } from '@/lib/utils';
import FeatureDescriptionItem from './FeatureDescriptionItem';
import dynamic from 'next/dynamic';
import React from 'react';

const CoursesFeature = dynamic(() => import('./CoursesFeature'));
const QuestionsFeature = dynamic(() => import('./QuestionsFeature'));
const InterviewsFeature = dynamic(() => import('./InterviewsFeature'));
const SystemDesignFeature = dynamic(() => import('./SystemDesignFeature'));

export default function FeaturesSection() {
  return (
    <section className="container flex flex-col gap-5 py-20 md:gap-10">
      <h2 className="text-center text-4xl font-black">
        Single Platform For Everything
      </h2>
      <FeatureLayout
        title="Courses"
        richComponent={{
          component: (
            <React.Suspense>
              <CoursesFeature />
            </React.Suspense>
          ),
          position: 'left',
        }}
        actionButton={
          <CTA label="Learn to Build Great Stuff" href="/courses" />
        }
        features={[
          'All courses come with written walkthroughs.',
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
          'With well researched and high quality answers.',
        ]}
      />
      <FeatureLayout
        title="System Design"
        richComponent={{
          component: (
            <React.Suspense>
              <SystemDesignFeature />
            </React.Suspense>
          ),
          position: 'left',
        }}
        actionButton={
          <CTA label="Learn to Design Great Systems" href="/system-design" />
        }
        features={[
          'Our take on Frontend System Design.',
          'A unique approach that starts with a problem statement.',
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
          position: 'right',
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
        <h3 className="text-stroke text-x text-center text-3xl font-black uppercase tracking-widest text-black md:text-4xl">
          {title}
        </h3>
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
