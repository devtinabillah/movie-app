import {
  HIDE_LOADING,
  RESET,
  SET_ERROR,
  SET_DATA,
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

export const setData = (data) => {
  return {
    type: SET_DATA,
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
