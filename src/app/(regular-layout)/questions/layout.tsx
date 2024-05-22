import CustomHeading from '@/components/CustomHeading';
import QuestionFilters from './_components/QuestionFilters';

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <article className="flex flex-col gap-5">
      <CustomHeading
        title="Questions"
        subTitle="Meant for real world and interview based scenarios."
      />

      <QuestionFilters />
      {children}
    </article>
  );
}
