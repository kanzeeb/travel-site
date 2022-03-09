import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import NavBar from './components/navBar';
import Inicio from './components/inicio';
import Global from './components/globalizadores';
import Aerolinea from './components/aerolineas';
import OnlineAgency from './components/onlineAgency';
import GuiaViaje from './components/guiasViaje';
import GuiaDeViaje from './components/guiasDeViaje';
import AgenciasViaje from './components/agenciasViaje';
import NotFound from './components/notFound';
import Footer from './components/footer';
import BootstrapCarousel from './components/sliderBootstrap';

import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <BootstrapCarousel />
      <main>
        <Switch>
          <Route path="/globalizadores" component={Global} />
          <Route path="/aerolineas" component={Aerolinea} />
          <Route path="/online-travel-agency" component={OnlineAgency} />
          <Route path="/guias-viaje" component={GuiaDeViaje}  />
          <Route path="/agencias-viaje" component={AgenciasViaje} />
          <Route path="/inicio" component={Inicio}/>
          <Redirect from="/" exact to="/inicio" />
          <Redirect from="/travel-site" exact to="/inicio" />
          <Route to="/not-found" />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
