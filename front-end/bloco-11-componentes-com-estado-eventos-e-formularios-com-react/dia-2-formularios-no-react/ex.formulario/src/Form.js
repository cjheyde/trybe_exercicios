import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super();

    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      exTextarea: '',
      exSelect: 'coco',
      email: '',
    };
  }

  // handleInputChange(event) {
  //   const target = event.target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const name = target.name;

  //   this.setState({
  //     [name]: value
  //   });
  // }

    handleInputChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }




  render() {
    return (
      <div>
        <h1>Exercícios 11.2</h1>
        <form className="form">

        <fieldset>

          <label htmlFor="ano_nascimento">
          Ano de Nascimento:
          <input
            id="ano_nascimento"
            name="ano_nascimento"
            type="number"
            value={this.state.birthYear}
            onChange={this.handleInputChange} 
          />
          </label>

          <br/>

          <label htmlFor="aprendi">
          <input
            id="aprendi"
            name="aprendi"
            type="checkbox"
            value={this.state.aprendi}
            onChange={this.handleInputChange} 
          />
          Aprendi!
          </label>
          </fieldset>
          <br/>
          <fieldset>
          <label htmlFor="nome">
          Seu Nome:
          <input
            type="text"
            name="nome"
            value={this.state.textName}
            onChange={this.handleInputChange} 
          />
          </label>
          <br/>
          <label htmlFor="isGoing">
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} 
          />
          Estão indo
          </label>
          <br/>
          <label htmlFor="numberOfGuests">
          Número de convidados:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
          </label>
          <br/>
          <br/>
          <label htmlFor="exTextarea">
          Exemplo de TextArea:
          <textarea name="exTextarea" value={this.state.exTextarea} onChange={this.handleInputChange} />
          </label>
          <br/>
          <br/>
          <label htmlFor="exSelect">
          Exemplo de Select:
          <select name="exSelect" value={this.state.exSelect} onChange={this.handleInputChange}>
            <option value="laranja">Laranja</option>
            <option value="limao">Limão</option>
            <option value="coco">Coco</option>
            <option value="manga">Manga</option>
          </select>
          </label>
          <label htmlFor="email">
          Email:
          <input
            id="email"
            name="email"
            type="email"
            value={ this.state.email }
            onChange={ this.handleInputChange }
          />
          </label>
        </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;