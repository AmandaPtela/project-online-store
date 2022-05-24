import React, { Component } from 'react';
import Pesquisa from './Pesquisa';
import Button from './Button';
import Category from './Category';
import '../App.css';

export default class Base extends Component {
  render() {
    return (
      <div className="geral" >
        <Pesquisa />
        <Button />
        <Category />
      </div>
    );
  }
}
