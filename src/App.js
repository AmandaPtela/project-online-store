import React from 'react';
import './App.css';
import Router from './Router';
// import {getCategories, getProductsFromCategoryAndQuery} from './services/api';

// console.log(getCategories().then(resp => console.log(resp)))
// console.log(getProductsFromCategoryAndQuery().then(resp => console.log(resp)))

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
