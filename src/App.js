import "./App.scss";
import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movies from "./components/Movies";
// import MoviesHome from "./components/MoviesHome";
import MovieDetails from "./components/MovieDetails";

import styled from "styled-components";

const AppWrapper = styled.div`
  padding: 60px;
`;

const App = () => {
  return (
    <Router>
      <AppWrapper className="App">
        <Switch>
          <Route path="/" exact component={Movies} />
          <Route path="/:id" component={MovieDetails} />
        </Switch>
      </AppWrapper>
    </Router>
  );
};

export default App;
