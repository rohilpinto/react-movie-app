import React from "react";
import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";
const SearchedMovies = () => {
  let { id } = useParams();

  return <div>searched movies</div>;
};

export default SearchedMovies;
