import PrimaryLayout from './_layout/PrimaryLayout';
import Header from './_components/Header';
import ProjectLayoutItem from '@/components/ProjectLayoutItem';

export default function ProjectPage() {
  return (
    <PrimaryLayout header={<Header />}>
      <ProjectLayoutItem
        tabs={[
          {
            label: 'Project',
            value: 'Project',
            content: <div className="prose p-4">Hello World!</div>,
          },
        ]}
      />
    </PrimaryLayout>
  );
}
