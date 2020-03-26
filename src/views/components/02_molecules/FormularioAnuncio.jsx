import React from "react";
import NuevoAnuncioTitulo from "../01_atoms/NuevoAnuncioTitulo";
import NuevoAnuncioMensaje from "../01_atoms/NuevoAnuncioMensaje";

const FormularioAnuncio = ({ Sumar }) => {
  return (
    <div className="div-title-messaje">
      <NuevoAnuncioTitulo />
      <NuevoAnuncioMensaje />
    </div>
  );
};

export default FormularioAnuncio;
