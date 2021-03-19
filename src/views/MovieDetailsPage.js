import React, { Component } from "react";
import x from "../services/movieAPI";
const { getDetailsMovie } = x;
class MovieDetailsPage extends Component {
  state = {
    imgDetail: {},
    imgBaseUrl: "https://image.tmdb.org/t/p/w500",
  };

  async componentDidMount() {
    const { movieID } = this.props.match.params;

    console.log(movieID);
    getDetailsMovie(movieID).then((result) => {
      console.log(result);
      this.setState({ imgDetail: result });
    });
  }

  render() {
    const { imgDetail, imgBaseUrl } = this.state;
    return (
      <>
        <h1>MovieDetailsPage {this.props.match.params.movieID}</h1>
        <img
          loading="lazy"
          src={imgBaseUrl + imgDetail.poster_path}
          alt={imgDetail.original_title}
          data={imgDetail.id}
          width="280"
        />
        <h2>{imgDetail.original_title}</h2>
      </>
    );
  }
}

export default MovieDetailsPage;
