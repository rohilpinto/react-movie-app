import React, { useState, useEffect, useRef } from "react";

import { Link, useHistory } from "react-router-dom";
import { SearchInput, SearchBarWrapper, Form, HamburgerWrapper, FavoriteButtonWrapper, FavoriteButton, SearchContentContainer } from "./style";
import SearchResults from "../SearchResults";

import { Divide as Hamburger } from "hamburger-react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchValueAction, fetchSearchResults } from "../../state/actions";
import SideMenu from "../SideMenu";

const SearchBar = () => {
  const history = useHistory();
  const inputRef = useRef();
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.searchValueReducer);
  console.log(searchValue);
  const [focus, setFocus] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
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

  return (
    <>
      <SearchBarWrapper>
        <SearchContentContainer>
          {openMenu ? <SideMenu toggled={openMenu} toggle={setOpenMenu}></SideMenu> : null}
          <HamburgerWrapper>
            {/* <HamMenuIcon src={MenuIcon} /> */}
            <Hamburger size={40} color="#4FD1C5" toggled={openMenu} toggle={setOpenMenu}></Hamburger>
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
        </SearchContentContainer>

        {/* <HomeContainer>
          <HomeButton>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </HomeButton>
        </HomeContainer> */}
      </SearchBarWrapper>
    </>
  );
};

export default SearchBar;
