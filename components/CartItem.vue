<template>
  <div class="cart-item">
    <div class="product-bio">
      <img :src="cartItem.image2" alt="Some img" />
      <div class="product-desc">
        <div class="product-title">{{ cartItem.product_name }}</div>
        <div class="product-quantity">Quantity: {{ cartItem.quantity }}</div>
        <div class="product-single-price">$ {{ cartItem.price }} each</div>
      </div>
    </div>
    <div class="right-block">
      <div class="product-price">{{cartItem.quantity*cartItem.price}}</div>
      <button class="del-btn" @click="$emit('remove', cartItem)">&times;</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cartItem"],
};
</script>