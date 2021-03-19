import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import HomePageView from "./views/HomePageView";
import MoviesPageView from "./views/MoviesPageView";
import MovieDetailsPageView from "./views/MovieDetailsPageView";
import NotFoundView from "./views/NotFoundView";

import "./App.css";

const App = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={HomePageView} />
        <Route path="/movies/:movieID" component={MovieDetailsPageView} />
        <Route path="/movies" component={MoviesPageView} />
        <Route component={NotFoundView} />
      </Switch>
    </>
  );
};

export default App;
