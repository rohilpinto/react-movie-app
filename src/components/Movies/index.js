import React, { useState, useEffect } from "react";

import GlobalStyle from "../../GlobalStyles";
import MoviesHome from "../MoviesHome/index";
import { MainWrapper } from "./style";
import SearchBar from "../SearchBar";

const KEY = process.env.REACT_APP_MOVIE_API_KEY;

const Movies = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=en-US&page=1`;

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const MovieList = await response.json();

      setPopularMovies(MovieList);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    console.log("this is movie");
    fetchData();
  }, []);

  return (
    <div>
      <MainWrapper>
        <GlobalStyle />
        <SearchBar></SearchBar>
        <MoviesHome popularMovies={popularMovies} setPopularMovies={setPopularMovies}></MoviesHome>
      </MainWrapper>
    </div>
  );
};

export default Movies;
