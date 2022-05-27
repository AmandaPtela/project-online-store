import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Base from './components/Base';
import CardsInfo from './components/CardsInfo';
import Carrinho from './components/Carrinho';
import Checkout from './components/Checkout';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Base } />
          <Route exact path="/carrinho" component={ Carrinho } />
          <Route exact path="/checkout" component={ Checkout } />
          <Route exact path="/produto/:id" component={ CardsInfo } />
        </Switch>
      </BrowserRouter>
    );
  }
}
