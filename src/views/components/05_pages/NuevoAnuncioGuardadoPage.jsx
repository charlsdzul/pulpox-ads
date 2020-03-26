import React from "react";
import NuevoAnuncioGuardadoSection from "../04_templates/NuevoAnuncioGuardadoSection";
import "../../scss/pages/anuncio-guardado.scss";

const NuevoAnuncioGuardadoPage = () => {
  return (
    <main>
      <div className="titulo-page-div">
        <span>Previsualización de tu anuncio</span>
      </div>
      <NuevoAnuncioGuardadoSection />
    </main>
  );
};

export default NuevoAnuncioGuardadoPage;
