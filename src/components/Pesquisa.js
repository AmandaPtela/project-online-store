import React from 'react';
import ProductCard from './ProductCard';
import Button from './Button';
import '../App.css';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Pesquisa extends React.Component {
  state = {
    nameFilter: '',
    products: [],
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ nameFilter: value });
  };

  handleClick = async () => {
    const { nameFilter } = this.state;
    const response = await getProductsFromCategoryAndQuery(
      null,
      nameFilter,
    ).then((resp) => resp.results);
    this.setState({ products: response });
  };

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
          <Button />
        </div>
        <div>
          <h3 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h3>
          <div  className="produtosEncontrados">
            {products.map((product) => (
              <ProductCard
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
export default Pesquisa;
