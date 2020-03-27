//import HomePage from "./src/views/components/05_pages/HomePage";
import express from "express";
import path from "path";
import session from "express-session";
import flash from "connect-flash";
const __dirname = path.resolve();

let app = express();

//app.get("/", (req, res) => res.send("HELLO FROM EXPRESS Y Fazt"));
/*app.get("/mis-anuncios", (req, res) => {
  console.log("entraron a mis-anuncios en URL");
});*/

app.use(express.static(__dirname + "/public"));

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true
  })
);

session.usuario = "Carlos Dzul";

app.get("/prueba", (req, res) => {
  const id = req.sessionID;
  console.log(session.usuario + ": " + id);
  res.send(session.my_variable);
});

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

app.listen(3000, () =>
  console.log("Example app listening on port 3000 http://localhost:3000")
);
