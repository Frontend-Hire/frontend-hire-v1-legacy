'use client';

import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';
import { TabsContent } from '@radix-ui/react-tabs';

type Tab = {
  label: string;
  content: React.ReactNode;
};

type QuestionMobileLayoutProps = {
  tabs: (Tab | undefined)[];
};

export default function QuestionMobileLayout({
  tabs,
}: QuestionMobileLayoutProps) {
  const tabsCleaned: NonNullable<Tab>[] = tabs.filter(
    (tab) => tab !== undefined,
  ) as NonNullable<Tab>[];

  const [activeTab, setActiveTab] = React.useState(tabsCleaned[0].label);
  return (
    <Tabs
      className="flex h-full flex-col"
      value={activeTab}
      onValueChange={setActiveTab}
    >
      <div className="flex h-[40px] items-center justify-between bg-gray-600">
        <TabsList>
          {tabsCleaned.map((tab) => (
            <TabsTrigger key={tab.label} value={tab.label}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      {tabsCleaned.map((tab) => (
        <TabsContent
          className="flex h-full flex-col"
          asChild
          forceMount
          key={tab.label}
          value={tab.label}
        >
          <div className="h-0 flex-grow overflow-auto data-[state=inactive]:hidden">
            {tab.content}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
