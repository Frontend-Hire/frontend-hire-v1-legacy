import * as RadixTabs from '@radix-ui/react-tabs';

interface Props {
  tabs: [
    {
      value: string;
      label: React.ReactNode;
      content: React.ReactNode;
    },
  ];
}

export default function Tabs({ tabs }: Props) {
  return (
    <RadixTabs.Root
      className="flex h-full flex-col"
      defaultValue={tabs[0].value}
    >
      <RadixTabs.List className="flex border-b border-gray-800 bg-gray-600 font-semibold text-white">
        {tabs.map((tab) => (
          <RadixTabs.Trigger
            className="flex items-center justify-center px-4 py-3 hover:bg-gray-700 data-[state=active]:bg-gray-800"
            value={tab.value}
            key={tab.value}
          >
            {tab.label}
          </RadixTabs.Trigger>
        ))}
      </RadixTabs.List>
      {tabs.map((tab) => (
        <RadixTabs.Content
          className="h-0 flex-grow overflow-auto p-2"
          value={tab.value}
          key={tab.value}
        >
          {tab.content}
        </RadixTabs.Content>
      ))}
    </RadixTabs.Root>
  );
}
