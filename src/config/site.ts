import {
  AlbumIcon,
  FileQuestionIcon,
  LibraryBigIcon,
  SpeechIcon,
} from 'lucide-react';

type Link = {
  title: string;
  href: string;
  icon?: any;
  isEarlyAccess?: boolean;
};

export type NavLink = {
  title: string;
  items: Link[];
  hideOnMainNav?: boolean;
};

export const LINKS: NavLink[] = [
  {
    title: 'Learn',
    items: [
      { title: 'Courses', href: '/courses', icon: LibraryBigIcon },
      // {
      //   title: 'System Design',
      //   href: '/system-design',
      //   icon: PresentationIcon,
      // },
      { title: 'Blog', href: '/blog', icon: AlbumIcon },
    ],
  },
  {
    title: 'Practice',
    items: [
      { title: 'Questions', href: '/questions', icon: FileQuestionIcon },
      { title: 'Interviews', href: '/interviews', icon: SpeechIcon },
    ],
  },
  {
    title: 'Pricing',
    items: [{ title: 'Pricing', href: '/pricing' }],
  },
  {
    title: 'Company',
    hideOnMainNav: true,
    items: [
      { title: 'About', href: '/about' },
      { title: 'Contact Us', href: '/contact-us' },
      {
        title: 'Privacy Policy',
        href: '/privacy-policy',
      },
      {
        title: 'Terms and Conditions',
        href: '/terms-and-conditions',
      },
    ],
  },
];

export const MAIN_NAV_LINKS = LINKS.filter((menu) => !menu.hideOnMainNav);

export const BANNER_CONFIG = {
  show: false,
  text: 'A free live webinar on React Hooks is happening soon.',
  cta: {
    text: 'Book your seat now!',
    href: 'https://topmate.io/iamyhr/796317',
  },
};
