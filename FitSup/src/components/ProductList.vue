<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <product-card 
        v-for="product in products" 
        :key="product.id" 
        :product="product"
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
  };
  </script>
