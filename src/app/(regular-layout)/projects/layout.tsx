import CustomHeading from '@/components/CustomHeading';

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <article className="flex flex-col gap-5">
      <CustomHeading
        title="Projects"
        subTitle="Not some stupid clones but highly feature focused projects intended to break you out of the tutorial hell."
      />

      {children}
    </article>
  );
}
