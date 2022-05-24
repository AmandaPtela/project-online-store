import React from 'react';
import { Link } from 'react-router-dom';

export default class Carrinho extends React.Component {
  render() {
    return (
      <div>
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        <Link to="/">Pagina Inicial</Link>
      </div>
    );
  }
}
