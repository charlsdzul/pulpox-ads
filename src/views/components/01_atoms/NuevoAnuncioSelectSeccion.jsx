import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { InputLabel, MenuItem, Select, FormControl } from "@material-ui/core/";
import anuncioValidation from "../../validations/anuncioValidation";

const NuevoAnuncioSelectSección = ({
  setSeccionKeyInStore,
  setSeccionTextInStore,
  setApartadoKeyInStore,
  setApartadoTextInStore,
  seccionKeyInStore
}) => {
  /**
   * variable secciones para almacenar el json obtenido en el fecth
   */
  const [secciones, setSecciones] = useState({});

  useEffect(() => {
    fetch("./util/secciones.json")
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        setSecciones(myJson);
      });
    console.log("imprimiendo...");
  }, [seccionKeyInStore]);

  const cambiarSeccion = () => event => {
    let keyValue = event.target.value;
    let textValue = event.currentTarget.innerText;

    setSeccionKeyInStore(event.target.value);
    setApartadoKeyInStore(event.target.value + "01");

    setSeccionKeyInStore(keyValue);
    setSeccionTextInStore(textValue);
    setApartadoKeyInStore(keyValue + "01");

    fetch("./util/secciones_" + keyValue + ".json")
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        setApartadoTextInStore(myJson[keyValue + "01"]);
      });

    //Validacion del anuncio
    anuncioValidation();
  };

  return (
    <>
      <div className="data-div">
        <FormControl>
          <InputLabel>Seccion</InputLabel>
          <Select
            value={seccionKeyInStore}
            onChange={cambiarSeccion()}
            inputProps={{
              name: "seccion",
              id: "seccion",
              className: "data-div__select"
            }}
          >
            {Object.keys(secciones).map(function(key) {
              return <MenuItem value={key}>{secciones[key]}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </div>
    </>
  );
};

const mapStateToProps = store => ({
  seccionKeyInStore: store.seccionKey,
  seccionTextInStore: store.seccionText,
  apartadoKeyInStore: store.apartadoKey,
  apartadoTextInStore: store.apartadoText
});

const mapDispatchToProps = dispatch => ({
  setSeccionKeyInStore(seccionKey) {
    dispatch({
      //ACTION
      type: "SET_SECCION_KEY",
      seccionKey
    });
  },

  setSeccionTextInStore(seccionText) {
    dispatch({
      //ACTION
      type: "SET_SECCION_TEXT",
      seccionText
    });
  },

  setApartadoKeyInStore(apartadoKey) {
    dispatch({
      //ACTION
      type: "SET_APARTADO_KEY",
      apartadoKey
    });
  },

  setApartadoTextInStore(apartadoText) {
    dispatch({
      //ACTION
      type: "SET_APARTADO_TEXT",
      apartadoText
    });
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NuevoAnuncioSelectSección);
