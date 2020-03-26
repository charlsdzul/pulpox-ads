import React from "react";
import NuevoAnuncioInputTelefono from "../01_atoms/NuevoAnuncioInputTelefono";
import NuevoAnuncioInputCorreo from "../01_atoms/NuevoAnuncioInputCorreo";

const FormularioInputs = () => {
  return (
    <div className="phoneEmail-div">
      <NuevoAnuncioInputTelefono
        name_input="Teléfono"
        class_element_div="phone-div"
        class_element="phone-div__inputPhone"
        id_input={"telefono"}
      />
      <NuevoAnuncioInputTelefono name_input="Celular" id_input={"celular"} />

      <NuevoAnuncioInputCorreo name_input="Celular" id_input={"celular"} />
    </div>
  );
};

export default FormularioInputs;
