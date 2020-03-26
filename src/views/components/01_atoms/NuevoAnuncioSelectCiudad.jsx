import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { InputLabel, MenuItem, Select, FormControl } from "@material-ui/core/";
import anuncioValidation from "../../validations/anuncioValidation";

const NuevoAnuncioSelectCiudad = ({
  ciudadKeyInStore,
  estadoKeyInStore,
  setCiudadKeyInStore,
  setCiudadTextInStore
}) => {
  const [ciudades, setCiudades] = useState({});
  const url = "./util/ciudades_" + estadoKeyInStore + ".json";

  useEffect(() => {
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        setCiudades(myJson);
      });
  }, [estadoKeyInStore]);

  const cambiarCiudad = () => event => {
    let keyValue = event.target.value;
    let textValue = event.currentTarget.innerText;
    setCiudadKeyInStore(keyValue);
    setCiudadTextInStore(textValue);
    //Validacion del anuncio
    anuncioValidation();
  };

  return (
    <>
      <div className="data-div">
        <FormControl>
          <InputLabel>Ciudad</InputLabel>
          <Select
            value={ciudadKeyInStore}
            onChange={cambiarCiudad()}
            inputProps={{
              name: "ciudad",
              id: "ciudad",
              className: "data-div__select"
            }}
          >
            {Object.keys(ciudades).map(function(key) {
              return <MenuItem value={key}>{ciudades[key]}</MenuItem>;
            })}
          </Select>{" "}
        </FormControl>
      </div>
    </>
  );
};

const mapStateToProps = store => ({
  ciudadKeyInStore: store.ciudadKey,
  estadoKeyInStore: store.estadoKey
});

const mapDispatchToProps = dispatch => ({
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
)(NuevoAnuncioSelectCiudad);
