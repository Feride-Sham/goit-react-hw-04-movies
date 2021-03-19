import React, { Component } from "react";
import x from "../services/movieAPI";
const { getMovieCast } = x;

class CastPage extends Component {
  state = {
    actors: [],
    imgBaseUrl: "https://image.tmdb.org/t/p/w500",
  };

  async componentDidMount() {
    const { movieId } = this.props;

    console.log(movieId);
    getMovieCast(movieId).then((result) => {
      console.log(result);
      this.setState({ actors: result.cast });
    });
  }

  render() {
    const { actors, imgBaseUrl } = this.state;

    return (
      <>
        <h1>Cast</h1>
        <ul>
          {actors.map((actor) => (
            <li key={actor.id}>
              <img
                loading="lazy"
                src={imgBaseUrl + actor.profile_path}
                alt={actor.name}
                width="80"
              ></img>
              <p>{actor.name}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default CastPage;
