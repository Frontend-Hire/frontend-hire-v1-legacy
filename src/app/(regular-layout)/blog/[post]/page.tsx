import { getBlogPostFromLocal } from '@/lib/fetchLocalFiles';
import { Metadata } from 'next';
import { openGraphShared } from '@/app/shared-metadata';
import Image from 'next/image';
import AuthorCard from '@/components/AuthorCard';

export async function generateMetadata({
  params,
}: {
  params: { post: string };
}): Promise<Metadata> {
  const { meta } = await getBlogPostFromLocal(params.post);

  return {
    title: `${meta.title} | Frontend Hire`,
    description: meta.description,
    authors: meta.authors.map((author) => ({ name: author.name })),
    openGraph: {
      ...openGraphShared,
      title: `${meta.title} | Frontend Hire`,
      description: meta.description,
      type: 'article',
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: { post: string };
}) {
  const { getContent, meta } = await getBlogPostFromLocal(params.post);

  return (
    <>
      <Image src={meta.cover} placeholder="blur" priority alt="" />
      <h1 className="mb-1">{meta.title}</h1>
      <p className="my-0">{meta.description}</p>
      <AuthorCard {...meta.authors[0]} publishedOn={meta.publishedOn} />
      {getContent()}
    </>
  );
}
