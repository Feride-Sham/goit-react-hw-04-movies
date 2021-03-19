import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import CastPage from "../components/CastPage/CastPage";
import RewiesPage from "../components/RewiesPage/RewiesPage";
import x from "../services/movieAPI";
const { getDetailsMovie } = x;
class MovieDetailsPageView extends Component {
  state = {
    imgDetail: {},
    imgBaseUrl: "https://image.tmdb.org/t/p/w500",
    imgGenres: [],
  };

  async componentDidMount() {
    const { movieID } = this.props.match.params;

    getDetailsMovie(movieID).then((result) => {
      this.setState({ imgDetail: result, imgGenres: result.genres });
    });
  }

  handleGoBack = () => {
    const { history, location } = this.props;
    history.push(location.state.from);
  };

  render() {
    const { imgDetail, imgBaseUrl, imgGenres } = this.state;
    const {
      poster_path,
      original_title,
      id,
      vote_average,
      overview,
    } = imgDetail;

    return (
      <>
        <div>
          <button type="button" onClick={this.handleGoBack}>
            Back
          </button>
          <div>
            <img
              loading="lazy"
              src={imgBaseUrl + poster_path}
              alt={original_title}
              data={id}
              width="280"
            />
          </div>
          <div>
            <h2>{original_title}</h2>
            <p>User score: </p> <span>{vote_average}</span>
            <p>Overview: </p> <p>{overview}</p>
            <p>Genres:</p>{" "}
            <ul>
              {imgGenres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <ul>
            <li>
              <NavLink to={`${this.props.match.url}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`${this.props.match.url}/reviews`}>Rewies</NavLink>
            </li>
          </ul>
          <Route path={`${this.props.match.url}/cast`}>
            <CastPage movieId={id} />
          </Route>
          <Route path={`${this.props.match.url}/reviews`}>
            <RewiesPage movieId={id} />
          </Route>
        </div>
      </>
    );
  }
}

export default MovieDetailsPageView;
