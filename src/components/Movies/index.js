import React, { useState, useEffect } from "react";

import GlobalStyle from "../../GlobalStyles";
import MoviesHome from "../MoviesHome/index";
import { MainWrapper, PageButtons, PageButtonWrapper } from "./style";
import SearchBar from "../SearchBar";
 

const KEY = process.env.REACT_APP_MOVIE_API_KEY;

const Movies = () => {
  const [page, setPage] = useState(1);
  const [popularMovies, setPopularMovies] = useState([]);

  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=en-US&page=${page}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const MovieList = await response.json();

        setPopularMovies(MovieList);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div>
      <MainWrapper>
        <GlobalStyle />
        <SearchBar></SearchBar>
        <MoviesHome popularMovies={popularMovies} setPopularMovies={setPopularMovies}></MoviesHome>

        <PageButtonWrapper>
          <PageButtons style={{ visibility: page > 1 ? "visible" : "hidden" }} onClick={() => setPage(page - 1)}>
            Previous {page - 1}
          </PageButtons>
          <PageButtons
            className="next-btn"
            onClick={() =>
              setPage(
                page + 1,
                window.scrollTo({
                  top: 100,
                  left: 100,
                  behavior: "smooth",
                })
              )
            }
          >
            Next {page}
          </PageButtons>
        </PageButtonWrapper>
      </MainWrapper>
    </div>
  );
};

export default Movies;
