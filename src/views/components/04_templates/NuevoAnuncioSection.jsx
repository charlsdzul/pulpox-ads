import React, { useEffect } from "react";
import NuevoAnuncio from "../03_organisms/NuevoAnuncio";
import "../04_templates/niceSelect";
import anuncioValidation from "../../validations/anuncioValidation";

const NuevoAnuncioSection = () => {
  useEffect(() => {
    //Necesita validarse aquí el anuncio
    //Si está en 'Previsualización de tu anuncio' y se regresa a 'Crea tu anuncio', se tiene que validar
    anuncioValidation();
  });

  return (
    <section className="anuncio-nuevo-div">
      <NuevoAnuncio />
    </section>
  );
};

export default NuevoAnuncioSection;
