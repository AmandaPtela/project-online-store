import React, { Component } from 'react';
import '../App.css';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default class Button extends Component {
  render() {
    return (
      <Link to="/carrinho">
        <button type="button" data-testid="shopping-cart-button">
          Carrinho
          {' '}
          <FiShoppingCart />
        </button>
      </Link>
    );
  }
}
