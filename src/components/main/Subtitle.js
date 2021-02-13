import "./subtitle.scss";

const Subtitle = ({ categoryTitle }) => {
  return (
    <div className="category-title">
      <h3>{categoryTitle}</h3>
    </div>
  );
};

export default Subtitle;
