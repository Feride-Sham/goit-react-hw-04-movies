import React, { Component } from "react";
import { Link } from "react-router-dom";

import x from "../services/movieAPI";
const { getTrendingMovies } = x;

class HomePageView extends Component {
  state = {
    movies: [],
    imgBaseUrl: "https://image.tmdb.org/t/p/w500",
  };

  async componentDidMount() {
    getTrendingMovies().then((result) => {
      console.log(result);
      this.setState({ movies: result });
    });
  }

  render() {
    console.log(this.props.match.url);
    const { movies, imgBaseUrl } = this.state;
    return (
      <>
        <h1>HomePage</h1>
        <ul>
          {movies.map((movie) => {
            return (
              <li key={movie.id}>
                <Link
                  // не работает !!!! разобратьсяhttps://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
                  to={`${this.props.match.url}movies/${movie.id}`}
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

export default HomePageView;
