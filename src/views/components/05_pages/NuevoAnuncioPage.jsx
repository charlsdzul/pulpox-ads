import React from "react";
import NuevoAnuncioSection from "../04_templates/NuevoAnuncioSection";
import "../../scss/pages/anuncio-nuevo.scss";

const NuevoAnuncioPage = () => {
  return (
    <main>
      <div className="titulo-page-div">
        <span> Crea tu anuncio </span>
      </div>
      <NuevoAnuncioSection />
      <NuevoAnuncioSection />
    </main>
  );
};

export default NuevoAnuncioPage;
