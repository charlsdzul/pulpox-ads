"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewAdScheme = Schema(
  {
    titulo: String,
    mensaje: String,
    estado: String,
    ciudad: String,
    seccion: String,
    apartado: String,
    telefono: String,
    celular: String,
    correo: String
  },
  { collection: "ads" }
);

module.exports = mongoose.model("NewAd", NewAdScheme);
