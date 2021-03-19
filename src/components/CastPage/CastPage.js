import React, { Component } from "react";
import x from "../../services/movieAPI";
const { getMovieCast } = x;

class CastPage extends Component {
  state = {
    actors: [],
    imgBaseUrl: "https://image.tmdb.org/t/p/w500",
  };

  async componentDidMount() {
    const { movieId } = this.props;
    getMovieCast(movieId).then((result) => {
      this.setState({ actors: result.cast });
    });
  }

  render() {
    const { actors, imgBaseUrl } = this.state;

    return (
      <>
        <h1>Cast</h1>
        <ul>
          {actors.map((actor) => {
            const { id, profile_path, name } = actor;
            return (
              <li key={id}>
                <img
                  loading="lazy"
                  src={imgBaseUrl + profile_path}
                  alt={name}
                  width="80"
                ></img>
                <p>{name}</p>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default CastPage;
