import React, { useState, useEffect } from "react";

import GlobalStyle from "../../GlobalStyles";
import MoviesHome from "../MoviesHome/index";

import { MainWrapper, PageButtons, PageButtonWrapper, TextWrapper, Arrows, ArrowsWrapper } from "./style";
import SearchBar from "../SearchBar";
import nextArrow from "../../assets/next-arrow.svg";
import prevArrow from "../../assets/left-arrow.svg";
const KEY = process.env.REACT_APP_MOVIE_API_KEY;

const Movies = () => {
  const [page, setPage] = useState(1);
  const [popularMovies, setPopularMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=en-US&page=${page}`;

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const MovieList = await response.json();

      setPopularMovies(MovieList);
      setIsLoading(true);
    } catch (error) {
      setIsLoading(false);
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, [page]);

  console.log(page);
  return (
    <div>
      <MainWrapper>
        <GlobalStyle />
        {/* <SearchBar></SearchBar> */}
        <MoviesHome popularMovies={popularMovies} setPopularMovies={setPopularMovies} isLoading={isLoading} setIsLoading={setIsLoading}></MoviesHome>

        <PageButtonWrapper>
          <PageButtons style={{ visibility: page > 1 ? "visible" : "hidden" }} onClick={() => setPage(page - 1)}>
            <ArrowsWrapper>
              <Arrows src={prevArrow}></Arrows>
            </ArrowsWrapper>
            <TextWrapper>
              <p>Previous</p>
            </TextWrapper>
          </PageButtons>
          <PageButtons className="next-btn" onClick={() => setPage(page + 1)}>
            <TextWrapper>
              <p>Next</p>
            </TextWrapper>

            <ArrowsWrapper>
              <Arrows src={nextArrow}></Arrows>
            </ArrowsWrapper>
          </PageButtons>
        </PageButtonWrapper>
      </MainWrapper>
    </div>
  );
};

export default Movies;
