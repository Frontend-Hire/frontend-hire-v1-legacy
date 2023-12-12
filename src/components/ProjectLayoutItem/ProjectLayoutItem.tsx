'use client';

import * as React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProjectTab } from '@/types/Project';

interface Props {
  tabs: ProjectTab[];
  rightButtons?: React.ReactNode;
}

export default function ProjectLayoutItem({ tabs, rightButtons }: Props) {
  const [activeTab, setActiveTab] = React.useState(tabs[0]?.value || '');

  return (
    <div className="h-full min-w-[200px]">
      <Tabs
        className="flex h-full flex-col"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <div className="flex h-[40px] items-center justify-between bg-card">
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
            forceMount
            key={tab.value}
            value={tab.value}
          >
            <div className="h-0 flex-grow overflow-auto data-[state=inactive]:hidden">
              {tab.content}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
