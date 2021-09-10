import React from "react";
import { SearchResultsWrapper, ResultCard } from "./style";
const SearchResults = ({ searchResults }) => {
  // console.log("logging from search results", searchResults);

  const { results } = searchResults;


  console.log("results array", results);
  return (
    <React.Fragment>
      <SearchResultsWrapper>
          
      </SearchResultsWrapper>
    </React.Fragment>
  );
};

export default SearchResults;
