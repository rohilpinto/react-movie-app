import searchValueReducer from "./searchValue";
import fetchedDataReducer from "./fetchValues";
// import setFavoriteReducer from "./setFavorite";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  searchValueReducer,
  fetchedDataReducer,
});

export default allReducers;
