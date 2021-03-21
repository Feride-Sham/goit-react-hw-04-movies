import React, { lazy, Suspense, Component } from "react";
import { NavLink, Route } from "react-router-dom";
import MovieDetailsCard from "../../components/MovieDetailsCard/MovieDetailsCard";
import s from "./MovieDetailsPageView.module.css";
import routes from "../../routes";
import x from "../../services/movieAPI";
const { getDetailsMovie } = x;
//*** */ динамический импорт
const CastPage = lazy(() =>
  import(
    "../../components/CastPage/CastPage" /* webpackChunkName: "movie-details-page-castPage" */
  )
);

const RewiesPage = lazy(() =>
  import(
    "../../components/RewiesPage/RewiesPage" /* webpackChunkName: "movie-details-page-reviewsPage" */
  )
);
// ***

class MovieDetailsPageView extends Component {
  state = {
    movieDetail: {},
    // imgBaseUrl: "https://image.tmdb.org/t/p/w500",
    movieGenres: [],
  };

  async componentDidMount() {
    const { movieID } = this.props.match.params;

    getDetailsMovie(movieID)
      .then((result) => {
        this.setState({ movieDetail: result, movieGenres: result.genres });
      })
      .catch((error) => console.error(error));
  }

  handleGoBack = () => {
    const { history, location } = this.props;
    //use optional chaining(?.) 2020 JS
    history.push(location?.state?.from || routes.home);
  };

  render() {
    const { movieDetail, movieGenres } = this.state;
    const { id } = movieDetail;

    return (
      <div className={s.container}>
        <button className={s.backBtn} type="button" onClick={this.handleGoBack}>
          Back
        </button>
        <div className={s.movieInfo}>
          <div>
            <MovieDetailsCard movieDetails={movieDetail} genres={movieGenres} />
          </div>
          <div>
            <ul className={s.box}>
              <li>
                <NavLink className={s.link} to={`${this.props.match.url}/cast`}>
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={s.link}
                  to={`${this.props.match.url}/reviews`}
                >
                  Rewies
                </NavLink>
              </li>
            </ul>

            <Suspense>
              <Route path={`${this.props.match.url}/cast`}>
                <CastPage movieId={id} />
              </Route>
              <Route path={`${this.props.match.url}/reviews`}>
                <RewiesPage movieId={id} />
              </Route>
            </Suspense>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetailsPageView;
