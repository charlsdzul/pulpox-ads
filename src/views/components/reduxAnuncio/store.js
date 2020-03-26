/**
 * REDUX STORE
 */

import { createStore } from "redux";

const estadoInicialStoreAnuncio = {
  titulo: "",
  mensaje: "",
  estadoKey: "CHH",
  estadoText: "Chihuahua",
  ciudadKey: "CHH11",
  ciudadText: "Juárez",
  seccionKey: "SER",
  seccionText: "Servicios",
  apartadoKey: "SER01",
  apartadoText: "Hogar",
  telefono: "",
  celular: "",
  correo: ""
};

const reducerAnuncio = (estadoStore = estadoInicialStoreAnuncio, action) => {
  if (action.type === "SUMAR_NUMERO") {
    return {
      ...estadoStore,
      acumulado: estadoStore.acumulado + action.valor
    };
  }

  if (action.type === "SET_TITULO") {
    return {
      ...estadoStore,
      titulo: action.titulo
    };
  }

  if (action.type === "SET_MENSAJE") {
    return {
      ...estadoStore,
      mensaje: action.mensaje
    };
  }

  if (action.type === "SET_ESTADO_KEY") {
    return {
      ...estadoStore,
      estadoKey: action.estadoKey
    };
  }

  if (action.type === "SET_ESTADO_TEXT") {
    return {
      ...estadoStore,
      estadoText: action.estadoText
    };
  }

  if (action.type === "SET_CIUDAD_KEY") {
    return {
      ...estadoStore,
      ciudadKey: action.ciudadKey
    };
  }

  if (action.type === "SET_CIUDAD_TEXT") {
    return {
      ...estadoStore,
      ciudadText: action.ciudadText
    };
  }

  if (action.type === "SET_SECCION_KEY") {
    return {
      ...estadoStore,
      seccionKey: action.seccionKey
    };
  }

  if (action.type === "SET_SECCION_TEXT") {
    return {
      ...estadoStore,
      seccionText: action.seccionText
    };
  }

  if (action.type === "SET_APARTADO_KEY") {
    return {
      ...estadoStore,
      apartadoKey: action.apartadoKey
    };
  }
  if (action.type === "SET_APARTADO_TEXT") {
    return {
      ...estadoStore,
      apartadoText: action.apartadoText
    };
  }

  if (action.type === "SET_TELEFONO") {
    return {
      ...estadoStore,
      telefono: action.telefono
    };
  }

  if (action.type === "SET_CELULAR") {
    return {
      ...estadoStore,
      celular: action.celular
    };
  }

  if (action.type === "SET_CORREO") {
    return {
      ...estadoStore,
      correo: action.correo
    };
  }

  if (action.type === "SET_ANUNCIO_VALIDATION") {
    return {
      ...estadoStore,
      validation: action.validation
    };
  }

  return estadoStore;
};

export default createStore(reducerAnuncio);
