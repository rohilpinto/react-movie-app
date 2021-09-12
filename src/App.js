import "./App.scss";
import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movies from "./components/Movies";
// import MoviesHome from "./components/MoviesHome";
import MovieDetails from "./components/MovieDetails";
import SearchedMovies from "./components/SearchedMovies";
import styled from "styled-components";
import ScrollToTop from "./components/ScrollToTop";
// import ErrorPage from "./ErrorPage";

const AppWrapper = styled.div`
  padding: 60px;
`;

const App = () => {
  return (
    <Router>
      <ScrollToTop></ScrollToTop>
      <AppWrapper className="App">
        <Switch>
          <Route path="/" exact component={Movies} />
          <Route path="/:id" exact component={MovieDetails} />
          <Route path="/searched/:id" exact component={SearchedMovies} />
          {/* <Route component={ErrorPage} /> */}/
        </Switch>
        
      </AppWrapper>
    </Router>
  );
};

export default App;
