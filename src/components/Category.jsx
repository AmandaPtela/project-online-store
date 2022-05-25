import React, { Component } from 'react';
import '../App.css';
// import PropTypes from 'prop-types';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from './ProductCard';

export default class Category extends Component {
  state = {
    categorias: [],
    products: [],
  };

  componentDidMount() {
    this.categorias();
  }

  categorias = async () => {
    // const { categorias } = this.state;
    const categories = await getCategories().then();
    this.setState({ categorias: categories });
  };

  handleCategory = (evento) => {
    const { id: value } = evento.target;
    console.log(value);
  };

  handleClick = async (event) => {
    const { id } = event.target;
    const response = await getProductsFromCategoryAndQuery(
      id,
      null,
    ).then((resp) => resp.results);
    this.setState({ products: response });
  };

  render() {
    const { categorias, isChecked, products } = this.state;
    return (
      <div className="categorias-select">
        {categorias.map((categoria) => (
          <label
            key={ categoria.id }
            htmlFor={ categoria.id }
            onChange={ this.handleCategory }
            data-testid="category "
          >
            <input
              type="radio"
              name="categoria"
              checked={ isChecked }
              value={ categoria.name }
              id={ categoria.id }
              onClick={ this.handleClick }
            />
            {categoria.name}
          </label>

        ))}

        <div>
          {products.map((product) => (
            <ProductCard
              data-testid="product"
              key={ product.id }
              name={ product.title }
              image={ product.thumbnail }
              price={ product.price }
            />
          ))}
        </div>
      </div>
    );
  }
}
