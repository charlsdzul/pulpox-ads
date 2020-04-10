"use strict";

const PORT = process.env.PORT || 3000;

require("@babel/register")({
  presets: ["@babel/preset-react"],
});

const express = require("express");
const path = require("path");
const session = require("express-session");
const moongose = require("mongoose");
const bodyParser = require("body-parser");
const NewAd = require("./src/models/newAd");
const fileUpload = require("express-fileupload");
const fs = require("fs");

const ReactDOMServer = require("react-dom/server");
const React = require("react");
const PageSSR = require("./src/views/components/01_atoms/PageSSR");
//const __dirname = path.resolve();

let app = express();

//Middlewares. Todo lo que sea HTTP, pasa por estas capas!
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

//session.usuario = "Carlos Dzul";
/*
app.get("/prueba", (req, res) => {
  const id = req.sessionID;
  console.log(session.usuario + ": " + id);
  res.send(session.my_variable);
});
*/

/**
 * Esta función sirve para que todas las entradas GET se usen como si fueran de React Router.
 * Si no está definido, al entrar directamente a una URL, marcará error porque express no tiene definido tal ruta.
 * Esta función me salvó la vida, jajaj!
 */
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.post("/api/upload-image", (req, res) => {
  let incomigImage = req.files.image;

  //Size Validation
  if (incomigImage.size <= 10000000) {
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

app.get("/mis-anuncios", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.get("/demo", (req, res) => {
  var html = ReactDOMServer.renderToString(React.createElement(PageSSR));
  res.send(html);
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.post("/api/new-ad", (req, res) => {
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

/*
moongose.connect(
  "mongodb://localhost:27017/pulpox_ads",
  { useNewUrlParser: true },
  (err, res) => {
    if (err) {
      console.log(
        `Hubo un error al conectar a la base de datos Mongoose: ${err}`
      );
    } else {
      console.log("Conexión a bade de datos Mongoose establecida :)");

      //Si la conexión a bdd es exitosa, levantar servidor.
      app.listen(3000, () =>
        console.log("Servidor en linea: http://localhost:3000")
      );
    }
  }
);
*/

app.listen(PORT, () => console.log("Servidor en linea: http://localhost:3000"));
