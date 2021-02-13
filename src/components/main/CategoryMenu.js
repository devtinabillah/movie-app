import "./category_menu.scss";

const CategoryMenu = ({ menu }) => {
  return (
    <div className="menu">
      <a href="#" id="menu">
        {menu}
      </a>
    </div>
  );
};

export default CategoryMenu;
