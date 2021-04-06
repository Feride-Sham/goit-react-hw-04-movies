import React, { Component } from "react";
import s from "./ReviewsPage.module.css";
import x from "../../services/movieAPI";
const { getMovieRewies } = x;

class ReviewsPage extends Component {
  state = {
    rewies: [],
  };

 componentDidMount() {
    const { movieId } = this.props;

    getMovieRewies(movieId).then((result) => {
      this.setState({ rewies: result.results });
    });
  }

  render() {
    const { rewies } = this.state;

    return (
      <>
        <h1 className={s.title}>Reviews</h1>
        {rewies.length > 0 ? (
          <ul className={s.list}>
            {rewies.map(({ id, author, content }) => {
              return (
                <li className={s.post} key={id}>
                  <p className={s.author}>{author}</p>
                  <p>{content}</p>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>This movie has no reviews yet.</p>
        )}
      </>
    );
  }
}

export default ReviewsPage;
