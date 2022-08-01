
import './App.css';
import Header from './componentes/layout/Header';
import Nav from './componentes/layout/Nav';
import Footer from './componentes/layout/Footer';

import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import ContactoPage from './paginas/contactoPage';
import HomePage from './paginas/homePage';
import NosotrosPage from './paginas/nosotrosPage';
import NovedadesPage from './paginas/novedadesPage';
import ServiciosPage from './paginas/serviciosPage';
import GaleriaPage from './paginas/galeriaPage';
import { Component } from 'react';

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Switch>
        <Route path="/" exact component={ HomePage } />
        <Route path="/nosotros" exact component={ NosotrosPage } />
        <Route path="/novedades" exact component={ NovedadesPage } />
        <Route path="/contacto" exact component={ ContactoPage } />
        <Route path="/servicios" exact component={ ServiciosPage } />
        <Route path="/galeria" exact component={ GaleriaPage } />
      </Switch>
      <Footer />


    </Router>
  );
}

export default App;