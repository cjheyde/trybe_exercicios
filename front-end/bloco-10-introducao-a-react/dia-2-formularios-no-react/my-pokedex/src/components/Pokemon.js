import React, { Component} from "react";
import "./Pokemon.css";

class Pokemon extends Component {
render() {
const { pokemon } = this.props;
  return (
  <div className="Pokemon">
    <ul>
      <li>{` ${pokemon.name} `}</li>
      <li>{` ${pokemon.type} `}</li>
      <li>{` ${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit} `}</li>
    </ul>
    <img src={pokemon.image} alt={`Imagem do Pokemon ${pokemon.name}`}></img>
  </div>

  )
}
}

export default Pokemon