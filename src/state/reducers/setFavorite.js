const initialState = {
  favoriteList: [],
  filteredFavoriteList: [],
};

const setFavoriteReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "SET_FAVORITE":
      return (state = {
        ...state,
        favoriteList: [...state.favoriteList, action.payload],
      });

    // case "FILTER_FAVORITE":
    //   return {};

    default:
      return state;
  }
};

export default setFavoriteReducer;
