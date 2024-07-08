import type { Metadata } from 'next';
import { StaticImageData } from 'next/image';
import socialPreviewImage from '@/assets/opengraph-image.png';

type MetadataProps = {
  title?: string;
  description?: string;
  image?: StaticImageData;
};

export const getMetadata = ({
  title = 'Frontend Hire',
  description = 'A frontend coding platform for actual development skills and interviews',
  image = socialPreviewImage,
}: MetadataProps = {}): Metadata => {
  return {
    title,
    description,
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
