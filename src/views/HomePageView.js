import React, { Component } from "react";

import MoviesGallery from "../components/MoviesGallery/MoviesGallery";

import x from "../services/movieAPI";
const { getTrendingMovies } = x;

class HomePageView extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    getTrendingMovies().then((result) => {
      this.setState({ movies: result });
    });
  }

  render() {
    const { movies } = this.state;

    return (
      <>
        <h1>HomePage</h1>
        <MoviesGallery movies={movies} />
      </>
    );
  }
}

export default HomePageView;
