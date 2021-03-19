import React from "react";
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

export default MoviesGallery;
