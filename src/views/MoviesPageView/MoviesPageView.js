import React, { Component } from "react";
import MoviesGallery from "../../components/MoviesGallery/MoviesGallery";
import s from "./MoviesPageView.module.css";
// import s from "./Searchbar.module.css";
import x from "../../services/movieAPI";
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
    const history = this.props.history;

    getSearchMovie(this.state.query).then((result) =>
      this.setState({ searchMovies: result })
    );

    // записывает в url наш запросы из search (при submit формы)
    history.push({
      pathname: history.location.pathname,
      search: `?query=${this.state.query}`,
      key: history.location.key,
    });

    this.setState({ query: "" });
  };

  render() {
    const { searchMovies } = this.state;
    return (
      <div className={s.search}>
        <form onSubmit={this.handleSubmit} className={s.form}>
          <input
            className={s.input}
            value={this.state.query}
            onChange={this.handleChange}
            type="text"
          />
          <button className={s.searchBtn} type="submit">
            <span>Search</span>
          </button>
        </form>
        <MoviesGallery movies={searchMovies} />
      </div>
    );
  }
}

export default MoviesPageView;
