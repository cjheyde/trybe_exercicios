import React, { Component } from "https://cdn.skypack.dev/react@17.0.1";
import './App.css';

class App extends Component {

constructor() {
  super();

  this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    }

  this.handleClick1 = this.handleClick1.bind(this);
  this.handleClick2 = this.handleClick2.bind(this);
  this.handleClick3 = this.handleClick3.bind(this);
}

handleClick1() {
  console.log('Clicou no Botão 1!');
  this.setState((prevState) => ({
    numeroDeCliques1: prevState.numeroDeCliques1 + 1,
  }));
}

handleClick2() {
  console.log('Clicou no Botão 2!');
  this.setState((prevState) => ({
    numeroDeCliques2: prevState.numeroDeCliques2 + 1,
  }));
}

handleClick3() {
  console.log('Clicou no Botão 3!');
  this.setState((prevState) => ({
    numeroDeCliques3: prevState.numeroDeCliques3 + 1,
  }), () => {
        console.log(`Botão 1 ${this.getButtonColor(this.state.numeroDeCliques3)}`);
      });
}

getButtonColor(num) {
  return num % 2 === 0 ? 'green' : 'yellow';
}

  render() {
        const { numeroDeCliques1, numeroDeCliques2, numeroDeCliques3 } = this.state;
    return (
    <>
      <button onClick={this.handleClick1} style={{ backgroundColor: this.getButtonColor(numeroDeCliques1) }}>Botão 1 - {this.state.numeroDeCliques1} Cliques</button>
      <button onClick={this.handleClick2} style={{ backgroundColor: this.getButtonColor(numeroDeCliques2) }}>Botão 2 - {this.state.numeroDeCliques2} Cliques</button>
      <button onClick={this.handleClick3} style={{ backgroundColor: this.getButtonColor(numeroDeCliques3) }}>Botão 3 | Count = {this.state.numeroDeCliques3}</button>   
    </>
    )
  }
}

export default App;