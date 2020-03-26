import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { InputLabel, MenuItem, Select, FormControl } from "@material-ui/core/";
import anuncioValidation from "../../validations/anuncioValidation";

const NuevoAnuncioSelectEstado = ({
  setEstadoKeyInStore,
  setEstadoTextInStore,
  setCiudadKeyInStore,
  setCiudadTextInStore,
  estadoKeyInStore
}) => {
  /**
   * variable estados para almacenar el json obtenido en el fecth
   */
  const [estados, setEstados] = useState({});

  useEffect(() => {
    fetch("./util/estados.json")
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        setEstados(myJson);
      });
  }, [estadoKeyInStore]);

  const cambiarEstado = () => event => {
    let keyValue = event.target.value;
    let textValue = event.currentTarget.innerText;
    setEstadoKeyInStore(keyValue);
    setEstadoTextInStore(textValue);
    setCiudadKeyInStore(keyValue + "01");

    fetch("./util/ciudades_" + keyValue + ".json")
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        setCiudadTextInStore(myJson[keyValue + "01"]);
      });

    //Validacion del anuncio
    anuncioValidation();
  };

  return (
    <>
      <div className="data-div">
        <FormControl>
          <InputLabel>estadoKey</InputLabel>
          <Select
            value={estadoKeyInStore}
            onChange={cambiarEstado()}
            inputProps={{
              name: "estadoKey",
              id: "estadoKey",
              className: "data-div__select"
            }}
          >
            {Object.keys(estados).map(function(key) {
              return <MenuItem value={key}>{estados[key]}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </div>
    </>
  );
};

const mapStateToProps = store => ({
  estadoKeyInStore: store.estadoKey,
  estadoTextInStore: store.estadoText,
  ciudadKeyInStore: store.ciudadKey,
  ciudadTextInStore: store.ciudadText
});

const mapDispatchToProps = dispatch => ({
  setEstadoKeyInStore(estadoKey) {
    dispatch({
      //ACTION
      type: "SET_ESTADO_KEY",
      estadoKey
    });
  },

  setEstadoTextInStore(estadoText) {
    dispatch({
      //ACTION
      type: "SET_ESTADO_TEXT",
      estadoText
    });
  },

  setCiudadKeyInStore(ciudadKey) {
    dispatch({
      //ACTION
      type: "SET_CIUDAD_KEY",
      ciudadKey
    });
  },

  setCiudadTextInStore(ciudadText) {
    dispatch({
      //ACTION
      type: "SET_CIUDAD_TEXT",
      ciudadText
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NuevoAnuncioSelectEstado);
