import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const FormRender = ({ id }) => {
  const [objeto, setObjeto] = useState([]);

  useEffect(() => {
    const verificaIgualdade = () => {
      const data = [...JSON.parse(localStorage.getItem('avaluation')) || []];
      const existe = data.filter((item) => item.id === id);
      setObjeto(existe);
    };
    verificaIgualdade();
  }, [id]);

  return (
    <div>
      {objeto.length !== 0 && objeto.map((item) => (
        <div key={ item.id }>
          <p>{item.email}</p>
          <p>{item.avaluation}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

FormRender.propTypes = {
  id: PropTypes.string.isRequired,
};

export default FormRender;
