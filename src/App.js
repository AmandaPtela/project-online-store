import React from 'react';
import { Router } from 'react-router-dom';
import './App.css';
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
