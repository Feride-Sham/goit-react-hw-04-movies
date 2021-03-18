import React, { Component } from "react";
// import s from "./Searchbar.module.css";
import x from "../services/movieAPI";
const { getSearchMovie } = x;
const fetchType = "search/movie";
const params = "&language=en-US&page=1&include_adult=false";

class MoviesPage extends Component {
  state = {
    query: "gifted",
    searchMovies: [],
    imgBaseUrl: "https://image.tmdb.org/t/p/w500",
  };

  // https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
  async componentDidMount() {
    getSearchMovie(this.state.query).then((result) =>
      this.setState({ searchMovies: result })
    );
  }
  // handleChange = (ev) => {
  //   this.setState({ query: ev.currentTarget.value });
  // };

  // handleSubmit = (ev) => {
  //   ev.preventDefault();
  //   this.setState({ query: "" });
  // };

  render() {
    const { searchMovies, imgBaseUrl } = this.state;
    return (
      <>
        <h1>MoviesPage</h1>
        <form
        // onSubmit={this.handleSubmit}
        >
          <input
            // value={this.state.query}
            // onChange={this.handleChange}
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
