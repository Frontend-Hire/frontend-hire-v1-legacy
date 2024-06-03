import DesktopSidebar from './DesktopSidebar';
import MobileSidebar from './MobileSidebar';

export type SidebarProps = {
  pages: [string, string][];
};

export default function Sidebar({ pages }: SidebarProps) {
  return (
    // This div is needed to not break the layout
    // This helps the sticky positioning of the sidebar
    <div>
      <DesktopSidebar pages={pages} />
      <MobileSidebar pages={pages} />
    </div>
  );
}
