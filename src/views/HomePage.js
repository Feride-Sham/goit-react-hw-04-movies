import React, { Component } from "react";

import x from "../services/movieAPI";
const { movieAPI } = x;
const fetchType = "trending/all/day";

class HomePage extends Component {
  state = {
    movies: [],
    imgBaseUrl: "https://image.tmdb.org/t/p/w500",
  };

  async componentDidMount() {
    movieAPI(fetchType).then((result) => this.setState({ movies: result }));
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
                <img
                  loading="lazy"
                  src={imgBaseUrl + movie.poster_path}
                  alt={movie.original_title}
                  data={movie.id}
                  width="280"
                />
                <h2>{movie.original_title}</h2>
              </li>
            );
          })}
          {/* li  key={movie.id}>
  <div >
    <img loading="lazy" src="{{{_posterPath}}}" alt="{{_originalTitle}}" class="gallery__image" data={{_id}} />
    <!-- <span class="gallery__average">9.8</span> -->
  </div>
  <div class="gallery__description" data={{_id}}>
    <h3 class="gallery__title__light gallery__title__dark" data={{_id}}>
      {{_originalTitle}}
    </h3>

    <span class="gallery__film-category__light gallery__film-category__dark" data={{_id}}>{{_genres}} </span>

    <span class="gallery__release-date__light gallery__release-date__dark" data={{_id}}>|
      {{_releaseDate}}</span>
  </div>
</li> */}{" "}
        </ul>
      </>
    );
  }
}

export default HomePage;
