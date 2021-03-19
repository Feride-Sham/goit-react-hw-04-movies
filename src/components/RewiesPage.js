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
        <ul>
          {rewies.map((rewie) => (
            <li key={rewie.id}>
              <p>{rewie.author}</p>
              <p>{rewie.content}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default RewiesPage;
