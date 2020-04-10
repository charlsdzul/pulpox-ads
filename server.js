//GENERAL
"use strict";
require("@babel/register")({
  presets: ["@babel/preset-react"],
});
const config = require("./config");
const express = require("express");
const bodyParser = require("body-parser");
const moongose = require("mongoose");
const fileUpload = require("express-fileupload");
const apiRoutes = require("./src/routes/apiRoutes");
const appRoutes = require("./src/routes/appRoutes");
const NewAd = require("./src/models/newAd");
let app = express();

//MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

//ROUTES
app.use("/api", apiRoutes);
app.use("/", appRoutes);

//DB - SERVER
moongose.connect(config.db, { useNewUrlParser: true }, (err, res) => {
  if (err) {
    console.log(
      `Hubo un error al conectar a la base de datos Mongoose: ${err}`
    );
  } else {
    console.log("Conexión a bade de datos Mongoose establecida :)");

    //Si la conexión a bdd es exitosa, levantar servidor.
    app.listen(config.port, () =>
      console.log(`Servidor en linea: http://localhost:${config.port}`)
    );
  }
});

//const session = require("express-session");

/*app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);*/

//session.usuario = "Carlos Dzul";
/*
app.get("/prueba", (req, res) => {
  const id = req.sessionID;
  console.log(session.usuario + ": " + id);
  res.send(session.my_variable);
});
*/
