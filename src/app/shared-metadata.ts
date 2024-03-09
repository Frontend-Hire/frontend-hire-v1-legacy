import { Metadata } from 'next';
import openGraphImage from './opengraph-image.png';

export const opengraphShared: Metadata['openGraph'] = {
  images: [
    {
      url: openGraphImage.src,
      width: openGraphImage.width,
      height: openGraphImage.height,
    },
  ],
};
