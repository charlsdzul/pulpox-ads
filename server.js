const express = require("express");
let app = express();

//app.get("/", (req, res) => res.send("HELLO FROM EXPRESS Y Fazt"));
app.use(express.static(__dirname + "/public"));
app.listen(3000, () =>
  console.log("Example app listening on port 3000 http://localhost:3000")
);
