import React, { Component } from 'react';
import Pesquisa from './Pesquisa';
import Button from './Button';
import Category from './Category';
import '../App.css';

export default class Base extends Component {
  state = {
    valorInput: '',
  }

  guardarValorInput = (input) => {
    this.setState({ valorInput: input });
  }

  render() {
    const { valorInput } = this.state;
    return (
      <div className="geral">
        <Pesquisa valorInput={ valorInput } />
        <Button />
        <Category guardarValorInput={ this.guardarValorInput } />
      </div>
    );
  }
}
