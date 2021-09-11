import React from "react";
import { SearchResultsWrapper, ResultCard, Title, MovieImage, MovieImageWrapper, MovieTextContentWrapper, TitleWrapper, TextWrapper } from "./style";
import { MovieGeneres } from "../../MovieGeneres";

import { Link } from "react-router-dom";
const SearchResults = ({ searchResults }) => {
  // console.log("logging from search results", searchResults);

  const { results } = searchResults;
  const generes = MovieGeneres.genres;

  console.log(generes);
  return (
    <React.Fragment>
      <SearchResultsWrapper>
        {results?.slice(0, 7).map(({ id, original_title, poster_path, release_date, vote_average }) => {
          const year = release_date?.slice(0, 4);
          {
            /* console.log(year); */
          }
          return (
            <Link to={`/${id}`}>
              <ResultCard>
                <MovieImageWrapper>
                  <MovieImage src={`https://image.tmdb.org/t/p/w200/${poster_path}`} />
                </MovieImageWrapper>
                <MovieTextContentWrapper>
                  <TitleWrapper>
                    <Title>{original_title}</Title>
                  </TitleWrapper>

                  <TextWrapper>
                    <p>{year}</p>
                    <p>{vote_average}</p>
                    <p>{vote_average}</p>
                  </TextWrapper>
                </MovieTextContentWrapper>
              </ResultCard>
            </Link>
          );
        })}
      </SearchResultsWrapper>
    </React.Fragment>
  );
};

export default SearchResults;
