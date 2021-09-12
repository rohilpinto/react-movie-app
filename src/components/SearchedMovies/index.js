import React from "react";

import { useParams } from "react-router-dom";
const SearchedMovies = () => {
  let { id } = useParams();

  console.log(id);
  return <div>searched movies</div>;
};

export default SearchedMovies;
