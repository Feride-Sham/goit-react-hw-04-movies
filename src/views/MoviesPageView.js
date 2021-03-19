import React, { Component } from "react";
import MoviesGallery from "../components/MoviesGallery/MoviesGallery";

// import s from "./Searchbar.module.css";
import x from "../services/movieAPI";
const { getSearchMovie } = x;

class MoviesPageView extends Component {
  state = {
    query: "",
    searchMovies: [],
  };

  handleChange = (ev) => {
    this.setState({ query: ev.currentTarget.value });
  };

  handleSubmit = (ev) => {
    ev.preventDefault();

    getSearchMovie(this.state.query).then((result) =>
      this.setState({ searchMovies: result })
    );

    this.setState({ query: "" });
  };

  render() {
    const { searchMovies } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.query}
            onChange={this.handleChange}
            type="text"
          />
          <button type="submit">
            <span>Search</span>
          </button>
        </form>
        <MoviesGallery movies={searchMovies} />
      </>
    );
  }
}

export default MoviesPageView;
