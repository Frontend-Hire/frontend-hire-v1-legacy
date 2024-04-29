import {
  AlbumIcon,
  FileQuestionIcon,
  FolderGit2Icon,
  LibraryBigIcon,
  SpeechIcon,
  WandIcon,
} from 'lucide-react';

export const LINKS: {
  title: string;
  items: { title: string; href: string; icon?: any }[];
  hideOnMainNav?: boolean;
}[] = [
  {
    title: 'Practice',
    items: [
      { title: 'Questions', href: '/questions', icon: FileQuestionIcon },
      { title: 'Projects', href: '/projects', icon: FolderGit2Icon },
      { title: 'Interviews', href: '/interviews', icon: SpeechIcon },
    ],
  },
  {
    title: 'Learn',
    items: [
      { title: 'Courses', href: '/courses', icon: LibraryBigIcon },
      { title: 'Blog', href: '/blog', icon: AlbumIcon },
      { title: 'React Cohort', href: '/react-cohort', icon: WandIcon },
    ],
  },
  {
    title: 'Company',
    hideOnMainNav: true,
    items: [
      { title: 'About', href: '/about' },
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
  show: true,
  text: 'Our 7-day React Cohort is open for registration!',
  cta: {
    text: 'Book your spot now',
    href: '/react-cohort',
  },
};
