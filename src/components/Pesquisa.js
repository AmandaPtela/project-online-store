import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import '../App.css';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Pesquisa extends React.Component {
  state = {
    nameFilter: '',
    products: [],
  };

  handleClick = async () => {
    const { nameFilter } = this.state;
    const { valorInput } = this.props;
    const response = await getProductsFromCategoryAndQuery(
      valorInput,
      nameFilter,
    ).then((resp) => resp.results);
    this.setState({ products: response });
    console.log(valorInput);
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ nameFilter: value });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <div>
          <input
            data-testid="query-input"
            type="text"
            className="campoBusca"
            onChange={ this.handleChange }
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.handleClick }
          >
            Pesquisar
          </button>
        </div>
        <div>
          <h3 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h3>
          <div className="produtosEncontrados">
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
      </div>
    );
  }
}

Pesquisa.propTypes = {
  valorInput: PropTypes.string.isRequired,
};

export default Pesquisa;
