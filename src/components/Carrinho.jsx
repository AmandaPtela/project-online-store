import React, { useEffect, useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Carrinho = () => {
  const [lista, setLista] = useState([]);
  const [total, setTotal] = useState([]);
  const [contagem, setContagem] = useState(0);
  const [local, setLocal] = useState([]);

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
      setLocal(JSON.parse(localStorage.getItem('infosCards')));
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
      <p className="contagem">{`TOTAL: ${contagem} PRODUTOS`}</p>
      <Link className="linkPagina" to="/">
        <AiFillHome />
      </Link>
      <div>
        {lista.length !== 0 ? (
          <>
            <div className="carrinho">
              {total.map((item) => (
                <div key={ item.id }>
                  <h1
                    data-testid="shopping-cart-product-name"
                    className="titulo"
                  >
                    {item.title}
                  </h1>
                  <img height="180px" src={ item.thumbnail } alt={ item.title } />
                  <div className="butoesCarrinho">
                    <button
                      className="butaoCarrinho butaoCarrinho__verde"
                      type="button"
                      data-testid="product-increase-quantity"
                      onClick={ () => {
                        handleClickMais(item);
                      } }
                    >
                      +
                    </button>
                    <p
                      className="quantidade"
                      data-testid="shopping-cart-product-quantity"
                    >
                      {`${retornaValor(item.id)}`}
                    </p>
                    <button
                      className="butaoCarrinho butaoCarrinho__vermelho"
                      type="button"
                      data-testid="product-decrease-quantity"
                      disabled={ retornaValor(item.id) === 1 }
                      onClick={ () => {
                        handleClickMenos(item.id);
                      } }
                    >
                      -
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/checkout">
              <button type="button" data-testid="checkout-products">
                Checkout
                {' '}
                <FiShoppingCart />
              </button>
            </Link>
          </>
        ) : (
          <h1 data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </h1>
        )}
      </div>
    </>
  );
};

export default Carrinho;
