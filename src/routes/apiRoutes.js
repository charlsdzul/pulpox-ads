"use strict";

const express = require("express");
const apiRoutes = express.Router();

apiRoutes.post("/api/new-ad", (req, res) => {
  let new_ad = new NewAd();
  new_ad.titulo = req.body.titulo;
  new_ad.mensaje = req.body.mensaje;
  new_ad.estado = req.body.estado;
  new_ad.ciudad = req.body.ciudad;
  new_ad.seccion = req.body.seccion;
  new_ad.apartado = req.body.apartado;
  new_ad.telefono = req.body.telefono;
  new_ad.celular = req.body.celular;
  new_ad.correo = req.body.correo;

  new_ad.save((err, new_adStored) => {
    if (err) {
      res
        .status(500)
        .send(`Ha ocurrido un error al guardar su anuncio: ${err}`);
    } else {
      res.status(200).send(new_adStored);
    }
  });
});

apiRoutes.post("/upload-image", (req, res) => {
  let incomigImage = req.files.image;

  //Size Validation
  if (incomigImage.size <= config.imageMaxSize) {
    console.log("TAMAÑO DE IMAGEN SÍ ES MENOR A 10 MB :) ");
  } else {
    console.log("TAMAÑO DE IMAGEN ES MAYOR A 10 MB :() ");
  }

  console.log(incomigImage);
  console.log(incomigImage.size);

  let incomigImageName = req.files.image.name;

  const pathNew = path.join(__dirname, `public/up/${incomigImageName}`);

  if (fs.existsSync(pathNew)) {
    console.log("el archivo ya existe");
  } else {
    console.log("El archivo no existe");
    incomigImage.mv(
      path.join(__dirname, `public/up/${incomigImageName}`),
      function (err) {
        if (err) return res.status(500).send(err);

        res.send("File uploaded!");
      }
    );
  }
});

module.exports = apiRoutes;
