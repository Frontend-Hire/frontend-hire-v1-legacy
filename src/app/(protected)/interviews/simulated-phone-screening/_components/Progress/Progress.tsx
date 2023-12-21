import Prompt from './Prompt';
import Response from './Response';

export default function Progress() {
  return (
    <div className="flex flex-col gap-[20px]">
      <Prompt />
      <Response />
    </div>
  );
}
