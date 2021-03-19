// import React from "react";
import axios from "axios";

const baseURL = `https://api.themoviedb.org/3/`;
const myAPIkey = "2955876276611e1cc2d97a4794387b9d";

async function getTrendingMovies() {
  const response = await axios.get(
    `${baseURL}trending/all/day?api_key=${myAPIkey}`
  );
  const data = await response.data;
  const results = await data.results;
  return results;
}

async function getSearchMovie(searchQuery) {
  const response = await axios.get(
    `${baseURL}search/movie?api_key=${myAPIkey}&language=en-US&page=1&include_adult=false&query=${searchQuery}`
  );
  const data = await response.data;
  const results = await data.results;
  return results;
}

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
async function getDetailsMovie(movieId) {
  const response = await axios.get(
    `${baseURL}movie/${movieId}?api_key=${myAPIkey}&language=en-US`
  );
  const data = await response.data;
  return data;
}
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
async function getMovieCast(movieId) {
  const response = await axios.get(
    `${baseURL}movie/${movieId}/credits?api_key=${myAPIkey}&language=en-US`
  );
  const data = await response.data;
  return data;
}

// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
async function getMovieRewies(movieId) {
  const response = await axios.get(
    `${baseURL}movie/${movieId}/reviews?api_key=${myAPIkey}&language=en-US`
  );
  const data = await response.data;
  return data;
}

export default {
  getTrendingMovies,
  getSearchMovie,
  getDetailsMovie,
  getMovieCast,
  getMovieRewies,
};
