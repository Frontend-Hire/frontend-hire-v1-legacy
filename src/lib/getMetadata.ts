import type { Metadata } from 'next';
import { StaticImageData } from 'next/image';
import socialPreviewImage from '@/assets/opengraph-image.png';

type MetadataProps = {
  title?: string;
  description?: string;
  image?: StaticImageData;
  canonical?: string;
};

export const getMetadata = ({
  title = 'Frontend Hire',
  description = 'We are solving Frontend Interviews and Hiring. Our platform helps developers build essential frontend skills, preparing them for technical interviews and real-world development.',
  image = socialPreviewImage,
  canonical,
}: MetadataProps = {}): Metadata => {
  return {
    title,
    description,
    alternates: {
      canonical: canonical,
    },
    creator: 'Hruthik Reddy',
    authors: [{ name: 'Hruthik Reddy', url: 'https://www.iamyhr.com' }],
    openGraph: {
      title,
      description,
      images: [
        {
          url: image.src,
          alt: description,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [
        {
          url: image.src,
          alt: description,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
};
