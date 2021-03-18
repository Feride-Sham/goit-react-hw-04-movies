import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import HomePage from "./views/HomePage";
import MoviesPage from "./views/MoviesPage";
import NotFoundView from "./views/NotFoundView";

import "./App.css";

const App = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies" component={MoviesPage} />
        <Route component={NotFoundView} />
      </Switch>
    </>
  );
};

export default App;
