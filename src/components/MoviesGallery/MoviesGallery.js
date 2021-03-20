import React from "react";
import PropTypes from "prop-types";
import MoviePreview from "../MoviePreview/MoviePreview";

const MoviesGallery = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <MoviePreview movie={movie} key={movie.id} />
      ))}
    </ul>
  );
};

MoviesGallery.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesGallery;
