import {
  HIDE_LOADING,
  RESET,
  SET_ERROR,
  SET_NOW_SHOWING,
  SET_MOVIE_BY_GENRE,
  SET_TOP_RATED,
  SET_MESSAGE,
  SHOW_LOADING,
} from "./types";

export const showLoading = () => {
  return {
    type: SHOW_LOADING,
  };
};

export const hideLoading = () => {
  return {
    type: HIDE_LOADING,
  };
};

export const setError = (error) => {
  return {
    type: SET_ERROR,
    payload: error,
  };
};

export const setNowShowing = (data) => {
  return {
    type: SET_NOW_SHOWING,
    payload: data,
  };
};

export const setMoviesByGenre = (data) => {
  return {
    type: SET_MOVIE_BY_GENRE,
    payload: data,
  };
};

export const setTopRated = (data) => {
  return {
    type: SET_TOP_RATED,
    payload: data,
  };
};

export const setMessage = (data) => {
  return {
    type: SET_MESSAGE,
    payload: data,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};
