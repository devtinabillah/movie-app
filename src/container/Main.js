import "container/main.scss";
import Icon from "components/main/Icon";
import NowShowingTop from "components/main/NowShowingTop";
import NowShowingMovie from "components/main/NowShowingMovie";
import {
  getNowPlayingMovies,
  getMoviesWithGenre,
  getTopRatedMovies,
} from "../redux";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Subtitle from "components/main/Subtitle";
import CategoryMenu from "components/main/CategoryMenu";
import CategoryMovie from "components/main/CategoryMovie";
import { genres } from "utils/genres";

const Main = () => {
  const dispatch = useDispatch();
  const [genreId, setGenreId] = useState(genres[0].id);
  const { nowShowing, moviesByGenre, topRated } = useSelector(
    (state) => state.common
  );

  useEffect(() => {
    dispatch(getNowPlayingMovies());
    dispatch(getTopRatedMovies());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getMoviesWithGenre(genreId));
  }, [dispatch, genreId]);

  const handleGenreChanges = (genreId) => {
    setGenreId(genreId);
  };

  return (
    <div className="main-container">
      <div className="main-top">
        <div className="left">
          <NowShowingTop />
        </div>
        <div className="right">
          <Icon icon="https://plchldr.co/i/24x24" />
          <Icon icon="https://plchldr.co/i/24x24" />
        </div>
      </div>

      <div className="main-movie">
        {nowShowing.map((item) => (
          <NowShowingMovie
            key={item.id}
            moviePoster={item.background}
            movieTitle={item.title}
            movieYear={item.releaseDate}
            movieCategory={item.genres}
            movieRating={item.rating}
            movieRatingAmount={item.voteCount}
            movieDuration="143 min"
            movieAgeRating="PG-13"
          />
        ))}
      </div>

      <div className="browse-by-category">
        <Subtitle categoryTitle="Browse by category" />
        <div className="category-menu">
          {genres.map((item) => (
            <CategoryMenu
              key={item.id}
              menu={item.name}
              isActive={item.id === genreId}
              onClick={() => handleGenreChanges(item.id)}
            />
          ))}
        </div>
        <div className="category-movie">
          {moviesByGenre.map((item) => (
            <CategoryMovie
              key={item.id}
              moviePoster={item.background}
              movieTitle={item.title}
              movieYear={item.releaseDate}
              movieCategory={item.genres}
              movieRating={item.rating}
              movieRatingAmount={item.voteCount}
            />
          ))}
        </div>
      </div>

      <div className="top-rated">
        <Subtitle categoryTitle="Top Rated" />
        <div className="category-movie">
          {topRated.map((item) => (
            <CategoryMovie
              key={item.id}
              moviePoster={item.background}
              movieTitle={item.title}
              movieYear={item.releaseDate}
              movieCategory={item.genres}
              movieRating={item.rating}
              movieRatingAmount={item.voteCount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
