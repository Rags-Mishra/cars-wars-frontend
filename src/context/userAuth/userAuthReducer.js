import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
  LOGOUT,
} from "../types";

const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        error: action.payload.error,
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        ...action.payload,
        error: action.payload.error,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      console.log(localStorage.getItem("token"));
      return {
        ...state,
        ...action.payload,
        isAuthenticated: false,
      };
    case SIGNUP_SUCCESS:
      break;
    default:
      return state;
  }
};
export default authReducer;
