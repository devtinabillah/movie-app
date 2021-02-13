import { NOW_SHOWING } from "constants/apiRoute";
import api from "utils/api";
import { genres } from "utils/genres";
import { inBoth } from "utils/set";
import { hideLoading, reset, setError, setData, showLoading } from "./actions";

export const getNowPlayingMovies = () => {
  return (dispatch) => {
    dispatch(showLoading());

    api
      .get(NOW_SHOWING, { params: { api_key: process.env.REACT_APP_API_KEY } })
      .then((response) => {
        const data = response.data.results.map((item) => {
          const background = `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`;
          const releaseDate = item.release_date.split("-")[0];
          const genreList = inBoth(genres, item.genre_ids, (a, b) => a.id === b)
            .map((genre) => genre.name)
            .join(" | ");

          return {
            id: item.id,
            background: background,
            title: item.original_title,
            description: item.overview,
            genres: genreList,
            releaseDate: releaseDate,
            rating: item.vote_average,
            voteCount: item.vote_count,
          };
        });

        dispatch(setData(data));
        dispatch(hideLoading());
      })
      .catch((error) => {
        dispatch(setError(error));
        dispatch(hideLoading());
      });
  };
};

export const clearCommon = () => {
  return (dispatch) => {
    dispatch(reset());
  };
};
