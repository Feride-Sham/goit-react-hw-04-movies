import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import NotFoundView from "./views/NotFoundView";
import AppBar from "./components/AppBar/AppBar";
import routes from "./routes";

import "./App.css";

const HomePageView = lazy(() =>
  import("./views/HomePageView.js" /* webpackChunkName: "home-view" */)
);
const MovieDetailsPageView = lazy(() =>
  import(
    "./views/MovieDetailsPageView/MovieDetailsPageView" /* webpackChunkName: "movie-details-view" */
  )
);
const MoviesPageView = lazy(() =>
  import(
    "./views/MoviesPageView/MoviesPageView" /* webpackChunkName: "movies-view" */
  )
);

const App = () => {
  return (
    <>
      <AppBar />
      <div className="App">
        <Suspense fallback={<h1>Load..</h1>}>
          <Switch>
            <Route exact path={routes.home} component={HomePageView} />
            <Route
              path={routes.movieDetails}
              component={MovieDetailsPageView}
            />
            <Route path={routes.movies} component={MoviesPageView} />
            <Route component={NotFoundView} />
          </Switch>
        </Suspense>
      </div>
    </>
  );
};

export default App;
