import { CARS_ERROR, GET_CARS } from "../types";
const carsReducer = (state,action)=>{
switch(action.type){
    case GET_CARS:

        return{
            ...state,
            cars: action.payload
        }
    case CARS_ERROR:
        return{
            ...state,
            error:action.payload.err
        }
    default:
        return state;
}
}
export default carsReducer;