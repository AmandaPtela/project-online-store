export async function getCategories() {
  const categorias = await fetch(
    'https://api.mercadolibre.com/sites/MLB/categories',
  )
    .then((response) => response.json())
    .then((categoria) => categoria);

  return categorias;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const products = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`,
  )
    .then((resp) => resp.json())
    .then((json) => json);
  return products;
}

export async function getProducts(id) {
  const categorias = await fetch(
    `https://api.mercadolibre.com/items/${id}`,
  )
    .then((response) => response.json())
    .then((produto) => produto);

  return categorias;
}
