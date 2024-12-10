<template>
  <div 
    class="relative bg-white p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 transform transition duration-300"
    @click="handleClick"
  >
    <img 
      :src="product.image" 
      :alt="product.name" 
      class="w-[50%] h-auto object-cover rounded-md mb-4" 
    />
    <h2 class="text-xl font-semibold text-black">{{ product.name }}</h2>
    <p class="text-gray-600 mb-2">{{ product.description }}</p>
    <p class="font-bold text-gray-900">${{ product.price }}</p>



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
