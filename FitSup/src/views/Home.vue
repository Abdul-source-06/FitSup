<template>
  <div class="container mx-auto py-8 px-4">
    <h1 class="text-4xl font-bold mb-8 text-center zoom-animation">Mejores Suplementos!</h1>
    <search-bar :searchQuery="searchQuery" @update:searchQuery="searchQuery = $event" />
    <product-list :products="filteredProducts" />
  </div>

</template>

<script>
import { ref, computed } from 'vue';

import SearchBar from '@/components/SearchBar.vue';
import ProductList from '@/components/ProductList.vue';

export default {
  name: 'Home',
  components: {

    SearchBar,
    ProductList,
  },
  setup() {
    const searchQuery = ref('');
    const products = ref([
      { id: 1, name: 'Producto 1', description: 'Descripción del producto 1', price: 10.99, image: 'https://via.placeholder.com/150' },
      { id: 2, name: 'Producto 2', description: 'Descripción del producto 2', price: 12.99, image: 'https://via.placeholder.com/150' },
      { id: 3, name: 'Producto 3', description: 'Descripción del producto 3', price: 14.99, image: 'https://via.placeholder.com/150' },
      { id: 4, name: 'Producto 4', description: 'Descripción del producto 4', price: 8.99, image: 'https://via.placeholder.com/150' },
      { id: 5, name: 'Producto 5', description: 'Descripción del producto 5', price: 11.99, image: 'https://via.placeholder.com/150' },
      { id: 6, name: 'Producto 6', description: 'Descripción del producto 6', price: 9.99, image: 'https://via.placeholder.com/150' },
      { id: 7, name: 'Producto 7', description: 'Descripción del producto 7', price: 15.99, image: 'https://via.placeholder.com/150' },
      { id: 8, name: 'Producto 8', description: 'Descripción del producto 8', price: 13.99, image: 'https://via.placeholder.com/150' },
      { id: 9, name: 'Producto 9', description: 'Descripción del producto 9', price: 7.99, image: 'https://via.placeholder.com/150' },
      { id: 10, name: 'Producto 10', description: 'Descripción del producto 10', price: 6.99, image: 'https://via.placeholder.com/150' },
      { id: 11, name: 'Producto 11', description: 'Descripción del producto 11', price: 13.99, image: 'https://via.placeholder.com/150' },
      { id: 12, name: 'Producto 12', description: 'Descripción del producto 12', price: 40.99, image: 'https://via.placeholder.com/150' }
    ]);

    const filteredProducts = computed(() =>
      products.value.filter(product =>
        product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    );

    return {
      searchQuery,
      products,
      filteredProducts,
    };
  },
};
</script>

<style scoped>

@keyframes zoomInOut {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.zoom-animation {
  animation: zoomInOut 2s ease-in-out infinite;
}
</style>
