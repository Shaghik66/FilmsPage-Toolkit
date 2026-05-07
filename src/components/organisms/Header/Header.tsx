import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <NavLink to={"/"}>Header</NavLink>
      <NavLink to={"/movies"}>Movies</NavLink>
    </>
  );
};
