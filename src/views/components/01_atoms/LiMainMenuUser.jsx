import React from "react";
import { NavLink } from "react-router-dom";

const LiMainMenuUser = ({ name, path }) => {
  return (
    <NavLink
      to={path}
      className="dropdown-item header-menu__submenu__a header-menu__submenu__a--hover"
    >
      {name}
    </NavLink>
  );
};

export default LiMainMenuUser;
