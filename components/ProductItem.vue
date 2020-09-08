<template>
  <div class="product-item">
    <img :src="product.image" alt="Some img" />
    <div class="desc">
      <h3>{{product.product_name}}</h3>
      <p>{{product.price}}</p>
      <button class="buy-btn" @click="$emit('add-product', product)">Купить</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>