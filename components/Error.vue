<template>
  <div class="error-block" v-if="isVisible">
    <p class="error-msg">
      <button class="close-btn" @click="text=''">&times;</button>
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ''
    };
  },
  computed: {
    isVisible() {
      return this.text !== '';
    }
  }
}
</script>