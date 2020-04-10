//General
"use strict";
const express = require("express");
const appRoutes = express.Router();
const path = require("path");
const config = require("../../config");

//ServerSide Rendering
const ReactDOMServer = require("react-dom/server");
const React = require("react");
const PageSSR = require("../views/components/01_atoms/PageSSR");

/**
 * Routes for ReactRouter in Client-Side
 */

appRoutes.get("mis-anuncios", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
      console.log(err);
    }
  });
});

appRoutes.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

/**
 * Routes for SSR
 */
appRoutes.get("demo", (req, res) => {
  var html = ReactDOMServer.renderToString(React.createElement(PageSSR));
  res.send(html);
});

module.exports = appRoutes;
