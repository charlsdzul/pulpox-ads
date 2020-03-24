import React from "react";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import HomePage from "./views/components/05_pages/HomePage";
//import MisAnunciosPage from "./views/components/05_pages/MisAnunciosPage";
//import NuevoAnuncioPage from "./views/components/05_pages/NuevoAnuncioPage";
//import NuevoAnuncioGuardadoPage from "./views/components/05_pages/NuevoAnuncioGuardadoPage";

//import "./views/scss/base/config.scss";
//import Header from "./views/components/03_organisms/Header";
//import { Provider } from "react-redux";
//import store from "./views/components/reduxAnuncio/store";
//import Footer from "./views/components/03_organisms/Footer";
const App = () => {
  const setSectionHeight = () => event => {
    var h = window.innerHeight;
    console.log(h);
    event.currentTarget.style.height = h * 0.9 + "px";
  };

  return (
    <h1>HOLA!</h1>

    /* <body onLoad={setSectionHeight()}>
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/mis-anuncios/" exact component={MisAnunciosPage} />
            <Route path="/anuncio-nuevo/" exact component={NuevoAnuncioPage} />
            <Route
              path="/anuncio-guardado/"
              exact
              component={NuevoAnuncioGuardadoPage}
            />
          </Switch>
          <Footer />
        </Router>
      </Provider>
    </body>*/
  );
};

export default App;
