import React from "react";
import { Link } from "react-router-dom";

const MoviesGallery = ({ movies, match, imgBaseUrl }) => {
  return (
    <ul>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img
                loading="lazy"
                src={imgBaseUrl + movie.poster_path}
                alt={movie.original_title}
                data={movie.id}
                width="280"
              />
              <h2>{movie.original_title}</h2>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesGallery;
