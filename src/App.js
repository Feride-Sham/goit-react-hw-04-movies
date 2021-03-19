import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import HomePageView from "./views/HomePageView";
import MoviesPageView from "./views/MoviesPageView";
import MovieDetailsPageView from "./views/MovieDetailsPageView";
import NotFoundView from "./views/NotFoundView";
import AppBar from "./components/AppBar/AppBar";
import routes from "./routes";

import "./App.css";

const App = () => {
  return (
    <>
      <AppBar />

      <Switch>
        <Route exact path={routes.home} component={HomePageView} />
        <Route path={routes.movieDetails} component={MovieDetailsPageView} />
        <Route path={routes.movies} component={MoviesPageView} />
        <Route component={NotFoundView} />
      </Switch>
    </>
  );
};

export default App;
