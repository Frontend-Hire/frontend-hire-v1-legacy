import { ReactNode } from 'react';
import Tabs, { ITab } from '../Tabs';

interface Props {
  tabs: ITab[];
  rightButtons?: ReactNode;
}

export default function QuestionLayoutItem({ tabs, rightButtons }: Props) {
  return (
    <div className="h-full min-w-[300px]">
      <Tabs tabs={tabs} rightButtons={rightButtons} />
    </div>
  );
}
