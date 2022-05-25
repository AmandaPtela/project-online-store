import * as React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { name, image, price } = this.props;
    return (
      <li data-testid="product">
        <h3>{ name }</h3>
        <img height="180px" src={ image } alt={ price } />
        <span>{price}</span>
      </li>
    );
  }
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
