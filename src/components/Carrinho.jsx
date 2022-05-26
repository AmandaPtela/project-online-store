import React, { useEffect, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Carrinho = () => {
  const [lista, setLista] = useState([]);
  const [contagem, setContagem] = useState(0);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('infosCards'))) {
      const cards = JSON.parse(localStorage.getItem('infosCards'));
      setLista(cards);
      setContagem(cards.length);
    }
  }, []);

  return (
    <>
      <div data-testid="shopping-cart-product-quantity">
        {contagem}
      </div>
      <div>
        {lista.length !== 0 ? (
          <div>
            {lista.map((item) => (
              <>
                <h1 key={ item.id } data-testid="shopping-cart-product-name">
                  {item.title}
                </h1>
                <img height="180px" src={ item.thumbnail } alt={ item.title } />
              </>
            ))}
          </div>
        ) : (
          <h1 data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </h1>
        )}
        <Link to="/">Pagina Inicial</Link>
      </div>

    </>
  );
};

export default Carrinho;
