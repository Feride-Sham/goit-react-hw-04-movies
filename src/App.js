import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./views/HomePage";

import "./App.css";

const App = () => {
  return (
    <>
      <Route path="/" component={HomePage} />
    </>
  );
};

export default App;
