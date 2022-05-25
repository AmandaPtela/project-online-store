import React, { Component } from 'react';
import '../App.css';
import { getCategories } from '../services/api';

export default class Category extends Component {
  state = {
    categorias: [],
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
    const { value } = evento.target;
    console.log(value);
  };

  render() {
    const { categorias, isChecked } = this.state;
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
            />
            {categoria.name}
          </label>
        ))}
      </div>
    );
  }
}
