import React, { Component } from 'react';
import './App.css';

class App extends Component {

constructor() {
  super();
  this.handleClick1 = this.handleClick1.bind(this);
  this.handleClick2 = this.handleClick2.bind(this);
  this.handleClick3 = this.handleClick3.bind(this);
}

handleClick1() {
  console.log('Clicou no Botão 1!');
}

handleClick2() {
  console.log('Clicou no Botão 2!');
}

handleClick3() {
  console.log('Clicou no Botão 3!');
}
  render() {
    return (
    <>
      <button onClick={this.handleClick1}>Botão 1</button>
      <button onClick={this.handleClick2}>Botão 2</button>
      <button onClick={this.handleClick3}>Botão 3</button>    
    </>
    )
  }
}

export default App;
