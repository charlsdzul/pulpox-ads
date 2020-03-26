import React from "react";
import MenuHeaderUser from "./MenuHeaderUser";
import LiMainMenu from "../01_atoms/LiMainMenu";

const MenuHeader = () => {
  return (
    <div className="collapse navbar-collapse header-menu" id="navb">
      <div className="header-menu__group ">
        <ul className="navbar-nav mr-auto ull">
          <LiMainMenu nameLi="Inicio" pathLi="/"></LiMainMenu>
          <LiMainMenu nameLi="Mis Anuncios" pathLi="/mis-anuncios"></LiMainMenu>
          <LiMainMenu
            nameLi="Nuevo Anuncio"
            pathLi="/anuncio-nuevo"
          ></LiMainMenu>
          <MenuHeaderUser></MenuHeaderUser>
        </ul>
      </div>
    </div>
  );
};

export default MenuHeader;
