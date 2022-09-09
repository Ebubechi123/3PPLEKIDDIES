import {  legacy_createStore } from "redux";
import { AllReducers } from "./reducers";



export const Store = legacy_createStore(AllReducers,{},window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__())