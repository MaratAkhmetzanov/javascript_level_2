<template>
  <div>
    <button class="btn-cart" type="button" @click="showCart = !showCart">Корзина</button>
    <div class="cart-block" v-show="showCart">
      <cart-item
        v-for="item of cartItems"
        :key="item.id_product"
        :img="item.image2"
        :cart-item="item"
        @remove="remove"
      ></cart-item>
    </div>
  </div>
</template>

<script>
import cartItem from "./CartItem.vue";

export default {
  components: {
    "cart-item": cartItem,
  },
  data() {
    return {
      cartUrl: "/getBasket.json",
      cartItems: [],
      showCart: false,
    };
  },
  mounted() {
    this.$parent.getJson(`/api/cart`).then((data) => {
      for (let item of data.contents) {
        this.$data.cartItems.push(item);
      }
    });
  },
  methods: {
    addProduct(item) {
      let find = this.cartItems.find((el) => el.id_product === item.id_product);
      if (find) {
        this.$parent
          .putJson(`/api/cart/${find.id_product}`, { quantity: 1 })
          .then((data) => {
            if (data.result === 1) {
              find.quantity++;
            }
          });
      } else {
        const prod = Object.assign({ quantity: 1 }, item);
        this.$parent.postJson(`/api/cart`, prod).then((data) => {
          if (data.result === 1) {
            this.cartItems.push(prod);
          }
        });
      }
    },
    remove(item) {
      if (item.quantity > 1) {
        this.$parent
          .putJson(`/api/cart/${item.id_product}`, { quantity: -1 })
          .then((data) => {
            if (data.result === 1) {
              item.quantity--;
            }
          });
      } else {
        this.$parent.deleteJson(`/api/cart/${item.id_product}`).then((data) => {
          if (data.result === 1) {
            this.cartItems.splice(this.cartItems.indexOf(item), 1);
          }
        });
      }
    },
  },
};
</script>