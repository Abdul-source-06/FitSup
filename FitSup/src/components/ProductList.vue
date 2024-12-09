<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <product-card 
      v-for="product in products" 
      :key="product.id" 
      :product="product"
      @add-to-cart="handleAddToCart"
    />
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default {
  name: 'ProductList',
  components: {
    ProductCard,
  },
  props: {
    products: Array,
  },
  methods: {
    handleAddToCart(product) {
      // Llamar a la función que añade el producto a la cesta
      this.$emit('add-to-cart', product);
    },
  },
};
</script>
