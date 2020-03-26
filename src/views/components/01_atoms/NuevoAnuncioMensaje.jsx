import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Media from "react-media";
import AssignmentLateIcon from "@material-ui/icons/AssignmentLate";
import anuncioValidation from "../../validations/anuncioValidation";

const NuevoAnuncioMensaje = ({ mensajeInStore, setMensajeInStore }) => {
  let [helper, setHelper] = useState();

  useEffect(() => {
    document.getElementById("mensaje").value = mensajeInStore;
  });

  const sanitizingString = ev => {
    //1) Se recibe el texto ingresado
    const mensajeEntrante = ev.target.value;
    //2) Se sanitiza
    const mensajeValidado = mensajeEntrante
      .replace(/<script>/gi, "")
      .replace(/<object>/gi, "")
      .replace(/<applet>/gi, "")
      .replace(/<embed>/gi, "")
      .replace(/<iframe>/gi, "");
    //3) Se asigna a 'titulo'
    setMensajeInStore(mensajeValidado);
    document.getElementById("mensaje").value = mensajeInStore;

    if (mensajeInStore.length === 2500) {
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
    <div className="message-div">
      <Media
        queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}
      >
        {matches => (
          <Fragment>
            {matches.small && (
              <TextField
                inputProps={{
                  maxLength: 2500
                }}
                label="Mensaje"
                multiline
                variant="filled"
                className="message-div__textarea "
                id="mensaje"
                type="text"
                required={true}
                rows="10"
                onKeyUp={sanitizingString}
              />
            )}

            {matches.medium && (
              <TextField
                inputProps={{
                  maxLength: 2500
                }}
                label="Mensaje"
                multiline
                variant="filled"
                className="message-div__textarea "
                id="mensaje"
                type="text"
                required={true}
                rows="15"
                onKeyUp={sanitizingString}
              />
            )}
            {matches.large && (
              <TextField
                inputProps={{
                  maxLength: 2500
                }}
                label="Mensaje"
                multiline
                variant="filled"
                className="message-div__textarea "
                id="mensaje"
                type="text"
                required={true}
                rows="20"
                onKeyUp={sanitizingString}
              />
            )}
          </Fragment>
        )}
      </Media>
      {helper}
    </div>
  );
};

const mapStateToProps = store => ({
  mensajeInStore: store.mensaje
});

const mapDispatchToProps = dispatch => ({
  setMensajeInStore(mensaje) {
    dispatch({
      //ACTION
      type: "SET_MENSAJE",
      mensaje
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NuevoAnuncioMensaje);
