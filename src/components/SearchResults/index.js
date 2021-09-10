import React from "react";
import { SearchResultsWrapper, ResultCard, Title, MovieImage } from "./style";
const SearchResults = ({ searchResults }) => {
  // console.log("logging from search results", searchResults);
  const { results } = searchResults;

  console.log(results);
  return (
    <React.Fragment>
      <SearchResultsWrapper>
        {results?.slice(0, 7).map(({ original_title, poster_path }) => {
          return (
            <ResultCard>
            <MovieImage src={`https://image.tmdb.org/t/p/w200/${poster_path}`} width={50} />
              <Title>{original_title}</Title>
             
            </ResultCard>
          );
        })}
      </SearchResultsWrapper>
    </React.Fragment>
  );
};

export default SearchResults;
