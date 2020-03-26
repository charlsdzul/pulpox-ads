import React from "react";
import { connect } from "react-redux";
import AnuncioBoton from "../01_atoms/AnuncioBoton";
import EditIcon from "@material-ui/icons/Edit";
import PublishIcon from "@material-ui/icons/Publish";

const AnuncioGuardado = ({
  telefonoStore,
  celularStore,
  correoStore,
  tituloStore,
  mensajeStore,
  estadoTextInStore,
  ciudadTextInStore,
  seccionTextInStore,
  apartadoTextInStore
}) => {
  if (telefonoStore !== "") {
    telefonoStore = "Tel: " + telefonoStore;
  }

  if (celularStore !== "") {
    celularStore = "Cel: " + celularStore;
  }

  if (correoStore !== "") {
    correoStore = "Correo: " + correoStore;
  }

  const datos =
    estadoTextInStore +
    " > " +
    ciudadTextInStore +
    " > " +
    seccionTextInStore +
    " > " +
    apartadoTextInStore;

  return (
    <div className="anuncio-guardado-div__nuevo col-10 col-sm-10 col-md-10 col-lg-8 col-xl-8">
      <div className="anuncio-guardado-div__titulo">
        <h2>{tituloStore}</h2>
      </div>

      <div className="anuncio-guardado-div__mensaje">
        <span>{mensajeStore}</span>
      </div>

      <div className="anuncio-guardado-div__datos">
        <div className="anuncio-guardado-div__span">
          <span>Se publicará en:</span>
        </div>
        <span>
          <u>{datos}</u>
        </span>
      </div>

      <div className="anuncio-guardado-div__datos">
        <div className="anuncio-guardado-div__span">
          <span>Datos de contacto:</span>
        </div>
        <div className="anuncio-guardado-div__datos--dato">
          <span>{telefonoStore}</span>
        </div>
        <div className="anuncio-guardado-div__datos--dato">
          <span>{celularStore}</span>
        </div>
        <div className="anuncio-guardado-div__datos--dato">
          <span>{correoStore}</span>
        </div>
      </div>

      <div className="div-buttons">
        {" "}
        <AnuncioBoton
          path={"/anuncio-nuevo"}
          nameButton={"Editar"}
          icon={<EditIcon />}
        ></AnuncioBoton>
        <AnuncioBoton
          path={"/anuncio-publicado"}
          nameButton={"Publicar"}
          icon={<PublishIcon />}
        ></AnuncioBoton>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  telefonoStore: state.telefono,
  celularStore: state.celular,
  correoStore: state.correo,
  acumuladoStore: state.acumulado,
  tituloStore: state.titulo,
  mensajeStore: state.mensaje,
  estadoTextInStore: state.estadoText,
  ciudadTextInStore: state.ciudadText,
  seccionTextInStore: state.seccionText,
  apartadoTextInStore: state.apartadoText
});

export default connect(mapStateToProps, {})(AnuncioGuardado);
