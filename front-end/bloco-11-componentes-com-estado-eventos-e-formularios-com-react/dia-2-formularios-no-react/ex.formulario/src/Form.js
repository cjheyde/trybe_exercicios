import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super();

    this.handleChangeTextarea = this.handleChangeTextarea.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      exTextarea: '',
      exSelect: 'coco',
    };
  }


  handleChangeTextarea(event) {
    this.setState({
      exTextarea: event.target.value,
    });
  }

  handleChangeSelect(event) {
    this.setState({
      exSelect: event.target.value
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <h1>Exercícios 11.2</h1>
        <form className="form">
          <label>
          Ano de Nascimento:
          <input
            type="number"
            name="ano_nascimento"
            value={this.state.birthYear}
            onChange={this.handleInputChange} 
          />
          </label>
          <br/>
          <label>
          <input
            type="checkbox"
            name="aprendi"
            value={this.state.aprendi}
            onChange={this.handleInputChange} 
          />
          Aprendi!
          </label>
          <br/>
          <label>
          Seu Nome:
          <input
            type="text"
            name="nome"
            value={this.state.textName}
            onChange={this.handleInputChange} 
          />
          </label>
          <br/>
          <label>
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} 
          />
          Estão indo
          </label>
          <br/>
          <label>
          Número de convidados:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
          </label>
          <br/>
          <br/>
          <label>
          Exemplo de TextArea:
          <textarea name="exTextarea" value={this.state.exTextarea} onChange={this.handleChangeTextarea} />
          </label>
          <br/>
          <br/>
          <label>
          Exemplo de Select:
          <select value={this.state.exSelect} onChange={this.handleChangeSelect}>
            <option value="laranja">Laranja</option>
            <option value="limao">Limão</option>
            <option value="coco">Coco</option>
            <option value="manga">Manga</option>
          </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;