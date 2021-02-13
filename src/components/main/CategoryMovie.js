import "./category_movie.scss";

const CategoryMovie = ({
  moviePoster,
  movieTitle,
  movieYear,
  movieCategory,
  movieRating,
  movieRatingAmount,
}) => {
  return (
    <div className="movie-card">
      <div className="poster">
        <img src={moviePoster} alt="" />
      </div>
      <div className="info">
        <div className="left">
          <h3> {movieTitle} </h3>
          <div className="movie-info">
            <small>{movieYear}</small>
            <small>{movieCategory}</small>
          </div>
          <div className="movie-rating">
            <img src="https://plchldr.co/i/10x10" alt="plchldr.co" />
            <small>{movieRating}</small>
            <small>({movieRatingAmount})</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryMovie;
