import { getBlogPostFromLocal } from '@/lib/fetchLocalFiles';
import Image from 'next/image';
import AuthorCard from '@/components/AuthorCard';
import { getMetadata } from '@/lib/getMetadata';

export async function generateMetadata({
  params,
}: {
  params: { post: string };
}) {
  const { meta } = await getBlogPostFromLocal(params.post);

  return getMetadata({
    title: `${meta.title} | Frontend Hire`,
    description: meta.description,
    canonical: `/blog/${params.post}`,
  });
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
      <h1 className="mb-1 capitalize">{meta.title}</h1>
      <p className="my-0">{meta.description}</p>
      <AuthorCard {...meta.authors[0]} publishedOn={meta.publishedOn} />
      {getContent()}
    </>
  );
}
