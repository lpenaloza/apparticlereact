import React from 'react';
//import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import Router from './Router';
//import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      {/*<section id="content">
          <img src={logo} className="App-logo" alt="logo" />
          </section>*/
      }
      <Router />

    </div>
  );
}

export default App;
