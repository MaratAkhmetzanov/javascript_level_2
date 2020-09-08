import products from './mywebpack/modules/ProductComponent.js';
import cart from './mywebpack/modules/CartComponent.js';

const app = new Vue({
  el: '#app',
  components: {
    'products': products,
    'cart': cart
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
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then((result) => result.json())
        .catch((error) => {
          this.$refs.error.text = error;
        });
    },
    putJson(url, data) {
      return fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then((result) => result.json())
        .catch((error) => {
          this.$refs.error.text = error;
        });
    }
  }
});
