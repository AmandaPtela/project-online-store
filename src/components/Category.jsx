import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

export default class Category extends Component {
  state = {
    categorias: [],
    valorCategoria: '',
  };

  componentDidMount() {
    this.categorias();
  }

  componentDidUpdate(prevState) {
    const { valorCategoria } = this.state;
    if (valorCategoria !== prevState.valorCategoria) {
      this.categorias();
    }
  }

  categorias = async () => {
    // const { categorias } = this.state;
    const categories = await getCategories().then();
    this.setState({ categorias: categories });
  };

  handleCategory = (evento) => {
    const { guardarValorInput } = this.props;
    const { valorCategoria } = this.state;
    // const { value } = evento.target;
    const { id } = evento.target;
    this.setState({ valorCategoria: id });
    guardarValorInput(valorCategoria);
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

Category.propTypes = {
  guardarValorInput: PropTypes.func.isRequired,
};
