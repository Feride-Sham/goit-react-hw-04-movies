import React, { Component } from "react";

import MoviesGallery from "../components/MoviesGallery/MoviesGallery";

import x from "../services/movieAPI";
const { getTrendingMovies } = x;

class HomePageView extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    getTrendingMovies()
      .then((result) => {
        this.setState({ movies: result });
      })
      .catch((error) => console.error(error));
  }

  render() {
    const { movies } = this.state;

    return (
      <>
        <MoviesGallery movies={movies} />
      </>
    );
  }
}

export default HomePageView;
