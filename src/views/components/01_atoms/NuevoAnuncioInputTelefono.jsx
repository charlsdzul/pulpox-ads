/**
 * COMPONENTE NuevoAnuncioInputTelefono
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

const NuevoAnuncioInputTelefono = ({
  telefonoInStore,
  celularInStore,
  setTelefonoInStore,
  setCelularInStore,
  name_input,
  id_input
}) => {
  let [helper, setHelper] = useState();
  let [helper2, setHelper2] = useState();

  useEffect(() => {
    if (id_input === "telefono") {
      document.getElementById("telefono").value = telefonoInStore;
    }
    if (id_input === "celular") {
      document.getElementById("celular").value = celularInStore;
    }
  });

  const validateString = ev => {
    const numeroIngresado = ev.target.value;

    /*************************************************************
     * Sanitizing de número ingresado
     * 1) Elimina caracteres que no sean números
     * 2) Asigma mensaje según la validación
     */
    const numeroValidado = numeroIngresado.replace(/[^0-9]/g, "");
    if (id_input === "telefono") {
      setTelefonoInStore(numeroValidado);
    }
    if (id_input === "celular") {
      setCelularInStore(numeroValidado);
    }

    /*************************************************************
     * Validación para mensaje al usuario
     * 1) Detecta caracteres que no sean números
     * 2) Asigma mensaje según la validación
     */
    if (numeroIngresado.match(/[^0-9]/g)) {
      setHelper(
        <>
          <AssignmentLateIcon> </AssignmentLateIcon>
          <span className="formulario-span__helper"> Sólo números</span>
        </>
      );
    } else {
      setHelper(<></>);
    }

    /*************************************************************
     * Validación para mensaje al usuario
     * 1) Verifica si la longitud del string es correcta
     * 2) Asigma mensaje según la validación
     */
    if (numeroValidado.length > 0 && numeroValidado.length < 10) {
      setHelper2(
        <>
          <AssignmentLateIcon> </AssignmentLateIcon>
          <span className="formulario-span__helper">Télefono incompleto</span>
        </>
      );
    } else {
      setHelper2(<></>);
    }
    //Validacion del anuncio
    anuncioValidation();
  };

  return (
    <div className="phone-div">
      <TextField
        inputProps={{
          maxLength: 10
        }}
        id={id_input}
        label={name_input}
        className="phone-div__inputPhone"
        name={id_input}
        type="text"
        onKeyUp={validateString}
      />
      <div className="phone-div__helper">{helper}</div>
      <div className="phone-div__helper">{helper2}</div>
    </div>
  );
};

const mapStateToProps = store => ({
  telefonoInStore: store.telefono,
  celularInStore: store.celular
});

const mapDispatchToProps = dispatch => ({
  setTelefonoInStore(telefono) {
    dispatch({
      type: "SET_TELEFONO",
      telefono
    });
  },

  setCelularInStore(celular) {
    dispatch({
      type: "SET_CELULAR",
      celular
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NuevoAnuncioInputTelefono);
