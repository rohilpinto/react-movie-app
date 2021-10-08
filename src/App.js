import "./App.scss";
import React from "react";
import SearchBar from "./components/SearchBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movies from "./components/Movies";

import Favorites from "./components/Favorites";
import MovieDetails from "./components/MovieDetails";
import SearchedMovies from "./components/SearchedMovies";
import styled from "styled-components";
import ScrollToTop from "./components/ScrollToTop";

import GlobalStyle from "./GlobalStyles";
const AppWrapper = styled.div`
  padding: 60px;
`;

const App = () => {
  return (
    <Router>
      <GlobalStyle></GlobalStyle>
      <ScrollToTop></ScrollToTop>
      <AppWrapper className="App">
        <SearchBar></SearchBar>
        <Switch>
          <Route path="/" exact component={Movies} />
          <Route path="/movie/:movieDetailsID" exact component={MovieDetails} />
          <Route path="/searched/:id" exact component={SearchedMovies} />
          <Route path="/favorites" exact component={Favorites}></Route>
        </Switch>
      </AppWrapper>
    </Router>
  );
};

export default App;
