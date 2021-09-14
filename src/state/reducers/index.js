import searchValueReducer from "./searchValue";
import fetchedDataReducer from "./fetchValues";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  searchValueReducer,
  fetchedDataReducer,
});

export default allReducers;
