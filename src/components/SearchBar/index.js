import React, { useState, useEffect } from "react";
// import { useState } from "react";

import { SearchInput, SearchBarWrapper, Form, HamburgerWrapper, HamMenuIcon } from "./style";
import SearchResults from "../SearchResults";
import MenuIcon from "../../assets/hamburger.svg";

const KEY = process.env.REACT_APP_MOVIE_API_KEY;

const SearchBar = () => {
  const [value, setValue] = useState("");
  const [searched, setSearched] = useState([]);

  const SearchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${value}&include_adult=false`;

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log('logged')
  };

  useEffect(() => {
    const fetchSearch = async () => {
      try {
        const resp = await fetch(SearchUrl);
        const searchMovieResult = await resp.json();

        setSearched(searchMovieResult);
      } catch (error) {
        console.log("search error", error);
      }
    };

    fetchSearch();
  }, [value]);

  // console.log(value)
  return (
    <SearchBarWrapper>
      <HamburgerWrapper>
        <HamMenuIcon src={MenuIcon} />
      </HamburgerWrapper>
      <Form onSubmit={handleSubmit}>
        <SearchInput type="text" value={value} placeholder="Search" onChange={(e) => setValue(e.target.value)} />

        <SearchResults searchResults={searched}></SearchResults>
      </Form>
    </SearchBarWrapper>
  );
};

export default SearchBar;
