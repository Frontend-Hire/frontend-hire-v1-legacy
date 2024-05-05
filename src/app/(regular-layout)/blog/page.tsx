import { openGraphShared } from '@/app/shared-metadata';
import CustomHeading from '@/components/CustomHeading';
import VisuallyHidden from '@/components/ui/visually-hidden';
import { getBlogPostsMetaFromLocal } from '@/lib/fetchLocalFiles';
import { BlogMeta } from '@/types/Blogs';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | Frontend Hire',
  description: 'Our write-ups on everything in the frontend world.',
  openGraph: {
    ...openGraphShared,
    title: 'Blog | Frontend Hire',
    description: 'Our write-ups on everything in the frontend world.',
  },
};

export default async function Blog() {
  const posts = await getBlogPostsMetaFromLocal();

  return (
    <article className="flex flex-col gap-4">
      <CustomHeading
        title="Blog"
        subTitle="Our write-ups on everything in the frontend world."
      />

      <VisuallyHidden>All blog posts</VisuallyHidden>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <li key={post.id}>
            <Link prefetch={false} href={`blog/${post.id}`}>
              <BlogCard post={post} priority={index < 6} />
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}

function BlogCard({ post, priority }: { post: BlogMeta; priority: boolean }) {
  return (
    <article className="flex h-full w-full flex-col overflow-hidden rounded-md bg-card">
      <Image src={post.cover} placeholder="blur" priority={priority} alt="" />
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h2 className="grow text-2xl font-bold">{post.title}</h2>
        <div className="flex flex-wrap justify-between gap-2 text-sm font-medium text-muted">
          <div className="flex items-center gap-2">
            <Image
              className="h-5 w-5 rounded-full"
              src={post.authors[0].image}
              alt=""
            />
            <p>{post.authors[0].name}</p>
          </div>
          <div>
            <p>
              {new Date(post.publishedOn).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
