import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Base from './components/Base';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Base } />
        </Switch>
      </BrowserRouter>
    );
  }
}
