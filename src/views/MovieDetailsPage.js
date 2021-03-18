import React, { Component } from "react";

class MovieDetailsPage extends Component {
  state = {
    // movies: [],
    // imgBaseUrl: "https://image.tmdb.org/t/p/w500",
  };

  // async componentDidMount() {
  //   getTrendingMovies().then((result) => this.setState({ movies: result }));
  // }

  render() {
    // const { movies, imgBaseUrl } = this.state;
    return (
      <>
        <h1>MovieDetailsPage</h1>
        {/* <h1>HomePage</h1>
        <ul>
          {movies.map((movie) => {
            return (
              <li key={movie.id}>
                <Link to={``}>
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
        </ul> */}
      </>
    );
  }
}

export default MovieDetailsPage;
