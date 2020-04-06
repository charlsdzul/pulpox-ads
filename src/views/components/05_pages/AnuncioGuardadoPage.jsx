import React from "react";
import NuevoAnuncioGuardadoSection from "../04_templates/NuevoAnuncioGuardadoSection";
import "../../css/anuncio-guardado.css";

const AnuncioGuardadoPage = () => {
  return (
    <main>
      <div className="titulo-page-div">
        <span>Previsualización de tu anuncio</span>
      </div>
      <NuevoAnuncioGuardadoSection />
    </main>
  );
};

export default AnuncioGuardadoPage;
