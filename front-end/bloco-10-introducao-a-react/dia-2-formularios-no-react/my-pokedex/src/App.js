import React, { Component } from 'react';
import './App.css';
import Pokedex from './components/Pokedex';

class App extends Component {
render() {
  return (
  <div className="App">
    <h1 className="titulo">Pokedex</h1>
    <Pokedex />
  </div>

  );
}}

export default App;
