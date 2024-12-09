<template>
  <div class="container mx-auto py-8 px-4">
    <h1 class="text-4xl font-bold mb-8 text-center zoom-animation">¡Mejores Suplementos!</h1>
    
    <!-- Filtro de búsqueda -->
    <search-bar :searchQuery="searchQuery" @update:searchQuery="searchQuery = $event" />

    <!-- Lista de productos -->
    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
      <product-card 
        v-for="product in filteredProducts" 
        :key="product.id" 
        :product="product" 
        @product-clicked="openProductDetail" 
      />
    </div>

    <!-- Cuadro de detalles de producto (oculto inicialmente) -->
    <div v-if="selectedProduct" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-white p-6 rounded-lg max-w-md w-full">
        <h2 class="text-2xl font-semibold text-gray-800">{{ selectedProduct.name }}</h2>
        <img :src="selectedProduct.image" alt="Imagen de producto" class="w-full h-48 object-cover rounded-md mt-4" />
        <p class="text-gray-600 mt-4">{{ selectedProduct.description }}</p>
        <p class="font-bold text-gray-900 mt-2">${{ selectedProduct.price }}</p>
        
        <!-- Botón de compra -->
        <button @click="buyProduct" class="mt-4 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-200">
          Comprar
        </button>
        
        <!-- Botón de cerrar -->
        <button @click="closeProductDetail" class="mt-4 text-gray-500 hover:text-gray-700">
          Cerrar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import SearchBar from '@/components/SearchBar.vue';
import ProductCard from '@/components/ProductCard.vue';

export default {
  name: 'Home',
  components: {
    SearchBar,
    ProductCard,
  },
  setup() {
    const searchQuery = ref('');
    const products = ref([
      { id: 1, name: 'Proteína Whey', description: 'Proteína de alta calidad para crecimiento muscular.', price: 29.99, image: 'https://via.placeholder.com/150' },
      { id: 2, name: 'Creatina', description: 'Mejora el rendimiento físico y fuerza.', price: 19.99, image: 'https://via.placeholder.com/150' },
      { id: 3, name: 'BCAA', description: 'Aminoácidos de cadena ramificada para recuperación.', price: 15.99, image: 'https://via.placeholder.com/150' },
      { id: 4, name: 'Multivitaminas', description: 'Vitaminas esenciales para la salud general.', price: 12.99, image: 'https://via.placeholder.com/150' },
      { id: 5, name: 'Omega 3', description: 'Aceite de pescado para la salud cardiovascular.', price: 18.99, image: 'https://via.placeholder.com/150' },
      { id: 6, name: 'Glutamina', description: 'Recuperación muscular y prevención de catabolismo.', price: 24.99, image: 'https://via.placeholder.com/150' },
      { id: 7, name: 'Pre-entrenamiento', description: 'Energía y enfoque para tu entrenamiento.', price: 22.99, image: 'https://via.placeholder.com/150' },
      { id: 8, name: 'Caseína', description: 'Proteína de absorción lenta para la noche.', price: 34.99, image: 'https://via.placeholder.com/150' },
    ]);

    const selectedProduct = ref(null);
    
    // Filtro de productos según la búsqueda
    const filteredProducts = computed(() =>
      products.value.filter(product =>
        product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    );

    // Abrir cuadro de detalles del producto
    const openProductDetail = (product) => {
      selectedProduct.value = product;
    };

    // Cerrar cuadro de detalles del producto
    const closeProductDetail = () => {
      selectedProduct.value = null;
    };

    // Acción de compra
    const buyProduct = () => {
      alert(`Producto ${selectedProduct.value.name} comprado!`);
      closeProductDetail();
    };

    return {
      searchQuery,
      filteredProducts,
      selectedProduct,
      openProductDetail,
      closeProductDetail,
      buyProduct,
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
