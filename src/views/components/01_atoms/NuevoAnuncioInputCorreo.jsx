/**
 * COMPONENTE NuevoAnuncioInputCorreo
 * Es un input tipo texto
 * Recibe el número, de teléfono y celular según el parámetro que se le asigne a 'id_input' cuando se llame
 * Almacena y usa el valor directo del Store
 * Solo acepta números (no letras, ni espacios, ni guiones)
 * Muestra un aviso 'helper' cuando se intenta ingresar algo que no sea un número
 * Usa setHelper para definir el mensaje, con un useState()
 */

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import AssignmentLateIcon from "@material-ui/icons/AssignmentLate";
import TextField from "@material-ui/core/TextField";
import anuncioValidation from "../../validations/anuncioValidation";

const NuevoAnuncioInputCorreo = ({ correoInStore, setCorreoInStore }) => {
  let [helper, setHelper] = useState();

  useEffect(() => {
    document.getElementById("correo").value = correoInStore;
  });

  const validateString = ev => {
    /*************************************************************
     * Valida correo ingresadoo
     * 1) Verifica si el correo es un formato válido según el 'mailformat'
     * 2) Asigma mensaje según la validación
     */
    const correoIngresado = ev.target.value;
    const mailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (correoIngresado.match(mailformat)) {
      setHelper(<></>);
      setCorreoInStore(correoIngresado);
    } else {
      setCorreoInStore(correoIngresado);
      setHelper(
        <>
          <AssignmentLateIcon> </AssignmentLateIcon>
          <span className="formulario-span__helper">
            {"Correo inválido o incompleto"}
          </span>
        </>
      );
    }
    //Validacion del anuncio
    anuncioValidation();
  };

  return (
    <div className="phone-div">
      <TextField
        id="correo"
        label="Correo"
        className="phone-div__inputEmail"
        name="correo"
        type="text"
        required={true}
        onKeyUp={validateString}
      />
      <div class="phone-div__helper">{helper}</div>
    </div>
  );
};

const mapStateToProps = store => ({
  correoInStore: store.correo
});

const mapDispatchToProps = dispatch => ({
  setCorreoInStore(correo) {
    dispatch({
      type: "SET_CORREO",
      correo
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NuevoAnuncioInputCorreo);
