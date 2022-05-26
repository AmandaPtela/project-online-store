import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
// import PropTypes from 'prop-types';
import {
  getCategories,
  getProductsFromCategoryAndQuery,
} from '../services/api';
import ProductCard from './ProductCard';

export default class Category extends Component {
  state = {
    categorias: [],
    products: [],
    compras: JSON.parse(localStorage.getItem('infosCards')) || [],
  };

  componentDidMount() {
    this.categorias();
  }

  categorias = async () => {
    const categories = await getCategories().then();
    this.setState({ categorias: categories });
  };

  handleCategory = (evento) => {
    const { id: value } = evento.target;
    console.log(value);
  };

  handleClick = async (event) => {
    const { id } = event.target;
    const response = await getProductsFromCategoryAndQuery(id, null).then(
      (resp) => resp.results,
    );
    this.setState({ products: response });
  };

  onSave = (product) => {
    const { compras } = this.state;
    const todosOsProdutos = [...compras, product];
    this.setState({ compras: todosOsProdutos });
    localStorage.setItem('infosCards', JSON.stringify(todosOsProdutos));
  }

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
            <>
              <Link
                to={ `/produto/${product.id}` }
                key={ product.id }
                data-testid="product-detail-link"
              >
                <ProductCard
                  data-testid="product"
                  key={ product.id }
                  name={ product.title }
                  image={ product.thumbnail }
                  price={ product.price }
                />
              </Link>
              <button
                type="button"
                onClick={ () => { this.onSave(product); } }
                data-testid="product-add-to-cart"
              >
                Adicionar
              </button>

            </>
          ))}
        </div>
      </div>
    );
  }
}
