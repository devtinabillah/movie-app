import "container/sidebar.scss";
import SidebarLogo from "components/sidebar/SidebarLogo";
import SidebarMenu from "components/sidebar/SidebarMenu";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <SidebarLogo logo="https://plchldr.co/i/100x25" />
      </div>
      <div className="sidebar-menu">
        <ul>
          <SidebarMenu
            icon="https://plchldr.co/i/24x24"
            menuName="Now Showing"
          />
          <SidebarMenu
            icon="https://plchldr.co/i/24x24"
            menuName="My Tickets"
          />
          <SidebarMenu icon="https://plchldr.co/i/24x24" menuName="Profile" />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
