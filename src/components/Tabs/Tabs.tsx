import * as RadixTabs from '@radix-ui/react-tabs';

export interface ITab {
  value: string;
  label: React.ReactNode;
  content: React.ReactNode;
}

interface Props {
  tabs: ITab[];
  rightButtons?: React.ReactNode;
}

export default function Tabs({ tabs, rightButtons }: Props) {
  if (tabs.length === 0) return null;

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
        {rightButtons ? (
          <div className="flex grow items-center justify-end gap-2">
            {rightButtons}
          </div>
        ) : null}
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
