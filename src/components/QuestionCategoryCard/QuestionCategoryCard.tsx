import Heading from '@/components/Heading';
import Text from '@/components/Text';

interface Props {
  category: string;
  description?: string;
  noOfQuestions: number;
}

export default function QuestionCategoryCard({
  category,
  description,
  noOfQuestions,
}: Props) {
  return (
    <div className="flex w-40 flex-col items-center justify-center rounded-lg border p-2 shadow-sm">
      <Heading variant="h3">{category}</Heading>
      <Text>{description}</Text>
      <Text>{noOfQuestions} Questions</Text>
    </div>
  );
}
