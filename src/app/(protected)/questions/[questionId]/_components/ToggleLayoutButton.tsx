import React from 'react';
import { Button } from '@/components/ui/button';
import VisuallyHidden from '@/components/ui/visually-hidden';
import { PanelsLeftBottomIcon, Columns3Icon } from 'lucide-react';
import Tooltip from '@/components/ui/tooltip';

type Layout = 'col-3' | 'col-2';

const LayoutIcons: { [key in Layout]: React.ReactNode } = {
  'col-3': <Columns3Icon />,
  'col-2': <PanelsLeftBottomIcon />,
};

export default function ToggleLayoutButton() {
  const [layout, setLayout] = React.useState<Layout>('col-3');

  const toggleLayout = () => {
    setLayout((prev) => (prev === 'col-3' ? 'col-2' : 'col-3'));
  };

  return (
    <Tooltip title="Toggle Layout">
      <Button
        size="icon"
        className="rounded-t-none bg-card hover:bg-card/90 active:bg-card/80"
        onClick={toggleLayout}
      >
        {LayoutIcons[layout]}
        <VisuallyHidden>Toggle Layout</VisuallyHidden>
      </Button>
    </Tooltip>
  );
}
