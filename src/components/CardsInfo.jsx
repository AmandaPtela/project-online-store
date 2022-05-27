import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../services/api';
import Avaliacao from './Avaliacao';
import Button from './Button';

const CardsInfo = () => {
  const { id } = useParams();
  const [infosCards, setInfosCards] = useState({});
  const [todosCards, setTodosCards] = useState([]);

  const onSave = () => {
    setTodosCards([...todosCards, infosCards]);
  };

  useEffect(() => {
    const infos = async () => {
      setInfosCards(await getProducts(id).then());
    };
    infos();
    setTodosCards(JSON.parse(localStorage.getItem('infosCards')) || []);
  }, [id]);

  useEffect(() => {
    localStorage.setItem('infosCards', JSON.stringify(todosCards));
  }, [todosCards]);

  return (
    <>
      <Button />
      <div>
        <h1 data-testid="product-detail-name">{infosCards.title}</h1>
        <img height="180px" src={ infosCards.thumbnail } alt={ infosCards.title } />
        <h2>{`R$ ${infosCards.price}`}</h2>
        <button
          type="button"
          onClick={ onSave }
          data-testid="product-detail-add-to-cart"
        >
          Adicionar
        </button>
        <Avaliacao item={ infosCards.id } />
      </div>
    </>
  );
};

export default CardsInfo;
