import React from "react";
import { NavLink } from "react-router-dom";

const LiMainMenu = ({ nameLi, pathLi }) => {
  return (
    <li className="nav-item header-menu__li header-menu__li--hover ">
      <NavLink
        to={pathLi}
        className="nav-link header-menu__a header-menu__a--hover"
      >
        {nameLi}
      </NavLink>
    </li>
  );
};

export default LiMainMenu;
