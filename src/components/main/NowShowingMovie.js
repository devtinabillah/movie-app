import "./now_showing_movie.scss";

const NowShowingMovie = ({
  moviePoster,
  movieTitle,
  movieYear,
  movieCategory,
  movieRating,
  movieRatingAmount,
  movieDuration,
  movieAgeRating,
}) => {
  return (
    <div className="main-movie-card">
      <div className="main-poster">
        <img src={moviePoster} alt="" />
        <div className="watch-trailer">
          <img id="icon" src="https://plchldr.co/i/15x15" alt="" />
          <small>Watch trailer</small>
        </div>
      </div>
      <div className="main-info">
        <div className="left">
          <h2> {movieTitle} </h2>
          <div className="movie-info">
            <small>{movieYear}</small>
            <small>&middot;</small>
            <small>{movieCategory}</small>
          </div>
          <div className="movie-rating">
            <img src="https://plchldr.co/i/10x10" alt="plchldr.co" />
            <small>{movieRating}</small>
            <small>({movieRatingAmount})</small>
          </div>
        </div>
        <div className="right">
          <small>{movieDuration}</small>
          <small>{movieAgeRating}</small>
        </div>
      </div>
    </div>
  );
};

export default NowShowingMovie;
