import CarsContext from "./carsContext";
import carsReducer from "./carsReducer";
import React, { useReducer, useContext, useEffect } from "react";
import axios from "axios";
import { CARS_ERROR, GET_CARS } from "../types";

const url = "http://localhost:5000";

const CarsState = (props) => {
  const initialState = {
    cars: null,
    error: null,
  };

  const [state, dispatch] = useReducer(carsReducer, initialState);

  const getCars = async () => {
    try {
      const res = await axios.get(`${url}/api/cars`);
      // console.log("cars: ", res.data);
      dispatch({
        type: GET_CARS,
        payload: res.data,
      });
    } catch (error) {
      console.error("Error fetching cars:", error);  // Better error logging
      dispatch({
        type: CARS_ERROR,
        payload: error.response ? error.response.data : error.message,
      });
    }
  };

  

  return (
    <CarsContext.Provider
      value={{
        cars: state.cars,
        error: state.error,
        getCars,
      }}
    >
      {props.children}
    </CarsContext.Provider>
  );
};

export default CarsState;
