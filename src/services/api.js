export async function getCategories() {
  const categorias = await fetch(
    'https://api.mercadolibre.com/sites/MLB/categories',
  )
    .then((response) => response.json())
    .then((categoria) => categoria);

  return categorias;
}
// Para buscar por itens por termo:
// https://api.mercadolibre.com/sites/MLB/search?q=$QUERY

// Para buscar itens por categoria:
// https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID

// Para buscar itens de uma categoria por termo
// https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY

// Para buscar detalhes de um item especifico:
// https://api.mercadolibre.com/items/$PRODUCT_ID

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const products = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`,
  )
    .then((resp) => resp.json())
    .then((json) => json.results);
  return products;
}
