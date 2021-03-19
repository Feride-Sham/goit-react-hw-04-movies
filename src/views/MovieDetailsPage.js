import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import CastPage from "../components/CastPage";
import x from "../services/movieAPI";
const { getDetailsMovie } = x;
class MovieDetailsPage extends Component {
  state = {
    imgDetail: {},
    imgBaseUrl: "https://image.tmdb.org/t/p/w500",
    imgGenres: [],
  };

  async componentDidMount() {
    const { movieID } = this.props.match.params;

    console.log(movieID);
    getDetailsMovie(movieID).then((result) => {
      console.log(result);
      this.setState({ imgDetail: result, imgGenres: result.genres });
    });
  }

  render() {
    const { imgDetail, imgBaseUrl, imgGenres } = this.state;
    const {
      poster_path,
      original_title,
      id,
      vote_average,
      overview,
    } = imgDetail;
    console.log(this.props.match.url);
    return (
      <>
        <div>
          <div>
            <h1>MovieDetailsPage {this.props.match.params.movieID}</h1>
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
        </div>
      </>
    );
  }
}

export default MovieDetailsPage;
