import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";

const AppBar = () => {
  return (
    <header>
      <nav>
        <NavLink to={routes.home}>Home</NavLink>
        <NavLink to={routes.movies}>Movies</NavLink>
      </nav>
    </header>
  );
};
export default AppBar;
