import { getRandomWelcomeMessage } from '../../_utils/getRandomWelcomeMessage';

interface Props {
  userName?: string;
}

export default function WelcomeMessage({ userName = 'Guest' }: Props) {
  return (
    <p className="my-2 font-medium">{getRandomWelcomeMessage(userName)}</p>
  );
}
