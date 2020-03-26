/**
 * Función para validar los datos ingresados para el anuncio nuevo,
 * Activa o desactiva el boton de 'Guardar'
 * Obtiene los datos del Store y los valida.
 * Todos deben ser TRUE para que al final el botón 'Guardar' puede estar en ENABLED
 * Esta función se ejecuta en cada elemento de 'NuevoAnuncio'
 * Sin importar el elemento, al ejecutarse validará todos los elementos en conjunto
 */

import store from "../components/reduxAnuncio/store";

export function anuncioValidation() {
  const storeValidation = store.getState();
  let validationCount = 0;

  /********************* Valida título */
  if (storeValidation.titulo !== "") {
    validationCount++;
    //console.log(storeValidation.titulo);
  }

  /********************* Valida mensaje */
  if (storeValidation.mensaje !== "") {
    validationCount++;
    //console.log(storeValidation.mensaje);
  }

  /********************* Valida estadoKey */
  if (storeValidation.estadoKey !== "") {
    validationCount++;
    //console.log(storeValidation.estadoKey);
  }

  /********************* Valida ciudadKey */
  if (storeValidation.ciudadKey !== "") {
    validationCount++;
    //console.log(storeValidation.ciudadKey);
  }

  /********************* Valida seccionKey */
  if (storeValidation.seccionKey !== "") {
    validationCount++;
    //console.log(storeValidation.seccionKey);
  }

  /********************* Valida apartadoKey */
  if (storeValidation.apartadoKey !== "") {
    validationCount++;
    //console.log(storeValidation.apartadoKey);
  }

  /********************* Valida telefono */
  let tel = storeValidation.telefono;
  if (tel.length === 10 || tel.length === 0) {
    validationCount++;
    //console.log("storeValidation.telefono.length");
  }

  /********************* Valida celular */
  if (
    storeValidation.celular.length === 10 ||
    storeValidation.celular.length === 0
  ) {
    validationCount++;
    //console.log("storeValidation.celular.length");
  }

  /********************* Valida correo */
  const mailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (storeValidation.correo === "") {
    validationCount++;
  } else {
    if (storeValidation.correo.match(mailformat)) {
      validationCount++;
      //console.log(storeValidation.correo);
    }
  }

  //console.log(validationCount);

  if (validationCount === 9) {
    document.getElementById("button-guardar").disabled = false;
  } else {
    document.getElementById("button-guardar").disabled = true;
  }
}

export default anuncioValidation;
