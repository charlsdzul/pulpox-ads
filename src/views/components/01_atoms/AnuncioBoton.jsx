import React from "react";
import { Link } from "react-router-dom";

const AnuncioBoton = ({ path, nameButton, icon, dataButton }) => {
  const saveAd = () => {
    alert("Evento Publicar");
  };

  return (
    <Link to={path}>
      <button
        variant="contained"
        size="small"
        className="div-buttons__button"
        id="button-guardar"
        onClick={saveAd}
      >
        {icon}
        {nameButton}
      </button>
    </Link>
  );
};

export default AnuncioBoton;
