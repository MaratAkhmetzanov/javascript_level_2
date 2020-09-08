import filterEl from './FilterComp.js';

const app = new Vue({
  el: '#app',
  components: {
    'products': products,
    'cart': cart,
    'filter-el': filterEl,
    'error': error
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
