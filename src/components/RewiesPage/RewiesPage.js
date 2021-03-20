import React, { Component } from "react";
import s from "./RewiesPage.module.css";
import x from "../../services/movieAPI";
const { getMovieRewies } = x;

class RewiesPage extends Component {
  state = {
    rewies: [],
  };

  async componentDidMount() {
    const { movieId } = this.props;

    getMovieRewies(movieId).then((result) => {
      this.setState({ rewies: result.results });
    });
  }

  render() {
    const { rewies } = this.state;

    return (
      <>
        <h1>Rewies</h1>
        {rewies.length > 0 ? (
          <ul>
            {rewies.map(({ id, author, content }) => {
              return (
                <li key={id}>
                  <p>{author}</p>
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

export default RewiesPage;
