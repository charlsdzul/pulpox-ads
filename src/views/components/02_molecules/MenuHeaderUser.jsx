import React from "react";
import LiMainMenuUser from "../01_atoms/LiMainMenuUser";

const MenuHeaderUser = () => {
  return (
    <ul className="nav-item dropdown header-menu__li header-menu__li--hover">
      <li
        className="nav-link dropdown-toggle header-menu__a"
        id="navbardrop"
        data-toggle="dropdown"
        href=""
      >
        <svg
          className="bi bi-person-fill"
          width="1.25em"
          height="1.25em"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5 16s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H5zm5-6a3 3 0 100-6 3 3 0 000 6z"
            clipRule="evenodd"
          ></path>
        </svg>
        Usuario
      </li>
      <div className="dropdown-menu header-menu__submenu">
        <LiMainMenuUser name="Mi Cuenta" path="/mi-cuenta"></LiMainMenuUser>
        <LiMainMenuUser name="Salir" path="/salir"></LiMainMenuUser>
      </div>
    </ul>
  );
};

export default MenuHeaderUser;
