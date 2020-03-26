import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import AssignmentLateIcon from "@material-ui/icons/AssignmentLate";
import anuncioValidation from "../../validations/anuncioValidation";
const NuevoAnuncioTitulo = ({ tituloInStore, setTituloInStore }) => {
  let [helper, setHelper] = useState();

  useEffect(() => {
    document.getElementById("titulo").value = tituloInStore;
  });

  const validateString = ev => {
    //1) Se recibe el texto ingresado
    const titulo = ev.target.value;
    //2) Se sanitiza
    const tituloValidado = titulo
      .replace(/<script>/gi, "")
      .replace(/<object>/gi, "")
      .replace(/<applet>/gi, "")
      .replace(/<embed>/gi, "")
      .replace(/<iframe>/gi, "");

    setTituloInStore(tituloValidado);
    document.getElementById("titulo").value = tituloInStore;

    if (tituloInStore.length === 50) {
      setHelper(
        <>
          <AssignmentLateIcon> </AssignmentLateIcon>
          <span className="formulario-span__helper">Máximo 50 caracteres</span>
        </>
      );
    } else {
      setHelper(<></>);
    }
    //Validacion del anuncio
    anuncioValidation();
  };

  return (
    <div className="title-div">
      <TextField
        inputProps={{
          maxLength: 50
        }}
        type="text"
        id="titulo"
        label="Título"
        className="title-div__input"
        name="titulo"
        required={true}
        autoFocus={true}
        onKeyUp={validateString}
      />
      {helper}
    </div>
  );
};

const mapStateToProps = store => ({
  tituloInStore: store.titulo
});

const mapDispatchToProps = dispatch => ({
  setTituloInStore(titulo) {
    dispatch({
      //ACTION
      type: "SET_TITULO",
      titulo
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NuevoAnuncioTitulo);
