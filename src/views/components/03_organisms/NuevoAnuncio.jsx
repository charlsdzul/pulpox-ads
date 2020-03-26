import React from "react";
import FormularioAnuncio from "../02_molecules/FormularioAnuncio";
import FormularioDatos from "../02_molecules/FormularioDatos";
import FormularioInputs from "../02_molecules/FormularioInputs";
import SaveIcon from "@material-ui/icons/Save";
import AnuncioBoton from "../01_atoms/AnuncioBoton";

const NuevoAnuncio = () => {
  return (
    <div className="anuncio-nuevo-div__nuevo col-10 col-sm-10 col-md-10 col-lg-8 col-xl-8">
      <FormularioAnuncio />
      <FormularioDatos />
      <FormularioInputs />
      <div className="div-buttons">
        <AnuncioBoton
          path={"/anuncio-guardado"}
          nameButton={"Guardar"}
          icon={<SaveIcon />}
        ></AnuncioBoton>
      </div>
    </div>
  );
};

export default NuevoAnuncio;
