import * as React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { QuestionTab } from '@/types/Question';

interface Props {
  tabs: QuestionTab[];
  rightButtons?: React.ReactNode;
}

export default function QuestionLayoutItem({ tabs, rightButtons }: Props) {
  return (
    <div className="h-full min-w-[200px]">
      <Tabs
        className="flex h-full flex-col"
        defaultValue={tabs[0]?.value || ''}
      >
        <div className="flex h-[40px] items-center justify-between bg-gray-600">
          <TabsList>
            {tabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="flex items-center">{rightButtons}</div>
        </div>
        {tabs.map((tab) => (
          <TabsContent
            className="flex h-full flex-col"
            asChild
            key={tab.value}
            value={tab.value}
          >
            <div className="h-0 flex-grow overflow-auto">{tab.content}</div>
          </TabsContent>
        ))}
      </Tabs>

      {/* <Tabs tabs={tabs} rightButtons={rightButtons} /> */}
    </div>
  );
}
