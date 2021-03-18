import React, { Component } from "react";
import { Link } from "react-router-dom";

import x from "../services/movieAPI";
const { getTrendingMovies } = x;

class HomePage extends Component {
  state = {
    movies: [],
    imgBaseUrl: "https://image.tmdb.org/t/p/w500",
  };

  async componentDidMount() {
    getTrendingMovies().then((result) => this.setState({ movies: result }));
  }

  render() {
    const { movies, imgBaseUrl } = this.state;
    return (
      <>
        <h1>HomePage</h1>
        <ul>
          {movies.map((movie) => {
            return (
              <li key={movie.id}>
                <Link
                  // не работает !!!! разобраться
                  to={`https://api.themoviedb.org/3/movie/${movie.id}?api_key=2955876276611e1cc2d97a4794387b9d&language=en-US`}
                >
                  <img
                    loading="lazy"
                    src={imgBaseUrl + movie.poster_path}
                    alt={movie.original_title}
                    data={movie.id}
                    width="280"
                  />
                  <h2>{movie.original_title}</h2>
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default HomePage;
