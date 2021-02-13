import "components/sidebar/sidebar_menu.scss";

const SidebarMenu = ({ icon, menuName, isActive }) => {
  return (
    <li className={`list-menu ${isActive && "active"}`}>
      <div className="sign" />
      <img src={icon} alt="" />
      <p>{menuName}</p>
    </li>
  );
};

export default SidebarMenu;
