import {
  AlbumIcon,
  FileQuestionIcon,
  FolderGit2Icon,
  LibraryBigIcon,
  LightbulbIcon,
  NotebookPenIcon,
  SpeechIcon,
} from 'lucide-react';

export const LINKS: {
  title: string;
  items: { title: string; href: string; icon: any }[];
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
      { title: 'Guides', href: '/guides', icon: AlbumIcon },
      {
        title: 'Course Notes ↗',
        href: 'https://courses.frontendhire.com/',
        icon: NotebookPenIcon,
      },
    ],
  },
  {
    title: 'Company',
    hideOnMainNav: true,
    items: [{ title: 'About', href: '/about', icon: LightbulbIcon }],
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
