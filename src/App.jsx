import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import InicioPage from "./views/components/05_pages/InicioPage";
import MisAnunciosPage from "./views/components/05_pages/MisAnunciosPage";
import AnuncioNuevoPage from "./views/components/05_pages/AnuncioNuevoPage";
import AnuncioGuardadoPage from "./views/components/05_pages/AnuncioGuardadoPage";

//import "./views/scss/base/config.scss";
import Header from "./views/components/03_organisms/Header";
import { Provider } from "react-redux";
import store from "./views/components/reduxAnuncio/store";
import Footer from "./views/components/03_organisms/Footer";
const App = () => {
  const setSectionHeight = () => (event) => {
    var h = window.innerHeight;
    console.log(h);
    event.currentTarget.style.height = h * 0.9 + "px";
  };

  return (
    <body onLoad={setSectionHeight()}>
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={InicioPage} />
            <Route path="/mis-anuncios" exact component={MisAnunciosPage} />
            <Route path="/anuncio-nuevo" exact component={AnuncioNuevoPage} />
            <Route
              path="/anuncio-guardado"
              exact
              component={AnuncioGuardadoPage}
            />
          </Switch>
          <Footer />
        </Router>
      </Provider>
    </body>
  );
};

export default App;
