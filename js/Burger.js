'use strict';

class Burger {
  constructor(
    size = { type: 'big', price: 50, сalories: 20 },
    stuff = { type: 'cheese', price: 10, сalories: 20 }
  ) {
    this.size = size;
    this.stuff = stuff;
    this.toppingList = [];
    this.totalPrice = this.calcPrice();
    this.totalCalories = this.calcCalories();
  }

  /**
   * Меняет выбранный размер бургера
   * @param {object} size  объект размера бургера с названием, ценой и калорийностью
   */
  changeSize(size) {
    this.size = size;
  }

  /**
   * Меняет выбранную начинку бургера
   * @param {object} stuff объект начинки с названием, ценой и калорийностью
   */
  changeStuff(stuff) {
    this.stuff = stuff;
  }

  /**
   * Добавляет топпинг
   * @param {object} topping  объект добавки с названием, ценой и калорийностью
   */
  addTopping(topping) {
    this.toppingList.push(topping);
  }

  /**
   * Удаляет топпинг
   * @param {string} toppingName название добавки
   */
  removeTopping(toppingName) {
    for (let id = 0; id < this.toppingList.length; id++) {
      if (this.toppingList[id].type == toppingName) {
        this.toppingList.splice(id, 1);
      }
    }
  }

  /**
   * Вычисляет цену бургера
   */
  calcPrice() {
    let price = Number(this.size.price) + Number(this.stuff.price);
    for (let item of this.toppingList) {
      price += Number(item.price);
    }
    this.totalPrice = price;
    return this.totalPrice;
  }

  /**
   * Вычисляет калорийность бургера
   */
  calcCalories() {
    let calories = Number(this.size.сalories) + Number(this.stuff.сalories);
    for (let item of this.toppingList) {
      calories += Number(item.сalories);
    }
    this.totalCalories = calories;
    return this.totalCalories;
  }
}

let burger = new Burger();
