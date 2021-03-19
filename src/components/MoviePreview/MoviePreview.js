import React from "react";
import { Link, withRouter } from "react-router-dom";
const imgBaseUrl = "https://image.tmdb.org/t/p/w500";

const MoviePreview = ({ movie, location }) => {
  const { id, poster_path, original_title } = movie;
  return (
    <li>
      <Link
        to={{
          pathname: `/movies/${id}`,
          state: {
            from: location,
          },
        }}
      >
        <img
          loading="lazy"
          src={`${imgBaseUrl}${poster_path}`}
          alt={original_title}
          data={id}
          width="280"
        />
        <h2>{original_title}</h2>
      </Link>
    </li>
  );
};

export default withRouter(MoviePreview);
