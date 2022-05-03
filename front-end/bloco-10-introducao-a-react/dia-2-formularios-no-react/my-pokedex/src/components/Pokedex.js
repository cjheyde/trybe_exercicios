import React, { Component } from "react";
import "./Pokedex.css";
import Pokemon from "./Pokemon";
import pokemons from '../data';

class Pokedex extends Component {
render() {
  return (
    pokemons.map(e => (
      <div className="pokedex">
        <Pokemon key={e.id} pokemon={e} />
        {/* {pokemons.map(e => <Pokemon key={e.id} pokemon={e} />)} */}
      </div>
)));
}}


export default Pokedex
