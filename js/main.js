const products = [
  { id: 1, title: 'Notebook', price: 2000 },
  { id: 2, title: 'Mouse', price: 20 },
  { id: 3, title: 'Keyboard', price: 200 },
  { id: 4, title: 'Gamepad', price: 50 },
  { id: 5, price: 50 },
  { id: 6 },
];

/**
 * Функция для формирования вёрстки каждого товара.
 * @param {string} title название товара;
 * @param {number} price цена товара.
 */
const renderProduct = (title = 'Без названия', price = 'n/a') => {
  return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`;
};

/**
 * Для каждого элемента массива, запускает функцию renderProduct.
 * @param {array} products список товаров, которые нужно добавить на страницу.
 */
const renderPage = (products) => {
  document.querySelector('.products').innerHTML = products
    .map((item) => renderProduct(item.title, item.price))
    .join('');
};

renderPage(products);
