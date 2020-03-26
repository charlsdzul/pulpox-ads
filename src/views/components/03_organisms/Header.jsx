import React from "react";
import MenuHeader from "../02_molecules/MenuHeader";
import LogoHeader from "../02_molecules/LogoHeader";

const Header = () => {
  return (
    <header id="header" className="header ">
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <LogoHeader></LogoHeader>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navb"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navb">
          <MenuHeader></MenuHeader>
        </div>
      </nav>
    </header>
  );
};

export default Header;
