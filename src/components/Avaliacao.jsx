import React from 'react';
import PropTypes from 'prop-types';
import FormRender from './FormRender';

const Avaliacao = ({ item }) => {
  const [objeto, setObjeto] = React.useState({
    userEmail: '',
    avaluation: 0,
    userDescription: '',
    id: item,
  });

  const onInputChange = ({ target }) => {
    const { value, name } = target;
    setObjeto({ ...objeto, [name]: value });
  };

  const sendAvaluation = () => {
    const data = {
      email: objeto.userEmail,
      avaluation: objeto.avaluation,
      description: objeto.userDescription,
      id: item,
    };
    const existe = JSON.parse(localStorage.getItem('avaluation')) || [];
    const infos = [...existe, data];
    localStorage.setItem('avaluation', JSON.stringify(infos));
  };

  return (
    <>
      <section>
        <div>
          <div>
            <input
              type="email"
              value={ objeto.userEmail }
              name="userEmail"
              data-testid="product-detail-email"
              placeholder="Seu e-mail"
              onChange={ onInputChange }
            />
            <input
              type="radio"
              name="avaluation"
              value="1"
              data-testid="1-rating"
              onChange={ onInputChange }
            />
            <input
              type="radio"
              name="avaluation"
              value="2"
              data-testid="2-rating"
              onChange={ onInputChange }
            />
            <input
              type="radio"
              name="avaluation"
              value="3"
              data-testid="3-rating"
              onChange={ onInputChange }
            />
            <input
              type="radio"
              name="avaluation"
              value="4"
              data-testid="4-rating"
              onChange={ onInputChange }
            />
            <input
              type="radio"
              name="avaluation"
              value="5"
              data-testid="5-rating"
              onChange={ onInputChange }
            />
          </div>
          <div>
            <textarea
              id="userDescription"
              name="userDescription"
              rows="5"
              cols="33"
              value={ objeto.userDescription }
              onChange={ onInputChange }
              data-testid="product-detail-evaluation"
            />
          </div>
          <button
            type="button"
            data-testid="submit-review-btn"
            onClick={ sendAvaluation }
          >
            Enviar Avaliação
          </button>
        </div>
      </section>
      <section>
        <FormRender id={ item } />
      </section>

    </>
  );
};

Avaliacao.propTypes = {
  item: PropTypes.string.isRequired,
};

export default Avaliacao;
