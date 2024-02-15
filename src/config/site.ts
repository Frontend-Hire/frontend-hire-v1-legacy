import {
  AlbumIcon,
  FileQuestionIcon,
  FolderGit2Icon,
  LibraryBigIcon,
  NotebookPenIcon,
  SpeechIcon,
} from 'lucide-react';

export const MENU_LINKS = [
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
];
