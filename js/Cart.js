"use strict";

class Cart {
  constructor(container = ".cart-list") {
    this.container = container;
    this.cartList = [];
    this.amount = 0;
    this.countGoods = 0;
    this._getCart().then((data) => {
      this.cartList = [...data.contents];
      this.totalPrice = data.amount;
      this.totalPrice = data.countGoods;
      this.render();
    });
  }

  _getCart() {
    return fetch(`${API}/getBasket.json`)
      .then((result) => result.json())
      .catch((error) => {
        console.log(error);
      });
  }

  /**
   * Получение списка товаров в корзине
   */
  getCartList() {
    return this.cartList;
  }

  /**
   * Добавляет продукт в корзину.
   * @param {int} productId id продукта
   */
  addToCart(productId) {
    let existIdex = this.cartList.findIndex((el) => el.id_product == productId);
    if (existIdex >= 0) {
      this.cartList[existIdex].quantity++;
    } else {
      // TODO
    }
    this.setTotalPrice();
    this.countGoods++;
  }

  /**
   * Удаляет продукт из корзины
   * @param {int} id идентификатор продукта
   */
  removeFromCart(id) {
    this.cartList.splice(
      this.cartList.findIndex((el) => el.id_product == id),
      1
    );
    this.render();
  }

  /**
   * Получает общую стоимость товаров в корзине
   */
  getTotalPrice() {
    return this.amount;
  }

  /**
   * Высчитывает общую стоимость корзины и записывает в свойство корзины
   */
  setTotalPrice() {
    return (this.amount = this.cartList.reduce(
      (accum, item) => (accum += item.price * item.quantity),
      0
    ));
  }

  /**
   * Отрисовывает корзину и добавляет событие нажатия на кнопку удаления
   */
  render() {
    const block = document.querySelector(this.container);
    block.innerHTML = "";
    for (let i = 0; i < this.cartList.length; i++) {
      const item = new CartItem(this.cartList[i]);
      block.insertAdjacentHTML("beforeend", item.render());
    }
    document.querySelectorAll(".remove-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        this.removeFromCart(btn.dataset.id);
      });
    });
  }
}

class CartItem {
  constructor(product) {
    this.id_product = product.id_product;
    this.product_name = product.product_name;
    this.price = product.price;
    this.quantity = product.quantity;
  }

  /**
   * Возвращает разметку для продукта в корзине
   */
  render() {
    return `<div class="cart-item">
				<h3>${this.product_name}</h3>
				<p>${this.price}</p>
				<p>${this.quantity}</p>
				<button class="remove-btn" data-id="${this.id_product}">Удалить</button>
			</div>`;
  }
}

let cart = new Cart();
