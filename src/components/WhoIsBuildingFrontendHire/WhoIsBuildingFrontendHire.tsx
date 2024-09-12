import Image, { StaticImageData } from 'next/image';
import WHO_IS_BUILDING_FRONTEND_HIRE from './data';

export default function WhoIsBuildingFrontendHire() {
  return (
    <section className="container flex flex-col gap-10 pb-20">
      <h2 className="text-center text-3xl font-black">
        Who Is Building Frontend Hire?
      </h2>
      <div className="space-y-3">
        {WHO_IS_BUILDING_FRONTEND_HIRE?.map((person) => (
          <AuthorCard
            key={person.name}
            image={person.image}
            name={person.name}
            content={person.content}
          />
        ))}
      </div>
    </section>
  );
}

function AuthorCard({
  image,
  name,
  content,
}: {
  image: StaticImageData;
  name: string;
  content: React.ReactNode;
}) {
  return (
    <div className="space-y-4 text-pretty rounded bg-card p-4 leading-relaxed">
      <Image
        className="float-right h-40 w-40 overflow-hidden rounded-xl p-2"
        src={image}
        alt={`Portrait of ${name}`}
      />
      <h3 className="text-2xl font-bold">{`Hi, I'm ${name}!`}</h3>
      {content}
    </div>
  );
}
