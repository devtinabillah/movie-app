import "container/main.scss";
import Icon from "components/main/Icon";
import NowShowingTop from "components/main/NowShowingTop";
import NowShowingMovie from "components/main/NowShowingMovie";
import { getNowPlayingMovies } from "../redux";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Main = () => {
  const dispatch = useDispatch();
  const { nowShowing } = useSelector((state) => state.common);

  useEffect(() => {
    dispatch(getNowPlayingMovies());
  }, [dispatch]);

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
      <div className=""></div>
    </div>
  );
};

export default Main;
