<template>
  <div 
    class="relative bg-white p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 transform transition duration-300"
    @click="handleClick"
  >
    <img 
      :src="product.image" 
      :alt="product.name" 
      class="w-full h-48 object-cover rounded-md mb-4" 
    />
    <h2 class="text-xl font-semibold text-gray-800">{{ product.name }}</h2>
    <p class="text-gray-600 mb-2">{{ product.description }}</p>
    <p class="font-bold text-gray-900">${{ product.price }}</p>

    <!-- Botón para añadir a la cesta -->
    <button 
      @click="addToCart" 
      class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4"
    >
      Añadir a la cesta
    </button>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: Object,
  },
  methods: {
    handleClick() {
      // Emitir evento hacia el componente principal (Home)
      this.$emit('product-clicked', this.product);
    },

    addToCart() {
      // Emitir el evento al componente padre para agregar el producto a la cesta
      this.$emit('add-to-cart', this.product);
    },
  },
};
</script>
