<template>
  <div id="app">
    <header>
      <div class="logo">E-shop</div>
      <div class="cart">
        <filter-el></filter-el>
        <cart ref="cart"></cart>
      </div>
    </header>
    <main>
      <error ref="error"></error>
      <products ref="products"></products>
    </main>
  </div>
</template>

<script>
import filterEl from "./Filter.vue";
import products from "./Products.vue";
import cart from "./Cart.vue";
import error from "./Error.vue";

export default {
  components: {
    products: products,
    cart: cart,
    "filter-el": filterEl,
    error: error,
  },
  methods: {
    getJson(url) {
      return fetch(url)
        .then((result) => result.json())
        .catch((error) => {
          this.$refs.error.text = error;
        });
    },
    postJson(url, data) {
      return fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((result) => result.json())
        .catch((error) => {
          this.$refs.error.text = error;
        });
    },
    putJson(url, data) {
      return fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((result) => result.json())
        .catch((error) => {
          this.$refs.error.text = error;
        });
    },
    deleteJson(url) {
      return fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((result) => result.json())
        .catch((error) => {
          this.$refs.error.setError(error);
        });
    },
  },
};
</script>
