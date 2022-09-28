// import React from 'react'
// import { Route, NavLink, HashRouter } from 'react-router-dom'
import { HashRouter, NavLink } from 'react-router-dom'

import Home from '../src/Screens/Home'
import Promotions from '../src/Screens/Promotions'
import Contact from './Screens/Contact';
import Footer from './Screens/Footer';
import Map from './Screens/Map';
import Rooms from './Screens/Rooms';
import Service from './Screens/Service';

function App() {
    return (
      <HashRouter>
        <div className="App">
          <div>
            <nav>
              <header className="text-title-color grid flex-col place-content-center">
                <h1 className="">Karaoke Paulista</h1>
              </header>
              <div>
                <ul className="text-title-color header">
                  <li>
                    <NavLink to="home">Início</NavLink>
                  </li>
                  <li>
                    <a href="promotions">Promoções</a>
                  </li>
                  <li>
                    <a href="rooms">Salas</a>
                  </li>
                  <li>
                    <a href="services">Cardapio</a>
                  </li>
                  <li>
                    <a href="map">Mapa</a>
                  </li>
                  <li>
                    <a href="contact">Contato</a>
                  </li>
                </ul>
                <div className="content">
                  <Home />
                  <Promotions />
                  <Rooms />
                  <Service />
                  <Map />
                  <Contact />
                  <Footer />
                </div>
              </div>
            </nav>
            
          </div>
        </div>
      </HashRouter>

    );
  }


export default App;
