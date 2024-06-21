import { useReducer, useState } from "react";
import axios from "axios";
import UserAuthContext from "./userAuthContext.js";
import authReducer from "./userAuthReducer.js";
import setAuthToken from "../../utils/setAuthToken.js";
import { LOGIN_SUCCESS, LOGIN_FAILED,SIGNUP_ERROR,SIGNUP_SUCCESS,LOGOUT } from "../types.js";

let url = "http://localhost:5000";

const UserAuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  //   const loadUser = async (token) => {
  //     setAuthToken(token);

  //     try {
  //       const res = await axios.get(`${url}/api/users/login`);

  //       dispatch({
  //         type: USER_LOADED,
  //         payload: res.data,
  //       });
  //     } catch (err) {
  //       dispatch({ type: AUTH_ERROR });
  //     }
  //   };

  // Register User
    const signup = async (formData) => {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        const res = await axios.post(`${url}/api/users/register`, formData, config);

        dispatch({
          type: SIGNUP_SUCCESS,
          payload: res.data,
        });

        // loadUser(res.data?.token);
      } catch (err) {
        alert("User Exists");
        dispatch({
          type: SIGNUP_ERROR,
          payload: err,
        });
      }
    };

  // Login User
  const login = async (formData,type) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(`${url}/api/${type}/login`, formData, config);
      console.log(res.data);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });

      //   loadUser(res.data?.token);
    } catch (err) {
      alert("Invalid Credentials");
      dispatch({
        type: LOGIN_FAILED,
        payload: err,
      });
    }
  };

  // Logout
    const logout = () => dispatch({ type: LOGOUT });

  //   // Clear Errors
  //   const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <UserAuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        // register,
        // loadUser,
        login,
        signup,
        logout,
        // clearErrors,
      }}
    >
      {props.children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthState;
