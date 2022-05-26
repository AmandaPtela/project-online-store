import React, { useEffect, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Carrinho = () => {
  const [lista, setLista] = useState([]);
  const [total, setTotal] = useState([]);
  const [contagem, setContagem] = useState(0);
  const [local, setLocal] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const verificaIgualdade = (cards) => {
    const novaLista = [];
    cards.forEach((card) => {
      const cardString = JSON.stringify(card);
      novaLista.push(cardString);
    });
    const arrUnique = [...new Set(novaLista)];

    const listaJSON = [];
    arrUnique.forEach((item) => {
      const arrUniqueObj = JSON.parse(item);
      listaJSON.push(arrUniqueObj);
    });
    setTotal(listaJSON);
    setContagem(cards.length);
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('infosCards'))) {
      const cards = JSON.parse(localStorage.getItem('infosCards'));
      verificaIgualdade(cards);
      setLista(cards);
      setContagem(cards.length);
    }
  }, []);

  useEffect(() => {
    setLocal(JSON.parse(localStorage.getItem('infosCards')));
    const numero = 1;
    if (contagem === numero) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [contagem]);

  const retornaValor = (item) => {
    const valor = local.filter((card) => card.id === item);
    return valor.length;
  };

  const handleClickMenos = (item) => {
    const cards = JSON.parse(localStorage.getItem('infosCards'));
    const newCard = cards.findIndex((card) => card.id === item);
    cards.splice(newCard, 1);
    setLista(cards);
    verificaIgualdade(cards);
    localStorage.setItem('infosCards', JSON.stringify(cards));
    setContagem(cards.length);
  };

  const handleClickMais = (item) => {
    const cards = JSON.parse(localStorage.getItem('infosCards'));
    const newCard = [...cards, item];
    setLista(newCard);
    verificaIgualdade(newCard);
    localStorage.setItem('infosCards', JSON.stringify(newCard));
    setContagem(newCard.length);
  };

  return (
    <>
      <p>{contagem}</p>
      <div>
        {lista.length !== 0 ? (
          <div>
            {total.map((item) => (
              <>
                <h1 key={ item.id } data-testid="shopping-cart-product-name">
                  {item.title}
                </h1>
                <img height="180px" src={ item.thumbnail } alt={ item.title } />
                <button
                  type="button"
                  data-testid="product-increase-quantity"
                  onClick={ () => {
                    handleClickMais(item);
                  } }
                >
                  +
                </button>
                <p data-testid="shopping-cart-product-quantity">
                  {retornaValor(item.id)}
                </p>
                <button
                  type="button"
                  data-testid="product-decrease-quantity"
                  disabled={ disabled }
                  onClick={ () => {
                    handleClickMenos(item.id);
                  } }
                >
                  -
                </button>
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
