import DesktopSidebar from './DesktopSidebar';
import MobileSidebar from './MobileSidebar';

export type SidebarProps = {
  pages: [string, string][];
};

export default function Sidebar({ pages }: SidebarProps) {
  return (
    <>
      <DesktopSidebar pages={pages} />
      <MobileSidebar pages={pages} />
    </>
  );
}
