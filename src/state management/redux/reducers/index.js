import { combineReducers } from "redux";
import { CartReducer } from "./cartReducer";



export const AllReducers = combineReducers({
    cart:CartReducer
})