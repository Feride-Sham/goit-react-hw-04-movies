import React, { Component } from "react";
// import s from "./Searchbar.module.css";
import x from "../services/movieAPI";
const { getSearchMovie } = x;

class MoviesPage extends Component {
  state = {
    query: "",
    searchMovies: [],
    imgBaseUrl: "https://image.tmdb.org/t/p/w500",
  };

  handleChange = (ev) => {
    console.log(ev.currentTarget.value);
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
    const { searchMovies, imgBaseUrl } = this.state;
    return (
      <>
        <h1>MoviesPage</h1>
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
        <ul>
          {searchMovies.map((el) => (
            <li key={el.id}>
              <a href="#">
                <img
                  loading="lazy"
                  src={imgBaseUrl + el.poster_path}
                  alt={el.original_title}
                  data={el.id}
                  width="280"
                />
                <h2>{el.original_title}</h2>
              </a>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default MoviesPage;
