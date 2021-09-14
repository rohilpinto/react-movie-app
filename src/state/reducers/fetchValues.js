const initialState = {
  data: [],
  loading: false,
  error: null,
};

const fetchedDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POST_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_POST_SUCCESS":
      return {
        ...state,
        loading: false,
         
        data: action.payload,
      };
    case "FETCH_POST_FAILURE":
      return {
        ...state,
        loading: true,
        error: action.error,
      };

    default:
      return state;
  }
};

export default fetchedDataReducer;
