<template>
  <div class="products">
    <product
      v-for="item of filtered"
      :key="item.id_product"
      :img="item.image"
      :product="item"
      @add-product="$parent.$refs.cart.addProduct"
    ></product>
  </div>
</template>

<script>
import product from "./ProductItem.vue";

export default {
  components: {
    product: product,
  },
  data() {
    return {
      catalogUrl: "/catalogData.json",
      filtered: [],
      products: [],
    };
  },
  mounted() {
    this.$parent.getJson(`/api/products`).then((data) => {
      for (let item of data) {
        this.$data.products.push(item);
        this.$data.filtered.push(item);
      }
    });
  },
  methods: {
    filter(userSearch) {
      let regexp = new RegExp(userSearch, "i");
      this.filtered = this.products.filter((el) =>
        regexp.test(el.product_name)
      );
    },
  },
};
</script>