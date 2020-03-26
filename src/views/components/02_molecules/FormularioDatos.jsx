import React from "react";
import NuevoAnuncioSelectEstado from "../01_atoms/NuevoAnuncioSelectEstado";
import NuevoAnuncioSelectCiudad from "../01_atoms/NuevoAnuncioSelectCiudad";
import NuevoAnuncioSelectSeccion from "../01_atoms/NuevoAnuncioSelectSeccion";
import NuevoAnuncioSelectApartado from "../01_atoms/NuevoAnuncioSelectApartado";

const FormularioDatos = () => {
  return (
    <div className="div-data">
      <NuevoAnuncioSelectEstado />
      <NuevoAnuncioSelectCiudad />
      <NuevoAnuncioSelectSeccion />
      <NuevoAnuncioSelectApartado />
    </div>
  );
};

export default FormularioDatos;
