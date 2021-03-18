import React from "react";
import axios from "axios";

const baseURL = `https://api.themoviedb.org/3/`;
const myAPIkey = "2955876276611e1cc2d97a4794387b9d";

async function movieAPI(fetchType) {
  const response = await axios.get(
    `${baseURL}${fetchType}?api_key=${myAPIkey}`
  );
  const data = await response.data;
  const results = await data.results;
  console.log(results);
  console.log(response);
  return results;
}

export default { movieAPI };
