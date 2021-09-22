import React, { useState, useEffect, useRef } from "react";

import { Link, useHistory } from "react-router-dom";
import { SearchInput, SearchBarWrapper, Form, HamburgerWrapper, HamMenuIcon, FavoriteButtonWrapper, FavoriteButton } from "./style";
import SearchResults from "../SearchResults";
import MenuIcon from "../../assets/hamburger.svg";

import { useSelector, useDispatch } from "react-redux";
import { setSearchValueAction, fetchSearchResults } from "../../state/actions";

import ButtonMain from "./../Button";

const KEY = process.env.REACT_APP_MOVIE_API_KEY;

const SearchBar = () => {
  const history = useHistory();
  const inputRef = useRef();
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.searchValueReducer);
  console.log(searchValue);
  const [focus, setFocus] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push(`/searched/${searchValue}`);

    dispatch(setSearchValueAction(""));
  };

  useEffect(() => {
    dispatch(fetchSearchResults());
  }, [searchValue, focus]);

  useEffect(() => {
    inputRef.current.addEventListener("focusout", () => {
      return setFocus(false);
    });
  });
  useEffect(() => {
    inputRef.current.addEventListener("focusin", () => {
      return setFocus(true);
    });
  });

  console.log(focus);
  return (
    <SearchBarWrapper>
      <HamburgerWrapper>
        <HamMenuIcon src={MenuIcon} />
      </HamburgerWrapper>

      <Form onSubmit={handleSubmit}>
        {/* <SearchInput type="text" value={value} placeholder="Movie Name" onChange={(e) => setValue(e.target.value)} /> */}
        <SearchInput ref={inputRef} type="text" value={searchValue} placeholder="Enter movie name" onChange={(e) => dispatch(setSearchValueAction(e.target.value))} />

        {searchValue !== "" ? <SearchResults focus={focus}></SearchResults> : null}
      </Form>

      <FavoriteButtonWrapper>
        <Link to="/favorites">
          <FavoriteButton>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </FavoriteButton>
        </Link>
      </FavoriteButtonWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
