import React, { Component } from 'react';
import Pesquisa from './Pesquisa';
import Button from './Button';

export default class Base extends Component {
  render() {
    return (
      <div>
        <Pesquisa />
        <Button />
      </div>
    );
  }
}
