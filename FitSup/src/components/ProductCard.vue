<template>
    <div class="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col items-center">
      <img :src="product.image" alt="product image" class="w-24 h-24 object-cover mb-4 rounded-lg">
      <h2 class="text-lg font-semibold mb-1 text-center">{{ product.name }}</h2>
      <p class="text-gray-700 mb-2 text-sm text-center">{{ product.description }}</p>
      <div class="text-lg font-bold text-center">{{ product.price | currency }}</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductCard',
    props: {
      product: Object,
    },
    filters: {
      currency(value) {
        return '$' + parseFloat(value).toFixed(2);
      },
    },
  };
  </script>
  
  <style scoped>

  </style>
  