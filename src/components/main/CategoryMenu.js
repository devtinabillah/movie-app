import "./category_menu.scss";

const CategoryMenu = ({ menu, isActive, onClick }) => {
  return (
    // tambah class menu-active kalo active (ya iya lah dev! :)
    <div className={`menu ${isActive && "menu-active"}`} onClick={onClick}>
      <span id="menu">{menu}</span>
    </div>
  );
};

export default CategoryMenu;
