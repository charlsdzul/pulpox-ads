import React from "react";
import Button from "@material-ui/core/Button";

module.exports = function (props) {
  console.log(props);
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="css/anuncio-nuevo.css" />
        <title>DEMO SSR</title>
      </head>
      <body>AQUI IRIA UN ELEMENTO! </body>
    </html>
  );
};
