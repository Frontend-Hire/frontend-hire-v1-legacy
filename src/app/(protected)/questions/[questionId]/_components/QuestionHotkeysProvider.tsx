import { useHotkeys } from 'react-hotkeys-hook';

interface Props {
  children: React.ReactNode;
}

export default function QuestionHotkeysProvider({ children }: Props) {
  useHotkeys('mod+s', () => {}, { preventDefault: true });
  useHotkeys('mod+a', () => {}, { preventDefault: true });
  return children;
}
