import React from 'react';
import logo from './logo.svg';
import './App.css';
import CompteurAfficheur from './containers/compteur/compteur-affichage';
import CompteurInteraction from './containers/compteur/compteur-interaction';
import CompteurReset from './containers/compteur/compteur-reset';

function App() {
  return (
    <div className="App">
      <CompteurAfficheur />
      <CompteurInteraction />
      <CompteurInteraction step={5}/>
      <CompteurReset />
    </div>
  );
}

export default App;
