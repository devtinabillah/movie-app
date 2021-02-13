import "./category_menu.scss";

const CategoryMenu = ({ menu }) => {
  return (
    // tambah class menu-active kalo active (ya iya lah dev! :)
    <div className="menu">
      <a href="#" id="menu">
        {menu}
      </a>
    </div>
  );
};

export default CategoryMenu;
