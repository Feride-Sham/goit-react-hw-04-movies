import React, { Component } from "react";

import MoviesGallery from "../components/MoviesGallery/MoviesGallery";

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
        <MoviesGallery
          movies={movies}
          imgBaseUrl={imgBaseUrl}
          urlPath={"/movies"}
        />
      </>
    );
  }
}

export default HomePageView;
