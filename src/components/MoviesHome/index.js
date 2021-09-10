import React from "react";

import MovieCard from "../MovieCard";

import "../../App.scss";
import { ContentContainer, ContentWrapper } from "./style";

const MoviesHome = ({ popularMovies, setPopularMovies, isLoading, setIsLoading }) => {
  return (
    <>
      <ContentContainer>
        {popularMovies?.results?.map((movie) => {
          return (
            <ContentWrapper key={movie.id}>
              <MovieCard movie={movie} isLoading={isLoading} setIsLoading={setIsLoading} />
            </ContentWrapper>
          );
        })}
      </ContentContainer>
    </>
  );
};

export default MoviesHome;
