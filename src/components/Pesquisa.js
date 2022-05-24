import React from 'react';

class Pesquisa extends React.Component {
  render() {
    return (
      <div>
        <input type="text" className="campoBusca" />
        <div className="produtosEncontrados">
          <h3 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h3>
        </div>
      </div>
    );
  }
}
export default Pesquisa;
