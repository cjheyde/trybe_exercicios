import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Pokedex from './components/Pokedex';

class App extends Component {
render() {
  return (
  <div className="App">
    <Header />
    <Pokedex />
  </div>
  );
}}

export default App;
