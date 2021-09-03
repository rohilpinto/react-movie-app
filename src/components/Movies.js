import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyles";
import MoviesHome from "./MoviesHome";
// import MovieContent from "./MovieContent";

const KEY = process.env.REACT_APP_MOVIE_API_KEY;

const MainWrapper = styled.div`
  width: 100%;
  background: grey;
`;

const Movies = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  // const url = `https://api.themoviedb.org/3/movie/550?api_key=${KEY}`;
  const url = `https://api.themoviedb.org/3/discover/tv?api_key=${KEY}&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=1`;

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
    fetchData();
  }, []);

  return (
    <div>
      <MainWrapper>
        <GlobalStyle />
        <MoviesHome popularMovies={popularMovies} setPopularMovies={setPopularMovies}></MoviesHome>
      </MainWrapper>
    </div>
  );
};

export default Movies;
