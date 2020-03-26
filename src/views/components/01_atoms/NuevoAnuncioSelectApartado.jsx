import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { InputLabel, MenuItem, Select, FormControl } from "@material-ui/core/";
import anuncioValidation from "../../validations/anuncioValidation";

const NuevoAnuncioSelectApartado = ({
  apartadoKeyInStore,
  seccionKeyInStore,
  setApartadoKeyInStore,
  setApartadoTextInStore
}) => {
  const [apartados, setApartados] = useState({});
  const url = "./util/secciones_" + seccionKeyInStore + ".json";

  useEffect(() => {
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        setApartados(myJson);
      });
  }, [apartadoKeyInStore]);

  const cambiarApartado = () => event => {
    let keyValue = event.target.value;
    let textValue = event.currentTarget.innerText;
    setApartadoKeyInStore(keyValue);
    setApartadoTextInStore(textValue);
    //Validacion del anuncio
    anuncioValidation();
  };

  return (
    <>
      <div className="data-div">
        <FormControl>
          <InputLabel>Apartado</InputLabel>
          <Select
            value={apartadoKeyInStore}
            onChange={cambiarApartado()}
            inputProps={{
              name: "apartado",
              id: "apartado",
              className: "data-div__select"
            }}
          >
            {Object.keys(apartados).map(function(key) {
              return <MenuItem value={key}>{apartados[key]}</MenuItem>;
            })}
          </Select>{" "}
        </FormControl>
      </div>
    </>
  );
};

const mapStateToProps = store => ({
  apartadoKeyInStore: store.apartadoKey,
  seccionKeyInStore: store.seccionKey
});

const mapDispatchToProps = dispatch => ({
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
)(NuevoAnuncioSelectApartado);
