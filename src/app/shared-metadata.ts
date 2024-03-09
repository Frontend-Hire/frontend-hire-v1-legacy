import { Metadata } from 'next';
import openGraphImage from './openGraph-image.png';

export const openGraphShared: Metadata['openGraph'] = {
  images: [
    {
      url: openGraphImage.src,
      width: openGraphImage.width,
      height: openGraphImage.height,
    },
  ],
};
