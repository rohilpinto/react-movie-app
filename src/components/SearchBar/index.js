import React from "react";
import { useState } from "react";
import { SearchInput, SearchBarWrapper, Form, HamburgerWrapper, HamMenuIcon } from "./style";
import MenuIcon from "../../assets/hamburger.svg";
const SearchBar = () => {
  const [value, setValue] = useState();

  return (
    <SearchBarWrapper>
      <HamburgerWrapper>
        <HamMenuIcon src={MenuIcon} />
      </HamburgerWrapper>
      <Form>
        <SearchInput type="text" value={value} placeholder="Search " />
      </Form>
    </SearchBarWrapper>
  );
};

export default SearchBar;
