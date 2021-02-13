import {
  HIDE_LOADING,
  RESET,
  SET_ERROR,
  SET_DATA,
  SET_MESSAGE,
  SHOW_LOADING,
} from "./types";

const initialState = {
  nowShowing: [],
  isLoading: true,
  message: "",
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case HIDE_LOADING: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case SET_DATA: {
      return {
        ...state,
        nowShowing: action.payload,
      };
    }
    case SET_MESSAGE: {
      return {
        ...state,
        message: action.payload,
      };
    }
    case RESET: {
      return {
        ...state,
        message: "",
        error: "",
      };
    }
    default:
      return state;
  }
};

export default reducer;
