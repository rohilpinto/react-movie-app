const KEY = process.env.REACT_APP_MOVIE_API_KEY;

// import { useSelector } from "react-redux";
// import { searchValueReducer } from "../reducers/searchValue";

// const value = useSelector((state) => searchValueReducerReducer);

export const fetchSearchResults = () => {
  return async (dispatch, getState) => {
    dispatch({ type: "FETCH_POST_REQUEST" });

    try {
      const state = getState();
      const SearchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${state.searchValueReducer}&include_adult=false`;
      const fetchResults = await fetch(SearchUrl);
      const finalResp = await fetchResults.json();

      dispatch({ type: "FETCH_POST_SUCCESS", payload: finalResp });
    } catch (error) {
      dispatch({
        type: "FETCH_POST_FAILURE",
        error,
      });
    }
  };
};

export const setSearchValueAction = (data) => {
  return {
    type: "SET_VALUE",
    payload: data,
  };
};
