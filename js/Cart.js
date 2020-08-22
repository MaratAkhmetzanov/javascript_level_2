"use strict";

class Cart {
  constructor(container = ".cart-list") {
    this.container = container;
    this.cartList = [
      {
        id_product: 123,
        product_name: "Ноутбук",
        price: 45600,
        quantity: 1,
      },
      {
        id_product: 123,
        product_name: "Ноутбук",
        price: 45600,
        quantity: 1,
      },
    ];
    this.totalPrice = this.totalPriceCalc();
  }

  /**
   * Добавляет продукт в корзину.
   * @param {Object} product объект продукта
   */
  addToCart(product) {
    this.cartList.push(product);
  }

  /**
   * Удаляет продукт из корзины
   * @param {int} id идентификатор продукта
   */
  removeFromCart(id) {
    this.cartList.splice(id, 1);
    this.render();
  }

  /**
   * Очищает корзину
   */
  clearCart() {
    this.cartList = [];
    this.render();
  }

  /**
   * Высчитывает общую стоимость корзины и записывает в свойство корзины
   */
  totalPriceCalc() {
    this.totalPrice = 0;
    this.cartList.forEach((item) => {
      this.totalPrice += item.price;
    });
  }

  /**
   * Отрисовывает корзину и добавляет событие нажатия на кнопку удаления
   */
  render() {
    const block = document.querySelector(this.container);
    console.log(block);
    block.innerHTML = "";
    for (let i = 0; i < this.cartList.length; i++) {
      const item = new CartItem(this.cartList[i], i);
      block.insertAdjacentHTML("beforeend", item.render());
    }
    console.log(block.innerHTML);
    document.querySelectorAll(".remove-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        this.removeFromCart(btn.dataset.id);
      });
    });
  }
}

class CartItem {
  constructor(product, id, img = "https://placehold.it/200x150") {
    this.img = img;
    this.id = product.id_product;
    this.title = product.product_name;
    this.price = product.price;
    this.itemId = id;
  }

  /**
   * Возвращает разметку для продукта в корзине
   */
  render() {
    return `<div class="cart-item">
				<img src="${this.img}">
				<h3>${this.title}</h3>
				<p>${this.price}</p>
				<button class="remove-btn" data-id="${this.itemId}">Удалить</button>
			</div>`;
  }
}

let cart = new Cart();
cart.render();
