import { useHotkeys } from 'react-hotkeys-hook';

export default function QuestionHotkeysProvider({
  children,
}: React.PropsWithChildren) {
  useHotkeys('mod+s', () => {}, { preventDefault: true });
  useHotkeys('mod+a', () => {}, { preventDefault: true });
  return children;
}
