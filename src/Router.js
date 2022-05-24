import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Base from './components/Base';
import Carrinho from './components/Carrinho';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Base } />
          <Route exact path="/carrinho" component={ Carrinho } />
        </Switch>
      </BrowserRouter>
    );
  }
}
