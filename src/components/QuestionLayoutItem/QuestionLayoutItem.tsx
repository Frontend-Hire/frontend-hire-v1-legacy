import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { QuestionTab } from '@/types/Question';

type QuestionLayoutItemProps = {
  tabs: QuestionTab[];
  rightButtons?: React.ReactNode;
};

export default function QuestionLayoutItem({
  tabs,
  rightButtons,
}: QuestionLayoutItemProps) {
  const [activeTab, setActiveTab] = React.useState(tabs[0]?.value || '');

  return (
    <div className="h-full min-w-[200px]">
      <Tabs
        className="flex h-full flex-col"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <div className="z-[1] flex h-[40px] items-center justify-between bg-card/60">
          <TabsList className="rounded-none bg-card p-0">
            {tabs.map((tab) => (
              <TabsTrigger
                className="h-full rounded-none data-[state=active]:bg-muted"
                key={tab.value}
                value={tab.value}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="flex items-center">{rightButtons}</div>
        </div>
        {tabs.map((tab) => (
          <TabsContent
            className="mt-0 flex h-full flex-col"
            asChild
            forceMount
            key={tab.value}
            value={tab.value}
          >
            <div className="h-0 flex-grow overflow-auto bg-[#151515] data-[state=inactive]:hidden">
              {tab.content}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
