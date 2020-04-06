import React from "react";
import NuevoAnuncioSection from "../04_templates/NuevoAnuncioSection";
import "../../css/anuncio-nuevo.css";

const AnuncioNuevoPage = () => {
  return (
    <main>
      <div className="titulo-page-div">
        <span> Crea tu anuncio </span>
      </div>
      <NuevoAnuncioSection />
    </main>
  );
};

export default AnuncioNuevoPage;
