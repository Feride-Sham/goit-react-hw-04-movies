import React from "react";
import { Link } from "react-router-dom";
import MoviePreview from "../MoviePreview/MoviePreview";

const MoviesGallery = ({ movies, imgBaseUrl }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <MoviePreview movie={movie} key={movie.id} />
      ))}
    </ul>
  );
};

export default MoviesGallery;
