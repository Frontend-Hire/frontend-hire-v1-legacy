import Link from 'next/link';
import Text from '../Text';
import VisuallyHidden from '../VisuallyHidden';
import Checkbox from '../Checkbox';

interface Props {
  id: string;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  title: string;
  skill: string;
  isCompleted: boolean;
  isFavorite: boolean;
}

export default function QuestionItem({
  id,
  skill,
  title,
  difficulty,
  isCompleted,
  isFavorite,
}: Props) {
  return (
    <div>
      <VisuallyHidden>{difficulty}</VisuallyHidden>
      <Checkbox size="md" />
      <Link href={`questions/${skill}/${id}`}>
        <Text>{title}</Text>
      </Link>
    </div>
  );
}
