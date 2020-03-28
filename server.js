//import HomePage from "./src/views/components/05_pages/HomePage";
const express = require("express");
const path = require("path");
const session = require("express-session");
const moongose = require("mongoose");
const bodyParser = require("body-parser");
const NewAd = require("./src/models/newAd");
//const __dirname = path.resolve();

let app = express();

//Middlewares. Todo lo que sea HTTP, pasa por estas capas!
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.get("/", (req, res) => res.send("HELLO FROM EXPRESS Y Fazt"));
/*app.get("/mis-anuncios", (req, res) => {
  console.log("entraron a mis-anuncios en URL");
});*/

app.use(express.static(__dirname + "/public"));

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

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true
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
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

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
