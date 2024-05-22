import CTA from './CTA';
import { cn } from '@/lib/utils';
import QuestionsFeature from './QuestionsFeature';
import FeatureDescriptionItem from './FeatureDescriptionItem';
import dynamic from 'next/dynamic';

const ProjectsFeature = dynamic(() => import('./ProjectsFeature'));
const InterviewsFeature = dynamic(() => import('./InterviewsFeature'));
const CoursesFeature = dynamic(() => import('./CoursesFeature'));

export default function FeaturesSection() {
  return (
    <section className="container flex flex-col gap-10 py-20">
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
          'Pro plan gives you access to official solutions.',
        ]}
      />
      <FeatureLayout
        title="Projects"
        richComponent={{
          component: <ProjectsFeature />,
          position: 'left',
        }}
        actionButton={<CTA label="Practice Projects" href="/projects" />}
        features={[
          'High-level guides for resume-worthy projects.',
          'These are meant to get you out of the tutorial hell.',
          'Free access to projects.',
        ]}
      />
      <FeatureLayout
        title="Interviews"
        richComponent={{
          component: <InterviewsFeature />,
          position: 'right',
        }}
        actionButton={<CTA label="Practice Interviews" href="/interviews" />}
        features={[
          'Simulated and Real Interviews.',
          'Pro plan gives you access to all simulated interviews.',
          'Folks from the community provide discounted mock-interviews.',
        ]}
      />
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
          'Free and Pro content available.',
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
