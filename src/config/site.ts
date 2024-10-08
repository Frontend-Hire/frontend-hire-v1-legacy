import {
  AlbumIcon,
  FileQuestionIcon,
  LibraryBigIcon,
  PackageOpenIcon,
  PresentationIcon,
  SpeechIcon,
} from 'lucide-react';

type Link = {
  title: string;
  hideOnMainNav?: boolean;
  href: string;
  icon?: any;
  hideForProUser?: boolean;
  isProUserRoute?: boolean;
};

export type NavLink = {
  title: string;
  items: Link[];
  hideOnMainNav?: boolean;
  hideForProUser?: boolean;
  isProUserRoute?: boolean;
};

const LINKS: NavLink[] = [
  {
    title: 'Practice',
    items: [
      { title: 'Questions', href: '/questions', icon: FileQuestionIcon },
      { title: 'OSS', href: '/oss', icon: PackageOpenIcon },
      { title: 'Interviews', href: '/interviews', icon: SpeechIcon },
    ],
  },
  {
    title: 'Learn',
    items: [
      { title: 'Courses', href: '/courses', icon: LibraryBigIcon },
      {
        title: 'System Design',
        href: '/system-design',
        icon: PresentationIcon,
      },
    ],
  },
  {
    title: 'Company',
    hideOnMainNav: true,
    items: [
      { title: 'Request Content', href: '/request-content' },
      { title: 'About', href: '/about' },
      { title: 'Blog', href: '/blog', icon: AlbumIcon },
      { title: 'Contact Us', href: '/contact-us' },
    ],
  },
  {
    title: 'Legal',
    hideOnMainNav: true,
    items: [
      { title: 'Privacy Policy', href: '/privacy-policy' },
      { title: 'Terms and Conditions', href: '/terms-and-conditions' },
    ],
  },
];

const MAIN_NAV_LINKS = LINKS.filter((menu) => !menu.hideOnMainNav).map(
  (menu) => {
    return {
      ...menu,
      items: menu.items.filter((link) => !link.hideOnMainNav),
    };
  },
);

const getUserMainNavLinks = () => {
  return MAIN_NAV_LINKS.filter((menu) => !menu.isProUserRoute).map((menu) => {
    return {
      ...menu,
      items: menu.items.filter((link) => !link.isProUserRoute),
    };
  });
};

const getProUserMainNavLinks = () => {
  return MAIN_NAV_LINKS.filter((menu) => !menu.hideForProUser).map((menu) => {
    return {
      ...menu,
      items: menu.items.filter((link) => !link.hideForProUser),
    };
  });
};

const getUserFooterLinks = () => {
  return LINKS.filter((menu) => !menu.isProUserRoute).map((menu) => {
    return {
      ...menu,
      items: menu.items.filter((link) => !link.isProUserRoute),
    };
  });
};

const getProUserFooterLinks = () => {
  return LINKS;
};

export const getMainNavLinks = (isProUser?: boolean) => {
  if (isProUser) {
    return getProUserMainNavLinks();
  }

  return getUserMainNavLinks();
};

export const getFooterLinks = (isProUser?: boolean) => {
  if (isProUser) {
    return getProUserFooterLinks();
  }

  return getUserFooterLinks();
};

export const BANNER_CONFIG = {
  show: true,
  isInternational: true,
  showForProUser: false,
  text: 'We are running a 30% sale for the next 10 sales. Use code "INT30" to get it!',
  cta: {
    text: 'Get Pro Plan Now!',
    href: '/pricing',
  },
};
