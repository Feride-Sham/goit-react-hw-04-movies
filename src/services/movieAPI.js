// import React from "react";
import axios from "axios";

const baseURL = `https://api.themoviedb.org/3/`;
const myAPIkey = "2955876276611e1cc2d97a4794387b9d";
// https://api.themoviedb.org/3/search/movie?api_key=2955876276611e1cc2d97a4794387b9d&language=en-US&page=1&include_adult=false
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false&query=${searchQuery}
// https://api.themoviedb.org/3/search/movie?api_key=2955876276611e1cc2d97a4794387b9d$&language=en-US&page=1&include_adult=false&query=gifted
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
  console.log(data);
  return results;
}

export default { getTrendingMovies, getSearchMovie };
