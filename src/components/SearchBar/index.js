import React, { useState, useEffect } from "react";
// import { useState } from "react";
import { useHistory } from "react-router-dom";
import { SearchInput, SearchBarWrapper, Form, HamburgerWrapper, HamMenuIcon } from "./style";
import SearchResults from "../SearchResults";
import MenuIcon from "../../assets/hamburger.svg";

const KEY = process.env.REACT_APP_MOVIE_API_KEY;

const SearchBar = () => {
  const [value, setValue] = useState("");
  const [searched, setSearched] = useState([]);
  const history = useHistory();
  const SearchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${value}&include_adult=false`;

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/searched/${value}`);
    setValue("");

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

      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  // console.log(value)
  return (
    <SearchBarWrapper>
      <HamburgerWrapper>
        <HamMenuIcon src={MenuIcon} />
      </HamburgerWrapper>
      <Form onSubmit={handleSubmit}>
        <SearchInput type="text" value={value} placeholder="Search" onChange={(e) => setValue(e.target.value)} />

        {value > 0 ? <SearchResults searchResults={searched} value={value}></SearchResults> : null}
      </Form>
    </SearchBarWrapper>
  );
};

export default SearchBar;
