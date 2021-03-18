import React, { Component } from "react";
// import axios from "axios";

// import movieAPI from "../services/movieAPI";

// const baseURL = `https://api.themoviedb.org/3/`;
// const myAPIkey = "2955876276611e1cc2d97a4794387b9d";

class MoviesPage extends Component {
  // state = {
  //   movies: [],
  // };

  // async componentDidMount() {
  //   const response = await axios.get(
  //     `${baseURL}trending/all/day?api_key=${myAPIkey}`
  //   );
  //   const data = await response.data;
  //   const moviesList = await data.results;
  //   console.log(moviesList);
  //   this.setState({ movies: moviesList });
  // }

  render() {
    // const { movies } = this.state;
    return (
      <>
        <h1>MoviesPage</h1>
        {/* <ul>
          {movies.map((movie) => {
            return <li key={movie.id}>{movie.original_title}</li>;
          })}
        </ul> */}
      </>
    );
  }
}

export default MoviesPage;
