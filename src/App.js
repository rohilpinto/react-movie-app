import "./App.scss";
import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MoviesHome from "./components/Movies";
import MovieDetails from "./components/MovieDetails";

// console.log(KEY);

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={MoviesHome} />
          <Route path="/:id" component={MovieDetails} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
