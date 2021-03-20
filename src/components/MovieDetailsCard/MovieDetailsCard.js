import React from "react";
import PropTypes from "prop-types";
import errorImg from "../../image/errorFilm.jpg";

const imgBaseUrl = "https://image.tmdb.org/t/p/w500";

const MovieDetailsCard = ({ movieDetails, genres }) => {
  const { poster_path, original_title, vote_average, overview } = movieDetails;
  return (
    <>
      <div>
        <img
          loading="lazy"
          src={
            poster_path === undefined ? errorImg : `${imgBaseUrl}${poster_path}`
          }
          alt={original_title}
          width="280"
        />
      </div>
      <div>
        <h2>{original_title}</h2>
        <p>User score: </p> <span>{vote_average}</span>
        <p>Overview: </p> <p>{overview}</p>
        <p>Genres:</p>{" "}
        <ul>
          {genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
MovieDetailsCard.defaultProps = {
  poster_path: undefined,
  original_title: "No name",
  vote_average: "No vote",
  overview: "No overview",
  genres: "No genres",
};

MovieDetailsCard.propTypes = {
  movieDetails: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
  }),
  genres: PropTypes.array,
};

export default MovieDetailsCard;
