import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
import { SearchInput, SearchBarWrapper, Form, HamburgerWrapper, HamMenuIcon } from "./style";
import SearchResults from "../SearchResults";
import MenuIcon from "../../assets/hamburger.svg";

import { useSelector, useDispatch } from "react-redux";
import { setSearchValueAction, fetchSearchResults } from "../../state/actions";

const KEY = process.env.REACT_APP_MOVIE_API_KEY;

const SearchBar = () => {
  const [value, setValue] = useState("");
  const [searched, setSearched] = useState([]);
  const history = useHistory();
  const SearchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${value}&include_adult=false`;

  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.searchValueReducer);
  console.log(searchValue);
  // returns array of searched movies

  // submit after entering the movie name
  const handleSubmit = (e) => {
    e.preventDefault();

    history.push(`/searched/${searchValue}`);

    // setValue("");

    dispatch(setSearchValueAction(""));
  };

  // useEffect(() => {
  //   const fetchSearch = async () => {
  //     try {
  //       const resp = await fetch(SearchUrl);
  //       const searchMovieResult = await resp.json();

  //       setSearched(searchMovieResult);
  //     } catch (error) {
  //       console.log("search error", error);
  //     }
  //   };

  //   fetchSearch();

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [searchValue]);

  useEffect(() => {
    dispatch(fetchSearchResults());
  }, [searchValue]);

  // console.log(searchValue);

  return (
    <SearchBarWrapper>
      <HamburgerWrapper>
        <HamMenuIcon src={MenuIcon} />
      </HamburgerWrapper>
      <Form onSubmit={handleSubmit}>
        {/* <SearchInput type="text" value={value} placeholder="Movie Name" onChange={(e) => setValue(e.target.value)} /> */}
        <SearchInput type="text" value={searchValue} placeholder="Enter movie name" onChange={(e) => dispatch(setSearchValueAction(e.target.value))} />

        {searchValue !== "" ? <SearchResults searchResults={searched}></SearchResults> : null}
      </Form>
    </SearchBarWrapper>
  );
};

export default SearchBar;
