import React, { Component } from "react";
import x from "../../services/movieAPI";
import s from "./CastPage.module.css";
const { getMovieCast } = x;

// const errorImg = "../../image/errorFilm.jpg";

class CastPage extends Component {
  state = {
    // errorImg: errorImg,
    actors: [],
    imgBaseUrl: "https://image.tmdb.org/t/p/w500",
  };

  async componentDidMount() {
    const { movieId } = this.props;
    getMovieCast(movieId).then((result) => {
      this.setState({ actors: result.cast });
    });
  }

  render() {
    const { actors, imgBaseUrl } = this.state;

    return (
      <>
        <h1 className={s.title}>Cast</h1>
        <ul className={s.castGallery}>
          {actors.map(({ id, profile_path, name }) => {
            return profile_path !== null ? (
              <li className={s.castItem} key={id}>
                <img
                  loading="lazy"
                  src={`${imgBaseUrl}${profile_path}`}
                  alt={name}
                  width="80"
                ></img>
                <p>{name}</p>
              </li>
            ) : (
              <li key={id}>
                {/* <img
                  loading="lazy"
                  src={this.state.errorImg}
                  alt={name}
                  width="80"
                ></img> */}
                <p>{name}</p>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default CastPage;
