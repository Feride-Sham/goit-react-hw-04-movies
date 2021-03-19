import React, { Component } from "react";
import x from "../services/movieAPI";
const { getMovieRewies } = x;

class RewiesPage extends Component {
  state = {
    rewies: [],
  };

  async componentDidMount() {
    const { movieId } = this.props;

    console.log(movieId);
    getMovieRewies(movieId).then((result) => {
      console.log(result.results);
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
            {rewies.map((rewie) => {
              const { id, author, content } = rewie;
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
