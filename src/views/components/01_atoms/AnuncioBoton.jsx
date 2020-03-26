import React from "react";
import { Link } from "react-router-dom";

const AnuncioBoton = ({ path, nameButton, icon }) => {
  return (
    <Link to={path}>
      <button
        variant="contained"
        size="small"
        className="div-buttons__button"
        id="button-guardar"
      >
        {icon}
        {nameButton}
      </button>
    </Link>
  );
};

export default AnuncioBoton;
